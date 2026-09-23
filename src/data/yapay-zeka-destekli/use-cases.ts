// "Yapay Zeka Destekli Cihazlarla Neler Yapabilirsiniz?" teaser grid for
// the /teknolojiler/yapay-zeka-destekli page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// AI-specific capabilities instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yapayZekaDestekliUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Yapay Zeka Destekli Cihazlarla Neler Yapabilirsiniz?",
  intro: "Yapay zekanın günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "ORTAM ALGILAMA",
      title: "Ortamı Otomatik Tanıyın",
      description: "Ev, sokak, restoran gibi farklı ortamlar arasında geçiş yaptığınızda cihaz otomatik olarak uyum sağlar.",
    },
    {
      label: "KONUŞMA NETLİĞİ",
      title: "Kalabalıkta Konuşmayı Daha Net Duyun",
      description: "Yapay zeka, arka plan gürültüsü içinden konuşma sesini öne çıkarmaya yardımcı olur.",
    },
    {
      label: "OTOMATİK SES SEVİYESİ",
      title: "Ortama Göre Otomatik Ses Ayarı",
      description: "Ses seviyesi, ortamın gürültü düzeyine göre otomatik olarak optimize edilebilir.",
    },
    {
      label: "KİŞİSELLEŞTİRME",
      title: "Tercihlerinizden Öğrenin",
      description: "Bazı modeller, manuel yaptığınız ayarları hatırlayarak benzer ortamlarda otomatik uygular.",
    },
    {
      label: "SAĞLIK TAKİBİ",
      title: "Aktivite Verilerini Takip Edin",
      description: "Bazı üst segment modeller, adım sayısı ve sosyal etkileşim gibi verileri uygulama üzerinden sunar.",
    },
    {
      label: "GÜVENLİK",
      title: "Olası Düşme Anında Otomatik Bildirim",
      description: "Bazı modeller, olası bir düşme algıladığında önceden belirlenen kişilere otomatik bildirim gönderebilir.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorHoverBorder: "rgb(79 70 229 / 0.5)",
};
