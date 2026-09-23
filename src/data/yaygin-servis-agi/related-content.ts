// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// yaygin-servis-agi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Güvenilir
// Teknoloji, Uzun Ömürlü Cihazlar and Orijinal Aksesuar pages (natural
// siblings this page builds on) plus the real Markalar hub and İletişim
// page — all four "Neden Orijinal" siblings built so far are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yayginServisAgiRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Servis randevusu veya sorularınız için bizimle iletişime geçin.",
      href: "/iletisim",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
