// Final CTA content for the Vista brand page (/markalar/vista) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const vistaFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Vista Kademesi Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bütçenize ve yerleşim tercihinize uygun Vista kademesini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorHover: "#B94708",
  accentColorGlow: "rgb(232 93 10 / 0.22)",
  accentColorShadow: "rgb(232 93 10 / 0.55)",
  accentColorShadowHover: "rgb(232 93 10 / 0.65)",
  accentColorFocus: "rgb(232 93 10 / 0.5)",
  accentColorTrustBg: "rgb(232 93 10 / 0.16)",
};
