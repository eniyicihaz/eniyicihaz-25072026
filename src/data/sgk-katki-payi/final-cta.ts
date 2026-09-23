// Final CTA content for the /sgk/katki-payi page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const sgkKatkiPayiFinalCta: BrandPageFinalCtaContent = {
  badge: "KATKI PAYINIZI NETLEŞTİRELİM",
  heading: "Size Özel Katkı Payını Birlikte Hesaplayalım",
  description:
    "Yaş grubunuz, çalışma durumunuz ve tercih ettiğiniz cihaza göre katkı payınızı şeffaf bir şekilde hesaplıyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Hesaplama", "Şeffaf Süreç", "SGK Anlaşmalı Merkez", "Uzman Rehberliği"],
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorGlow: "rgb(22 163 74 / 0.22)",
  accentColorShadow: "rgb(22 163 74 / 0.55)",
  accentColorShadowHover: "rgb(22 163 74 / 0.65)",
  accentColorFocus: "rgb(22 163 74 / 0.5)",
  accentColorTrustBg: "rgb(22 163 74 / 0.16)",
};
