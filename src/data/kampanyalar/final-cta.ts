// Final CTA content for the /blog/kampanyalar page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site. No specific offer figures.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kampanyalarFinalCta: BrandPageFinalCtaContent = {
  badge: "GÜNCEL KAMPANYALARIMIZI ÖĞRENİN",
  heading: "Size Uygun Bir Kampanya Var mı, Birlikte Bakalım",
  description:
    "Aktif kampanyalarımız hakkında en doğru ve güncel bilgiyi almak için bizi arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Danışmanlık", "Şeffaf Kampanya Şartları", "Size Özel Yönlendirme", "Hızlı Geri Dönüş"],
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorGlow: "rgb(192 38 211 / 0.22)",
  accentColorShadow: "rgb(192 38 211 / 0.55)",
  accentColorShadowHover: "rgb(192 38 211 / 0.65)",
  accentColorFocus: "rgb(192 38 211 / 0.5)",
  accentColorTrustBg: "rgb(192 38 211 / 0.16)",
};
