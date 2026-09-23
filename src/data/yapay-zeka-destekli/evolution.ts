// "Ses İşleme Teknolojisinin Gelişimi" section for the /teknolojiler/
// yapay-zeka-destekli page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags), same technique the Bluetooth page's evolution.ts
// uses for its own technology timeline — here mapped onto the genuine
// progression from analog amplification to today's deep-learning sound
// processing.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const yapayZekaDestekliEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "İşitme Cihazlarında Ses İşleme Teknolojisinin Gelişimi",
  intro: "Ses işleme teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü yapay zeka destekli deneyime ulaştı.",
  stages: [
    {
      era: "Analog ve Erken Dijital İşleme",
      whatItBrought: "İlk nesil işitme cihazları, sesi basitçe yükselten analog devreler veya temel dijital filtreler kullanırdı.",
      bestFor: "Teknolojinin başlangıç dönemi",
      families: ["Analog / Temel Dijital Cihazlar"],
    },
    {
      era: "Kural Tabanlı Otomatik Programlar",
      whatItBrought: "Cihazlar, önceden tanımlanmış kurallara göre birkaç dinleme ortamı arasında otomatik geçiş yapmaya başladı.",
      bestFor: "Temel otomatik program arayan kullanıcılar",
      families: ["Çoklu Program Destekli Modeller"],
    },
    {
      era: "Derin Öğrenme Tabanlı Yapay Zeka",
      whatItBrought: "Milyonlarca gerçek dünya ses sahnesiyle eğitilen derin sinir ağları, ortamı çok daha hassas bir şekilde sınıflandırmaya ve optimize etmeye başladı.",
      bestFor: "En güncel ses işleme teknolojisini isteyen kullanıcılar",
      families: ["Yapay Zeka Destekli Üst Segment Modeller"],
    },
    {
      era: "Kişiselleştirilmiş ve Öğrenen Sistemler",
      whatItBrought: "Bazı üst segment modeller, kullanıcının zaman içindeki tercihlerini öğrenerek ayarlarını sürekli olarak kişiselleştirmeye başladı.",
      bestFor: "Maksimum kişiselleştirme isteyen kullanıcılar",
      families: ["Öğrenen / Kişiselleştirilebilir Modeller"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
