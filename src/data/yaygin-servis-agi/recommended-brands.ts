// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// yaygin-servis-agi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around service-network language rather than device-family
// fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yayginServisAgiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Üretici Servis Yetkimiz Bulunan Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/phonak/",
    },
    {
      label: "Signia",
      description: "Signia için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/signia/",
    },
    {
      label: "Widex",
      description: "Widex için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/widex/",
    },
    {
      label: "ReSound",
      description: "ReSound için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar için üretici servis yetkimiz bulunmaktadır.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
