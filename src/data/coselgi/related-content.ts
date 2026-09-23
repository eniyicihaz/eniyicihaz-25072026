// Internal-linking (Hub-and-Spoke) content for the Coselgi brand page
// (/markalar/coselgi). Renders through the shared
// BrandPageRelatedContent component. Links to the real, fully-built SGK
// pillar page — not a placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const coselgiRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Coselgi'nin bağlı olduğu ana markanın kendi teknolojisini incelemek isterseniz Widex'i keşfedin.",
      href: "/markalar/widex",
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
};
