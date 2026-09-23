// Product family showcase for the Rexton brand page (/markalar/rexton).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Reach", "BiCore" and "MCore" are real Rexton
// product family names, sourced directly from the brand's own product
// photography provided for this project.
//
// Gerçek Rexton ürün fotoğrafları eklendi (bkz.
// public/images/rexton/models/) — dört model için de kaynakta fotoğraf
// mevcuttu; hiçbir slug placeholder'da kalmadı.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const rextonModels: BrandPageModelsContent = {
  badge: "REXTON MODELLERİ",
  heading: "Rexton Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Rexton modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "reach",
      category: "Güncel Nesil",
      name: "Rexton Reach",
      description: "Markanın en güncel bağlantı özelliklerini taşıyan, öne çıkan ürün ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/rexton/models/reach.webp",
    },
    {
      slug: "bicore",
      category: "Dengeli Segment",
      name: "Rexton BiCore",
      description: "Dengeli bir ses işleme deneyimi sunan işlemci ailesi.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/rexton/models/bicore.webp",
    },
    {
      slug: "mcore",
      category: "Giriş Segmenti",
      name: "Rexton MCore",
      description: "Temel işitme ihtiyaçları için sade bir işleme yaklaşımı sunan giriş seviyesi aile.",
      tags: ["BTE"],
      image: "/images/rexton/models/mcore.webp",
    },
    {
      slug: "bicore-ite",
      category: "Kulak İçi (BiCore Ailesi)",
      name: "Rexton BiCore ITE",
      description: "BiCore ailesinin kulak içi yerleşimli, kişiye özel üretilen varyantı.",
      tags: ["Kulak İçi"],
      image: "/images/rexton/models/bicore-ite.webp",
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorHoverBorder: "rgb(199 151 18 / 0.5)",
  accentColorGlow: "rgb(199 151 18 / 0.14)",
  accentColorFocus: "rgb(199 151 18 / 0.35)",
};
