// "Premium Seride Öne Çıkan Özellikler" teaser grid for the
// /segmentler/premium-seri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the feature set commonly bundled into a brand's premium tier.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const premiumSeriUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Premium Seride Öne Çıkan Özellikler",
  intro: "Premium seriyi diğer serilerden ayıran özelliklere daha yakından bakalım.",
  items: [
    {
      label: "YAPAY ZEKA",
      title: "Yapay Zeka Destekli Ses İşleme",
      description: "Ortamı otomatik analiz ederek en uygun dinleme deneyimini sunar.",
    },
    {
      label: "BAĞLANTI",
      title: "Tam Kablosuz Bağlantı",
      description: "Telefon, TV ve diğer cihazlarla kesintisiz bağlantı sağlar.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Gelişmiş Yönlü Mikrofon Sistemi",
      description: "Kalabalık ortamlarda hedef konuşmayı öne çıkarır.",
    },
    {
      label: "PİL ÖMRÜ",
      title: "Uzun Pil Ömrü ve Hızlı Şarj",
      description: "Yoğun bir günü tamamlamaya yetecek pil ömrü sunar.",
    },
    {
      label: "KİŞİSELLEŞTİRME",
      title: "Detaylı Kişiselleştirme Seçenekleri",
      description: "Cihaz, ihtiyacınıza göre ince ayar yapılabilir.",
    },
    {
      label: "GARANTİ",
      title: "Kapsamlı Garanti ve Öncelikli Destek",
      description: "Premium seri modeller genellikle daha kapsamlı garanti ile sunulur.",
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorHoverBorder: "rgb(234 179 8 / 0.5)",
};
