// "Technology Evolution" content for the Widex brand page
// (/markalar/widex). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Allure",
// "Moment"/"SmartRIC" and "Evoke"/"Unique" are real, current Widex
// platform/family names (verified via multiple 2026 hearing-aid review
// sources) — more confidently sourced than Phonak's "Lumity sonrası" or
// Signia's "Integrated Xperience sonrası" uncertainty, but still worth a
// final human check before publishing given how fast this product
// category iterates.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const widexPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Widex Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (Allure)",
      whatItBrought: "Yeni nesil çip mimarisiyle güncellenmiş ses işleme ve genişletilmiş uygulama özellikleri.",
      bestFor: "Güncel teknolojiyi ve yeni nesil bağlantı özelliklerini önceliklendiren kullanıcılar",
      families: ["Allure"],
    },
    {
      era: "Önceki Nesil (Moment / SmartRIC)",
      whatItBrought: "PureSound™ ve ZeroDelay işlemenin tanıtıldığı, doğal ses odaklı platform.",
      bestFor: "Doğal ses kalitesini ve düşük gecikmeyi önceliklendiren kullanıcılar",
      families: ["Moment", "Moment Sheer", "SmartRIC"],
    },
    {
      era: "Klasik Nesil (Evoke / Unique)",
      whatItBrought: "Temel işitme ihtiyaçlarına odaklanan, kanıtlanmış ve sade bir yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["Evoke", "Unique"],
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
