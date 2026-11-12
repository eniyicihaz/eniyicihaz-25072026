// BteViewer3D çalışma zamanı — gerçek üç boyutlu (WebGL) kulak arkası cihaz görüntüleyicisi.
//
// Bu dosyayı `BteViewer3D.astro` içindeki küçük önyükleyici, sayfanın kendi yüklemesi bittikten sonra ve görüntüleyiciye
// yaklaşılınca (ya da kullanıcı beklemeden dokununca/odaklanınca) TEMBEL olarak yükler; sayfa açılışında inmez.
// three.js ile birlikte tek dosya olarak paketlenir (önyükleyicideki `?worker&url` içe aktarması Vite'a "bu dosyayı
// bağımlılıklarıyla birlikte ayrı bir paket yap ve adresini ver" der).
//
// Model: `bte-generic.glb` — markasız, logosuz, özgün (jenerik) bir kulak arkası cihaz. Blender ile parametrik olarak
// üretilir (tools/bte-model/build_bte.py), meshopt ile sıkıştırılır. Dokusu yoktur; bütün görünüm malzeme + ışıktan gelir.
// Yöntem, ölçümler ve bakım: docs/tech/BTE_3D_VIEWER.md
import {
  BackSide,
  Box3,
  BoxGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  NeutralToneMapping,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import modelUrl from "./bte-generic.glb?url";

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
// Başlangıç görünümü: cihazın dış yüzü, sırtındaki düğmeler görünecek kadar çevrilmiş.
const VIEW0 = { az: -32 * DEG, tilt: 0 };
// Dikey inceleme sınırları: alttan ve üstten bakılabilir, cihaz baş aşağı çevrilemez.
const TILT_MIN = -30 * DEG;
const TILT_MAX = 46 * DEG;
const ZOOMS = [1, 1.45, 2];
const AUTO_SPEED = TAU / 26; // otomatik dönüş: 26 saniyede bir tur
const CAM_PITCH = 7 * DEG; // kamera hafif yukarıdan bakar (zemin gölgesi görünür)
const FOV = 22;

/** @param {number} v @param {number} a @param {number} b */
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// ---------------------------------------------------------------------------------------------------- stüdyo ışığı
// Işık, kameraya sabit bir "stüdyo"dan gelir (yazılımla kurulur; dosya indirilmez): cihaz dönerken parlamalar yüzeyde
// kayar, kullanıcıya dönük yüz her zaman aydınlıktır. Arka duvar bilinçli olarak koyudur: metal ve şeffaf parçaların
// kenarlarındaki sıyırma yansımalar koyu kalır ve parçalar açık zeminde kaybolmaz.
/** @param {WebGLRenderer} renderer */
function studioEnvironment(renderer) {
  const env = new Scene();
  const box = new BoxGeometry(1, 1, 1);
  /** @param {number} v */
  const wall = (v) => new MeshBasicMaterial({ color: new Color(v, v * 1.01, v * 1.03), side: BackSide });
  // BoxGeometry yüz sırası: +X, -X, +Y, -Y, +Z (kameranın arkası), -Z (cihazın arkası)
  env.add(new Mesh(new BoxGeometry(24, 14, 24), [wall(0.22), wall(0.22), wall(0.9), wall(0.5), wall(0.5), wall(0.04)]));
  /** @param {number} intensity @param {[number, number, number]} pos @param {[number, number]} size */
  const panel = (intensity, pos, size) => {
    const m = new Mesh(box, new MeshBasicMaterial({ color: new Color(intensity, intensity, intensity) }));
    m.position.set(pos[0], pos[1], pos[2]);
    m.scale.set(size[0], size[1], 0.05);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  panel(7.5, [-6, 5, 8], [7, 5]); // ana ışık: sol ön üst
  panel(2.4, [8, 1, 6], [5, 6]); // dolgu: sağ ön
  panel(11, [9.5, 2, -9], [1.3, 9]); // kenar ışığı: sağ arka şerit
  panel(8, [-9.5, 2, -9], [1.0, 9]); // kenar ışığı: sol arka şerit
  panel(3.4, [0, 6.8, 1], [9, 8]); // tepe
  const pmrem = new PMREMGenerator(renderer);
  const target = pmrem.fromScene(env, 0.035);
  pmrem.dispose();
  env.traverse((o) => {
    const mesh = /** @type {Mesh} */ (o);
    if (mesh.isMesh) {
      mesh.geometry.dispose();
      for (const m of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) m.dispose();
    }
  });
  return target;
}

// Sahne zemini (fon) sahnenin İÇİNE boyanır: şeffaf parçalar gerçek fonu kırarak gösterir. Renkler bileşenin CSS
// değişkenlerinden okunur (yüksek kontrast modunda fon da değişir).
/** @param {HTMLElement} stage */
function backdropTexture(stage) {
  const cs = getComputedStyle(stage);
  const top = cs.getPropertyValue("--bte3d-bg-top").trim() || "#f7fafc";
  const bottom = cs.getPropertyValue("--bte3d-bg-bottom").trim() || "#e3edf4";
  const glow = cs.getPropertyValue("--bte3d-bg-glow").trim() || "#ffffff";
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = /** @type {CanvasRenderingContext2D} */ (c.getContext("2d"));
  const lin = g.createLinearGradient(0, 0, 0, 256);
  lin.addColorStop(0, top);
  lin.addColorStop(1, bottom);
  g.fillStyle = lin;
  g.fillRect(0, 0, 256, 256);
  const rad = g.createRadialGradient(128, 110, 0, 128, 110, 165);
  rad.addColorStop(0, glow);
  rad.addColorStop(0.42, glow);
  rad.addColorStop(1, "rgba(255,255,255,0)");
  g.globalAlpha = 0.94;
  g.fillStyle = rad;
  g.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

// -------------------------------------------------------------------------------------------------------- malzemeler
// Şeffaf plastik, kenarları ortasından koyu olduğu için "şeffaf" görünür (ışık kenarda yansıyıp uzaklaşır, malzemenin
// içinde daha uzun yol alır). three.js geçirgen malzemede yansımayı geçen ışığın ÜSTÜNE ekler ama geçen ışığı hiç
// koyulaştırmaz; açık fonda şeffaf parça silikleşir. Bu küçük ek, geçen ışığı sıyırma açılarda soğurur.
/**
 * @param {MeshPhysicalMaterial} mat
 * @param {[number, number, number]} tint kenar rengi (doğrusal)
 * @param {number} power
 */
function glassEdge(mat, tint, power) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uEdgeTint = { value: new Color(tint[0], tint[1], tint[2]) };
    shader.uniforms.uEdgePower = { value: power };
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform vec3 uEdgeTint;\nuniform float uEdgePower;")
      .replace(
        "#include <transmission_fragment>",
        "#include <transmission_fragment>\n\ttotalDiffuse *= mix( vec3( 1.0 ), uEdgeTint, saturate( pow( 1.0 - saturate( dot( geometryNormal, geometryViewDir ) ), uEdgePower ) ) );",
      );
  };
  mat.customProgramCacheKey = () => "bte3d-glass-edge";
  return mat;
}

/** Malzemeler GLB'deki malzeme ADINA göre atanır (Blender betiğindeki adlar). */
function makeMaterials() {
  const P = MeshPhysicalMaterial;
  /** @param {number} r @param {number} g @param {number} b */
  const rgb = (r, g, b) => new Color(r, g, b);
  return {
    // Gövde: inci grisi metalik boya + parlak vernik
    Shell: new P({ color: 0xc9c8c5, metalness: 0.6, roughness: 0.34, clearcoat: 1, clearcoatRoughness: 0.06 }),
    // Pil kapağı ve düğmeler: mat grafit
    Door: new P({ color: 0x363b45, metalness: 0.4, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.2 }),
    Control: new P({ color: 0x3c414b, metalness: 0.4, roughness: 0.36, clearcoat: 0.5, clearcoatRoughness: 0.18 }),
    // Ayrım çizgilerinin ve mikrofon açıklıklarının içi
    Gap: new MeshStandardMaterial({ color: 0x050506, metalness: 0, roughness: 1 }),
    // Kanca bileziği, menteşe pimi
    Metal: new MeshStandardMaterial({ color: 0xdadbde, metalness: 1, roughness: 0.2 }),
    // Kulak kancası (sert şeffaf plastik)
    Clear: glassEdge(new P({ color: 0xffffff, metalness: 0, roughness: 0.03, transmission: 1, ior: 1.52, thickness: 0.004, attenuationColor: rgb(0.8, 0.87, 0.92), attenuationDistance: 0.006, side: DoubleSide }), [0.26, 0.33, 0.4], 2),
    // Ses tüpü (yumuşak şeffaf PVC)
    Tube: glassEdge(new P({ color: 0xffffff, metalness: 0, roughness: 0.04, transmission: 1, ior: 1.48, thickness: 0.002, attenuationColor: rgb(0.84, 0.9, 0.94), attenuationDistance: 0.004, side: DoubleSide }), [0.3, 0.36, 0.43], 2),
    // Kulak kalıbı (pembe-şeffaf akrilik)
    Mould: glassEdge(new P({ color: 0xffffff, metalness: 0, roughness: 0.06, transmission: 1, ior: 1.49, thickness: 0.005, attenuationColor: rgb(0.98, 0.78, 0.72), attenuationDistance: 0.01, side: DoubleSide }), [0.62, 0.33, 0.29], 1.6),
  };
}

// ------------------------------------------------------------------------------------------------------ zemin gölgesi
// Cihazın üstten görünüşü bir kez küçük bir dokuya çizilir, bulanıklaştırılır ve cihazın altındaki zemin düzlemine
// yumuşak gölge olarak serilir. Düzlem cihazla birlikte yatayda döner; kare başına ek çizim maliyeti yoktur.
/**
 * @param {WebGLRenderer} renderer
 * @param {Group} object nötr duruştaki model
 * @param {number} half zemin düzleminin yarı kenarı (m)
 */
function bakeShadow(renderer, object, half) {
  const RES = 256;
  const a = new WebGLRenderTarget(RES, RES);
  const b = new WebGLRenderTarget(RES, RES);
  const cam = new OrthographicCamera(-half, half, half, -half, 0.001, 1);
  cam.position.set(0, 0.5, 0);
  cam.up.set(0, 0, -1);
  cam.lookAt(0, 0, 0);
  const sc = new Scene();
  sc.overrideMaterial = new MeshBasicMaterial({ color: 0xffffff });
  sc.add(object);
  const prevColor = renderer.getClearColor(new Color());
  const prevAlpha = renderer.getClearAlpha();
  renderer.setClearColor(0x000000, 1);
  renderer.setRenderTarget(a);
  renderer.clear();
  renderer.render(sc, cam);
  sc.remove(object);
  sc.overrideMaterial.dispose();
  // 9 örnekli ayrık Gauss bulanıklığı, yatay + dikey, üç tur (geniş ve yumuşak)
  const blur = new ShaderMaterial({
    uniforms: { map: { value: null }, dir: { value: new Vector2() } },
    vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }",
    fragmentShader:
      "uniform sampler2D map; uniform vec2 dir; varying vec2 vUv; void main() { vec4 s = texture2D( map, vUv ) * 0.2270270270; s += ( texture2D( map, vUv + dir * 1.3846153846 ) + texture2D( map, vUv - dir * 1.3846153846 ) ) * 0.3162162162; s += ( texture2D( map, vUv + dir * 3.2307692308 ) + texture2D( map, vUv - dir * 3.2307692308 ) ) * 0.0702702703; gl_FragColor = s; }",
    depthTest: false,
    depthWrite: false,
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), blur);
  quad.frustumCulled = false;
  const qs = new Scene();
  qs.add(quad);
  const qc = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  for (const r of [3.2, 2.4, 1.6]) {
    blur.uniforms.map.value = a.texture;
    blur.uniforms.dir.value.set(r / RES, 0);
    renderer.setRenderTarget(b);
    renderer.render(qs, qc);
    blur.uniforms.map.value = b.texture;
    blur.uniforms.dir.value.set(0, r / RES);
    renderer.setRenderTarget(a);
    renderer.render(qs, qc);
  }
  renderer.setRenderTarget(null);
  renderer.setClearColor(prevColor, prevAlpha);
  blur.dispose();
  quad.geometry.dispose();
  b.dispose();
  return a;
}

// ---------------------------------------------------------------------------------------------------- görüntüleyici
/**
 * Tek bir görüntüleyiciyi çalıştırır.
 * @param {HTMLElement} root `[data-bte3d]` bölümü
 * @param {boolean} [eager] kullanıcı bu görüntüleyiciye dokunarak/odaklanarak başlattıysa model görünürlük beklemeden iner
 */
export function initBteViewer(root, eager = false) {
  if (root.dataset.bte3dReady === "true") return;
  /** @param {string} name */
  const part = (name) => /** @type {HTMLElement | null} */ (root.querySelector(`[data-bte3d-${name}]`));
  const stage = part("stage");
  const autoBtn = /** @type {HTMLButtonElement | null} */ (part("auto"));
  if (!stage || !autoBtn) return;
  root.dataset.bte3dReady = "true";
  const hint = part("hint");
  const bar = part("progress");
  const status = part("status");
  const autoLabel = part("auto-label");
  const zin = /** @type {HTMLButtonElement | null} */ (part("zoom-in"));
  const zout = /** @type {HTMLButtonElement | null} */ (part("zoom-out"));
  const src = root.dataset.bte3dModel || modelUrl;

  /** @type {{ saveData?: boolean; effectiveType?: string } | undefined} */
  const conn = /** @type {any} */ (navigator).connection;
  // Veri tasarrufu / yavaş bağlantı: model yine de yüklenir (kullanıcı istediğinde ya da yaklaşınca) ama kendiliğinden dönmez.
  const lite = !!conn?.saveData || /(^|-)(2g|3g)$/.test(conn?.effectiveType ?? "");
  const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduced = () => reduceMq.matches || document.documentElement.dataset.a11yMotion === "reduce";

  // Görünüm durumu: `cur` çizilen, `goal` gidilen değer (aradaki fark yumuşatılır).
  const cur = { az: VIEW0.az, tilt: VIEW0.tilt, zoom: 1 };
  const goal = { az: VIEW0.az, tilt: VIEW0.tilt, zoom: 1 };
  let zoomIndex = 0;
  let spinVel = 0; // sürüklemeden sonra kalan dönüş hızı (rad/sn)
  let auto = false;
  let wantAuto = false;
  let userStopped = false;
  let visible = false;
  /** @type {"idle" | "loading" | "ready" | "failed"} */
  let state = "idle";
  let raf = 0;
  let lastTs = 0;
  /** @type {null | { id: number; x: number; y: number; t: number; mode: "pending" | "rotate" | "scroll"; v: number }} */
  let drag = null;
  /** @type {null | { renderer: WebGLRenderer; scene: Scene; camera: PerspectiveCamera; tilt: Group; spin: Group; floorSpin: Group; place: () => void; canvas: HTMLCanvasElement }} */
  let gl = null;
  /** Kurulum adımlarının zaman damgaları (ms, performance.now) — yalnızca ölçüm/test içindir. @type {Record<string, number>} */
  const timings = { init: performance.now() };
  /** Hata durumunda tuvali ve WebGL bağlamını bırakır. @type {null | (() => void)} */
  let release = null;
  // Kullanıcı görüntüleyiciye kendisi dokundu/odaklandı: kurulum boş an beklemeden ilerler.
  let urgent = eager;

  /** @param {string} text */
  const announce = (text) => {
    if (status) status.textContent = text;
  };
  const hideHint = () => hint?.setAttribute("hidden", "");
  const setAutoUi = () => {
    autoBtn.setAttribute("aria-pressed", String(auto || wantAuto));
    if (autoLabel) autoLabel.textContent = auto || wantAuto ? "Dönüşü durdur" : "Otomatik döndür";
  };
  const setZoomUi = () => {
    if (zin) zin.disabled = zoomIndex === ZOOMS.length - 1;
    if (zout) zout.disabled = zoomIndex === 0;
  };

  // ---- çizim döngüsü: yalnızca bir şey değişirken çalışır (otomatik dönüş, sürükleme, yumuşatma); aksi halde durur.
  const settled = () => Math.abs(goal.az - cur.az) < 2e-4 && Math.abs(goal.tilt - cur.tilt) < 2e-4 && Math.abs(goal.zoom - cur.zoom) < 1e-3;
  let slowFrames = 0;
  let frames = 0;
  const draw = () => {
    if (!gl) return;
    gl.spin.rotation.y = cur.az;
    gl.floorSpin.rotation.y = cur.az;
    gl.tilt.rotation.x = cur.tilt;
    if (gl.camera.zoom !== cur.zoom || cur.zoom > 1.001) gl.place(); // yakınlaştırılmışken kadraj dikey açıya da bağlıdır
    gl.renderer.render(gl.scene, gl.camera);
  };
  /** @param {number} ts */
  const tick = (ts) => {
    raf = 0;
    if (!gl || !visible || document.hidden) {
      lastTs = 0;
      return;
    }
    const raw = lastTs ? (ts - lastTs) / 1000 : 1 / 60;
    const dt = Math.min(0.05, raw);
    lastTs = ts;
    if (auto && !drag) goal.az += AUTO_SPEED * dt;
    else if (!drag && spinVel) {
      goal.az += spinVel * dt;
      spinVel *= Math.exp(-dt / 0.3);
      if (Math.abs(spinVel) < 0.03) spinVel = 0;
    }
    const still = reduced();
    const k = still ? 1 : 1 - Math.exp(-dt / 0.075);
    cur.az += (goal.az - cur.az) * k;
    cur.tilt += (goal.tilt - cur.tilt) * k;
    cur.zoom += (goal.zoom - cur.zoom) * (still ? 1 : 1 - Math.exp(-dt / 0.13));
    draw();
    // Yavaş cihaz: kareler sürekli 30 ms'yi aşıyorsa çizim çözünürlüğü bir kademe düşürülür (akıcılık > keskinlik).
    frames += 1;
    if (raw > 0.03) slowFrames += 1;
    if (frames >= 45) {
      if (slowFrames > 30 && gl.renderer.getPixelRatio() > 1) {
        gl.renderer.setPixelRatio(Math.max(1, gl.renderer.getPixelRatio() - 0.5));
        gl.renderer.transmissionResolutionScale = 0.5;
        gl.place();
      }
      frames = slowFrames = 0;
    }
    if (auto || spinVel || drag || !settled()) schedule();
    else lastTs = 0;
  };
  const schedule = () => {
    if (!raf && gl) raf = requestAnimationFrame(tick);
  };

  const stopAuto = () => {
    wantAuto = false;
    if (auto) auto = false;
    setAutoUi();
  };
  const startAuto = () => {
    if (state !== "ready") {
      wantAuto = true; // model inince başlar
      setAutoUi();
      return;
    }
    auto = true;
    wantAuto = false;
    spinVel = 0;
    setAutoUi();
    schedule();
  };

  // ---- yükleme
  const fail = () => {
    state = "failed";
    root.classList.remove("is-loading");
    root.classList.add("is-failed");
    stopAuto();
    gl = null;
    release?.(); // tuval ve WebGL bağlamı bırakılır (model inmeden hata olduysa da)
    release = null;
    announce("Üç boyutlu görünüm bu cihazda açılamadı; cihazın görseli gösteriliyor.");
  };

  const start = () => {
    if (state !== "idle") return;
    state = "loading";
    timings.start = performance.now();
    root.classList.add("is-loading");
    const canvas = document.createElement("canvas");
    canvas.className = "bte3d__canvas";
    canvas.setAttribute("aria-hidden", "true");
    /** @type {WebGLRenderer} */
    let renderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch {
      fail();
      return;
    }
    release = () => {
      canvas.remove();
      renderer.dispose();
    };
    // Keskinlik: ekran yoğunluğu kadar (en çok 2×); düşük yoğunluklu ekranda kenarlar için 1,5× çizilir.
    const dpr = window.devicePixelRatio || 1;
    renderer.setPixelRatio(dpr < 1.5 ? 1.5 : Math.min(dpr, 2));
    renderer.toneMapping = NeutralToneMapping;
    const scene = new Scene();
    const camera = new PerspectiveCamera(FOV, 1, 0.01, 2);
    const tilt = new Group();
    const spin = new Group();
    const floorSpin = new Group();
    tilt.add(spin);
    scene.add(tilt, floorSpin);
    /** @type {WebGLRenderTarget | null} */
    let envTarget = null;
    /** @type {WebGLRenderTarget | null} */
    let shadowTarget = null;
    /** @type {Group | null} */
    let model = null;
    /** @type {Mesh | null} */
    let floor = null;
    let hv = 0.021; // dikey yarı yükseklik
    let hh = 0.02; // yatay dönüşte en geniş yarı genişlik
    let radius = 0.028;
    const target = new Vector3();

    let sizeW = 0;
    let sizeH = 0;
    const place = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      if (!w || !h) return;
      // Tuvalin boyutu yalnızca gerçekten değişince ayarlanır (her atamada çizim arabelleği yeniden ayrılır).
      if (w !== sizeW || h !== sizeH) {
        sizeW = w;
        sizeH = h;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
      }
      // Kadraj: cihaz dikeyde (üst boşluk + alttaki gölge payıyla) ya da dar sahnede yatayda sığacak kadar uzaktan.
      // (Ölçüldü: tam turda cihazın sınır kutusu üstte ≥ %3 boşluk bırakır, altta ipucu etiketine binmez.)
      const half = Math.max(hv * 1.3, (hh * 1.08) / camera.aspect);
      const dist = half / Math.tan((FOV * DEG) / 2);
      // 1×'te gölgeye ve ipucu etiketine yer açmak için cihaz biraz yukarıda durur; yakınlaştırınca ortalanır.
      const zf = clamp((cur.zoom - 1) / (ZOOMS[ZOOMS.length - 1] - 1), 0, 1);
      const drop = hv * 0.19 * (1 - clamp(zf * 2.2, 0, 1));
      // Yakınlaştırılmışken dikey açı kadrajı da taşır: yukarıdan bakınca cihazın üstü (kanca, bilezik), aşağıdan
      // bakınca altı (pil kapağı) ortaya gelir. Böylece ayrı bir kaydırma denetimi olmadan her yer incelenebilir.
      const nod = cur.tilt >= 0 ? cur.tilt / TILT_MAX : cur.tilt / -TILT_MIN;
      target.set(0, -drop + zf * hv * 0.62 * nod, 0);
      camera.position.set(0, target.y + Math.sin(CAM_PITCH) * dist, Math.cos(CAM_PITCH) * dist);
      camera.lookAt(target);
      camera.near = Math.max(0.004, dist - radius * 1.6);
      camera.far = dist + radius * 2.6;
      camera.zoom = cur.zoom;
      camera.updateProjectionMatrix();
    };

    // Işık + fon ve zemin gölgesi: ilk kurulumda ve WebGL bağlamı geri geldiğinde üretilir.
    const dressLight = () => {
      envTarget?.dispose();
      envTarget = studioEnvironment(renderer);
      scene.environment = envTarget.texture;
      /** @type {CanvasTexture | null} */ (scene.background)?.dispose();
      scene.background = backdropTexture(stage);
    };
    const dressShadow = () => {
      if (!model || !floor) return;
      shadowTarget?.dispose();
      spin.remove(model);
      shadowTarget = bakeShadow(renderer, model, /** @type {PlaneGeometry} */ (floor.geometry).parameters.width / 2);
      spin.add(model);
      const fm = /** @type {MeshBasicMaterial} */ (floor.material);
      fm.alphaMap = shadowTarget.texture;
      fm.needsUpdate = true;
    };
    // Kurulumun ağır adımları (ışık haritası, gölge, gölgelendirici derleme, ilk kare) AYRI görevlere bölünür ve
    // tarayıcının boş anlarına bırakılır: aralarda kaydırma ve dokunmaya yanıt verilebilir. İki adım (ışık haritası
    // ve ilk kare) ekran kartı sürücüsünde gölgelendirici derlediği için tek başına ≈ 0,2 sn sürebilir; bölünemez.
    // Kullanıcı beklemeden dokunduysa (`urgent`) boş an beklenmez.
    const breathe = () =>
      new Promise((r) => {
        if (!urgent && typeof window.requestIdleCallback === "function") window.requestIdleCallback(() => r(undefined), { timeout: 500 });
        else setTimeout(r, 0);
      });
    const alive = () => state === "loading";

    /** @param {{ scene: Group }} gltf */
    const build = async (gltf) => {
      if (!alive()) return;
      model = gltf.scene;
      const mats = makeMaterials();
      model.traverse((o) => {
        const mesh = /** @type {Mesh} */ (o);
        if (!mesh.isMesh) return;
        const old = /** @type {import("three").Material} */ (mesh.material);
        const m = mats[/** @type {keyof typeof mats} */ (old.name)];
        if (m) {
          m.name = old.name;
          mesh.material = m;
          old.dispose();
        }
      });
      // glTF'te cihazın dış yüzü -Z'ye bakar; kameraya (+Z) çevrilir. Model kendi sınır kutusunun ortasındadır.
      model.rotation.y = Math.PI;
      model.updateMatrixWorld(true);
      const size = new Box3().setFromObject(model).getSize(new Vector3());
      hv = (size.y / 2) * 1.04;
      hh = Math.hypot(size.x, size.z) / 2;
      radius = size.length() / 2;
      const floorHalf = hh * 1.9;
      floor = new Mesh(new PlaneGeometry(floorHalf * 2, floorHalf * 2), new MeshBasicMaterial({ color: 0x0b2a40, transparent: true, opacity: 0.34, depthWrite: false, toneMapped: false }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -hv * 1.07;
      floor.renderOrder = -1;
      floorSpin.add(floor);
      spin.add(model);
      timings.scene = performance.now();
      await breathe();
      if (!alive()) return;
      dressLight();
      timings.light = performance.now();
      await breathe();
      if (!alive()) return;
      dressShadow();
      timings.shadow = performance.now();
      place();
      gl = { renderer, scene, camera, tilt, spin, floorSpin, place, canvas };
      stage.insertBefore(canvas, stage.querySelector("[data-bte3d-hint]"));
      await breathe();
      if (!alive()) return;
      // Gölgelendiriciler arka planda derlenir (destekleyen tarayıcıda ana iş parçacığı takılmaz), sonra ilk kare çizilir.
      if (typeof renderer.compileAsync === "function") await renderer.compileAsync(scene, camera).catch(() => {});
      timings.compiled = performance.now();
      await breathe();
      if (!alive() || !gl) return;
      draw();
      timings.ready = performance.now();
      state = "ready";
      root.classList.remove("is-loading");
      root.classList.add("is-ready");
      setZoomUi();
      if (wantAuto || (visible && !userStopped && !reduced() && !lite)) startAuto();
      else setAutoUi();
    };

    timings.renderer = performance.now();
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      src,
      (gltf) => {
        timings.model = performance.now();
        build(gltf).catch(() => fail());
      },
      (e) => {
        if (bar && e.total > 0) bar.style.transform = `scaleX(${clamp(e.loaded / e.total, 0, 1)})`;
      },
      () => fail(),
    );

    new ResizeObserver(() => {
      if (!gl) return;
      place();
      draw();
    }).observe(stage);
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      root.classList.remove("is-ready"); // poster görünür kalır
    });
    canvas.addEventListener("webglcontextrestored", () => {
      if (!gl) return;
      dressLight();
      dressShadow();
      place();
      draw();
      root.classList.add("is-ready");
    });
  };

  // Görünürlük: model görüntüleyici görünür alana 200 px yaklaşınca iner; görünür değilken hiçbir kare çizilmez.
  // (Sayfa yüklenmesinin bitmesini önyükleyici bekler; bu modül ancak ondan sonra ya da kullanıcı niyetiyle çalışır.)
  new IntersectionObserver(
    (entries) => {
      visible = !!entries[entries.length - 1]?.isIntersecting;
      if (!visible) return;
      start();
      if (state === "ready") {
        if (!auto && !userStopped && !reduced() && !lite) startAuto();
        else schedule();
      }
    },
    { rootMargin: "200px 0px", threshold: [0, 0.25] },
  ).observe(stage);

  const interact = () => {
    urgent = true;
    start();
    stopAuto();
    userStopped = true;
    hideHint();
  };

  // ---- basılı tutup sürükleme (fare, kalem, dokunmatik)
  // Dokunmatikte ilk hareket çoğunlukla DİKEY ise hareket sayfaya bırakılır (kaydırma engellenmez); yatay başlarsa
  // cihaz döner ve aynı hareketle dikey açı da değişir. CSS `touch-action: pan-y` + aşağıdaki `touchmove` birlikte çalışır.
  stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (drag) return;
    const touch = e.pointerType === "touch";
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), mode: touch ? "pending" : "rotate", v: 0 };
    if (!touch) {
      interact();
      spinVel = 0;
      stage.classList.add("is-dragging");
    } else start();
    try {
      stage.setPointerCapture(e.pointerId);
    } catch {
      /* yakalama desteklenmiyorsa olaylar yine sahneye gelir */
    }
  });
  stage.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (drag.mode === "pending") {
      if (Math.hypot(dx, dy) < 6) return;
      if (Math.abs(dx) < Math.abs(dy)) {
        drag.mode = "scroll"; // dikey başladı: sayfa kayar
        return;
      }
      drag.mode = "rotate";
      interact();
      spinVel = 0;
      stage.classList.add("is-dragging");
      drag.x = e.clientX;
      drag.y = e.clientY;
      drag.t = performance.now();
      return;
    }
    if (drag.mode !== "rotate") return;
    const w = Math.max(240, stage.clientWidth);
    const dAz = (dx / w) * 3.4; // sahne genişliği kadar sürükleme ≈ 195°
    goal.az += dAz;
    goal.tilt = clamp(goal.tilt + (dy / w) * 2.4, TILT_MIN, TILT_MAX);
    const now = performance.now();
    const dt = Math.max(1, now - drag.t) / 1000;
    drag.v = drag.v * 0.6 + (dAz / dt) * 0.4;
    drag.x = e.clientX;
    drag.y = e.clientY;
    drag.t = now;
    schedule();
  });
  /** @param {PointerEvent} e */
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    stage.classList.remove("is-dragging");
    try {
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    } catch {
      /* yok sayılır */
    }
    if (d.mode !== "rotate") return;
    // Bırakınca kısa bir süre kendi hızıyla dönmeye devam eder (hareket azaltılmışsa hemen durur).
    spinVel = e.type === "pointerup" && !reduced() && performance.now() - d.t < 90 ? clamp(d.v, -9, 9) : 0;
    schedule();
  };
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);
  stage.addEventListener(
    "touchmove",
    (e) => {
      if (drag?.mode === "rotate" && e.cancelable) e.preventDefault();
    },
    { passive: false },
  );

  // ---- klavye ve düğmeler
  const VIEW_NAMES = ["dış yüz", "ön kenar: kanca, tüp ve kulak kalıbı", "iç yüz: kulak kalıbının kanal ucu", "sırt: düğmeler ve mikrofon açıklıkları"];
  const describe = () => {
    const q = Math.round((((goal.az % TAU) + TAU) % TAU) / (Math.PI / 2)) % 4;
    const v = goal.tilt > 14 * DEG ? ", yukarıdan" : goal.tilt < -10 * DEG ? ", aşağıdan" : "";
    announce(`Görünüm: ${VIEW_NAMES[q]}${v}`);
  };
  /** @param {number} dAz @param {number} dTilt */
  const nudge = (dAz, dTilt) => {
    interact();
    spinVel = 0;
    goal.az += dAz;
    goal.tilt = clamp(goal.tilt + dTilt, TILT_MIN, TILT_MAX);
    schedule();
    describe();
  };
  /** @param {number} i */
  const setZoom = (i) => {
    urgent = true;
    start();
    hideHint();
    zoomIndex = clamp(i, 0, ZOOMS.length - 1);
    goal.zoom = ZOOMS[zoomIndex];
    setZoomUi();
    schedule();
    announce(`Yakınlaştırma ${String(ZOOMS[zoomIndex]).replace(".", ",")}×`);
  };
  const reset = () => {
    interact();
    spinVel = 0;
    // En kısa yoldan başlangıç açısına döner.
    goal.az = VIEW0.az + TAU * Math.round((goal.az - VIEW0.az) / TAU);
    goal.tilt = VIEW0.tilt;
    zoomIndex = 0;
    goal.zoom = 1;
    setZoomUi();
    schedule();
    announce("Başlangıç görünümü");
  };
  const toggleAuto = () => {
    urgent = true;
    start();
    hideHint();
    if (auto || wantAuto) {
      stopAuto();
      userStopped = true;
      announce("Otomatik dönüş kapalı");
    } else {
      userStopped = false;
      startAuto();
      announce("Otomatik dönüş açık");
    }
  };
  stage.addEventListener("keydown", (e) => {
    const big = e.shiftKey ? 3 : 1;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        nudge(-15 * DEG * big, 0);
        break;
      case "ArrowRight":
        e.preventDefault();
        nudge(15 * DEG * big, 0);
        break;
      case "ArrowUp":
        e.preventDefault();
        nudge(0, 10 * DEG);
        break;
      case "ArrowDown":
        e.preventDefault();
        nudge(0, -10 * DEG);
        break;
      case "Home":
        e.preventDefault();
        reset();
        break;
      case " ":
      case "Enter":
        e.preventDefault();
        toggleAuto();
        break;
      case "+":
      case "=":
        setZoom(zoomIndex + 1);
        break;
      case "-":
        setZoom(zoomIndex - 1);
        break;
      case "Escape":
        stopAuto();
        userStopped = true;
        break;
    }
  });
  stage.addEventListener("focus", () => {
    urgent = true;
    start();
  });
  part("left")?.addEventListener("click", () => nudge(-30 * DEG, 0));
  part("right")?.addEventListener("click", () => nudge(30 * DEG, 0));
  part("reset")?.addEventListener("click", reset);
  autoBtn.addEventListener("click", toggleAuto);
  zin?.addEventListener("click", () => setZoom(zoomIndex + 1));
  zout?.addEventListener("click", () => setZoom(zoomIndex - 1));

  // Sekme gizlenince çizim durur; "hareketi azalt" sonradan açılırsa otomatik dönüş kapanır.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && gl) schedule();
  });
  const onMotionPref = () => {
    if (reduced()) stopAuto();
  };
  reduceMq.addEventListener("change", onMotionPref);
  new MutationObserver(onMotionPref).observe(document.documentElement, { attributes: true, attributeFilter: ["data-a11y-motion"] });

  // Test ve poster üretimi için küçük arayüz (sayfa davranışını değiştirmez).
  /** @type {any} */ (root).bteViewer = {
    get state() {
      return state;
    },
    get view() {
      return { az: cur.az / DEG, tilt: cur.tilt / DEG, zoom: cur.zoom, auto, pixelRatio: gl?.renderer.getPixelRatio() ?? 0 };
    },
    timings,
    /** Cihazın sahne içindeki sınır kutusu (CSS pikseli, sahnenin sol üstüne göre) — yerleşim testleri için. */
    screenBox() {
      if (!gl) return null;
      gl.scene.updateMatrixWorld(true);
      const b = new Box3().setFromObject(gl.spin, true);
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      const out = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity };
      for (const x of [b.min.x, b.max.x])
        for (const y of [b.min.y, b.max.y])
          for (const z of [b.min.z, b.max.z]) {
            const p = new Vector3(x, y, z).project(gl.camera);
            const px = (p.x * 0.5 + 0.5) * w;
            const py = (0.5 - p.y * 0.5) * h;
            out.left = Math.min(out.left, px);
            out.right = Math.max(out.right, px);
            out.top = Math.min(out.top, py);
            out.bottom = Math.max(out.bottom, py);
          }
      return out;
    },
    /** @param {number} azDeg @param {number} tiltDeg @param {number} [zoom] */
    setView(azDeg, tiltDeg, zoom = 1) {
      stopAuto();
      userStopped = true;
      spinVel = 0;
      cur.az = goal.az = azDeg * DEG;
      cur.tilt = goal.tilt = clamp(tiltDeg * DEG, -Math.PI / 2, Math.PI / 2);
      cur.zoom = goal.zoom = zoom;
      draw();
    },
  };

  setZoomUi();
  if (eager) start();
}

// Önyükleyici bu dosyayı `<script type="module">` olarak ekler; çalışınca sayfadaki bütün görüntüleyiciler başlatılır.
// `data-bte3d-eager`: kullanıcı kod inmeden o görüntüleyiciye dokunduysa/odaklandıysa önyükleyici tarafından konur.
for (const el of document.querySelectorAll("[data-bte3d]")) {
  const root = /** @type {HTMLElement} */ (el);
  initBteViewer(root, root.dataset.bte3dEager === "true");
}
