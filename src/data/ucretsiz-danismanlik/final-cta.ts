// Final CTA content for the /neden-orijinal/ucretsiz-danismanlik page —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject (free
// consultancy) rather than the usual set from other pages.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ucretsizDanismanlikFinalCta: BrandPageFinalCtaContent = {
  badge: "ÜCRETSİZ DANIŞMANLIK",
  heading: "Size Uygun Cihazı Birlikte Belirleyelim",
  description:
    "Ücretsiz işitme testi ve uzman danışmanlığımızla, satış baskısı olmadan size en uygun cihazı birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Satış Baskısız Danışmanlık", "SGK Bilgilendirmesi", "Demo Cihaz Deneme"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
