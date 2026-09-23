// "Standart Seride Öne Çıkan Özellikler" teaser grid for the
// /segmentler/standart-seri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the feature set commonly bundled into a brand's standard tier.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const standartSeriUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Standart Seride Öne Çıkan Özellikler",
  intro: "Standart seride sıkça bulunan özelliklere daha yakından bakalım.",
  items: [
    {
      label: "OTOMATİK AYAR",
      title: "Günlük Ortamlara Otomatik Uyum",
      description: "Cihaz, günlük ortamlara göre sesi otomatik olarak ayarlayabilir.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Temel Düzeyde Konuşma Odaklanması",
      description: "Standart yönlü mikrofon desteği, günlük sohbetleri takip etmeye yardımcı olur.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ile Temel Kablosuz Bağlantı",
      description: "Çoğu model, telefon görüşmeleri için temel bağlantı desteği sunar.",
    },
    {
      label: "PİL SEÇENEKLERİ",
      title: "Şarjlı veya Pilli Seçenekler",
      description: "Standart seri, hem şarjlı hem pilli seçeneklerle sunulabilir.",
    },
    {
      label: "FİYAT-PERFORMANS",
      title: "Dengeli Yatırım İmkânı",
      description: "Standart seri, uygun bir fiyat-performans dengesi sunar.",
    },
    {
      label: "GARANTİ",
      title: "Standart Garanti Kapsamı",
      description: "Standart seri modeller, üretici garantisi ile sunulur.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorHoverBorder: "rgb(2 132 199 / 0.5)",
};
