// "İlgili İçerikler" internal-linking section for the
// /sgk/gerekli-belgeler page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to the real SGK
// pillar page and every sibling (SGK Katkı Payı, Rapor Süreci,
// Çocuklarda SGK, Yenileme Hakkı) — the entire "SGK & Haklar" series is
// now built, so no "#" placeholders remain here.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gerekliBelgelerRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Rapor Süreci",
      description: "Başvurunuzun temelini oluşturan sağlık kurulu raporu ve reçete sürecini öğrenin.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Çocuklarda SGK",
      description: "Çocuk başvurularında istenen ek belgeleri ve süreci öğrenin.",
      href: "/sgk/cocuklarda-sgk",
    },
    {
      label: "Yenileme Hakkı",
      description: "Cihaz yenileme başvurusunda istenen belgeleri öğrenin.",
      href: "/sgk/yenileme-hakki",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "SGK sürecinin ilk adımı olan ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
