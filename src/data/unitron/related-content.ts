// Internal-linking (Hub-and-Spoke) content for the Unitron brand page
// (/markalar/unitron). Renders through the shared
// BrandPageRelatedContent component. Links to the real, fully-built SGK
// pillar page — not a placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const unitronRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Phonak İşitme Cihazları",
      description: "Aynı Sonova Grubu çatısı altındaki farklı bir marka felsefesini karşılaştırmak isterseniz Phonak'ı inceleyin.",
      href: "/markalar/phonak",
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
};
