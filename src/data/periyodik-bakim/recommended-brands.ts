// "Markalara Göre İnceleyin" section for the /servis-bakim/
// periyodik-bakim page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own compatible consumable parts
// (wax guards, tubing, domes) being available for periodic maintenance.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const periyodikBakimRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Periyodik Bakım Sunduğumuz Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları için uyumlu kulak kiri filtresi ve tüp seçenekleri mevcuttur.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları için uyumlu kulak kiri filtresi ve tüp seçenekleri mevcuttur.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları için uyumlu kulak kiri filtresi ve tüp seçenekleri mevcuttur.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de uyumlu bakım parçaları mevcuttur.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
