// "Technology Evolution" content for the Vista brand page
// (/markalar/vista). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Vista
// V/B/T" tier names are real, documented Sonova/Vista names — verified
// via independent hearing-aid pricing/review sources.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const vistaPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Vista Kademeleri Nasıl Yapılandırılıyor?",
  intro: "Kademe isimlerini ezberlemenize gerek yok — hangisinin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Vista V (Üst Kademe)",
      whatItBrought: "Soundsuite OS'un sunduğu en kapsamlı özellik setini ve Bluetooth bağlantısını taşır.",
      bestFor: "Güncel teknolojiyi önceliklendiren kullanıcılar",
      families: ["Vista V"],
    },
    {
      era: "Vista B (Orta Kademe)",
      whatItBrought: "Dengeli bir teknoloji seviyesi ve fiyat-performans sunar.",
      bestFor: "Dengeli bir çözüm arayan kullanıcılar",
      families: ["Vista B"],
    },
    {
      era: "Vista T (Şarjlı Seri)",
      whatItBrought: "Lityum-iyon şarjlı sistemle günlük kullanım için pratik bir çözüm sunar.",
      bestFor: "Pratik günlük kullanım arayanlar",
      families: ["Vista T"],
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
};
