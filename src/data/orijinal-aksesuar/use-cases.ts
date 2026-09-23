// "Sunduğumuz Orijinal Aksesuar Kategorileri" teaser grid for the
// /neden-orijinal/orijinal-aksesuar page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete accessory categories Avrasya İşitme provides instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const orijinalAksesuarUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN AKSESUARLAR",
  heading: "Sunduğumuz Orijinal Aksesuar Kategorileri",
  intro: "Cihazınızın ihtiyaç duyabileceği aksesuar kategorilerine daha yakından bakalım.",
  items: [
    {
      label: "KULAK UÇLARI",
      title: "Orijinal Kulak Uçları ve Kalıplar",
      description: "Cihazınıza özel, farklı boy ve tiplerde orijinal kulak ucu seçenekleri sunuyoruz.",
    },
    {
      label: "CERUMEN FİLTRELERİ",
      title: "Orijinal Cerumen (Kulak Kiri) Filtreleri",
      description: "Cihazınızın hoparlörünü korumaya yardımcı olan orijinal filtreler sunuyoruz.",
    },
    {
      label: "PİL VE ŞARJ",
      title: "Orijinal Pil ve Şarj Aksesuarları",
      description: "Cihazınıza uygun orijinal piller ve şarj kutuları temin ediyoruz.",
    },
    {
      label: "TEMİZLİK KİTİ",
      title: "Orijinal Temizlik ve Bakım Kiti",
      description: "Cihazınızın günlük bakımı için orijinal temizlik ürünleri sunuyoruz.",
    },
    {
      label: "UZAKTAN KUMANDA",
      title: "Orijinal Uzaktan Kumanda ve Aksesuarlar",
      description: "Bazı modeller için orijinal uzaktan kumanda ve ek aksesuarlar sunuyoruz.",
    },
    {
      label: "TV VE TELEFON BAĞLANTISI",
      title: "Orijinal Streaming Aksesuarları",
      description: "TV ve telefon bağlantısı için orijinal streaming aksesuarları sunuyoruz.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorHoverBorder: "rgb(124 58 237 / 0.5)",
};
