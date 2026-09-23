// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// orijinal-aksesuar page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around accessory-availability language rather than
// device-family fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const orijinalAksesuarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Orijinal Aksesuarlarıyla Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un orijinal kulak ucu ve aksesuar çeşitleri, tüm model aileleri için temin edilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın geniş aksesuar yelpazesi, farklı ihtiyaçlara uygun orijinal seçenekler sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın orijinal şarj ve temizlik aksesuarları, cihazlarınızla tam uyumlu çalışır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in orijinal aksesuarları, cihazlarının performansını korumak için özel olarak tasarlanır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un orijinal pil ve streaming aksesuarları, günlük kullanımı kolaylaştırır.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri için de orijinal aksesuar desteği sunuyoruz.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
