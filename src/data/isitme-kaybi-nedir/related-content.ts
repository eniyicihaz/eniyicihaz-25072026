// "İlgili İçerikler" internal-linking section for the /rehberler/
// isitme-kaybi-nedir page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Ücretsiz İşitme
// Testi page (the natural next step after reading this overview) and
// to two of the real degree-specific "İhtiyacınıza Göre" pages (Hafif
// and İleri Derece İşitme Kaybı) for readers who want to identify their
// own degree — this page's own evolution.ts covers TYPE, not degree,
// so these links complete the picture rather than duplicating it — and
// the real Cihaz Seçim Rehberi page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const isitmeKaybiNedirRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "İşitme durumunuzu netleştirmek için ücretsiz işitme testi hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Hafif Derece İşitme Kaybı",
      description: "26-40 dB aralığındaki hafif derece işitme kaybını yakından tanıyın.",
      href: "/ihtiyaciniza-gore/hafif-isitme-kaybi",
    },
    {
      label: "İleri Derece İşitme Kaybı",
      description: "71-90 dB aralığındaki ileri derece işitme kaybını yakından tanıyın.",
      href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "İhtiyacınıza uygun işitme cihazını nasıl seçeceğinizi öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
