// "Orta Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri" teaser grid
// for the /ihtiyaciniza-gore/orta-derece-isitme-kaybi page. Renders
// through the shared BrandPageTechnology component (6-card grid), same
// technique the BTE page's use-cases.ts uses for everyday-scenario
// coverage, here scoped to the practical device features commonly
// matched to this degree instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ortaDereceIsitmeKaybiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Orta Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri",
  intro: "Bu dereceye sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "SES GÜCÜ",
      title: "Dengeli ve Yeterli Amplifikasyon",
      description: "Orta düzey ses gücü, günlük konuşmaları net duymak için genellikle yeterlidir.",
    },
    {
      label: "GÜRÜLTÜ AZALTMA",
      title: "Gelişmiş Gürültü Azaltma Desteği",
      description: "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştıran gürültü azaltma özellikleri sıkça bulunur.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Konuşmayı Öne Çıkaran Mikrofon Sistemi",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      label: "OTOMATİK PROGRAM",
      title: "Ortama Göre Otomatik Ayar",
      description: "Cihaz, farklı ortamlar arasında otomatik olarak uyum sağlayabilir.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "PİL SEÇENEKLERİ",
      title: "Şarjlı veya Pilli Seçenekler",
      description: "Orta dereceli kayıplara yönelik modeller hem şarjlı hem pilli seçeneklerle sunulabilir.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorHoverBorder: "rgb(22 163 74 / 0.5)",
};
