// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// yaygin-servis-agi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around service-network language rather than device-family
// fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yayginServisAgiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yaygın Servis Ağıyla Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un yaygın yetkili servis ağı, hızlı ve güvenilir destek sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın geniş servis ağı, sertifikalı teknisyenlerle kesintisiz destek sağlar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın yetkili servis noktaları, orijinal yedek parça garantisiyle hizmet verir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in servis ağı, düzenli eğitimli teknisyenlerle tutarlı bir hizmet kalitesi sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un yetkili servis desteği, garantinizi koruyarak hızlı çözümler sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de aynı yetkili servis güvencesiyle desteklenir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
