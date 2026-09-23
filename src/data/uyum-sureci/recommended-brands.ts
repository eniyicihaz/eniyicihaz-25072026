// "Markalara Göre İnceleyin" section for the /rehberler/uyum-sureci
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. Framed
// generically around each brand's own fitting software supporting a
// gradual acclimatization approach, without over-claiming specific
// unverified feature names.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uyumSureciRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Uyum Sürecinde Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un fitting yazılımı, kademeli bir uyum yaklaşımını desteklemek üzere ayarlanabilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın fitting yazılımı, kademeli bir uyum yaklaşımını desteklemek üzere ayarlanabilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın fitting yazılımı, kademeli bir uyum yaklaşımını desteklemek üzere ayarlanabilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in fitting yazılımı, kademeli bir uyum yaklaşımını desteklemek üzere ayarlanabilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un fitting yazılımı, kademeli bir uyum yaklaşımını desteklemek üzere ayarlanabilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de kademeli bir uyum yaklaşımı değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
