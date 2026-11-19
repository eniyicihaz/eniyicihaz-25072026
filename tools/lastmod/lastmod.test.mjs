// lastmod testleri — ağ ve build kullanmaz. Çalıştırma: node --test tools/lastmod/lastmod.test.mjs
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import * as L from "./lastmod-lib.mjs";
import { normPath, parseArgs, resolveAstroBin, run } from "./lastmod.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const NOW = new Date("2026-11-20T10:00:00.000Z");
const nowMs = NOW.getTime();

// ---- fixture yardımcıları ------------------------------------------------------------------------------------------
function page({ title = "Başlık", desc = "Açıklama", main = "<h1>Başlık</h1><p>Bu sayfa işitme cihazları hakkında temel bilgiler içerir.</p>", header = "<header>Menü</header>", footer = "<footer>© 2026</footer>", head = "", ld = null } = {}) {
  return `<!doctype html><html><head><title>${title}</title><meta name="description" content="${desc}">${head}${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : ""}</head><body>${header}<main>${main}</main>${footer}</body></html>`;
}
const words = (n, prefix = "kelime") => Array.from({ length: n }, (_, i) => `${prefix}${i}`).join(" ");
const ORIGIN = "https://www.eniyicihaz.com";

/** pages: { "/a/": html } → dist klasörü (sitemap-0.xml, sitemap-index.xml, <yol>/index.html) */
function makeDist(root, pages, { lastmods = {}, indexLastmod = null } = {}) {
  mkdirSync(root, { recursive: true });
  const urls = Object.keys(pages).map((p) => `<url><loc>${ORIGIN}${p}</loc>${lastmods[p] ? `<lastmod>${lastmods[p]}</lastmod>` : ""}</url>`).join("");
  writeFileSync(join(root, "sitemap-0.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset>${urls}</urlset>`);
  writeFileSync(join(root, "sitemap-index.xml"), `<?xml version="1.0" encoding="UTF-8"?><sitemapindex><sitemap><loc>${ORIGIN}/sitemap-0.xml</loc>${indexLastmod ? `<lastmod>${indexLastmod}</lastmod>` : ""}</sitemap></sitemapindex>`);
  for (const [p, html] of Object.entries(pages)) {
    const dir = p === "/" ? root : join(root, p.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
  return root;
}
function manifestOf(pages, dates = {}, extra = {}) {
  const m = { version: 1, pages: {} };
  for (const [p, html] of Object.entries(pages)) {
    const a = L.analyzeHtml(html);
    m.pages[p] = { lastmod: dates[p] ?? "2026-10-01T08:00:00.000Z", sig: a.sig, fsig: a.fsig, drift: 0, ...(extra[p] ?? {}) };
  }
  return m;
}
function sandbox() {
  const dir = mkdtempSync(join(tmpdir(), "lastmod-test-"));
  return { dir, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}
/** baz ve yeni sayfalar + manifest ile CLI'yi çalıştırır. */
async function cli(args, { base, cur, manifest, dates, now = NOW, lastmods, indexLastmod, fetchImpl } = {}) {
  const sb = sandbox();
  const distDir = makeDist(join(sb.dir, "dist"), cur ?? base, { lastmods, indexLastmod });
  const baseDir = base ? makeDist(join(sb.dir, "base"), base) : null;
  const mPath = join(sb.dir, "lastmod.json");
  if (manifest !== null) writeFileSync(mPath, L.serializeManifest(manifest ?? manifestOf(base ?? cur, dates)));
  const out = [];
  const full = [...args, "--dist", distDir, "--manifest", mPath, ...(baseDir && !args.includes("--no-baseline") && !args.includes("--baseline") ? ["--baseline", baseDir] : [])];
  const code = await run(full, { out: (s) => out.push(s), now: () => now, fetchImpl, buildBaseline: () => { throw new Error("test: taban derlenmemeli"); } });
  const written = manifest === null ? null : readFileSync(mPath, "utf8");
  sb.cleanup();
  return { code, text: out.join(""), manifestText: written, manifest: written ? JSON.parse(written) : null };
}

// ===================================================================================================================
// Tarih doğrulama
// ===================================================================================================================
test("checkLastmod: yalnızca geçerli UTC ISO (Z), depo başlangıcından sonra ve gelecekte olmayan tarih", () => {
  for (const ok of ["2026-11-14T20:25:22Z", "2026-11-14T20:25:22.000Z", "2026-07-25T00:00:00.000Z"]) assert.equal(L.checkLastmod(ok, { now: nowMs }).ok, true, ok);
  assert.equal(L.checkLastmod("2026-11-14T20:25:22Z", { now: nowMs }).iso, "2026-11-14T20:25:22.000Z");
  const bad = { "tarih-yalnız": "2026-11-14", "saat dilimi ofsetli": "2026-11-14T20:25:22+03:00", "metin": "dün", "var olmayan gün": "2026-02-30T00:00:00.000Z", "depodan eski": "2026-07-24T23:59:59.000Z", "gelecek": "2026-11-21T00:00:00.000Z", "boş": "", "Z yok": "2026-11-14T20:25:22" };
  for (const [ad, v] of Object.entries(bad)) assert.equal(L.checkLastmod(v, { now: nowMs }).ok, false, `${ad}: ${v}`);
  assert.equal(L.checkLastmod(20261114, { now: nowMs }).ok, false);
  assert.equal(L.checkLastmod(null, { now: nowMs }).ok, false);
});

// ===================================================================================================================
// İmza: yalnızca ana metin değişince değişir
// ===================================================================================================================
test("imza: ana metin değişikliği imzayı değiştirir", () => {
  const a = L.analyzeHtml(page());
  const b = L.analyzeHtml(page({ main: "<h1>Başlık</h1><p>Bu sayfa işitme cihazları hakkında GÜNCEL bilgiler içerir.</p>" }));
  assert.notEqual(a.sig, b.sig);
});

test("imza: CSS, tasarım, ALT, JSON-LD, bağlantı, başlık, meta açıklama, menü/üstbilgi/altbilgi, betik ve yorum değişiklikleri imzayı DEĞİŞTİRMEZ", () => {
  const baseMain = '<h1>Başlık</h1><p class="a">Bu sayfa işitme cihazları hakkında temel bilgiler içerir.</p><img src="/_astro/a.Abcd1234.webp" alt="eski alt"><a href="/x/">bağlantı</a>';
  const base = L.analyzeHtml(page({ main: baseMain }));
  const variants = {
    "CSS/stil": page({ main: baseMain, head: "<style>body{color:red}</style>" }),
    "sınıf/style niteliği": page({ main: baseMain.replace('class="a"', 'class="b c" style="margin:0"') }),
    "ALT metni": page({ main: baseMain.replace("eski alt", "tamamen yeni ve açıklayıcı alt metin") }),
    "görsel dosya adı özeti": page({ main: baseMain.replace("Abcd1234", "ZZzz9999") }),
    "bağlantı hedefi": page({ main: baseMain.replace('href="/x/"', 'href="/y/"') }),
    "JSON-LD (bilgi içermeyen)": page({ main: baseMain, ld: { "@type": "WebPage", name: "Yeni ad", description: "Başka açıklama" } }),
    "başlık": page({ main: baseMain, title: "Tamamen farklı başlık" }),
    "meta açıklama": page({ main: baseMain, desc: "Tamamen farklı açıklama" }),
    "menü/üstbilgi": page({ main: baseMain, header: "<header>BAŞKA MENÜ</header>" }),
    "altbilgi (yıl)": page({ main: baseMain, footer: "<footer>© 2027</footer>" }),
    "betik ve yorum": page({ main: `${baseMain}<script>var a=1</script><!-- yorum -->` }),
  };
  for (const [ad, html] of Object.entries(variants)) assert.equal(L.analyzeHtml(html).sig, base.sig, `${ad} ana metin imzasını değiştirmemeli`);
});

test("imza: boşluk ve HTML varlık biçimi farkı anlamlı değişiklik değildir", () => {
  const a = L.analyzeHtml(page({ main: "<p>Darıca&#39;da  merkez&nbsp;açık</p>" }));
  const b = L.analyzeHtml(page({ main: "<p>Darıca'da merkez açık</p>" }));
  assert.equal(a.sig, b.sig);
});

test("analyzeHtml: <main> yoksa ok:false", () => {
  assert.equal(L.analyzeHtml("<html><body>içerik</body></html>").ok, false);
});

// ===================================================================================================================
// Önemli bilgi (telefon, fiyat, saat …)
// ===================================================================================================================
test("önemli bilgi: görünür telefon/fiyat/saat/taksit/e-posta değişimi fsig'i değiştirir; tasarım/ALT değişimi değiştirmez", () => {
  const mk = (extra) => page({ main: `<p>${extra}</p>` });
  const base = L.analyzeHtml(mk("Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 9 taksite kadar. Hafta içi 08:45 – 19:00. info@ornek.com"));
  assert.ok(base.facts.includes("tel:2626563277"));
  assert.ok(base.facts.includes("tutar:20000"));
  assert.ok(base.facts.includes("taksit:9"));
  assert.ok(base.facts.includes("saat:08:45") && base.facts.includes("saat:19:00"));
  assert.ok(base.facts.includes("eposta:info@ornek.com"));
  const changed = {
    telefon: "Bizi 0262 656 32 78 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 9 taksite kadar. Hafta içi 08:45 – 19:00. info@ornek.com",
    fiyat: "Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 25.000 TL'den başlar, 9 taksite kadar. Hafta içi 08:45 – 19:00. info@ornek.com",
    taksit: "Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 6 taksite kadar. Hafta içi 08:45 – 19:00. info@ornek.com",
    saat: "Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 9 taksite kadar. Hafta içi 09:00 – 19:00. info@ornek.com",
    eposta: "Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 9 taksite kadar. Hafta içi 08:45 – 19:00. yeni@ornek.com",
  };
  for (const [ad, t] of Object.entries(changed)) assert.notEqual(L.analyzeHtml(mk(t)).fsig, base.fsig, `${ad} değişimi fsig'i değiştirmeli`);
  assert.equal(L.analyzeHtml(page({ main: `<p class="x">Bizi 0262 656 32 77 numarasından arayın. Fiyatlar 20.000 TL'den başlar, 9 taksite kadar. Hafta içi 08:45 – 19:00. info@ornek.com</p><img alt="yeni">` })).fsig, base.fsig);
});

test("önemli bilgi: yalnızca JSON-LD'de değişen telefon/çalışma saati/adres fsig'i değiştirir (sig aynı kalır)", () => {
  const ld = (o) => ({ "@type": "MedicalBusiness", telephone: "+905337733199", openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:45", closes: "19:00" }], address: { streetAddress: "Fevziçakmak Mah. No:77", postalCode: "41700" }, ...o });
  const base = L.analyzeHtml(page({ ld: ld({}) }));
  for (const [ad, o] of Object.entries({ telefon: { telephone: "+905337733100" }, "çalışma saati": { openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "19:00" }] }, adres: { address: { streetAddress: "Başka Cad. No:1", postalCode: "41700" } } })) {
    const x = L.analyzeHtml(page({ ld: ld(o) }));
    assert.equal(x.sig, base.sig, `${ad}: ana metin aynı`);
    assert.notEqual(x.fsig, base.fsig, `${ad}: fsig değişmeli`);
  }
  // başlık/meta açıklamadaki tutar da önemli bilgidir
  assert.notEqual(L.analyzeHtml(page({ desc: "20.000 TL'den başlıyor" })).fsig, L.analyzeHtml(page({ desc: "25.000 TL'den başlıyor" })).fsig);
});

test("önemli bilgi: tarih (14.11.2026), yıl ve sürüm numarası bilgi sayılmaz", () => {
  const a = L.analyzeHtml(page({ main: "<p>Son güncelleme 14.11.2026 Sürüm 2026-11-14-v3 2026 yılı</p>" }));
  const b = L.analyzeHtml(page({ main: "<p>Son güncelleme 20.11.2026 Sürüm 2026-11-20-v4 2027 yılı</p>" }));
  assert.equal(a.fsig, b.fsig);
});

test("wordDiff: eklenen+silinen kelime (çoklu küme)", () => {
  assert.deepEqual(L.wordDiff("a b c d", "a b c d"), { added: 0, removed: 0, words: 0 });
  assert.deepEqual(L.wordDiff("a b c d", "a b x d"), { added: 1, removed: 1, words: 2 });
  assert.deepEqual(L.wordDiff("a b", "a b c d e"), { added: 3, removed: 0, words: 3 });
  assert.equal(L.wordDiff("a a b", "a b b").words, 2); // sıra/tekrar duyarlı küme farkı
});

// ===================================================================================================================
// Sınıflandırma matrisi
// ===================================================================================================================
const pagesOf = (map) => new Map(Object.entries(map).map(([p, h]) => [p, L.analyzeHtml(h)]));
const classify = (manifest, curHtml, baseHtml, opts = {}) => L.classifyPages({ manifest, current: pagesOf(curHtml), baseline: baseHtml === null ? null : pagesOf(baseHtml ?? curHtml), opts });
const statusOf = (items, p) => items.find((i) => i.path === p)?.status;

test("sınıflandırma: tasarım/ALT/JSON-LD(bilgisiz)/başlık/meta/menü/altbilgi değişen sayfa UNCHANGED kalır (tarih ilerlemez)", () => {
  const base = { "/a/": page({ ld: { "@type": "WebPage", name: "x" } }) };
  const m = manifestOf(base);
  const cur = { "/a/": page({ head: "<style>a{}</style>", header: "<header>YENİ</header>", footer: "<footer>© 2027</footer>", title: "yeni", desc: "yeni", ld: { "@type": "WebPage", name: "y" }, main: '<h1>Başlık</h1><p class="z">Bu sayfa işitme cihazları hakkında temel bilgiler içerir.</p>' }) };
  assert.equal(statusOf(classify(m, cur, base), "/a/"), L.STATUS.UNCHANGED);
});

test("sınıflandırma: küçük (<10 kelime) metin değişikliği MINOR; birikim eşiğe ulaşınca SIGNIFICANT", () => {
  const baseHtml = page({ main: `<p>${words(50)}</p>` });
  const m = manifestOf({ "/a/": baseHtml });
  const minor = page({ main: `<p>${words(50).replace("kelime3", "değişen3").replace("kelime7", "değişen7")}</p>` }); // 2 çıkar + 2 ekle = 4
  const it = classify(m, { "/a/": minor }, { "/a/": baseHtml })[0];
  assert.equal(it.status, L.STATUS.MINOR);
  assert.equal(it.words, 4);
  // aynı değişiklik, önceden 6 kelimelik birikim varken → toplam 10 ≥ eşik
  const m2 = manifestOf({ "/a/": baseHtml }, {}, { "/a/": { drift: 6 } });
  const it2 = classify(m2, { "/a/": minor }, { "/a/": baseHtml })[0];
  assert.equal(it2.status, L.STATUS.SIGNIFICANT);
  assert.equal(it2.total, 10);
});

test("sınıflandırma: büyük metin değişikliği SIGNIFICANT; eşik kenarı (9 → MINOR, 10 → SIGNIFICANT)", () => {
  const baseHtml = page({ main: `<p>${words(100)}</p>` });
  const m = manifestOf({ "/a/": baseHtml });
  const add = (n) => page({ main: `<p>${words(100)} ${words(n, "yeni")}</p>` });
  assert.equal(classify(m, { "/a/": add(9) }, { "/a/": baseHtml })[0].status, L.STATUS.MINOR);
  assert.equal(classify(m, { "/a/": add(10) }, { "/a/": baseHtml })[0].status, L.STATUS.SIGNIFICANT);
  assert.equal(classify(m, { "/a/": page({ main: "<p>tamamen başka bir içerik burada yer alıyor ve uzunca devam ediyor</p>" }) }, { "/a/": baseHtml })[0].status, L.STATUS.SIGNIFICANT);
});

test("sınıflandırma: önemli bilgi değişimi kelime sayısından BAĞIMSIZ olarak elle inceleme (MINOR/otomatik ilerleme değil)", () => {
  const baseHtml = page({ main: `<p>${words(100)} Telefon 0262 656 32 77</p>` });
  const m = manifestOf({ "/a/": baseHtml });
  const cur = page({ main: `<p>${words(100)} Telefon 0262 656 32 78</p>` }); // yalnızca 2 kelime
  const it = classify(m, { "/a/": cur }, { "/a/": baseHtml })[0];
  assert.equal(it.status, L.STATUS.REVIEW_FACT);
  assert.ok(it.factDelta.added.includes("tel:2626563278") && it.factDelta.removed.includes("tel:2626563277"));
});

test("sınıflandırma: yalnızca yapılandırılmış veride önemli bilgi değişimi yok sayılmaz → REVIEW_FACT_STRUCTURED", () => {
  const ld = (t) => ({ "@type": "MedicalBusiness", telephone: t });
  const baseHtml = page({ ld: ld("+905337733199") });
  const m = manifestOf({ "/a/": baseHtml });
  const it = classify(m, { "/a/": page({ ld: ld("+905337733100") }) }, { "/a/": baseHtml })[0];
  assert.equal(it.status, L.STATUS.REVIEW_FACT_STRUCTURED);
});

test("sınıflandırma: taban yoksa büyüklük bilinemez → ELLE inceleme; tabanla manifest uyumsuzsa STALE_MANIFEST", () => {
  const baseHtml = page({ main: `<p>${words(50)}</p>` });
  const m = manifestOf({ "/a/": baseHtml });
  const cur = page({ main: `<p>${words(50)} ${words(30, "yeni")}</p>` });
  assert.equal(classify(m, { "/a/": cur }, null)[0].status, L.STATUS.REVIEW_NO_BASELINE);
  const older = page({ main: `<p>${words(60)}</p>` }); // taban, manifestin kaydettiği içerikten farklı
  assert.equal(classify(m, { "/a/": cur }, { "/a/": older })[0].status, L.STATUS.STALE_MANIFEST);
});

test("sınıflandırma: yeni sayfa NEW; tabanda var ama manifestte yok → MISSING_ENTRY (tarih UYDURULMAZ); artık kayıt ORPHAN; <main> yok → REVIEW_NO_MAIN", () => {
  const h = page();
  const m = manifestOf({ "/a/": h, "/eski/": h });
  const items = L.classifyPages({
    manifest: m,
    current: new Map([["/a/", L.analyzeHtml(h)], ["/yeni/", L.analyzeHtml(page({ main: "<p>yeni sayfa</p>" })) ], ["/eksik/", L.analyzeHtml(h)], ["/bozuk/", L.analyzeHtml("<html></html>")]]),
    baseline: new Map([["/a/", L.analyzeHtml(h)], ["/eksik/", L.analyzeHtml(h)]]),
  });
  assert.equal(statusOf(items, "/a/"), L.STATUS.UNCHANGED);
  assert.equal(statusOf(items, "/yeni/"), L.STATUS.NEW);
  assert.equal(statusOf(items, "/eksik/"), L.STATUS.MISSING_ENTRY);
  assert.equal(statusOf(items, "/eski/"), L.STATUS.ORPHAN);
  assert.equal(statusOf(items, "/bozuk/"), L.STATUS.REVIEW_NO_MAIN);
});

test("sınıflandırma: --hold bekletir (HELD), --advance/--settle kararları işaretlenir", () => {
  const baseHtml = page({ main: `<p>${words(50)}</p>` });
  const m = manifestOf({ "/a/": baseHtml, "/b/": baseHtml, "/c/": baseHtml });
  const big = page({ main: `<p>${words(50)} ${words(30, "yeni")}</p>` });
  const items = classify(m, { "/a/": big, "/b/": big, "/c/": big }, { "/a/": baseHtml, "/b/": baseHtml, "/c/": baseHtml }, { hold: new Set(["/a/"]), settle: new Set(["/b/"]) });
  assert.equal(statusOf(items, "/a/"), L.STATUS.HELD);
  assert.equal(items.find((i) => i.path === "/a/").originalStatus, L.STATUS.SIGNIFICANT);
  assert.equal(items.find((i) => i.path === "/b/").decision, "settle");
  assert.equal(statusOf(items, "/c/"), L.STATUS.SIGNIFICANT);
});

// ===================================================================================================================
// Planın uygulanması
// ===================================================================================================================
const AT = "2026-11-20T10:00:00.000Z";
function applyOn(base, cur, { dates, opts, explicit, extra } = {}) {
  const before = manifestOf(base, dates ?? {}, extra);
  const current = pagesOf(cur);
  const items = L.classifyPages({ manifest: before, current, baseline: pagesOf(base), opts });
  const { manifest: next, changes } = L.applyPlan({ manifest: before, items, current, at: AT, explicit });
  return { before, next, changes, items };
}

test("uygulama: yalnızca anlamlı değişen sayfanın tarihi ilerler; değişmeyen sayfaların kayıtları BAYT DÜZEYİNDE aynı kalır", () => {
  const base = {};
  for (let i = 0; i < 20; i++) base[`/p${i}/`] = page({ main: `<p>${words(60, `s${i}_`)}</p>` });
  const dates = Object.fromEntries(Object.keys(base).map((p, i) => [p, `2026-1${i % 2}-0${(i % 8) + 1}T0${i % 9}:00:00.000Z`]));
  const cur = { ...base, "/p7/": page({ main: `<p>${words(60, "s7_")} ${words(25, "yeni")}</p>` }) };
  const { before, next, changes } = applyOn(base, cur, { dates });
  assert.equal(changes.length, 1);
  assert.equal(changes[0].path, "/p7/");
  assert.equal(before.pages["/p7/"].lastmod, dates["/p7/"], "girdi manifest değişmemeli");
  assert.equal(next.pages["/p7/"].lastmod, AT);
  assert.equal(next.pages["/p7/"].drift, 0);
  assert.equal(next.pages["/p7/"].sig, L.analyzeHtml(cur["/p7/"]).sig);
  const b = JSON.parse(L.serializeManifest(before)).pages;
  const a = JSON.parse(L.serializeManifest(next)).pages;
  for (const p of Object.keys(b)) if (p !== "/p7/") assert.equal(JSON.stringify(a[p]), JSON.stringify(b[p]), `${p} değişmemeli`);
  assert.equal(Object.keys(a).length, 20);
});

test("uygulama: tasarım-yalnız değişiklikte HİÇBİR sayfa değişmez (manifest bayt düzeyinde aynı)", () => {
  const base = { "/a/": page(), "/b/": page({ main: "<p>başka içerik burada yer alıyor</p>" }) };
  const cur = { "/a/": page({ head: "<style>x{}</style>", header: "<header>y</header>", main: '<h1 class="q">Başlık</h1><p>Bu sayfa işitme cihazları hakkında temel bilgiler içerir.</p><img alt="yeni alt">' }), "/b/": base["/b/"] };
  const { before, next, changes } = applyOn(base, cur);
  assert.equal(changes.length, 0);
  assert.equal(L.serializeManifest(next), L.serializeManifest(before));
  assert.equal(L.serializeManifest(next), L.serializeManifest(manifestOf(base)));
});

test("uygulama: MINOR tarihi ilerletmez, imza ve birikimi günceller; NEW tarih alır; ORPHAN silinir", () => {
  const baseHtml = page({ main: `<p>${words(50)}</p>` });
  const base = { "/a/": baseHtml, "/eski/": page({ main: "<p>eski sayfa</p>" }) };
  const m = manifestOf(base, { "/a/": "2026-11-01T00:00:00.000Z", "/eski/": "2026-11-02T00:00:00.000Z" });
  const minorHtml = page({ main: `<p>${words(50).replace("kelime1", "x1")}</p>` });
  const newHtml = page({ main: "<p>yepyeni sayfa metni</p>" });
  const current = pagesOf({ "/a/": minorHtml, "/yeni/": newHtml });
  const items = L.classifyPages({ manifest: m, current, baseline: pagesOf({ "/a/": baseHtml }) });
  const { manifest: next, changes } = L.applyPlan({ manifest: m, items, current, at: AT });
  assert.equal(next.pages["/a/"].lastmod, "2026-11-01T00:00:00.000Z");
  assert.equal(next.pages["/a/"].drift, 2);
  assert.equal(next.pages["/a/"].sig, L.analyzeHtml(minorHtml).sig);
  assert.equal(next.pages["/yeni/"].lastmod, AT);
  assert.equal("/eski/" in next.pages, false);
  assert.equal(changes.length, 3);
});

test("uygulama: MISSING_ENTRY ve REVIEW_* kararsızken DOKUNULMAZ; --advance tarihi ilerletir, --settle ilerletmeden kaydeder, --set doğrulanmış tarihi yazar", () => {
  const ld = (t) => ({ "@type": "MedicalBusiness", telephone: t });
  const b1 = page({ ld: ld("+905337733199") });
  const b2 = page({ ld: ld("+905337733199"), main: "<p>ikinci</p>" });
  const base = { "/a/": b1, "/b/": b2 };
  const cur = { "/a/": page({ ld: ld("+905330000000") }), "/b/": page({ ld: ld("+905330000000"), main: "<p>ikinci</p>" }), "/eksik/": page({ main: "<p>kaydı olmayan</p>" }) };
  const m = manifestOf(base, { "/a/": "2026-11-01T00:00:00.000Z", "/b/": "2026-11-02T00:00:00.000Z" });
  const baseline = pagesOf({ ...base, "/eksik/": page({ main: "<p>kaydı olmayan</p>" }) });
  const current = pagesOf(cur);
  const run1 = (opts, explicit) => L.applyPlan({ manifest: m, items: L.classifyPages({ manifest: m, current, baseline, opts }), current, at: AT, explicit }).manifest;
  const none = run1({});
  assert.equal(L.serializeManifest(none), L.serializeManifest(m), "karar yoksa hiçbir şey değişmemeli");
  assert.equal("/eksik/" in none.pages, false, "MISSING_ENTRY için tarih uydurulmamalı");
  const adv = run1({ advance: new Set(["/a/"]), settle: new Set(["/b/"]) });
  assert.equal(adv.pages["/a/"].lastmod, AT);
  assert.equal(adv.pages["/b/"].lastmod, "2026-11-02T00:00:00.000Z");
  assert.notEqual(adv.pages["/b/"].fsig, m.pages["/b/"].fsig, "--settle yeni imzayı kaydetmeli");
  const set = run1({}, new Map([["/eksik/", "2026-11-05T12:00:00.000Z"]]));
  assert.equal(set.pages["/eksik/"].lastmod, "2026-11-05T12:00:00.000Z");
});

test("uygulama: --hold ile bekletilen sayfa manifestte DEĞİŞMEZ", () => {
  const baseHtml = page({ main: `<p>${words(50)}</p>` });
  const cur = { "/a/": page({ main: `<p>${words(50)} ${words(30, "yeni")}</p>` }) };
  const r = applyOn({ "/a/": baseHtml }, cur, { opts: { hold: new Set(["/a/"]) } });
  assert.equal(r.changes.length, 0);
});

// ===================================================================================================================
// Manifest biçimi ve yükleme
// ===================================================================================================================
test("serializeManifest: deterministik, yollar sıralı, alan sırası sabit, açıklama korunur", () => {
  const m = { version: 1, note: "n", pages: { "/b/": { drift: 0, fsig: "f", sig: "s", lastmod: "2026-11-01T00:00:00.000Z" }, "/a/": { lastmod: "2026-11-02T00:00:00.000Z", sig: "s", fsig: "f", drift: 3 } } };
  const t = L.serializeManifest(m);
  assert.ok(t.endsWith("\n"));
  assert.ok(t.indexOf('"/a/"') < t.indexOf('"/b/"'));
  assert.ok(t.indexOf('"lastmod"') < t.indexOf('"sig"') && t.indexOf('"sig"') < t.indexOf('"fsig"') && t.indexOf('"fsig"') < t.indexOf('"drift"'));
  assert.equal(L.serializeManifest(JSON.parse(t)), t);
  assert.match(t, /"note": "n"/);
});

test("validateManifest: geçersiz tarih, eksik imza, hatalı yol, negatif drift raporlanır", () => {
  const ok = { lastmod: "2026-11-01T00:00:00.000Z", sig: "s", fsig: "f", drift: 0 };
  assert.deepEqual(L.validateManifest({ version: 1, pages: { "/a/": ok } }, { now: nowMs }), []);
  assert.ok(L.validateManifest({ version: 2, pages: {} }).length);
  const p = L.validateManifest({ version: 1, pages: { "/a/": { ...ok, lastmod: "dün" }, "/b/": { ...ok, sig: "" }, "a": ok, "/c/": { ...ok, drift: -1 }, "/d/": { ...ok, lastmod: "2027-01-01T00:00:00.000Z" } } }, { now: nowMs });
  assert.equal(p.length, 5);
});

test("loadLastmodManifest: yok / bozuk JSON / bozuk yapı → boş manifest + uyarı (build DÜŞMEZ); geçerli dosya okunur", () => {
  const sb = sandbox();
  const warns = [];
  const warn = (m) => warns.push(m);
  assert.deepEqual(L.loadLastmodManifest(join(sb.dir, "yok.json"), { warn }).pages, {});
  writeFileSync(join(sb.dir, "bozuk.json"), "{ bozuk");
  assert.deepEqual(L.loadLastmodManifest(join(sb.dir, "bozuk.json"), { warn }).pages, {});
  writeFileSync(join(sb.dir, "yapi.json"), JSON.stringify({ version: 9 }));
  assert.deepEqual(L.loadLastmodManifest(join(sb.dir, "yapi.json"), { warn }).pages, {});
  assert.equal(warns.length, 3);
  const good = { version: 1, pages: { "/a/": { lastmod: "2026-11-01T00:00:00.000Z", sig: "s", fsig: "f", drift: 0 } } };
  writeFileSync(join(sb.dir, "iyi.json"), JSON.stringify(good));
  assert.deepEqual(L.loadLastmodManifest(join(sb.dir, "iyi.json"), { warn, now: nowMs }), good);
  sb.cleanup();
});

// ===================================================================================================================
// serialize (astro.config.mjs) — tarih yalnızca manifestten
// ===================================================================================================================
test("createSerialize: manifesttaki GEÇERLİ tarihi yazar; kayıt yoksa/ geçersizse/ gelecekteyse YAZMAZ (build düşmez); başka alanlara dokunmaz", () => {
  const m = { version: 1, pages: {
    "/a/": { lastmod: "2026-11-14T20:25:22.000Z", sig: "s", fsig: "f", drift: 0 },
    "/dun/": { lastmod: "dün", sig: "s", fsig: "f", drift: 0 },
    "/gelecek/": { lastmod: "2027-01-01T00:00:00.000Z", sig: "s", fsig: "f", drift: 0 },
    "/tarih/": { lastmod: "2026-11-14", sig: "s", fsig: "f", drift: 0 },
  } };
  const warns = [];
  const ser = L.createSerialize(m, { warn: (x) => warns.push(x), now: () => nowMs });
  const mk = (path) => ({ url: `${ORIGIN}${path}`, links: undefined, priority: undefined, changefreq: undefined, lastmod: undefined });
  assert.equal(ser(mk("/a/")).lastmod, "2026-11-14T20:25:22.000Z");
  for (const p of ["/yok/", "/dun/", "/gelecek/", "/tarih/"]) assert.equal(ser(mk(p)).lastmod, undefined, p);
  ser(mk("/dun/"));
  assert.equal(warns.length, 3, "her geçersiz URL için YALNIZCA bir kez uyarı");
  const item = mk("/a/");
  const out = ser(item);
  assert.equal(out, item);
  assert.deepEqual(Object.keys(out), ["url", "links", "priority", "changefreq", "lastmod"]);
  assert.equal(out.changefreq, undefined);
  assert.equal(out.priority, undefined);
});

test("createSerialize: boş manifestte hiçbir URL'ye tarih yazılmaz (build zamanı/new Date() KULLANILMAZ)", () => {
  const ser = L.createSerialize(L.emptyManifest(), { warn: () => {} });
  for (const p of ["/", "/a/", "/b/c/"]) assert.equal(ser({ url: `${ORIGIN}${p}` }).lastmod, undefined);
});

test("kural koruması: kaynakta tarihi manifest dışından üreten kod yok", () => {
  const cfg = readFileSync(join(HERE, "..", "..", "astro.config.mjs"), "utf8");
  const cfgCode = cfg.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, ""); // açıklamalar kural gereği bu yasakları ANLATIR; yalnızca koda bak
  assert.doesNotMatch(cfgCode, /new Date\(|Date\.now\(|\blastmod\s*:/, "astro.config.mjs tarih üretmemeli ve global lastmod vermemeli");
  assert.match(cfg, /serialize:\s*createSerialize\(lastmodManifest\)/);
  assert.match(cfg, /filter:\s*\(page\)\s*=>\s*!new URL\(page\)\.pathname\.startsWith\('\/ds\/'\)/, "mevcut /ds/ filtresi korunmalı");
  const lib = readFileSync(join(HERE, "lastmod-lib.mjs"), "utf8");
  assert.equal((lib.match(/item\.lastmod\s*=/g) || []).length, 1, "item.lastmod yalnızca bir yerde atanmalı");
  assert.match(lib, /item\.lastmod = r\.iso;/);
});

test("gerçek manifest: 115 sayfa, geçerli, tek tarih değil, gelecek tarih yok; her yol sitemap biçiminde", () => {
  const m = JSON.parse(readFileSync(join(HERE, "lastmod.json"), "utf8"));
  assert.deepEqual(L.validateManifest(m), []);
  const paths = Object.keys(m.pages);
  assert.equal(paths.length, 115);
  const dates = new Set(paths.map((p) => m.pages[p].lastmod));
  assert.ok(dates.size >= 2, "tüm sayfalar aynı tarihte olamaz");
  assert.ok(paths.every((p) => m.pages[p].drift === 0));
  assert.equal(m.pages["/iletisim/"].lastmod, "2026-11-16T21:52:18.000Z");
  assert.equal(m.pages["/sgk-isitme-cihazi-odemesi/"].lastmod, "2026-11-16T21:52:18.000Z");
  assert.equal(L.serializeManifest(m), readFileSync(join(HERE, "lastmod.json"), "utf8"), "dosya deterministik biçimde yazılmış olmalı");
});

// ===================================================================================================================
// Gerçek `sitemap` kitaplığıyla uçtan uca (kuruluysa)
// ===================================================================================================================
test("sitemap kitaplığı: serialize çıktısı ISO lastmod üretir; URL sırası değişmez; bozuk tarih atlanır", async (t) => {
  let lib;
  try {
    lib = await import("sitemap");
  } catch {
    t.skip("sitemap paketi yok");
    return;
  }
  const { Readable } = await import("node:stream");
  const m = { version: 1, pages: { "/a/": { lastmod: "2026-11-14T20:25:22.000Z", sig: "s", fsig: "f", drift: 0 }, "/c/": { lastmod: "dün", sig: "s", fsig: "f", drift: 0 } } };
  const ser = L.createSerialize(m, { warn: () => {}, now: () => nowMs });
  const items = ["/a/", "/b/", "/c/"].map((p) => ser({ url: `${ORIGIN}${p}` }));
  const stream = new lib.SitemapStream({ hostname: `${ORIGIN}/` });
  const xml = (await lib.streamToPromise(Readable.from(items).pipe(stream))).toString();
  assert.deepEqual([...xml.matchAll(/<loc>([^<]+)</g)].map((x) => x[1]), [`${ORIGIN}/a/`, `${ORIGIN}/b/`, `${ORIGIN}/c/`]);
  assert.match(xml, /<loc>https:\/\/www\.eniyicihaz\.com\/a\/<\/loc><lastmod>2026-11-14T20:25:22\.000Z<\/lastmod>/);
  assert.equal((xml.match(/<lastmod>/g) || []).length, 1);
});

// ===================================================================================================================
// Sitemap ↔ manifest doğrulaması
// ===================================================================================================================
const entry = (p, lastmod) => ({ loc: `${ORIGIN}${p}`, lastmod });
const mf = (o) => ({ version: 1, pages: Object.fromEntries(Object.entries(o).map(([p, d]) => [p, { lastmod: d, sig: "s", fsig: "f", drift: 0 }])) });

test("verifySitemap: eşleşen sitemap başarılı; sitemap-index lastmod en yeni sayfa tarihi", () => {
  const m = mf({ "/a/": "2026-11-01T00:00:00.000Z", "/b/": "2026-11-03T00:00:00.000Z" });
  const r = L.verifySitemap({ entries: [entry("/a/", "2026-11-01T00:00:00.000Z"), entry("/b/", "2026-11-03T00:00:00.000Z")], indexLastmod: "2026-11-03T00:00:00.000Z", manifest: m, now: nowMs });
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.warnings, []);
});

test("verifySitemap: eksik/yanlış/geçersiz tarih, manifest kaydı olmayan URL ve artık kayıt HATA verir", () => {
  const m = mf({ "/a/": "2026-11-01T00:00:00.000Z", "/b/": "2026-11-03T00:00:00.000Z", "/artik/": "2026-11-04T00:00:00.000Z" });
  const r = L.verifySitemap({ entries: [entry("/a/", null), entry("/b/", "2026-11-09T00:00:00.000Z"), entry("/c/", "2026-11-05T00:00:00.000Z")], indexLastmod: null, manifest: m, now: nowMs });
  assert.equal(r.errors.length, 4);
  assert.ok(r.errors.some((e) => /\/a\/.*lastmod yok/.test(e)));
  assert.ok(r.errors.some((e) => /\/b\/.*≠/.test(e)));
  assert.ok(r.errors.some((e) => /\/c\/.*manifestte kayıt yok/.test(e)));
  assert.ok(r.errors.some((e) => /\/artik\/.*sitemap'te yok/.test(e)));
});

test("verifySitemap: tüm sayfalar AYNI tarihteyse HATA; %85'ten fazlası aynıysa uyarı", () => {
  const d = "2026-11-01T00:00:00.000Z";
  const same = L.verifySitemap({ entries: [entry("/a/", d), entry("/b/", d), entry("/c/", d)], manifest: mf({ "/a/": d, "/b/": d, "/c/": d }), indexLastmod: d, now: nowMs });
  assert.ok(same.errors.some((e) => /AYNI lastmod/.test(e)));
  const many = {};
  const entries = [];
  for (let i = 0; i < 10; i++) { const p = `/p${i}/`; many[p] = i === 0 ? "2026-11-02T00:00:00.000Z" : d; entries.push(entry(p, many[p])); }
  const warn = L.verifySitemap({ entries, manifest: mf(many), indexLastmod: "2026-11-02T00:00:00.000Z", now: nowMs });
  assert.deepEqual(warn.errors, []);
  assert.ok(warn.warnings.some((w) => /%90/.test(w)));
});

test("verifySitemap: gelecek tarih ve sitemap-index uyumsuzluğu yakalanır", () => {
  const m = mf({ "/a/": "2026-11-01T00:00:00.000Z", "/b/": "2026-11-03T00:00:00.000Z" });
  const r = L.verifySitemap({ entries: [entry("/a/", "2026-11-01T00:00:00.000Z"), entry("/b/", "2026-11-03T00:00:00.000Z")], indexLastmod: "2026-11-30T00:00:00.000Z", manifest: m, now: nowMs });
  assert.ok(r.errors.some((e) => /sitemap-index lastmod geçersiz/.test(e)));
  const r2 = L.verifySitemap({ entries: [entry("/a/", "2026-11-01T00:00:00.000Z"), entry("/b/", "2026-11-03T00:00:00.000Z")], indexLastmod: "2026-11-02T00:00:00.000Z", manifest: m, now: nowMs });
  assert.ok(r2.warnings.some((w) => /en yeni sayfa tarihine/.test(w)));
});

// ===================================================================================================================
// CLI (run): uçtan uca, geçici dist klasörleri
// ===================================================================================================================
const BASE = () => ({ "/": page({ main: `<p>${words(80, "ana")}</p>` }), "/darica/": page({ main: `<p>${words(80, "darica")}</p>` }), "/fiyat/": page({ main: `<p>${words(60, "fiyat")} Fiyatlar 20.000 TL'den başlar.</p>` }) });

test("CLI check: hiçbir değişiklik yoksa çıkış 0", async () => {
  const base = BASE();
  const r = await cli(["check"], { base });
  assert.equal(r.code, 0, r.text);
  assert.match(r.text, /gereken değişiklik yok/);
});

test("CLI check: yalnızca tasarım/ALT/JSON-LD/menü değişikliği tarihi ilerletmez (çıkış 0)", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ head: "<style>.x{color:red}</style>", header: "<header>yeni menü</header>", main: `<p class="x">${words(80, "darica")}</p><img alt="yeni alt metin">`, ld: { "@type": "WebPage", name: "yeni" } }) };
  const r = await cli(["check"], { base, cur });
  assert.equal(r.code, 0, r.text);
});

test("CLI check: anlamlı içerik değişikliği raporlanır (çıkış 1); update varsayılan KURU ÇALIŞTIRMA, manifest dosyası değişmez", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const chk = await cli(["check"], { base, cur });
  assert.equal(chk.code, 1);
  assert.match(chk.text, /\[ANLAMLI\s*\] \/darica\//);
  const dry = await cli(["update"], { base, cur });
  assert.equal(dry.code, 0, dry.text);
  assert.match(dry.text, /KURU ÇALIŞTIRMA: hiçbir dosya yazılmadı/);
  assert.equal(dry.manifestText, L.serializeManifest(manifestOf(base)), "dry-run manifesti değiştirmemeli");
});

test("CLI update --write: yalnızca değişen sayfanın tarihi şimdiye ilerler, diğerleri aynı kalır; yazılan manifest yeniden check'te temiz", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const r = await cli(["update", "--write"], { base, cur });
  assert.equal(r.code, 0, r.text);
  const before = manifestOf(base).pages;
  assert.equal(r.manifest.pages["/darica/"].lastmod, "2026-11-20T10:00:00.000Z");
  assert.equal(r.manifest.pages["/darica/"].sig, L.analyzeHtml(cur["/darica/"]).sig);
  for (const p of ["/", "/fiyat/"]) assert.equal(JSON.stringify(r.manifest.pages[p]), JSON.stringify(before[p]), `${p} değişmemeli`);
  // yeni manifestle aynı cur'a karşı check: artık işlem yok
  const again = await cli(["check", "--no-baseline"], { cur, manifest: r.manifest });
  assert.equal(again.code, 0, again.text);
});

test("CLI update: --hold manifesti değiştirmez ve çıkış 0 (bilinçli bekletme); --advance/--settle elle incelenen sayfada çalışır", async () => {
  const base = BASE();
  const big = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const hold = await cli(["update", "--write", "--hold", "/darica/"], { base, cur: big });
  assert.equal(hold.code, 0, hold.text);
  assert.equal(hold.manifestText, L.serializeManifest(manifestOf(base)));
  assert.match(hold.text, /BEKLETİLİYOR/);
  // önemli bilgi değişimi → elle inceleme; karar verilmezse çıkış 1 ve manifest aynı
  const fact = { ...base, "/fiyat/": page({ main: `<p>${words(60, "fiyat")} Fiyatlar 25.000 TL'den başlar.</p>` }) };
  const pending = await cli(["update", "--write"], { base, cur: fact });
  assert.equal(pending.code, 1);
  assert.match(pending.text, /İNCELE:BİLGİ\] \/fiyat\//);
  assert.match(pending.text, /−tutar:20000\s+\+tutar:25000/);
  assert.equal(pending.manifestText, L.serializeManifest(manifestOf(base)));
  const adv = await cli(["update", "--write", "--advance", "/fiyat/"], { base, cur: fact });
  assert.equal(adv.code, 0, adv.text);
  assert.equal(adv.manifest.pages["/fiyat/"].lastmod, "2026-11-20T10:00:00.000Z");
  const set = await cli(["update", "--write", "--settle", "https://www.eniyicihaz.com/fiyat/"], { base, cur: fact });
  assert.equal(set.manifest.pages["/fiyat/"].lastmod, "2026-10-01T08:00:00.000Z");
  assert.equal(set.manifest.pages["/fiyat/"].fsig, L.analyzeHtml(fact["/fiyat/"]).fsig);
});

test("CLI: geçersiz/eski/gelecek --at reddedilir (manifest yazılmaz); --advance ile --hold birlikte verilemez; bilinmeyen sayfa reddedilir", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const reasons = { "dün": /--at: UTC ISO biçimi değil/, "2026-11-20": /--at: UTC ISO biçimi değil/, "2026-12-01T00:00:00.000Z": /--at: gelecekte/, "2026-09-01T00:00:00.000Z": /mevcut tarihten .* eski olamaz/ };
  for (const [at, why] of Object.entries(reasons)) {
    const r = await cli(["update", "--write", "--at", at], { base, cur });
    assert.equal(r.code, 2, `--at ${at}`);
    assert.match(r.text, why, `--at ${at}: hata nedeni doğru olmalı`);
    assert.equal(r.manifestText, L.serializeManifest(manifestOf(base)));
  }
  assert.equal((await cli(["update", "--write", "--advance", "/darica/", "--hold", "/darica/"], { base, cur })).code, 2);
  assert.equal((await cli(["update", "--hold", "/yok/"], { base, cur })).code, 2);
});

test("CLI: yeni sayfa tarih alır, kaydı olmayan mevcut sayfa için tarih uydurulmaz, kaldırılan sayfanın kaydı silinir", async () => {
  const base = BASE();
  const cur = { ...base, "/yeni/": page({ main: "<p>yepyeni sayfa</p>" }) };
  const r = await cli(["update", "--write"], { base, cur });
  assert.equal(r.manifest.pages["/yeni/"].lastmod, "2026-11-20T10:00:00.000Z");
  // manifestten bir kayıt eksik, sayfa tabanda var → MISSING_ENTRY, tarih YAZILMAZ
  const m = manifestOf(base);
  delete m.pages["/fiyat/"];
  const miss = await cli(["update", "--write"], { base, manifest: m });
  assert.equal(miss.code, 1);
  assert.match(miss.text, /İNCELE:KAYIT\] \/fiyat\//);
  assert.equal("/fiyat/" in miss.manifest.pages, false);
  // sayfa kaldırıldı → kayıt silinir
  const gone = { "/": base["/"], "/darica/": base["/darica/"] };
  const removed = await cli(["update", "--write"], { base, cur: gone, manifest: manifestOf(base) });
  assert.equal("/fiyat/" in removed.manifest.pages, false);
  assert.equal(Object.keys(removed.manifest.pages).length, 2);
});

test("CLI: --no-baseline ile ana metni değişen sayfa otomatik tarihlenmez (ELLE inceleme)", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const r = await cli(["update", "--write", "--no-baseline"], { cur, manifest: manifestOf(base) });
  assert.equal(r.code, 1);
  assert.match(r.text, /İNCELE:TABAN\] \/darica\//);
  assert.equal(r.manifestText, L.serializeManifest(manifestOf(base)));
});

test("CLI: manifest yok/bozuk → çıkış 2, hiçbir şey yazılmaz; bilinmeyen komut ve bayraklar çıkış 2", async () => {
  const base = BASE();
  assert.equal((await cli(["check"], { base, manifest: null })).code, 2);
  const bad = { version: 1, pages: { "/": { lastmod: "dün", sig: "s", fsig: "f", drift: 0 } } };
  const r = await cli(["check", "--no-baseline"], { base, manifest: bad });
  assert.equal(r.code, 2);
  assert.match(r.text, /manifest geçersiz/);
  for (const args of [["bozuk"], ["check", "--yok"], ["check", "--write"], ["verify", "--hold", "/a/"], ["check", "--baseline", "x", "--no-baseline"], ["update", "--threshold", "0"]]) {
    const out = [];
    assert.equal(await run(args, { out: (s) => out.push(s), now: () => NOW }), 2, args.join(" "));
  }
});

test("CLI verify: dist eşleşirse 0; sitemap'te lastmod yoksa veya farklıysa 1; --live canlı sitemap'i okur", async () => {
  const base = BASE();
  const dates = { "/": "2026-11-14T20:25:22.000Z", "/darica/": "2026-11-12T04:58:56.000Z", "/fiyat/": "2026-11-16T21:52:18.000Z" };
  const good = await cli(["verify"], { base, dates, lastmods: dates, indexLastmod: "2026-11-16T21:52:18.000Z" });
  assert.equal(good.code, 0, good.text);
  assert.match(good.text, /BAŞARILI/);
  const missing = await cli(["verify"], { base, dates, lastmods: { "/": dates["/"] }, indexLastmod: "2026-11-16T21:52:18.000Z" });
  assert.equal(missing.code, 1);
  assert.match(missing.text, /lastmod yok/);
  const wrong = await cli(["verify"], { base, dates, lastmods: { ...dates, "/fiyat/": "2026-11-17T00:00:00.000Z" }, indexLastmod: "2026-11-17T00:00:00.000Z" });
  assert.equal(wrong.code, 1);
  // canlı
  const calls = [];
  const fetchImpl = async (url) => {
    calls.push(url);
    const body = url.endsWith("sitemap-index.xml")
      ? `<sitemapindex><sitemap><loc>${ORIGIN}/sitemap-0.xml</loc><lastmod>2026-11-16T21:52:18.000Z</lastmod></sitemap></sitemapindex>`
      : `<urlset>${Object.entries(dates).map(([p, d]) => `<url><loc>${ORIGIN}${p}</loc><lastmod>${d}</lastmod></url>`).join("")}</urlset>`;
    return { status: 200, text: async () => body };
  };
  const live = await cli(["verify", "--live"], { base, dates, fetchImpl });
  assert.equal(live.code, 0, live.text);
  assert.deepEqual(calls, [`${ORIGIN}/sitemap-index.xml`, `${ORIGIN}/sitemap-0.xml`]);
});

test("CLI verify: manifest imzası derlenmiş içerikten farklıysa uyarır (güncelleme gerekebilir)", async () => {
  const base = BASE();
  const cur = { ...base, "/darica/": page({ main: `<p>${words(80, "darica")} ${words(30, "yeni")}</p>` }) };
  const dates = { "/": "2026-11-14T20:25:22.000Z", "/darica/": "2026-11-12T04:58:56.000Z", "/fiyat/": "2026-11-16T21:52:18.000Z" };
  const r = await cli(["verify"], { cur, manifest: manifestOf(base, dates), lastmods: dates, indexLastmod: "2026-11-16T21:52:18.000Z" });
  assert.equal(r.code, 0, r.text);
  assert.match(r.text, /UYARI: \/darica\/: derlenmiş ana metin manifest imzasından farklı/);
});

test("resolveAstroBin: astro'nun çalıştırılabilir dosyasını paketin kendi bin alanından bulur; paket/bin yoksa açık hata", () => {
  const sb = sandbox();
  const astro = join(sb.dir, "node_modules", "astro");
  mkdirSync(join(astro, "bin"), { recursive: true });
  assert.throws(() => resolveAstroBin(sb.dir), /node_modules\/astro bulunamadı/);
  writeFileSync(join(astro, "package.json"), JSON.stringify({ bin: { astro: "./bin/astro.mjs" } }));
  assert.throws(() => resolveAstroBin(sb.dir), /çalıştırılabilir dosyası bulunamadı/);
  writeFileSync(join(astro, "bin", "astro.mjs"), "");
  assert.equal(resolveAstroBin(sb.dir), join(astro, "bin", "astro.mjs"));
  writeFileSync(join(astro, "package.json"), JSON.stringify({ bin: "./bin/astro.mjs" })); // bin metin biçiminde de olabilir
  assert.ok(resolveAstroBin(sb.dir).endsWith("astro.mjs"));
  sb.cleanup();
});

test("normPath/parseArgs: URL ve yol normalizasyonu; çoklu --hold; varsayılanlar", () => {
  assert.equal(normPath("https://www.eniyicihaz.com/darica-isitme-cihazlari"), "/darica-isitme-cihazlari/");
  assert.equal(normPath("darica/"), "/darica/");
  assert.equal(normPath("/"), "/");
  const o = parseArgs(["update", "--hold", "/a/ /b/", "--hold", "/c/", "--write"]);
  assert.deepEqual(o.hold, ["/a/", "/b/", "/c/"]);
  assert.equal(o.write, true);
  assert.equal(o.threshold, 10);
  assert.equal(parseArgs(["update"]).write, false, "update varsayılan olarak kuru çalıştırmadır");
});
