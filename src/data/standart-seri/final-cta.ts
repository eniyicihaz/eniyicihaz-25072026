// Final CTA content for the /segmentler/standart-seri page — the page's
// last section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const standartSeriFinalCta: BrandPageFinalCtaContent = {
  badge: "DENGELİ SEÇİM",
  heading: "Standart Serinin Size Uygunluğunu Birlikte Değerlendirelim",
  description:
    "Ücretsiz işitme testi ve uzman danışmanlığımızla, standart serinin ihtiyaçlarınızı ne ölçüde karşıladığını birlikte değerlendirelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "Uzman Danışmanlığı", "Standart Garanti"],
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorGlow: "rgb(2 132 199 / 0.22)",
  accentColorShadow: "rgb(2 132 199 / 0.55)",
  accentColorShadowHover: "rgb(2 132 199 / 0.65)",
  accentColorFocus: "rgb(2 132 199 / 0.5)",
  accentColorTrustBg: "rgb(2 132 199 / 0.16)",
};
