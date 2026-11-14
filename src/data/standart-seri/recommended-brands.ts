// "Markalara Göre İnceleyin" section for the /segmentler/standart-seri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. Descriptions name
// each brand's real general-use model family where the brand's own
// models.ts data explicitly tags one as general/everyday use (Oticon
// Zeal = "Genel Kullanım", NuEar
// NOW iQ = "Orta Segment"); Phonak's Audéo is described with its own
// verified "en yaygın tercih edilen genel kullanım ailesi" line;
// ReSound's Omnia is described without an unverified tier
// claim since it carries no explicit "genel kullanım" tag.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const standartSeriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Standart Seri Sunan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Zeal serisi, günlük kullanım için pratik ve dengeli bir alternatif model sunar.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Audéo serisi, en yaygın tercih edilen genel kullanım ailesidir.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound'un Omnia serisi, kanıtlanmış performansıyla günlük kullanım için değerlendirilebilir.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar'ın NOW iQ serisi, dengeli bir bağlantı ve ses deneyimi sunan uygun bir model ailesidir.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
