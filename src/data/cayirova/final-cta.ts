// Çayırova landing page — Final CTA. Çayırova odaklı, Darıca vurgusu yok.
// Component yalnızca 2 CTA butonu destekliyor (ctaPrimary/ctaSecondary) —
// telefon zaten Hero'da ayrı bir CTA olarak var.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cayirovaFinalCta: BrandPageFinalCtaContent = {
  badge: "HEMEN BAŞLAYALIM",
  heading: "Çayırova'da İşitme Cihazı Arıyorsanız Bugün Başlayın",
  description: "İhtiyacınızı dinleyelim, size uygun işitme cihazı seçeneklerini ve SGK sürecini birlikte değerlendirelim.",
  ctaPrimary: { label: "Randevu Al", href: "/degerlendirme/ucretsiz-isitme-testi" },
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
