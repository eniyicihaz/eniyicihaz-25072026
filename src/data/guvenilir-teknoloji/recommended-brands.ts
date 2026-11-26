// "Sattığımız Markalardan Bazıları" section for the /neden-orijinal/
// guvenilir-teknoloji page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around manufacturer-warranty language rather than
// device-family fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const guvenilirTeknolojiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Sattığımız Markalardan Bazıları",
  links: [
    {
      label: "Oticon",
      description: "Oticon işitme cihazlarını satıyoruz; bakım ve teknik destek seçeneklerini merkezimizden öğrenebilirsiniz.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak işitme cihazlarını satıyoruz; bakım ve teknik destek seçeneklerini merkezimizden öğrenebilirsiniz.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound işitme cihazlarını satıyoruz; bakım ve teknik destek seçeneklerini merkezimizden öğrenebilirsiniz.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "NuEar işitme cihazlarını satıyoruz; bakım ve teknik destek seçeneklerini merkezimizden öğrenebilirsiniz.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
