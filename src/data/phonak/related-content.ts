// Internal-linking (Hub-and-Spoke) content for the Phonak brand page
// (/markalar/phonak) — see PHONAK MASTER BLUEPRINT §6.13/§5. Renders
// through the shared BrandPageRelatedContent component. Links to the real,
// fully-built SGK pillar page — not the "#" placeholder Oticon's own SGK
// CTA still points to.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const phonakRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Farklı bir marka felsefesini karşılaştırmak isterseniz Oticon'u inceleyin.",
      href: "/markalar/oticon",
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
