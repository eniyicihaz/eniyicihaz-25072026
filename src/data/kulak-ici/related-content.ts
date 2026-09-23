// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// kulak-ici-ite page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE master
// page, the real Şarj Edilebilir page and the real SGK pillar page; the
// two remaining sibling "İşitme Cihazı Çeşitleri" pages (Görünmez,
// Bluetooth) are planned but not yet built, so they stay "#" — mirroring
// header.data.ts's own documented policy (isActive.ts already treats "#"
// as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kulakIciRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "ITE'ye alternatif, kulak kepçesinin arkasına yerleşen cihaz tipini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Görünmez (CIC / IIC) İşitme Cihazları",
      description: "Kulak içi ailesinin en küçük ve en az fark edilen alt tiplerini yakından tanıyın.",
      href: "/isitme-cihazlari/gorunmez-cic",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Pil değiştirmeden gün boyu kullanım sunan şarjlı modelleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Telefon ve TV ile doğrudan kablosuz bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
