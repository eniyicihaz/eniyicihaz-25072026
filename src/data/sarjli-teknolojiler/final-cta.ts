// Final CTA content for the /teknolojiler/sarjli-teknolojiler page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const sarjliTeknolojilerFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Şarj Teknolojili Modeli Birlikte Belirleyelim",
  description:
    "Önceliklerinize, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#dc2626",
  accentColorHover: "#b91c1c",
  accentColorGlow: "rgb(220 38 38 / 0.22)",
  accentColorShadow: "rgb(220 38 38 / 0.55)",
  accentColorShadowHover: "rgb(220 38 38 / 0.65)",
  accentColorFocus: "rgb(220 38 38 / 0.5)",
  accentColorTrustBg: "rgb(220 38 38 / 0.16)",
};
