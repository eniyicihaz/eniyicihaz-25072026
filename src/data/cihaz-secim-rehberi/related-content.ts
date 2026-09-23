// "İlgili İçerikler" internal-linking section for the /rehberler/
// cihaz-secim-rehberi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real İşitme Kaybı
// Nedir?, Ücretsiz İşitme Testi and Cihaz Deneme pages (natural
// precursors and next steps this decision guide connects to), plus the
// real Premium Seri page (Segmentler) for readers who want the full
// tier comparison this page only summarizes, and the real İlk Kullanım
// Rehberi page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazSecimRehberiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "İşitme Kaybı Nedir?",
      description: "İşitme kaybının türlerini ve nedenlerini yakından tanıyın.",
      href: "/rehberler/isitme-kaybi-nedir",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Seçim sürecinin ilk adımı olan ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Deneme",
      description: "Karar vermeden önce cihazınızı gerçek yaşam koşullarında deneyin.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "İlk Kullanım Rehberi",
      description: "Cihazınızı seçtikten sonraki ilk kullanım sürecini keşfedin.",
      href: "/rehberler/ilk-kullanim-rehberi",
    },
    {
      label: "Premium Seri",
      description: "Üst segment işitme cihazlarının sunduğu gelişmiş özellikleri keşfedin.",
      href: "/segmentler/premium-seri",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
