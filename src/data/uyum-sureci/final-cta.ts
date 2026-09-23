// Final CTA content for the /rehberler/uyum-sureci page — the page's
// last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const uyumSureciFinalCta: BrandPageFinalCtaContent = {
  badge: "BU YOLCULUKTA YALNIZ DEĞİLSİNİZ",
  heading: "Uyum Sürecinizde Yanınızdayız",
  description:
    "Sabırlı ve destekli bir yaklaşımla, cihazınıza uyum sağlama sürecinizin her aşamasında sizinle birlikteyiz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Takip Desteği", "Kademeli Maruziyet Rehberliği", "Düzenli Kontrol", "Uzman Odyometrist"],
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorGlow: "rgb(124 58 237 / 0.22)",
  accentColorShadow: "rgb(124 58 237 / 0.55)",
  accentColorShadowHover: "rgb(124 58 237 / 0.65)",
  accentColorFocus: "rgb(124 58 237 / 0.5)",
  accentColorTrustBg: "rgb(124 58 237 / 0.16)",
};
