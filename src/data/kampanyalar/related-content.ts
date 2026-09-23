// "İlgili İçerikler" internal-linking section for the
// /blog/kampanyalar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to real pages that help
// readers plan their purchase, including the pillar SGK page for
// current authoritative figures.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kampanyalarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Bütçenize ve ihtiyacınıza uygun cihazı nasıl seçeceğinizi öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Sürecinizin ilk adımı olan ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Deneme",
      description: "İlgilendiğiniz modelleri satın almadan önce deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "İşitme Cihazı Markaları",
      description: "Farklı marka ve modelleri tek sayfada inceleyin.",
      href: "/markalar",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
