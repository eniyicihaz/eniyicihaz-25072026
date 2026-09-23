// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// uzun-omurlu-cihazlar page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around component quality/durability language rather than
// device-family fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzunOmurluCihazlarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Uzun Ömürlü Kullanım İçin Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un kaliteli bileşenleri ve uzun vadeli yazılım desteği, cihazların uzun yıllar güvenilir çalışmasına katkı sağlar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın dayanıklı yapısı ve geniş yedek parça ağı, uzun ömürlü kullanım için tercih edilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın kaliteli üretim standartları, cihazların uzun süre performansını korumasına yardımcı olur.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in sağlam yapısı ve düzenli yazılım güncellemeleri, uzun ömürlü bir kullanım deneyimi sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un orijinal yedek parça desteği, cihazların uzun yıllar bakımlı kalmasına imkan tanır.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de aynı kalite standartlarıyla üretilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
