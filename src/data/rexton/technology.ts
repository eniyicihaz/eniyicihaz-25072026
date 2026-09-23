// Technology teaser grid for the Rexton brand page (/markalar/rexton).
// Renders through the shared BrandPageTechnology component. "Reach",
// "BiCore" and "MCore" are real, documented Rexton product family names
// — sourced directly from the brand's own product photography provided
// for this project and corroborated by independent hearing-aid review
// sources.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const rextonTechnology: BrandPageTechnologyContent = {
  badge: "REXTON TEKNOLOJİLERİ",
  heading: "Rexton'u Farklı Kılan Teknolojiler",
  intro: "Rexton'ın işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "REACH",
      title: "Reach Bağlantı Teknolojisi",
      description: "Markanın en güncel bağlantı özelliklerini taşıyan ürün ailesi.",
    },
    {
      label: "BICORE",
      title: "BiCore İşlemci Ailesi",
      description: "Dengeli bir ses işleme deneyimi sunan işlemci ailesi.",
    },
    {
      label: "MCORE",
      title: "MCore İşlemci Ailesi",
      description: "Temel işitme ihtiyaçları için sade bir işleme yaklaşımı sunan aile.",
    },
    {
      label: "FIT",
      title: "Kulak İçi Seçenekler",
      description: "Kulak kanalına özel üretilen, kulak içi yerleşimli model seçenekleri sunar.",
    },
    {
      label: "DE",
      title: "Alman Mühendisliği",
      description: "1955'ten bu yana süregelen bir Alman işitme cihazı mühendisliği geleneği.",
    },
    {
      label: "WSA",
      title: "WS Audiology Altyapısı",
      description: "Signia ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorHoverBorder: "rgb(199 151 18 / 0.5)",
};
