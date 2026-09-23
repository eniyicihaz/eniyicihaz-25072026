// "Gürültü Engelleme Teknolojisinin Gelişimi" section for the
// /teknolojiler/gurultu-engelleme page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags), same technique the Yapay Zeka
// Destekli page's evolution.ts uses for its own technology timeline —
// here mapped onto the genuine progression from single-channel noise
// reduction to today's AI-assisted noise classification.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const gurultuEngellemeEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Gürültü Engelleme Teknolojisinin Gelişimi",
  intro: "Gürültü engelleme teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü hassas gürültü kontrolüne ulaştı.",
  stages: [
    {
      era: "Tek Kanallı Basit Gürültü Azaltma",
      whatItBrought: "İlk nesil dijital cihazlar, tüm frekans aralığını tek bir kanal olarak işleyerek basit düzeyde gürültü azaltma sağlardı.",
      bestFor: "Teknolojinin başlangıç dönemi",
      families: ["Temel Dijital Cihazlar"],
    },
    {
      era: "Çok Kanallı Gürültü Azaltma",
      whatItBrought: "Ses frekans aralığı birden fazla kanala bölünerek her kanalda ayrı gürültü analizi yapılmaya başlandı; bu da daha hassas azaltma sağladı.",
      bestFor: "Orta düzey gürültü kontrolü arayanlar",
      families: ["Çok Kanallı Modeller"],
    },
    {
      era: "Sahne Tabanlı Adaptif Gürültü Azaltma",
      whatItBrought: "Cihazlar, bulunulan ortamı (restoran, trafik, ofis gibi) tanıyarak gürültü azaltma yoğunluğunu otomatik ayarlamaya başladı.",
      bestFor: "Değişken ortamlarda otomatik uyum isteyenler",
      families: ["Sahne Tabanlı Adaptif Modeller"],
    },
    {
      era: "Yapay Zeka Destekli Gürültü Sınıflandırma",
      whatItBrought: "Derin öğrenme tabanlı algoritmalar, gürültü türünü çok daha hassas bir şekilde ayırt ederek konuşmayı koruyarak gürültüyü azaltmayı hedefliyor.",
      bestFor: "En güncel gürültü kontrolü teknolojisini isteyenler",
      families: ["Yapay Zeka Destekli Üst Segment Modeller"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
