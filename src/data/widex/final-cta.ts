// Final CTA content for the Widex brand page (/markalar/widex) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const widexFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Widex Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve ses beklentilerinize uygun Widex modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorHover: "#0d9488",
  accentColorGlow: "rgb(20 184 166 / 0.22)",
  accentColorShadow: "rgb(20 184 166 / 0.55)",
  accentColorShadowHover: "rgb(20 184 166 / 0.65)",
  accentColorFocus: "rgb(20 184 166 / 0.5)",
  accentColorTrustBg: "rgb(20 184 166 / 0.16)",
};
