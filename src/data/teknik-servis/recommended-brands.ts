// "Markalara Göre İnceleyin" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Kept generic: maintenance and technical support options per brand,
// with no authorization, service-network or per-brand scope claim.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const teknikServisRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Teknik Destek İçin Bilgi Alabileceğiniz Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları için bakım ve teknik destek seçenekleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları için bakım ve teknik destek seçenekleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları için bakım ve teknik destek seçenekleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar cihazları için bakım ve teknik destek seçenekleri hakkında bilgi alabilirsiniz.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
