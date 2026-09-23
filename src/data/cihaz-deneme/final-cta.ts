// Final CTA content for the /uygulama-ayar/cihaz-deneme page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazDenemeFinalCta: BrandPageFinalCtaContent = {
  badge: "RİSKSİZ BİR KARAR İÇİN YANINIZDAYIZ",
  heading: "Karar Vermeden Önce Deneyin",
  description:
    "Satın alma yükümlülüğü olmadan, gerçek yaşam koşullarında deneyimleyerek doğru cihazı birlikte seçelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Deneme İmkânı", "Satın Alma Yükümlülüğü Yok", "Gerçek Yaşam Koşulları", "Ara Kontrol Desteği"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
