// "İlgili İçerikler" internal-linking section for the /sgk/katki-payi
// page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Prominently links to the real SGK
// pillar page first — the authoritative source for current TL figures
// this page deliberately doesn't restate — plus the real Ücretsiz
// İşitme Testi page (the natural first step before any SGK process).
// "Rapor Süreci" and "Gerekli Belgeler" now point to their real pages
// (/sgk/rapor-sureci, /sgk/gerekli-belgeler); every "SGK & Haklar"
// sibling built so far is now real, mirroring header.data.ts's own
// documented policy (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sgkKatkiPayiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "SGK sürecinin ilk adımı olan ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Rapor Süreci",
      description: "Sağlık kurulu raporu ve reçete sürecini yakından tanıyın.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "Gerekli Belgeler",
      description: "SGK başvurusu için gereken belgeleri öğrenin.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Bütçenize ve SGK desteğinize uygun cihazı nasıl seçeceğinizi öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
