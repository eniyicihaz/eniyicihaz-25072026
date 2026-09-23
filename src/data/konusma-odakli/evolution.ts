// "Yönlü Mikrofon Teknolojisinin Gelişimi" section for the /teknolojiler/
// konusma-odakli page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags), same technique the Gürültü Engelleme page's evolution.ts uses
// for its own technology timeline — here mapped onto the genuine
// progression from fixed omnidirectional pickup to today's AI-assisted
// speaker separation.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const konusmaOdakliEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Yönlü Mikrofon Teknolojisinin Gelişimi",
  intro: "Yönlü mikrofon teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü hassas konuşma odaklanmasına ulaştı.",
  stages: [
    {
      era: "Sabit Yönlü Mikrofonlar",
      whatItBrought: "İlk yönlü mikrofonlar, tüm yönlerden aynı hassasiyette ses alan omnidirectional yapıdan, öne doğru daha hassas sabit yönlü bir yapıya geçiş yaptı.",
      bestFor: "Temel yönlü odaklanma arayanlar",
      families: ["Sabit Yönlü Modeller"],
    },
    {
      era: "Adaptif Yönlü Mikrofon Sistemleri",
      whatItBrought: "Cihazlar, sesin geldiği yönü gerçek zamanlı analiz ederek odaklanma yönünü otomatik olarak ayarlamaya başladı.",
      bestFor: "Değişken ortamlarda otomatik uyum isteyenler",
      families: ["Adaptif Yönlü Modeller"],
    },
    {
      era: "Binaural Senkronize Yönlü Sistemler",
      whatItBrought: "Sağ ve sol cihaz kablosuz olarak iletişim kurarak sesin geldiği yönü iki kulaktan gelen veriyle birlikte daha hassas belirlemeye başladı.",
      bestFor: "Çift taraflı cihaz kullanan, maksimum yön hassasiyeti isteyenler",
      families: ["Binaural Senkronize Modeller"],
    },
    {
      era: "Yapay Zeka Destekli Konuşma Odaklanması",
      whatItBrought: "Derin öğrenme tabanlı algoritmalar, birden fazla konuşmacı arasından hedef konuşmayı daha isabetli bir şekilde ayırt etmeyi hedefliyor.",
      bestFor: "En güncel konuşma odaklanma teknolojisini isteyenler",
      families: ["Yapay Zeka Destekli Üst Segment Modeller"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
