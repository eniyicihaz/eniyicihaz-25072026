// "Markalara Göre İnceleyin" section for the /degerlendirme/
// cocuk-isitme-testi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages.
// Oticon (Play PX, Xceed Play) and Phonak (Sky) are named directly since
// their own models.ts data explicitly tags these as "Çocuk" families;
// Signia, Widex, ReSound and NuEar are described generically since none
// carry an explicit pediatric-tier tag in their data.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocukIsitmeTestiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Çocuklar İçin Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Play PX ve Xceed Play serisi, çocukların günlük işitme ihtiyaçlarına özel olarak geliştirilmiştir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Sky serisi, çocuk kullanıcıların ihtiyaçlarına göre geliştirilmiş pediatrik bir model ailesidir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın modelleri, çocuk kullanıcılar için de odyometrist eşliğinde değerlendirilebilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in modelleri, çocuk kullanıcılar için de odyometrist eşliğinde değerlendirilebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un modelleri, çocuk kullanıcılar için de odyometrist eşliğinde değerlendirilebilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri, çocuk kullanıcılar için de değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
