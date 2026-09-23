// Final CTA content for the /ihtiyaciniza-gore/aktif-yasam-icin-cihazlar
// page — the page's last section. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// and verified trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const aktifYasamIcinCihazlarFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Aktif Yaşamınıza Uygun Cihazı Birlikte Belirleyelim",
  description:
    "Güvenli oturma, dayanıklılık ve pil ömrü önceliklerinizi göz önünde bulundurarak size uygun cihazı ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#4b5563",
  accentColorHover: "#374151",
  accentColorGlow: "rgb(75 85 99 / 0.22)",
  accentColorShadow: "rgb(75 85 99 / 0.55)",
  accentColorShadowHover: "rgb(75 85 99 / 0.65)",
  accentColorFocus: "rgb(75 85 99 / 0.5)",
  accentColorTrustBg: "rgb(75 85 99 / 0.16)",
};
