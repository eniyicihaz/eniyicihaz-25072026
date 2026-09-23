// "İşitme Kaybı Dereceleri Arasında Çok İleri Derecenin Yeri" section for
// the /ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi page. Reuses the
// shared BrandPageTechEvolution component in its original "stage" sense
// (era / what it brought / who it's for / tags) — here mapped onto the
// same genuine dB-based degree ladder used on the Hafif, Orta and İleri
// Derece pages' own evolution.ts, this time positioning "çok ileri" as
// the final, current stage — completing the ladder across all four
// degree pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cokIleriDereceIsitmeKaybiEvolution: BrandPageTechEvolutionContent = {
  badge: "DERECELERE GÖRE",
  heading: "İşitme Kaybı Dereceleri Arasında Çok İleri Derecenin Yeri",
  intro: "İşitme kaybı, şiddetine göre birkaç dereceye ayrılır; çok ileri derece bu sınıflandırmanın en yüksek basamağıdır.",
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
      era: "İleri Derece (56-70 dB)",
      whatItBrought: "Yüksek sesle konuşulsa bile anlamakta zorluk yaşanabilir, daha güçlü amplifikasyon gerekir.",
      bestFor: "İleri dereceli kayıp yaşayanlar",
      families: ["Güçlü RIC / BTE Modelleri"],
    },
    {
      era: "Çok İleri Derece (71 dB ve Üzeri)",
      whatItBrought: "Konuşmaların çoğu, güçlü amplifikasyon olmadan duyulamayabilir.",
      bestFor: "Bu sayfanın konusu",
      families: ["Power BTE Modelleri"],
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
