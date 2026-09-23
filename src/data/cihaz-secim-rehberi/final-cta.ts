// Final CTA content for the /rehberler/cihaz-secim-rehberi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazSecimRehberiFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE UYGUN CİHAZI BULALIM",
  heading: "Seçim Sürecinde Yanınızdayız",
  description:
    "İşitme testinizden bütçenize kadar tüm faktörleri birlikte değerlendirerek, size gerçekten uygun cihazı bulmanıza yardımcı oluyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İhtiyaç Analizi", "Çoklu Marka Karşılaştırma", "Bütçe Rehberliği", "Baskısız Süreç"],
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorGlow: "rgb(234 88 12 / 0.22)",
  accentColorShadow: "rgb(234 88 12 / 0.55)",
  accentColorShadowHover: "rgb(234 88 12 / 0.65)",
  accentColorFocus: "rgb(234 88 12 / 0.5)",
  accentColorTrustBg: "rgb(234 88 12 / 0.16)",
};
