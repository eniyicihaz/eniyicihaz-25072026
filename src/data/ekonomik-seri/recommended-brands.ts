// "Markalara Göre İnceleyin" section for the /segmentler/ekonomik-seri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. Oticon Ruby
// (explicitly tagged "Ekonomik Seri" in its own models.ts) and ReSound
// Key (tagged "Giriş Seviyesi") are named directly since the data
// verifies the claim; Phonak, Signia, Widex and NuEar are described
// generically since none of their models.ts data carries an explicit
// economy-tier tag.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ekonomikSeriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Ekonomik Seri Sunan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Ruby serisi, temel işitme ihtiyaçları için daha uygun fiyatlı bir seçenek sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın uygun fiyatlı seçenekleri, temel işitme ihtiyaçları için değerlendirilebilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın giriş seviyesi seçenekleri, temel kullanım ihtiyaçları için uygun bir başlangıç sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in uygun fiyatlı seçenekleri, temel işitme ihtiyaçları için değerlendirilebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Key serisi, giriş seviyesinde sade ve uygun fiyatlı bir seçenek sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri, ekonomik seri kapsamında sıkça değerlendirilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
