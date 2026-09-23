// "İlgili İçerikler" internal-linking section for the
// /sgk/cocuklarda-sgk page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real SGK pillar page,
// every sibling (SGK Katkı Payı, Rapor Süreci, Gerekli Belgeler,
// Yenileme Hakkı), plus the real Çocuk İşitme Testi page — the entire
// "SGK & Haklar" series is now built, so no "#" placeholders remain
// here.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocuklardaSgkRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Çocuk İşitme Testi",
      description: "Çocuğunuz için pediatrik işitme testi süreci hakkında bilgi edinin.",
      href: "/degerlendirme/cocuk-isitme-testi",
    },
    {
      label: "Gerekli Belgeler",
      description: "Çocuk başvurusu için gereken belgeleri öğrenin.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      label: "Rapor Süreci",
      description: "Sağlık kurulu raporu ve reçete sürecini yakından tanıyın.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Yenileme Hakkı",
      description: "Çocuğunuzun cihazını yenileme hakkı hakkında bilgi edinin.",
      href: "/sgk/yenileme-hakki",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
