// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// yapay-zeka-destekli page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* feature page uses. All hrefs point to real,
// already-built /markalar/{slug} pages. "Intent" (Oticon) and "Nexia"
// (ReSound) are real, current-generation product lines genuinely marketed
// around deep neural network / AI-based sound processing — Intent is
// already used verbatim as this page's own hero image
// (public/images/oticon/models/intent.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yapayZekaDestekliRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yapay Zeka Destekli Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Intent ailesi, derin sinir ağı (DNN) teknolojisiyle BrainHearing® felsefesini bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın yapay zeka destekli aileleri, gelişmiş ses sınıflandırma teknolojisiyle ortama otomatik uyum sağlar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın yapay zeka destekli modelleri, gerçek zamanlı ses işleme teknolojisiyle doğal bir dinleme deneyimi sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in yapay zeka destekli modelleri, markanın doğal ses felsefesini akıllı ortam optimizasyonuyla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Nexia ailesi, yapay zeka destekli ses işleme teknolojisiyle öne çıkan bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve akıllı çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
