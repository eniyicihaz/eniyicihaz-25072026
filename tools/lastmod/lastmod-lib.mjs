// Sitemap lastmod: saf (ağ/dosya yazma yok) kütüphane. Kurallar ve prosedür: docs/tech/SITEMAP_LASTMOD.md
//
// Bu dosya hem astro.config.mjs (derleme sırasında manifesti okuyup sitemap'e tarih yazar) hem de tools/lastmod/lastmod.mjs
// (güncelleme/denetim betiği) tarafından kullanılır. Bağımlılık yok (yalnızca Node yerleşikleri).
//
// DEĞİŞMEZ İLKELER (ihlal eden değişiklik yapma):
//  • Tarih HİÇBİR ZAMAN build/deploy anından veya `new Date()`'ten türetilip sayfalara yazılmaz; yalnızca manifestten okunur.
//  • Manifestte olmayan veya geçersiz tarihli sayfaya lastmod YAZILMAZ (sessizce atlanır, build düşmez).
//  • Tarih yalnızca sayfanın ANLAMLI içeriği değiştiğinde ilerler (ana metin ≥ eşik kelime, ya da önemli bilgi → elle inceleme).
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const CONFIG = Object.freeze({
  /** Ana metinde eklenen+silinen kelime eşiği (birikimli): bunun altındaki değişiklik tarihi ilerletmez. */
  significantWords: 10,
  /** Kabul edilen tek tarih biçimi: UTC ISO 8601 (Z). */
  isoZ: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/,
  /** Depo başlangıcı (ilk commit 2026-07-25): bundan eski tarihin dayanağı yoktur → geçersiz sayılır. */
  minDate: "2026-07-25T00:00:00.000Z",
  /** Gelecek tarih toleransı (saat sapması). */
  futureToleranceMs: 5 * 60_000,
  /** Aynı lastmod'u paylaşan sayfa oranı bunu aşarsa uyarı (hepsi aynıysa HATA). */
  sameDateShareWarn: 0.85,
});

export const sha = (s) => createHash("sha256").update(String(s)).digest("hex").slice(0, 24);

// ---------------------------------------------------------------------------------------------------------------------
// Tarih doğrulama
// ---------------------------------------------------------------------------------------------------------------------
/** Tarih UTC ISO (Z) mi, gerçek bir an mı, depo başlangıcından sonra ve gelecekte değil mi? */
export function checkLastmod(value, { now = Date.now() } = {}) {
  if (typeof value !== "string") return { ok: false, reason: "tarih metin değil" };
  if (!CONFIG.isoZ.test(value)) return { ok: false, reason: `UTC ISO biçimi değil: "${value}" (beklenen YYYY-MM-DDThh:mm:ss[.sss]Z)` };
  const t = Date.parse(value);
  if (Number.isNaN(t)) return { ok: false, reason: `geçersiz tarih: "${value}"` };
  const iso = new Date(t).toISOString();
  if (iso.slice(0, 19) !== value.slice(0, 19)) return { ok: false, reason: `var olmayan takvim günü: "${value}"` };
  if (t < Date.parse(CONFIG.minDate)) return { ok: false, reason: `depo başlangıcından (${CONFIG.minDate.slice(0, 10)}) eski: "${value}"` };
  if (t > now + CONFIG.futureToleranceMs) return { ok: false, reason: `gelecekte: "${value}"` };
  return { ok: true, iso };
}

// ---------------------------------------------------------------------------------------------------------------------
// HTML çözümleme: ana metin imzası + "önemli bilgi" (telefon, fiyat, saat …) imzası
// ---------------------------------------------------------------------------------------------------------------------
function codePoint(n) {
  try {
    return String.fromCodePoint(n);
  } catch {
    return "";
  }
}
export function decodeEntities(s) {
  return String(s ?? "")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => codePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => codePoint(parseInt(d, 10)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const MAIN_RE = /<main[\s>][\s\S]*?<\/main>/i;
const attrOf = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"));
  return m ? (m[1] ?? m[2] ?? "") : "";
};

// Önemli bilgi desenleri: telefon, tutar/fiyat, taksit, yüzde, saat, e-posta. Değişiklikleri kelime sayısından BAĞIMSIZ olarak
// "elle inceleme" durumu üretir (docs/tech/SITEMAP_LASTMOD.md §Önemli bilgi).
const PHONE_RE = /(?<!\d)(?:\+?90|0090|0)?[\s.()-]*([2-5]\d{2})[\s.()-]*(\d{3})[\s.-]*(\d{2})[\s.-]*(\d{2})(?!\d)/g;
const THOUSANDS_RE = /(?<![\d.,])(\d{1,3}(?:\.\d{3})+)(?!\d)/g;
const TL_RE = /(?<![\d.,])(\d+)(?:,\d{1,2})?\s*(?:TL|₺)(?![A-Za-zÇĞİÖŞÜçğıöşü])/g;
const TAKSIT_RE = /(\d{1,2})\s*taksit/gi;
const PCT_RE = /%\s*(\d{1,3}(?:[.,]\d+)?)|(\d{1,3}(?:[.,]\d+)?)\s*%/g;
const TIME_RE = /(?<![\d:])([01]?\d|2[0-3]):([0-5]\d)(?![\d:])/g;
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
// JSON-LD'de doğrudan "bilgi" taşıyan anahtarlar
const LD_FACT_KEYS = new Set(["telephone", "faxNumber", "email", "opens", "closes", "dayOfWeek", "openingHours", "streetAddress", "addressLocality", "postalCode", "price", "priceRange", "lowPrice", "highPrice", "priceCurrency", "serviceType"]);

function* matchesOf(re, s) {
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(s))) yield m;
}
export function extractFactsFromText(s) {
  const out = new Set();
  const t = String(s ?? "");
  for (const m of matchesOf(PHONE_RE, t)) out.add(`tel:${m[1]}${m[2]}${m[3]}${m[4]}`);
  for (const m of matchesOf(THOUSANDS_RE, t)) out.add(`tutar:${m[1].replace(/\./g, "")}`);
  for (const m of matchesOf(TL_RE, t)) out.add(`tutar:${m[1]}`);
  for (const m of matchesOf(TAKSIT_RE, t)) out.add(`taksit:${m[1]}`);
  for (const m of matchesOf(PCT_RE, t)) out.add(`yuzde:${(m[1] ?? m[2]).replace(",", ".")}`);
  for (const m of matchesOf(TIME_RE, t)) out.add(`saat:${m[1].padStart(2, "0")}:${m[2]}`);
  for (const m of matchesOf(EMAIL_RE, t)) out.add(`eposta:${m[0].toLowerCase()}`);
  return out;
}
function collectLd(node, strings, keyed) {
  if (Array.isArray(node)) return node.forEach((x) => collectLd(x, strings, keyed));
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === "string") {
        strings.push(v);
        if (LD_FACT_KEYS.has(k)) keyed.add(`ld:${k}=${v}`);
      } else if (typeof v === "number" && LD_FACT_KEYS.has(k)) keyed.add(`ld:${k}=${v}`);
      else if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
        for (const x of v) strings.push(x);
        if (LD_FACT_KEYS.has(k)) for (const x of v) keyed.add(`ld:${k}=${x}`);
      } else collectLd(v, strings, keyed);
    }
  }
}

/**
 * Bir sayfanın derlenmiş HTML'inden:
 *  • text/sig   — `<main>` GÖRÜNÜR metni (tasarım/CSS/ALT/JSON-LD/bağlantı/meta/menü/üstbilgi/altbilgi değişiklikleri imzayı DEĞİŞTİRMEZ)
 *  • facts/fsig — önemli bilgiler: görünür metin + <title> + meta description + TÜM JSON-LD metinleri (yalnızca yapılandırılmış
 *                 veride değişen telefon/fiyat/saat de yakalanır)
 */
export function analyzeHtml(html) {
  const h = String(html).replace(/<!--[\s\S]*?-->/g, "");
  const main = (h.match(MAIN_RE) || [""])[0];
  if (!main) return { ok: false, reason: "<main> yok" };
  const visible = main.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ");
  const text = decodeEntities(visible.replace(/<[^>]+>/g, " ")).replace(/ /g, " ").replace(/\s+/g, " ").trim();
  const title = decodeEntities((h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "").trim();
  let description = "";
  for (const m of h.matchAll(/<meta\b[^>]*>/gi)) if (attrOf(m[0], "name").toLowerCase() === "description") description = decodeEntities(attrOf(m[0], "content"));
  const ldStrings = [];
  const ldKeyed = new Set();
  for (const m of h.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      collectLd(JSON.parse(m[1]), ldStrings, ldKeyed);
    } catch {
      ldStrings.push(m[1]);
    }
  }
  const facts = new Set([...extractFactsFromText([text, title, description, ...ldStrings].join("\n")), ...ldKeyed]);
  const factList = [...facts].sort();
  return { ok: true, text, words: text ? text.split(" ").length : 0, sig: sha(text), facts: factList, fsig: sha(factList.join("\n")) };
}

/** Çoklu küme (bag-of-words) farkı: eklenen + silinen kelime sayısı. */
export function wordDiff(oldText, newText) {
  const a = String(oldText).split(" ").filter(Boolean);
  const b = String(newText).split(" ").filter(Boolean);
  const cnt = new Map();
  for (const w of a) cnt.set(w, (cnt.get(w) ?? 0) + 1);
  let added = 0;
  for (const w of b) {
    const c = cnt.get(w) ?? 0;
    if (c > 0) cnt.set(w, c - 1);
    else added++;
  }
  let removed = 0;
  for (const c of cnt.values()) removed += c;
  return { added, removed, words: added + removed };
}
export function factDiff(oldFacts, newFacts) {
  const o = new Set(oldFacts ?? []);
  const n = new Set(newFacts ?? []);
  return { added: [...n].filter((x) => !o.has(x)), removed: [...o].filter((x) => !n.has(x)) };
}

// ---------------------------------------------------------------------------------------------------------------------
// Manifest
// ---------------------------------------------------------------------------------------------------------------------
export const emptyManifest = () => ({ version: 1, pages: {} });

/** Biçim sorunlarını listeler (boş liste = geçerli). */
export function validateManifest(m, { now = Date.now() } = {}) {
  const problems = [];
  if (!m || typeof m !== "object" || m.version !== 1 || typeof m.pages !== "object" || m.pages === null) return ["manifest biçimi geçersiz (version:1 ve pages gerekir)"];
  for (const [path, e] of Object.entries(m.pages)) {
    if (!/^\/(?:[^\s?#]*\/)?$/.test(path)) problems.push(`${path}: yol "/" ile başlayıp "/" ile bitmeli`);
    if (!e || typeof e !== "object") {
      problems.push(`${path}: kayıt nesne değil`);
      continue;
    }
    const r = checkLastmod(e.lastmod, { now });
    if (!r.ok) problems.push(`${path}: lastmod ${r.reason}`);
    if (typeof e.sig !== "string" || !e.sig) problems.push(`${path}: sig eksik`);
    if (typeof e.fsig !== "string" || !e.fsig) problems.push(`${path}: fsig eksik`);
    if (!Number.isInteger(e.drift) || e.drift < 0) problems.push(`${path}: drift negatif olmayan tam sayı olmalı`);
  }
  return problems;
}

/** Deterministik JSON: sayfa yolları sıralı, kayıt alan sırası sabit, sonda satır sonu. */
export function serializeManifest(m) {
  const pages = {};
  for (const path of Object.keys(m.pages).sort()) {
    const e = m.pages[path];
    pages[path] = { lastmod: e.lastmod, sig: e.sig, fsig: e.fsig, drift: e.drift };
  }
  const { version, pages: _p, ...rest } = m;
  return `${JSON.stringify({ version, ...rest, pages }, null, 2)}\n`;
}

/**
 * Derleme sırasında kullanılır: manifest yok/bozuksa build DÜŞMEZ; lastmod'suz sitemap üretilir (uyarı verilir).
 * @param {string|URL} location dosya yolu veya file: URL
 */
export function loadLastmodManifest(location, { warn = console.warn, now = Date.now() } = {}) {
  const path = location instanceof URL ? fileURLToPath(location) : String(location);
  if (!existsSync(path)) {
    warn(`[lastmod] manifest bulunamadı (${path}); sitemap lastmod'suz üretilecek.`);
    return emptyManifest();
  }
  let data;
  try {
    data = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    warn(`[lastmod] manifest okunamadı (${err.message}); sitemap lastmod'suz üretilecek.`);
    return emptyManifest();
  }
  const problems = validateManifest(data, { now });
  if (problems.length && (typeof data?.pages !== "object" || data?.version !== 1)) {
    warn(`[lastmod] manifest geçersiz: ${problems[0]}; sitemap lastmod'suz üretilecek.`);
    return emptyManifest();
  }
  return data; // kayıt bazında sorunlar createSerialize içinde o URL'ye lastmod yazılmayarak ele alınır
}

/**
 * @astrojs/sitemap `serialize` işlevi. Yalnızca manifestteki GEÇERLİ tarihi yazar; başka hiçbir kaynaktan (build zamanı,
 * `new Date()`, git) tarih üretmez. URL listesi ve sırası değişmez.
 */
export function createSerialize(manifest, { warn = console.warn, now = () => Date.now() } = {}) {
  const warned = new Set();
  return (item) => {
    let path;
    try {
      path = new URL(item.url).pathname;
    } catch {
      return item;
    }
    const e = manifest?.pages?.[path];
    if (!e) return item;
    const r = checkLastmod(e.lastmod, { now: now() });
    if (!r.ok) {
      if (!warned.has(path)) {
        warned.add(path);
        warn(`[lastmod] ${path}: ${r.reason}; bu URL'ye lastmod yazılmadı.`);
      }
      return item;
    }
    item.lastmod = r.iso;
    return item;
  };
}

// ---------------------------------------------------------------------------------------------------------------------
// Sitemap çözümleme ve doğrulama
// ---------------------------------------------------------------------------------------------------------------------
export function parseSitemapEntries(xml) {
  return [...String(xml).matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
    loc: decodeEntities((m[1].match(/<loc>\s*([^<]*?)\s*<\/loc>/) || [])[1] ?? ""),
    lastmod: (m[1].match(/<lastmod>\s*([^<]*?)\s*<\/lastmod>/) || [])[1] ?? null,
  }));
}
export function parseSitemapIndex(xml) {
  return [...String(xml).matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/g)].map((m) => ({
    loc: decodeEntities((m[1].match(/<loc>\s*([^<]*?)\s*<\/loc>/) || [])[1] ?? ""),
    lastmod: (m[1].match(/<lastmod>\s*([^<]*?)\s*<\/lastmod>/) || [])[1] ?? null,
  }));
}
export const pathOf = (loc) => {
  try {
    return new URL(loc).pathname;
  } catch {
    return loc;
  }
};

/** Manifest ↔ sitemap çıktısı eşleşmesi. errors = yayını durdurur, warnings = bilgi. */
export function verifySitemap({ entries, indexLastmod = null, manifest, now = Date.now() }) {
  const errors = [];
  const warnings = [];
  if (!entries.length) errors.push("sitemap'te URL yok");
  const seen = new Set();
  const dates = [];
  for (const e of entries) {
    const p = pathOf(e.loc);
    seen.add(p);
    const m = manifest.pages[p];
    if (!m) {
      errors.push(`${p}: manifestte kayıt yok${e.lastmod ? ` (sitemap'te yine de lastmod var: ${e.lastmod})` : ""}`);
      continue;
    }
    const mr = checkLastmod(m.lastmod, { now });
    if (!mr.ok) {
      errors.push(`${p}: manifest tarihi geçersiz (${mr.reason})`);
      continue;
    }
    if (!e.lastmod) {
      errors.push(`${p}: sitemap'te lastmod yok ama manifestte ${m.lastmod} var`);
      continue;
    }
    const sr = checkLastmod(e.lastmod, { now });
    if (!sr.ok) {
      errors.push(`${p}: sitemap tarihi geçersiz (${sr.reason})`);
      continue;
    }
    if (sr.iso !== mr.iso) errors.push(`${p}: sitemap ${sr.iso} ≠ manifest ${mr.iso}`);
    dates.push(sr.iso);
  }
  for (const p of Object.keys(manifest.pages)) if (!seen.has(p)) errors.push(`${p}: manifestte var ama sitemap'te yok (artık kayıt)`);
  if (dates.length > 1) {
    const counts = new Map();
    for (const d of dates) counts.set(d, (counts.get(d) ?? 0) + 1);
    const top = Math.max(...counts.values());
    if (counts.size === 1) errors.push(`tüm ${dates.length} sayfa AYNI lastmod değerinde (${dates[0]}) — bu yasaktır`);
    else if (top / dates.length > CONFIG.sameDateShareWarn) warnings.push(`sayfaların %${Math.round((100 * top) / dates.length)}'i aynı lastmod'u paylaşıyor`);
  }
  if (indexLastmod) {
    const ir = checkLastmod(indexLastmod, { now });
    if (!ir.ok) errors.push(`sitemap-index lastmod geçersiz (${ir.reason})`);
    else if (dates.length && ir.iso !== dates.slice().sort().pop()) warnings.push(`sitemap-index lastmod (${ir.iso}) en yeni sayfa tarihine (${dates.slice().sort().pop()}) eşit değil`);
  } else if (dates.length) warnings.push("sitemap-index.xml'de lastmod yok");
  return { errors, warnings, stats: { urls: entries.length, withLastmod: dates.length, distinct: new Set(dates).size } };
}

// ---------------------------------------------------------------------------------------------------------------------
// Sınıflandırma: içerik değişikliği anlamlı mı?
// ---------------------------------------------------------------------------------------------------------------------
export const STATUS = Object.freeze({
  UNCHANGED: "UNCHANGED", // imza aynı → hiçbir şey yapılmaz
  SIGNIFICANT: "SIGNIFICANT", // anlamlı içerik değişikliği → lastmod ilerler
  MINOR: "MINOR", // eşik altı → tarih ilerlemez; imza güncellenir, drift birikir
  NEW: "NEW", // yeni sayfa → lastmod = at
  ORPHAN: "ORPHAN", // manifestte var, sitemap'te yok → kayıt silinir
  REVIEW_FACT: "REVIEW_FACT", // ana metin + önemli bilgi değişti → ELLE inceleme
  REVIEW_FACT_STRUCTURED: "REVIEW_FACT_STRUCTURED", // yalnızca yapılandırılmış veride önemli bilgi değişti → ELLE inceleme
  REVIEW_NO_BASELINE: "REVIEW_NO_BASELINE", // karşılaştırma tabanı yok → büyüklük bilinemez → ELLE inceleme
  REVIEW_NO_MAIN: "REVIEW_NO_MAIN", // <main> çözümlenemedi
  STALE_MANIFEST: "STALE_MANIFEST", // manifest, tabanla (HEAD) uyumsuz → ELLE inceleme
  MISSING_ENTRY: "MISSING_ENTRY", // sayfa tabanda da var ama manifestte yok → tarih UYDURULMAZ, ELLE
  HELD: "HELD", // --hold ile bilinçli bekletiliyor
});
export const REVIEW_STATUSES = new Set([STATUS.REVIEW_FACT, STATUS.REVIEW_FACT_STRUCTURED, STATUS.REVIEW_NO_BASELINE, STATUS.REVIEW_NO_MAIN, STATUS.STALE_MANIFEST, STATUS.MISSING_ENTRY]);

/**
 * @param manifest  {version, pages}
 * @param current   Map<path, analysis>       derlenmiş (yayınlanacak) çıktı
 * @param baseline  Map<path, analysis>|null  son yayınlanan/commit'lenmiş çıktı (büyüklük karşılaştırması için); null = yok
 * @param opts      {threshold, hold:Set, advance:Set, settle:Set, advanceAllReview:boolean}
 */
export function classifyPages({ manifest, current, baseline = null, opts = {} }) {
  const o = { threshold: CONFIG.significantWords, hold: new Set(), advance: new Set(), settle: new Set(), advanceAllReview: false, ...opts };
  const items = [];
  const push = (path, status, extra = {}) => items.push({ path, status, ...extra });
  for (const [path, c] of current) {
    const m = manifest.pages[path];
    const b = baseline ? baseline.get(path) : undefined;
    if (!c.ok) {
      push(path, STATUS.REVIEW_NO_MAIN, { note: c.reason });
      continue;
    }
    if (!m) {
      if (!baseline) push(path, STATUS.REVIEW_NO_BASELINE, { note: "manifestte kayıt yok ve karşılaştırma tabanı yok: yeni sayfa mı, eksik kayıt mı bilinemez" });
      else if (b && b.ok) push(path, STATUS.MISSING_ENTRY, { note: "sayfa tabanda var ama manifestte kayıt yok: tarih uydurulmaz; doğrulanmış tarihle --set kullanın" });
      else push(path, STATUS.NEW, { note: "yeni sayfa" });
      continue;
    }
    const textChanged = c.sig !== m.sig;
    const factChanged = c.fsig !== m.fsig;
    if (!textChanged && !factChanged) {
      push(path, STATUS.UNCHANGED);
      continue;
    }
    const base = b && b.ok ? b : null;
    const factDelta = base ? factDiff(base.facts, c.facts) : null;
    if (!textChanged && factChanged) {
      push(path, STATUS.REVIEW_FACT_STRUCTURED, { note: "ana metin aynı; önemli bilgi yalnızca yapılandırılmış veride/başlıkta değişti", factDelta });
      continue;
    }
    // ana metin değişti
    if (!base) {
      push(path, STATUS.REVIEW_NO_BASELINE, { note: "ana metin değişti ama karşılaştırma tabanı yok: büyüklük bilinemez", words: null });
      continue;
    }
    if (base.sig !== m.sig) {
      push(path, STATUS.STALE_MANIFEST, { note: "manifest tabanla (HEAD) uyumsuz: önceki bir içerik değişikliğinde betik çalıştırılmamış olabilir; --baseline-ref ile eski bir commit'i deneyin" });
      continue;
    }
    const { words, added, removed } = wordDiff(base.text, c.text);
    if (factChanged) {
      push(path, STATUS.REVIEW_FACT, { words, added, removed, factDelta, note: "önemli bilgi (telefon/fiyat/saat/tutar/e-posta…) değişti — kelime sayısından bağımsız ELLE inceleme" });
      continue;
    }
    const total = m.drift + words;
    if (total >= o.threshold) push(path, STATUS.SIGNIFICANT, { words, added, removed, drift: m.drift, total });
    else push(path, STATUS.MINOR, { words, added, removed, drift: m.drift, total });
  }
  for (const path of Object.keys(manifest.pages)) if (!current.has(path)) push(path, STATUS.ORPHAN, { note: "sitemap'te artık yok (silindi/URL değişti)" });

  // bayraklar: hold > advance > settle
  for (const it of items) {
    if (it.status === STATUS.UNCHANGED) continue;
    if (o.hold.has(it.path)) {
      it.decision = "hold";
      it.originalStatus = it.status;
      it.status = STATUS.HELD;
    } else if (o.advance.has(it.path) || (o.advanceAllReview && REVIEW_STATUSES.has(it.status) && it.status !== STATUS.MISSING_ENTRY && it.status !== STATUS.REVIEW_NO_MAIN)) it.decision = "advance";
    else if (o.settle.has(it.path)) it.decision = "settle";
  }
  return items;
}

/**
 * Planı manifeste uygular (saf): yeni manifest + değişiklik listesi döner. Değişmeyen sayfaların kayıtları AYNEN korunur.
 * @param at       lastmod olarak yazılacak, DOĞRULANMIŞ UTC ISO an
 * @param explicit Map<path, ISO>  --set ile verilmiş doğrulanmış tarihler
 */
export function applyPlan({ manifest, items, current, at, explicit = new Map() }) {
  const next = { ...manifest, pages: { ...manifest.pages } };
  const changes = [];
  const setEntry = (path, e, why) => {
    const old = next.pages[path];
    next.pages[path] = e;
    changes.push({ path, why, from: old ? old.lastmod : null, to: e.lastmod, sigChanged: !old || old.sig !== e.sig, driftTo: e.drift });
  };
  for (const it of items) {
    const c = current.get(it.path);
    const old = manifest.pages[it.path];
    const adv = { lastmod: at, sig: c?.sig, fsig: c?.fsig, drift: 0 };
    if (explicit.has(it.path)) {
      setEntry(it.path, { lastmod: explicit.get(it.path), sig: c.sig, fsig: c.fsig, drift: 0 }, "--set (doğrulanmış tarih)");
      continue;
    }
    switch (it.status) {
      case STATUS.SIGNIFICANT:
        if (it.decision === "settle") setEntry(it.path, { lastmod: old.lastmod, sig: c.sig, fsig: c.fsig, drift: old.drift }, `--settle (anlamlı görünen ${it.words} kelimelik değişiklik): imza kaydedildi, tarih ilerlemedi`);
        else setEntry(it.path, adv, `anlamlı değişiklik (${it.words} kelime${it.drift ? `, birikim dahil ${it.total}` : ""})`);
        break;
      case STATUS.NEW:
        setEntry(it.path, adv, "yeni sayfa");
        break;
      case STATUS.MINOR:
        if (it.decision === "advance") setEntry(it.path, adv, `--advance (küçük değişiklik: ${it.words} kelime)`);
        else setEntry(it.path, { lastmod: old.lastmod, sig: c.sig, fsig: c.fsig, drift: old.drift + it.words }, `küçük değişiklik (${it.words} kelime): tarih ilerlemedi, birikim ${old.drift + it.words}`);
        break;
      case STATUS.ORPHAN:
        delete next.pages[it.path];
        changes.push({ path: it.path, why: "sitemap'ten düştü: kayıt silindi", from: old.lastmod, to: null, sigChanged: false, driftTo: null });
        break;
      default:
        if (REVIEW_STATUSES.has(it.status) && it.decision === "advance" && c?.ok && it.status !== STATUS.MISSING_ENTRY) setEntry(it.path, adv, `--advance (${it.status})`);
        else if (REVIEW_STATUSES.has(it.status) && it.decision === "settle" && old && c?.ok) setEntry(it.path, { lastmod: old.lastmod, sig: c.sig, fsig: c.fsig, drift: old.drift }, `--settle (${it.status}): imza kaydedildi, tarih ilerlemedi`);
        break;
    }
  }
  return { manifest: next, changes };
}
