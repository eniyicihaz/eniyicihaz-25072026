// Final CTA content for the /isitme-cihazlari/suya-dayanikli page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const suyaDayankliFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Suya Dayanıklı Modeli Birlikte Belirleyelim",
  description:
    "Yaşam tarzınıza, yaşadığınız iklime ve cihaz tipi tercihinize uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
