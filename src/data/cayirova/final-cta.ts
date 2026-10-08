// Çayırova landing page — Final CTA (Faz 2 P2, Çayırova V1). Component
// yalnızca 2 CTA butonu destekliyor (ctaPrimary/ctaSecondary); yol tarifi
// hero ve konum kartında zaten var.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cayirovaFinalCta: BrandPageFinalCtaContent = {
  badge: "BİZE ULAŞIN",
  heading: "Yola Çıkmadan Önce Bize Danışın",
  description: "Darıca'daki merkezimize gelmek ya da evde hizmet için bizi arayın veya WhatsApp'tan yazın.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: [
    "Merkezimiz Darıca'da",
    "Çayırova'dan Hat 550",
    "Evde Hizmet Çayırova'yı Kapsar",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
