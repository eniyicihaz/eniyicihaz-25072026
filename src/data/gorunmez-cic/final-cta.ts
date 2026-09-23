// Final CTA content for the /isitme-cihazlari/gorunmez-cic page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const gorunmezCicFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Görünmez Modeli Birlikte Belirleyelim",
  description:
    "Kulak kanalı yapınıza, işitme kaybınızın derecesine ve görünürlük önceliğinize uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#475569",
  accentColorHover: "#334155",
  accentColorGlow: "rgb(71 85 105 / 0.22)",
  accentColorShadow: "rgb(71 85 105 / 0.55)",
  accentColorShadowHover: "rgb(71 85 105 / 0.65)",
  accentColorFocus: "rgb(71 85 105 / 0.5)",
  accentColorTrustBg: "rgb(71 85 105 / 0.16)",
};
