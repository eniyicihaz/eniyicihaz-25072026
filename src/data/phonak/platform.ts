// "Technology Evolution" content for the Phonak brand page
// (/markalar/phonak) — see PHONAK MASTER BLUEPRINT §6.6. Renders through
// the shared BrandPageTechEvolution component. Deliberately editorial, not
// a technical platform-name table: the current generation label stays a
// conceptual "Güncel Nesil" tag rather than a specific platform name,
// since this project has not verified the current official Phonak
// platform name with confidence (see blueprint's verification note).

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const phonakPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Phonak Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil",
      whatItBrought: "Konuşma anlaşılırlığına ve evrensel bağlantıya odaklanan en yeni ses işleme yaklaşımı.",
      bestFor: "Aktif, sosyal ve teknolojiyle iç içe yaşayan kullanıcılar",
      families: ["Audéo", "Naída"],
    },
    {
      era: "Önceki Nesil",
      whatItBrought: "Günümüz teknolojisinin temelini oluşturan, kanıtlanmış bağlantı ve ses işleme altyapısı.",
      bestFor: "Güncel teknolojiyi uygun bir seviyede deneyimlemek isteyenler",
      families: ["Bolero", "Virto"],
    },
    {
      era: "Giriş Seviyesi",
      whatItBrought: "Temel işitme ihtiyaçlarına odaklanan, sade ve pratik yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["Sky (temel modeller)"],
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
