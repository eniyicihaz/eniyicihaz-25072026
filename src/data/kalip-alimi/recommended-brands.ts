// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// kalip-alimi page. Reuses the shared BrandPageRelatedContent component
// as a brand-link showcase, same technique every prior page uses.
// Framed generically since ear-mold and custom-shell fabrication is a
// laboratory process that applies across brands, rather than a
// brand-specific feature.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kalipAlimiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Özel Kalıp Seçeneği Sunan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un kulak arkası modelleri, kişiye özel kulak kalıbıyla birlikte kullanılabilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın kulak arkası modelleri, özel kalıp seçeneğiyle birlikte değerlendirilebilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın kulak içi modelleri, kulak kalıbınıza özel olarak üretilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in kulak arkası modelleri, kişiye özel kulak kalıbıyla birlikte kullanılabilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un kulak içi modelleri, kulak kalıbınıza özel olarak üretilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı kulak arkası modelleri de özel kalıp seçeneğiyle kullanılabilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
