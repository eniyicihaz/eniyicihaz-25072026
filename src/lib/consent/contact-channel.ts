// İletişim kanalı sınıflandırması — bir telefon/WhatsApp tıklamasının HANGİ hatta gittiğini,
// numarayı olaya koymadan sabit bir kanal adıyla belirtir (GA4 özel boyutu `contact_channel`).
//
// Neden numara değil kanal adı: src/lib/consent/analytics.ts telefon/URL gibi kişisel veri
// taşıyabilecek değerleri bilinçli olarak atar (≥5 rakam). Olaya yalnızca aşağıdaki sabit adlardan
// biri gider; ham numara, `tel:` veya `wa.me` bağlantısı hiçbir koşulda gönderilmez.
//
// Numaralar sitede zaten herkese açıktır (bkz. src/config/contact.ts, Footer, İletişim sayfası);
// buradaki eşleme yalnızca "bu numara hangi kanal adına denk gelir" bilgisini tutar. Yeni bir hat
// eklenirse buraya bir satır eklenir; tanınmayan numaralar `other_phone` olarak ölçülür.
//
// Bu dosya bilerek hiçbir şey import etmez: saf fonksiyonlar, tarayıcı veya consent durumundan
// bağımsız olarak test edilebilir.

export type ContactChannel = "mobile_main" | "whatsapp_main" | "landline_office" | "ads_line" | "other_phone";

/** Anahtar: E.164 (yalnızca "+" ve rakam). */
const PHONE_CHANNELS: Record<string, ContactChannel> = {
  "+905337733199": "mobile_main", // ana numara (telefon + WhatsApp)
  "+902626563277": "landline_office", // ofis sabit
  "+905433866360": "ads_line", // reklam hattı (ofis mobil); sitede kullanılırsa ayrı ölçülür
};

/** Anahtar: wa.me / api.whatsapp.com biçiminde ülke kodlu rakam dizisi ("+" yok). */
const WHATSAPP_CHANNELS: Record<string, ContactChannel> = {
  "905337733199": "whatsapp_main",
};

/** "tel:" bağlantısındaki numarayı E.164'e yaklaştırır; yalnızca eşleme anahtarı üretmek içindir. */
function toE164(raw: string): string {
  let value = raw;
  try {
    value = decodeURIComponent(raw);
  } catch {
    // bozuk % dizisi: ham değerle devam
  }
  const compact = value.replace(/[^\d+]/g, "");
  if (compact.startsWith("+")) return compact;
  if (compact.startsWith("0090")) return `+${compact.slice(2)}`;
  if (compact.startsWith("90") && compact.length === 12) return `+${compact}`;
  if (compact.startsWith("0")) return `+90${compact.slice(1)}`;
  if (compact.length === 10) return `+90${compact}`;
  return `+${compact}`;
}

function phoneChannel(href: string): ContactChannel {
  const number = href.replace(/^tel:/i, "").split(/[;,?#]/)[0];
  return PHONE_CHANNELS[toE164(number)] ?? "other_phone";
}

function whatsappChannel(href: string): ContactChannel {
  const match = href.match(/^https?:\/\/wa\.me\/\+?(\d+)/i) ?? href.match(/^https?:\/\/api\.whatsapp\.com\/send\/?\?(?:[^#]*&)?phone=\+?(\d+)/i);
  return (match && WHATSAPP_CHANNELS[match[1]]) || "other_phone";
}

/** `phone_click` / `whatsapp_click` için sabit kanal adı döndürür. Diğer olaylarda `undefined`. */
export function contactChannelFor(event: string, href: string): ContactChannel | undefined {
  if (event === "phone_click") return phoneChannel(href);
  if (event === "whatsapp_click") return whatsappChannel(href);
  return undefined;
}
