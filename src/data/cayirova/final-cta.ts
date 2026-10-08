// Çayırova landing page — Final CTA. Çayırova odaklı, Darıca vurgusu yok.
// Component yalnızca 2 CTA butonu destekliyor (ctaPrimary/ctaSecondary) —
// telefon zaten Hero'da ayrı bir CTA olarak var.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cayirovaFinalCta: BrandPageFinalCtaContent = {
  badge: "HEMEN BAŞLAYALIM",
  heading: "Çayırova'dan Randevunuzu Planlayalım",
  description: "Darıca'daki merkezimize gelmek ya da evde hizmet almak için bizi arayın veya WhatsApp'tan yazın.",
  ctaPrimary: { label: "Arayıp Randevu Alın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Merkezimiz Darıca'da",
    "Çayırova'dan Hat 550",
    "Evde Hizmet Çayırova'yı Kapsar",
    "Ücretsiz İşitme Testi",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
