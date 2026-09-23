// "Technology Evolution" content for the Rexton brand page
// (/markalar/rexton). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Reach",
// "BiCore" and "MCore" are real Rexton product family names, sourced
// directly from the brand's own product photography provided for this
// project.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const rextonPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Rexton Ürün Ailesi Nasıl Yapılandırılıyor?",
  intro: "Platform isimlerini ezberlemenize gerek yok — hangi ailenin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Reach Ailesi",
      whatItBrought: "Markanın en güncel bağlantı özelliklerini taşıyan, öne çıkan ürün ailesi.",
      bestFor: "Güncel bağlantı özelliklerini önceliklendiren kullanıcılar",
      families: ["Reach"],
    },
    {
      era: "BiCore Ailesi",
      whatItBrought: "Dengeli bir ses işleme deneyimi sunan işlemci ailesi.",
      bestFor: "Dengeli bir fiyat-performans arayanlar",
      families: ["BiCore", "BiCore ITE"],
    },
    {
      era: "MCore Ailesi",
      whatItBrought: "Temel işitme ihtiyaçları için sade bir işleme yaklaşımı sunar.",
      bestFor: "Giriş seviyesi bir çözüm arayanlar",
      families: ["MCore"],
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
};
