// Final CTA content for the /blog/sik-sorulan-sorular page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const sikSorulanSorularFinalCta: BrandPageFinalCtaContent = {
  badge: "HALA SORULARINIZ MI VAR?",
  heading: "Aradığınız Yanıtı Birlikte Bulalım",
  description:
    "Bu sayfada bulamadığınız her soruyu telefon veya WhatsApp üzerinden bize sorabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Danışmanlık", "Hızlı Geri Dönüş", "Şeffaf Bilgilendirme", "Uzman Ekip Desteği"],
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorGlow: "rgb(2 132 199 / 0.22)",
  accentColorShadow: "rgb(2 132 199 / 0.55)",
  accentColorShadowHover: "rgb(2 132 199 / 0.65)",
  accentColorFocus: "rgb(2 132 199 / 0.5)",
  accentColorTrustBg: "rgb(2 132 199 / 0.16)",
};
