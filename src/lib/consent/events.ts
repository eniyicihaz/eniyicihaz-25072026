// İş aksiyonu (dönüşüm/etkileşim) ölçümü — mevcut `trackEvent` geçidini kullanır.
//
// Yeni/paralel bir analytics sistemi DEĞİLDİR: tek bir belge düzeyi click
// dinleyicisi, tıklanan bağlantının `href`'inden sabit bir event adı seçer
// ve `trackEvent` ile dataLayer'a yazar. İzin yoksa `trackEvent` hiçbir şey
// yapmaz (Analitik izni + yüklü GTM gerekir). Parametreler yalnızca
// analytics.ts'teki izin listesidir.
//
// Oluşturulan event'ler (yalnızca sitede GERÇEKTEN var olan aksiyonlar):
//   phone_click        href="tel:…"
//   whatsapp_click     href="https://wa.me/…"
//   directions_click   href=Google Haritalar bağlantısı ("Yol tarifi al")
//   hearing_test_cta   href="/degerlendirme/ucretsiz-isitme-testi/"
// Oluşturulmayanlar: appointment_submit ve contact_form_submit — sitede
// sunucuya veri gönderen randevu/iletişim formu YOKTUR (randevu ve iletişim
// düğmeleri tel:/wa.me bağlantılarıdır ve phone_click/whatsapp_click olarak
// ölçülür).
//
// Gizlilik kuralları:
//   • Sağlık/test verisi hiçbir koşulda okunmaz veya gönderilmez.
//   • Online işitme testi sayfasında ve test bileşeninin içinde DOM metni
//     HİÇ OKUNMAZ (cta_label gönderilmez); yalnızca sabit değerler gider.
//   • Telefon numarası, e-posta, URL vb. etikete giremez (ayrıca analytics.ts
//     içindeki PII filtresi son savunmadır).
import { trackEvent } from "./analytics";

type EventName = "phone_click" | "whatsapp_click" | "directions_click" | "hearing_test_cta";
type LinkType = "phone" | "whatsapp" | "map" | "internal";

const ONLINE_TEST_PATH = /^\/degerlendirme\/online-isitme-testi(\/|$)/;
const FREE_TEST_PATH = /\/degerlendirme\/ucretsiz-isitme-testi\/?$/;

function classify(a: HTMLAnchorElement): { event: EventName; linkType: LinkType } | null {
  const href = a.getAttribute("href") || "";
  if (/^tel:/i.test(href)) return { event: "phone_click", linkType: "phone" };
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return { event: "whatsapp_click", linkType: "whatsapp" };
  if (/^https?:\/\/(maps\.app\.goo\.gl|(www\.)?google\.com\/maps)/i.test(href)) return { event: "directions_click", linkType: "map" };
  if (FREE_TEST_PATH.test(href.split(/[?#]/)[0]) && !a.closest("nav[aria-label*='sayfa yolu' i], .ds-breadcrumb")) {
    return { event: "hearing_test_cta", linkType: "internal" };
  }
  return null;
}

// Bağlantının sayfadaki yeri: en yakın anlamlı atadan. Bir bileşen
// `data-track-location="…"` ile açıkça belirtebilir.
const LOCATION_RULES: Array<[RegExp, string]> = [
  [/\bhd-mobile/, "mobile_menu"],
  [/\bhd-mega/, "header_menu"],
  [/\bhd-(actions|bar)/, "header"],
  [/\bfooter|\bcontact-block|\blink-column|\blegal-bar/, "footer"],
  [/\bannouncement/, "announcement_bar"],
  [/\bconsent-embed/, "map_embed"],
  [/\bclosing/, "closing"],
  [/hero/, "hero"],
  [/final-cta|\bguide-cta|__cta\b|cta-actions|\bdecision|expert-support|__help/, "cta_section"],
  [/contact-location|contact-hero/, "contact"],
  [/faq/, "faq"],
];

function locationOf(a: HTMLElement): string {
  if (a.closest(".hearing-screen")) return "online_test";
  for (let el: HTMLElement | null = a; el && el !== document.body; el = el.parentElement) {
    const override = el.getAttribute("data-track-location");
    if (override) return override.slice(0, 40);
    if (el.tagName === "FOOTER") return "footer";
    if (el.tagName === "HEADER") return "header";
    const cls = typeof el.className === "string" ? el.className : "";
    if (!cls) continue;
    for (const [re, name] of LOCATION_RULES) if (re.test(cls)) return name;
  }
  return "content";
}

function pageType(path: string): string {
  if (path === "/") return "home";
  if (/^\/markalar\/[^/]+/.test(path)) return "brand";
  if (/^\/(darica|gebze|cayirova|kocaeli)-isitme-cihazlari/.test(path)) return "local";
  if (path.startsWith("/degerlendirme/")) return "assessment";
  if (path.startsWith("/kvkk/")) return "legal";
  if (path.startsWith("/iletisim")) return "contact";
  if (/^\/sgk/.test(path)) return "sgk";
  if (path.startsWith("/isitme-cihazi-fiyatlari")) return "pricing";
  if (path.startsWith("/isitme-cihazi-markalari") || path === "/markalar/") return "brands_hub";
  if (path.startsWith("/isitme-cihazlari")) return "devices";
  if (/^\/(blog|rehberler|bilgi-merkezi)/.test(path)) return "guide";
  if (/^\/(uygulama-ayar|neden-orijinal|servis-bakim|hizmetlerimiz)/.test(path)) return "service";
  return "other";
}

function deviceType(): string {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches ? "mobile" : "desktop";
}

/** Görünen etiketin ilk satırı; telefon/e-posta/URL ayıklanır. Boşsa "" döner. */
function safeLabel(a: HTMLElement): string {
  const explicit = a.getAttribute("data-track-label");
  const raw = explicit ?? (a as HTMLElement).innerText ?? a.textContent ?? "";
  for (const line of raw.split(/\n+/)) {
    const cleaned = line
      .replace(/https?:\/\/\S+|\S+@\S+/g, " ")
      .replace(/\+?\d[\d\s().-]{4,}\d/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (/\p{L}{2,}/u.test(cleaned) && !/\d{4,}/.test(cleaned)) return cleaned.slice(0, 60);
  }
  return "";
}

function onClick(e: MouseEvent): void {
  const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
  if (!a) return;
  const hit = classify(a);
  if (!hit) return;
  const path = location.pathname;
  const noText = ONLINE_TEST_PATH.test(path) || !!a.closest(".hearing-screen");
  const params: Record<string, string> = {
    link_location: locationOf(a),
    link_type: hit.linkType,
    device: deviceType(),
    page_type: pageType(path),
  };
  if (!noText) {
    const label = safeLabel(a);
    if (label) params.cta_label = label;
  }
  trackEvent(hit.event, params);
}

let started = false;
export function initConversionTracking(): void {
  if (started) return;
  started = true;
  document.addEventListener("click", onClick, true);
}
