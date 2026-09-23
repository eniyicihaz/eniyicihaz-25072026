// Final CTA content for the /isitme-cihazlari/cocuklara-ozel page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cocuklaraOzelFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Çocuğunuz İçin En Uygun Modeli Birlikte Belirleyelim",
  description:
    "Çocuğunuzun yaşına, işitme kaybının derecesine ve okul/aile yaşam tarzına uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorGlow: "rgb(225 29 72 / 0.22)",
  accentColorShadow: "rgb(225 29 72 / 0.55)",
  accentColorShadowHover: "rgb(225 29 72 / 0.65)",
  accentColorFocus: "rgb(225 29 72 / 0.5)",
  accentColorTrustBg: "rgb(225 29 72 / 0.16)",
};
