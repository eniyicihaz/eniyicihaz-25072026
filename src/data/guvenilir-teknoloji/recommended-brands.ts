// "Yetkili Olduğumuz Markalar" section for the /neden-orijinal/
// guvenilir-teknoloji page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around authorized-channel/warranty language rather than
// device-family fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const guvenilirTeknolojiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yetkili Olduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un tüm ürün ailesini yetkili distribütör güvencesiyle orijinal olarak sunuyoruz.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın orijinal ürünlerini, üretici garantisi ve resmi teknik servis desteğiyle sunuyoruz.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın tüm modellerini yetkili satış kanalından, faturalı ve garantili olarak sunuyoruz.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in orijinal ürünlerini resmi distribütörlük anlaşmamız kapsamında sunuyoruz.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un tüm ürün ailesini üretici garantisi ve orijinallik güvencesiyle sunuyoruz.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modellerini de aynı orijinallik standartlarıyla sunuyoruz.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
