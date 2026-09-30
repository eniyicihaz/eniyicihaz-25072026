// "İşitme Kaybı Dereceleri Arasında İleri Derecenin Yeri" section for the
// /ihtiyaciniza-gore/ileri-derece-isitme-kaybi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — here mapped onto the same
// genuine dB-based degree ladder used on the Hafif and Orta Derece
// pages' own evolution.ts, this time positioning "ileri" as the current
// stage.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ileriDereceIsitmeKaybiEvolution: BrandPageTechEvolutionContent = {
  badge: "DERECELERE GÖRE",
  heading: "İşitme Kaybı Dereceleri Arasında İleri Derecenin Yeri",
  intro: "İşitme kaybı, şiddetine göre birkaç dereceye ayrılır; ileri derece bu sınıflandırmanın dördüncü basamağıdır.",
  stages: [
    {
      era: "Hafif Derece (26-40 dB)",
      whatItBrought: "Fısıltı ve uzak sesleri duymakta güçlük şeklinde kendini gösterir.",
      bestFor: "Hafif dereceli kayıp yaşayanlar",
      families: ["İnce RIC / CIC Modeller"],
    },
    {
      era: "Orta Derece (41-55 dB)",
      whatItBrought: "Normal ses tonundaki konuşmaları takip etmekte belirgin zorluk yaşanmaya başlar.",
      bestFor: "Orta dereceli kayıp yaşayanlar",
      families: ["Standart RIC / BTE Modelleri"],
    },
    {
      era: "Orta-İleri Derece (56-70 dB)",
      whatItBrought: "Yüksek sesle konuşulsa bile anlamakta zorluk yaşanabilir, daha güçlü amplifikasyon gerekir.",
      bestFor: "Orta-ileri dereceli kayıp yaşayanlar",
      families: ["Güçlü RIC / BTE Modelleri"],
    },
    {
      era: "İleri Derece (71-90 dB)",
      whatItBrought: "Konuşmaların çoğu, güçlü amplifikasyon olmadan duyulamayabilir.",
      bestFor: "Bu sayfanın konusu",
      families: ["Power BTE Modelleri"],
    },
    {
      era: "Çok İleri Derece (91 dB ve Üzeri)",
      whatItBrought: "Çok yüksek ses düzeyleri dışında konuşmaları duymak güçleşebilir; en yüksek düzeyde amplifikasyon ve kapsamlı uzman değerlendirmesi önem kazanır.",
      bestFor: "Çok ileri dereceli kayıp yaşayanlar",
      families: ["Power BTE Modelleri"],
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
