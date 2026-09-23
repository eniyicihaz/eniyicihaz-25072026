// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// suya-dayanikli page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the seventh and final page in
// the "İşitme Cihazı Çeşitleri" series (see header.data.ts's devicesMega),
// so every sibling page now exists as a real route — unlike every prior
// page in the series, none of these links need to stay "#".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const suyaDayankliRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Suya dayanıklı seçeneğin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Çocuklara Özel İşitme Cihazları",
      description: "Aktif ve hareketli çocuklar için dayanıklılık öne çıkan özel tasarımları keşfedin.",
      href: "/isitme-cihazlari/cocuklara-ozel",
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
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
