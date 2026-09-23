// Final CTA content for the /uygulama-ayar/kalip-alimi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kalipAlimiFinalCta: BrandPageFinalCtaContent = {
  badge: "KİŞİYE ÖZEL BİR UYUM İÇİN YANINIZDAYIZ",
  heading: "Kulak Kalıbınızı Birlikte Üretelim",
  description:
    "Kulak muayenesinden laboratuvar üretimine kadar, size özel bir kulak kalıbı için tüm süreçte yanınızdayız.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Kalıp Alımı", "Kişiye Özel Ölçü", "Renk ve Malzeme Seçeneği", "Uzman Odyometrist"],
  accentColor: "#db2777",
  accentColorHover: "#be185d",
  accentColorGlow: "rgb(219 39 119 / 0.22)",
  accentColorShadow: "rgb(219 39 119 / 0.55)",
  accentColorShadowHover: "rgb(219 39 119 / 0.65)",
  accentColorFocus: "rgb(219 39 119 / 0.5)",
  accentColorTrustBg: "rgb(219 39 119 / 0.16)",
};
