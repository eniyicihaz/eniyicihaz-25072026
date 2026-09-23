// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// uzun-omurlu-cihazlar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Güvenilir
// Teknoloji, Yaygın Servis Ağı and Orijinal Aksesuar pages (natural
// siblings this page builds on) plus the real Markalar hub and İletişim
// page — all four "Neden Orijinal" siblings built so far are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzunOmurluCihazlarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Güvenilir Teknoloji",
      description: "Orijinal ürünlerin neden güvenilir bir teknoloji sunduğunu keşfedin.",
      href: "/neden-orijinal/guvenilir-teknoloji",
    },
    {
      label: "Yaygın Servis Ağı",
      description: "Yetkili teknik servis ağımız hakkında detaylı bilgi edinin.",
      href: "/neden-orijinal/yaygin-servis-agi",
    },
    {
      label: "Orijinal Aksesuar",
      description: "Cihazınız için orijinal aksesuar ve yedek parça seçeneklerini keşfedin.",
      href: "/neden-orijinal/orijinal-aksesuar",
    },
    {
      label: "Tüm Markalarımız",
      description: "Yetkili satıcısı olduğumuz tüm markaları ve ürün ailelerini inceleyin.",
      href: "/markalar",
    },
    {
      label: "Bize Ulaşın",
      description: "Bakım planı veya yedek parça ihtiyaçlarınız için bizimle iletişime geçin.",
      href: "/iletisim",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
