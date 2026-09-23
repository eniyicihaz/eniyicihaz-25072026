// Final CTA content for the Sonic brand page (/markalar/sonic) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const sonicFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Sonic Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bulunduğunuz ortamlara ve bütçenize uygun Sonic modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorHover: "#2C3841",
  accentColorGlow: "rgb(61 76 89 / 0.22)",
  accentColorShadow: "rgb(61 76 89 / 0.55)",
  accentColorShadowHover: "rgb(61 76 89 / 0.65)",
  accentColorFocus: "rgb(61 76 89 / 0.5)",
  accentColorTrustBg: "rgb(61 76 89 / 0.16)",
};
