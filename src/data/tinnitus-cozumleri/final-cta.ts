// Final CTA content for the /teknolojiler/tinnitus-cozumleri page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const tinnitusCozumleriFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Tinnitus Deneyiminize Uygun Yaklaşımı Birlikte Değerlendirelim",
  description:
    "İşitme kaybınızın derecesine, tinnitus deneyiminize ve önceliklerinize uygun destek seçeneğini ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#9333ea",
  accentColorHover: "#7e22ce",
  accentColorGlow: "rgb(147 51 234 / 0.22)",
  accentColorShadow: "rgb(147 51 234 / 0.55)",
  accentColorShadowHover: "rgb(147 51 234 / 0.65)",
  accentColorFocus: "rgb(147 51 234 / 0.5)",
  accentColorTrustBg: "rgb(147 51 234 / 0.16)",
};
