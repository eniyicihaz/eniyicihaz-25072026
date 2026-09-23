// Final CTA content for the /blog/uzman-gorusleri page — the page's
// last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const uzmanGorusleriFinalCta: BrandPageFinalCtaContent = {
  badge: "SORULARINIZI YANITLAMAKTAN MUTLULUK DUYARIZ",
  heading: "Merak Ettiklerinizi Bizimle Netleştirelim",
  description:
    "Duyduğunuz bir bilginin doğruluğundan emin değilseniz veya kendi durumunuzu değerlendirmek istiyorsanız, uzman ekibimiz yanınızda.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Danışmanlık", "Uzman Görüşü", "Şeffaf Bilgilendirme", "Kişiye Özel Değerlendirme"],
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorGlow: "rgb(124 58 237 / 0.22)",
  accentColorShadow: "rgb(124 58 237 / 0.55)",
  accentColorShadowHover: "rgb(124 58 237 / 0.65)",
  accentColorFocus: "rgb(124 58 237 / 0.5)",
  accentColorTrustBg: "rgb(124 58 237 / 0.16)",
};
