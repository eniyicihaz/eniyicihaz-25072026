// Final CTA content for the /isitme-cihazlari/kulak-ici-ite page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kulakIciFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Kulak İçi Modelini Birlikte Belirleyelim",
  description:
    "İşitme kaybınızın derecesine, kulak kanalı yapınıza ve görünürlük beklentinize uygun kulak içi (ITE) modelini ücretsiz işitme testi ve kulak değerlendirmesi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Kişiye Özel Kalıp Değerlendirmesi", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorGlow: "rgb(124 58 237 / 0.22)",
  accentColorShadow: "rgb(124 58 237 / 0.55)",
  accentColorShadowHover: "rgb(124 58 237 / 0.65)",
  accentColorFocus: "rgb(124 58 237 / 0.5)",
  accentColorTrustBg: "rgb(124 58 237 / 0.16)",
};
