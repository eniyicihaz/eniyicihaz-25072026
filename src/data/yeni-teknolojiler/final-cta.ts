// Final CTA content for the /blog/yeni-teknolojiler page — the page's
// last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const yeniTeknolojilerFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE UYGUN TEKNOLOJİYİ BULALIM",
  heading: "Güncel Teknolojileri Birlikte Değerlendirelim",
  description:
    "Yapay zeka destekli ses işlemeden kablosuz bağlantıya kadar, hangi teknolojilerin size fayda sağlayacağını randevunuzda birlikte belirleriz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Danışmanlık", "Cihaz Deneme İmkânı", "Uzman Rehberliği", "Kişiye Özel Öneri"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
