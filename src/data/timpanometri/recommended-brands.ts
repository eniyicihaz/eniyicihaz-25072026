// "Markalara Göre İnceleyin" section for the /degerlendirme/
// timpanometri page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// reframed as "what might be recommended after a comprehensive
// evaluation" rather than a specific device-family or tier fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const timpanometriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kapsamlı Değerlendirme Sonrası Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Timpanometri ve odyometri sonuçlarınıza göre, Oticon'un farklı modelleri değerlendirilebilir.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak'ın geniş ürün yelpazesi, kapsamlı değerlendirme sonrası farklı ihtiyaçlara uygun seçenekler sunar.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound'un modelleri, kapsamlı değerlendirme sonrası farklı seçenekler sunar.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri, değerlendirme sonrası bütçe dostu bir alternatif olabilir.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
