#!/usr/bin/env node
// Sitemap lastmod güncelleme/denetim betiği. Kurallar, prosedür ve örnekler: docs/tech/SITEMAP_LASTMOD.md
//
//   node tools/lastmod/lastmod.mjs check   [--dist dist] [--baseline-ref HEAD | --baseline <dist> | --no-baseline]
//   node tools/lastmod/lastmod.mjs update  [--write] [--hold U] [--advance U] [--settle U] [--set U=ISO] [--at ISO]
//   node tools/lastmod/lastmod.mjs verify  [--dist dist | --live]
//
// `check` salt okunurdur. `update` varsayılan olarak KURU ÇALIŞTIRMADIR; manifesti yalnızca `--write` ile yazar.
// Tarihler yalnızca manifestten gelir; bu betik dışında hiçbir yer tarih üretmez.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import * as L from "./lastmod-lib.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
export const REPO = resolve(HERE, "..", "..");
export const MANIFEST_PATH = join(HERE, "lastmod.json");

export class UsageError extends Error {}

const USAGE = `Kullanım: node tools/lastmod/lastmod.mjs <komut> [seçenekler]

Komutlar
  check     Derlenmiş çıktıyı manifestle karşılaştırır, hangi sayfaların tarihinin ilerlemesi gerektiğini raporlar (SALT OKUNUR).
            Çıkış kodu 1 = işlenmesi gereken bir şey var.
  update    check ile aynı planı üretir ve uygular. Varsayılan KURU ÇALIŞTIRMA; yazmak için --write.
  verify    Manifest ↔ sitemap çıktısı eşleşmesini ve tarih geçerliliğini denetler (hata = çıkış kodu 1).

Ortak seçenekler
  --dist <klasör>        derlenmiş çıktı (varsayılan: <depo>/dist; önce 'npm run build')
  --manifest <dosya>     manifest (varsayılan: tools/lastmod/lastmod.json)

check / update seçenekleri
  --baseline-ref <ref>   karşılaştırma tabanı olarak derlenecek git ref (varsayılan HEAD; önbellek: node_modules/.cache)
  --baseline <klasör>    hazır bir taban dist klasörü kullan
  --no-baseline          taban kullanma (büyüklük bilinemez → ana metni değişen sayfalar ELLE İNCELEME olur)
  --threshold <n>        anlamlı değişiklik eşiği, kelime (varsayılan ${L.CONFIG.significantWords})
  --hold <url>           bu sayfayı bilinçli beklet (manifest DEĞİŞMEZ); tekrarlanabilir
  --advance <url>        elle incelenen sayfanın tarihini İLERLET (lastmod = --at); tekrarlanabilir
  --settle <url>         elle incelenen değişikliği KAYDET ama tarihi İLERLETME; tekrarlanabilir
  --advance-all-review   inceleme durumundaki (taban/ana metin sorunu olmayan) tüm sayfaları ilerlet
  --set <url>=<ISO>      DOĞRULANMIŞ bir tarihi elle yaz (yalnızca kanıtı olan durumlar için)
update seçenekleri
  --write                manifesti yaz (yoksa kuru çalıştırma)
  --dry-run              (varsayılan) yazma, yalnızca göster
  --at <ISO>             yazılacak an (varsayılan: şimdi, UTC). YALNIZCA yayına çıkacak içerik için.
verify seçenekleri
  --live                 yerel dist yerine canlı sitemap'i (www.eniyicihaz.com) oku`;

export function parseArgs(argv) {
  const o = { cmd: null, dist: null, manifest: null, baseline: null, baselineRef: null, noBaseline: false, threshold: L.CONFIG.significantWords, hold: [], advance: [], settle: [], set: [], advanceAllReview: false, write: false, at: null, live: false };
  const [cmd, ...rest] = argv;
  if (!cmd || cmd === "help" || cmd === "--help" || cmd === "-h") return { ...o, cmd: "help" };
  if (!["check", "update", "verify"].includes(cmd)) throw new UsageError(`Bilinmeyen komut: ${cmd}`);
  o.cmd = cmd;
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    const val = () => {
      if (i + 1 >= rest.length) throw new UsageError(`${a} bir değer bekliyor.`);
      return rest[++i];
    };
    switch (a) {
      case "--dist": o.dist = val(); break;
      case "--manifest": o.manifest = val(); break;
      case "--baseline": o.baseline = val(); break;
      case "--baseline-ref": o.baselineRef = val(); break;
      case "--no-baseline": o.noBaseline = true; break;
      case "--threshold": { const n = Number(val()); if (!Number.isInteger(n) || n < 1) throw new UsageError("--threshold pozitif tam sayı olmalı."); o.threshold = n; break; }
      case "--hold": o.hold.push(...splitList(val())); break;
      case "--advance": o.advance.push(...splitList(val())); break;
      case "--settle": o.settle.push(...splitList(val())); break;
      case "--advance-all-review": o.advanceAllReview = true; break;
      case "--set": o.set.push(...splitList(val())); break;
      case "--write": o.write = true; break;
      case "--dry-run": o.write = false; break;
      case "--at": o.at = val(); break;
      case "--live": o.live = true; break;
      default: throw new UsageError(`Bilinmeyen seçenek: ${a}`);
    }
  }
  if (o.cmd !== "update" && (o.write || o.at || o.set.length)) throw new UsageError("--write/--at/--set yalnızca 'update' ile kullanılır.");
  if (o.cmd === "verify" && (o.hold.length || o.advance.length || o.settle.length)) throw new UsageError("--hold/--advance/--settle 'verify' ile kullanılmaz.");
  if ([o.baseline, o.baselineRef, o.noBaseline].filter(Boolean).length > 1) throw new UsageError("--baseline, --baseline-ref ve --no-baseline birlikte kullanılamaz.");
  return o;
}
const splitList = (s) => String(s).split(/[\s,]+/).map((x) => x.trim()).filter(Boolean);

/** URL veya yol → manifest yolu ("/x/y/"). */
export function normPath(s) {
  let p = String(s);
  if (/^https?:\/\//i.test(p)) p = new URL(p).pathname;
  if (!p.startsWith("/")) p = `/${p}`;
  if (!p.endsWith("/")) p = `${p}/`;
  return p;
}

// ---------------------------------------------------------------------------------------------------------------------
// Dist okuma
// ---------------------------------------------------------------------------------------------------------------------
export function loadDist(dir) {
  if (!existsSync(dir)) throw new Error(`dist klasörü yok: ${dir} (önce 'npm run build' çalıştırın)`);
  const files = readdirSync(dir).filter((f) => /^sitemap-\d+\.xml$/.test(f)).sort();
  if (!files.length) throw new Error(`${dir} içinde sitemap-N.xml yok (build tamamlanmamış olabilir)`);
  const entries = files.flatMap((f) => L.parseSitemapEntries(readFileSync(join(dir, f), "utf8")));
  const idxPath = join(dir, "sitemap-index.xml");
  const idx = existsSync(idxPath) ? L.parseSitemapIndex(readFileSync(idxPath, "utf8")) : [];
  const idxDates = idx.map((x) => x.lastmod).filter(Boolean).sort();
  const pages = new Map();
  for (const e of entries) {
    const p = L.pathOf(e.loc);
    const file = join(dir, p === "/" ? "index.html" : `${p.slice(1)}index.html`);
    pages.set(p, existsSync(file) ? L.analyzeHtml(readFileSync(file, "utf8")) : { ok: false, reason: "HTML dosyası yok" });
  }
  return { entries, pages, indexLastmod: idxDates.length ? idxDates[idxDates.length - 1] : null };
}

// ---------------------------------------------------------------------------------------------------------------------
// Karşılaştırma tabanı: git ref'i node_modules/.cache altında derler (junction/symlink yok, git'in yok saydığı klasör)
// ---------------------------------------------------------------------------------------------------------------------
function safeRemove(target, base) {
  const t = resolve(target);
  const b = resolve(base);
  if (!t.startsWith(b + sep) || t === b) throw new Error("güvenlik: silme yolu önbellek klasörü dışında");
  if (existsSync(t)) rmSync(t, { recursive: true, force: true });
}
/** astro'nun çalıştırılabilir dosyası: paketin kendi `bin` alanından (sürüme göre yol değişir). */
export function resolveAstroBin(repo = REPO) {
  const pkgPath = join(repo, "node_modules", "astro", "package.json");
  if (!existsSync(pkgPath)) throw new Error("node_modules/astro bulunamadı (npm install gerekir)");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const rel = typeof pkg.bin === "string" ? pkg.bin : pkg.bin?.astro;
  const bin = rel ? join(repo, "node_modules", "astro", rel) : null;
  if (!bin || !existsSync(bin)) throw new Error("astro çalıştırılabilir dosyası bulunamadı (package.json bin)");
  return bin;
}

export function buildBaselineDist(ref, { repo = REPO } = {}) {
  const rev = spawnSync("git", ["-C", repo, "rev-parse", "--verify", `${ref}^{commit}`], { encoding: "utf8" });
  if (rev.status !== 0) throw new Error(`git ref çözülemedi: ${ref}`);
  const sha = rev.stdout.trim();
  const cacheBase = join(repo, "node_modules", ".cache", "lastmod-baseline");
  const dir = join(cacheBase, sha.slice(0, 12));
  const dist = join(dir, "dist");
  if (existsSync(join(dist, "sitemap-0.xml"))) return { dist, sha, cached: true };
  const astroBin = resolveAstroBin(repo);
  mkdirSync(cacheBase, { recursive: true });
  safeRemove(dir, cacheBase);
  mkdirSync(dir, { recursive: true });
  const a = spawnSync("git", ["-C", repo, "archive", "--format=tar", sha], { maxBuffer: 1024 * 1024 * 1024 });
  if (a.status !== 0) throw new Error(`git archive başarısız: ${String(a.stderr)}`);
  // GNU tar "C:" ile başlayan yolu uzak makine sanır → dosya yolu vermeden stdin üzerinden aç
  const x = spawnSync("tar", ["-x"], { cwd: dir, input: a.stdout, encoding: "utf8" });
  if (x.status !== 0) throw new Error(`tar başarısız: ${x.stderr}`);
  const b = spawnSync(process.execPath, [astroBin, "build"], { cwd: dir, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (b.status !== 0 || !existsSync(join(dist, "sitemap-0.xml"))) throw new Error(`taban derlemesi başarısız (${ref}): ${((b.stderr || "") + (b.stdout || "")).replace(/\x1b\[[0-9;]*m/g, "").split("\n").filter((l) => /error|Error|Cannot|Could not/.test(l)).slice(0, 3).join(" | ")}`);
  for (const n of readdirSync(cacheBase)) if (n !== sha.slice(0, 12)) safeRemove(join(cacheBase, n), cacheBase);
  return { dist, sha, cached: false };
}

// ---------------------------------------------------------------------------------------------------------------------
// Raporlama
// ---------------------------------------------------------------------------------------------------------------------
const LABEL = {
  SIGNIFICANT: "ANLAMLI    ",
  MINOR: "KÜÇÜK      ",
  NEW: "YENİ       ",
  ORPHAN: "ARTIK KAYIT",
  REVIEW_FACT: "İNCELE:BİLGİ",
  REVIEW_FACT_STRUCTURED: "İNCELE:YAPILI",
  REVIEW_NO_BASELINE: "İNCELE:TABAN",
  REVIEW_NO_MAIN: "İNCELE:MAIN",
  STALE_MANIFEST: "İNCELE:ESKİ ",
  MISSING_ENTRY: "İNCELE:KAYIT",
  HELD: "BEKLETİLİYOR",
};
function renderItems(items, log) {
  const interesting = items.filter((i) => i.status !== L.STATUS.UNCHANGED);
  for (const it of interesting) {
    const dec = it.decision === "advance" ? " → İLERLETİLECEK (--advance)" : it.decision === "settle" ? " → kaydedilecek, tarih ilerlemeyecek (--settle)" : "";
    const w = it.words != null ? ` · +${it.added} −${it.removed} = ${it.words} kelime${it.drift ? ` (önceki birikim ${it.drift})` : ""}` : "";
    log(`  [${LABEL[it.status] ?? it.status}] ${it.path}${w}${it.note ? ` — ${it.note}` : ""}${it.originalStatus ? ` (asıl durum: ${it.originalStatus})` : ""}${dec}`);
    if (it.factDelta && (it.factDelta.added.length || it.factDelta.removed.length)) log(`      önemli bilgi: ${[...it.factDelta.removed.map((x) => `−${x}`), ...it.factDelta.added.map((x) => `+${x}`)].slice(0, 12).join("  ")}`);
  }
}
const countBy = (items) => items.reduce((m, i) => ((m[i.status] = (m[i.status] ?? 0) + 1), m), {});
const actionable = (items) => items.filter((i) => i.status !== L.STATUS.UNCHANGED && i.status !== L.STATUS.HELD);

// ---------------------------------------------------------------------------------------------------------------------
// Komutlar
// ---------------------------------------------------------------------------------------------------------------------
function readManifest(path, now) {
  if (!existsSync(path)) throw new Error(`manifest yok: ${path}`);
  let data;
  try {
    data = JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    throw new Error(`manifest okunamadı: ${e.message}`);
  }
  const problems = L.validateManifest(data, { now });
  if (problems.length) throw new Error(`manifest geçersiz (${problems.length} sorun):\n  ${problems.slice(0, 8).join("\n  ")}`);
  return data;
}

async function cmdCheckUpdate(o, d, log) {
  const now = d.now().getTime();
  const manifestPath = o.manifest ? resolve(o.manifest) : d.manifestPath;
  const manifest = readManifest(manifestPath, now);
  const dist = loadDist(o.dist ? resolve(o.dist) : join(d.repo, "dist"));
  // taban
  let baseline = null;
  let baselineInfo = "YOK (--no-baseline)";
  if (!o.noBaseline) {
    if (o.baseline) {
      baseline = loadDist(resolve(o.baseline)).pages;
      baselineInfo = `klasör ${o.baseline}`;
    } else {
      const ref = o.baselineRef ?? "HEAD";
      let built;
      try {
        built = d.buildBaseline(ref);
      } catch (e) {
        throw new Error(`karşılaştırma tabanı oluşturulamadı: ${e.message}\n  → --baseline <hazır dist> verin veya --no-baseline kullanın (büyüklük bilinemez, ana metni değişen sayfalar ELLE İNCELEME olur).`);
      }
      baseline = loadDist(built.dist).pages;
      baselineInfo = `${ref} (${built.sha.slice(0, 7)}${built.cached ? ", önbellekten" : ""})`;
    }
  }
  // bayraklar
  const known = new Set([...dist.pages.keys(), ...Object.keys(manifest.pages)]);
  const toSet = (list, name) => {
    const s = new Set(list.map(normPath));
    for (const p of s) if (!known.has(p)) throw new UsageError(`${name}: bilinmeyen sayfa ${p}`);
    return s;
  };
  const hold = toSet(o.hold, "--hold");
  const advance = toSet(o.advance, "--advance");
  const settle = toSet(o.settle, "--settle");
  for (const p of advance) if (hold.has(p) || settle.has(p)) throw new UsageError(`${p}: --advance ile --hold/--settle birlikte verilemez`);
  const explicit = new Map();
  for (const kv of o.set) {
    const i = kv.indexOf("=");
    if (i < 1) throw new UsageError(`--set "yol=ISO" biçiminde olmalı: ${kv}`);
    const p = normPath(kv.slice(0, i));
    const r = L.checkLastmod(kv.slice(i + 1), { now });
    if (!r.ok) throw new UsageError(`--set ${p}: ${r.reason}`);
    if (!dist.pages.has(p)) throw new UsageError(`--set: ${p} sitemap'te yok`);
    explicit.set(p, r.iso);
  }
  const items = L.classifyPages({ manifest, current: dist.pages, baseline, opts: { threshold: o.threshold, hold, advance, settle, advanceAllReview: o.advanceAllReview } });

  const c = countBy(items);
  log(`lastmod — ${o.cmd}${o.cmd === "update" ? (o.write ? " (YAZILIYOR)" : " (KURU ÇALIŞTIRMA)") : ""} · manifest: ${Object.keys(manifest.pages).length} sayfa · dist: ${dist.pages.size} sayfa · taban: ${baselineInfo} · eşik: ${o.threshold} kelime`);
  log(Object.entries(c).map(([k, v]) => `${k} ${v}`).join(" · ") || "sayfa yok");
  renderItems(items, log);

  if (o.cmd === "check") {
    const pending = actionable(items);
    if (!pending.length) log("\nİşlenmesi gereken değişiklik yok.");
    else log(`\n${pending.length} sayfa için işlem gerekiyor. Anlamlı/yeni/küçük olanlar için: update --write; inceleme gerekenler için --advance / --settle / --hold ile karar verin (docs/tech/SITEMAP_LASTMOD.md).`);
    return pending.length ? 1 : 0;
  }

  // update
  const at = o.at ?? new Date(Math.floor(now / 1000) * 1000).toISOString();
  const ar = L.checkLastmod(at, { now });
  if (!ar.ok) throw new UsageError(`--at: ${ar.reason}`);
  const { manifest: next, changes } = L.applyPlan({ manifest, items, current: dist.pages, at: ar.iso, explicit });
  for (const ch of changes) if (ch.to && ch.from && ch.to < ch.from) throw new UsageError(`${ch.path}: yeni tarih (${ch.to}) mevcut tarihten (${ch.from}) eski olamaz`);
  log(changes.length ? "\nYapılacak manifest değişiklikleri:" : "\nManifestte değişiklik yok.");
  for (const ch of changes) log(`  ${ch.path}: ${ch.from ?? "—"} → ${ch.to ?? "(silinecek)"}  · ${ch.why}`);
  const unresolved = actionable(L.classifyPages({ manifest: next, current: dist.pages, baseline, opts: { threshold: o.threshold, hold, advance: new Set(), settle: new Set() } }));
  const problems = L.validateManifest(next, { now });
  if (problems.length) throw new Error(`üretilen manifest geçersiz — YAZILMADI:\n  ${problems.slice(0, 8).join("\n  ")}`);
  if (o.write && changes.length) {
    writeFileSync(manifestPath, L.serializeManifest(next));
    log(`\nYazıldı: ${manifestPath}. Bu dosyayı, ilgili içerik değişikliğiyle AYNI commit'e ekleyin; yayın iptal olursa 'git checkout -- tools/lastmod/lastmod.json'.`);
  } else if (!o.write) log("\nKURU ÇALIŞTIRMA: hiçbir dosya yazılmadı (yazmak için --write).");
  if (unresolved.length) log(`\nUYARI: ${unresolved.length} sayfa hâlâ karar bekliyor (ELLE İNCELEME): ${unresolved.map((i) => i.path).slice(0, 10).join(" ")}`);
  return unresolved.length ? 1 : 0;
}

async function cmdVerify(o, d, log) {
  const now = d.now().getTime();
  const manifest = readManifest(o.manifest ? resolve(o.manifest) : d.manifestPath, now);
  let entries;
  let indexLastmod = null;
  let pages = null;
  let source;
  if (o.live) {
    const base = "https://www.eniyicihaz.com";
    const get = async (p) => {
      const r = await d.fetchImpl(`${base}${p}`, { headers: { "user-agent": "LastmodVerify/1.0" } });
      if (r.status !== 200) throw new Error(`${base}${p}: HTTP ${r.status}`);
      return r.text();
    };
    const idx = L.parseSitemapIndex(await get("/sitemap-index.xml"));
    if (!idx.length) throw new Error("canlı sitemap-index.xml içinde sitemap yok");
    entries = [];
    for (const s of idx) entries.push(...L.parseSitemapEntries(await get(L.pathOf(s.loc))));
    const dates = idx.map((x) => x.lastmod).filter(Boolean).sort();
    indexLastmod = dates.length ? dates[dates.length - 1] : null;
    source = "canlı sitemap";
  } else {
    const dist = loadDist(o.dist ? resolve(o.dist) : join(d.repo, "dist"));
    ({ entries, indexLastmod, pages } = dist);
    source = `dist (${o.dist ?? "dist"})`;
  }
  const r = L.verifySitemap({ entries, indexLastmod, manifest, now });
  const warnings = [...r.warnings];
  if (pages) for (const [p, a] of pages) { const m = manifest.pages[p]; if (m && a.ok && a.sig !== m.sig) warnings.push(`${p}: derlenmiş ana metin manifest imzasından farklı — 'check' çalıştırın (tarih güncellenmesi gerekebilir)`); }
  log(`lastmod — verify · kaynak: ${source} · sitemap: ${r.stats.urls} URL · lastmod'lu: ${r.stats.withLastmod} · farklı tarih değeri: ${r.stats.distinct} · manifest: ${Object.keys(manifest.pages).length}`);
  for (const w of warnings) log(`  UYARI: ${w}`);
  for (const e of r.errors) log(`  HATA : ${e}`);
  log(r.errors.length ? `\nBAŞARISIZ: ${r.errors.length} hata.` : "\nBAŞARILI: manifest ve sitemap eşleşiyor.");
  return r.errors.length ? 1 : 0;
}

export async function run(argv, deps = {}) {
  const d = { out: (s) => process.stdout.write(s), now: () => new Date(), repo: REPO, manifestPath: MANIFEST_PATH, buildBaseline: buildBaselineDist, fetchImpl: globalThis.fetch, ...deps };
  const log = (s = "") => d.out(`${s}\n`);
  let o;
  try {
    o = parseArgs(argv);
  } catch (e) {
    if (e instanceof UsageError) {
      log(`Kullanım hatası: ${e.message}\n`);
      log(USAGE);
      return 2;
    }
    throw e;
  }
  try {
    if (o.cmd === "help") {
      log(USAGE);
      return 0;
    }
    if (o.cmd === "verify") return await cmdVerify(o, d, log);
    return await cmdCheckUpdate(o, d, log);
  } catch (e) {
    log(`HATA: ${e.message}`);
    if (e instanceof UsageError) log(USAGE);
    return 2;
  }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) run(process.argv.slice(2)).then((code) => process.exit(code));
