// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this page
// (the first is recommended-brands.ts). Links back to the real Orta
// Derece İşitme Kaybı, BTE and Şarj Edilebilir pages and the real SGK
// pillar page; the sibling "İhtiyacınıza Göre" page not yet built (Çok
// İleri Derece İşitme Kaybı) stays "#", mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ileriDereceIsitmeKaybiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Orta Derece İşitme Kaybı",
      description: "Bir önceki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "İleri dereceli kayıplarda sıkça tercih edilen, geniş ses gücü aralığına sahip cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Güçlü modellerde sıkça bir arada sunulan, pil değiştirmeden gün boyu kullanım sağlayan şarjlı seçenekleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Çok İleri Derece İşitme Kaybı",
      description: "Bir sonraki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
