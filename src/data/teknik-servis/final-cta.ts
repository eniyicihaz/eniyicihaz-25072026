// Final CTA content for the /servis-bakim/teknik-servis page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const teknikServisFinalCta: BrandPageFinalCtaContent = {
  badge: "BİR ARIZA MI FARK ETTİNİZ?",
  heading: "Cihazınızı Birlikte İnceleyelim",
  description:
    "Ses kesintisi, açılmama sorunu veya fiziksel hasar gibi bir durumla karşılaştıysanız, yerinde teşhisle çözüm sürecini başlatalım.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Yerinde Teşhis", "Orijinal Yedek Parça", "Yetkili Servis Ağı", "Takip Edilebilir Süreç"],
  accentColor: "#dc2626",
  accentColorHover: "#b91c1c",
  accentColorGlow: "rgb(220 38 38 / 0.22)",
  accentColorShadow: "rgb(220 38 38 / 0.55)",
  accentColorShadowHover: "rgb(220 38 38 / 0.65)",
  accentColorFocus: "rgb(220 38 38 / 0.5)",
  accentColorTrustBg: "rgb(220 38 38 / 0.16)",
};
