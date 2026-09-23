// Final CTA content for the /blog/etkinlikler page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site. No specific event dates.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const etkinliklerFinalCta: BrandPageFinalCtaContent = {
  badge: "GÜNCEL ETKİNLİK TAKVİMİMİZİ ÖĞRENİN",
  heading: "Bölgenizdeki Etkinlikleri Birlikte Keşfedelim",
  description:
    "Planlanan etkinliklerimiz veya kurumsal işbirliği talepleriniz hakkında en doğru bilgiyi almak için bizi arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Bilgilendirme", "Kurumsal İşbirliği", "Şeffaf Planlama", "Hızlı Geri Dönüş"],
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorGlow: "rgb(5 150 105 / 0.22)",
  accentColorShadow: "rgb(5 150 105 / 0.55)",
  accentColorShadowHover: "rgb(5 150 105 / 0.65)",
  accentColorFocus: "rgb(5 150 105 / 0.5)",
  accentColorTrustBg: "rgb(5 150 105 / 0.16)",
};
