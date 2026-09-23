// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// orijinal-aksesuar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Güvenilir
// Teknoloji, Uzun Ömürlü Cihazlar, Yaygın Servis Ağı and Kolay Değişim
// pages plus the real İletişim page — all five other "Neden Orijinal"
// siblings are now real; Ücretsiz Danışmanlık is the only one not listed
// here (the section already carries five links).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const orijinalAksesuarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Güvenilir Teknoloji",
      description: "Orijinal ürünlerin neden güvenilir bir teknoloji sunduğunu keşfedin.",
      href: "/neden-orijinal/guvenilir-teknoloji",
    },
    {
      label: "Uzun Ömürlü Cihazlar",
      description: "Orijinal cihazların uzun ömürlü olmasını sağlayan faktörleri yakından tanıyın.",
      href: "/neden-orijinal/uzun-omurlu-cihazlar",
    },
    {
      label: "Yaygın Servis Ağı",
      description: "Yetkili teknik servis ağımız hakkında detaylı bilgi edinin.",
      href: "/neden-orijinal/yaygin-servis-agi",
    },
    {
      label: "Kolay Değişim",
      description: "Sorunlu ürünlerde değişim ve iade sürecimiz hakkında bilgi edinin.",
      href: "/neden-orijinal/kolay-degisim",
    },
    {
      label: "Bize Ulaşın",
      description: "Aksesuar ihtiyaçlarınız için bizimle iletişime geçin.",
      href: "/iletisim",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
