// "Uyum Sürecinin Aşamaları Nelerdir?" section for the /rehberler/
// uyum-sureci page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for
// / tags) — repurposed here as a genuine weeks-to-months adaptation
// timeline, deliberately distinct in timescale from İlk Kullanım
// Rehberi's own first-DAY step sequence.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const uyumSureciEvolution: BrandPageTechEvolutionContent = {
  badge: "UYUM SÜRECİNİN AŞAMALARI",
  heading: "Uyum Sürecinin Aşamaları Nelerdir?",
  intro: "İlk haftadan kalıcı alışkanlığa kadar genel bir zaman çizelgesini bir araya getirdik; süreler kişiden kişiye değişebilir.",
  stages: [
    {
      era: "İlk Hafta: Farkındalık",
      whatItBrought: "Uzun süredir duymadığınız sesleri fark etmeye başlarsınız; hafif bir dinleme yorgunluğu yaşayabilirsiniz.",
      bestFor: "Sürecin başlangıcı",
      families: ["Farkındalık Dönemi"],
    },
    {
      era: "İlk Ay: Alışma Başlangıcı",
      whatItBrought: "Sesler yavaş yavaş daha doğal gelmeye başlar; kendi sesinizi duymak gibi durumlar daha az dikkat çekici hale gelir.",
      bestFor: "Erken alışma",
      families: ["Alışma Başlangıcı"],
    },
    {
      era: "1-3 Ay: Beynin Yeniden Kalibrasyonu",
      whatItBrought: "Beyniniz, arka plan gürültüsünü filtrelemeyi ve önemli sesleri öne çıkarmayı daha iyi öğrenir.",
      bestFor: "Aktif adaptasyon",
      families: ["Yeniden Kalibrasyon"],
    },
    {
      era: "3-6 Ay: Kalıcı Alışkanlık",
      whatItBrought: "Cihazınız günlük rutininizin doğal bir parçası haline gelir; farkındalık geri plana çekilir.",
      bestFor: "Sürecin olgunlaşması",
      families: ["Kalıcı Alışkanlık"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
