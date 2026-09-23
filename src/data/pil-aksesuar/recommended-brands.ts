// "Markalara Göre İnceleyin" section for the /servis-bakim/
// pil-aksesuar page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own battery-type range (disposable
// and/or rechargeable options).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const pilAksesuarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Pil ve Aksesuar Desteği Sunduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un çinko-hava ve şarjlı model seçenekleri için uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın çinko-hava ve şarjlı model seçenekleri için uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın çinko-hava ve şarjlı model seçenekleri için uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in çinko-hava ve şarjlı model seçenekleri için uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un çinko-hava ve şarjlı model seçenekleri için uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de uyumlu pil ve aksesuarlar mevcuttur.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
