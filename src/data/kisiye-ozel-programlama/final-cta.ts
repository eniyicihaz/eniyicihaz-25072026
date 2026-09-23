// Final CTA content for the /uygulama-ayar/kisiye-ozel-programlama
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels
// (contactConfig) and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kisiyeOzelProgramlamaFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE ÖZEL BİR DENEYİM İÇİN YANINIZDAYIZ",
  heading: "Cihazınızı Tam Size Göre Ayarlayalım",
  description:
    "Geri bildiriminize, ortam ihtiyaçlarınıza ve gerektiğinde kullanım verilerinize dayanan kişiye özel programlamayla, cihazınızdan en iyi verimi almanızı sağlıyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İnce Ayar", "Ortama Özel Programlar", "Veri Kaydı Desteği", "Kademeli Takip Süreci"],
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorGlow: "rgb(124 58 237 / 0.22)",
  accentColorShadow: "rgb(124 58 237 / 0.55)",
  accentColorShadowHover: "rgb(124 58 237 / 0.65)",
  accentColorFocus: "rgb(124 58 237 / 0.5)",
  accentColorTrustBg: "rgb(124 58 237 / 0.16)",
};
