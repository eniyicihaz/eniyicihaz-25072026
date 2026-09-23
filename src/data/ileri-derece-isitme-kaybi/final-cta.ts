// Final CTA content for the /ihtiyaciniza-gore/ileri-derece-isitme-kaybi
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ileriDereceIsitmeKaybiFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Ücretsiz İşitme Testiyle Durumunuzu Netleştirelim",
  description:
    "Belirtilerinizi paylaşın, ücretsiz işitme testi sonrasında size uygun cihazı ve çözümü uzman ekibimizle birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#57534e",
  accentColorHover: "#44403c",
  accentColorGlow: "rgb(87 83 78 / 0.22)",
  accentColorShadow: "rgb(87 83 78 / 0.55)",
  accentColorShadowHover: "rgb(87 83 78 / 0.65)",
  accentColorFocus: "rgb(87 83 78 / 0.5)",
  accentColorTrustBg: "rgb(87 83 78 / 0.16)",
};
