// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// sarj-edilebilir page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE and ITE
// master pages and the real SGK pillar page; the sibling "İşitme Cihazı
// Çeşitleri" pages not yet built (Bluetooth, Görünmez) stay "#",
// mirroring header.data.ts's own documented policy (isActive.ts already
// treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sarjEdilebilirRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Şarjlı seçeneğin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Şarjlı seçeneğin sınırlı sayıda modelde sunulduğu kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Telefon ve TV ile doğrudan kablosuz bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Görünmez (CIC / IIC) İşitme Cihazları",
      description: "Kulak içi ailesinin en küçük ve en az fark edilen alt tiplerini yakından tanıyın.",
      href: "/isitme-cihazlari/gorunmez-cic",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
