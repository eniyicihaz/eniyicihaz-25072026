// Final CTA content for the /servis-bakim/garanti-islemleri page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const garantiIslemleriFinalCta: BrandPageFinalCtaContent = {
  badge: "GARANTİ KAPSAMINIZI NETLEŞTİRELİM",
  heading: "Garanti Durumunuzu Birlikte Kontrol Edelim",
  description:
    "Fatura ve garanti belgenizle birlikte, cihazınızın garanti kapsamını netleştirip gerekli süreci başlatalım.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Kapsam Değerlendirmesi", "Belgeli Süreç", "Yetkili Servis Ağı", "Şeffaf Yönlendirme"],
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorGlow: "rgb(79 70 229 / 0.22)",
  accentColorShadow: "rgb(79 70 229 / 0.55)",
  accentColorShadowHover: "rgb(79 70 229 / 0.65)",
  accentColorFocus: "rgb(79 70 229 / 0.5)",
  accentColorTrustBg: "rgb(79 70 229 / 0.16)",
};
