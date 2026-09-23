// "Markalara Göre İnceleyin" section for the /rehberler/
// cihaz-secim-rehberi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed generically as the starting point for brand-by-brand
// comparison during the selection process.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazSecimRehberiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Seçim Sürecinde Karşılaştırabileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Seçim sürecinde Oticon'un geniş model yelpazesini inceleyebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Seçim sürecinde Phonak'ın geniş model yelpazesini inceleyebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Seçim sürecinde Signia'nın geniş model yelpazesini inceleyebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Seçim sürecinde Widex'in geniş model yelpazesini inceleyebilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "Seçim sürecinde ReSound'un geniş model yelpazesini inceleyebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Bütçe dostu bir seçenek arıyorsanız, NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
