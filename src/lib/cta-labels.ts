// Standart CTA etiketleri (Phase 2 UX paketi). Yalnızca ESKİ/tutarsız genel etiketler, hedefe göre
// standarda çekilir: telefon bağlantısı → "Bizi Arayın", WhatsApp bağlantısı → "WhatsApp'tan Yazın".
// Anlamlı özel etiketler ("Evde Hizmet Talep Et", "Bize Ulaşın", "Yol Tarifi Al" vb.) ve başka hedefe giden
// CTA'lar olduğu gibi kalır.
export const CTA_CALL = "Bizi Arayın";
export const CTA_WHATSAPP = "WhatsApp'tan Yazın";

const LEGACY_CALL = new Set([
  "Hemen Ara",
  "Hemen Arayın",
  "Bizi Ara",
  "Şimdi Ara",
  "Randevu Al",
  "Ücretsiz Randevu Al",
  "Hemen Randevu Alın",
  "Hemen İletişime Geç",
  "Hemen Bilgi Alın",
]);
const LEGACY_WHATSAPP = new Set(["WhatsApp Yaz", "WhatsApp'tan Yaz", "Hemen WhatsApp"]);

export function standardCtaLabel(label: string, href: string): string {
  if (href.startsWith("tel:") && LEGACY_CALL.has(label)) return CTA_CALL;
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) && LEGACY_WHATSAPP.has(label)) return CTA_WHATSAPP;
  return label;
}
