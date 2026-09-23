// "Markalara Göre İnceleyin" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own yetkili servis network — kept
// generic since specific service-center logistics vary and aren't
// independently verifiable per brand.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const teknikServisRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yetkili Teknik Servis Sunduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları için yetkili teknik servis ve orijinal yedek parça desteği sunulur.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları için yetkili teknik servis ve orijinal yedek parça desteği sunulur.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları için yetkili teknik servis ve orijinal yedek parça desteği sunulur.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları için yetkili teknik servis ve orijinal yedek parça desteği sunulur.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları için yetkili teknik servis ve orijinal yedek parça desteği sunulur.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de yetkili teknik servis kapsamında değerlendirilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
