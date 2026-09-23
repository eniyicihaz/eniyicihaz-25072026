// "Technology Evolution" content for the Audifon brand page
// (/markalar/audifon). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "rega",
// "sino" and "Sueno Pro" are real, documented Audifon product family
// names — verified via audifon.com.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const audifonPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Audifon Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her ailenin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Üst Segment (rega)",
      whatItBrought: "Cosma Chip Technology tabanlı, 18 kanala kadar WDRC işleme ve 10k HD Sound.",
      bestFor: "Güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["rega R"],
    },
    {
      era: "Orta Segment (sino)",
      whatItBrought: "Cosma Chip Technology'nin 9 kanala kadar WDRC işleme sunan, dengeli bir versiyonu.",
      bestFor: "Dengeli bir fiyat-performans arayanlar",
      families: ["sino S", "sino P", "sino R"],
    },
    {
      era: "Tinnitus'a Özel (Sueno Pro)",
      whatItBrought: "İşitme kaybı ile tinnitus'u aynı cihazda birlikte ele alan, kişiselleştirilebilir maskeleme çözümü.",
      bestFor: "Tinnitus şikayeti olan kullanıcılar",
      families: ["Sueno Pro"],
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
};
