// Final CTA content for the Audio Service brand page
// (/markalar/audio-service) — the page's last section. Renders through
// the shared BrandPageFinalCta component. Same real contact channels
// (contactConfig) and the same verified trust facts used elsewhere on
// the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const audioServiceFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Audio Service Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, estetik beklentinize ve bütçenize uygun Audio Service modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorHover: "#0C2E7A",
  accentColorGlow: "rgb(18 64 160 / 0.22)",
  accentColorShadow: "rgb(18 64 160 / 0.55)",
  accentColorShadowHover: "rgb(18 64 160 / 0.65)",
  accentColorFocus: "rgb(18 64 160 / 0.5)",
  accentColorTrustBg: "rgb(18 64 160 / 0.16)",
};
