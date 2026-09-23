// Final CTA content for the /teknolojiler/yapay-zeka-destekli page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const yapayZekaDestekliFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Yapay Zeka Destekli Modeli Birlikte Belirleyelim",
  description:
    "Günlük ortam çeşitliliğinize, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorGlow: "rgb(79 70 229 / 0.22)",
  accentColorShadow: "rgb(79 70 229 / 0.55)",
  accentColorShadowHover: "rgb(79 70 229 / 0.65)",
  accentColorFocus: "rgb(79 70 229 / 0.5)",
  accentColorTrustBg: "rgb(79 70 229 / 0.16)",
};
