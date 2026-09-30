// Analytics event gönderimi için TEK geçit.
//
// Kural (KVK-AYD-04 §3, WEB-CRZ-06 §4): sağlık bilgisi, online işitme testi
// sonucu, dB/eşik değeri veya odyogram hiçbir Analytics/Ads event'ine
// gönderilmez. Bunu "yasak listesi" ile değil, tersine **izin listesi**
// ile sağlıyoruz: burada tanımlı olmayan hiçbir parametre adı ağa çıkmaz.
// Yeni bir parametre gerekirse, sağlıkla ilgisi olmadığı doğrulanarak
// ALLOWED_PARAMS'a bilinçli olarak eklenmelidir.
import { analyticsIsActive, sendGtagEvent } from "./google";

const ALLOWED_PARAMS = new Set([
  "link_location", // header / footer / mobil menü / CTA gibi tıklama yeri
  "link_type", // phone / whatsapp / map / email
  "cta_label",
  "device", // mobile / desktop
  "page_type", // sayfa türü (ör. marka, yerel, rehber) — sayfa içeriği değil
]);

const MAX_VALUE_LENGTH = 60;

/** İzin listesi dışındaki parametreleri ve uzun/şüpheli değerleri atar. */
export function sanitizeParams(params: Record<string, unknown> = {}): Record<string, string | number> {
  const out: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(params)) {
    if (!ALLOWED_PARAMS.has(k)) continue;
    if (typeof v === "number" && Number.isFinite(v)) out[k] = v;
    else if (typeof v === "string") out[k] = v.slice(0, MAX_VALUE_LENGTH);
  }
  return out;
}

/** İzin yoksa veya ölçüm kimliği tanımsızsa sessizce hiçbir şey yapmaz. */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!analyticsIsActive()) return;
  sendGtagEvent(name, sanitizeParams(params));
}
