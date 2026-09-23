// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// kablosuz-baglanti page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE and
// Bluetooth Özellikli pages, the real Konuşma Odaklı page and the real
// SGK pillar page; the sibling "Teknolojilere Göre" page not yet built
// (Şarjlı Teknolojiler) stays "#", mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kablosuzBaglantiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Telefon ve TV ile doğrudan kablosuz bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Kablosuz bağlantı protokollerinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Konuşma Odaklı Teknolojiler",
      description: "Kulaktan kulağa bağlantıyla birlikte çalışan yönlü mikrofon teknolojilerini keşfedin.",
      href: "/teknolojiler/konusma-odakli",
    },
    {
      label: "Şarjlı Teknolojiler",
      description: "Kablosuz bağlantı özellikleriyle sıkça bir arada sunulan şarjlı modelleri yakından tanıyın.",
      href: "/teknolojiler/sarjli-teknolojiler",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
