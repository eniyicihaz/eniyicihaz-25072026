// Final CTA content for the /teknolojiler/gurultu-engelleme page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const gurultuEngellemeFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Gürültü Engellemeli Modeli Birlikte Belirleyelim",
  description:
    "Günlük gürültü maruziyetinize, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorGlow: "rgb(192 38 211 / 0.22)",
  accentColorShadow: "rgb(192 38 211 / 0.55)",
  accentColorShadowHover: "rgb(192 38 211 / 0.65)",
  accentColorFocus: "rgb(192 38 211 / 0.5)",
  accentColorTrustBg: "rgb(192 38 211 / 0.16)",
};
