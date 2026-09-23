// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// tinnitus-cozumleri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the seventh and final page in
// the "Teknolojilere Göre" series (see header.data.ts's devicesMega), so
// every sibling page in this column now exists as a real route — unlike
// every prior page in the series, none of these links need to stay "#".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tinnitusCozumleriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Tinnitus destek özelliğinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Tinnitus destek özelliğinin sunulduğu, daha az fark edilen kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Uzaktan Kontrol Özellikleri",
      description: "Tinnitus destek sesini uygulama üzerinden yönetmenizi sağlayan teknolojileri inceleyin.",
      href: "/teknolojiler/uzaktan-kontrol",
    },
    {
      label: "Yapay Zeka Destekli Cihazlar",
      description: "Ortam analiziyle çalışan yapay zeka destekli işlemcileri keşfedin.",
      href: "/teknolojiler/yapay-zeka-destekli",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
