// Final CTA content for the /degerlendirme/ucretsiz-isitme-testi page —
// redesign plan §2, Bölüm 14. Renders through the shared
// BrandPageFinalCta component. Same real contact channels (contactConfig)
// used across the site. Primary CTA label matches the Hero's exact
// wording (plan §6 CTA hierarchy: one consistent primary label site-wide
// on this page, not a different phrase each time).

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ucretsizIsitmeTestiFinalCta: BrandPageFinalCtaContent = {
  badge: "SON ADIM",
  heading: "İşitmenizi Bugün Değerlendirin",
  description: "Darıca'da profesyonel işitme değerlendirmesi için Avrasya İşitme'ye ulaşın.",
  ctaPrimary: { label: "Ücretsiz İşitme Testi İçin Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Uzman Odyometrist", "Aynı Gün Sonuç", "SGK Danışmanlığı"],
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorGlow: "rgb(8 145 178 / 0.22)",
  accentColorShadow: "rgb(8 145 178 / 0.55)",
  accentColorShadowHover: "rgb(8 145 178 / 0.65)",
  accentColorFocus: "rgb(8 145 178 / 0.5)",
  accentColorTrustBg: "rgb(8 145 178 / 0.16)",
};
