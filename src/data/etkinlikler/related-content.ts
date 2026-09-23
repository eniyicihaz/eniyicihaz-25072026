// "İlgili İçerikler" internal-linking section for the
// /blog/etkinlikler page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the final page in the
// "Blog & Haberler" series, so every link here is real — including the
// Kampanyalar sibling built earlier this session.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const etkinliklerRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kampanyalar",
      description: "Güncel kampanya kategorilerimiz hakkında bilgi edinin.",
      href: "/blog/kampanyalar",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Etkinlik dışında da ücretsiz işitme testinden faydalanabilirsiniz.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Çocuk İşitme Testi",
      description: "Okul taramaları hakkında merak ettiklerinizi öğrenin.",
      href: "/degerlendirme/cocuk-isitme-testi",
    },
    {
      label: "Uzman Görüşleri",
      description: "İşitme sağlığı hakkında doğru bilgilere ulaşın.",
      href: "/blog/uzman-gorusleri",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
