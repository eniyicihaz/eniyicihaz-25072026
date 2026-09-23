// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// gurultu-engelleme page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gurultuEngellemeRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Gürültü Engelleme Teknolojisiyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un gürültü azaltma teknolojisi, BrainHearing® felsefesiyle gürültülü ortamlarda dinleme çabasını azaltmayı hedefler.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın gelişmiş gürültü engelleme aileleri, rüzgar ve sabit gürültüye karşı güçlü bir koruma sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın gürültü azaltma teknolojisi, gerçek zamanlı sinyal işlemeyle dinleme konforunu artırmayı hedefler.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in gürültü azaltma modelleri, markanın doğal ses felsefesini rahatsız edici seslerin azaltılmasıyla bir araya getirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un gürültü azaltma aileleri, gürültülü ortamlarda sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve etkili gürültü azaltma çözümleri arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
