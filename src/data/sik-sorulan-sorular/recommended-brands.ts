// "Markalara Göre İnceleyin" section for the /blog/sik-sorulan-sorular
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sikSorulanSorularRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Merak Ettiğiniz Markaları İnceleyin",
  links: [
    {
      label: "Oticon",
      description: "Oticon markası hakkında sıkça sorulan sorulara kendi sayfasında ulaşabilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak markası hakkında sıkça sorulan sorulara kendi sayfasında ulaşabilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia markası hakkında sıkça sorulan sorulara kendi sayfasında ulaşabilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex markası hakkında sıkça sorulan sorulara kendi sayfasında ulaşabilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound markası hakkında sıkça sorulan sorulara kendi sayfasında ulaşabilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Tüm Markalar",
      description: "İşitme cihazı markalarının tamamını tek sayfada inceleyebilirsiniz.",
      href: "/markalar",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
