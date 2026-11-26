// "Markalara Göre İnceleyin" section for the /servis-bakim/
// garanti-islemleri page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Kept deliberately generic on exact warranty durations since
// these vary by market and campaign and aren't independently
// verifiable per brand; framed instead around each brand's own
// manufacturer warranty terms applying.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const garantiIslemleriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Garanti Süreci Hakkında Bilgi Alabileceğiniz Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazlarında garanti, üreticinin garanti koşullarına göre işler.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak cihazlarında garanti, üreticinin garanti koşullarına göre işler.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound cihazlarında garanti, üreticinin garanti koşullarına göre işler.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modellerinde de garanti, üreticinin garanti koşullarına göre işler.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
