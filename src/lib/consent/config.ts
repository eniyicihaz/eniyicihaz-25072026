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

// Ölçüm kimlikleri yalnızca build-time env'den gelir. Boşsa veya biçim
// geçersizse ilgili etiket hiçbir koşulda yüklenmez (placeholder durum).
//   PUBLIC_GA4_ID=G-XXXXXXXXXX      PUBLIC_ADS_ID=AW-XXXXXXXXX
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
const ga = (env.PUBLIC_GA4_ID ?? "").trim();
const ads = (env.PUBLIC_ADS_ID ?? "").trim();

export const GA4_ID: string = /^G-[A-Z0-9]{6,}$/.test(ga) ? ga : "";
export const ADS_ID: string = /^AW-\d{6,}$/.test(ads) ? ads : "";
