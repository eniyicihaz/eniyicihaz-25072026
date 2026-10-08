// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// yaygin-servis-agi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around service-network language rather than device-family
// fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yayginServisAgiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Teknik Servis Desteği Sunduğumuz Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/phonak/",
    },
    {
      label: "Signia",
      description: "Signia cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/signia/",
    },
    {
      label: "Widex",
      description: "Widex cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/widex/",
    },
    {
      label: "ReSound",
      description: "ReSound cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar cihazlarınız için teknik servis desteği veriyoruz.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
