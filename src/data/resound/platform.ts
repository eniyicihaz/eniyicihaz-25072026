// "Technology Evolution" content for the ReSound brand page
// (/markalar/resound). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Vivia"
// (Feb 2025), "Nexia" (Sept 2023) and "Omnia" (Aug 2022) are real, current
// ReSound platform names — verified via multiple 2025-2026 hearing-aid
// review sources — a comparably solid footing to Widex's platform names,
// still worth a final human check given how fast this product category
// iterates.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const resoundPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "ReSound Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (Vivia)",
      whatItBrought: "Derin öğrenme destekli ses işleme ve tam Auracast desteğiyle güncellenmiş bağlantı deneyimi.",
      bestFor: "Güncel teknolojiyi ve yeni nesil bağlantı özelliklerini önceliklendiren kullanıcılar",
      families: ["Vivia"],
    },
    {
      era: "Önceki Nesil (Nexia / Omnia)",
      whatItBrought: "Auracast'ın sektöre erken tanıtıldığı ve M&RIE'nin yaygınlaştığı platform.",
      bestFor: "Bağlantı özelliklerini ve mekansal işitmeyi önceliklendiren kullanıcılar",
      families: ["Nexia", "Omnia"],
    },
    {
      era: "Giriş ve Orta Seviye (Savi / Key)",
      whatItBrought: "Temel ve orta seviye ihtiyaçlara odaklanan, sade ve pratik yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya daha uygun bir seçenek arayan kullanıcılar",
      families: ["Savi", "Key"],
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
};
