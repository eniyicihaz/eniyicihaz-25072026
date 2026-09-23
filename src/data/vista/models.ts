// Product family showcase for the Vista brand page (/markalar/vista).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Vista V" and "Vista B" are real, documented
// Sonova/Vista tier names — verified via independent hearing-aid
// pricing/review sources.
//
// Gerçek Vista ürün fotoğrafları eklendi (bkz.
// public/images/vista/models/) — dört model için de kaynakta fotoğraf
// mevcuttu; hiçbir slug placeholder'da kalmadı.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const vistaModels: BrandPageModelsContent = {
  badge: "VISTA MODELLERİ",
  heading: "Vista Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Vista modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "vista-v",
      category: "Üst Kademe",
      name: "Vista V",
      description: "Soundsuite OS'un sunduğu en kapsamlı özellik setini ve Bluetooth bağlantısını taşıyan üst kademe model.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/vista/models/vista-v.webp",
    },
    {
      slug: "vista-b",
      category: "Orta Kademe",
      name: "Vista B",
      description: "Dengeli bir teknoloji seviyesi ve fiyat-performans sunan, kulak arkası yerleşimli orta kademe model.",
      tags: ["BTE/RIC"],
      image: "/images/vista/models/vista-b.webp",
    },
    {
      slug: "vista-t",
      category: "Şarjlı Seri",
      name: "Vista T",
      description: "Lityum-iyon şarjlı sistemle günlük kullanım için pratik bir çözüm sunar.",
      tags: ["Şarjlı", "RIC"],
      image: "/images/vista/models/vista-t.webp",
    },
    {
      slug: "vista-ic",
      category: "Kulak İçi (Görünmez)",
      name: "Vista IC",
      description: "Kulak kanalı içinde neredeyse görünmez bir yerleşim sunan, kişiye özel üretilen model.",
      tags: ["Kulak İçi", "Kişiye Özel"],
      image: "/images/vista/models/vista-ic.webp",
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorHoverBorder: "rgb(232 93 10 / 0.5)",
  accentColorGlow: "rgb(232 93 10 / 0.14)",
  accentColorFocus: "rgb(232 93 10 / 0.35)",
};
