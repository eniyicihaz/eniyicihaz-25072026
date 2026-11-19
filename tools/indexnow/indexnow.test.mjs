// IndexNow bildirimcisi testleri — ağ kullanmaz (sahte fetch). Çalıştırma: node --test tools/indexnow/
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import * as ix from "./indexnow.mjs";

const ORIGIN = ix.CONFIG.origin;
const KEY = "abcdef0123456789abcd";
const NOW = new Date("2026-11-19T12:00:00.000Z");
const noSleep = async () => {};

// ---- yardımcılar -------------------------------------------------------------------------------------------------
function html({ path = "/", title = "Başlık", desc = "Açıklama", main = "<p>içerik</p>", header = "<header>H</header>", footer = "<footer>F</footer>", head = "", canonical } = {}) {
  const c = canonical ?? `${ORIGIN}${path}`;
  return `<!doctype html><html><head><title>${title}</title><meta name="description" content="${desc}"><link rel="canonical" href="${c}">${head}</head><body>${header}<main>${main}</main>${footer}</body></html>`;
}
function createMock(routes) {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url: String(url), method: (init.method ?? "GET").toUpperCase(), init });
    const r = routes.get(String(url));
    const spec = typeof r === "function" ? await r(String(url), init) : r;
    if (!spec) return new Response("yok", { status: 404, headers: { "content-type": "text/html" } });
    return new Response(spec.body ?? "", { status: spec.status ?? 200, headers: spec.headers ?? { "content-type": "text/html; charset=utf-8" } });
  };
  return { fetchImpl, calls };
}
const xml = { "content-type": "application/xml" };
const httpOf = (routes) => {
  const m = createMock(routes);
  return { ...m, http: ix.createHttp({ fetchImpl: m.fetchImpl, sleep: noSleep }) };
};

/** 12 sayfalık sahte site + sitemap + anahtar + IndexNow uç noktası. content[path] değiştirilerek "deploy" taklit edilir. */
function makeSite({ count = 12, gone = {}, keyOk = true, post } = {}) {
  const content = {};
  const paths = Array.from({ length: count }, (_, i) => `/p${i + 1}/`);
  for (const p of paths) content[p] = html({ path: p, main: `<h1>${p}</h1><p>metin ${p}</p>` });
  const routes = new Map();
  const rebuild = () => {
    routes.set(`${ORIGIN}/sitemap-index.xml`, { body: `<sitemapindex><sitemap><loc>${ORIGIN}/sitemap-0.xml</loc></sitemap></sitemapindex>`, headers: xml });
    routes.set(`${ORIGIN}/sitemap-0.xml`, { body: `<urlset>${Object.keys(content).map((p) => `<url><loc>${ORIGIN}${p}</loc></url>`).join("")}</urlset>`, headers: xml });
    for (const p of Object.keys(content)) routes.set(ORIGIN + p, () => ({ body: typeof content[p] === "function" ? content[p]() : content[p] }));
  };
  rebuild();
  if (keyOk) routes.set(`${ORIGIN}/${KEY}.txt`, { body: KEY, headers: { "content-type": "text/plain; charset=utf-8" } });
  for (const [p, spec] of Object.entries(gone)) routes.set(ORIGIN + p, spec);
  routes.set(ix.CONFIG.endpoint, post ?? { status: 200, body: "{}" });
  const m = createMock(routes);
  return { ...m, routes, content, rebuild, paths };
}
function tmpProject() {
  const dir = mkdtempSync(join(tmpdir(), "indexnow-test-"));
  const publicDir = join(dir, "public");
  writeFileSync(join(dir, "dummy"), "x");
  return { dir, publicDir, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}
async function runCli(site, args, { stateIn = null } = {}) {
  const proj = tmpProject();
  mkdirSync(proj.publicDir, { recursive: true });
  writeFileSync(join(proj.publicDir, `${KEY}.txt`), KEY);
  const out = [];
  const statePath = join(proj.dir, "state-in.json");
  const outState = join(proj.dir, "state-out.json");
  if (stateIn) writeFileSync(statePath, JSON.stringify(ix.serializeState(stateIn, NOW)));
  const code = await ix.run([...args, "--public-dir", proj.publicDir, "--out-state", outState, ...(stateIn ? ["--state", statePath] : []), "--retry-delays", "0,0"], {
    fetchImpl: site.fetchImpl, sleep: noSleep, now: () => NOW, out: (s) => out.push(s), env: {},
  });
  const written = existsSync(outState) ? JSON.parse(readFileSync(outState, "utf8")) : null;
  const posts = site.calls.filter((c) => c.method === "POST");
  proj.cleanup();
  return { code, text: out.join(""), state: written, posts };
}
const stateOf = (site) => Object.fromEntries(Object.keys(site.content).map((p) => [ORIGIN + p, { sig: ix.contentSignature(typeof site.content[p] === "function" ? site.content[p]() : site.content[p]) }]));

// ---- imza --------------------------------------------------------------------------------------------------------
test("decodeEntities: sayısal ve adlandırılmış varlıklar", () => {
  assert.equal(ix.decodeEntities("Darıca&#39;da &amp; Gebze &#x131; &quot;x&quot; &lt;b&gt;"), "Darıca'da & Gebze ı \"x\" <b>");
});

test("imza: Cloudflare e-posta gürültüsü (data-cfemail, email-protection#…) imzayı değiştirmez", () => {
  const mk = (hex) => html({ main: `<a href="/cdn-cgi/l/email-protection#${hex}" class="__cf_email__" data-cfemail="${hex}">[email&#160;protected]</a>` });
  assert.equal(ix.contentSignature(mk("11746375787f723f")), ix.contentSignature(mk("a0b1c2d3e4f50617")));
  assert.notEqual(mk("11746375787f723f"), mk("a0b1c2d3e4f50617")); // ham HTML farklı
});

test("imza: içerik değişiklikleri imzayı değiştirir", () => {
  const base = ix.contentSignature(html({ main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }));
  const variants = {
    metin: html({ main: '<h1>A</h1><p>y</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }),
    bağlantı: html({ main: '<h1>A</h1><p>x</p><a href="/b/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }),
    alt: html({ main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt2">' }),
    "görsel dosya adı": html({ main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/g.Abcd1234.webp" alt="alt1">' }),
    başlık: html({ title: "Başka", main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }),
    açıklama: html({ desc: "Başka açıklama", main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }),
    "json-ld": html({ head: '<script type="application/ld+json">{"a":1}</script>', main: '<h1>A</h1><p>x</p><a href="/a/">l</a><img src="/_astro/f.Abcd1234.webp" alt="alt1">' }),
  };
  for (const [ad, h] of Object.entries(variants)) assert.notEqual(ix.contentSignature(h), base, `${ad} imzayı değiştirmeli`);
});

test("imza: yalnızca görsel/yapısal değişiklikler imzayı DEĞİŞTİRMEZ", () => {
  const m = '<h1>A</h1><p class="x">x</p><img src="/_astro/f.Abcd1234.webp" alt="alt1">';
  const base = ix.contentSignature(html({ main: m }));
  assert.equal(ix.contentSignature(html({ main: m, header: "<header>BAŞKA MENÜ</header>", footer: "<footer>© 2027</footer>" })), base, "üst/alt bilgi");
  assert.equal(ix.contentSignature(html({ main: m, head: "<style>body{color:red}</style><script>var a=1</script><!-- yorum -->" })), base, "stil/betik/yorum");
  assert.equal(ix.contentSignature(html({ main: m.replace('class="x"', 'class="y z" style="color:red"') })), base, "sınıf/stil");
  assert.equal(ix.contentSignature(html({ main: m.replace("Abcd1234", "ZZzz9999") })), base, "görsel içerik özeti eki");
  assert.equal(ix.contentSignature(html({ head: '<script type="application/ld+json">{ "a": 1 }</script>', main: m })), ix.contentSignature(html({ head: '<script type="application/ld+json">{"a":1}</script>', main: m })), "JSON-LD boşluk");
});

// ---- uygunluk ----------------------------------------------------------------------------------------------------
const okRes = (h, extra = {}) => ({ status: 200, contentType: "text/html; charset=utf-8", xRobots: "", location: "", html: h, ...extra });
test("evaluatePage: uygun ve uygun olmayan durumlar", () => {
  const u = `${ORIGIN}/a/`;
  assert.deepEqual(ix.evaluatePage(u, okRes(html({ path: "/a/" }))), { ok: true, reason: "" });
  const reason = (r) => ix.evaluatePage(u, r).reason;
  assert.match(reason({ ...okRes(""), status: 404 }), /HTTP 404/);
  assert.match(reason({ ...okRes(""), status: 301, location: "/b/" }), /yönlendirme \(301/);
  assert.match(reason({ status: 0, error: "zaman aşımı" }), /istek hatası/);
  assert.match(reason(okRes(html({ path: "/a/" }), { contentType: "application/json" })), /HTML değil/);
  assert.match(reason(okRes(html({ path: "/a/" }), { xRobots: "noindex, nofollow" })), /X-Robots-Tag/);
  assert.match(reason(okRes(html({ path: "/a/", head: '<meta name="robots" content="noindex, follow">' }))), /meta robots noindex/);
  assert.match(reason(okRes(html({ path: "/a/", head: '<meta content="noindex" name="googlebot">' }))), /meta robots noindex/);
  assert.match(reason(okRes(html({ path: "/a/", canonical: `${ORIGIN}/baska/` }))), /canonical farklı/);
  assert.match(reason(okRes("<html><head><title>x</title></head><body><main>m</main></body></html>")), /canonical yok/);
  assert.match(reason(okRes(`<html><head><link rel="canonical" href="${u}"></head><body>m</body></html>`)), /<main> yok/);
});

// ---- sitemap -----------------------------------------------------------------------------------------------------
test("collectSitemapUrls: dizin → alt sitemap, varlık çözme, ana makine dışı ve sorgulu URL'leri ayıklama", async () => {
  const many = Array.from({ length: 12 }, (_, i) => `<url><loc>${ORIGIN}/s${i}/</loc></url>`).join("");
  const { http } = httpOf(new Map([
    [`${ORIGIN}/sitemap-index.xml`, { body: `<sitemapindex><sitemap><loc>${ORIGIN}/sitemap-0.xml</loc></sitemap></sitemapindex>`, headers: xml }],
    [`${ORIGIN}/sitemap-0.xml`, { body: `<urlset>${many}<url><loc>${ORIGIN}/a?x=1</loc></url><url><loc>https://baska.example/x/</loc></url><url><loc>${ORIGIN}/q&amp;r/</loc></url><url><loc>${ORIGIN}/s0/</loc></url></urlset>`, headers: xml }],
  ]));
  const r = await ix.collectSitemapUrls(http);
  assert.equal(r.urls.length, 13); // 12 + /q&r/ ; tekrar edilen /s0/ bir kez
  assert.ok(r.urls.includes(`${ORIGIN}/q&r/`));
  assert.equal(r.rejected.length, 2);
});
test("collectSitemapUrls: çok küçük sitemap ve yabancı alt sitemap reddedilir", async () => {
  const small = httpOf(new Map([[`${ORIGIN}/sitemap-index.xml`, { body: `<urlset><url><loc>${ORIGIN}/a/</loc></url></urlset>`, headers: xml }]]));
  await assert.rejects(ix.collectSitemapUrls(small.http), /şüpheli derecede küçük/);
  const foreign = httpOf(new Map([[`${ORIGIN}/sitemap-index.xml`, { body: "<sitemapindex><sitemap><loc>https://baska.example/s.xml</loc></sitemap></sitemapindex>", headers: xml }]]));
  await assert.rejects(ix.collectSitemapUrls(foreign.http), /başka ana makineye/);
  const down = httpOf(new Map([[`${ORIGIN}/sitemap-index.xml`, { status: 500, body: "x" }]]));
  await assert.rejects(ix.collectSitemapUrls(down.http), /Sitemap alınamadı/);
});

// ---- anahtar -----------------------------------------------------------------------------------------------------
test("findKey: geçerli, çoklu, uyuşmayan, BOM'lu, boş klasör", () => {
  const p = tmpProject();
  mkdirSync(p.publicDir, { recursive: true });
  assert.throws(() => ix.findKey(p.publicDir), /tam olarak bir/);
  writeFileSync(join(p.publicDir, "robots.txt"), "User-agent: *"); // 'robots' < 8 karakter: anahtar sayılmaz
  assert.throws(() => ix.findKey(p.publicDir), /tam olarak bir/);
  writeFileSync(join(p.publicDir, `${KEY}.txt`), KEY);
  assert.deepEqual(ix.findKey(p.publicDir), { key: KEY, file: `${KEY}.txt` });
  writeFileSync(join(p.publicDir, `${KEY}.txt`), `${KEY}\n`);
  assert.throws(() => ix.findKey(p.publicDir), /birebir aynı/);
  writeFileSync(join(p.publicDir, `${KEY}.txt`), Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from(KEY)]));
  assert.throws(() => ix.findKey(p.publicDir), /BOM/);
  writeFileSync(join(p.publicDir, `${KEY}.txt`), KEY);
  writeFileSync(join(p.publicDir, "0123456789abcdef.txt"), "0123456789abcdef");
  assert.throws(() => ix.findKey(p.publicDir), /bulunan: 2/);
  p.cleanup();
});
test("gerçek proje anahtarı: public/ içinde tek, 32 bayt, içerik = ad", () => {
  const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "public");
  const { key, file } = ix.findKey(publicDir);
  assert.match(key, /^[a-f0-9]{32}$/);
  assert.equal(readFileSync(join(publicDir, file)).length, 32);
});

test("verifyKeyLive: 200+text/plain+birebir gövde şart", async () => {
  const good = httpOf(new Map([[`${ORIGIN}/${KEY}.txt`, { body: KEY, headers: { "content-type": "text/plain; charset=utf-8" } }]]));
  assert.equal((await ix.verifyKeyLive(good.http, KEY)).ok, true);
  const nl = httpOf(new Map([[`${ORIGIN}/${KEY}.txt`, { body: `${KEY}\n`, headers: { "content-type": "text/plain" } }]]));
  assert.equal((await ix.verifyKeyLive(nl.http, KEY)).ok, false);
  const html404 = httpOf(new Map());
  assert.equal((await ix.verifyKeyLive(html404.http, KEY)).ok, false);
});

// ---- silinen/taşınan ---------------------------------------------------------------------------------------------
test("classifyGone", () => {
  const set = new Set([`${ORIGIN}/yeni/`]);
  const u = `${ORIGIN}/eski/`;
  assert.equal(ix.classifyGone(u, { status: 404 }, set).kind, "removed");
  assert.equal(ix.classifyGone(u, { status: 410 }, set).kind, "removed");
  assert.equal(ix.classifyGone(u, { status: 301, location: "/yeni/" }, set).kind, "moved");
  assert.equal(ix.classifyGone(u, { status: 308, location: `${ORIGIN}/yeni/` }, set).kind, "moved");
  assert.equal(ix.classifyGone(u, { status: 301, location: "/baska/" }, set).kind, "ignored");
  assert.equal(ix.classifyGone(u, { status: 302, location: "/yeni/" }, set).kind, "ignored");
  assert.equal(ix.classifyGone(u, { status: 200 }, set).kind, "ignored");
  assert.equal(ix.classifyGone(u, { status: 503 }, set).kind, "retry");
  assert.equal(ix.classifyGone(u, { status: 0, error: "x" }, set).kind, "retry");
});

// ---- karar mantığı -----------------------------------------------------------------------------------------------
const cur = (n, sigOf = (i) => `s${i}`) => Array.from({ length: n }, (_, i) => ({ url: `${ORIGIN}/p${i + 1}/`, ok: true, reason: "", sig: sigOf(i) }));
const prevOf = (list) => Object.fromEntries(list.map((c) => [c.url, { sig: c.sig }]));
const setOf = (list) => new Set(list.map((c) => c.url));

test("classify: BOOTSTRAP yalnızca kaydeder, hiçbir şey göndermez", () => {
  const current = cur(5);
  const r = ix.classify({ current, previous: null, sitemapSet: setOf(current), now: NOW });
  assert.equal(r.mode, "bootstrap");
  assert.deepEqual(r.urls, []);
  assert.equal(Object.keys(r.nextPages).length, 5);
  assert.equal(r.nextPages[current[0].url].notifiedAt, undefined);
});

test("classify: yeni/değişen/değişmeyen ayrımı ve durum ilerlemesi", () => {
  const before = cur(10);
  const after = cur(10, (i) => (i === 2 ? "DEGISTI" : `s${i}`)).concat([{ url: `${ORIGIN}/yeni/`, ok: true, reason: "", sig: "n" }]);
  const r = ix.classify({ current: after, previous: prevOf(before), sitemapSet: setOf(after), now: NOW });
  assert.equal(r.mode, "diff");
  assert.deepEqual(r.submit.changed, [`${ORIGIN}/p3/`]);
  assert.deepEqual(r.submit.new, [`${ORIGIN}/yeni/`]);
  assert.equal(r.counts.unchanged, 9);
  assert.deepEqual(r.urls, [`${ORIGIN}/p3/`, `${ORIGIN}/yeni/`].sort());
  assert.equal(r.nextPages[`${ORIGIN}/p3/`].sig, "DEGISTI");
  assert.equal(r.nextPages[`${ORIGIN}/p3/`].notifiedAt, NOW.toISOString());
  assert.equal(r.nextPages[`${ORIGIN}/p1/`].notifiedAt, undefined); // değişmeyen dokunulmadı
});

test("classify: hiç değişiklik yok → gönderilecek yok", () => {
  const c = cur(10);
  const r = ix.classify({ current: c, previous: prevOf(c), sitemapSet: setOf(c), now: NOW });
  assert.deepEqual(r.urls, []);
});

test("classify: uygun olmayan sayfa gönderilmez ve durumu İLERLEMEZ", () => {
  const before = cur(10);
  const after = before.map((c, i) => (i === 0 ? { ...c, ok: false, reason: "HTTP 404", sig: null } : { ...c, sig: i === 1 ? "DEGISTI" : c.sig }));
  const r = ix.classify({ current: after, previous: prevOf(before), sitemapSet: setOf(after), now: NOW });
  assert.deepEqual(r.urls, [`${ORIGIN}/p2/`]);
  assert.equal(r.ineligible.length, 1);
  assert.equal(r.nextPages[`${ORIGIN}/p1/`].sig, "s0"); // eski imza korundu
  const fresh = ix.classify({ current: [{ url: `${ORIGIN}/bozuk/`, ok: false, reason: "HTTP 404", sig: null }, ...before], previous: prevOf(before), sitemapSet: setOf(before), now: NOW });
  assert.equal(`${ORIGIN}/bozuk/` in fresh.nextPages, false); // hiç eklenmedi
});

test("classify: debounce — 10 dk içinde bildirilen URL ertelenir, durumu ilerlemez", () => {
  const before = cur(10);
  const prev = prevOf(before);
  prev[before[0].url].notifiedAt = new Date(NOW.getTime() - 3 * 60_000).toISOString();
  prev[before[1].url].notifiedAt = new Date(NOW.getTime() - 30 * 60_000).toISOString();
  const after = cur(10, (i) => (i < 2 ? "YENI" : `s${i}`));
  const r = ix.classify({ current: after, previous: prev, sitemapSet: setOf(after), now: NOW });
  assert.deepEqual(r.urls, [before[1].url]);
  assert.equal(r.deferred.length, 1);
  assert.equal(r.nextPages[before[0].url].sig, "s0");
});

test("classify: toplu değişiklik koruması — 30 serbest, 31 engelli; küçük sitede %40", () => {
  const big = cur(100);
  const mk = (n) => cur(100, (i) => (i < n ? "X" : `s${i}`));
  const at30 = ix.classify({ current: mk(30), previous: prevOf(big), sitemapSet: setOf(big), now: NOW });
  assert.equal(at30.urls.length, 30);
  assert.equal(at30.blocked.content, undefined);
  const at31 = ix.classify({ current: mk(31), previous: prevOf(big), sitemapSet: setOf(big), now: NOW });
  assert.deepEqual(at31.urls, []);
  assert.ok(at31.blocked.content);
  assert.equal(at31.nextPages[big[0].url].sig, "s0"); // ilerlemedi
  const confirmed = ix.classify({ current: mk(31), previous: prevOf(big), sitemapSet: setOf(big), now: NOW, opts: { confirmBulk: true } });
  assert.equal(confirmed.urls.length, 31);
  // küçük site: 10 URL'de 5 değişiklik = %50 > %40
  const small = cur(10);
  const half = ix.classify({ current: cur(10, (i) => (i < 5 ? "X" : `s${i}`)), previous: prevOf(small), sitemapSet: setOf(small), now: NOW });
  assert.ok(half.blocked.content);
  const four = ix.classify({ current: cur(10, (i) => (i < 4 ? "X" : `s${i}`)), previous: prevOf(small), sitemapSet: setOf(small), now: NOW });
  assert.equal(four.urls.length, 4); // tam %40 sınırda serbest
});

test("classify: 'all' modu değişmeyenleri de içerir, içerik korumasını aşar", () => {
  const c = cur(100);
  const r = ix.classify({ current: c, previous: prevOf(c), sitemapSet: setOf(c), now: NOW, opts: { all: true } });
  assert.equal(r.mode, "all");
  assert.equal(r.urls.length, 100);
  assert.equal(r.submit.refresh.length, 100);
  const boot = ix.classify({ current: c, previous: null, sitemapSet: setOf(c), now: NOW, opts: { all: true } });
  assert.equal(boot.urls.length, 100);
});

test("classify: silinen (404/410) ve taşınan (301→sitemap) bildirilir; diğerleri yok sayılır/korunur", () => {
  const live = cur(10);
  const gone = ["silinen", "tasinan", "bos-hedef", "hala-canli", "hata"].map((s) => `${ORIGIN}/${s}/`);
  const prev = { ...prevOf(live), ...Object.fromEntries(gone.map((u) => [u, { sig: "eski" }])) };
  const probes = new Map([
    [gone[0], { status: 404 }],
    [gone[1], { status: 301, location: "/p3/" }],
    [gone[2], { status: 301, location: "/sitemapte-yok/" }],
    [gone[3], { status: 200 }],
    [gone[4], { status: 503 }],
  ]);
  const r = ix.classify({ current: live, previous: prev, sitemapSet: setOf(live), probes, now: NOW });
  assert.deepEqual(r.submit.removed.map((x) => x.url), [gone[0]]);
  assert.deepEqual(r.submit.moved.map((x) => x.url), [gone[1]]);
  assert.equal(r.ignored.length, 2);
  assert.equal(r.retained.length, 1);
  assert.deepEqual(r.urls, [gone[0], gone[1]].sort());
  assert.equal(gone[0] in r.nextPages, false); // bildirilenler durumdan düşer
  assert.equal(gone[1] in r.nextPages, false);
  assert.equal(gone[3] in r.nextPages, true); // yok sayılan/korunan kalır
  assert.equal(gone[4] in r.nextPages, true);
});

test("classify: sitemap'te hiç olmamış 404 URL ASLA gönderilmez (yalnızca daha önce bilinenler)", () => {
  const live = cur(10);
  const r = ix.classify({ current: live, previous: prevOf(live), sitemapSet: setOf(live), probes: new Map(), now: NOW });
  assert.deepEqual(r.urls, []);
});

test("classify: toplu silinen/taşınan koruması", () => {
  const live = cur(10);
  const gone = Array.from({ length: 31 }, (_, i) => `${ORIGIN}/g${i}/`);
  const prev = { ...prevOf(live), ...Object.fromEntries(gone.map((u) => [u, { sig: "e" }])) };
  const probes = new Map(gone.map((u) => [u, { status: 404 }]));
  const r = ix.classify({ current: live, previous: prev, sitemapSet: setOf(live), probes, now: NOW });
  assert.deepEqual(r.urls, []);
  assert.ok(r.blocked.removal);
  assert.equal(gone[0] in r.nextPages, true);
});

test("classify: elle verilen ek adaylar — yalnızca doğrulanmış 404/410 ve sitemap'e 301; sitemap'teki URL reddedilir", () => {
  const live = cur(10);
  const ok404 = `${ORIGIN}/eski-404/`, ok301 = `${ORIGIN}/eski-301/`, alive = `${ORIGIN}/canli/`, inMap = live[0].url;
  const extraProbes = new Map([[ok404, { status: 404 }], [ok301, { status: 301, location: "/p2/" }], [alive, { status: 200 }], [inMap, { status: 200 }]]);
  const r = ix.classify({ current: live, previous: prevOf(live), sitemapSet: setOf(live), extraProbes, now: NOW });
  assert.deepEqual(r.urls, [ok404, ok301].sort());
  assert.equal(r.ignored.length, 2);
});

// ---- POST --------------------------------------------------------------------------------------------------------
test("buildRequestBody: biçim ve ana makine denetimi", () => {
  const b = ix.buildRequestBody(KEY, [`${ORIGIN}/a/`]);
  assert.deepEqual(b, { host: "www.eniyicihaz.com", key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: [`${ORIGIN}/a/`] });
  assert.throws(() => ix.buildRequestBody(KEY, ["https://eniyicihaz.com/a/"]), /uygun olmayan URL/); // apex reddedilir
  assert.throws(() => ix.buildRequestBody(KEY, [`${ORIGIN}/a/?x=1`]), /uygun olmayan URL/);
});

test("postIndexNow: 200/202 başarı; 403/422/429 yeniden denemeden başarısız; 5xx ve ağ hatası yeniden denenir", async () => {
  const run = async (responders) => {
    let i = 0;
    const m = createMock(new Map([[ix.CONFIG.endpoint, async () => { const r = responders[Math.min(i++, responders.length - 1)]; if (r instanceof Error) throw r; return r; }]]));
    const http = ix.createHttp({ fetchImpl: m.fetchImpl, sleep: noSleep });
    const res = await ix.postIndexNow({ http, key: KEY, urls: [`${ORIGIN}/a/`], sleep: noSleep, retryDelaysMs: [0, 0] });
    return { res, n: m.calls.length, call: m.calls[0] };
  };
  assert.equal((await run([{ status: 200 }])).res.ok, true);
  assert.equal((await run([{ status: 202 }])).res.ok, true);
  for (const s of [400, 403, 422]) { const r = await run([{ status: s }]); assert.equal(r.res.ok, false); assert.equal(r.n, 1, `${s}: yeniden deneme olmamalı`); }
  const r429 = await run([{ status: 429, headers: { "retry-after": "120" } }]);
  assert.equal(r429.n, 1);
  assert.equal(r429.res.results[0].retryAfter, "120");
  const r500 = await run([{ status: 500 }, { status: 502 }, { status: 200 }]);
  assert.equal(r500.res.ok, true);
  assert.equal(r500.n, 3);
  const rNet = await run([new Error("ağ"), { status: 200 }]);
  assert.equal(rNet.res.ok, true);
  const rAll = await run([{ status: 500 }]);
  assert.equal(rAll.res.ok, false);
  assert.equal(rAll.n, 3); // ilk deneme + 2 yeniden deneme
  // istek biçimi
  const first = (await run([{ status: 200 }])).call;
  assert.equal(first.method, "POST");
  assert.equal(first.init.headers["content-type"], "application/json; charset=utf-8");
  assert.equal(first.init.headers["user-agent"], "IndexNowNotifier/1.0");
  assert.equal(JSON.parse(first.init.body).host, "www.eniyicihaz.com");
});

test("postIndexNow: 10.000'den fazla URL parçalanır", async () => {
  const m = createMock(new Map([[ix.CONFIG.endpoint, { status: 200 }]]));
  const http = ix.createHttp({ fetchImpl: m.fetchImpl, sleep: noSleep });
  const urls = Array.from({ length: 10_001 }, (_, i) => `${ORIGIN}/u${i}/`);
  const res = await ix.postIndexNow({ http, key: KEY, urls, sleep: noSleep });
  assert.equal(res.ok, true);
  assert.equal(m.calls.length, 2);
  assert.equal(JSON.parse(m.calls[0].init.body).urlList.length, 10_000);
});

// ---- uçtan uca (run) ---------------------------------------------------------------------------------------------
test("run: --send YOK → kuru çalıştırma, hiçbir POST ve api.indexnow.org isteği yok", async () => {
  const site = makeSite();
  const r = await runCli(site, []);
  assert.equal(r.code, 0);
  assert.equal(r.posts.length, 0);
  assert.equal(site.calls.some((c) => c.url.startsWith("https://api.indexnow.org")), false);
  assert.match(r.text, /KURU ÇALIŞTIRMA/);
  assert.match(r.text, /POST gönderilmedi/);
  assert.match(r.text, /bootstrap/);
});

test("run: --send YOK ama gönderilecek URL VAR (değişen + silinen + taşınan) → yine de HİÇ POST yok, 'GÖNDERİLİRDİ' yazılır", async () => {
  const site = makeSite({ gone: { "/eski-silinen/": { status: 404, body: "yok" }, "/eski-tasinan/": { status: 301, headers: { location: `${ORIGIN}/p3/` } } } });
  const prev = { ...stateOf(site), [`${ORIGIN}/eski-silinen/`]: { sig: "x" }, [`${ORIGIN}/eski-tasinan/`]: { sig: "y" } };
  site.content["/p4/"] = html({ path: "/p4/", main: "<h1>/p4/</h1><p>GÜNCELLENDİ</p>" });
  const r = await runCli(site, [], { stateIn: prev });
  assert.equal(r.code, 0);
  assert.equal(r.posts.length, 0, "--send yokken POST atılmamalı");
  assert.equal(site.calls.some((c) => c.url.startsWith("https://api.indexnow.org")), false);
  assert.match(r.text, /GÖNDERİLİRDİ \(3\)/);
  assert.match(r.text, /POST gönderilmedi/);
});

test("run: --send + durum yok → BOOTSTRAP: POST yok, 12 imza kaydedilir", async () => {
  const site = makeSite();
  const r = await runCli(site, ["--send"]);
  assert.equal(r.code, 0);
  assert.equal(r.posts.length, 0);
  assert.equal(Object.keys(r.state.pages).length, 12);
});

test("run: --send + değişen sayfa → yalnızca o URL gönderilir, durum ilerler", async () => {
  const site = makeSite();
  const prev = stateOf(site);
  site.content["/p4/"] = html({ path: "/p4/", main: "<h1>/p4/</h1><p>GÜNCELLENDİ</p>" });
  const r = await runCli(site, ["--send"], { stateIn: prev });
  assert.equal(r.code, 0);
  assert.equal(r.posts.length, 1);
  const body = JSON.parse(r.posts[0].init.body);
  assert.deepEqual(body.urlList, [`${ORIGIN}/p4/`]);
  assert.equal(body.host, "www.eniyicihaz.com");
  assert.equal(r.state.pages[`${ORIGIN}/p4/`].notifiedAt, NOW.toISOString());
});

test("run: değişiklik yok → POST yok", async () => {
  const site = makeSite();
  const r = await runCli(site, ["--send"], { stateIn: stateOf(site) });
  assert.equal(r.code, 0);
  assert.equal(r.posts.length, 0);
  assert.match(r.text, /Gönderilecek URL yok/);
});

test("run: anahtar canlıda doğrulanamazsa --send durur, POST yok", async () => {
  const site = makeSite({ keyOk: false });
  const r = await runCli(site, ["--send"]);
  assert.equal(r.code, 1);
  assert.equal(r.posts.length, 0);
  assert.match(r.text, /Anahtar dosyası canlıda doğrulanamadı/);
  const dry = await runCli(makeSite({ keyOk: false }), []);
  assert.equal(dry.code, 0); // kuru çalıştırma deploy öncesi çalışabilir
  assert.match(dry.text, /canlı doğrulama: ✗/);
});

test("run: POST başarısız → çıkış 1, durum dosyası YAZILMAZ", async () => {
  const site = makeSite({ post: { status: 403 } });
  const prev = stateOf(site);
  site.content["/p2/"] = html({ path: "/p2/", main: "<h1>x</h1><p>başka</p>" });
  const r = await runCli(site, ["--send"], { stateIn: prev });
  assert.equal(r.code, 1);
  assert.equal(r.state, null);
  assert.match(r.text, /durum dosyası YAZILMADI/);
});

test("run: kararsız imza (gürültü) tespit edilirse çalışma durur", async () => {
  const site = makeSite();
  site.content["/p1/"] = () => html({ path: "/p1/", main: `<p>rastgele ${Math.random()}</p>` });
  const r = await runCli(site, ["--send"], { stateIn: stateOf(makeSite()) });
  assert.equal(r.code, 1);
  assert.equal(r.posts.length, 0);
  assert.match(r.text, /Kararlılık denetimi BAŞARISIZ/);
});

test("run: toplu değişiklik koruması — 12 sayfanın 6'sı değişirse otomatik gönderim yok; --confirm-bulk ile gider", async () => {
  const prev = stateOf(makeSite());
  const changed = () => { const s = makeSite(); for (const p of s.paths.slice(0, 6)) s.content[p] = html({ path: p, main: "<h1>toplu</h1>" }); return s; };
  const blocked = await runCli(changed(), ["--send"], { stateIn: prev });
  assert.equal(blocked.code, 0);
  assert.equal(blocked.posts.length, 0);
  assert.match(blocked.text, /TOPLU DEĞİŞİKLİK KORUMASI/);
  const forced = await runCli(changed(), ["--send", "--confirm-bulk"], { stateIn: prev });
  assert.equal(forced.posts.length, 1);
  assert.equal(JSON.parse(forced.posts[0].init.body).urlList.length, 6);
});

test("run: silinen + taşınan + kararlı site — yalnızca önceden bilinen URL'ler bildirilir", async () => {
  const site = makeSite({ gone: { "/eski-silinen/": { status: 404, body: "yok" }, "/eski-tasinan/": { status: 301, headers: { location: `${ORIGIN}/p3/` } } } });
  const prev = { ...stateOf(site), [`${ORIGIN}/eski-silinen/`]: { sig: "x" }, [`${ORIGIN}/eski-tasinan/`]: { sig: "y" } };
  // sitemap'te hiç olmamış 404 URL durumda YOK → gönderilmemeli
  site.routes.set(`${ORIGIN}/hic-bilinmeyen/`, { status: 404, body: "yok" });
  const r = await runCli(site, ["--send"], { stateIn: prev });
  assert.equal(r.code, 0);
  const sent = JSON.parse(r.posts[0].init.body).urlList;
  assert.deepEqual(sent, [`${ORIGIN}/eski-silinen/`, `${ORIGIN}/eski-tasinan/`]);
  assert.equal(`${ORIGIN}/eski-silinen/` in r.state.pages, false);
});

test("run: --extra-removed yalnızca doğrulanmış 404/301'i gönderir", async () => {
  const site = makeSite({ gone: { "/legacy-a/": { status: 404, body: "yok" }, "/legacy-b/": { status: 200, body: "<html>canlı</html>" } } });
  const r = await runCli(site, ["--send", "--extra-removed", `${ORIGIN}/legacy-a/ ${ORIGIN}/legacy-b/`], { stateIn: stateOf(site) });
  assert.deepEqual(JSON.parse(r.posts[0].init.body).urlList, [`${ORIGIN}/legacy-a/`]);
});

test("run: --expect-changes — ilk bakışta değişiklik yoksa bekler ve yansıyan değişikliği yakalar", async () => {
  const site = makeSite();
  const prev = stateOf(site);
  const newer = html({ path: "/p5/", main: "<h1>/p5/</h1><p>YAYINA YANSIDI</p>" });
  let slept = 0;
  const sleepAndPropagate = async (ms) => { if (ms === 120_000) { slept++; site.content["/p5/"] = newer; } };
  const proj = tmpProject();
  mkdirSync(proj.publicDir, { recursive: true });
  writeFileSync(join(proj.publicDir, `${KEY}.txt`), KEY);
  writeFileSync(join(proj.dir, "s.json"), JSON.stringify(ix.serializeState(prev, NOW)));
  const out = [];
  const code = await ix.run(["--send", "--expect-changes", "--public-dir", proj.publicDir, "--state", join(proj.dir, "s.json")], { fetchImpl: site.fetchImpl, sleep: sleepAndPropagate, now: () => NOW, out: (s) => out.push(s), env: {} });
  proj.cleanup();
  assert.equal(code, 0);
  assert.equal(slept, 1);
  assert.deepEqual(JSON.parse(site.calls.find((c) => c.method === "POST").init.body).urlList, [`${ORIGIN}/p5/`]);
});

test("run: kullanım hataları → çıkış 2", async () => {
  const site = makeSite();
  for (const args of [["--bilinmeyen"], ["--state"], ["--wait", "x"], ["--extra-removed", "https://baska.example/x/"]]) {
    const out = [];
    const code = await ix.run(args, { fetchImpl: site.fetchImpl, sleep: noSleep, now: () => NOW, out: (s) => out.push(s), env: {} });
    assert.equal(code, 2, args.join(" "));
  }
  assert.equal(site.calls.length, 0); // hata durumunda ağ isteği yok
});
