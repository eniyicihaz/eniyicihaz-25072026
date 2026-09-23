// "Technology Evolution" content for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageTechEvolution component. Editorial, not a technical
// platform-name table. "HearLink 50/40/30" is a real, documented tier
// system — verified via Demant's own press materials.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const philipsHearingPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Philips HearLink Kademeleri Nasıl Yapılandırılıyor?",
  intro: "Kademe isimlerini ezberlemenize gerek yok — hangisinin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "HearLink 50 (Üst Kademe)",
      whatItBrought: "Velox-S platformunun sunduğu en kapsamlı özellik setini taşır.",
      bestFor: "Güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["HearLink 50"],
    },
    {
      era: "HearLink 40 (Orta Kademe)",
      whatItBrought: "Dengeli bir teknoloji seviyesi ve fiyat-performans sunar.",
      bestFor: "Dengeli bir çözüm arayan kullanıcılar",
      families: ["HearLink 40"],
    },
    {
      era: "HearLink 30 (Giriş Kademesi)",
      whatItBrought: "Temel işitme ihtiyaçları için sade ve anlaşılır bir çözüm sunar.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["HearLink 30"],
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
};
