// "Technology Evolution" content for the Beltone brand page
// (/markalar/beltone). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Envision"
// (Feb 2025), "Commence" (Feb 2025), "Serene" (Oct 2023 / expanded Feb
// 2024) and "Boost Max S" (Aug 2025) are real, current Beltone product
// family names — verified via beltone.com and independent hearing-aid
// review sources.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const beltonePlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Beltone Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (2025)",
      whatItBrought: "Envision'ın yapay zekâ destekli DNN işlemesi ve Commence'in erişilebilir teknolojisi.",
      bestFor: "Güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["Envision", "Commence"],
    },
    {
      era: "Geniş Yelpaze (Serene, 2023–2024)",
      whatItBrought: "Farklı yerleşim ve işitme kaybı derecelerini kapsayan, kanıtlanmış bir önceki nesil aile.",
      bestFor: "Geniş stil seçeneği arayan kullanıcılar",
      families: ["Serene"],
    },
    {
      era: "Süper Güç (Boost Max S, 2025)",
      whatItBrought: "İleri-derin işitme kayıpları için Bluetooth LE Audio/Auracast destekli ilk süper güç model.",
      bestFor: "İleri-derin derece işitme kaybı yaşayanlar",
      families: ["Boost Max S"],
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
};
