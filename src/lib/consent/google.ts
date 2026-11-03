// Google Consent Mode v2 (BASIC) + koşullu Google Tag Manager (GTM) yükleme.
//
// Mimari: Sitede doğrudan gtag.js / GA4 / Ads script'i YOKTUR. Tüm Google
// etiketleri GTM container'ı üzerinden yönetilir (GTM_ID, bkz. config.ts).
//
// Akış (Google'ın resmi sırası: consent default → consent update → GTM):
//   1. Her sayfada, GTM'den ÖNCE tüm isteğe bağlı Google izinleri `denied` olarak tanımlanır.
//   2. Kayıtlı bir tercih varsa sayfa açılışında okunur ve `consent update` ile uygulanır:
//        analytics_storage                ← Analitik
//        ad_storage, ad_user_data         ← Reklam ölçüm
//        ad_personalization               ← HER ZAMAN denied (sağlık kategorisi; kişiselleştirilmiş
//          reklam / remarketing sinyali hiçbir tercihte üretilmez).
//   3. BASIC Consent Mode: GTM (gtm.js) YALNIZCA Analitik veya Reklam ölçüm izninden en az biri
//      verildiyse, `default`/`update` dataLayer'a yazıldıktan SONRA yüklenir. Tercih yokken veya
//      tümü reddedildiğinde Google'a hiçbir ağ isteği gitmez. Bu yüzden standart
//      <noscript><iframe> GTM yedeği bilinçli olarak EKLENMEMİŞTİR.
//   4. İzin geri çekilirse (bu sekmede ya da başka sekmede): `consent update → denied` gönderilir,
//      olay gönderimi (analytics.ts) anında durur, reddedilen kategorinin çerezleri bizim alan adımızda
//      silinir ve tercih kaydedilir. GTM bu sayfada zaten yüklenmişse ConsentManager sayfayı BİR KEZ
//      yeniler; yeni sayfada kayıtlı tercih yeniden uygulanır (GTM ya hiç yüklenmez ya da yalnızca
//      kalan izinle yüklenir). Yenileme yalnızca geri almada olur; izin verme ve sayfa açılışı yenilemez.
import { GTM_ID, type ConsentChoices } from "./config";

type GtagFn = (...args: unknown[]) => void;
interface GoogleWindow extends Window {
  dataLayer?: unknown[];
  gtag?: GtagFn;
}

const w = globalThis as unknown as GoogleWindow;
let defaultSet = false;
let gtmRequested = false;
/** Şu an geçerli izinler (sayfa belleğinde; kalıcı kayıt store.ts'tedir). */
const granted: ConsentChoices = { analytics: false, marketing: false };

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

/** Analitik (GA) ve reklam (Ads / Conversion Linker) çerez adları. `_gac_*` reklam çerezidir, `_ga_*` ile karışmamalı. */
const ANALYTICS_COOKIE = /^(_ga|_ga_[A-Z0-9]+|_gid|_gat.*)$/;
const MARKETING_COOKIE = /^(_gcl_.*|_gac_.*|FPLC)$/;

/** Izni verilmemiş kategorilerin Google çerezlerini (yalnızca bizim alan adımızdakileri) siler. */
function clearGoogleCookies(choices: ConsentChoices): void {
  if (choices.analytics && choices.marketing) return;
  const host = location.hostname;
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    const drop = (!choices.analytics && ANALYTICS_COOKIE.test(name)) || (!choices.marketing && MARKETING_COOKIE.test(name));
    if (!drop) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

/** Kullanıcı tercihini Consent Mode'a ve GTM yüklemeye yansıtır. */
export function applyGoogleConsent(choices: ConsentChoices): void {
  setConsentDefault();
  const prev = { ...granted };
  granted.analytics = choices.analytics;
  granted.marketing = choices.marketing;
  ensureGtag()("consent", "update", {
    analytics_storage: choices.analytics ? "granted" : "denied",
    ad_storage: choices.marketing ? "granted" : "denied",
    ad_user_data: choices.marketing ? "granted" : "denied",
    // Hassas sağlık kategorisi: kişiselleştirilmiş reklam sinyali hiçbir tercihte açılmaz.
    ad_personalization: "denied",
  });

  // BASIC mod: consent default/update yazıldıktan SONRA, yalnızca en az bir izin varsa yükle.
  if (choices.analytics || choices.marketing) loadGtm();

  // Hazır sinyalleri: yalnızca GTM'de "izin hazır" tetikleyicisi için. Dönüşüm DEĞİLDİR;
  // dönüşüm yalnızca gerçek telefon/WhatsApp tıklamasında (events.ts) gönderilir.
  if (gtmRequested) {
    if (choices.analytics && !prev.analytics) pushDataLayerEvent("consent_analytics_ready", {});
    if (choices.marketing && !prev.marketing) pushDataLayerEvent("consent_marketing_ready", {});
  }

  // Kategori bazında: reddedilen kategorinin çerezleri, diğeri açık olsa bile silinir.
  clearGoogleCookies(choices);
}

/** Analitik izni şu an verilmiş mi? */
export function analyticsConsentGranted(): boolean {
  return granted.analytics;
}

/** Reklam ölçüm izni şu an verilmiş mi? */
export function marketingConsentGranted(): boolean {
  return granted.marketing;
}

/** GTM bu sayfada yüklendi mi? (event push'larının anlamlı olduğu durum) */
export function gtmIsActive(): boolean {
  return gtmRequested;
}

/** dataLayer'a bir event yazar. Çağıran yalnızca analytics.ts olmalıdır. */
export function pushDataLayerEvent(name: string, params: Record<string, string | number>): void {
  ensureDataLayer().push({ event: name, ...params });
}
