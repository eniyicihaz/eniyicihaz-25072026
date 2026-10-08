// Cihaz Deneme — Final CTA (Faz 2 P2). "Risksiz karar" ve "uzman destek"
// ifadeleri çıkarıldı; trust maddeleri yalnızca kanonik deneme modeli.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazDenemeFinalCta: BrandPageFinalCtaContent = {
  badge: "RANDEVU",
  heading: "Cihaz Denemesi İçin Bize Ulaşın",
  description: "Demo randevusu için bizi arayın veya WhatsApp'tan yazın.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: ["Merkezde Ücretsiz Demo", "Satın Alarak 7 Güne Kadar Deneme", "Kesintisiz Ücret İadesi"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
