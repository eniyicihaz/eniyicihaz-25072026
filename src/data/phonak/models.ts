// Product family showcase for the Phonak brand page (/markalar/phonak) —
// see PHONAK MASTER BLUEPRINT §6.7. Renders through the shared
// BrandPageModels component, including its feature-badge system
// (Bluetooth/Şarjlı/Kulak İçi/RIC/Power/Çocuk/Tek Taraflı).
//
// Gerçek Phonak ürün fotoğrafları eklendi (bkz. public/images/phonak/models/).
// Bolero için henüz sağlanmış bir fotoğraf yok; o alan geçici olarak marka
// logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const phonakModels: BrandPageModelsContent = {
  badge: "PHONAK MODELLERİ",
  heading: "Phonak Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Phonak modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "audeo",
      category: "Kulak Arkası (RIC)",
      name: "Phonak Audéo",
      description: "Phonak'ın en yaygın tercih edilen, kulak arkası yerleşimli genel kullanım ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/audeo.webp",
    },
    {
      slug: "naida",
      category: "Güçlü Kayıplar",
      name: "Phonak Naída",
      description: "İleri ve çok ileri derece işitme kayıpları için güçlendirilmiş model ailesi.",
      tags: ["Power", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/naida.webp",
    },
    {
      slug: "sky",
      category: "Çocuk",
      name: "Phonak Sky",
      description: "Çocuk kullanıcıların ihtiyaçlarına göre geliştirilmiş pediatrik model ailesi.",
      tags: ["Çocuk", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/sky.webp",
    },
    {
      slug: "bolero",
      category: "Kulak Arkası (BTE)",
      name: "Phonak Bolero",
      description: "Klasik kulak arkası yerleşimiyle geniş güç aralığı sunan model ailesi.",
      tags: ["BTE", "Bluetooth", "Pilli"],
      image: "/images/brands/phonak-logo-seffaf.webp",
    },
    {
      slug: "virto",
      category: "Kulak İçi",
      name: "Phonak Virto",
      description: "Kişiye özel üretilen, kulak içi yerleşimli model ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/phonak/models/virto.webp",
    },
    {
      slug: "cros",
      category: "Tek Taraflı İşitme Kaybı",
      name: "Phonak CROS",
      description: "Tek kulakta işitme kaybı yaşayan kullanıcılar için özel sistem.",
      tags: ["Tek Taraflı", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/cros.webp",
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorHoverBorder: "rgb(14 165 233 / 0.5)",
  accentColorGlow: "rgb(14 165 233 / 0.14)",
  accentColorFocus: "rgb(14 165 233 / 0.35)",
};
