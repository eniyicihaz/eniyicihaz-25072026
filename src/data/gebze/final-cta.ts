// Gebze landing page — Son CTA (Faz 2 P2, Gebze V1): Ara + WhatsApp + Yol
// tarifi (CONVERSION_SOT §5). Walk-in bilgisi tek başına değil, hizmet
// bazında randevu kuralıyla birlikte verilir (CONVERSION_SOT §1).
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const gebzeFinalCta: BrandPageFinalCtaContent = {
  badge: "DARICA MERKEZİMİZ",
  heading: "Gebze'den Gelmeden Önce Bizi Arayın",
  description:
    "Randevusuz gelebilirsiniz; hizmetler için önceden aramanızı öneririz. Arayabilir, WhatsApp'tan yazabilir ya da yol tarifiyle doğrudan Darıca'daki merkezimize gelebilirsiniz.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  ctaTertiary: { label: "Yol Tarifi Al", href: company.directionsHref },
  trustItems: [
    "Fiziksel Merkez Darıca'da",
    "Asansörle 1. Kat",
    "Randevusuz gelebilirsiniz; hizmetler için önceden arayın",
    "SGK Anlaşmalı Merkez",
  ],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
