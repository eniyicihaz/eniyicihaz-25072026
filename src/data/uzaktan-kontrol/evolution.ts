// "Uzaktan Kontrol Teknolojisinin Gelişimi" section for the
// /teknolojiler/uzaktan-kontrol page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags), same technique the Şarjlı
// Teknolojiler page's evolution.ts uses for its own technology timeline —
// here mapped onto the genuine progression from physical remotes through
// today's AI-assisted remote-support suggestions.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const uzaktanKontrolEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Uzaktan Kontrol Teknolojisinin Gelişimi",
  intro: "Uzaktan kontrol teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü uzaktan destek deneyimine ulaştı.",
  stages: [
    {
      era: "Fiziksel Uzaktan Kumandalar",
      whatItBrought: "İlk uzaktan kontrol çözümleri, ses seviyesi ve program değişikliği yapmayı sağlayan basit, ayrı fiziksel kumandalardı.",
      bestFor: "Akıllı telefon kullanmayan kullanıcılar",
      families: ["Fiziksel Uzaktan Kumandalı Modeller"],
    },
    {
      era: "Akıllı Telefon Uygulamaları",
      whatItBrought: "Cihazlar Bluetooth ile telefona bağlanmaya başladıkça, ayarlar ayrı bir kumanda yerine akıllı telefon uygulaması üzerinden yapılabilir hâle geldi.",
      bestFor: "Uygulama üzerinden kolay ayar isteyenler",
      families: ["Uygulama Kontrollü Modeller"],
    },
    {
      era: "Uzaktan Destek (TeleCare / TeleAudiology)",
      whatItBrought: "Video görüşme teknolojisiyle entegre çalışan uzaktan destek özellikleri, odyometristin cihaz ayarlarını kliniğe gelmeden güncellemesini mümkün kıldı.",
      bestFor: "Kliniğe sık gelmeden destek almak isteyenler",
      families: ["Uzaktan Destek Uyumlu Modeller"],
    },
    {
      era: "Yapay Zeka Destekli Uzaktan Öneri Sistemleri",
      whatItBrought: "Bazı gelişmiş uygulamalar, kullanıcı geri bildirimlerini analiz ederek odyometriste otomatik ayar önerileri sunmaya başladı.",
      bestFor: "En güncel uzaktan destek deneyimini isteyenler",
      families: ["Yapay Zeka Destekli Uzaktan Destek Sistemleri"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
