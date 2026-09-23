// "İşitme Kaybı Dereceleri Arasında Hafif Kaybın Yeri" section for the
// /ihtiyaciniza-gore/hafif-isitme-kaybi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — here mapped onto the genuine
// dB-based degree ladder (same real classification the BTE/ITE master
// pages already use for their own hearing-loss-levels.ts), positioning
// "hafif" as the first rung. The sibling degree pages referenced here
// (Orta, İleri, Çok İleri) are not yet built — see related-content.ts.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const hafifIsitmeKaybiEvolution: BrandPageTechEvolutionContent = {
  badge: "DERECELERE GÖRE",
  heading: "İşitme Kaybı Dereceleri Arasında Hafif Kaybın Yeri",
  intro: "İşitme kaybı, şiddetine göre birkaç dereceye ayrılır; hafif kayıp bu sınıflandırmanın en düşük düzeyidir.",
  stages: [
    {
      era: "Hafif Derece (26-40 dB)",
      whatItBrought: "Fısıltı ve uzak sesleri duymakta güçlük şeklinde kendini gösterir; günlük konuşmaların çoğu genellikle etkilenmez.",
      bestFor: "Bu sayfanın konusu",
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
      bestFor: "Çok ileri dereceli kayıp yaşayanlar",
      families: ["Power BTE Modelleri"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
