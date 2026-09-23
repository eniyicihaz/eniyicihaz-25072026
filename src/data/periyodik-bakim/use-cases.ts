// "Periyodik Bakımda Neler Yapılır?" teaser grid for the
// /servis-bakim/periyodik-bakim page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// maintenance tasks performed during the appointment.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const periyodikBakimUseCases: BrandPageTechnologyContent = {
  badge: "PERİYODİK BAKIMDA NELER YAPILIR",
  heading: "Periyodik Bakımda Neler Yapılır?",
  intro: "Randevu sırasında gerçekleştirilen bakım adımlarına daha yakından bakalım.",
  items: [
    {
      label: "BALMUMU FİLTRESİ",
      title: "Balmumu Filtresi Değişimi",
      description: "Aşınan veya tıkanan balmumu filtresi yenilenir.",
    },
    {
      label: "TÜP / KULAK UCU",
      title: "Tüp veya Kulak Ucu Değişimi",
      description: "Sertleşen veya eskiyen tüp ve kulak ucu yenilenir.",
    },
    {
      label: "MİKROFON TEMİZLİĞİ",
      title: "Mikrofon ve Hoparlör Portu Temizliği",
      description: "Ses girişi ve çıkışını etkileyebilecek toz ve kir temizlenir.",
    },
    {
      label: "AŞINMA KONTROLÜ",
      title: "Genel Aşınma Kontrolü",
      description: "Cihazın gövdesi ve bağlantı noktaları genel aşınma açısından incelenir.",
    },
    {
      label: "FONKSİYON TESTİ",
      title: "Bakım Sonrası Fonksiyon Testi",
      description: "Bakım sonrasında cihazın düzgün çalıştığı birlikte doğrulanır.",
    },
    {
      label: "BAKIM PLANLAMASI",
      title: "Sonraki Bakımın Planlanması",
      description: "Kullanım yoğunluğunuza uygun bir sonraki bakım tarihi belirlenir.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorHoverBorder: "rgb(101 163 13 / 0.5)",
};
