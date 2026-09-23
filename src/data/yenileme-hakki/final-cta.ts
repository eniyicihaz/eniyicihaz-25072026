// Final CTA content for the /sgk/yenileme-hakki page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const yenilemeHakkiFinalCta: BrandPageFinalCtaContent = {
  badge: "YENİLEME ZAMANINIZI BİRLİKTE KONTROL EDELİM",
  heading: "Yenileme Hakkınızı Birlikte Değerlendirelim",
  description:
    "Standart sürenin dolup dolmadığından erken yenileme gerekçenize kadar, durumunuzu sizinle birlikte kontrol ediyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Kontrol", "Şeffaf Süreç", "SGK Anlaşmalı Merkez", "Uzman Rehberliği"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
