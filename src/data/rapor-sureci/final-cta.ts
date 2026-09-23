// Final CTA content for the /sgk/rapor-sureci page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const raporSureciFinalCta: BrandPageFinalCtaContent = {
  badge: "RAPOR SÜRECİNİZDE YANINIZDAYIZ",
  heading: "Rapor Sürecinizi Birlikte Planlayalım",
  description:
    "Hangi hastaneye başvurmanız gerektiğinden gerekli belgelere kadar, rapor sürecinizin her adımında size yol gösteriyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Yönlendirme", "Şeffaf Süreç", "SGK Anlaşmalı Merkez", "Uzman Rehberliği"],
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorGlow: "rgb(8 145 178 / 0.22)",
  accentColorShadow: "rgb(8 145 178 / 0.55)",
  accentColorShadowHover: "rgb(8 145 178 / 0.65)",
  accentColorFocus: "rgb(8 145 178 / 0.5)",
  accentColorTrustBg: "rgb(8 145 178 / 0.16)",
};
