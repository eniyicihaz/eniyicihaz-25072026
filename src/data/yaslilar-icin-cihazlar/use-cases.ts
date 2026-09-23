// "Yaşlı Kullanıcılar İçin Öne Çıkan Cihaz Özellikleri" teaser grid for
// the /ihtiyaciniza-gore/yaslilar-icin-cihazlar page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique the
// BTE page's use-cases.ts uses for everyday-scenario coverage, here
// scoped to the practical device features commonly matched to this need
// group instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yaslilarIcinCihazlarUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Yaşlı Kullanıcılar İçin Öne Çıkan Cihaz Özellikleri",
  intro: "Bu ihtiyaç grubuna sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "KULLANIM KOLAYLIĞI",
      title: "Büyük ve Kolay Erişilebilir Kontroller",
      description: "Basit düğmeler ve az sayıda ayar seçeneği günlük kullanımı kolaylaştırabilir.",
    },
    {
      label: "ŞARJ KOLAYLIĞI",
      title: "Küçük Pil Değiştirme Derdi Olmadan Kullanım",
      description: "Şarj edilebilir sistemler gece boyu şarj edilip sabah kullanıma hazır hale gelebilir.",
    },
    {
      label: "AİLE DESTEĞİ",
      title: "Aile Destekli Uzaktan Ayar",
      description: "Bazı sistemler, aile bireylerinin veya uzmanın uzaktan destek sağlamasına imkan tanır.",
    },
    {
      label: "OTOMATİK AYAR",
      title: "Otomatik Ortam Algılama",
      description: "Cihaz bulunduğu ortama göre ayarlarını otomatik olarak uyarlayabilir.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "GÜVENLİK",
      title: "Önemli Sesleri Fark Etmeye Yardımcı Olur",
      description: "Kapı zili, telefon veya alarm gibi seslerin fark edilmesine katkı sağlayabilir.",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorHoverBorder: "rgb(202 138 4 / 0.5)",
};
