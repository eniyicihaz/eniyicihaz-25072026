// Final CTA content for the /ihtiyaciniza-gore/orta-derece-isitme-kaybi
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ortaDereceIsitmeKaybiFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Ücretsiz İşitme Testiyle Durumunuzu Netleştirelim",
  description:
    "Belirtilerinizi paylaşın, ücretsiz işitme testi sonrasında size uygun cihazı ve çözümü uzman ekibimizle birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorGlow: "rgb(22 163 74 / 0.22)",
  accentColorShadow: "rgb(22 163 74 / 0.55)",
  accentColorShadowHover: "rgb(22 163 74 / 0.65)",
  accentColorFocus: "rgb(22 163 74 / 0.5)",
  accentColorTrustBg: "rgb(22 163 74 / 0.16)",
};
