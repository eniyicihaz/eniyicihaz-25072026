// "Tek Taraflı İşitme Kaybında Öne Çıkan Cihaz Özellikleri" teaser grid
// for the /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi page. Renders
// through the shared BrandPageTechnology component (6-card grid), same
// technique the BTE page's use-cases.ts uses for everyday-scenario
// coverage, here scoped to the practical device features commonly
// matched to this loss type instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const tekTarafliIsitmeKaybiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Tek Taraflı İşitme Kaybında Öne Çıkan Cihaz Özellikleri",
  intro: "Bu türe sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "KABLOSUZ AKTARIM",
      title: "İyi Duyan Kulağa Kablosuz Ses Aktarımı",
      description: "CROS/BiCROS sistemleri, kötü duyan taraftaki sesi iyi duyan kulağa kablosuz olarak aktarır.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Gelişmiş Konuşma Odaklanması",
      description: "Yönlü mikrofon teknolojisi, gürültülü ortamlarda konuşmayı takip etmeye yardımcı olabilir.",
    },
    {
      label: "OTOMATİK DENGELEME",
      title: "İki Taraf Arasında Otomatik Ses Dengeleme",
      description: "Bazı sistemler, iki taraftan gelen sesleri otomatik olarak dengeleyebilir.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "GÖRÜNÜRLÜK",
      title: "Göze Az Batan Tasarım Seçenekleri",
      description: "İnce RIC modelleri, tek taraflı sistemlerde de sıkça tercih edilir.",
    },
    {
      label: "PİL SEÇENEKLERİ",
      title: "Şarjlı veya Pilli Seçenekler",
      description: "Tek taraflı sistemler hem şarjlı hem pilli seçeneklerle sunulabilir.",
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
  accentColorHoverBorder: "rgb(82 82 91 / 0.5)",
};
