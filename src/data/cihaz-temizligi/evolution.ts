// "Günlük Temizlik Rutini Nasıl Uygulanır?" section for the
// /servis-bakim/cihaz-temizligi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of DAILY (evening) routine steps rather than a one-time
// appointment sequence, distinct from every prior series' evolution.ts
// usage.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cihazTemizligiEvolution: BrandPageTechEvolutionContent = {
  badge: "GÜNLÜK RUTİN",
  heading: "Günlük Temizlik Rutini Nasıl Uygulanır?",
  intro: "Cihazınızı kapatmaktan sabah kontrolüne kadar izlenebilecek beş adımlık akşam rutinini bir araya getirdik.",
  stages: [
    {
      era: "Cihazı Kapatma",
      whatItBrought: "Temizliğe başlamadan önce cihazınızı kapatın.",
      bestFor: "Rutinin ilk adımı",
      families: ["Kapatma"],
    },
    {
      era: "Yumuşak Bezle Silme",
      whatItBrought: "Cihazın dış yüzeyi, kuru ve yumuşak bir bezle nazikçe silinir.",
      bestFor: "Yüzey temizliği",
      families: ["Yüzey Silme"],
    },
    {
      era: "Kulak Ucu ve Kalıp Kontrolü",
      whatItBrought: "Kulak ucu veya kalıpta görünür kir varsa, önerilen aracıyla nazikçe temizlenir.",
      bestFor: "Detay kontrolü",
      families: ["Kulak Ucu Kontrolü"],
    },
    {
      era: "Kuru Kutuda Saklama",
      whatItBrought: "Cihaz, gece boyunca kuru ve havadar bir saklama kutusuna yerleştirilir.",
      bestFor: "Nemden koruma",
      families: ["Kuru Saklama"],
    },
    {
      era: "Sabah Kontrolü",
      whatItBrought: "Sabah cihazınızı takmadan önce hızlıca gözle kontrol edersiniz.",
      bestFor: "Rutinin tamamlanması",
      families: ["Sabah Kontrolü"],
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
