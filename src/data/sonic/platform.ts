// "Technology Evolution" content for the Sonic brand page
// (/markalar/sonic). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Enchant"
// (SoundDNA platform) and "Radiant" are real, documented Sonic product
// family names — verified via hearingreview.com.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const sonicPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Sonic Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — hangi neslin neyi mümkün kıldığını aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (Enchant)",
      whatItBrought: "SoundDNA platformu ile karmaşık ortamlarda otomatik uyum ve Speech in Noise teknolojileri.",
      bestFor: "Güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["Enchant", "Enchant BTE", "Enchant ITE"],
    },
    {
      era: "Önceki Nesil (Radiant)",
      whatItBrought: "Daha net ve anlaşılır bir ses deneyimi sunan, kanıtlanmış bir amplifikasyon sistemi.",
      bestFor: "Dengeli bir fiyat-performans arayanlar",
      families: ["Radiant"],
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
};
