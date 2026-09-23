// "İlgili İçerikler" internal-linking section for the
// /sgk/yenileme-hakki page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the final page in the "SGK &
// Haklar" series, so every link here is real — the pillar page and all
// four prior siblings (SGK Katkı Payı, Rapor Süreci, Gerekli Belgeler,
// Çocuklarda SGK). No "#" placeholders remain in this series.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yenilemeHakkiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve yenileme süresini inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "SGK Katkı Payı",
      description: "Yeni cihazınız için katkı payının nasıl hesaplandığını öğrenin.",
      href: "/sgk/katki-payi",
    },
    {
      label: "Rapor Süreci",
      description: "Yenileme başvurunuz için güncel rapor sürecini öğrenin.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "Gerekli Belgeler",
      description: "Yenileme başvurusu için gereken belgeleri öğrenin.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      label: "Çocuklarda SGK",
      description: "Çocuklarda yenileme sürecinin farklarını öğrenin.",
      href: "/sgk/cocuklarda-sgk",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
