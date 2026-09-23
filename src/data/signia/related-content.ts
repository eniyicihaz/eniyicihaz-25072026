// Internal-linking (Hub-and-Spoke) content for the Signia brand page
// (/markalar/signia) — see SIGNIA MASTER BLUEPRINT §9.13/§6. Renders
// through the shared BrandPageRelatedContent component. Links to the
// real, fully-built SGK pillar page — not a placeholder.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const signiaRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Bağlantı ve ekosistem odaklı bir yaklaşımı karşılaştırmak isterseniz Phonak'ı inceleyin.",
      href: "/markalar/phonak",
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
};
