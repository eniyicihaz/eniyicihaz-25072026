// "Markalara Göre İnceleyin" section for the /sgk/yenileme-hakki page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses. Framed around the
// fact that renewal support applies identically regardless of the
// brand ultimately chosen (marka bağımsız).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yenilemeHakkiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yenileme Hakkınızla Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Yenileme hakkınızla SGK destekli Oticon modellerini değerlendirebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Yenileme hakkınızla SGK destekli Phonak modellerini değerlendirebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Widex",
      description: "Yenileme hakkınızla SGK destekli Widex modellerini değerlendirebilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "Yenileme hakkınızla SGK destekli ReSound modellerini değerlendirebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Signia",
      description: "Yenileme hakkınızla SGK destekli Signia modellerini değerlendirebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "MAICO",
      description: "Bütçe dostu bir seçenek arıyorsanız, SGK destekli MAICO modelleri değerlendirilebilir.",
      href: "/markalar/maico",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
