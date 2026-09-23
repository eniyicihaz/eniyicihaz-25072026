// "Technology Evolution" content for the Bernafon brand page
// (/markalar/bernafon). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Encanta",
// "Juna" and "Zerena" are real, documented Bernafon product family names
// — verified via Bernafon's own site and independent hearing-aid review
// sources — a comparably solid footing to the other brand pages'
// platform names, still worth a final human check given how fast this
// product category iterates.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const bernafonPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Bernafon Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (Encanta)",
      whatItBrought: "Smart Sensor ile hareket algılama ve Machine Learning 2.0 destekli ses işleme.",
      bestFor: "Güncel teknolojiyi ve otomatik uyumu önceliklendiren kullanıcılar",
      families: ["Encanta", "Encanta Alpha XT"],
    },
    {
      era: "Önceki Nesil (Juna)",
      whatItBrought: "Günümüz teknolojisinin temelini oluşturan, kanıtlanmış bağlantı ve ses işleme altyapısı.",
      bestFor: "Güncel teknolojiyi uygun bir seviyede deneyimlemek isteyenler",
      families: ["Juna"],
    },
    {
      era: "Klasik Nesil (Zerena)",
      whatItBrought: "Temel işitme ihtiyaçlarına odaklanan, sade ve pratik yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["Zerena"],
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
};
