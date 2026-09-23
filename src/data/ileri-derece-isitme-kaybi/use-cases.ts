// "İleri Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri" teaser grid
// for the /ihtiyaciniza-gore/ileri-derece-isitme-kaybi page. Renders
// through the shared BrandPageTechnology component (6-card grid), same
// technique the BTE page's use-cases.ts uses for everyday-scenario
// coverage, here scoped to the practical device features commonly
// matched to this degree instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ileriDereceIsitmeKaybiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "İleri Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri",
  intro: "Bu dereceye sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "SES GÜCÜ",
      title: "Yüksek Kapasiteli Amplifikasyon",
      description: "İleri dereceli kayıplarda konuşmaları anlaşılır kılmak için güçlü amplifikasyon kapasitesi gerekir.",
    },
    {
      label: "GERİ BESLEME ENGELLEME",
      title: "Islık Sesini (Feedback) Önleme",
      description: "Yüksek amplifikasyon seviyelerinde oluşabilecek ıslık sesini engelleyen teknoloji sıkça bulunur.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Gelişmiş Konuşma Odaklanması",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      label: "GÜRÜLTÜ AZALTMA",
      title: "Gelişmiş Gürültü Azaltma Desteği",
      description: "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştıran gelişmiş gürültü azaltma özellikleri sıkça bulunur.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "DAYANIKLI GÖVDE",
      title: "Daha Büyük ve Dayanıklı Gövde Yapısı",
      description: "Güçlü amplifikasyon kapasitesi genellikle biraz daha büyük ve dayanıklı bir gövde ile birlikte gelir.",
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
  accentColorHoverBorder: "rgb(87 83 78 / 0.5)",
};
