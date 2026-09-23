// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this page
// (the first is recommended-brands.ts). Links back to the real BTE, ITE
// and Hafif İşitme Kaybı pages and the real SGK pillar page; the sibling
// "İhtiyacınıza Göre" page not yet built (İleri Derece İşitme Kaybı)
// stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ortaDereceIsitmeKaybiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Hafif İşitme Kaybı",
      description: "Bir önceki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/hafif-isitme-kaybi",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Orta dereceli kayıplarda sıkça tercih edilen, geniş kayıp aralığına uygun cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Orta dereceli kayıplarda bazı modelleri uygun olabilecek kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "İleri Derece İşitme Kaybı",
      description: "Bir sonraki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
