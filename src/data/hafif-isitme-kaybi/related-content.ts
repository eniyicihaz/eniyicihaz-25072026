// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// SGK pages; the sibling "İhtiyacınıza Göre" pages not yet built (Orta
// Derece, İleri Derece İşitme Kaybı) stay "#", mirroring header.data.ts's
// own documented policy (isActive.ts already treats "#" as
// never-current) — the same pattern the two completed series used while
// being built out.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const hafifIsitmeKaybiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Hafif kayıplarda da sıkça tercih edilen, geniş kayıp aralığına uygun cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Hafif kayıplarda görünürlüğü önceliklendiren kullanıcılar için kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Orta Derece İşitme Kaybı",
      description: "Bir sonraki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi",
    },
    {
      label: "Görünmez (CIC) İşitme Cihazları",
      description: "Hafif kayıplarda sıkça değerlendirilen, en az fark edilen kulak içi alt tiplerini inceleyin.",
      href: "/isitme-cihazlari/gorunmez-cic",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
