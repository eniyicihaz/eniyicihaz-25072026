// "İlgili İçerikler" internal-linking section for the /segmentler/
// ekonomik-seri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Premium Seri and
// Standart Seri pages (the two natural siblings this page completes the
// ladder with) plus the three real devicesMega pages that already cover
// the remaining three "Segmentler" menu items by design (Şarj
// Edilebilir Seri, Görünmez Seri, Çocuk Serisi). This is the third and
// final page in the "Segmentler" series, so every link here is real —
// there is no next sibling left to leave as "#".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ekonomikSeriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Premium Seri",
      description: "En gelişmiş teknolojiyi taşıyan premium seriyi keşfedin.",
      href: "/segmentler/premium-seri",
    },
    {
      label: "Standart Seri",
      description: "Günlük kullanım için dengeli bir özellik seti sunan standart seriyi inceleyin.",
      href: "/segmentler/standart-seri",
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
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
