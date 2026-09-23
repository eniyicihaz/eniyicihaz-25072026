// "İlgili İçerikler" internal-linking section for the
// /blog/basari-hikayeleri page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to real pages that
// help readers act on this page's general encouragement.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const basariHikayeleriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Kendi durumunuzu netleştirmek için ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Uyum Süreci",
      description: "Yeni bir cihaza alışma sürecinin nasıl işlediğini öğrenin.",
      href: "/rehberler/uyum-sureci",
    },
    {
      label: "Cihaz Deneme",
      description: "İlgilendiğiniz modelleri satın almadan önce deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Size uygun cihazı seçerken nelere dikkat etmeniz gerektiğini öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "İşitme Cihazı Markaları",
      description: "Farklı marka ve modelleri tek sayfada inceleyin.",
      href: "/markalar",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
