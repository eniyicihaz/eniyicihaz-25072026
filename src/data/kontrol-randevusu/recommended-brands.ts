// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// kontrol-randevusu page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own fitting software being used to
// review performance data during the control visit — the same real,
// verified software names already cited on the Cihaz Uygulama page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kontrolRandevusuRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kontrol Sürecinde Kullanılan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları, Genie 2 yazılımı üzerinden kontrol randevusunda performans açısından gözden geçirilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları, Target yazılımı üzerinden kontrol randevusunda değerlendirilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları, Connexx yazılımı üzerinden kontrol randevusunda incelenir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları, Compass GPS yazılımı üzerinden kontrol randevusunda değerlendirilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları, Smart Fit yazılımı üzerinden kontrol randevusunda incelenir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de aynı özenle kontrol randevusunda değerlendirilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
