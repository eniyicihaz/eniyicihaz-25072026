// "Technology Evolution" content for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageTechEvolution component. Editorial, not a technical
// platform-name table. "Mood", "Quix" and "Stiline" are real, documented
// Audio Service product family names — verified via the source product
// photography and independent distributor listings.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const audioServicePlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Audio Service Ürün Ailesi Nasıl Yapılandırılıyor?",
  intro: "Platform isimlerini ezberlemenize gerek yok — hangi ailenin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Stiline Ailesi",
      whatItBrought: "Markanın stil odaklı, öne çıkan ürün ailelerinden biri.",
      bestFor: "Tasarım ve günlük kullanım dengesini önceliklendirenler",
      families: ["Stiline"],
    },
    {
      era: "Mood Ailesi",
      whatItBrought: "Günlük kullanım için dengeli bir işitme çözümü.",
      bestFor: "Dengeli bir fiyat-performans arayanlar",
      families: ["Mood"],
    },
    {
      era: "Quix Ailesi",
      whatItBrought: "Pratik ve erişilebilir bir işitme çözümü.",
      bestFor: "Erişilebilir fiyat noktası önceliğiniz ise",
      families: ["Quix"],
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
};
