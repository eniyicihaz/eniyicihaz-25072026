// Final CTA content for the /degerlendirme/online-isitme-testi page —
// rendered directly under the HearingScreen result stage (plan §2),
// not just at the bottom of the page. Heading/description text is
// locked exactly as specified in the implementation plan §2/§9 — do
// not soften or rephrase either line.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const onlineIsitmeTestiFinalCta: BrandPageFinalCtaContent = {
  badge: "SONRAKİ ADIM",
  heading: "Darıca'da Profesyonel İşitme Testi",
  description:
    "Online tarama yalnızca ön değerlendirme amaçlıdır. Kesin değerlendirme için profesyonel odyolojik test gereklidir.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Profesyonel Test", "Uzman Odyometrist", "Aynı Gün Sonuç", "SGK Danışmanlığı"],
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorGlow: "rgb(225 29 72 / 0.22)",
  accentColorShadow: "rgb(225 29 72 / 0.55)",
  accentColorShadowHover: "rgb(225 29 72 / 0.65)",
  accentColorFocus: "rgb(225 29 72 / 0.5)",
  accentColorTrustBg: "rgb(225 29 72 / 0.16)",
};
