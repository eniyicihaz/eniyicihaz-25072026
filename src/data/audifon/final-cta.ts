// Final CTA content for the Audifon brand page (/markalar/audifon) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const audifonFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Audifon Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, tinnitus şikayetinizin olup olmadığına ve yerleşim tercihinize uygun Audifon modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorHover: "#B50015",
  accentColorGlow: "rgb(226 0 26 / 0.22)",
  accentColorShadow: "rgb(226 0 26 / 0.55)",
  accentColorShadowHover: "rgb(226 0 26 / 0.65)",
  accentColorFocus: "rgb(226 0 26 / 0.5)",
  accentColorTrustBg: "rgb(226 0 26 / 0.16)",
};
