// Final CTA content for the /ihtiyaciniza-gore/yaslilar-icin-cihazlar
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const yaslilarIcinCihazlarFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size ve Ailenize Uygun Cihazı Birlikte Belirleyelim",
  description:
    "Kullanım kolaylığı, aile desteği ve günlük ihtiyaçlarınızı göz önünde bulundurarak size uygun cihazı ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#ca8a04",
  accentColorHover: "#a16207",
  accentColorGlow: "rgb(202 138 4 / 0.22)",
  accentColorShadow: "rgb(202 138 4 / 0.55)",
  accentColorShadowHover: "rgb(202 138 4 / 0.65)",
  accentColorFocus: "rgb(202 138 4 / 0.5)",
  accentColorTrustBg: "rgb(202 138 4 / 0.16)",
};
