// Final CTA content for the Coselgi brand page (/markalar/coselgi) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const coselgiFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Coselgi Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yerleşim tercihinize ve bütçenize uygun Coselgi modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorHover: "#0F74AC",
  accentColorGlow: "rgb(21 149 216 / 0.22)",
  accentColorShadow: "rgb(21 149 216 / 0.55)",
  accentColorShadowHover: "rgb(21 149 216 / 0.65)",
  accentColorFocus: "rgb(21 149 216 / 0.5)",
  accentColorTrustBg: "rgb(21 149 216 / 0.16)",
};
