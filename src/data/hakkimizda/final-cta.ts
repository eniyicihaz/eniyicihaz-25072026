// Son CTA — Hakkımızda. Renders through the existing BrandPageFinalCta.
// Description, ayrı bir "Neden Avrasya İşitme?" bölümü açmak yerine o
// düşünceyi kısa ve reklamsız şekilde kapatıyor (plan §6/12).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const hakkimizdaFinalCta: BrandPageFinalCtaContent = {
  badge: "BİZİ TANIYIN",
  heading: "Darıca'daki Merkezimizde Sizi Ağırlamak İsteriz",
  description: "Darıca'daki merkezimizde sizi ağırlamak isteriz. Gebze ve Çayırova'dan da merkezimize gelebilirsiniz.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: ["Darıca'da SGK Anlaşmalı Merkez", "18 Marka", "18 Markada Teknik Servis", "Ücretsiz İşitme Testi"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
