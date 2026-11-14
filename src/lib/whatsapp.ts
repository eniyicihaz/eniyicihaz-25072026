// Sayfaya özel, önceden doldurulmuş WhatsApp mesajı (numara DEĞİŞMEZ: contactConfig'teki numara olduğu gibi kalır).
// Amaç: ziyaretçi hangi sayfadan geldiyse mesaj kutusu o konuyla açılsın; işletme de konuyu tek satırda görsün.
//
// Kurallar
//  • Metin yalnızca "bilgi almak istiyorum" düzeyindedir; fiyat, süre, ücretsizlik vb. iddia içermez.
//  • Konum sayfalarında "…'dan yazıyorum" denmez (kişinin nerede olduğunu varsaymayız): "… sayfanızı inceledim" denir.
//  • Zaten kendi `?text=` mesajı olan bağlantılara dokunulmaz (src/middleware.ts yalnızca yalın bağlantıyı yeniden yazar).
import { contactConfig } from "../config/contact";
import { normalizePath, routeFor } from "../config/site-map";

export const WA_BASE = contactConfig.whatsapp.href;

const topic = (label: string) => `Merhaba, ${label} hakkında bilgi almak istiyorum.`;

/** Sayfa yoluna göre mesaj metni. */
export function whatsappTextFor(pathname: string): string {
  const path = normalizePath(pathname);
  const label = routeFor(path)?.label;

  if (path === "/") return "Merhaba, web sitenizden yazıyorum. İşitme cihazı hakkında bilgi almak istiyorum.";
  if (path.startsWith("/isitme-cihazi-fiyatlari/")) return "Merhaba, işitme cihazı fiyatları hakkında bilgi almak istiyorum.";
  if (path.startsWith("/sgk")) return "Merhaba, SGK işitme cihazı desteği hakkında bilgi almak istiyorum.";
  if (path === "/degerlendirme/ucretsiz-isitme-testi/") return "Merhaba, ücretsiz işitme testi hakkında bilgi almak istiyorum.";
  if (path.startsWith("/uygulama-ayar/evde-isitme-cihazi-hizmeti/")) return "Merhaba, evde işitme cihazı hizmeti hakkında bilgi almak istiyorum.";
  if (path.startsWith("/darica-isitme-cihazlari/")) return "Merhaba, Darıca işitme cihazları sayfanızı inceledim; merkezinize gelmeden önce bilgi almak istiyorum.";
  if (path.startsWith("/gebze-isitme-cihazlari/")) return "Merhaba, Gebze işitme cihazları sayfanızı inceledim; bilgi almak istiyorum.";
  if (path.startsWith("/cayirova-isitme-cihazlari/")) return "Merhaba, Çayırova işitme cihazları sayfanızı inceledim; bilgi almak istiyorum.";
  if (path.startsWith("/kocaeli-isitme-cihazlari/")) return "Merhaba, Kocaeli işitme cihazları sayfanızı inceledim; bilgi almak istiyorum.";
  if (path === "/hizmetlerimiz/") return "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";
  if (path.startsWith("/iletisim/") || path.startsWith("/hakkimizda/") || path.startsWith("/kvkk/") || path.startsWith("/site-haritasi/")) return "Merhaba, bilgi almak istiyorum.";
  if (/^\/markalar\/[^/]+\/$/.test(path) && label) return `Merhaba, ${label} işitme cihazları hakkında bilgi almak istiyorum.`;
  // Marka altındaki model ailesi sayfaları (ör. /markalar/phonak/audeo/ → "Phonak Audéo").
  const family = /^(\/markalar\/[^/]+\/)[^/]+\/$/.exec(path);
  if (family && label) {
    const brand = routeFor(family[1])?.label;
    if (brand) return topic(`${brand} ${label}`);
  }
  if (path.startsWith("/markalar/") || path.startsWith("/isitme-cihazi-markalari/")) return topic("işitme cihazı markaları ve modelleri");
  if (path.startsWith("/isitme-cihazlari/") && label) return topic(label);
  if ((path.startsWith("/servis-bakim/") || path.startsWith("/uygulama-ayar/") || path.startsWith("/degerlendirme/")) && label) return topic(label);
  if (label) return `Merhaba, "${label}" sayfanızı inceledim. Bilgi almak istiyorum.`;
  return "Merhaba, bilgi almak istiyorum.";
}

/** wa.me bağlantısı + sayfaya özel mesaj. */
export function whatsappUrlFor(pathname: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(whatsappTextFor(pathname))}`;
}
