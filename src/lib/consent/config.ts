// Çerez / izin altyapısı — tek yapılandırma noktası.
// Davranış, KVKK belgelerindeki (KVK-AYD-04, WEB-CRZ-06) uygulamayla
// birebir örtüşmelidir: analitik ve reklam ölçüm varsayılan olarak KAPALIDIR,
// yalnızca kullanıcının AÇIK tercihiyle açılır. Harita/video gibi üçüncü taraf
// gömme içerikler kategori değildir; her biri ayrı ve açık bir tıklamayla yüklenir.

export type ConsentCategory = "necessary" | "analytics" | "marketing";
export type OptionalCategory = Exclude<ConsentCategory, "necessary">;
export type ConsentChoices = Record<OptionalCategory, boolean>;

/** Kullanıcının hangi seçenekle karar verdiği. Kayıtta bu alan yoksa kayıt açık rıza SAYILMAZ. */
export type ConsentMethod = "accept_all" | "reject_all" | "custom";
export const CONSENT_METHODS: ConsentMethod[] = ["accept_all", "reject_all", "custom"];

/** localStorage anahtarı. Tek anahtar, tek JSON kaydı. */
export const CONSENT_STORAGE_KEY = "eniyicihaz:consent";

/**
 * Politika sürümü. Çerez Politikası / Aydınlatma Metni anlam olarak
 * değiştiğinde bu değer artırılır; kayıtlı sürüm farklıysa kullanıcıdan
 * tercih yeniden istenir. Bu TEKNİK bir sürümdür; hukuki metnin yürürlük tarihiyle (EFFECTIVE_DATE) karıştırılmamalıdır.
 */
export const CONSENT_POLICY_VERSION = "2026-11-04-v2";

/**
 * Tercihin geçerlilik süresi (gün). `null` = zaman aşımı YOK: tercih,
 * kullanıcı değiştirene/silene veya CONSENT_POLICY_VERSION artana kadar
 * geçerlidir. Çerez Politikası / Aydınlatma Metni bir süre tanımlamadığı
 * için bu değer bilinçli olarak null bırakılmıştır; hukuki metinde bir
 * süre belirlenirse burada o sayı girilir (başka hiçbir kod değişmez).
 */
export const CONSENT_MAX_AGE_DAYS: number | null = null;

export const OPTIONAL_CATEGORIES: OptionalCategory[] = ["analytics", "marketing"];

/**
 * "Karar verilmedi / hepsi reddedildi" durumunun değeri. Bu bir VARSAYILAN KABUL değildir ve
 * hiçbir zaman kayıt olarak yazılmaz: kayıt yalnızca kullanıcı bir seçenek seçtiğinde oluşur.
 */
export const ALL_DENIED: ConsentChoices = {
  analytics: false,
  marketing: false,
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
