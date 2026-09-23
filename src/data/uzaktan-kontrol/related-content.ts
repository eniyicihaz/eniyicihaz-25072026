// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// uzaktan-kontrol page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, Yapay Zeka
// Destekli and Kablosuz Bağlantı pages and the real SGK pillar page; the
// sibling "Teknolojilere Göre" page not yet built (Tinnitus (Kulak
// Çınlaması) Çözümleri) stays "#", mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzaktanKontrolRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Uzaktan kontrol özelliklerinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Yapay Zeka Destekli Cihazlar",
      description: "Uzaktan destek önerilerini bir üst seviyeye taşıyan yapay zeka destekli işlemcileri inceleyin.",
      href: "/teknolojiler/yapay-zeka-destekli",
    },
    {
      label: "Kablosuz Bağlantı Özellikleri",
      description: "Uygulama ve uzaktan destek ile birlikte çalışan diğer kablosuz protokolleri keşfedin.",
      href: "/teknolojiler/kablosuz-baglanti",
    },
    {
      label: "Tinnitus (Kulak Çınlaması) Çözümleri",
      description: "Uygulama üzerinden yönetilebilen tinnitus rahatlatma özelliklerini yakından tanıyın.",
      href: "/teknolojiler/tinnitus-cozumleri",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
