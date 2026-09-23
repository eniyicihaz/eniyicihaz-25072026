// "İlgili İçerikler" internal-linking section for the
// /blog/uzman-gorusleri page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to real pages that
// go deeper on topics this general myth-busting page only touches on.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzmanGorusleriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "İşitme Kaybı Nedir?",
      description: "İşitme kaybının türlerini ve nedenlerini daha ayrıntılı öğrenin.",
      href: "/rehberler/isitme-kaybi-nedir",
    },
    {
      label: "Uyum Süreci",
      description: "Yeni bir cihaza alışma sürecinin nasıl işlediğini öğrenin.",
      href: "/rehberler/uyum-sureci",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Size uygun cihazı seçerken nelere dikkat etmeniz gerektiğini öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Kendi durumunuzu netleştirmek için ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "İşitme Cihazı Markaları",
      description: "Farklı teknoloji seviyelerindeki markaları tek sayfada inceleyin.",
      href: "/markalar",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
