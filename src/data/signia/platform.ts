// "Technology Evolution" content for the Signia brand page
// (/markalar/signia) — see SIGNIA MASTER BLUEPRINT §9.6. Renders through
// the shared BrandPageTechEvolution component. Editorial, not a technical
// platform-name table. "Integrated Xperience" and "Xperience" are real,
// generally known Signia platform names; the most current generation name
// should be verified before publishing (same caution as Phonak's "Lumity
// sonrası" note).

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const signiaPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Signia Teknolojisi Zaman İçinde Nasıl Gelişti?",
  intro: "Platform isimlerini ezberlemenize gerek yok — her neslin neyi mümkün kıldığını ve kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Güncel Nesil (Integrated Xperience)",
      whatItBrought: "Entegre yapay zekâ çipiyle gerçek zamanlı ses analizi.",
      bestFor: "Teknolojiye ve kişiselleştirmeye önem veren kullanıcılar",
      families: ["Styletto", "Pure"],
    },
    {
      era: "Önceki Nesil (Xperience)",
      whatItBrought: "Günümüz teknolojisinin temelini oluşturan bağlantı ve ses işleme altyapısı.",
      bestFor: "Güncel teknolojiyi uygun bir seviyede deneyimlemek isteyenler",
      families: ["Insio", "Active"],
    },
    {
      era: "Giriş Seviyesi",
      whatItBrought: "Temel işitme ihtiyaçlarına odaklanan, sade ve pratik yaklaşım.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["Silk", "Motion (temel modeller)"],
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
};
