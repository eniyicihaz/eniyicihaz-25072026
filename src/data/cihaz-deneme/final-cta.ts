// Final CTA for /uygulama-ayar/cihaz-deneme — redesign plan §1, Son CTA.
// Renders through BrandPageFinalCta (unchanged). Primary CTA label
// matches the Hero's exact wording (same CTA-hierarchy consistency rule
// used on the Ücretsiz İşitme Testi redesign).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazDenemeFinalCta: BrandPageFinalCtaContent = {
  badge: "RİSKSİZ BİR KARAR İÇİN YANINIZDAYIZ",
  heading: "İşitme Cihazını Kendiniz Deneyin",
  description: "Size uygun seçenekleri birlikte değerlendirelim.",
  ctaPrimary: { label: "Cihaz Denemesi İçin Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Deneme İmkânı", "Satın Alma Yükümlülüğü Yok", "Gerçek Yaşam Koşulları", "Darıca'da Uzman Destek"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
