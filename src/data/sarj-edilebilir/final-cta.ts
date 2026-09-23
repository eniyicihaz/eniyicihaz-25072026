// Final CTA content for the /isitme-cihazlari/sarj-edilebilir page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const sarjEdilebilirFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Şarj Edilebilir Modeli Birlikte Belirleyelim",
  description:
    "Günlük rutininize, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun şarj edilebilir modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorGlow: "rgb(5 150 105 / 0.22)",
  accentColorShadow: "rgb(5 150 105 / 0.55)",
  accentColorShadowHover: "rgb(5 150 105 / 0.65)",
  accentColorFocus: "rgb(5 150 105 / 0.5)",
  accentColorTrustBg: "rgb(5 150 105 / 0.16)",
};
