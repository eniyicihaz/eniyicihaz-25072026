// "Markalara Göre İnceleyin" section for the /servis-bakim/
// garanti-islemleri page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Kept deliberately generic on exact warranty durations since
// these vary by market and campaign and aren't independently
// verifiable per brand; framed instead around each brand's own
// authorized warranty coverage being available.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const garantiIslemleriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yetkili Garanti Sunduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları, yetkili kanaldan alındığında üretici garantisi kapsamındadır.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları, yetkili kanaldan alındığında üretici garantisi kapsamındadır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları, yetkili kanaldan alındığında üretici garantisi kapsamındadır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları, yetkili kanaldan alındığında üretici garantisi kapsamındadır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları, yetkili kanaldan alındığında üretici garantisi kapsamındadır.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de yetkili kanaldan alındığında garanti kapsamındadır.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
