// "İlgili İçerikler" internal-linking section for the /sgk/rapor-sureci
// page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real SGK pillar page,
// the real SGK Katkı Payı sibling, and the real Ücretsiz İşitme Testi
// and audiological-test pages. "Gerekli Belgeler" now points to its
// real page (/sgk/gerekli-belgeler); the remaining sibling "SGK &
// Haklar" page not yet built (Çocuklarda SGK) stays "#", mirroring
// header.data.ts's own documented policy (isActive.ts already treats
// "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const raporSureciRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "Güncel SGK destek tutarlarını ve ödeme tablosunu inceleyin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "SGK Katkı Payı",
      description: "Katkı payının nasıl hesaplandığını genel hatlarıyla öğrenin.",
      href: "/sgk/katki-payi",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Rapor sürecinin temelini oluşturan işitme testleri hakkında bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Gerekli Belgeler",
      description: "SGK başvurusu için gereken tüm belgeleri öğrenin.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      label: "Odyometri",
      description: "Raporunuzun temelini oluşturan işitme testini yakından tanıyın.",
      href: "/degerlendirme/odyometri",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
