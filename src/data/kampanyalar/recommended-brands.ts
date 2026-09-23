// "Markalara Göre İnceleyin" section for the /blog/kampanyalar page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses. Framed generally,
// without claiming any brand currently has an active campaign.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kampanyalarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kampanya Kapsamında Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Kampanya döneminde Oticon modellerini değerlendirebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Kampanya döneminde Phonak modellerini değerlendirebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Kampanya döneminde Signia modellerini değerlendirebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "ReSound",
      description: "Kampanya döneminde ReSound modellerini değerlendirebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Audio Service",
      description: "Kampanya döneminde Audio Service modellerini değerlendirebilirsiniz.",
      href: "/markalar/audio-service",
    },
    {
      label: "Tüm Markalar",
      description: "İşitme cihazı markalarının tamamını tek sayfada inceleyebilirsiniz.",
      href: "/markalar",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
