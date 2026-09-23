// Product family showcase for the Audifon brand page (/markalar/audifon).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "rega", "sino" and "Sueno Pro" are real,
// documented Audifon product family names — verified via audifon.com.
//
// Gerçek Audifon ürün fotoğrafları eklendi (bkz.
// public/images/audifon/models/) — yalnızca kategori adıyla eşleşen genel
// çekimler mevcuttu ("kulak arkası" → rega R, "kulak içi" → sino S).
// sino P, sino R ve Sueno Pro için henüz sağlanmış model-özel fotoğraf
// yok; bu alanlar geçici olarak marka logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const audifonModels: BrandPageModelsContent = {
  badge: "AUDIFON MODELLERİ",
  heading: "Audifon Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Audifon modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "rega-r",
      category: "Üst Segment (Kulak Arkası)",
      name: "Audifon rega R",
      description: "Cosma Chip Technology tabanlı, 18 kanala kadar WDRC işleme sunan üst segment model.",
      tags: ["RITE", "Bluetooth"],
      image: "/images/audifon/models/rega-r.webp",
    },
    {
      slug: "sino-s",
      category: "Kulak İçi (ITE)",
      name: "Audifon sino S",
      description: "10k HD Sound ve 9 kanala kadar WDRC işleme sunan, kulak içi yerleşimli model.",
      tags: ["Kulak İçi"],
      image: "/images/audifon/models/sino-s.webp",
    },
    {
      slug: "sino-p",
      category: "Orta Segment (Güçlü)",
      name: "Audifon sino P",
      description: "Orta ve ileri derece işitme kayıpları için değerlendirilebilecek, güçlü bir sino ailesi modeli.",
      tags: ["BTE"],
      image: "/images/brands/audifon-logo-seffaf.webp",
    },
    {
      slug: "sino-r",
      category: "Orta Segment (RITE)",
      name: "Audifon sino R",
      description: "Dengeli bir fiyat-performans sunan, kulak arkası yerleşimli sino ailesi modeli.",
      tags: ["RITE"],
      image: "/images/brands/audifon-logo-seffaf.webp",
    },
    {
      slug: "sueno-pro",
      category: "Tinnitus'a Özel",
      name: "Audifon Sueno Pro",
      description: "İşitme kaybı ile tinnitus'u aynı cihazda birlikte ele alan, kişiselleştirilebilir maskeleme çözümü.",
      tags: ["Tinnitus", "RITE/ITE"],
      image: "/images/brands/audifon-logo-seffaf.webp",
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorHoverBorder: "rgb(226 0 26 / 0.5)",
  accentColorGlow: "rgb(226 0 26 / 0.14)",
  accentColorFocus: "rgb(226 0 26 / 0.35)",
};
