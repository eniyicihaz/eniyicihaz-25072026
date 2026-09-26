// Son CTA — Hakkımızda. Renders through the existing BrandPageFinalCta.
// Description, ayrı bir "Neden Avrasya İşitme?" bölümü açmak yerine o
// düşünceyi kısa ve reklamsız şekilde kapatıyor (plan §6/12).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const hakkimizdaFinalCta: BrandPageFinalCtaContent = {
  badge: "BİZİ TANIYIN",
  heading: "Darıca'daki Merkezimizde Sizi Ağırlamak İsteriz",
  description: "Marka bağımsız değerlendirme ve satış sonrası destek anlayışımızla, Darıca'daki merkezimizde sizi ağırlamak isteriz. Gebze ve Çayırova'dan da randevu alabilirsiniz.",
  ctaPrimary: { label: "Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: ["Darıca'da SGK Anlaşmalı Merkez", "Marka Bağımsız Değerlendirme", "Satış Sonrası Destek", "Gebze, Çayırova'ya Yakın"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
