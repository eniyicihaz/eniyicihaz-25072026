// "Markalara Göre İnceleyin" section for the /blog/basari-hikayeleri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const basariHikayeleriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kendi Deneyiminiz İçin Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Günlük hayatta doğal bir işitme deneyimi hedefleyen modeller sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Aile ve iş hayatında bağlantılı kullanım sunan modelleriyle bilinir.",
      href: "/markalar/phonak",
    },
    {
      label: "ReSound",
      description: "Sosyal ortamlarda konforlu kullanım sunan modelleriyle öne çıkar.",
      href: "/markalar/resound",
    },
    {
      label: "Signia",
      description: "Günlük yaşamda pratik kullanım sunan modelleriyle bilinir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Doğal ses deneyimi odaklı modelleriyle bilinir.",
      href: "/markalar/widex",
    },
    {
      label: "Sonic",
      description: "Bütçe dostu bir seçenek arıyorsanız, Sonic modelleri değerlendirilebilir.",
      href: "/markalar/sonic",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
