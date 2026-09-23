// "Markalara Göre İnceleyin" section for the /blog/etkinlikler page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const etkinliklerRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Etkinliklerimizde Tanıtabileceğimiz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Etkinliklerimizde Oticon modelleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Etkinliklerimizde Phonak modelleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Etkinliklerimizde Signia modelleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "ReSound",
      description: "Etkinliklerimizde ReSound modelleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Vista",
      description: "Etkinliklerimizde Vista modelleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/vista",
    },
    {
      label: "Tüm Markalar",
      description: "İşitme cihazı markalarının tamamını tek sayfada inceleyebilirsiniz.",
      href: "/markalar",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
