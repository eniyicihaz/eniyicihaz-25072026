// Final CTA content for the /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const tekTarafliIsitmeKaybiFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Sistemi Birlikte Belirleyelim",
  description:
    "Kötü duyan kulağınızın durumuna, günlük ihtiyaçlarınıza ve önceliklerinize uygun sistemi ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#52525b",
  accentColorHover: "#3f3f46",
  accentColorGlow: "rgb(82 82 91 / 0.22)",
  accentColorShadow: "rgb(82 82 91 / 0.55)",
  accentColorShadowHover: "rgb(82 82 91 / 0.65)",
  accentColorFocus: "rgb(82 82 91 / 0.5)",
  accentColorTrustBg: "rgb(82 82 91 / 0.16)",
};
