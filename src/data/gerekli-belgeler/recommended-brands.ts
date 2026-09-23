// "Markalara Göre İnceleyin" section for the /sgk/gerekli-belgeler
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. Framed
// around the fact that document requirements are identical regardless
// of the brand ultimately chosen (marka bağımsız).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gerekliBelgelerRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Belgeleriniz Tamamlandıktan Sonra Değerlendirebileceğiniz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Belgeleriniz tamamlandıktan sonra SGK destekli Oticon modellerini değerlendirebilirsiniz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Belgeleriniz tamamlandıktan sonra SGK destekli Phonak modellerini değerlendirebilirsiniz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Belgeleriniz tamamlandıktan sonra SGK destekli Signia modellerini değerlendirebilirsiniz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Belgeleriniz tamamlandıktan sonra SGK destekli Widex modellerini değerlendirebilirsiniz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "Belgeleriniz tamamlandıktan sonra SGK destekli ReSound modellerini değerlendirebilirsiniz.",
      href: "/markalar/resound",
    },
    {
      label: "Audio Service",
      description: "Bütçe dostu bir seçenek arıyorsanız, SGK destekli Audio Service modelleri değerlendirilebilir.",
      href: "/markalar/audio-service",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
