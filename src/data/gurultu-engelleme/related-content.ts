// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// gurultu-engelleme page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Yapay Zeka Destekli pages and the real SGK pillar page; the sibling
// "Teknolojilere Göre" page not yet built (Konuşma Odaklı Teknolojiler)
// stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gurultuEngellemeRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Gürültü engelleme teknolojisinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Gürültü engelleme özelliğinin sunulduğu, daha az fark edilen kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Yapay Zeka Destekli Cihazlar",
      description: "Gürültü sınıflandırmasını bir üst seviyeye taşıyan yapay zeka destekli işlemcileri inceleyin.",
      href: "/teknolojiler/yapay-zeka-destekli",
    },
    {
      label: "Konuşma Odaklı Teknolojiler",
      description: "Konuşmayı öne çıkaran yönlü mikrofon ve odaklanma teknolojilerini yakından tanıyın.",
      href: "/teknolojiler/konusma-odakli",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
