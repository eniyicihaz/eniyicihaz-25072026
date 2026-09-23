// "Tinnitus Destek Teknolojisinin Gelişimi" section for the
// /teknolojiler/tinnitus-cozumleri page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags), same technique the Uzaktan
// Kontrol page's evolution.ts uses for its own technology timeline — here
// mapped onto the genuine progression from standalone external maskers to
// today's app-managed, personalized sound libraries.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const tinnitusCozumleriEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Tinnitus Destek Teknolojisinin Gelişimi",
  intro: "Tinnitus destek teknolojisi, zaman içinde farklı aşamalardan geçerek bugünkü kişiselleştirilmiş ve uygulama destekli deneyime ulaştı.",
  stages: [
    {
      era: "Harici Maskeleme Cihazları",
      whatItBrought: "İlk tinnitus destek çözümleri, işitme cihazından bağımsız, ayrı taşınan harici ses maskeleme cihazlarıydı.",
      bestFor: "Teknolojinin başlangıç dönemi",
      families: ["Harici Maskeleme Cihazları"],
    },
    {
      era: "İşitme Cihazına Entegre Sabit Ses Üreteçleri",
      whatItBrought: "Sabit beyaz gürültü veya statik ses üreten jeneratörler, doğrudan işitme cihazına entegre edilmeye başlandı.",
      bestFor: "Temel entegre destek arayanlar",
      families: ["Sabit Ses Üreteçli Modeller"],
    },
    {
      era: "Kişiselleştirilebilir Çoklu Ses Kütüphaneleri",
      whatItBrought: "Doğa sesleri, fraktal tonlar ve farklı gürültü türlerinden oluşan geniş ses kütüphaneleri, kişiye özel seçim imkânı sundu.",
      bestFor: "Kişiselleştirilmiş ses seçeneği isteyenler",
      families: ["Çoklu Ses Kütüphaneli Modeller"],
    },
    {
      era: "Uygulama Destekli Yönetilebilir Ses Programları",
      whatItBrought: "Akıllı telefon uygulamaları üzerinden yönetilebilen, bazen yapılandırılmış ses programlarıyla desteklenen kapsamlı çözümler yaygınlaştı.",
      bestFor: "Uygulama üzerinden kapsamlı yönetim isteyenler",
      families: ["Uygulama Destekli Modeller"],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
