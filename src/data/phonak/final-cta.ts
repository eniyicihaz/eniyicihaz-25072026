// Final CTA content for the Phonak brand page (/markalar/phonak) — the
// page's last section (see PHONAK MASTER BLUEPRINT §6.14). Renders
// through the shared BrandPageFinalCta component. Same real contact
// channels (contactConfig) and the same verified trust facts used
// elsewhere on the site — nothing new is claimed here.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const phonakFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Phonak Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve bağlantı ihtiyaçlarınıza uygun Phonak modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorHover: "#0284c7",
  accentColorGlow: "rgb(14 165 233 / 0.22)",
  accentColorShadow: "rgb(14 165 233 / 0.55)",
  accentColorShadowHover: "rgb(14 165 233 / 0.65)",
  accentColorFocus: "rgb(14 165 233 / 0.5)",
  accentColorTrustBg: "rgb(14 165 233 / 0.16)",
};
