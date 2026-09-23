// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this page
// (the first is recommended-brands.ts). Links back to the real İleri
// Derece İşitme Kaybı, BTE and Şarj Edilebilir pages and the real SGK
// pillar page; the sibling "İhtiyacınıza Göre" page not yet built (Tek
// Taraflı İşitme Kaybı) stays "#", mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).
// This completes the four-page dB-degree ladder (Hafif -> Orta -> İleri
// -> Çok İleri), all now cross-linked in sequence.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cokIleriDereceIsitmeKaybiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "İleri Derece İşitme Kaybı",
      description: "Bir önceki dereceyi ve bu derecede sıkça tercih edilen cihazları yakından tanıyın.",
      href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Çok ileri dereceli kayıplarda birincil seçenek olan power BTE ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Güçlü modellerde sıkça bir arada sunulan, pil değiştirmeden gün boyu kullanım sağlayan şarjlı seçenekleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Tek Taraflı İşitme Kaybı",
      description: "Yalnızca bir kulağı etkileyen işitme kaybı türünü ve cihaz seçeneklerini yakından tanıyın.",
      href: "#",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
