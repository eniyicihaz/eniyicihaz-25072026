// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// sarjli-teknolojiler page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Şarj Edilebilir
// Cihazlar page (the natural cross-reference from intro.ts), the real BTE
// and Kablosuz Bağlantı pages and the real SGK pillar page; the sibling
// "Teknolojilere Göre" page not yet built (Uzaktan Kontrol Özellikleri)
// stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sarjliTeknolojilerRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Şarjlı seçeneğin hangi cihaz tiplerinde bulunduğunu ve şarj yöntemlerini keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Şarjlı teknolojinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kablosuz Bağlantı Özellikleri",
      description: "Şarjlı modellerle sıkça bir arada sunulan telesarmal ve uzaktan mikrofon teknolojilerini inceleyin.",
      href: "/teknolojiler/kablosuz-baglanti",
    },
    {
      label: "Uzaktan Kontrol Özellikleri",
      description: "Cihazınızı uzaktan yönetmenizi sağlayan uygulama ve aksesuar teknolojilerini yakından tanıyın.",
      href: "/teknolojiler/uzaktan-kontrol",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
