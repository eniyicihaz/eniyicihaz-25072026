// "Technology Evolution" content for the NuEar brand page
// (/markalar/nuear). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "NXG AI",
// "NE Series", "Circa" and "Savant AI" are real NuEar product/series
// names found across NuEar's own site and product documentation — a
// comparably solid footing to the other brand pages' platform names,
// still worth a final human check given how fast this product category
// iterates and how NuEar's own naming has evolved over recent years.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const nuearPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "NuEar Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (NXG AI)",
      whatItBrought: "Güncellenmiş ses işleme yaklaşımı ve Hear Circle uygulamasıyla tam entegrasyon.",
      bestFor: "Güncel teknolojiyi ve sağlık takibi özelliklerini önceliklendiren kullanıcılar",
      families: ["NXG AI"],
    },
    {
      era: "Önceki Nesil (NE Series / Circa)",
      whatItBrought: "Bağlantı ve şarjlı sistemlerin yaygınlaştığı, kanıtlanmış bir platform.",
      bestFor: "Güncel teknolojiyi uygun bir seviyede deneyimlemek isteyenler",
      families: ["NE Series", "Circa"],
    },
    {
      era: "Klasik Nesil (Savant AI / NOW iQ)",
      whatItBrought: "Temel ve orta seviye ihtiyaçlara odaklanan, sade ve pratik yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["Savant AI", "NOW iQ"],
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
};
