// Final CTA content for the Rexton brand page (/markalar/rexton) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const rextonFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Rexton Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bağlantı beklentinize ve bütçenize uygun Rexton modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorHover: "#8A6A0E",
  accentColorGlow: "rgb(199 151 18 / 0.22)",
  accentColorShadow: "rgb(199 151 18 / 0.55)",
  accentColorShadowHover: "rgb(199 151 18 / 0.65)",
  accentColorFocus: "rgb(199 151 18 / 0.5)",
  accentColorTrustBg: "rgb(199 151 18 / 0.16)",
};
