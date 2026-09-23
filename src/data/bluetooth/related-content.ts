// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// bluetooth-ozellikli page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Şarj Edilebilir sibling pages and the real SGK pillar page; the two
// sibling "İşitme Cihazı Çeşitleri" pages not yet built (Görünmez, Suya
// Dayanıklı) stay "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const bluetoothRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Bluetooth özelliğinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Bluetooth özelliğinin sunulduğu, daha az fark edilen kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Bluetooth ile birlikte sıkça tercih edilen, pil değiştirmeden gün boyu kullanım sunan şarjlı modelleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
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
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
