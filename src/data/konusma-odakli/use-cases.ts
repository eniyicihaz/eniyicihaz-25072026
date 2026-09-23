// "Konuşma Odaklı Teknolojilerle Neler Yapabilirsiniz?" teaser grid for
// the /teknolojiler/konusma-odakli page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// speech-focus-specific scenarios instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const konusmaOdakliUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Konuşma Odaklı Teknolojilerle Neler Yapabilirsiniz?",
  intro: "Konuşma odaklanmasının günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "RESTORAN",
      title: "Restoranda Karşınızdakini Daha Net Duyun",
      description: "Yönlü mikrofon, karşınızdaki kişinin sesini arka plan gürültüsünden ayırt etmeye yardımcı olur.",
    },
    {
      label: "TOPLANTI",
      title: "Toplantıda Konuşmacıya Odaklanın",
      description: "Belirli bir konuşmacının sesini diğer katılımcıların seslerinden ayırt etmeye yardımcı olur.",
    },
    {
      label: "AİLE SOFRASI",
      title: "Kalabalık Sofra Sohbetini Takip Edin",
      description: "Birden fazla kişinin konuştuğu aile ortamlarında karşınızdaki kişiye odaklanmayı destekler.",
    },
    {
      label: "SOKAK",
      title: "Sokakta Yürürken Sohbeti Sürdürün",
      description: "Dış mekânda yürürken yanınızdaki kişinin sesini trafik gürültüsünden ayırt etmeye yardımcı olur.",
    },
    {
      label: "ARAÇ İÇİ",
      title: "Araçta Yolcularla Sohbeti Kolaylaştırın",
      description: "Motor ve yol gürültüsüne rağmen araç içindeki sohbeti takip etmeyi destekler.",
    },
    {
      label: "ETKİNLİK",
      title: "Kalabalık Etkinliklerde Konforu Artırın",
      description: "Düğün veya davet gibi kalabalık etkinliklerde yakınınızdaki sohbete odaklanmayı kolaylaştırır.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorHoverBorder: "rgb(234 88 12 / 0.5)",
};
