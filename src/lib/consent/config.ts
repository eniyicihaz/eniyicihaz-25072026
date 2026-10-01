// Çerez / izin altyapısı — tek yapılandırma noktası.
// Davranış, KVKK belgelerindeki (KVK-AYD-04, WEB-CRZ-06) uygulamayla
// birebir örtüşmelidir: analitik, reklam/pazarlama ve zorunlu olmayan
// üçüncü taraf içerik varsayılan olarak KAPALIDIR, yalnızca kullanıcı
// tercihiyle açılır.

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "thirdParty";
export type OptionalCategory = Exclude<ConsentCategory, "necessary">;
export type ConsentChoices = Record<OptionalCategory, boolean>;

/** localStorage anahtarı. Tek anahtar, tek JSON kaydı. */
export const CONSENT_STORAGE_KEY = "eniyicihaz:consent";

/**
 * Politika sürümü. Çerez Politikası / Aydınlatma Metni anlam olarak
 * değiştiğinde bu değer artırılır; kayıtlı sürüm farklıysa kullanıcıdan
 * tercih yeniden istenir. (Mevcut değer: belgelerin yürürlük tarihi.)
 */
export const CONSENT_POLICY_VERSION = "2026-10-01";

/**
 * Tercihin geçerlilik süresi (gün). `null` = zaman aşımı YOK: tercih,
 * kullanıcı değiştirene/silene veya CONSENT_POLICY_VERSION artana kadar
 * geçerlidir. Çerez Politikası / Aydınlatma Metni bir süre tanımlamadığı
 * için bu değer bilinçli olarak null bırakılmıştır; hukuki metinde bir
 * süre belirlenirse burada o sayı girilir (başka hiçbir kod değişmez).
 */
export const CONSENT_MAX_AGE_DAYS: number | null = null;

export const OPTIONAL_CATEGORIES: OptionalCategory[] = ["analytics", "marketing", "thirdParty"];

export const DEFAULT_CHOICES: ConsentChoices = {
  analytics: false,
  marketing: false,
  thirdParty: false,
};

// Google Tag Manager container kimliği (herkese açık, gizli değil).
// GA4 (Measurement ID G-9PC230DJCE) ve ileride Google Ads etiketleri
// doğrudan sitede DEĞİL, bu container üzerinden GTM panelinden yönetilir.
// Eski container (GTM-NRWFGX8D) bu projede kullanılmaz.
// Build-time env ile geçersiz kılınabilir: PUBLIC_GTM_ID=GTM-XXXXXXX
// (boş/geçersiz değer = GTM hiç yüklenmez).
const DEFAULT_GTM_ID = "GTM-N8H82DDL";
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
const gtm = (env.PUBLIC_GTM_ID ?? DEFAULT_GTM_ID).trim();

export const GTM_ID: string = /^GTM-[A-Z0-9]{4,}$/.test(gtm) ? gtm : "";
