// "İlgili İçerikler" internal-linking section for the /segmentler/
// premium-seri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Standart Seri and
// Ekonomik Seri pages plus the three real devicesMega pages that
// already cover the remaining three "Segmentler" menu items by design
// (Şarj Edilebilir Seri, Görünmez Seri, Çocuk Serisi are the exact same
// topics as the already-built /isitme-cihazlari/sarj-edilebilir,
// /isitme-cihazlari/gorunmez-cic and /isitme-cihazlari/cocuklara-ozel
// pages — those three menu items point straight at this existing
// content rather than getting new duplicate pages at new URLs). All
// three "Segmentler" siblings are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const premiumSeriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Standart Seri",
      description: "Günlük kullanım için dengeli bir özellik seti sunan standart seriyi inceleyin.",
      href: "/segmentler/standart-seri",
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
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
