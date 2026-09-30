// Google Consent Mode v2 + koşullu Google tag yükleme.
//
// Akış (Google'ın resmi sırası: default → (tag) → update):
//   1. Her sayfada önce tüm Google izinleri `denied` olarak tanımlanır.
//   2. Kullanıcı tercihi (kayıtlı ya da yeni) `consent update` ile uygulanır.
//   3. gtag.js YALNIZCA ilgili izin verildiyse VE ilgili ölçüm kimliği
//      tanımlıysa yüklenir. İzin yoksa ağa Google isteği hiç gitmez
//      (Çerez Politikası §3-§5 ile uyumlu).
import { ADS_ID, GA4_ID, type ConsentChoices } from "./config";

type GtagFn = (...args: unknown[]) => void;
interface GoogleWindow extends Window {
  dataLayer?: unknown[];
  gtag?: GtagFn;
}

const w = globalThis as unknown as GoogleWindow;
let defaultSet = false;
let scriptRequested = false;
const configured = new Set<string>();

function ensureGtag(): GtagFn {
  w.dataLayer = w.dataLayer || [];
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

function loadGoogleTag(firstId: string): void {
  if (scriptRequested) return;
  scriptRequested = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(firstId)}`;
  document.head.appendChild(s);
  ensureGtag()("js", new Date());
}

function configureOnce(id: string, params: Record<string, unknown> = {}): void {
  if (configured.has(id)) return;
  configured.add(id);
  ensureGtag()("config", id, params);
}

/** Google çerezlerini (yalnızca bizim alan adımızdakileri) siler. */
function clearGoogleCookies(): void {
  const host = location.hostname;
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    if (!/^(_ga|_gid|_gat|_gcl_|_gac_)/.test(name)) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

/** Kullanıcı tercihini Consent Mode'a ve etiket yüklemeye yansıtır. */
export function applyGoogleConsent(choices: ConsentChoices): void {
  setConsentDefault();
  const gtag = ensureGtag();
  gtag("consent", "update", {
    analytics_storage: choices.analytics ? "granted" : "denied",
    ad_storage: choices.marketing ? "granted" : "denied",
    ad_user_data: choices.marketing ? "granted" : "denied",
    ad_personalization: choices.marketing ? "granted" : "denied",
  });

  const wantGa = choices.analytics && GA4_ID !== "";
  const wantAds = choices.marketing && ADS_ID !== "";
  const first = wantGa ? GA4_ID : wantAds ? ADS_ID : "";
  if (first) loadGoogleTag(first);
  if (wantGa) configureOnce(GA4_ID);
  if (wantAds) configureOnce(ADS_ID);

  // Izin geri çekildiyse: yüklenmiş etiket artık `denied` ile çalışır ve
  // bizim alanımızdaki Google çerezleri silinir.
  if (!choices.analytics && !choices.marketing) clearGoogleCookies();
}

/** Google tag şu an gerçekten analitik için çalışıyor mu? */
export function analyticsIsActive(): boolean {
  return GA4_ID !== "" && configured.has(GA4_ID);
}

export function sendGtagEvent(name: string, params: Record<string, string | number>): void {
  ensureGtag()("event", name, params);
}
