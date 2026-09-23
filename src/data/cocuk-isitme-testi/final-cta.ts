// Final CTA content for the /degerlendirme/cocuk-isitme-testi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cocukIsitmeTestiFinalCta: BrandPageFinalCtaContent = {
  badge: "ERKEN TESPİT ÖNEMLİDİR",
  heading: "Çocuğunuzun İşitme Sağlığı İçin Yanınızdayız",
  description:
    "Yaşa uygun test yöntemleri ve aile katılımlı yaklaşımımızla, çocuğunuzun işitme durumunu güvenle değerlendiriyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Çocuk İşitme Testi", "Yaşa Uygun Yöntemler", "Aile Katılımlı Süreç", "Uzman Odyometrist"],
  accentColor: "#f97316",
  accentColorHover: "#ea580c",
  accentColorGlow: "rgb(249 115 22 / 0.22)",
  accentColorShadow: "rgb(249 115 22 / 0.55)",
  accentColorShadowHover: "rgb(249 115 22 / 0.65)",
  accentColorFocus: "rgb(249 115 22 / 0.5)",
  accentColorTrustBg: "rgb(249 115 22 / 0.16)",
};
