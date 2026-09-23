// "Timpanometride Neler Değerlendirilir?" teaser grid for the
// /degerlendirme/timpanometri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete measurements taken during the test.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const timpanometriUseCases: BrandPageTechnologyContent = {
  badge: "TİMPANOMETRİDE NELER DEĞERLENDİRİLİR",
  heading: "Timpanometride Neler Değerlendirilir?",
  intro: "Test sırasında değerlendirilen bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "ORTA KULAK BASINCI",
      title: "Orta Kulaktaki Hava Basıncı",
      description: "Orta kulaktaki hava basıncının normal aralıkta olup olmadığı ölçülür.",
    },
    {
      label: "KULAK ZARI HAREKETİ",
      title: "Kulak Zarının Hareketliliği",
      description: "Kulak zarının basınç değişimine verdiği tepki değerlendirilir.",
    },
    {
      label: "KULAK KANALI HACMİ",
      title: "Dış Kulak Kanalı Hacmi",
      description: "Kulak kanalının hacmi, kulak zarı delinmesi gibi durumların tespitine yardımcı olabilir.",
    },
    {
      label: "AKUSTİK REFLEKS",
      title: "Akustik Refleks Ölçümü",
      description: "Bazı cihazlarda, yüksek seslere karşı kulak kasının refleks tepkisi de ölçülebilir.",
    },
    {
      label: "TİMPANOGRAM TİPİ",
      title: "Timpanogram Eğrisi Tipi",
      description: "Sonuçlar, orta kulak durumuna işaret eden farklı eğri tiplerinde sınıflandırılır.",
    },
    {
      label: "SONUÇ RAPORU",
      title: "Timpanogram Raporu",
      description: "Tüm ölçümler, anlaşılır bir grafik hâlinde raporlanır.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorHoverBorder: "rgb(147 51 234 / 0.5)",
};
