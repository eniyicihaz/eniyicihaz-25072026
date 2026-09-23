// "İlgili İçerikler" internal-linking section for the /segmentler/
// standart-seri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Premium Seri
// and Ekonomik Seri pages plus the three real devicesMega pages that
// already cover the remaining three "Segmentler" menu items by design
// (Şarj Edilebilir Seri, Görünmez Seri, Çocuk Serisi). All three
// "Segmentler" siblings are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const standartSeriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Premium Seri",
      description: "En gelişmiş teknolojiyi taşıyan premium seriyi keşfedin.",
      href: "/segmentler/premium-seri",
    },
    {
      label: "Ekonomik Seri",
      description: "Temel işitme ihtiyaçları için uygun fiyatlı seçenekleri keşfedin.",
      href: "/segmentler/ekonomik-seri",
    },
    {
      label: "Şarj Edilebilir Cihazlar",
      description: "Şarj edilebilir seri modelleri detaylı inceleyin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Görünmez (CIC) Cihazlar",
      description: "Görünmez seri modelleri keşfedin.",
      href: "/isitme-cihazlari/gorunmez-cic",
    },
    {
      label: "Çocuklara Özel Cihazlar",
      description: "Çocuk serisi modelleri inceleyin.",
      href: "/isitme-cihazlari/cocuklara-ozel",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
