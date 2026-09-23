// "Markalara Göre İnceleyin" section for the /segmentler/premium-seri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. Descriptions
// name each brand's real current-generation/premium model family where
// the brand's own models.ts data explicitly tags one as "Güncel Seri" /
// "Güncel Nesil" (Oticon Intent, Widex Moment Sheer, ReSound Vivia,
// NuEar NXG AI); Phonak's Audéo and Signia's Styletto are described
// without an unverified "flagship" claim since neither brand's data
// carries an explicit current-generation tag.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const premiumSeriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Premium Seri Sunan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Intent ve Real serisi, markanın en gelişmiş BrainHearing® teknolojisini taşıyan premium modellerdir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Audéo serisi, markanın güncel teknolojilerini taşıyan genel kullanım ailesidir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Styletto serisi, modern tasarımı ve güncel özellikleriyle öne çıkar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Moment Sheer serisi, markanın en güncel nesil teknolojisini taşır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Vivia serisi, derin öğrenme destekli ses işleme sunan en güncel model ailesidir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın NXG AI serisi, Hear Circle uygulamasıyla güncellenmiş ses işleme yaklaşımını uygun bir fiyat seviyesinde sunar.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
