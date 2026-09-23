// Final CTA content for the /degerlendirme/odyometri page — the page's
// last section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const odyometriFinalCta: BrandPageFinalCtaContent = {
  badge: "İŞİTME EŞİĞİNİZİ ÖĞRENİN",
  heading: "Odyometri ile İşitme Durumunuzu Netleştirin",
  description:
    "Kalibre edilmiş profesyonel ekipmanlarımız ve deneyimli odyometrist kadromuzla, işitme eşiğinizi netleştirmenize yardımcı oluyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Odyometri", "Kalibre Edilmiş Ekipman", "Uzman Odyometrist", "Aynı Gün Sonuç"],
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorGlow: "rgb(79 70 229 / 0.22)",
  accentColorShadow: "rgb(79 70 229 / 0.55)",
  accentColorShadowHover: "rgb(79 70 229 / 0.65)",
  accentColorFocus: "rgb(79 70 229 / 0.5)",
  accentColorTrustBg: "rgb(79 70 229 / 0.16)",
};
