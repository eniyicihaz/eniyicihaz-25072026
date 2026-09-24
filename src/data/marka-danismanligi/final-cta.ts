// Son CTA — Marka Danışmanlığı, plan §D. Renders through the existing
// BrandPageFinalCta (unchanged).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const markaDanismanligiFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE UYGUN MARKAYI BİRLİKTE DEĞERLENDİRELİM",
  heading: "Size Uygun Markayı Birlikte Değerlendirelim",
  description: "Darıca'daki merkezimizde, ihtiyacınıza uygun marka ve modeli birlikte belirleyelim.",
  ctaPrimary: { label: "Ücretsiz Değerlendirme", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Ulaşın", href: contactConfig.whatsapp.href },
  trustItems: ["18 Marka Seçeneği", "Marka Bağımsız Yaklaşım", "İhtiyaç Odaklı Değerlendirme", "Darıca'da Uzman Destek"],
  accentColor: "#b45309",
  accentColorHover: "#92400e",
  accentColorGlow: "rgb(180 83 9 / 0.22)",
  accentColorShadow: "rgb(180 83 9 / 0.55)",
  accentColorShadowHover: "rgb(180 83 9 / 0.65)",
  accentColorFocus: "rgb(180 83 9 / 0.5)",
  accentColorTrustBg: "rgb(180 83 9 / 0.16)",
};
