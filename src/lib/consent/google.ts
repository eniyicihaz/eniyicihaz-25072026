// Google Consent Mode v2 + koşullu Google Tag Manager (GTM) yükleme.
//
// Mimari: Sitede doğrudan gtag.js / GA4 / Ads script'i YOKTUR. Tüm Google
// etiketleri GTM container'ı üzerinden yönetilir (GTM_ID, bkz. config.ts).
//
// Akış (Google'ın resmi sırası: consent default → consent update → GTM):
//   1. Her sayfada önce tüm Google izinleri `denied` olarak tanımlanır.
//   2. Kullanıcı tercihi (kayıtlı ya da yeni) `consent update` ile uygulanır:
//        analytics_storage                          ← Analitik
//        ad_storage, ad_user_data, ad_personalization ← Reklam / Pazarlama
//   3. GTM (gtm.js) YALNIZCA Analitik veya Reklam/Pazarlama izninden en az
//      biri verildiyse yüklenir. Hiçbir izin yokken Google'a hiçbir ağ
//      isteği gitmez (Çerez Politikası §3-§5 ile uyumlu). Bu yüzden
//      standart <noscript><iframe> GTM yedeği bilinçli olarak EKLENMEMİŞTİR:
//      JS'siz ortamda izinsiz istek atardı.
//   4. İzin geri çekilirse `consent update → denied` gönderilir; GTM bu
//      durumda tag'leri kendi consent ayarlarına göre durdurur ve bizim
//      alan adımızdaki Google çerezleri silinir.
import { GTM_ID, type ConsentChoices } from "./config";

type GtagFn = (...args: unknown[]) => void;
interface GoogleWindow extends Window {
  dataLayer?: unknown[];
  gtag?: GtagFn;
}

const w = globalThis as unknown as GoogleWindow;
let defaultSet = false;
let gtmRequested = false;

function ensureDataLayer(): unknown[] {
  w.dataLayer = w.dataLayer || [];
  return w.dataLayer;
}

function ensureGtag(): GtagFn {
  ensureDataLayer();
  if (!w.gtag) {
    // Google'ın beklediği biçim: `arguments` nesnesi push edilir (dizi değil).
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  }
  return w.gtag;
}

/** Güvenli başlangıç: hiçbir Google izni verilmemiş. */
export function setConsentDefault(): void {
  if (defaultSet) return;
  defaultSet = true;
  ensureGtag()("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

/** GTM'yi standart snippet'in yaptığı gibi başlatır (yalnızca bir kez). */
function loadGtm(): void {
  if (gtmRequested || GTM_ID === "") return;
  gtmRequested = true;
  ensureDataLayer().push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(s);
}

/** Google çerezlerini (yalnızca bizim alan adımızdakileri) siler. */
function clearGoogleCookies(): void {
  const host = location.hostname;
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    if (!/^(_ga|_gid|_gat|_gcl_|_gac_|FPLC)/.test(name)) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

/** Kullanıcı tercihini Consent Mode'a ve GTM yüklemeye yansıtır. */
export function applyGoogleConsent(choices: ConsentChoices): void {
  setConsentDefault();
  ensureGtag()("consent", "update", {
    analytics_storage: choices.analytics ? "granted" : "denied",
    ad_storage: choices.marketing ? "granted" : "denied",
    ad_user_data: choices.marketing ? "granted" : "denied",
    ad_personalization: choices.marketing ? "granted" : "denied",
  });

  // GTM yalnızca analitik VEYA reklam izni varsa yüklenir (consent update
  // her zaman GTM'den ÖNCE dataLayer'a yazılmış olur).
  if (choices.analytics || choices.marketing) loadGtm();

  if (!choices.analytics && !choices.marketing) clearGoogleCookies();
}

/** GTM bu sayfada yüklendi mi? (event push'larının anlamlı olduğu durum) */
export function gtmIsActive(): boolean {
  return gtmRequested;
}

/** dataLayer'a bir event yazar. Çağıran yalnızca analytics.ts olmalıdır. */
export function pushDataLayerEvent(name: string, params: Record<string, string | number>): void {
  ensureDataLayer().push({ event: name, ...params });
}
