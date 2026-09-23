// "Odyometride Neler Ölçülür?" teaser grid for the /degerlendirme/
// odyometri page. Renders through the shared BrandPageTechnology
// component (6-card grid), same technique the BTE page's use-cases.ts
// uses for everyday-scenario coverage, here scoped to the concrete
// measurements taken during the test.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const odyometriUseCases: BrandPageTechnologyContent = {
  badge: "ODYOMETRİDE ÖLÇÜLEN DEĞERLER",
  heading: "Odyometride Neler Ölçülür?",
  intro: "Test sırasında ölçülen değerlere daha yakından bakalım.",
  items: [
    {
      label: "FREKANS EŞİĞİ",
      title: "Farklı Frekanslarda İşitme Eşiği",
      description: "250 Hz ile 8000 Hz arasındaki frekanslarda duyabildiğiniz en düşük ses şiddeti ölçülür.",
    },
    {
      label: "HAVA YOLU",
      title: "Hava Yolu İletimi",
      description: "Kulaklıkla verilen seslere karşı işitme eşiği ölçülür.",
    },
    {
      label: "KEMİK YOLU",
      title: "Kemik Yolu İletimi",
      description: "Kafatası titreşimleriyle iç kulağın doğrudan tepkisi ölçülür.",
    },
    {
      label: "KONFOR EŞİĞİ",
      title: "Rahatsız Edici Ses Düzeyi",
      description: "Bazı durumlarda, rahatsızlık hissedilen ses düzeyi de değerlendirilebilir.",
    },
    {
      label: "SİMETRİ",
      title: "İki Kulak Arasındaki Fark",
      description: "Her iki kulağın işitme eşiği ayrı ayrı ölçülerek karşılaştırılır.",
    },
    {
      label: "SONUÇ RAPORU",
      title: "Odyogram Raporu",
      description: "Tüm ölçümler, anlaşılır bir grafik hâlinde raporlanır.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorHoverBorder: "rgb(79 70 229 / 0.5)",
};
