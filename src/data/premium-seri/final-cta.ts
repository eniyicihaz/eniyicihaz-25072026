// Final CTA content for the /segmentler/premium-seri page — the page's
// last section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const premiumSeriFinalCta: BrandPageFinalCtaContent = {
  badge: "PREMIUM DENEYİM",
  heading: "Premium Serinin Farkını Birlikte Keşfedin",
  description:
    "Ücretsiz işitme testi ve uzman danışmanlığımızla, premium serinin size sağlayacağı avantajları birlikte değerlendirelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "Uzman Danışmanlığı", "Kapsamlı Garanti"],
  accentColor: "#eab308",
  accentColorHover: "#ca8a04",
  accentColorGlow: "rgb(234 179 8 / 0.22)",
  accentColorShadow: "rgb(234 179 8 / 0.55)",
  accentColorShadowHover: "rgb(234 179 8 / 0.65)",
  accentColorFocus: "rgb(234 179 8 / 0.5)",
  accentColorTrustBg: "rgb(234 179 8 / 0.16)",
};
