// Final CTA content for the /servis-bakim/cihaz-temizligi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazTemizligiFinalCta: BrandPageFinalCtaContent = {
  badge: "DOĞRU ALIŞKANLIK, UZUN ÖMÜR",
  heading: "Doğru Temizlik Yöntemini Birlikte Öğrenelim",
  description:
    "Cihazınıza uygun temizlik kitini ve saklama önerilerini, size özel olarak ücretsiz gösteriyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Rehberlik", "Kişiye Özel Gösterim", "Doğru Saklama Önerileri", "Basit ve Hızlı"],
  accentColor: "#0ea5e9",
  accentColorHover: "#0284c7",
  accentColorGlow: "rgb(14 165 233 / 0.22)",
  accentColorShadow: "rgb(14 165 233 / 0.55)",
  accentColorShadowHover: "rgb(14 165 233 / 0.65)",
  accentColorFocus: "rgb(14 165 233 / 0.5)",
  accentColorTrustBg: "rgb(14 165 233 / 0.16)",
};
