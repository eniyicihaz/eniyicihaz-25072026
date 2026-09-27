// Gebze landing page — Final CTA. Gebze odaklı, Darıca vurgusu yok (plan
// onayı §10). Component yalnızca 2 CTA butonu destekliyor (ctaPrimary/
// ctaSecondary) — "Randevu Al" (gerçek ücretsiz değerlendirme sayfasına) ve
// "WhatsApp'tan Yaz" seçildi; telefon zaten Hero'da ayrı bir CTA olarak var.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const gebzeFinalCta: BrandPageFinalCtaContent = {
  badge: "HEMEN BAŞLAYALIM",
  heading: "Gebze'de İşitme Cihazı Arıyorsanız İlk Adımı Atın",
  description: "İhtiyacınızı konuşalım, size uygun işitme cihazı seçeneklerini birlikte değerlendirelim.",
  ctaPrimary: { label: "Randevu Al", href: "/degerlendirme/ucretsiz-isitme-testi" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "SGK Anlaşmalı Hizmet",
    "Ücretsiz İlk Değerlendirme",
    "18+ Marka Seçeneği",
    "Cihazı Deneme İmkânı",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
