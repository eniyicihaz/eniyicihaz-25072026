// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// cocuklara-ozel page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real BTE, ITE and
// Bluetooth sibling pages and the real SGK pillar page; the two sibling
// "İşitme Cihazı Çeşitleri" pages not yet built (Görünmez, Suya Dayanıklı)
// stay "#", mirroring header.data.ts's own documented policy (isActive.ts
// already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocuklaraOzelRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Çocuklarda en sık tercih edilen, büyüyen kulağa kolayca uyarlanabilen cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Küçük pillerle uğraşmadan, tek dokunuşla dolan şarjlı modelleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Bluetooth Özellikli İşitme Cihazları",
      description: "Okulda eğitim materyalleriyle veya evde tabletle kablosuz bağlantı kuran modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Suya Dayanıklı İşitme Cihazları",
      description: "Aktif ve hareketli çocuklar için suya ve neme dayanıklı modelleri yakından tanıyın.",
      href: "/isitme-cihazlari/suya-dayanikli",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
