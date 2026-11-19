#!/usr/bin/env node
// IndexNow bildirimcisi — Avrasya İşitme (www.eniyicihaz.com)
//
// Amaç: Her Cloudflare Pages dağıtımından SONRA yalnızca yeni / içeriği değişen / silinen / kalıcı taşınan URL'leri
// IndexNow'a (api.indexnow.org) bildirmek. 115 URL'nin tamamı her seferinde GÖNDERİLMEZ.
// Tasarım ve gerekçeler: docs/tech/INDEXNOW.md. Çalıştıran: .github/workflows/indexnow.yml (yerelde de çalışır).
//
// Bağımlılık yok (Node >= 20: yerleşik fetch + node:test). Siteye/derlemeye girmez: yalnızca tools/ altındadır.
//
// GÜVENLİK: `--send` verilmedikçe HİÇBİR ZAMAN POST gönderilmez (kuru çalıştırma). Siteye yalnızca GET atılır.
//
// Kullanım (özet):  node tools/indexnow/indexnow.mjs [--send] [--all] [--confirm-bulk] [--state d.json] [--out-state y.json]
//                   [--wait sn] [--expect-changes] [--extra-removed "url url"] [--report r.json]

import { createHash } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const CONFIG = Object.freeze({
  origin: "https://www.eniyicihaz.com", // IndexNow ana makinesi HEP www (apex 301 verir; protokol www/apex eşdeğerliğini belirtmez)
  host: "www.eniyicihaz.com",
  endpoint: "https://api.indexnow.org/indexnow", // tek uç nokta; gönderim katılımcı motorlarla paylaşılır
  sitemapIndex: "https://www.eniyicihaz.com/sitemap-index.xml",
  userAgent: "IndexNowNotifier/1.0", // genel ad: proje/kişi bilgisi dış servise sızmaz
  bulkMaxCount: 30, // bir çalışmada bundan FAZLA yeni+değişen URL → otomatik gönderim durur
  bulkMaxRatio: 0.4, // ... veya uygun URL'lerin %40'ından fazlası
  debounceMs: 10 * 60 * 1000, // aynı URL 10 dk içinde tekrar gönderilmez (IndexNow SSS: en az 5 dk)
  concurrency: 6,
  fetchTimeoutMs: 20_000,
  maxUrlsPerPost: 10_000,
  minSitemapUrls: 10, // altı = sitemap bozuk sayılır, çalışma durur
  stabilitySample: 5,
  extraRemovedMax: 200,
});

export class UsageError extends Error {}

// ---------------------------------------------------------------------------------------------------------------------
// Küçük yardımcılar
// ---------------------------------------------------------------------------------------------------------------------
const sha = (s) => createHash("sha256").update(s).digest("hex").slice(0, 32);

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
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function chunk(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

export async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, worker));
  return results;
}

/** Yalnızca https://www.eniyicihaz.com/... , sorgu/parça yok, boşluk yok. */
export function isValidPageUrl(u) {
  return typeof u === "string" && u.startsWith(`${CONFIG.origin}/`) && !/[?#\s]/.test(u);
}

/** Boşluk/virgül/satır sonu ile ayrılmış URL listesi → dizi. */
export function parseUrlList(text) {
  return [...new Set(String(text ?? "").split(/[\s,]+/).map((s) => s.trim()).filter(Boolean))];
}

// ---------------------------------------------------------------------------------------------------------------------
// HTML ayrıştırma ve içerik imzası
// ---------------------------------------------------------------------------------------------------------------------
function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) out[m[1].toLowerCase()] = m[2] ?? m[3] ?? "";
  return out;
}
const tagsOf = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => attrs(m[0]));

function metaContent(html, name) {
  const t = tagsOf(html, "meta").find((a) => (a.name ?? "").toLowerCase() === name);
  return t?.content ?? "";
}
function canonicalOf(html) {
  const t = tagsOf(html, "link").find((a) => (a.rel ?? "").toLowerCase().split(/\s+/).includes("canonical"));
  return t?.href ?? "";
}

/**
 * Cloudflare, e-posta adreslerini her İSTEKTE rastgele anahtarla yeniden kodlar (data-cfemail) → ham HTML iki ardışık
 * istekte bile farklıdır (ölçüldü: 115/115 sayfa). Betik/stil/yorumlar da içerik değildir. Normalleştirme bunları atar.
 */
export function normalizeHtml(html) {
  return String(html)
    .replace(/<script\b[\s\S]*?<\/script>/gi, (m) => (/type\s*=\s*["']application\/ld\+json["']/i.test(m) ? m : ""))
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\bdata-cfemail="[0-9a-f]*"/gi, 'data-cfemail="X"')
    .replace(/\/cdn-cgi\/l\/email-protection#[0-9a-f]+/gi, "/cdn-cgi/l/email-protection#X");
}

/**
 * "Anlamlı içerik" imzası: başlık, açıklama, canonical, <main> içindeki görünür metin + bağlantı hedefleri + görsel
 * alt/dosya adı (içerik özeti eki hariç) + JSON-LD. Üst bilgi/alt bilgi, CSS, betik ve sınıf adı değişiklikleri imzayı
 * DEĞİŞTİRMEZ: yalnızca görsel değişiklik IndexNow'a gitmez. (Yerel dist ↔ canlı: 111/115 birebir aynı; kalan 4 sayfa
 * yalnızca Cloudflare e-posta çevirisi.)
 */
export function contentSignature(html) {
  const h = normalizeHtml(html);
  const title = (h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "";
  const main = (h.match(/<main[\s>][\s\S]*?<\/main>/i) || [""])[0];
  const text = decodeEntities(main.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const hrefs = [...main.matchAll(/\bhref\s*=\s*"([^"]*)"/gi)].map((m) => m[1].replace(/#.*$/, "")).sort().join("|");
  const imgs = tagsOf(main, "img")
    .map((a) => {
      const src = (a.src ?? "").replace(/[?#].*$/, "").replace(/\.[A-Za-z0-9_-]{6,}(\.(?:webp|avif|png|jpe?g|gif|svg))$/i, "$1");
      return `${a.alt ?? ""}@${src}`;
    })
    .join("|");
  const ld = [...h.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => {
      const raw = m[1].trim();
      try {
        return JSON.stringify(JSON.parse(raw));
      } catch {
        return raw;
      }
    })
    .join("\n");
  return sha([title.trim(), metaContent(h, "description"), canonicalOf(h), text, hrefs, imgs, ld].join("\u0001"));
}

/** Bir sayfa IndexNow'a gönderilebilir mi? (200 + kendine dönük canonical + indekslenebilir + <main> var) */
export function evaluatePage(url, res) {
  if (res.error) return { ok: false, reason: `istek hatası: ${res.error}` };
  if (res.status >= 300 && res.status < 400) return { ok: false, reason: `yönlendirme (${res.status} → ${res.location || "?"})` };
  if (res.status !== 200) return { ok: false, reason: `HTTP ${res.status}` };
  if (!/text\/html/i.test(res.contentType ?? "")) return { ok: false, reason: `HTML değil (${res.contentType || "içerik türü yok"})` };
  if (/noindex/i.test(res.xRobots ?? "")) return { ok: false, reason: "X-Robots-Tag noindex" };
  for (const a of tagsOf(res.html, "meta")) {
    if (/^(robots|googlebot|bingbot)$/i.test(a.name ?? "") && /noindex/i.test(a.content ?? "")) return { ok: false, reason: "meta robots noindex" };
  }
  const canonical = decodeEntities(canonicalOf(res.html));
  if (!canonical) return { ok: false, reason: "canonical yok" };
  if (canonical !== url) return { ok: false, reason: `canonical farklı (${canonical})` };
  if (!/<main[\s>]/i.test(res.html)) return { ok: false, reason: "<main> yok" };
  return { ok: true, reason: "" };
}

// ---------------------------------------------------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------------------------------------------------
export function parseSitemapLocs(xml) {
  return [...String(xml).matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/gi)].map((m) => decodeEntities(m[1]));
}

/** sitemap-index → alt sitemap'ler → sayfa URL'leri (tekilleştirilmiş, sıralı). */
export async function collectSitemapUrls(http) {
  const getXml = async (u) => {
    const res = await http.getPage(u);
    if (res.status !== 200) throw new Error(`Sitemap alınamadı: ${u} (${res.error ?? `HTTP ${res.status}`})`);
    return res.html;
  };
  const rootXml = await getXml(CONFIG.sitemapIndex);
  let locs;
  if (/<sitemapindex\b/i.test(rootXml)) {
    locs = [];
    for (const child of parseSitemapLocs(rootXml)) {
      if (!child.startsWith(`${CONFIG.origin}/`)) throw new Error(`Sitemap dizini başka ana makineye işaret ediyor: ${child}`);
      locs.push(...parseSitemapLocs(await getXml(child)));
    }
  } else {
    locs = parseSitemapLocs(rootXml);
  }
  const rejected = locs.filter((u) => !isValidPageUrl(u));
  const urls = [...new Set(locs.filter(isValidPageUrl))].sort();
  if (urls.length < CONFIG.minSitemapUrls) throw new Error(`Sitemap şüpheli derecede küçük (${urls.length} URL); çalışma durduruldu.`);
  return { urls, rejected };
}

// ---------------------------------------------------------------------------------------------------------------------
// HTTP katmanı (istek sayacı dahil: kuru çalıştırmada api.indexnow.org'a istek gitmediği kanıtlanır)
// ---------------------------------------------------------------------------------------------------------------------
export function createHttp({ fetchImpl, sleep, retries = 2, retryDelaysMs = [1000, 3000], timeoutMs = CONFIG.fetchTimeoutMs, userAgent = CONFIG.userAgent }) {
  const hostCounts = new Map();
  const methodCounts = new Map();
  async function request(url, init = {}) {
    const host = new URL(url).host;
    const method = (init.method ?? "GET").toUpperCase();
    hostCounts.set(host, (hostCounts.get(host) ?? 0) + 1);
    methodCounts.set(method, (methodCounts.get(method) ?? 0) + 1);
    return fetchImpl(url, { ...init, headers: { "user-agent": userAgent, ...(init.headers ?? {}) }, signal: AbortSignal.timeout(timeoutMs) });
  }
  async function getPage(url) {
    let lastError = "";
    for (let attempt = 0; attempt <= retries; attempt++) {
      const wait = retryDelaysMs[Math.min(attempt, retryDelaysMs.length - 1)] ?? 0;
      try {
        const res = await request(url, { method: "GET", redirect: "manual", headers: { accept: "text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5" } });
        const html = await res.text();
        if (res.status >= 500 && attempt < retries) {
          await sleep(wait);
          continue;
        }
        return { url, status: res.status, location: res.headers.get("location") ?? "", contentType: res.headers.get("content-type") ?? "", xRobots: res.headers.get("x-robots-tag") ?? "", html };
      } catch (err) {
        lastError = String(err?.message ?? err);
        if (attempt < retries) await sleep(wait);
      }
    }
    return { url, status: 0, location: "", contentType: "", xRobots: "", html: "", error: lastError || "bilinmeyen hata" };
  }
  return { request, getPage, hostCounts, methodCounts };
}

// ---------------------------------------------------------------------------------------------------------------------
// Anahtar
// ---------------------------------------------------------------------------------------------------------------------
/** public/ içinde tam olarak BİR `<anahtar>.txt` olmalı; dosya içeriği dosya adıyla birebir aynı olmalı. */
export function findKey(publicDir) {
  const files = readdirSync(publicDir).filter((f) => /^[A-Za-z0-9-]{8,128}\.txt$/.test(f));
  if (files.length !== 1) throw new Error(`public/ içinde tam olarak bir IndexNow anahtar dosyası beklenir (bulunan: ${files.length}).`);
  const file = files[0];
  const key = file.slice(0, -4);
  const raw = readFileSync(join(publicDir, file));
  if (raw.length >= 3 && raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) throw new Error(`${file}: UTF-8 BOM var.`);
  if (raw.toString("utf8") !== key) throw new Error(`${file}: içerik dosya adıyla birebir aynı olmalı (boşluk/satır sonu yok). Bayt: ${raw.length}, beklenen: ${key.length}.`);
  return { key, file };
}

export async function verifyKeyLive(http, key) {
  const res = await http.getPage(`${CONFIG.origin}/${key}.txt`);
  if (res.error) return { ok: false, detail: `istek hatası: ${res.error}` };
  if (res.status !== 200) return { ok: false, detail: `HTTP ${res.status}` };
  if (!/text\/plain/i.test(res.contentType)) return { ok: false, detail: `içerik türü ${res.contentType || "yok"}` };
  if (res.html !== key) return { ok: false, detail: `gövde anahtarla eşleşmiyor (${res.html.length} bayt)` };
  return { ok: true, detail: `200, ${res.contentType}, ${res.html.length} bayt` };
}

// ---------------------------------------------------------------------------------------------------------------------
// Durum (önceki imzalar)
// ---------------------------------------------------------------------------------------------------------------------
export function loadState(path) {
  if (!path || !existsSync(path)) return null; // durum yok → bootstrap
  let data;
  try {
    data = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error(`Durum dosyası okunamadı (${path}): ${err.message}`);
  }
  if (!data || data.version !== 1 || typeof data.pages !== "object" || data.pages === null) throw new Error(`Durum dosyası biçimi geçersiz (${path}).`);
  return data.pages;
}
export const serializeState = (pages, now) => ({ version: 1, updatedAt: now.toISOString(), pages });

// ---------------------------------------------------------------------------------------------------------------------
// Silinen / taşınan sınıflandırması
// ---------------------------------------------------------------------------------------------------------------------
/**
 * Önceden bilinen ama artık sitemap'te olmayan bir URL'nin canlı durumu:
 *  404/410 → removed (silinen bildirimi) | 301/308 ve hedef sitemap'te → moved | 200/diğer → ignored | 5xx/hata → retry
 */
export function classifyGone(url, probe, sitemapSet) {
  if (probe.error || probe.status === 0 || probe.status >= 500) return { kind: "retry", reason: probe.error ? `istek hatası: ${probe.error}` : `HTTP ${probe.status}` };
  if (probe.status === 404 || probe.status === 410) return { kind: "removed", reason: `HTTP ${probe.status}` };
  if (probe.status === 301 || probe.status === 308) {
    let target = "";
    try {
      const t = new URL(probe.location, url);
      t.hash = "";
      target = t.toString();
    } catch {
      /* geçersiz Location */
    }
    if (target && sitemapSet.has(target)) return { kind: "moved", reason: `${probe.status} → ${target}`, target };
    return { kind: "ignored", reason: `kalıcı yönlendirme ama hedef sitemap'te değil (${probe.location || "?"})` };
  }
  if (probe.status >= 300 && probe.status < 400) return { kind: "ignored", reason: `geçici yönlendirme (${probe.status})` };
  if (probe.status === 200) return { kind: "ignored", reason: "hâlâ canlı (200) ama sitemap dışı" };
  return { kind: "ignored", reason: `HTTP ${probe.status}` };
}

// ---------------------------------------------------------------------------------------------------------------------
// Karar mantığı (saf fonksiyon)
// ---------------------------------------------------------------------------------------------------------------------
/**
 * @param current   [{url, ok, reason, sig}]   sitemap'teki her URL'nin denetim sonucu
 * @param previous  {url:{sig,notifiedAt?}}|null  önceki durum; null → BOOTSTRAP (yalnızca kaydet, gönderme)
 * @param sitemapSet Set<string>
 * @param probes    Map<url, probe>            önceki durumda olup sitemap'te olmayan URL'lerin canlı yoklaması
 * @param extraProbes Map<url, probe>          elle verilen ek silinen/taşınan adaylar (sahibin ayrı onayıyla)
 */
export function classify({ current, previous, sitemapSet, probes = new Map(), extraProbes = new Map(), now, opts = {} }) {
  const o = { all: false, confirmBulk: false, debounceMs: CONFIG.debounceMs, bulkMaxCount: CONFIG.bulkMaxCount, bulkMaxRatio: CONFIG.bulkMaxRatio, ...opts };
  const nowMs = now.getTime();
  const bootstrap = previous === null;
  const prev = previous ?? {};
  const eligible = current.filter((c) => c.ok);
  const ineligible = current.filter((c) => !c.ok).map((c) => ({ url: c.url, reason: c.reason }));

  const isNew = (c) => !(c.url in prev);
  const isChanged = (c) => c.url in prev && prev[c.url].sig !== c.sig;
  const newList = eligible.filter(isNew);
  const changedList = eligible.filter(isChanged);
  const unchangedList = eligible.filter((c) => !isNew(c) && !isChanged(c));
  const mode = o.all ? "all" : bootstrap ? "bootstrap" : "diff";

  // 1) İçerik tarafı: yeni + değişen (+ "all" modunda değişmeyenler)
  let contentCandidates = mode === "bootstrap" ? [] : mode === "all" ? [...newList, ...changedList, ...unchangedList] : [...newList, ...changedList];
  const guardCount = newList.length + changedList.length;
  const contentBlocked = mode === "diff" && !o.confirmBulk && (guardCount > o.bulkMaxCount || guardCount > o.bulkMaxRatio * eligible.length);
  const blocked = {};
  if (contentBlocked) {
    blocked.content = { count: guardCount, reason: `${guardCount} yeni+değişen URL (eşik: >${o.bulkMaxCount} veya >%${Math.round(o.bulkMaxRatio * 100)} = >${(o.bulkMaxRatio * eligible.length).toFixed(1)})` };
    contentCandidates = [];
  }
  const recently = (url) => prev[url]?.notifiedAt && nowMs - Date.parse(prev[url].notifiedAt) < o.debounceMs;
  const deferred = [];
  const submitContent = [];
  for (const c of contentCandidates) {
    if (recently(c.url)) deferred.push({ url: c.url, reason: `son bildirim ${prev[c.url].notifiedAt} (debounce ${Math.round(o.debounceMs / 60000)} dk)` });
    else submitContent.push(c);
  }

  // 2) Silinen / taşınan: önceki durumda olup sitemap'ten düşenler
  const removed = [];
  const moved = [];
  const ignored = [];
  const retained = [];
  const goneUrls = Object.keys(prev).filter((u) => !sitemapSet.has(u));
  for (const u of goneUrls) {
    const probe = probes.get(u);
    if (!probe) {
      retained.push({ url: u, reason: "yoklama yapılmadı" });
      continue;
    }
    const g = classifyGone(u, probe, sitemapSet);
    if (g.kind === "removed") removed.push({ url: u, reason: g.reason });
    else if (g.kind === "moved") moved.push({ url: u, reason: g.reason, target: g.target });
    else if (g.kind === "retry") retained.push({ url: u, reason: g.reason });
    else ignored.push({ url: u, reason: g.reason });
  }
  const goneCount = removed.length + moved.length;
  const prevCount = Object.keys(prev).length;
  let goneSubmitRemoved = removed;
  let goneSubmitMoved = moved;
  if (!o.confirmBulk && (goneCount > o.bulkMaxCount || goneCount > o.bulkMaxRatio * prevCount)) {
    blocked.removal = { count: goneCount, reason: `${goneCount} silinen/taşınan URL (eşik: >${o.bulkMaxCount} veya >%${Math.round(o.bulkMaxRatio * 100)} = >${(o.bulkMaxRatio * prevCount).toFixed(1)})` };
    goneSubmitRemoved = [];
    goneSubmitMoved = [];
  }

  // 3) Elle verilen ek adaylar (yalnızca doğrulanmış 404/410 ve hedefi sitemap'te olan 301): koruma eşiğine tabi değil, tavanı var
  const extraRemoved = [];
  const extraMoved = [];
  for (const [u, probe] of extraProbes) {
    if (sitemapSet.has(u)) {
      ignored.push({ url: u, reason: "elle verilen URL zaten sitemap'te" });
      continue;
    }
    const g = classifyGone(u, probe, sitemapSet);
    if (g.kind === "removed") extraRemoved.push({ url: u, reason: `${g.reason} (elle)` });
    else if (g.kind === "moved") extraMoved.push({ url: u, reason: `${g.reason} (elle)`, target: g.target });
    else ignored.push({ url: u, reason: `elle verilen: ${g.reason}` });
  }

  const urls = [...new Set([...submitContent.map((c) => c.url), ...goneSubmitRemoved.map((x) => x.url), ...goneSubmitMoved.map((x) => x.url), ...extraRemoved.map((x) => x.url), ...extraMoved.map((x) => x.url)])].sort();

  // 4) Başarılı gönderim varsayımıyla yeni durum
  const next = { ...prev };
  const stamp = now.toISOString();
  if (mode === "bootstrap") {
    for (const c of eligible) next[c.url] = { sig: c.sig };
  } else {
    for (const c of submitContent) next[c.url] = { sig: c.sig, notifiedAt: stamp };
  }
  for (const x of [...goneSubmitRemoved, ...goneSubmitMoved]) delete next[x.url];

  return {
    mode,
    counts: {
      sitemap: current.length, eligible: eligible.length, ineligible: ineligible.length,
      new: newList.length, changed: changedList.length, unchanged: unchangedList.length,
      removed: removed.length + extraRemoved.length, moved: moved.length + extraMoved.length,
      deferred: deferred.length, ignored: ignored.length, retained: retained.length, previous: prevCount,
    },
    submit: {
      new: submitContent.filter(isNew).map((c) => c.url),
      changed: submitContent.filter(isChanged).map((c) => c.url),
      refresh: submitContent.filter((c) => !isNew(c) && !isChanged(c)).map((c) => c.url), // yalnızca "all" modu
      removed: [...goneSubmitRemoved, ...extraRemoved],
      moved: [...goneSubmitMoved, ...extraMoved],
    },
    urls,
    blocked,
    deferred,
    ineligible,
    ignored,
    retained,
    nextPages: next,
  };
}

// ---------------------------------------------------------------------------------------------------------------------
// IndexNow gönderimi
// ---------------------------------------------------------------------------------------------------------------------
export function buildRequestBody(key, urls) {
  for (const u of urls) if (!isValidPageUrl(u)) throw new Error(`IndexNow'a uygun olmayan URL: ${u}`);
  return { host: CONFIG.host, key, keyLocation: `${CONFIG.origin}/${key}.txt`, urlList: urls };
}

export function explainStatus(status) {
  return (
    { 400: "geçersiz istek biçimi", 403: "anahtar geçersiz (dosya bulunamadı veya içerik eşleşmiyor)", 422: "URL'ler ana makineye ait değil / anahtar şemaya uymuyor / anahtar dosyasına erişilemiyor", 429: "çok fazla istek (spam algısı)" }[status] ?? `HTTP ${status}`
  );
}

/** 200/202 = başarılı. 5xx ve ağ hatası: yeniden dene. 4xx (429 dahil): yeniden deneme YOK. */
export async function postIndexNow({ http, key, urls, sleep, retryDelaysMs = [10_000, 60_000] }) {
  const results = [];
  for (const part of chunk(urls, CONFIG.maxUrlsPerPost)) {
    const body = JSON.stringify(buildRequestBody(key, part));
    let outcome;
    for (let attempt = 0; attempt <= retryDelaysMs.length; attempt++) {
      try {
        const res = await http.request(CONFIG.endpoint, { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body });
        await res.text().catch(() => "");
        if (res.status === 200 || res.status === 202) {
          outcome = { ok: true, status: res.status, count: part.length };
          break;
        }
        if (res.status >= 500 && attempt < retryDelaysMs.length) {
          await sleep(retryDelaysMs[attempt]);
          continue;
        }
        outcome = { ok: false, status: res.status, count: part.length, error: explainStatus(res.status), retryAfter: res.headers.get("retry-after") ?? "" };
        break;
      } catch (err) {
        if (attempt < retryDelaysMs.length) {
          await sleep(retryDelaysMs[attempt]);
          continue;
        }
        outcome = { ok: false, status: 0, count: part.length, error: String(err?.message ?? err) };
        break;
      }
    }
    results.push(outcome);
    if (!outcome.ok) break;
  }
  return { ok: results.length > 0 && results.every((r) => r.ok), results };
}

// ---------------------------------------------------------------------------------------------------------------------
// Kararlılık denetimi: örnek sayfalar iki kez çekilir; imza değişiyorsa (Cloudflare gürültüsü) çalışma durur.
// ---------------------------------------------------------------------------------------------------------------------
export async function stabilityCheck(http, urls) {
  if (urls.length === 0) return { checked: [], unstable: [] };
  const pick = new Set([urls[0]]);
  const kvkk = urls.find((u) => u.includes("/kvkk/")); // e-posta çevirisi olan sayfa: gürültünün en olası kaynağı
  if (kvkk) pick.add(kvkk);
  for (let i = 1; pick.size < Math.min(CONFIG.stabilitySample, urls.length); i++) pick.add(urls[Math.floor((i * urls.length) / CONFIG.stabilitySample) % urls.length]);
  const checked = [...pick];
  const unstable = [];
  for (const u of checked) {
    const a = await http.getPage(u);
    const b = await http.getPage(u);
    if (a.status !== 200 || b.status !== 200) continue; // erişilemeyen sayfa zaten uygun değil sayılır
    if (contentSignature(a.html) !== contentSignature(b.html)) unstable.push(u);
  }
  return { checked, unstable };
}

// ---------------------------------------------------------------------------------------------------------------------
// Komut satırı
// ---------------------------------------------------------------------------------------------------------------------
const USAGE = `Kullanım: node tools/indexnow/indexnow.mjs [seçenekler]
  --send                POST gönder (verilmezse KURU ÇALIŞTIRMA: hiçbir POST yok)
  --all                 değişmeyenler dahil tüm uygun URL'leri gönder (bir kerelik tam gönderim; toplu değişiklik koruması atlanır)
  --confirm-bulk        toplu değişiklik korumasını bilinçli olarak aş
  --state <dosya>       önceki imza durumu (yoksa BOOTSTRAP: yalnızca kaydeder, göndermez)
  --out-state <dosya>   yeni durumu yaz (yalnızca çalışma başarılıysa)
  --wait <sn>           ilk yoklamadan önce bekle (dağıtımın canlıya yansıması)
  --expect-changes      commit içeriğe dokunduysa ama 0 değişiklik bulunursa 1 kez daha bak
  --extra-removed "u.."  elle silinen/taşınan adaylar (404/410 veya sitemap'e 301 doğrulanırsa gönderilir; sahibin AYRI onayı gerekir)
  --report <dosya>      JSON rapor yaz
  --public-dir <yol>    anahtar dosyasının klasörü (varsayılan: <depo>/public)
  --retry-delays "a,b"  POST yeniden deneme bekleme süreleri (sn, varsayılan 10,60)`;

export function parseArgs(argv) {
  const o = { send: false, all: false, confirmBulk: false, expectChanges: false, state: null, outState: null, report: null, waitSec: 0, extraRemoved: [], publicDir: null, retryDelaysMs: [10_000, 60_000], expectRetrySec: 120 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const val = () => {
      if (i + 1 >= argv.length) throw new UsageError(`${a} bir değer bekliyor.`);
      return argv[++i];
    };
    switch (a) {
      case "--send": o.send = true; break;
      case "--all": o.all = true; break;
      case "--confirm-bulk": o.confirmBulk = true; break;
      case "--expect-changes": o.expectChanges = true; break;
      case "--state": o.state = val(); break;
      case "--out-state": o.outState = val(); break;
      case "--report": o.report = val(); break;
      case "--public-dir": o.publicDir = val(); break;
      case "--wait": {
        const n = Number(val());
        if (!Number.isFinite(n) || n < 0) throw new UsageError("--wait sıfır veya pozitif sayı olmalı.");
        o.waitSec = n;
        break;
      }
      case "--retry-delays": {
        const parts = val().split(",").map((s) => Number(s.trim()));
        if (parts.some((n) => !Number.isFinite(n) || n < 0)) throw new UsageError("--retry-delays sayı listesi olmalı (örn. 10,60).");
        o.retryDelaysMs = parts.map((n) => n * 1000);
        break;
      }
      case "--expect-retry-sec": o.expectRetrySec = Number(val()); break;
      case "--extra-removed": o.extraRemoved = parseUrlList(val()); break;
      case "--help":
      case "-h": throw new UsageError("yardım istendi");
      default: throw new UsageError(`Bilinmeyen seçenek: ${a}`);
    }
  }
  const bad = o.extraRemoved.filter((u) => !isValidPageUrl(u));
  if (bad.length) throw new UsageError(`--extra-removed içinde geçersiz URL (yalnızca ${CONFIG.origin}/..., sorgu/parça yok): ${bad.join(" ")}`);
  if (o.extraRemoved.length > CONFIG.extraRemovedMax) throw new UsageError(`--extra-removed en çok ${CONFIG.extraRemovedMax} URL alır.`);
  return o;
}

function renderReport(r, ctx) {
  const L = [];
  const c = r.plan.counts;
  L.push(`IndexNow — ${ctx.send ? "GÖNDERİM MODU" : "KURU ÇALIŞTIRMA (POST gönderilmez)"} · kip: ${r.plan.mode}`);
  L.push(`Anahtar dosyası: ${ctx.keyFile} · canlı doğrulama: ${ctx.keyLive.ok ? "✓" : "✗"} ${ctx.keyLive.detail}`);
  L.push(`Sitemap: ${c.sitemap} URL · uygun: ${c.eligible} · uygun değil: ${c.ineligible} · önceki durum: ${r.hadState ? `${c.previous} kayıt` : "YOK (bootstrap)"}`);
  L.push(`Yeni: ${c.new} · Değişen: ${c.changed} · Değişmeyen: ${c.unchanged} · Silinen: ${c.removed} · Taşınan(301): ${c.moved} · Ertelenen: ${c.deferred} · Yok sayılan: ${c.ignored} · Korunan: ${c.retained}`);
  if (r.plan.mode === "bootstrap") L.push("BOOTSTRAP: yalnızca mevcut URL imzaları kaydedilir; hiçbir URL gönderilmez.");
  if (r.plan.blocked.content) L.push(`⚠ TOPLU DEĞİŞİKLİK KORUMASI (yeni/değişen): ${r.plan.blocked.content.reason} → otomatik gönderim yapılmadı. Doğruysa elle --confirm-bulk ile çalıştırın.`);
  if (r.plan.blocked.removal) L.push(`⚠ TOPLU DEĞİŞİKLİK KORUMASI (silinen/taşınan): ${r.plan.blocked.removal.reason} → otomatik gönderim yapılmadı.`);
  if (ctx.stability) L.push(`Kararlılık denetimi: ${ctx.stability.checked.length} sayfa ikişer kez çekildi → ${ctx.stability.unstable.length === 0 ? "imzalar kararlı ✓" : `KARARSIZ: ${ctx.stability.unstable.join(", ")}`}`);
  if (r.plan.urls.length) {
    L.push("", `${ctx.send ? "GÖNDERİLECEK" : "GÖNDERİLİRDİ"} (${r.plan.urls.length}):`);
    for (const u of r.plan.submit.new) L.push(`  + yeni      ${u}`);
    for (const u of r.plan.submit.changed) L.push(`  ~ değişen   ${u}`);
    for (const u of r.plan.submit.refresh) L.push(`  = yenileme  ${u}`);
    for (const x of r.plan.submit.removed) L.push(`  - silinen   ${x.url}  (${x.reason})`);
    for (const x of r.plan.submit.moved) L.push(`  > taşınan   ${x.url}  (${x.reason})`);
  } else L.push("", "Gönderilecek URL yok.");
  const section = (title, list, f) => {
    if (list.length) {
      L.push("", `${title} (${list.length}):`);
      for (const x of list.slice(0, 40)) L.push(`  · ${f(x)}`);
      if (list.length > 40) L.push(`  … +${list.length - 40}`);
    }
  };
  section("Uygun olmadığı için bildirilmeyen sitemap URL'leri", r.plan.ineligible, (x) => `${x.url} — ${x.reason}`);
  section("Ertelenen", r.plan.deferred, (x) => `${x.url} — ${x.reason}`);
  section("Yok sayılan (gönderilmez)", r.plan.ignored, (x) => `${x.url} — ${x.reason}`);
  section("Korunan (sonraki çalışmada yeniden bakılır)", r.plan.retained, (x) => `${x.url} — ${x.reason}`);
  if (r.post) L.push("", `POST sonucu: ${r.post.results.map((x) => `${x.ok ? "✓" : "✗"} HTTP ${x.status} (${x.count} URL${x.error ? `; ${x.error}` : ""}${x.retryAfter ? `; Retry-After ${x.retryAfter}` : ""})`).join(" | ")}`);
  else if (!ctx.send) L.push("", "POST gönderilmedi (kuru çalıştırma).");
  else L.push("", "POST gerekmedi.");
  L.push(`İstek özeti — ana makine: ${[...ctx.http.hostCounts].map(([h, n]) => `${h} ×${n}`).join(", ")} · yöntem: ${[...ctx.http.methodCounts].map(([m, n]) => `${m} ×${n}`).join(", ")}`);
  return L.join("\n");
}

export async function run(argv, deps = {}) {
  const d = {
    fetchImpl: globalThis.fetch,
    sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
    now: () => new Date(),
    out: (s) => process.stdout.write(s),
    env: process.env,
    ...deps,
  };
  const log = (s = "") => d.out(`${s}\n`);
  let opts;
  try {
    opts = parseArgs(argv);
  } catch (err) {
    if (err instanceof UsageError) {
      log(`Kullanım hatası: ${err.message}`);
      log(USAGE);
      return 2;
    }
    throw err;
  }
  try {
    if (Number(process.versions.node.split(".")[0]) < 20) throw new Error(`Node >= 20 gerekir (bulunan: ${process.versions.node}).`);
    const publicDir = opts.publicDir ? resolve(opts.publicDir) : resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "public");
    const { key, file: keyFile } = findKey(publicDir);
    const http = createHttp({ fetchImpl: d.fetchImpl, sleep: d.sleep, retryDelaysMs: d.retryDelaysMs ?? [1000, 3000] });

    const keyLive = await verifyKeyLive(http, key);
    if (opts.send && !keyLive.ok) throw new Error(`Anahtar dosyası canlıda doğrulanamadı (${keyLive.detail}); gönderim durduruldu. Önce dağıtımın tamamlandığından emin olun.`);

    if (opts.waitSec > 0) {
      log(`Dağıtımın canlıya yansıması için ${opts.waitSec} sn bekleniyor…`);
      await d.sleep(opts.waitSec * 1000);
    }

    const previous = loadState(opts.state);
    const evaluateOnce = async () => {
      const { urls, rejected } = await collectSitemapUrls(http);
      const current = await mapPool(urls, CONFIG.concurrency, async (url) => {
        const res = await http.getPage(url);
        const ev = evaluatePage(url, res);
        return { url, ok: ev.ok, reason: ev.reason, sig: ev.ok ? contentSignature(res.html) : null };
      });
      const sitemapSet = new Set(urls);
      const probeOf = async (u) => {
        const r = await http.getPage(u);
        return { status: r.status, location: r.location, error: r.error };
      };
      const gone = Object.keys(previous ?? {}).filter((u) => !sitemapSet.has(u));
      const probes = new Map((await mapPool(gone, CONFIG.concurrency, async (u) => [u, await probeOf(u)])));
      const extraProbes = new Map((await mapPool(opts.extraRemoved, CONFIG.concurrency, async (u) => [u, await probeOf(u)])));
      const plan = classify({ current, previous, sitemapSet, probes, extraProbes, now: d.now(), opts: { all: opts.all, confirmBulk: opts.confirmBulk } });
      return { urls, rejected, current, plan };
    };

    let snap = await evaluateOnce();
    const stability = await stabilityCheck(http, snap.current.filter((c) => c.ok).map((c) => c.url));
    if (stability.unstable.length) throw new Error(`Kararlılık denetimi BAŞARISIZ: aynı sayfanın iki ardışık çekimi farklı imza verdi (${stability.unstable.join(", ")}). Normalleştirme eksik olabilir; toplu sahte bildirimi önlemek için çalışma durduruldu.`);

    const nothingOutgoing = (p) => p.counts.new + p.counts.changed + p.counts.removed + p.counts.moved === 0;
    if (opts.expectChanges && snap.plan.mode === "diff" && nothingOutgoing(snap.plan)) {
      log(`Commit içeriğe dokunmuş ama değişiklik bulunamadı; ${opts.expectRetrySec} sn sonra bir kez daha bakılıyor (yansıma gecikmesi olabilir)…`);
      await d.sleep(opts.expectRetrySec * 1000);
      snap = await evaluateOnce();
    }

    const result = { plan: snap.plan, hadState: previous !== null, post: null };
    if (opts.send && snap.plan.urls.length > 0) {
      result.post = await postIndexNow({ http, key, urls: snap.plan.urls, sleep: d.sleep, retryDelaysMs: opts.retryDelaysMs });
    }
    const text = renderReport(result, { send: opts.send, keyFile, keyLive, http, stability });
    log(text);

    if (d.env.GITHUB_STEP_SUMMARY) appendFileSync(d.env.GITHUB_STEP_SUMMARY, `## IndexNow\n\n\`\`\`\n${text}\n\`\`\`\n`);
    if (d.env.GITHUB_ACTIONS === "true") {
      if (snap.plan.blocked.content) log(`::warning title=IndexNow toplu değişiklik koruması::${snap.plan.blocked.content.reason}. Otomatik gönderim yapılmadı; doğruysa iş akışını elle confirm_bulk ile çalıştırın.`);
      if (snap.plan.blocked.removal) log(`::warning title=IndexNow toplu değişiklik koruması::${snap.plan.blocked.removal.reason}. Otomatik gönderim yapılmadı.`);
    }

    if (result.post && !result.post.ok) {
      log("HATA: IndexNow gönderimi başarısız; durum dosyası YAZILMADI (bir sonraki çalışmada aynı URL'ler yeniden aday olur).");
      return 1;
    }
    if (opts.outState) {
      mkdirSync(dirname(resolve(opts.outState)), { recursive: true });
      writeFileSync(opts.outState, `${JSON.stringify(serializeState(snap.plan.nextPages, d.now()), null, 2)}\n`);
      log(`Durum yazıldı: ${opts.outState} (${Object.keys(snap.plan.nextPages).length} kayıt)${opts.send ? "" : " — kuru çalıştırma: gönderim başarılı sayılarak"}`);
    }
    if (opts.report) {
      mkdirSync(dirname(resolve(opts.report)), { recursive: true });
      writeFileSync(opts.report, `${JSON.stringify({ ...result, rejectedSitemapUrls: snap.rejected, stability, keyLive }, null, 2)}\n`);
    }
    return 0;
  } catch (err) {
    log(`HATA: ${err.message}`);
    return 1;
  }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  run(process.argv.slice(2)).then((code) => process.exit(code));
}
