// Final CTA content for the /teknolojiler/konusma-odakli page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const konusmaOdakliFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Konuşma Odaklı Modeli Birlikte Belirleyelim",
  description:
    "Günlük sosyal ortamınıza, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorGlow: "rgb(234 88 12 / 0.22)",
  accentColorShadow: "rgb(234 88 12 / 0.55)",
  accentColorShadowHover: "rgb(234 88 12 / 0.65)",
  accentColorFocus: "rgb(234 88 12 / 0.5)",
  accentColorTrustBg: "rgb(234 88 12 / 0.16)",
};
