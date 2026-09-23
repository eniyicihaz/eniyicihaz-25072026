// Final CTA content for the Philips Hearing brand page
// (/markalar/philips-hearing) — the page's last section. Renders through
// the shared BrandPageFinalCta component. Same real contact channels
// (contactConfig) and the same verified trust facts used elsewhere on
// the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const philipsHearingFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Philips HearLink Kademesi Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bütçenize ve yerleşim tercihinize uygun Philips HearLink kademesini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorHover: "#0848A3",
  accentColorGlow: "rgb(11 95 206 / 0.22)",
  accentColorShadow: "rgb(11 95 206 / 0.55)",
  accentColorShadowHover: "rgb(11 95 206 / 0.65)",
  accentColorFocus: "rgb(11 95 206 / 0.5)",
  accentColorTrustBg: "rgb(11 95 206 / 0.16)",
};
