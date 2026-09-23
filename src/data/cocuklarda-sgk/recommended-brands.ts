// "Markalara Göre İnceleyin" section for the /sgk/cocuklarda-sgk page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses. Highlights brands
// with genuine pediatric-oriented product lines (e.g. Oticon Play,
// Phonak Sky) where accurate, while noting SGK support itself is
// brand-independent.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocuklardaSgkRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Çocuklar İçin Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Play serisi, çocuklara özel olarak geliştirilmiş modelleri kapsar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Sky serisi, çocuklara özel olarak geliştirilmiş modelleri kapsar.",
      href: "/markalar/phonak",
    },
    {
      label: "ReSound",
      description: "SGK desteği, anlaşmalı merkezimizden alınan ReSound modellerinde de geçerlidir.",
      href: "/markalar/resound",
    },
    {
      label: "Signia",
      description: "SGK desteği, anlaşmalı merkezimizden alınan Signia modellerinde de geçerlidir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "SGK desteği, anlaşmalı merkezimizden alınan Widex modellerinde de geçerlidir.",
      href: "/markalar/widex",
    },
    {
      label: "Vista",
      description: "Bütçe dostu bir seçenek arıyorsanız, SGK destekli Vista modelleri değerlendirilebilir.",
      href: "/markalar/vista",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
