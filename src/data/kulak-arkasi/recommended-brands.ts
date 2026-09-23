// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// kulak-arkasi-bte page. Reuses the shared BrandPageRelatedContent
// component (label + description + href card grid) as a brand-link
// showcase instead of internal-linking cards — a better fit than
// BrandPageModels, which is built for one brand's own device lineup
// (per-product slug/tags/photo), not for six different brands' logos.
// All hrefs point to real, already-built /markalar/{slug} pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kulakArkasiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kulak Arkası (BTE) Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "BrainHearing® teknolojisiyle geliştirilen güçlü BTE ve RIC modelleri.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Roger ekosistemi ve evrensel Bluetooth bağlantılı BTE modelleri.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Yapay zekâ destekli kişiselleştirme sunan BTE ve RIC aileleri.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Doğal ses felsefesiyle geliştirilen ince RIC ve güçlü BTE seçenekleri.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "Geniş güç aralığı sunan BTE modelleriyle ileri derece kayıplarda sıkça değerlendirilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir BTE çözümleri arayanlar için değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
