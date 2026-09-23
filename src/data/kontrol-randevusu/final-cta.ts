// Final CTA content for the /uygulama-ayar/kontrol-randevusu page —
// the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels
// (contactConfig) and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kontrolRandevusuFinalCta: BrandPageFinalCtaContent = {
  badge: "DÜZENLİ TAKİP ÖNEMLİDİR",
  heading: "Kontrol Randevunuzu Planlayalım",
  description:
    "İşitme durumunuzu ve cihazınızın performansını düzenli aralıklarla birlikte gözden geçirerek, her zaman en iyi durumda kalmanızı sağlıyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Kontrol Randevusu", "İşitme + Cihaz Kontrolü", "Erken Tespit", "Uzman Odyometrist"],
  accentColor: "#475569",
  accentColorHover: "#334155",
  accentColorGlow: "rgb(71 85 105 / 0.22)",
  accentColorShadow: "rgb(71 85 105 / 0.55)",
  accentColorShadowHover: "rgb(71 85 105 / 0.65)",
  accentColorFocus: "rgb(71 85 105 / 0.5)",
  accentColorTrustBg: "rgb(71 85 105 / 0.16)",
};
