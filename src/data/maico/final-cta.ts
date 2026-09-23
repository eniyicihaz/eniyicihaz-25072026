// Final CTA content for the Maico brand page (/markalar/maico) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const maicoFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi MAICO Serisi Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, bağlantı beklentinize ve yerleşim tercihinize uygun MAICO serisini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorHover: "#0A1830",
  accentColorGlow: "rgb(16 35 63 / 0.22)",
  accentColorShadow: "rgb(16 35 63 / 0.55)",
  accentColorShadowHover: "rgb(16 35 63 / 0.65)",
  accentColorFocus: "rgb(16 35 63 / 0.5)",
  accentColorTrustBg: "rgb(16 35 63 / 0.16)",
  // Contrast fix (2026-07): same issue as Hero (see hero.ts) — MAICO's
  // real accent (#10233F) was unreadable as the solid button's
  // background/text and as the trust-icon color against this card's own
  // dark navy background. ctaAccent/ctaAccentHover supply a brighter,
  // same-hue navy for those two spots only; accentColor stays the true
  // brand color for every other section. ctaTextColor switches the
  // button label to white.
  ctaAccent: "#2F5A96",
  ctaAccentHover: "#25477A",
  ctaTextColor: "#FFFFFF",
};
