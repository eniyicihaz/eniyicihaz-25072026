// Product family showcase for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared BrandPageModels
// component, including its feature-badge system. "Mood", "Quix" and
// "Stiline" are real Audio Service product family names, sourced directly
// from the brand's own product photography provided for this project.
//
// Gerçek Audio Service ürün fotoğrafları eklendi (bkz.
// public/images/audio-service/models/) — beş model için de kaynakta
// fotoğraf mevcuttu; hiçbir slug placeholder'da kalmadı.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const audioServiceModels: BrandPageModelsContent = {
  badge: "AUDIO SERVICE MODELLERİ",
  heading: "Audio Service Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Audio Service modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "stiline",
      category: "Stil Odaklı Seri",
      name: "Audio Service Stiline",
      description: "Markanın stil odaklı, tasarım ve günlük kullanımı bir arada sunan öne çıkan ailesi.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/audio-service/models/stiline.webp",
    },
    {
      slug: "mood",
      category: "Dengeli Seri",
      name: "Audio Service Mood",
      description: "Günlük kullanım için dengeli bir işitme çözümü sunan ürün ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/audio-service/models/mood.webp",
    },
    {
      slug: "quix",
      category: "Erişilebilir Seri",
      name: "Audio Service Quix",
      description: "Pratik ve erişilebilir bir fiyat noktasında işitme çözümü sunan ürün ailesi.",
      tags: ["RIC"],
      image: "/images/audio-service/models/quix.webp",
    },
    {
      slug: "custom-ite",
      category: "Kulak İçi (Kişiye Özel)",
      name: "Audio Service Kulak İçi Serisi",
      description: "Kulak kalıbınıza özel üretilen, kulak kanalı içinde neredeyse görünmez model.",
      tags: ["Kulak İçi", "Kişiye Özel"],
      image: "/images/audio-service/models/custom-ite.webp",
    },
    {
      slug: "sarjli",
      category: "Şarjlı Seri",
      name: "Audio Service Şarjlı Serisi",
      description: "Lityum-iyon şarjlı sistemle günlük kullanım için pratik bir çözüm sunar.",
      tags: ["Şarjlı", "RIC"],
      image: "/images/audio-service/models/sarjli.webp",
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorHoverBorder: "rgb(18 64 160 / 0.5)",
  accentColorGlow: "rgb(18 64 160 / 0.14)",
  accentColorFocus: "rgb(18 64 160 / 0.35)",
};
