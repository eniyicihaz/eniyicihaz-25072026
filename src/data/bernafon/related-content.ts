// Internal-linking (Hub-and-Spoke) content for the Bernafon brand page
// (/markalar/bernafon). Renders through the shared BrandPageRelatedContent
// component. Links to the real, fully-built SGK pillar page — not a
// placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const bernafonRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Oticon İşitme Cihazları",
      description: "Aynı grup çatısı altındaki farklı bir marka felsefesini karşılaştırmak isterseniz Oticon'u inceleyin.",
      href: "/markalar/oticon",
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
};
