// İletişim aksiyonu sınıflandırması — telefon / WhatsApp / yol tarifi butonlarının
// ortak görünümü için (src/ds/styles/base/contact-actions.css).
//
// Görünüm yalnızca bağlantının GERÇEK hedefinden türetilir; böylece etiketi "Bizi Arayın"
// olan ama sayfaya giden bir buton yanlışlıkla mavi telefon butonuna dönüşmez.
// Ölçüm (src/lib/consent/events.ts) da aynı üç deseni href'ten okur; bu dosya ölçümü
// değiştirmez, yalnızca stil kancası (`data-contact-action`) üretir.
export type ContactAction = "phone" | "whatsapp" | "directions";

export function contactAction(href: string | undefined | null): ContactAction | undefined {
  if (!href) return undefined;
  if (/^tel:/i.test(href)) return "phone";
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return "whatsapp";
  if (/^https?:\/\/(maps\.app\.goo\.gl|(www\.)?google\.com\/maps)/i.test(href)) return "directions";
  return undefined;
}
