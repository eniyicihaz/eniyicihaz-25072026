// "Markalara Göre İnceleyin" section for the /servis-bakim/
// onarim-takibi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own manufacturer-service shipping
// network being trackable as part of the repair process.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const onarimTakibiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Onarım Takibi Sunduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları için üretici servisi sürecini takip edebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları için üretici servisi sürecini takip edebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları için üretici servisi sürecini takip edebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları için üretici servisi sürecini takip edebilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları için üretici servisi sürecini takip edebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de onarım süreci takip edilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
