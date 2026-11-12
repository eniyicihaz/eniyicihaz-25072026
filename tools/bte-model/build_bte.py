# Generic (unbranded) behind-the-ear (BTE) hearing aid — procedural model for the website's 3D viewer.
#
# The device is an original design: it is not a copy of any manufacturer's product and carries no text, logo or
# brand mark. Parts: two-piece housing, battery door (nail grip, hinge pin), volume rocker, programme button, two
# microphone openings, metal collar, clear ear hook, clear sound tube, skeleton ear mould (sound bore + vent).
#
# Run (Blender 4.5 LTS; the portable zip is enough, nothing needs installing):
#   blender -b --factory-startup -P build_bte.py -- --out <dir> --export bte-raw.glb
#   blender -b --factory-startup -P build_bte.py -- --out <dir> --render [--views outer,front,c_spine,...] [--res 640]
# Then compress the export for the web with optimize.mjs (same folder).
#
# Everything is built from a few curves and profile tables (units: millimetres), so the shape is tuned by editing
# the numbers in the PARAMETERS block. No external assets and no textures are used.
#
# Axes while modelling (worn pose; with these axes the device is a left-ear one):
#   X = anterior (towards the face)   Y = lateral (away from the head)   Z = up
# The export is in metres, +Y up, centred on the bounding box (glTF convention).
import bpy, bmesh, sys, os, math, time
import numpy as np

T0 = time.time()
ARGS = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []


def arg(name, default=None):
    if name in ARGS:
        i = ARGS.index(name)
        return ARGS[i + 1] if i + 1 < len(ARGS) and not ARGS[i + 1].startswith("--") else True
    return default


OUT = arg("--out", os.path.dirname(os.path.abspath(__file__)))
os.makedirs(OUT, exist_ok=True)


def log(*a):
    print("[bte %6.1fs]" % (time.time() - T0), *a, flush=True)


# ======================================================================================================== PARAMETERS
# Centre line of body + ear hook in the X–Z plane (Y = 0). Index J is where the body ends and the hook begins.
MASTER = [
    (0.30, 0, -1.50),  # bottom pole of the battery door
    (-0.20, 0, 3.60),
    (-0.85, 0, 9.60),
    (-0.90, 0, 15.80),
    (0.05, 0, 21.70),
    (2.45, 0, 27.00),
    (5.60, 0, 31.00),
    (8.40, 0, 33.50),  # J — top of the body (hook nozzle)
    (11.80, 0, 35.95),
    (15.40, 0, 36.90),  # apex of the hook
    (19.00, 0, 35.90),
    (21.80, 0, 33.30),
    (23.40, 0, 29.80),
    (23.90, 0, 26.20),  # hook tip
]
J_INDEX = 7

# Body cross-section along the centre line; t = arc length / body length. a = half depth (front–back, in the X–Z
# plane), b = half thickness (Y), n = superellipse exponent (2 = ellipse, larger = squarer), ft = how much thinner
# the ear-facing (front) edge is than the spine.
PROF_T = [0.00, 0.12, 0.28, 0.45, 0.62, 0.80, 0.92, 1.00]
PROF_A = [5.20, 5.75, 5.60, 4.95, 4.20, 3.55, 3.15, 3.00]
PROF_B = [3.75, 3.95, 3.95, 3.80, 3.55, 3.25, 3.05, 3.00]
PROF_N_T = [0.0, 0.30, 0.60, 0.85, 1.0]
PROF_N = [2.7, 2.7, 2.5, 2.2, 2.0]
PROF_FT_T = [0.0, 0.50, 0.85, 1.0]
PROF_FT = [0.14, 0.14, 0.06, 0.0]
CAP_LEN = 5.6  # length of the rounded bottom end (mm of centre line)
CAP_P = 2.5  # roundness of the bottom end (2 = elliptical, larger = flatter bottom)

GAP = 0.10  # visible width of the parting lines
FILLET = 0.07  # edge rounding next to a parting line
WALL = 0.42  # depth of the parting-line groove
ROLL_K = 3  # fillet segments

# Battery-door parting line: arc length (mm from the bottom pole) as a function of the angle around the body.
DOOR_L0 = 11.2
DOOR_DL = 2.3  # front (phi = 0) is DOOR_L0 - DOOR_DL, spine (phi = pi) is DOOR_L0 + DOOR_DL

# Controls on the spine (phi = pi). Positions are arc length along the centre line (mm).
ROCKER = dict(l=22.0, half_len=3.3, half_w=1.3)
BUTTON = dict(l=30.6, r=1.2)
MICS = [dict(l=27.3, half_len=0.80, half_w=0.27), dict(l=34.6, half_len=0.80, half_w=0.27)]
CTRL_GAP = 0.09

COLLAR_GAP = 0.10
COLLAR_LEN = 0.95
COLLAR_R = 2.82

# Ear hook radius along its own arc length (mm from the hook base).
HOOK_R_S = [0.0, 2.5, 7.0, 13.0]
HOOK_R = [3.00, 2.72, 2.30, 1.95]
HOOK_SHOULDER = 3.2  # the last part of the hook is the nub the tube is pushed over
HOOK_SHOULDER_R = 1.60
NUB_NECK_R = 1.22
NUB_BARB_R = 1.42
NUB_TIP_R = 1.15

TUBE_R = 1.59  # outer radius of the sound tube (standard tubing is about 3.2 mm outside diameter)
# Tube path after the hook tip: (x, y, z). It drops in front of the ear and turns in to the ear canal.
TUBE_PATH = [
    (24.05, 0.40, 23.0),
    (24.30, 1.80, 20.0),
    (24.55, 3.50, 17.2),
    (24.65, 4.30, 14.6),  # most lateral point; the elbow into the ear mould starts here
    (24.78, 3.84, 12.80),
    (24.90, 2.60, 11.56),
    (25.02, 0.90, 11.10),  # now heading straight into the ear canal (towards -Y)
    (25.40, -2.30, 11.22),
    (25.80, -4.60, 11.45),
    (26.05, -6.20, 11.62),  # end of the tube inside the canal part of the mould
]

# Ear mould (skeleton type): a rim that sits in the bowl of the outer ear plus the canal part that carries the tube.
# It is modelled as a distance field (see build_mould_sdf), which gives soft, organic blends between its parts.
MOULD_CANAL_DROP = 0.55  # the canal part is centred this far below the tube so that a vent fits under the bore
MOULD_CANAL_S = [0.0, 0.18, 0.45, 0.75, 1.0]  # along the canal axis (0 = lateral end, 1 = tip)
MOULD_CANAL_RV = [4.05, 3.95, 3.60, 3.25, 3.05]  # vertical half size
MOULD_CANAL_RH = [3.35, 3.25, 2.85, 2.50, 2.32]  # front–back half size
MOULD_TIP_EXTRA = 2.1  # how far the canal tip reaches beyond the end of the tube
MOULD_VOXEL = 0.15
MOULD_ADAPT = 0.0  # OpenVDB's own simplification while extracting the surface (it gave ragged edges; kept off)
MOULD_DECIMATE = 0.18  # share of triangles kept by Blender's collapse decimation of the mould (checked at 2× zoom)
VENT_R = 0.55
VENT_DROP = 2.55  # vent axis below the tube axis

# Outline of the mould seen from the side (X, Z): it follows the bowl of the outer ear. Going round: tragus side
# (front, where the canal part is) -> notch for the root of the helix -> helix lock -> top -> back -> bottom.
MOULD_OUTLINE = [
    (24.4, 5.0),
    (26.6, 7.4),
    (27.9, 11.0),
    (27.3, 14.3),
    (25.4, 15.9),
    (22.6, 15.0),
    (20.6, 14.7),
    (20.3, 16.4),
    (21.6, 17.7),
    (22.5, 19.4),  # tip of the helix lock
    (21.6, 21.0),
    (19.2, 21.8),
    (16.2, 21.2),
    (13.6, 19.0),
    (12.1, 15.4),
    (11.6, 11.3),
    (12.4, 7.3),
    (14.8, 4.3),
    (18.4, 2.8),
    (21.8, 3.1),
]
MOULD_Y0 = 0.35  # lateral position of the middle of the rim
MOULD_TILT = 0.10  # the back of the rim sits a little further out than the front (mm per mm)
MOULD_LOCK_DIP = 1.4  # the helix lock tucks in towards the head
MOULD_T_LAT = 2.2  # rim extent towards the outside
MOULD_T_MED = 1.9  # rim extent towards the head
MOULD_EDGE_R = 1.05  # rounding of the rim edges
MOULD_RIM = 2.75  # rim width; everything further inside is cut away (skeleton mould)
MOULD_KEEP_R = 5.4  # solid zone around the canal part
MOULD_BLEND = 1.3  # fillet where canal part and rim meet
MOULD_NOISE = 0.07  # organic irregularity (mm)

# ========================================================================================================== NUMERICS
Y_AXIS = np.array([0.0, 1.0, 0.0])


class Spline:
    """Natural cubic spline through (x_i, y_i); y may be (n,) or (n, k)."""

    def __init__(self, x, y):
        x = np.asarray(x, float)
        y = np.asarray(y, float)
        self.scalar = y.ndim == 1
        if self.scalar:
            y = y[:, None]
        n = len(x)
        h = np.diff(x)
        A = np.zeros((n, n))
        r = np.zeros((n, y.shape[1]))
        A[0, 0] = A[-1, -1] = 1.0
        for i in range(1, n - 1):
            A[i, i - 1] = h[i - 1]
            A[i, i] = 2 * (h[i - 1] + h[i])
            A[i, i + 1] = h[i]
            r[i] = 6 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])
        self.x, self.y, self.h, self.m = x, y, h, np.linalg.solve(A, r)

    def _seg(self, xq):
        xq = np.asarray(xq, float)
        i = np.clip(np.searchsorted(self.x, xq, side="right") - 1, 0, len(self.x) - 2)
        return xq, i

    def __call__(self, xq):
        xq, i = self._seg(xq)
        h = self.h[i][..., None]
        a = (self.x[i + 1] - xq)[..., None]
        b = (xq - self.x[i])[..., None]
        v = (self.m[i] * a**3 + self.m[i + 1] * b**3) / (6 * h) + (self.y[i] / h - self.m[i] * h / 6) * a + (self.y[i + 1] / h - self.m[i + 1] * h / 6) * b
        return v[..., 0] if self.scalar else v

    def d(self, xq):
        xq, i = self._seg(xq)
        h = self.h[i][..., None]
        a = (self.x[i + 1] - xq)[..., None]
        b = (xq - self.x[i])[..., None]
        v = (-self.m[i] * a**2 + self.m[i + 1] * b**2) / (2 * h) - (self.y[i] / h - self.m[i] * h / 6) + (self.y[i + 1] / h - self.m[i + 1] * h / 6)
        return v[..., 0] if self.scalar else v


class Curve:
    """Smooth 3D curve through control points, addressed by arc length (mm)."""

    def __init__(self, pts, n=6000):
        pts = np.asarray(pts, float)
        s = np.concatenate([[0.0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
        self.knots = s
        self.sp = Spline(s, pts)
        sq = np.linspace(0, s[-1], n)
        P = self.sp(sq)
        L = np.concatenate([[0.0], np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=1))])
        self.sq, self.L, self.length = sq, L, L[-1]

    def len_at_knot(self, i):
        return float(np.interp(self.knots[i], self.sq, self.L))

    def s_at(self, l):
        return np.interp(l, self.L, self.sq)

    def pos(self, l):
        return self.sp(self.s_at(l))

    def tan(self, l):
        d = self.sp.d(self.s_at(l))
        return d / np.linalg.norm(d, axis=-1, keepdims=True)


def unit(v):
    n = np.linalg.norm(v, axis=-1, keepdims=True)
    return v / np.where(n < 1e-12, 1.0, n)


def rmf_frames(P):
    """Rotation-minimising frames along a polyline P (m, 3). Returns T, N, B."""
    m = len(P)
    T = unit(np.gradient(P, axis=0))
    N = np.zeros_like(P)
    ref = Y_AXIS if abs(T[0] @ Y_AXIS) < 0.9 else np.array([1.0, 0, 0])
    N[0] = unit(np.cross(np.cross(T[0], ref), T[0]))
    for i in range(m - 1):
        v1 = P[i + 1] - P[i]
        c1 = v1 @ v1
        rL = N[i] - (2 / c1) * (v1 @ N[i]) * v1
        tL = T[i] - (2 / c1) * (v1 @ T[i]) * v1
        v2 = T[i + 1] - tL
        c2 = v2 @ v2
        N[i + 1] = rL - (2 / c2) * (v2 @ rL) * v2 if c2 > 1e-18 else rL
    N = unit(N)
    B = np.cross(T, N)
    return T, N, B


# ============================================================================================================== BODY
CL = Curve(MASTER)
LB = CL.len_at_knot(J_INDEX)  # body length along the centre line
LTOT = CL.length
_sa, _sb = Spline(PROF_T, PROF_A), Spline(PROF_T, PROF_B)


def prof_n(t):
    return np.interp(t, PROF_N_T, PROF_N)


def prof_ft(t):
    return np.interp(t, PROF_FT_T, PROF_FT)


def cap_k(l, inset=0.0):
    u = np.clip((np.asarray(l, float) - inset) / (CAP_LEN - inset), 0.0, 1.0)
    return (1.0 - (1.0 - u) ** CAP_P) ** (1.0 / CAP_P)


def body_frame(l):
    C = CL.pos(l)
    T = CL.tan(l)
    N = np.stack([T[..., 2], np.zeros_like(T[..., 0]), -T[..., 0]], -1)  # in-plane normal, points to the front
    return C, T, N


def body_surf(l, phi, inset=0.0):
    """Point on the body surface. l = arc length along the centre line, phi = angle (0 front, pi spine, pi/2 +Y)."""
    l, phi = np.broadcast_arrays(np.asarray(l, float), np.asarray(phi, float))
    t = np.clip(l / LB, 0.0, 1.0)
    C, T, N = body_frame(l)
    a = np.maximum(_sa(t) - inset, 0.05)
    b = np.maximum(_sb(t) - inset, 0.05)
    n = prof_n(t)
    c, s = np.cos(phi), np.sin(phi)
    rr = (np.abs(c) ** n + np.abs(s) ** n) ** (-1.0 / n)
    x, y = rr * c, rr * s
    k = cap_k(l, inset)
    taper = 1.0 - prof_ft(t) * (x + 1.0) * 0.5
    return C + N * (a * k * x)[..., None] + Y_AXIS * (b * k * y * taper)[..., None]


def body_normal(l, phi, e=1e-3):
    dl = body_surf(l + e * 5, phi) - body_surf(l - e * 5, phi)
    dp = body_surf(l, phi + e) - body_surf(l, phi - e)
    return unit(np.cross(dp, dl))


def door_l(phi):
    return DOOR_L0 - DOOR_DL * np.cos(phi)


def y_to_phi(l, y, side):
    """Angle at which the body surface at arc length l has lateral coordinate y. side: 'back' (near pi) or 'front'."""
    tab = np.linspace(0.60 * math.pi, math.pi, 600) if side == "back" else np.linspace(0.0, 0.40 * math.pi, 600)
    ys = body_surf(np.full_like(tab, l), tab)[:, 1]
    if side == "back":
        return float(np.interp(y, ys[::-1], tab[::-1]))
    return float(np.interp(y, ys, tab))


def spine_chart(l, y):
    """(l, y) on the spine side -> surface point and outward normal. y is the lateral offset from the mid-plane."""
    l = np.asarray(l, float)
    y = np.asarray(y, float)
    shp = np.broadcast(l, y).shape
    lf, yf = np.broadcast_to(l, shp).ravel(), np.broadcast_to(y, shp).ravel()
    phi = np.array([math.pi if abs(b) < 1e-9 else (y_to_phi(a, abs(b), "back") if b > 0 else 2 * math.pi - y_to_phi(a, abs(b), "back")) for a, b in zip(lf, yf)])
    P = body_surf(lf, phi)
    Nn = body_normal(lf, phi)
    return P.reshape(shp + (3,)), Nn.reshape(shp + (3,))


def stadium_half_width(dl, half_len, half_w):
    """Half width of a stadium (rounded slot) outline at distance dl from its centre; 0 outside."""
    dl = np.abs(np.asarray(dl, float))
    out = np.zeros_like(dl)
    straight = half_len - half_w
    out = np.where(dl <= straight, half_w, out)
    capm = (dl > straight) & (dl < half_len)
    out = np.where(capm, np.sqrt(np.maximum(half_w**2 - (dl - straight) ** 2, 0.0)), out)
    return out


def spine_pockets():
    """Outlines of the openings in the shells along the spine: (centre l, half length, half width)."""
    g = CTRL_GAP + FILLET
    ps = [(ROCKER["l"], ROCKER["half_len"] + g, ROCKER["half_w"] + g), (BUTTON["l"], BUTTON["r"] + g, BUTTON["r"] + g)]
    ps += [(m["l"], m["half_len"] + FILLET, m["half_w"] + FILLET) for m in MICS]
    return ps


def spine_edge_y(l):
    """Lateral position of the shell edge along the spine (follows the pockets of the controls)."""
    y = np.full_like(np.asarray(l, float), GAP / 2 + FILLET)
    for lc, hl, hw in spine_pockets():
        y = np.maximum(y, stadium_half_width(l - lc, hl, hw))
    return y


# ====================================================================================================== MESH BUILDING
class MB:
    """Accumulates quads; one Blender mesh object per builder."""

    def __init__(self, name):
        self.name = name
        self.verts = []
        self.faces = []
        self.fmat = []
        self.n = 0

    def add_grid(self, Q, mat, inside, closed_j=False, face_mat=None, closed_i=False):
        """Q: (R, C, 3) grid. mat: material name, or face_mat (R-1[+1], C-1[+1]) array of names. inside: a point on
        the inner side of the surface (used to orient the faces outwards)."""
        Q = np.asarray(Q, float)
        R, C = Q.shape[:2]
        base = self.n
        self.verts.append(Q.reshape(-1, 3))
        self.n += R * C
        ni = R if closed_i else R - 1
        nj = C if closed_j else C - 1
        i0, j0 = min(R // 2, ni - 1), min(C // 2, nj - 1)
        p = [Q[i0, j0], Q[(i0 + 1) % R, j0], Q[(i0 + 1) % R, (j0 + 1) % C], Q[i0, (j0 + 1) % C]]
        nrm = np.cross(p[1] - p[0], p[3] - p[0])
        flip = float(nrm @ (p[0] - np.asarray(inside, float))) < 0
        for i in range(ni):
            for j in range(nj):
                a = base + i * C + j
                b = base + ((i + 1) % R) * C + j
                c = base + ((i + 1) % R) * C + (j + 1) % C
                d = base + i * C + (j + 1) % C
                self.faces.append((a, d, c, b) if flip else (a, b, c, d))
                self.fmat.append(mat if face_mat is None else face_mat[i][j])

    def add_fan(self, ring, centre, mat, inside):
        """Triangle fan closing a ring of points (k, 3) to a centre point."""
        ring = np.asarray(ring, float)
        k = len(ring)
        base = self.n
        self.verts.append(np.vstack([ring, np.asarray(centre, float)[None]]))
        self.n += k + 1
        nrm = np.cross(ring[1] - ring[0], np.asarray(centre, float) - ring[0])
        flip = float(nrm @ (ring[0] - np.asarray(inside, float))) < 0
        for j in range(k):
            a, b, c = base + j, base + (j + 1) % k, base + k
            self.faces.append((a, c, b) if flip else (a, b, c))
            self.fmat.append(mat)

    def build(self, materials, weld=2e-5, smooth=True):
        V = np.vstack(self.verts)
        mesh = bpy.data.meshes.new(self.name)
        names = []
        for m in self.fmat:
            if m not in names:
                names.append(m)
        for nm in names:
            mesh.materials.append(materials[nm])
        bm = bmesh.new()
        bv = [bm.verts.new(v) for v in V]
        bm.verts.ensure_lookup_table()
        idx = {nm: k for k, nm in enumerate(names)}
        for f, m in zip(self.faces, self.fmat):
            if len(set(f)) < 3:
                continue
            try:
                face = bm.faces.new([bv[i] for i in f])
            except ValueError:
                continue
            face.material_index = idx[m]
            face.smooth = smooth
        bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=weld)
        bmesh.ops.dissolve_degenerate(bm, dist=1e-6, edges=bm.edges)
        bm.to_mesh(mesh)
        bm.free()
        obj = bpy.data.objects.new(self.name, mesh)
        bpy.context.scene.collection.objects.link(obj)
        return obj


def grid_normals(P, closed_j=False):
    di = np.empty_like(P)
    di[1:-1] = P[2:] - P[:-2]
    di[0] = P[1] - P[0]
    di[-1] = P[-1] - P[-2]
    if closed_j:
        dj = np.roll(P, -1, axis=1) - np.roll(P, 1, axis=1)
    else:
        dj = np.empty_like(P)
        dj[:, 1:-1] = P[:, 2:] - P[:, :-2]
        dj[:, 0] = P[:, 1] - P[:, 0]
        dj[:, -1] = P[:, -1] - P[:, -2]
    return unit(np.cross(di, dj)), di, dj


def roll_edges(P, N, sides, closed_j=False, r=FILLET, depth=WALL, K=ROLL_K, mat="", wall_mat="Gap"):
    """Round the free edges of a surface patch over into a short wall (parting-line groove).
    P, N: (R, C, 3) points and outward normals. sides: subset of {'i0','i1','j0','j1'} to roll.
    Returns the extended grid and a per-face material array."""
    R, C = P.shape[:2]
    _, di, dj = grid_normals(P, closed_j)
    adv = [r * math.sin(0.5 * math.pi * k / K) for k in range(K + 1)] + [r]
    dep = [r * (1 - math.cos(0.5 * math.pi * k / K)) for k in range(K + 1)] + [r + depth]
    ext = K + 1

    def out_dir(tang, nrm, towards):
        e = unit(np.cross(tang, nrm))
        sgn = np.sign(np.sum(e * towards, axis=-1, keepdims=True))
        return e * np.where(sgn == 0, 1.0, sgn)

    E = {}
    if "i0" in sides:
        E["i0"] = out_dir(dj[0], N[0], P[0] - P[1])
    if "i1" in sides:
        E["i1"] = out_dir(dj[-1], N[-1], P[-1] - P[-2])
    if "j0" in sides:
        E["j0"] = out_dir(di[:, 0], N[:, 0], P[:, 0] - P[:, 1])
    if "j1" in sides:
        E["j1"] = out_dir(di[:, -1], N[:, -1], P[:, -1] - P[:, -2])
    a0, a1 = (ext if "i0" in sides else 0), (ext if "i1" in sides else 0)
    b0, b1 = (ext if "j0" in sides else 0), (ext if "j1" in sides else 0)
    RR, CC = R + a0 + a1, C + b0 + b1
    Q = np.zeros((RR, CC, 3))
    KI = np.zeros(RR, int)
    KJ = np.zeros(CC, int)
    for I in range(RR):
        i = min(max(I - a0, 0), R - 1)
        ki = (a0 - I) if I < a0 else ((I - a0 - (R - 1)) if I - a0 > R - 1 else 0)
        KI[I] = ki
        for Jx in range(CC):
            j = min(max(Jx - b0, 0), C - 1)
            kj = (b0 - Jx) if Jx < b0 else ((Jx - b0 - (C - 1)) if Jx - b0 > C - 1 else 0)
            KJ[Jx] = kj
            p = P[i, j].copy()
            if ki:
                p += (E["i0"][j] if I < a0 else E["i1"][j]) * adv[ki]
            if kj:
                p += (E["j0"][i] if Jx < b0 else E["j1"][i]) * adv[kj]
            if ki or kj:
                p -= N[i, j] * max(dep[ki], dep[kj])
            Q[I, Jx] = p
    nfi = RR - 1
    nfj = CC if closed_j else CC - 1
    fm = [[mat] * nfj for _ in range(nfi)]
    for I in range(nfi):
        for Jx in range(nfj):
            if max(KI[I], KI[I + 1]) == ext or max(KJ[Jx], KJ[(Jx + 1) % CC]) == ext:
                fm[I][Jx] = wall_mat
    return Q, fm


def merged_rows(lo, hi, step, fine_spans):
    """Row positions from lo to hi with spacing <= step, plus Chebyshev-clustered rows inside (centre, half, count)
    spans so that rounded pocket ends are resolved."""
    n = max(2, int(math.ceil((hi - lo) / step)) + 1)
    rows = list(np.linspace(lo, hi, n))
    for c, h, cnt in fine_spans:
        for k in range(cnt + 1):
            v = c - h * math.cos(math.pi * k / cnt)
            if lo < v < hi:
                rows.append(v)
    rows = sorted(rows)
    out = [rows[0]]
    for v in rows[1:]:
        if v - out[-1] > 0.035:
            out.append(v)
    out[-1] = hi
    return np.array(out)


# ============================================================================================================== PARTS
def build_shell(mats, mirror=False, cols=38, step=0.38):
    """One half of the main housing (phi from the front seam to the spine seam), above the battery door."""
    name = "ShellL" if mirror else "ShellR"
    top = LB - FILLET
    spans = [(lc, hl, 24 if hl > 2 else (14 if hl > 1 else 10)) for lc, hl, hw in spine_pockets()]
    lo_back = door_l(math.pi) + GAP / 2 + FILLET
    rows_back = merged_rows(lo_back, top, step, spans)
    Rn = len(rows_back)
    xi = (1 - np.cos(np.linspace(0, math.pi, cols))) / 2  # denser near both seams
    P = np.zeros((Rn, cols, 3))
    front_y = GAP / 2 + FILLET
    for i, lb in enumerate(rows_back):
        ye = float(spine_edge_y(np.array([lb]))[0])
        phi_b = y_to_phi(lb, ye, "back")
        lo_b = door_l(phi_b) + GAP / 2 + FILLET
        eta = (lb - lo_b) / (top - lo_b)
        # front edge: iterate once, its row position depends on its own angle only weakly
        lf = door_l(0.0) + GAP / 2 + FILLET + (top - door_l(0.0) - GAP / 2 - FILLET) * eta
        phi_f = y_to_phi(lf, front_y, "front")
        phi = phi_f + (phi_b - phi_f) * xi
        lo = door_l(phi) + GAP / 2 + FILLET
        l = lo + (top - lo) * eta
        P[i] = body_surf(l, phi)
    N, _, _ = grid_normals(P)
    # make sure N points outwards
    Cc = CL.pos(np.array([rows_back[Rn // 2]]))[0]
    if N[Rn // 2, cols // 2] @ (P[Rn // 2, cols // 2] - Cc) < 0:
        N = -N
    Q, fm = roll_edges(P, N, {"i0", "i1", "j0", "j1"}, mat="Shell")
    if mirror:
        Q = Q * np.array([1.0, -1.0, 1.0])
    mb = MB(name)
    inside = CL.pos(np.array([rows_back[Rn // 2]]))[0]
    mb.add_grid(Q, "Shell", inside, face_mat=fm)
    return mb.build(mats)


def build_door(mats, cols=80, step=0.34):
    """Battery door: the closed bottom end of the body, up to the door parting line."""
    phi = np.linspace(0, 2 * math.pi, cols, endpoint=False)
    hi = door_l(phi) - GAP / 2 - FILLET
    n = int(math.ceil(hi.max() / step)) + 1
    eta = np.linspace(0, 1, n) ** 1.0
    eta = eta[1:]  # row 0 is the pole (added as a fan)
    P = np.zeros((len(eta), cols, 3))
    for i, e in enumerate(eta):
        P[i] = body_surf(hi * e, phi)
    N, _, _ = grid_normals(P, closed_j=True)
    Cc = CL.pos(np.array([5.0]))[0]
    if N[len(eta) // 2, 0] @ (P[len(eta) // 2, 0] - Cc) < 0:
        N = -N
    Q, fm = roll_edges(P, N, {"i1"}, closed_j=True, mat="Door")
    mb = MB("Door")
    mb.add_grid(Q, "Door", Cc, closed_j=True, face_mat=fm)
    mb.add_fan(Q[0], body_surf(np.array([0.0]), np.array([0.0]))[0], "Door", Cc)
    return mb.build(mats)


def build_core(mats, cols=40, step=1.3):
    """Dark inner body that is seen at the bottom of the parting lines and pockets."""
    inset = WALL + FILLET - 0.02
    phi = np.linspace(0, 2 * math.pi, cols, endpoint=False)
    ls = np.linspace(inset, LB + COLLAR_GAP + 0.4, int((LB) / step))
    P = np.stack([body_surf(np.full_like(phi, l), phi, inset=inset) for l in ls])
    mb = MB("Core")
    Cc = CL.pos(np.array([LB / 2]))[0]
    mb.add_grid(P[1:], "Gap", Cc, closed_j=True)
    mb.add_fan(P[1], body_surf(np.array([inset]), np.array([0.0]), inset=inset)[0], "Gap", Cc)
    return mb.build(mats)


def stadium_outline(half_len, half_w, n_cap=20, n_side=14):
    """Closed outline of a stadium in local (x along the spine, y lateral): returns centres (k,2) and unit
    directions (k,2) so that outline = centre + half_w * direction."""
    st = half_len - half_w
    cs, ds = [], []
    for k in range(n_side):  # +y side, x from -st to +st
        cs.append((-st + 2 * st * k / n_side, 0.0))
        ds.append((0.0, 1.0))
    for k in range(n_cap):  # +x cap
        a = math.pi / 2 - math.pi * k / n_cap
        cs.append((st, 0.0))
        ds.append((math.cos(a), math.sin(a)))
    for k in range(n_side):  # -y side
        cs.append((st - 2 * st * k / n_side, 0.0))
        ds.append((0.0, -1.0))
    for k in range(n_cap):  # -x cap
        a = -math.pi / 2 - math.pi * k / n_cap
        cs.append((-st, 0.0))
        ds.append((math.cos(a), math.sin(a)))
    return np.array(cs), np.array(ds)


def build_lump(mats, name, lc, half_len, half_w, height_fn, mat, rings=14, p=3.2, skirt=0.5, n_cap=20, n_side=14, across=False):
    """A raised control (rocker, button) that follows the curved spine. height_fn(x) = height above the surface at
    distance x (mm) from its centre along its long axis. across=True lays the long axis across the spine."""
    cs, ds = stadium_outline(half_len, half_w, n_cap, n_side if half_len - half_w > 1e-6 else 0)
    la = 0  # index of the long axis in the local (along spine, across spine) coordinates
    if across:
        cs, ds = cs[:, ::-1].copy(), ds[:, ::-1].copy()
        la = 1
    k = len(cs)
    rho = np.sin(np.linspace(0, math.pi / 2, rings))  # 0 centre line -> 1 outline, denser at the rim
    rows = []
    for rr in rho[1:]:
        xy = cs + ds * (half_w * rr)
        prof = (1.0 - rr**p) ** (1.0 / p)
        Pp, Nn = spine_chart(lc + xy[:, 0], xy[:, 1])
        rows.append(Pp + Nn * (np.array([height_fn(x) for x in xy[:, la]]) * prof)[:, None])
    xy = cs + ds * half_w
    Pp, Nn = spine_chart(lc + xy[:, 0], xy[:, 1])
    rows.append(Pp - Nn * skirt)  # skirt going down into the pocket
    Q = np.stack(rows)
    mb = MB(name)
    inside = spine_chart(np.array([lc]), np.array([0.0]))
    inside_pt = inside[0][0] - inside[1][0] * 1.5
    mb.add_grid(Q, mat, inside_pt, closed_j=True)
    # close the top along the centre line: ring 1 is collapsed towards the medial axis with a strip of quads
    xy0 = cs.copy()
    P0, N0 = spine_chart(lc + xy0[:, 0], xy0[:, 1])
    top0 = P0 + N0 * np.array([height_fn(x) for x in xy0[:, la]])[:, None]
    if half_len - half_w > 1e-6:
        mb.add_grid(np.stack([top0, Q[0]]), mat, inside_pt, closed_j=True)
    else:
        mb.add_fan(Q[0], top0[0], mat, inside_pt)
    return mb.build(mats)


def revolve(mats, name, axis_p, axis_t, profile, mat, segs=64, inside=None, caps=(False, False)):
    """Surface of revolution: profile = [(offset along the axis, radius), ...]."""
    t = unit(np.asarray(axis_t, float))
    ref = Y_AXIS if abs(t @ Y_AXIS) < 0.9 else np.array([1.0, 0, 0])
    u = unit(np.cross(t, ref))
    v = np.cross(t, u)
    ang = np.linspace(0, 2 * math.pi, segs, endpoint=False)
    rows = [axis_p + t * o + (np.cos(ang)[:, None] * u + np.sin(ang)[:, None] * v) * r for o, r in profile]
    Q = np.stack(rows)
    mb = MB(name)
    ins = np.asarray(axis_p, float) + t * (0.5 * (profile[0][0] + profile[-1][0])) if inside is None else inside
    mb.add_grid(Q, mat, ins, closed_j=True)
    if caps[0]:
        mb.add_fan(Q[0], axis_p + t * profile[0][0], mat, ins)
    if caps[1]:
        mb.add_fan(Q[-1], axis_p + t * profile[-1][0], mat, ins)
    return mb.build(mats)


def chamfered(o0, o1, r, ch=0.08, r_in=None):
    """Profile of a ring from offset o0 to o1 with chamfered outer edges."""
    r_in = r * 0.5 if r_in is None else r_in
    return [(o0, r_in), (o0, r - ch), (o0 + ch * 0.35, r - ch * 0.35), (o0 + ch, r), (o1 - ch, r), (o1 - ch * 0.35, r - ch * 0.35), (o1, r - ch), (o1, r_in)]


def hook_radius(s, Lh):
    """Outer radius of the ear hook at arc length s from its base (incl. the nub at the end)."""
    s = np.asarray(s, float)
    s_sh = Lh - HOOK_SHOULDER
    main = Spline(HOOK_R_S + [s_sh], HOOK_R + [HOOK_SHOULDER_R])
    r = main(np.clip(s, 0, s_sh))
    # nub: step down, neck, barb, tip
    xs = [s_sh, s_sh + 0.22, Lh - 1.75, Lh - 1.25, Lh - 0.80, Lh - 0.35, Lh]
    rs = [HOOK_SHOULDER_R, NUB_NECK_R, NUB_NECK_R, NUB_BARB_R - 0.06, NUB_BARB_R, NUB_BARB_R - 0.08, NUB_TIP_R]
    return np.where(s > s_sh, np.interp(s, xs, rs), r)


def build_hook(mats, segs=44, step=0.36):
    l0 = LB + COLLAR_GAP + COLLAR_LEN + 0.03
    Lh = LTOT - l0
    s_sh = Lh - HOOK_SHOULDER
    s = list(np.linspace(0, s_sh, int(s_sh / step)))
    s += list(np.linspace(s_sh, Lh, 24)[1:])
    # small rounding of the base edge
    s = np.array([0.0, 0.03, 0.09] + [v for v in s if v > 0.16])
    r = hook_radius(s, Lh)
    r[0] -= 0.10
    r[1] -= 0.035
    l = l0 + s
    C = CL.pos(l)
    T = CL.tan(l)
    Nn = np.stack([T[:, 2], np.zeros(len(l)), -T[:, 0]], -1)
    ang = np.linspace(0, 2 * math.pi, segs, endpoint=False)
    Q = C[:, None, :] + (np.cos(ang)[None, :, None] * Nn[:, None, :] + np.sin(ang)[None, :, None] * Y_AXIS[None, None, :]) * r[:, None, None]
    mb = MB("Hook")
    mid = CL.pos(np.array([l0 + Lh / 2]))[0]
    mb.add_grid(Q, "Clear", mid, closed_j=True)
    mb.add_fan(Q[0], C[0], "Clear", C[0] + T[0])
    mb.add_fan(Q[-1], C[-1], "Clear", C[-1] - T[-1])
    return mb.build(mats), l0, Lh


def build_tube(mats, l0, Lh, segs=32, step=0.38):
    """Clear sound tube: starts on the hook nub and follows TUBE_PATH into the ear mould."""
    ls = np.linspace(l0 + Lh - HOOK_SHOULDER + 0.02, LTOT, 10)
    head = CL.pos(ls)
    pts = np.vstack([head, np.asarray(TUBE_PATH, float)])
    cv = Curve(pts)
    n = int(cv.length / step)
    la = np.linspace(0, cv.length, n)
    P = cv.pos(la)
    T, Nn, B = rmf_frames(P)
    on_nub = HOOK_SHOULDER  # length of tube that sits on the nub
    xs = [0.0, 0.5, on_nub - 1.6, on_nub - 0.85, on_nub - 0.1, on_nub + 1.2, cv.length]
    rs = [TUBE_R + 0.03, TUBE_R + 0.06, TUBE_R + 0.06, TUBE_R + 0.20, TUBE_R + 0.10, TUBE_R, TUBE_R]
    r = np.interp(la, xs, rs)
    ang = np.linspace(0, 2 * math.pi, segs, endpoint=False)
    Q = P[:, None, :] + (np.cos(ang)[None, :, None] * Nn[:, None, :] + np.sin(ang)[None, :, None] * B[:, None, :]) * r[:, None, None]
    mb = MB("Tube")
    mid = P[n // 2]
    mb.add_grid(Q, "Tube", mid, closed_j=True)
    mb.add_fan(Q[0], P[0], "Tube", P[0] + T[0])
    mb.add_fan(Q[-1], P[-1], "Tube", P[-1] - T[-1])
    return mb.build(mats), cv


# ========================================================================================================= EAR MOULD
def apply_modifiers(obj):
    """Bake the modifier stack into the mesh (works in background mode, no operators needed)."""
    dg = bpy.context.evaluated_depsgraph_get()
    dg.update()
    me = bpy.data.meshes.new_from_object(obj.evaluated_get(dg), preserve_all_data_layers=True, depsgraph=dg)
    old = obj.data
    obj.modifiers.clear()
    obj.data = me
    me.name = obj.name
    bpy.data.meshes.remove(old)


# ------------------------------------------------------------------------------------------ ear mould as an implicit solid
def smin(a, b, k):
    """Smooth minimum (rounded union of two distance fields)."""
    hh = np.clip(0.5 + 0.5 * (b - a) / k, 0.0, 1.0)
    return b * (1 - hh) + a * hh - k * hh * (1 - hh)


def smax(a, b, k):
    return -smin(-a, -b, k)


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0.0, 1.0)
    return t * t * (3 - 2 * t)


def closed_outline(pts, n):
    """Smooth closed 2D outline through pts (k, 2) -> (n, 2) polygon."""
    pts = np.asarray(pts, float)
    m = len(pts)
    ext = np.vstack([pts[-3:], pts, pts[:3]])
    cv = Curve(np.column_stack([ext[:, 0], np.zeros(len(ext)), ext[:, 1]]))
    la = np.linspace(cv.len_at_knot(3), cv.len_at_knot(3 + m), n, endpoint=False)
    return cv.pos(la)[:, [0, 2]]


def polygon_sdf(px, pz, poly):
    """Signed distance (negative inside) from points to a closed polygon (n, 2)."""
    shp = px.shape
    p = np.stack([px.ravel(), pz.ravel()], -1)
    a = poly
    b = np.roll(poly, -1, axis=0)
    d2 = np.full(len(p), np.inf)
    inside = np.zeros(len(p), bool)
    for k in range(len(a)):
        e = b[k] - a[k]
        w = p - a[k]
        t = np.clip((w @ e) / (e @ e), 0.0, 1.0)
        q = w - t[:, None] * e
        d2 = np.minimum(d2, (q * q).sum(1))
        if abs(e[1]) > 1e-12:
            cross = (a[k, 1] > p[:, 1]) != (b[k, 1] > p[:, 1])
            xint = a[k, 0] + (p[:, 1] - a[k, 1]) * e[0] / e[1]
            inside ^= cross & (p[:, 0] < xint)
    d = np.sqrt(d2)
    return np.where(inside, -d, d).reshape(shp)


def polyline_dist(X, pts):
    """Distance from points X (N, 3) to a polyline (m, 3)."""
    best = np.full(len(X), np.inf)
    for k in range(len(pts) - 1):
        a, b = pts[k], pts[k + 1]
        e = b - a
        w = X - a
        t = np.clip((w @ e) / (e @ e), 0.0, 1.0)
        q = w - t[:, None] * e
        best = np.minimum(best, (q * q).sum(1))
    return np.sqrt(best)


def stalk_sdf(X, axis, rv_fn, rh_fn, cap0, cap1):
    """Tapered stalk with an elliptical section around a polyline axis; rounded ends of length cap0 / cap1."""
    seg = np.linalg.norm(np.diff(axis, axis=0), axis=1)
    cum = np.concatenate([[0.0], np.cumsum(seg)])
    L = cum[-1]
    best = np.full(len(X), np.inf)
    S = np.zeros(len(X))
    VH = np.zeros(len(X))
    VV = np.zeros(len(X))
    VT = np.zeros(len(X))
    for k in range(len(axis) - 1):
        a, b = axis[k], axis[k + 1]
        e = b - a
        T = e / seg[k]
        V = unit(np.array([0.0, 0.0, 1.0]) - T * T[2])
        H = np.cross(T, V)
        w = X - a
        tt = np.clip((w @ e) / (e @ e), 0.0, 1.0)
        q = w - tt[:, None] * e
        dd = (q * q).sum(1)
        upd = dd < best
        best = np.where(upd, dd, best)
        S = np.where(upd, (cum[k] + tt * seg[k]) / L, S)
        VH = np.where(upd, q @ H, VH)
        VV = np.where(upd, q @ V, VV)
        VT = np.where(upd, q @ T, VT)
    rv, rh = rv_fn(S), rh_fn(S)
    rc = np.where(VT < 0, cap0, cap1)
    el = np.sqrt((VH / rh) ** 2 + (VV / rv) ** 2 + (VT / rc) ** 2)
    return (el - 1.0) * np.minimum(rh, rv)


def trilinear(vol, origin, h, P):
    """Sample a (nx, ny, nz[, c]) volume at points P (N, 3)."""
    g = (P - origin) / h
    i0 = np.clip(np.floor(g).astype(int), 0, np.array(vol.shape[:3]) - 2)
    f = g - i0
    out = 0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                wgt = (f[:, 0] if dx else 1 - f[:, 0]) * (f[:, 1] if dy else 1 - f[:, 1]) * (f[:, 2] if dz else 1 - f[:, 2])
                v = vol[i0[:, 0] + dx, i0[:, 1] + dy, i0[:, 2] + dz]
                out = out + (wgt[:, None] * v if v.ndim == 2 else wgt * v)
    return out


def build_mould_sdf(mats, tube_curve):
    """Skeleton ear mould modelled as a distance field: the rim follows the outline of the bowl of the outer ear
    (with the notch for the root of the helix), the canal part carries the tube, sound outlet and vent."""
    import openvdb as vdb

    h = MOULD_VOXEL
    xs = np.arange(9.4, 30.6, h)
    ys = np.arange(-13.2, 6.4, h)
    zs = np.arange(0.4, 24.4, h)
    origin = np.array([xs[0], ys[0], zs[0]])
    X2, Z2 = np.meshgrid(xs, zs, indexing="ij")
    outline = closed_outline(MOULD_OUTLINE, 420)
    d2 = polygon_sdf(X2, Z2, outline)
    y0 = MOULD_Y0 + MOULD_TILT * (18.0 - X2) - MOULD_LOCK_DIP * smoothstep(15.5, 19.5, Z2) * smoothstep(15.0, 22.0, X2)
    Lt = tube_curve.length
    t_end = tube_curve.pos(np.array([Lt]))[0]
    t_dir = tube_curve.tan(np.array([Lt]))[0]
    elbow_end = np.asarray(TUBE_PATH[6], float)
    drop = np.array([0.0, 0.0, -MOULD_CANAL_DROP])
    keep = MOULD_KEEP_R - np.hypot(X2 - elbow_end[0], Z2 - (elbow_end[2] - MOULD_CANAL_DROP))
    hole2 = smax(d2 + MOULD_RIM, keep, 0.9)
    Yg = ys[None, :, None]
    yc = (y0 + (MOULD_T_LAT - MOULD_T_MED) / 2)[:, None, :]
    Hh = (MOULD_T_LAT + MOULD_T_MED) / 2
    R = MOULD_EDGE_R
    w = d2[:, None, :] + R
    hh = np.abs(Yg - yc) - (Hh - R)
    sd = np.minimum(np.maximum(w, hh), 0.0) + np.sqrt(np.maximum(w, 0.0) ** 2 + np.maximum(hh, 0.0) ** 2) - R
    sd = smax(sd, -np.broadcast_to(hole2[:, None, :], sd.shape), 0.9)
    shape = sd.shape
    G = np.stack(np.meshgrid(xs, ys, zs, indexing="ij"), -1).reshape(-1, 3)
    # canal part
    e_tip, e_lat = 2.8, 1.3
    ax_ctrl = np.array([elbow_end + np.array([-0.10, 0.10, 0.0]) + drop, np.asarray(TUBE_PATH[7], float) + drop, np.asarray(TUBE_PATH[8], float) + drop, t_end + t_dir * (MOULD_TIP_EXTRA - e_tip) + drop])
    ax_curve = Curve(ax_ctrl)
    axis = ax_curve.pos(np.linspace(0, ax_curve.length, 26))
    rvf, rhf = Spline(MOULD_CANAL_S, MOULD_CANAL_RV), Spline(MOULD_CANAL_S, MOULD_CANAL_RH)
    canal = stalk_sdf(G, axis, rvf, rhf, e_lat, e_tip).reshape(shape)
    sd = smin(sd, canal, MOULD_BLEND)
    # a little organic irregularity (an ear impression is never geometrically regular)
    gx, gy, gz = G[:, 0].reshape(shape), G[:, 1].reshape(shape), G[:, 2].reshape(shape)
    sd = sd + MOULD_NOISE * (np.sin(0.83 * gx + 1.3) * np.sin(0.71 * gz + 0.4) + 0.6 * np.sin(1.31 * gx - 0.9 * gz + 2.1) * np.cos(0.9 * gy + 0.5) + 0.5 * np.sin(0.57 * gz + 1.9 * gy))
    # clearance between tube and mould outside the bore (must stay positive)
    la = np.linspace(0, Lt - 8.5, 80)
    tp = tube_curve.pos(la)
    clear = trilinear(sd, origin, h, tp) - TUBE_R
    far = clear[: int(len(la) * 0.80)]
    log("mould: min clearance to tube before the elbow = %.2f mm" % far.min())
    # sound bore (the tube sits in it), outlet at the canal tip, vent
    tb = np.vstack([tube_curve.pos(np.linspace(Lt - 12.0, Lt, 50)), (t_end + t_dir * (MOULD_TIP_EXTRA + 2.0))[None]])
    sd = smax(sd, -(polyline_dist(G, tb).reshape(shape) - (TUBE_R + 0.02)), 0.50)
    # vent: modelled as its two openings (outer face and canal tip). The channel between them would only show as
    # visual clutter inside the clear material.
    v_a = elbow_end + np.array([-0.3, 3.6, -VENT_DROP - 0.15])
    v_b = t_end + t_dir * (MOULD_TIP_EXTRA + 2.0) + np.array([0.0, 0.0, -VENT_DROP])
    v_dir = unit(v_b - v_a)
    v_len = float(np.linalg.norm(v_b - v_a))
    for seg in (np.array([v_a, v_a + v_dir * 4.6]), np.array([v_b - v_dir * 5.4, v_b])):
        sd = smax(sd, -(polyline_dist(G, seg).reshape(shape) - VENT_R), 0.30)
    assert sd[0].min() > 0 and sd[-1].min() > 0 and sd[:, 0].min() > 0 and sd[:, -1].min() > 0 and sd[:, :, 0].min() > 0 and sd[:, :, -1].min() > 0, "mould touches the voxel box"
    grid = vdb.FloatGrid(background=float(sd.max()) + 1.0)
    grid.copyFromArray(sd.astype(np.float32))
    grid.transform = vdb.createLinearTransform(voxelSize=h)
    pts, tris, quads = grid.convertToPolygons(isovalue=0.0, adaptivity=float(arg("--mould-adapt", MOULD_ADAPT)))
    V = np.asarray(pts, float) + origin
    faces = [tuple(int(i) for i in q) for q in quads] + [tuple(int(i) for i in t) for t in tris]
    grad = np.stack(np.gradient(sd, h), -1)
    # orient faces along the outward gradient
    f0 = faces[len(faces) // 2]
    c0 = V[list(f0)].mean(0)
    n0 = np.cross(V[f0[1]] - V[f0[0]], V[f0[2]] - V[f0[0]])
    if n0 @ trilinear(grad, origin, h, c0[None])[0] < 0:
        faces = [f[::-1] for f in faces]
    me = bpy.data.meshes.new("Mould")
    me.from_pydata(V.tolist(), [], faces)
    me.materials.append(mats["Mould"])
    me.update()
    obj = bpy.data.objects.new("Mould", me)
    bpy.context.scene.collection.objects.link(obj)
    ratio = float(arg("--mould-decimate", MOULD_DECIMATE))
    if ratio < 1.0:
        dc = obj.modifiers.new("decimate", "DECIMATE")
        dc.ratio = ratio
        apply_modifiers(obj)
        me = obj.data
    # exact, smooth normals from the distance field (independent of the triangulation)
    Vf = np.array([v.co[:] for v in me.vertices])
    nrm = unit(trilinear(grad, origin, h, Vf))
    me.polygons.foreach_set("use_smooth", [True] * len(me.polygons))
    me.normals_split_custom_set_from_vertices([tuple(float(c) for c in n) for n in nrm])
    me.update()
    log("mould: %d verts, %d faces" % (len(me.vertices), len(me.polygons)))
    return obj


# ========================================================================================================== MATERIALS
def make_materials():
    def mat(name, base, metallic=0.0, rough=0.5, coat=0.0, coat_rough=0.05, transmission=0.0, ior=1.45):
        m = bpy.data.materials.new(name)
        m.use_nodes = True
        b = m.node_tree.nodes["Principled BSDF"]
        b.inputs["Base Color"].default_value = (*base, 1.0)
        b.inputs["Metallic"].default_value = metallic
        b.inputs["Roughness"].default_value = rough
        b.inputs["Coat Weight"].default_value = coat
        b.inputs["Coat Roughness"].default_value = coat_rough
        b.inputs["Transmission Weight"].default_value = transmission
        b.inputs["IOR"].default_value = ior
        return m

    return {
        "Shell": mat("Shell", (0.78, 0.775, 0.76), metallic=0.45, rough=0.34, coat=1.0, coat_rough=0.06),
        "Door": mat("Door", (0.055, 0.06, 0.07), metallic=0.25, rough=0.40, coat=0.4, coat_rough=0.12),
        "Control": mat("Control", (0.06, 0.065, 0.075), metallic=0.25, rough=0.36, coat=0.3, coat_rough=0.12),
        "Gap": mat("Gap", (0.012, 0.012, 0.014), rough=0.9),
        "Metal": mat("Metal", (0.80, 0.80, 0.82), metallic=1.0, rough=0.26),
        "Clear": mat("Clear", (0.96, 0.975, 0.985), rough=0.05, transmission=1.0, ior=1.50),
        "Tube": mat("Tube", (0.97, 0.98, 0.985), rough=0.07, transmission=1.0, ior=1.47),
        "Mould": mat("Mould", (0.97, 0.90, 0.87), rough=0.14, transmission=1.0, ior=1.49),
    }


# ============================================================================================================== BUILD
def build_all():
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    mats = make_materials()
    objs = []
    objs.append(build_shell(mats, mirror=False))
    objs.append(build_shell(mats, mirror=True))
    log("shells")
    objs.append(build_door(mats))
    objs.append(build_core(mats))
    log("door + core")
    # controls
    hr = lambda x: 0.40 + 0.52 * (x / ROCKER["half_len"]) ** 2
    objs.append(build_lump(mats, "Rocker", ROCKER["l"], ROCKER["half_len"], ROCKER["half_w"], hr, "Control"))
    objs.append(build_lump(mats, "Button", BUTTON["l"], BUTTON["r"], BUTTON["r"], lambda x: 0.42, "Control", n_cap=28))
    log("controls")
    # collar + nozzle
    Cj = CL.pos(np.array([LB]))[0]
    Tj = CL.tan(np.array([LB]))[0]
    objs.append(revolve(mats, "Collar", Cj, Tj, chamfered(COLLAR_GAP, COLLAR_GAP + COLLAR_LEN, COLLAR_R, r_in=0.8), "Metal", caps=(True, True)))
    nz0 = COLLAR_GAP + COLLAR_LEN
    noz = [(nz0, 1.55), (nz0 + 0.7, 1.55), (nz0 + 0.8, 1.78), (nz0 + 1.15, 1.78), (nz0 + 1.25, 1.55), (nz0 + 1.75, 1.55), (nz0 + 1.85, 1.78), (nz0 + 2.2, 1.78), (nz0 + 2.3, 1.5), (nz0 + 3.0, 1.42)]
    objs.append(revolve(mats, "Nozzle", Cj, Tj, noz, "Door", segs=40, caps=(False, True)))
    hook, l0, Lh = build_hook(mats)
    objs.append(hook)
    tube, tube_curve = build_tube(mats, l0, Lh)
    objs.append(tube)
    log("hook + tube")
    # battery door details: nail grip under the parting line, hinge pin near the front bottom
    objs.append(build_lump(mats, "DoorGrip", door_l(math.pi) - 1.55, 1.75, 0.40, lambda x: 0.46, "Door", rings=10, p=2.6, skirt=0.3, n_cap=14, n_side=12, across=True))
    for sgn, nm in ((1, "PinR"), (-1, "PinL")):
        ph = (0.40 if sgn > 0 else 2.0 - 0.40) * math.pi
        pp = body_surf(np.array([4.3]), np.array([ph]))[0]
        pn = body_normal(np.array([4.3]), np.array([ph]))[0]
        if pn @ (pp - CL.pos(np.array([4.3]))[0]) < 0:
            pn = -pn
        objs.append(revolve(mats, nm, pp, pn, [(-0.3, 0.50), (0.03, 0.50), (0.06, 0.45), (0.06, 0.0)], "Metal", segs=28, inside=pp - pn * 0.2, caps=(False, False)))
    log("door details")
    if not arg("--no-mould"):
        objs.append(build_mould_sdf(mats, tube_curve))
        log("mould")
    return objs, mats


# ============================================================================================================= RENDER
def look_at(obj, target):
    from mathutils import Vector

    d = Vector(target) - obj.location
    obj.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()


def setup_render(res):
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.samples = int(arg("--samples", 48))
    sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 16
    sc.cycles.transmission_bounces = 16
    sc.cycles.transparent_max_bounces = 16
    sc.cycles.caustics_refractive = False
    sc.cycles.caustics_reflective = False
    try:
        prefs = bpy.context.preferences.addons["cycles"].preferences
        for kind in ("OPTIX", "CUDA"):
            try:
                prefs.compute_device_type = kind
                prefs.get_devices()
                devs = [d for d in prefs.devices if d.type == kind]
                if devs:
                    for d in prefs.devices:
                        d.use = d.type == kind
                    sc.cycles.device = "GPU"
                    log("cycles device:", kind, [d.name for d in devs])
                    break
            except Exception as e:  # noqa
                log("device", kind, "unavailable:", e)
    except Exception as e:  # noqa
        log("GPU setup failed, using CPU:", e)
    sc.render.resolution_x = sc.render.resolution_y = res
    sc.render.film_transparent = False
    sc.view_settings.view_transform = "Standard"
    sc.view_settings.look = "None"
    # world: soft light-grey studio
    w = bpy.data.worlds.new("W")
    w.use_nodes = True
    nt = w.node_tree
    bg = nt.nodes["Background"]
    bg.inputs[0].default_value = (0.86, 0.87, 0.89, 1)
    bg.inputs[1].default_value = float(arg("--world", 0.32))
    bg2 = nt.nodes.new("ShaderNodeBackground")  # what the camera sees behind the model
    bg2.inputs[0].default_value = (0.90, 0.91, 0.93, 1)
    bg2.inputs[1].default_value = 1.0
    lp = nt.nodes.new("ShaderNodeLightPath")
    mix = nt.nodes.new("ShaderNodeMixShader")
    nt.links.new(lp.outputs["Is Camera Ray"], mix.inputs[0])
    nt.links.new(bg.outputs[0], mix.inputs[1])
    nt.links.new(bg2.outputs[0], mix.inputs[2])
    nt.links.new(mix.outputs[0], nt.nodes["World Output"].inputs[0])
    sc.world = w

    def softbox(name, loc, size, strength, target=(10, 0, 18)):
        me = bpy.data.meshes.new(name)
        sx, sy = size
        me.from_pydata([(-sx, -sy, 0), (sx, -sy, 0), (sx, sy, 0), (-sx, sy, 0)], [], [(0, 1, 2, 3)])
        ob = bpy.data.objects.new(name, me)
        sc.collection.objects.link(ob)
        ob.location = loc
        look_at(ob, target)
        m = bpy.data.materials.new(name)
        m.use_nodes = True
        nt = m.node_tree
        nt.nodes.clear()
        em = nt.nodes.new("ShaderNodeEmission")
        em.inputs[1].default_value = strength
        out = nt.nodes.new("ShaderNodeOutputMaterial")
        nt.links.new(em.outputs[0], out.inputs[0])
        me.materials.append(m)
        ob.visible_camera = False
        return ob

    softbox("Key", (-70, -150, 150), (70, 50), 4.2)
    softbox("Fill", (170, -60, 60), (60, 60), 1.3)
    softbox("Rim", (-40, 160, 120), (25, 80), 4.0)
    softbox("Top", (10, 0, 220), (90, 90), 1.2)
    cam_d = bpy.data.cameras.new("Cam")
    cam_d.type = "ORTHO"
    cam_d.clip_start = 1
    cam_d.clip_end = 5000
    cam = bpy.data.objects.new("Cam", cam_d)
    sc.collection.objects.link(cam)
    sc.camera = cam
    return cam


VIEWS = {
    # name: (azimuth deg, elevation deg). azimuth 0 = looking at the outer (lateral) face, i.e. camera on +Y... see cam_pos
    "outer": (0, 6),
    "outer_front": (-45, 10),
    "front": (-90, 6),
    "inner_front": (-135, 10),
    "inner": (180, 6),
    "inner_back": (135, 10),
    "back": (90, 6),
    "outer_back": (45, 10),
    "top": (0, 80),
    "bottom": (0, -75),
    "hi_outer_front": (-35, 35),
    "hi_inner_back": (145, 35),
}


# Close-ups: name: (azimuth, elevation, centre (x, y, z), span in mm)
CLOSEUPS = {
    "c_spine": (-90, 8, (-2.0, 0.0, 22.0), 20.0),
    "c_spine34": (-55, 14, (0.0, 0.0, 24.0), 20.0),
    "c_top": (-25, 14, (9.0, 0.0, 33.0), 15.0),
    "c_door": (-40, 8, (0.0, 0.0, 6.5), 17.0),
    "c_doorback": (-120, 4, (0.0, 0.0, 7.0), 17.0),
    "c_tip": (10, 6, (23.8, 0.5, 24.5), 13.0),
    "c_mould": (15, 8, (20.0, 0.0, 11.5), 26.0),
    "c_mould_in": (165, 10, (20.0, -3.0, 11.5), 26.0),
    "c_mould_front": (90, 8, (22.0, -3.0, 11.5), 24.0),
}


def render_views(cam, names, res, centre, span, tag="qc"):
    from mathutils import Vector

    sc = bpy.context.scene
    files = []
    centre0, span0 = centre, span
    for nm in names:
        if nm in CLOSEUPS:
            az, el, centre, span = CLOSEUPS[nm]
        else:
            az, el = VIEWS[nm]
            centre, span = centre0, span0
        a, e = math.radians(az), math.radians(el)
        # azimuth 0: the camera sits on +Y and looks at the outer (lateral) face; -90: at the spine; 90: at the front
        d = Vector((math.sin(a) * math.cos(e), math.cos(a) * math.cos(e), math.sin(e)))
        cam.location = Vector(centre) + d * 400
        look_at(cam, centre)
        cam.data.ortho_scale = span
        sc.render.filepath = os.path.join(OUT, f"{tag}-{nm}.png")
        bpy.ops.render.render(write_still=True)
        files.append(sc.render.filepath)
        log("rendered", nm)
    return files


def contact_sheet(files, cols, path, tile):
    imgs = []
    for f in files:
        im = bpy.data.images.load(f)
        w, h = im.size
        px = np.array(im.pixels[:], dtype=np.float32).reshape(h, w, 4)
        imgs.append(px)
        bpy.data.images.remove(im)
    rows = int(math.ceil(len(imgs) / cols))
    h, w = imgs[0].shape[:2]
    sheet = np.ones((rows * h, cols * w, 4), np.float32)
    for k, px in enumerate(imgs):
        r, c = k // cols, k % cols
        sheet[(rows - 1 - r) * h:(rows - r) * h, c * w:(c + 1) * w] = px
    out = bpy.data.images.new("sheet", cols * w, rows * h, alpha=False)
    out.pixels.foreach_set(sheet.ravel())
    out.filepath_raw = path
    out.file_format = "PNG"
    out.save()
    log("sheet", path)


objs, mats = build_all()
tris = 0
for o in objs:
    o.data.calc_loop_triangles()
    tris += len(o.data.loop_triangles)
V = np.vstack([np.array([o.matrix_world @ v.co for v in o.data.vertices]) for o in objs])
bb0, bb1 = V.min(0), V.max(0)
log("objects", len(objs), "triangles", tris, "bbox", np.round(bb0, 2), np.round(bb1, 2), "body length", round(LB, 2), "total", round(LTOT, 2))

if arg("--render"):
    res = int(arg("--res", 640))
    cam = setup_render(res)
    centre = tuple((bb0 + bb1) / 2)
    span = float(np.linalg.norm(bb1 - bb0)) * 1.02
    names = arg("--views", ",".join(VIEWS.keys())).split(",")
    files = render_views(cam, names, res, centre, span)
    if len(files) > 1:
        contact_sheet(files, int(arg("--cols", 4)), os.path.join(OUT, arg("--sheet", "qc-sheet") + ".png"), res)

if arg("--blend"):
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, "bte.blend"))

if arg("--export"):
    # glTF wants metres and +Y up. The model is centred on its bounding box so that it turns around its own middle.
    from mathutils import Matrix

    name = arg("--export")
    path = os.path.join(OUT, name if isinstance(name, str) else "bte-raw.glb")
    centre = (bb0 + bb1) / 2
    M = Matrix.Scale(0.001, 4) @ Matrix.Translation((-float(centre[0]), -float(centre[1]), -float(centre[2])))
    for o in bpy.data.objects:
        o.select_set(o in objs)
    for o in objs:
        o.data.transform(M)
        o.data.update()
    bpy.ops.export_scene.gltf(
        filepath=path,
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_yup=True,
        export_texcoords=False,
        export_normals=True,
        export_tangents=False,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
        export_animations=False,
    )
    log("exported", path, "%.1f KB" % (os.path.getsize(path) / 1024))
log("done")
