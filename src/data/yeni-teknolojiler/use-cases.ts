// "Öne Çıkan Teknoloji Kategorileri" teaser grid for the
// /blog/yeni-teknolojiler page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here mirroring the real
// /teknolojiler/* category pages by name (not by link; this component
// is text-only) so readers know which dedicated pages to explore next.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yeniTeknolojilerUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN TEKNOLOJİ KATEGORİLERİ",
  heading: "Günümüzün Öne Çıkan İşitme Cihazı Teknolojileri",
  intro: "Aşağıdaki kategoriler, güncel işitme cihazlarında en çok öne çıkan teknoloji alanlarını özetler.",
  items: [
    {
      label: "YAPAY ZEKA DESTEĞİ",
      title: "Yapay Zeka Destekli Cihazlar",
      description: "Ortamı analiz ederek sesi otomatik olarak optimize eden akıllı ses işleme teknolojisi.",
    },
    {
      label: "GÜRÜLTÜ ENGELLEME",
      title: "Gürültü Engelleme Teknolojisi",
      description: "Kalabalık ortamlarda konuşmayı ön plana çıkaran gelişmiş filtreleme sistemleri.",
    },
    {
      label: "KABLOSUZ BAĞLANTI",
      title: "Kablosuz Bağlantı Özellikleri",
      description: "Akıllı telefon, televizyon ve diğer cihazlarla doğrudan bağlantı kurabilme.",
    },
    {
      label: "ŞARJLI TEKNOLOJİ",
      title: "Şarj Edilebilir Piller",
      description: "Pil değiştirme ihtiyacını ortadan kaldıran pratik şarj sistemleri.",
    },
    {
      label: "UZAKTAN KONTROL",
      title: "Uzaktan Kontrol Özellikleri",
      description: "Cihaz ayarlarının uzaktan yapılabilmesini sağlayan telecare özellikleri.",
    },
    {
      label: "TİNNİTUS ÇÖZÜMLERİ",
      title: "Kulak Çınlaması Yönetim Teknolojileri",
      description: "Tinnitus deneyimini yönetmeye yardımcı olan entegre ses maskeleme özellikleri.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorHoverBorder: "rgb(37 99 235 / 0.5)",
};
