// "Markalara Göre İnceleyin" section for the /servis-bakim/
// cihaz-temizligi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around each brand's own compatible cleaning kits and
// storage accessories being available.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazTemizligiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Temizlik ve Saklama Aksesuarı Sunduğumuz Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon cihazları için uyumlu temizlik kiti ve saklama aksesuarları mevcuttur.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak cihazları için uyumlu temizlik kiti ve saklama aksesuarları mevcuttur.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia cihazları için uyumlu temizlik kiti ve saklama aksesuarları mevcuttur.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex cihazları için uyumlu temizlik kiti ve saklama aksesuarları mevcuttur.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound cihazları için uyumlu temizlik kiti ve saklama aksesuarları mevcuttur.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de uyumlu temizlik aksesuarları mevcuttur.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
