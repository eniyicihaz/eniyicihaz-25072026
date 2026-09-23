// "İlgili İçerikler" internal-linking section for the
// /blog/sik-sorulan-sorular page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to the major
// topic-specific FAQ/hub locations this general page deliberately
// doesn't duplicate.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sikSorulanSorularRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Konuya Özel Sık Sorulan Sorular",
  links: [
    {
      label: "SGK Sık Sorulan Sorular",
      description: "SGK katkı payı, rapor süreci ve destek tutarları hakkındaki soruları inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi#sgk-faq-title",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Ücretsiz işitme testi süreci hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Size uygun cihazı seçerken nelere dikkat etmeniz gerektiğini öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "Rapor Süreci",
      description: "SGK sağlık kurulu raporu sürecini yakından tanıyın.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "İletişim",
      description: "Bizimle iletişime geçmenin diğer yollarını görün.",
      href: "/iletisim",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
