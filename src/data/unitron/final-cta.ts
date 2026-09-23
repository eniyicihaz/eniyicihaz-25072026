// Final CTA content for the Unitron brand page (/markalar/unitron) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const unitronFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Unitron Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bağlantı beklentinize ve bütçenize uygun Unitron modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorHover: "#133A6B",
  accentColorGlow: "rgb(28 76 135 / 0.22)",
  accentColorShadow: "rgb(28 76 135 / 0.55)",
  accentColorShadowHover: "rgb(28 76 135 / 0.65)",
  accentColorFocus: "rgb(28 76 135 / 0.5)",
  accentColorTrustBg: "rgb(28 76 135 / 0.16)",
};
