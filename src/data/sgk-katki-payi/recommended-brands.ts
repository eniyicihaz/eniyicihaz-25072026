// "Markalara Göre İnceleyin" section for the /sgk/katki-payi page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses. Framed around the
// fact that SGK support applies identically regardless of brand
// (marka bağımsız), avoiding any per-brand figure claims.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sgkKatkiPayiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "SGK Destekli Alımda Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "SGK desteği, anlaşmalı merkezimizden alınan Oticon modellerinde de geçerlidir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "SGK desteği, anlaşmalı merkezimizden alınan Phonak modellerinde de geçerlidir.",
      href: "/markalar/phonak",
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
      label: "ReSound",
      description: "SGK desteği, anlaşmalı merkezimizden alınan ReSound modellerinde de geçerlidir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Bütçe dostu bir seçenek arıyorsanız, SGK destekli NuEar modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
