// Final CTA content for the Signia brand page (/markalar/signia) — the
// page's last section (see SIGNIA MASTER BLUEPRINT §9.14). Renders
// through the shared BrandPageFinalCta component. Same real contact
// channels (contactConfig) and the same verified trust facts used
// elsewhere on the site.
//
// === SIGNIA BRAND THEME REVISION (2026-07, v2) ===
// v1 made this card near-black (#1B1B1B). Per explicit follow-up
// feedback, this section goes back to the site's light design system —
// "Bu bölüm de beyaz olacak. Koyu tema kullanılmayacak. Sadece CTA
// butonları ve vurgu alanları Signia rengini kullanacak." The card is
// now a soft off-white (#FAFAFA) with a light border, distinct from the
// pure-white page behind it; every field below that wasn't in v1 is one
// of BrandPageFinalCta's newly-added optional overrides (see that
// component) for the badge/heading/description/outline-button/trust
// text and border colors — all originally hardcoded assuming a dark
// card, all needing a dark-on-light counterpart for a light one.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const signiaFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Signia Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve tasarım tercihinize uygun Signia modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  accentColor: "#B21F4B",
  accentColorHover: "#D63A69",
  // "Glow çok hafif" per the brief's general Marka Rengi spec.
  accentColorGlow: "rgba(178, 31, 75, 0.12)",
  accentColorShadow: "rgba(178, 31, 75, 0.25)",
  accentColorShadowHover: "rgba(178, 31, 75, 0.35)",
  accentColorFocus: "rgba(178, 31, 75, 0.35)",
  accentColorTrustBg: "rgba(178, 31, 75, 0.08)",
  cardBg: "#FAFAFA",
  cardBorder: "1px solid #E9E9E9",
  ctaTextColor: "#FFFFFF",
  badgeBg: "rgba(178, 31, 75, 0.08)",
  badgeBorder: "rgba(178, 31, 75, 0.25)",
  badgeText: "#B21F4B",
  headingColor: "#111111",
  descColor: "#666666",
  outlineText: "#1B1B1B",
  outlineBorder: "#D9D9D9",
  outlineHoverBg: "rgba(178, 31, 75, 0.04)",
  outlineHoverBorder: "#B21F4B",
  outlineHoverText: "#B21F4B",
  trustBorderTop: "#E9E9E9",
  trustItemBg: "#FFFFFF",
  trustItemBorder: "#E9E9E9",
  trustLabelColor: "#1B1B1B",
};
