// "Gürültü Engellemeli Cihazlarla Neler Yapabilirsiniz?" teaser grid for
// the /teknolojiler/gurultu-engelleme page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// noise-specific scenarios instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const gurultuEngellemeUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Gürültü Engellemeli Cihazlarla Neler Yapabilirsiniz?",
  intro: "Gürültü engellemenin günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "TRAFİK",
      title: "Trafik Gürültüsünü Azaltın",
      description: "Sokakta yürürken veya araç kullanırken trafik sesinin rahatsızlığını azaltmaya yardımcı olur.",
    },
    {
      label: "RÜZGAR",
      title: "Rüzgar Sesinden Daha Az Etkilenin",
      description: "Açık havada yürüyüş veya bisiklet sırasında rüzgarın oluşturduğu sesi azaltır.",
    },
    {
      label: "OFİS",
      title: "Ofis Uğultusunu Azaltın",
      description: "Klima ve havalandırma gibi sabit ofis gürültülerinin etkisini azaltmaya yardımcı olur.",
    },
    {
      label: "RESTORAN",
      title: "Restoran Gürültüsünü Yumuşatın",
      description: "Kalabalık restoran ortamındaki genel gürültü seviyesini azaltmaya yardımcı olur.",
    },
    {
      label: "EV İŞLERİ",
      title: "Ani Mutfak Seslerini Yumuşatın",
      description: "Tabak veya tencere gibi ani yüksek sesleri konfor için anlık olarak yumuşatır.",
    },
    {
      label: "SEYAHAT",
      title: "Uçak ve Toplu Taşımada Konfor Sağlayın",
      description: "Motor uğultusu gibi sürekli seslerin rahatsızlığını azaltmaya yardımcı olur.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorHoverBorder: "rgb(192 38 211 / 0.5)",
};
