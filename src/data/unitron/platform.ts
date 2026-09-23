// "Technology Evolution" content for the Unitron brand page
// (/markalar/unitron). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Smile"
// (2025), "Blu", "Moxi Vivante" and "Stride" are real, documented
// Unitron platform/product family names — verified via unitron.com and
// independent hearing-aid review sources.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const unitronPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Unitron Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını aşağıda özetledik.",
  stages: [
    {
      era: "En Güncel Nesil (Smile, 2025)",
      whatItBrought: "Markanın en gelişmiş ve en güncel işitme cihazı platformu.",
      bestFor: "En güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["Smile"],
    },
    {
      era: "Güncel Nesil (Blu)",
      whatItBrought: "Sonova PRISM çipi ve AutoFocus 360 ile geniş bağlantı ve yönlülük özellikleri.",
      bestFor: "Bağlantı özelliklerini önceliklendiren kullanıcılar",
      families: ["Blu"],
    },
    {
      era: "Önceki Nesil (Vivante, Stride)",
      whatItBrought: "Kanıtlanmış bir önceki nesil bağlantı ve ses işleme altyapısı.",
      bestFor: "Güncel teknolojiyi uygun bir seviyede deneyimlemek isteyenler",
      families: ["Moxi Vivante", "Stride"],
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
};
