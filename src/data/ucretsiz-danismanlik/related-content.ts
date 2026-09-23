// "İlgili İçerikler" internal-linking section for the /neden-orijinal/
// ucretsiz-danismanlik page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Güvenilir
// Teknoloji, Yaygın Servis Ağı and Kolay Değişim pages, the real SGK
// pillar page (a natural cross-reference given this page's own
// SGK-guidance section), and the real Markalar hub — every "Neden
// Orijinal" sibling is now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ucretsizDanismanlikRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Kolay Değişim",
      description: "Sorunlu ürünlerde değişim ve iade sürecimiz hakkında bilgi edinin.",
      href: "/neden-orijinal/kolay-degisim",
    },
    {
      label: "Tüm Markalarımız",
      description: "Yetkili satıcısı olduğumuz tüm markaları ve ürün ailelerini inceleyin.",
      href: "/markalar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
