// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// kolay-degisim page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to all five real sibling pages
// in the "Neden Orijinal" series (Güvenilir Teknoloji, Uzun Ömürlü
// Cihazlar, Yaygın Servis Ağı, Orijinal Aksesuar, Ücretsiz Danışmanlık)
// — this is the sixth and final page in the series, so every sibling is
// now real and there is nothing left to leave as "#".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kolayDegisimRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Orijinal Aksesuar",
      description: "Cihazınız için orijinal aksesuar ve yedek parça seçeneklerini keşfedin.",
      href: "/neden-orijinal/orijinal-aksesuar",
    },
    {
      label: "Ücretsiz Danışmanlık",
      description: "Ücretsiz işitme testi ve uzman danışmanlığımız hakkında bilgi edinin.",
      href: "/neden-orijinal/ucretsiz-danismanlik",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
