// "Genel Bir Değişim Süreci Nasıl İlerler?" section for the
// /blog/basari-hikayeleri page. Reuses the shared
// BrandPageTechEvolution component — repurposed here as a generic,
// unnamed journey outline (farkındalıktan sonuçlara) rather than a
// specific person's story, consistent with the page's content-
// integrity discipline (see hero.ts).

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const basariHikayeleriEvolution: BrandPageTechEvolutionContent = {
  badge: "GENEL SÜRECİN AŞAMALARI",
  heading: "Genel Bir Değişim Süreci Nasıl İlerler?",
  intro: "Kullanıcılarımızın genel olarak izlediği süreç, kabaca şu aşamalardan oluşur.",
  stages: [
    {
      era: "Farkındalık",
      whatItBrought: "Günlük hayatta konuşmaları takip etmekte zorlanıldığının fark edilmesiyle süreç başlar.",
      bestFor: "Sürecin başlangıcı",
      families: ["Farkındalık"],
    },
    {
      era: "Değerlendirme",
      whatItBrought: "Bir işitme testi ile durumun netleştirilmesi, doğru adımın belirlenmesine yardımcı olur.",
      bestFor: "Durumun netleşmesi",
      families: ["Değerlendirme"],
    },
    {
      era: "Karar",
      whatItBrought: "Uzman yönlendirmesiyle, ihtiyaca uygun bir cihaz ve çözüm üzerinde karar verilir.",
      bestFor: "Doğru seçim",
      families: ["Karar Süreci"],
    },
    {
      era: "Uyum",
      whatItBrought: "Cihaza alışma sürecinde, sesler zamanla daha doğal algılanmaya başlar.",
      bestFor: "Alışma süreci",
      families: ["Uyum Süreci"],
    },
    {
      era: "Günlük Hayata Yansıma",
      whatItBrought: "Aile, iş ve sosyal hayatta konuşmaları takip etmek zamanla daha doğal bir hal alır.",
      bestFor: "Sürecin sonucu",
      families: ["Günlük Hayat"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
