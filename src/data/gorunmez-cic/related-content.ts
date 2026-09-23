// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// gorunmez-cic page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Bluetooth sibling pages, the real Çocuklara Özel page and the real SGK
// pillar page; the one sibling "İşitme Cihazı Çeşitleri" page not yet
// built (Suya Dayanıklı) stays "#", mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gorunmezCicRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "CIC/IIC'nin de içinde yer aldığı kulak içi ailesinin tüm alt tiplerini inceleyin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Daha geniş kayıp aralığı ve ek özellik desteği sunan alternatif cihaz ailesini keşfedin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Telefon ve TV ile doğrudan kablosuz bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Suya Dayanıklı İşitme Cihazları",
      description: "Nem ve suya karşı ek koruma sunan modelleri yakından tanıyın.",
      href: "/isitme-cihazlari/suya-dayanikli",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
