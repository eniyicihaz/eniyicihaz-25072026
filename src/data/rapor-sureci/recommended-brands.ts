// "Markalara Göre İnceleyin" section for the /sgk/rapor-sureci page.
// Reuses the shared BrandPageRelatedContent component as a brand-link
// showcase, same technique every prior page uses. Framed around the
// fact that the report/reçete process is identical regardless of the
// brand ultimately chosen (marka bağımsız).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const raporSureciRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Raporunuz Onaylandıktan Sonra Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Raporunuz onaylandıktan sonra SGK destekli Oticon modellerini değerlendirebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Raporunuz onaylandıktan sonra SGK destekli Phonak modellerini değerlendirebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Raporunuz onaylandıktan sonra SGK destekli Signia modellerini değerlendirebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Raporunuz onaylandıktan sonra SGK destekli Widex modellerini değerlendirebilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "Raporunuz onaylandıktan sonra SGK destekli ReSound modellerini değerlendirebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Rexton",
      description: "Bütçe dostu bir seçenek arıyorsanız, SGK destekli Rexton modelleri değerlendirilebilir.",
      href: "/markalar/rexton",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
