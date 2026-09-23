// "Bluetooth ile Yapabilecekleriniz" teaser grid for the /isitme-cihazlari/
// bluetooth-ozellikli page. Renders through the shared BrandPageTechnology
// component (6-card grid), same technique the BTE page's use-cases.ts uses
// for everyday-scenario coverage, here scoped to Bluetooth-specific
// scenarios instead of general BTE usage.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const bluetoothUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Bluetooth Özellikli Cihazlarla Neler Yapabilirsiniz?",
  intro: "Bluetooth bağlantısının günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "TELEFON",
      title: "Görüşmeleri Doğrudan Dinleyin",
      description: "Gelen aramaları, telefonu elinize almadan doğrudan cihazınızdan yanıtlayabilirsiniz.",
    },
    {
      label: "TELEVİZYON",
      title: "TV Sesini Net Duyun",
      description: "TV yayın aksesuarıyla eşleştirilen cihaz, televizyon sesini doğrudan ve net şekilde aktarır.",
    },
    {
      label: "MÜZİK",
      title: "Müzik ve Podcast Dinleyin",
      description: "Telefonunuzdaki müzik ve podcast uygulamalarının sesini doğrudan cihazınızdan dinleyebilirsiniz.",
    },
    {
      label: "VİDEO GÖRÜŞME",
      title: "Online Toplantılarda Netlik",
      description: "Video görüşme uygulamalarının sesini doğrudan alarak karşı tarafı daha net duyabilirsiniz.",
    },
    {
      label: "UZAKTAN KONTROL",
      title: "Uygulama Üzerinden Ayar Yapın",
      description: "Ses seviyesi ve dinleme programları, akıllı telefon uygulaması üzerinden kolayca değiştirilebilir.",
    },
    {
      label: "NAVİGASYON",
      title: "Sesli Yol Tarifini Dinleyin",
      description: "Harita uygulamalarının sesli yönlendirmesini doğrudan cihazınızdan takip edebilirsiniz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorHoverBorder: "rgb(8 145 178 / 0.5)",
};
