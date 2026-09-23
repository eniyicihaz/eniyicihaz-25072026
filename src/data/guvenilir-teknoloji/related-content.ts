// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// guvenilir-teknoloji page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Uzun Ömürlü
// Cihazlar, Yaygın Servis Ağı and Orijinal Aksesuar pages, plus the real
// Markalar hub and İletişim page — all four "Neden Orijinal" siblings
// built so far are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const guvenilirTeknolojiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
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
      description: "Orijinallik doğrulama veya sorularınız için bizimle iletişime geçin.",
      href: "/iletisim",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
