// "İşitme Kaybı Dereceleri Arasında Orta Derecenin Yeri" section for the
// /ihtiyaciniza-gore/orta-derece-isitme-kaybi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — here mapped onto the same
// genuine dB-based degree ladder used on the Hafif İşitme Kaybı page's
// own evolution.ts, this time positioning "orta" as the current stage.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ortaDereceIsitmeKaybiEvolution: BrandPageTechEvolutionContent = {
  badge: "DERECELERE GÖRE",
  heading: "İşitme Kaybı Dereceleri Arasında Orta Derecenin Yeri",
  intro: "İşitme kaybı, şiddetine göre birkaç dereceye ayrılır; orta derece bu sınıflandırmanın ikinci basamağıdır.",
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
      bestFor: "Bu sayfanın konusu",
      families: ["Standart RIC / BTE Modelleri"],
    },
    {
      era: "İleri Derece (56-70 dB)",
      whatItBrought: "Yüksek sesle konuşulsa bile anlamakta zorluk yaşanabilir, daha güçlü amplifikasyon gerekir.",
      bestFor: "İleri dereceli kayıp yaşayanlar",
      families: ["Güçlü RIC / BTE Modelleri"],
    },
    {
      era: "Çok İleri Derece (71 dB ve Üzeri)",
      whatItBrought: "Konuşmaların çoğu, güçlü amplifikasyon olmadan duyulamayabilir.",
      bestFor: "Çok ileri dereceli kayıp yaşayanlar",
      families: ["Power BTE Modelleri"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
