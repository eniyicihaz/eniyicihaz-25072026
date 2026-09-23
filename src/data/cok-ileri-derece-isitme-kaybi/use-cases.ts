// "Çok İleri Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri" teaser
// grid for the /ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique the BTE page's use-cases.ts uses for
// everyday-scenario coverage, here scoped to the practical device
// features commonly matched to this degree instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cokIleriDereceIsitmeKaybiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Çok İleri Derece İşitme Kaybında Öne Çıkan Cihaz Özellikleri",
  intro: "Bu dereceye sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "SES GÜCÜ",
      title: "En Yüksek Kapasiteli Amplifikasyon",
      description: "Çok ileri dereceli kayıplarda, mevcut en yüksek amplifikasyon kapasitesi gerekebilir.",
    },
    {
      label: "GERİ BESLEME ENGELLEME",
      title: "Gelişmiş Islık Sesi Önleme",
      description: "Yüksek amplifikasyon seviyelerinde oluşabilecek ıslık sesini engelleyen gelişmiş teknoloji sıkça bulunur.",
    },
    {
      label: "UYARI SİSTEMLERİ",
      title: "Ek Uyarı Sistemleriyle Uyum",
      description: "Bazı modeller, kapı zili veya alarm gibi sesler için titreşimli veya görsel uyarı sistemleriyle uyumlu çalışabilir.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Gelişmiş Konuşma Odaklanması",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "DAYANIKLI GÖVDE",
      title: "Güçlü ve Dayanıklı Gövde Yapısı",
      description: "En yüksek amplifikasyon kapasitesi, genellikle daha büyük ve dayanıklı bir gövdeyle birlikte gelir.",
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
  accentColorHoverBorder: "rgb(146 64 14 / 0.5)",
};
