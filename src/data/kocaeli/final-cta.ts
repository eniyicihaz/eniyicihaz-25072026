// Kocaeli landing page — Final CTA. Kocaeli geneli odaklı.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kocaeliFinalCta: BrandPageFinalCtaContent = {
  badge: "HEMEN BAŞLAYALIM",
  heading: "Kocaeli'de İşitme Cihazı İhtiyacınız İçin Bize Ulaşın",
  description: "İhtiyacınızı dinleyelim, size uygun işitme cihazını, marka seçeneklerini ve SGK sürecini birlikte değerlendirelim.",
  ctaPrimary: { label: "Randevu Al", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "SGK Anlaşmalı Hizmet",
    "18+ Marka Seçeneği",
    "Ücretsiz İlk Değerlendirme",
    "Cihaz Deneme İmkânı",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
