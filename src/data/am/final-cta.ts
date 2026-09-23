// Final CTA content for the A&M brand page (/markalar/am) — the page's
// last section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and the same verified trust
// facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const amFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi A&M Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bütçenize ve yerleşim tercihinize uygun A&M modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorHover: "#C25710",
  accentColorGlow: "rgb(243 112 26 / 0.22)",
  accentColorShadow: "rgb(243 112 26 / 0.55)",
  accentColorShadowHover: "rgb(243 112 26 / 0.65)",
  accentColorFocus: "rgb(243 112 26 / 0.5)",
  accentColorTrustBg: "rgb(243 112 26 / 0.16)",
};
