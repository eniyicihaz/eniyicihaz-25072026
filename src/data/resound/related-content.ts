// Internal-linking (Hub-and-Spoke) content for the ReSound brand page
// (/markalar/resound). Renders through the shared BrandPageRelatedContent
// component. Links to the real, fully-built SGK pillar page — not a
// placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const resoundRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Tüm İşitme Cihazı Markaları",
      description: "Çalıştığımız diğer markaları ve ürün ailelerini keşfedin.",
      href: "/markalar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini, uygunluk kriterlerini ve süreci öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Widex İşitme Cihazları",
      description: "Doğal ses işleme odaklı bir yaklaşımı karşılaştırmak isterseniz Widex'i inceleyin.",
      href: "/markalar/widex",
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
};
