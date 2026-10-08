// Kocaeli landing page — Final CTA (Faz 2 P2, Kocaeli V1). Yol tarifi hero
// ve konum kartında zaten var; component yalnızca 2 CTA destekler.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kocaeliFinalCta: BrandPageFinalCtaContent = {
  badge: "BİZE ULAŞIN",
  heading: "Yola Çıkmadan Önce Bize Danışın",
  description: "Darıca'daki merkezimize gelmek ya da evde hizmet için bizi arayın veya WhatsApp'tan yazın.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: [
    "Tek Merkez: Darıca",
    "Evde Hizmet Kocaeli Geneli",
    "Ücretsiz İşitme Testi",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
