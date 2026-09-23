// Final CTA content for the /degerlendirme/timpanometri page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const timpanometriFinalCta: BrandPageFinalCtaContent = {
  badge: "KAPSAMLI DEĞERLENDİRME",
  heading: "Timpanometri ile Orta Kulak Sağlığınızı Değerlendirin",
  description:
    "Timpanometri ve odyometriyi birlikte uygulayarak, işitme durumunuzun daha kapsamlı bir resmini oluşturuyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Timpanometri", "Hızlı ve Ağrısız", "Odyometri ile Birlikte", "Uzman Değerlendirmesi"],
  accentColor: "#9333ea",
  accentColorHover: "#7e22ce",
  accentColorGlow: "rgb(147 51 234 / 0.22)",
  accentColorShadow: "rgb(147 51 234 / 0.55)",
  accentColorShadowHover: "rgb(147 51 234 / 0.65)",
  accentColorFocus: "rgb(147 51 234 / 0.5)",
  accentColorTrustBg: "rgb(147 51 234 / 0.16)",
};
