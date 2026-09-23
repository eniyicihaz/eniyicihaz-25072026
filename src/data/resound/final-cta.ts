// Final CTA content for the ReSound brand page (/markalar/resound) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const resoundFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi ReSound Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve bağlantı beklentilerinize uygun ReSound modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorHover: "#8B1330",
  accentColorGlow: "rgb(170 24 53 / 0.22)",
  accentColorShadow: "rgb(170 24 53 / 0.55)",
  accentColorShadowHover: "rgb(170 24 53 / 0.65)",
  accentColorFocus: "rgb(170 24 53 / 0.5)",
  accentColorTrustBg: "rgb(170 24 53 / 0.16)",
};
