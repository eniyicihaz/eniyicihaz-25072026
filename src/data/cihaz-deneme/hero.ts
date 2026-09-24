// Hero content for the "Cihaz Deneme" page (/uygulama-ayar/cihaz-deneme).
// Renders through the new, generic ExperienceHero component — NOT
// BrandPageHero (redesign plan §2: this page must not repeat the
// text-left/image-right split every other service page already uses).
// accentColor stays the page's established teal (#0d9488) — already
// distinct from Ücretsiz İşitme Testi's cyan, no new color needed.
import type { ExperienceHeroContent } from "../../components/shared/ExperienceHero/ExperienceHero.astro";
import { contactConfig } from "../../config";

export const cihazDenemeHero: ExperienceHeroContent = {
  eyebrow: "UYGULAMA & AYAR · CİHAZ DENEME",
  headingLines: ["Darıca'da İşitme", "Cihazını Deneyin"],
  lead: "Satın almadan önce deneyin.",
  paragraph:
    "Size önerilen işitme cihazını satın almadan önce günlük hayatınızda gerçek koşullarda test edin; karar tamamen size ait.",
  ctaPrimary: { label: "Cihaz Denemesi İçin Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
  steps: ["Test Edin", "Karşılaştırın", "Karar Verin"],
  image: {
    src: "/images/signia/models/styletto.webp",
    alt: "Cihaz deneme sürecinde deneyimlenebilecek Signia Styletto işitme cihazı görseli",
  },
  accentColor: "#0d9488",
};
