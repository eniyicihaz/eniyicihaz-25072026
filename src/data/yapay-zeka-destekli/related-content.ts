// "İlgili İçerikler" internal-linking section for the /teknolojiler/
// yapay-zeka-destekli page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Bluetooth pages and the real SGK pillar page; the sibling
// "Teknolojilere Göre" pages not yet built (this is the first page in
// that series) stay "#", mirroring header.data.ts's own documented
// policy (isActive.ts already treats "#" as never-current) — the same
// pattern the "İşitme Cihazı Çeşitleri" series used while it was being
// built out.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yapayZekaDestekliRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Yapay zeka destekli teknolojinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Yapay zeka destekli işlemcinin sunulduğu, daha az fark edilen kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Yapay zeka ile birlikte sıkça tercih edilen, telefon ve TV ile doğrudan bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Gürültü Engelleme Teknolojisi",
      description: "Gürültülü ortamlarda konuşmayı öne çıkaran teknolojileri yakından tanıyın.",
      href: "/teknolojiler/gurultu-engelleme",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
