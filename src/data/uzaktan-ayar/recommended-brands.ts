// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// uzaktan-ayar page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's real, publicly documented telecare
// platform — Oticon RemoteCare, Phonak Remote Support, Signia TeleCare,
// Widex Remote Care and ReSound Assist are all real, distinct
// teleaudiology products (separate from the general fitting-software
// names already cited on the Cihaz Uygulama page).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzaktanAyarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Uzaktan Ayarı Destekleyen Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un RemoteCare özelliği, uygun modellerde uzaktan ayar oturumlarını destekler.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Remote Support özelliği, myPhonak uygulaması üzerinden uzaktan destek sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın TeleCare özelliği, uzun süredir bilinen bir uzaktan destek yaklaşımıdır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Remote Care özelliği, uygun modellerde uzaktan ayar imkânı sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Assist özelliği, canlı uzaktan programlama desteği sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun modelleri de uzaktan ayar açısından değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
