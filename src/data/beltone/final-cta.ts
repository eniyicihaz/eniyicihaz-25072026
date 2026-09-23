// Final CTA content for the Beltone brand page (/markalar/beltone) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const beltoneFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Beltone Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve bütçenize uygun Beltone modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorHover: "#12274A",
  accentColorGlow: "rgb(27 56 100 / 0.22)",
  accentColorShadow: "rgb(27 56 100 / 0.55)",
  accentColorShadowHover: "rgb(27 56 100 / 0.65)",
  accentColorFocus: "rgb(27 56 100 / 0.5)",
  accentColorTrustBg: "rgb(27 56 100 / 0.16)",
};
