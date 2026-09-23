// Final CTA content for the /sgk/gerekli-belgeler page — the page's
// last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const gerekliBelgelerFinalCta: BrandPageFinalCtaContent = {
  badge: "BELGE LİSTENİZİ BİRLİKTE HAZIRLAYALIM",
  heading: "Belgelerinizi Birlikte Gözden Geçirelim",
  description:
    "Rapor ve reçeteden kimlik belgelerinize kadar, başvurunuz için gereken tüm belgeleri sizinle birlikte kontrol ediyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Kontrol", "Şeffaf Süreç", "SGK Anlaşmalı Merkez", "Uzman Rehberliği"],
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorGlow: "rgb(79 70 229 / 0.22)",
  accentColorShadow: "rgb(79 70 229 / 0.55)",
  accentColorShadowHover: "rgb(79 70 229 / 0.65)",
  accentColorFocus: "rgb(79 70 229 / 0.5)",
  accentColorTrustBg: "rgb(79 70 229 / 0.16)",
};
