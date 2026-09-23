// Final CTA content for the /degerlendirme/tinnitus-degerlendirme page —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const tinnitusDegerlendirmeFinalCta: BrandPageFinalCtaContent = {
  badge: "ŞİKAYETİNİZİ BİRLİKTE DEĞERLENDİRELİM",
  heading: "Tinnitus Şikayetiniz İçin Yanınızdayız",
  description:
    "Kapsamlı öykü, odyometri ve tinnitus eşleştirme yöntemleriyle, çınlama şikayetinizin olası nedenlerini birlikte değerlendiriyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Değerlendirme", "Kapsamlı Öykü ve Test", "THI Anket Değerlendirmesi", "Uzman Odyometrist"],
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorGlow: "rgb(5 150 105 / 0.22)",
  accentColorShadow: "rgb(5 150 105 / 0.55)",
  accentColorShadowHover: "rgb(5 150 105 / 0.65)",
  accentColorFocus: "rgb(5 150 105 / 0.5)",
  accentColorTrustBg: "rgb(5 150 105 / 0.16)",
};
