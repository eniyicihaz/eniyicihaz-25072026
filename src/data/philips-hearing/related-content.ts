// Internal-linking (Hub-and-Spoke) content for the Philips Hearing brand
// page (/markalar/philips-hearing). Renders through the shared
// BrandPageRelatedContent component. Links to the real, fully-built SGK
// pillar page — not a placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const philipsHearingRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Aynı Demant Grubu mühendisliğinden farklı bir marka felsefesini karşılaştırmak isterseniz Oticon'u inceleyin.",
      href: "/markalar/oticon",
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
};
