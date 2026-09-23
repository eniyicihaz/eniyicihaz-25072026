// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// cihaz-uygulama page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own real, verifiable fitting-software
// name — Oticon Genie 2, Phonak Target, Signia Connexx, Widex Compass
// GPS and ReSound Smart Fit are all real, publicly documented
// professional fitting platforms; NuEar is described generically since
// no single public fitting-software name is verifiable for it.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazUygulamaRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Uygulama Sürecinde Kullanılan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları, Genie 2 yazılımıyla odyogramınıza göre programlanır.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları, Target yazılımıyla odyogramınıza göre programlanır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları, Connexx yazılımıyla odyogramınıza göre programlanır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları, Compass GPS yazılımıyla odyogramınıza göre programlanır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları, Smart Fit yazılımıyla odyogramınıza göre programlanır.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de aynı özenle odyogramınıza göre programlanır.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
