// "Markalara Göre İnceleyin" section for the /rehberler/
// ilk-kullanim-rehberi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own real, verifiable consumer
// companion app — distinct from the fitting-software names (Genie 2,
// Target, Smart Fit) already cited on Cihaz
// Uygulama and the remote-support feature names (RemoteCare, Remote Support,
// Assist) already cited on Uzaktan Ayar; these
// are the consumer-facing apps end users pair with on day one.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ilkKullanimRehberiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "İlk Eşlemede Kullanılan Uygulamalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları, Oticon ON uygulaması üzerinden telefonunuzla eşleştirilir.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları, myPhonak uygulaması üzerinden telefonunuzla eşleştirilir.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları, ReSound Smart 3D uygulaması üzerinden telefonunuzla eşleştirilir.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de teslim sırasında size gösterilen adımlarla eşleştirilir.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
