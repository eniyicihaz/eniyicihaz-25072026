// Final CTA content for the NuEar brand page (/markalar/nuear) — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and the same
// verified trust facts used elsewhere on the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const nuearFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi NuEar Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve sağlık takibi beklentilerinize uygun NuEar modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorHover: "#B7001F",
  accentColorGlow: "rgb(228 0 43 / 0.22)",
  accentColorShadow: "rgb(228 0 43 / 0.55)",
  accentColorShadowHover: "rgb(228 0 43 / 0.65)",
  accentColorFocus: "rgb(228 0 43 / 0.5)",
  accentColorTrustBg: "rgb(228 0 43 / 0.16)",
};
