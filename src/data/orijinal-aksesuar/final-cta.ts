// Final CTA content for the /neden-orijinal/orijinal-aksesuar page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject (accessory
// authenticity) rather than the usual hearing-test-focused set.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const orijinalAksesuarFinalCta: BrandPageFinalCtaContent = {
  badge: "ORİJİNAL AKSESUAR DESTEĞİ",
  heading: "Cihazınıza Uygun Orijinal Aksesuarları Temin Edelim",
  description:
    "Kulak ucundan şarj aksesuarına, cihazınızın ihtiyaç duyduğu tüm orijinal aksesuarları hızlı ve güvenilir bir şekilde temin ediyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Orijinal Aksesuar Garantisi", "Modele Özel Uyum", "Hızlı Temin", "Ücretsiz Danışmanlık"],
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorGlow: "rgb(124 58 237 / 0.22)",
  accentColorShadow: "rgb(124 58 237 / 0.55)",
  accentColorShadowHover: "rgb(124 58 237 / 0.65)",
  accentColorFocus: "rgb(124 58 237 / 0.5)",
  accentColorTrustBg: "rgb(124 58 237 / 0.16)",
};
