// Product family showcase for the Signia brand page (/markalar/signia) —
// see SIGNIA MASTER BLUEPRINT §9.7. Renders through the shared
// BrandPageModels component, including its feature-badge system.
//
// Gerçek Signia ürün fotoğrafları eklendi (bkz. public/images/signia/models/).
// Motion için henüz sağlanmış bir fotoğraf yok; o alan geçici olarak marka
// logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const signiaModels: BrandPageModelsContent = {
  badge: "SIGNIA MODELLERİ",
  heading: "Signia Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Signia modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "styletto",
      category: "Modern RIC",
      name: "Signia Styletto",
      description: "İnce, moda odaklı tasarımıyla öne çıkan kulak arkası model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/signia/models/styletto.webp",
    },
    {
      slug: "pure",
      category: "Genel Kullanım (RIC)",
      name: "Signia Pure",
      description: "Signia'nın en yaygın tercih edilen genel kullanım ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/signia/models/pure.webp",
    },
    {
      slug: "insio",
      category: "Kulak İçi",
      name: "Signia Insio",
      description: "Kişiye özel üretilen, kulak içi yerleşimli model ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/signia/models/insio.webp",
    },
    {
      slug: "silk",
      category: "Kalıpsız Kulak İçi",
      name: "Signia Silk",
      description: "Kalıp almaya gerek duymadan hızlı kullanım sunan kulak içi ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/signia/models/silk.webp",
    },
    {
      slug: "active",
      category: "Aktif Yaşam",
      name: "Signia Active",
      description: "Kulaklık benzeri, spor ve aktif kullanım için tasarlanmış model ailesi.",
      tags: ["Bluetooth", "Şarjlı"],
      image: "/images/signia/models/active.webp",
    },
    {
      slug: "motion",
      category: "Kulak Arkası (BTE)",
      name: "Signia Motion",
      description: "Geniş güç aralığı sunan klasik kulak arkası model ailesi.",
      tags: ["BTE", "Bluetooth", "Pilli"],
      image: "/images/brands/signia-logo-seffaf.webp",
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B). Glow kept
  // subtle (0.14) per the brief's "hiçbir yerde büyük glow" rule.
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorHoverBorder: "rgb(178 31 75 / 0.5)",
  accentColorGlow: "rgb(178 31 75 / 0.14)",
  accentColorFocus: "rgb(178 31 75 / 0.35)",
};
