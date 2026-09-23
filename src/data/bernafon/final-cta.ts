// Final CTA content for the Bernafon brand page (/markalar/bernafon) —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const bernafonFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Bernafon Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve konuşma anlaşılırlığı beklentilerinize uygun Bernafon modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorHover: "#B01E15",
  accentColorGlow: "rgb(218 41 28 / 0.22)",
  accentColorShadow: "rgb(218 41 28 / 0.55)",
  accentColorShadowHover: "rgb(218 41 28 / 0.65)",
  accentColorFocus: "rgb(218 41 28 / 0.5)",
  accentColorTrustBg: "rgb(218 41 28 / 0.16)",
};
