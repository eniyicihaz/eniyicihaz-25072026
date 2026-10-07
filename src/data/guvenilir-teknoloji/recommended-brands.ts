// "Yetkili Olduğumuz Markalar" section for the /neden-orijinal/
// guvenilir-teknoloji page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around authorized-channel/warranty language rather than
// device-family fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const guvenilirTeknolojiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Sattığımız Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/phonak/",
    },
    {
      label: "Signia",
      description: "Signia işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/signia/",
    },
    {
      label: "Widex",
      description: "Widex işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/widex/",
    },
    {
      label: "ReSound",
      description: "ReSound işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar işitme cihazlarını satıyor ve teknik servis desteği veriyoruz.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
