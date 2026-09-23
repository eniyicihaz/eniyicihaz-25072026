// "Markalara Göre İnceleyin" section for the /blog/uzman-gorusleri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzmanGorusleriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Doğru Bilgiyle Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Doğru bilgiyle karar verdikten sonra Oticon modellerini değerlendirebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Doğru bilgiyle karar verdikten sonra Phonak modellerini değerlendirebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Bernafon",
      description: "Doğru bilgiyle karar verdikten sonra Bernafon modellerini değerlendirebilirsiniz.",
      href: "/markalar/bernafon",
    },
    {
      label: "Signia",
      description: "Doğru bilgiyle karar verdikten sonra Signia modellerini değerlendirebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "ReSound",
      description: "Doğru bilgiyle karar verdikten sonra ReSound modellerini değerlendirebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Beltone",
      description: "Bütçe dostu bir seçenek arıyorsanız, Beltone modelleri değerlendirilebilir.",
      href: "/markalar/beltone",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
