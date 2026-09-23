// Final CTA content for the /segmentler/ekonomik-seri page — the page's
// last section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ekonomikSeriFinalCta: BrandPageFinalCtaContent = {
  badge: "UYGUN FİYATLI ÇÖZÜM",
  heading: "Ekonomik Serinin İhtiyacınızı Karşılayıp Karşılamadığını Birlikte Değerlendirelim",
  description:
    "Ücretsiz işitme testi ve uzman danışmanlığımızla, ekonomik serinin ihtiyaçlarınıza uygun olup olmadığını birlikte değerlendirelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Orijinal Ürün Güvencesi", "Demo Cihaz Deneme", "Uzman Danışmanlığı"],
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorGlow: "rgb(22 163 74 / 0.22)",
  accentColorShadow: "rgb(22 163 74 / 0.55)",
  accentColorShadowHover: "rgb(22 163 74 / 0.65)",
  accentColorFocus: "rgb(22 163 74 / 0.5)",
  accentColorTrustBg: "rgb(22 163 74 / 0.16)",
};
