// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// konusma-odakli page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Gürültü Engelleme pages and the real SGK pillar page; the sibling
// "Teknolojilere Göre" page not yet built (Kablosuz Bağlantı Özellikleri)
// stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const konusmaOdakliRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Yönlü mikrofon teknolojisinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Konuşma odaklı teknolojinin sunulduğu, daha az fark edilen kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Gürültü Engelleme Teknolojisi",
      description: "Yönlü mikrofonla birlikte çalışan, sabit ve ani gürültüleri azaltan teknolojileri inceleyin.",
      href: "/teknolojiler/gurultu-engelleme",
    },
    {
      label: "Kablosuz Bağlantı Özellikleri",
      description: "Telefon, TV ve diğer cihazlarla kablosuz bağlantı kuran teknolojileri yakından tanıyın.",
      href: "/teknolojiler/kablosuz-baglanti",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
