// "Markalara Göre İnceleyin" section for the /rehberler/
// isitme-kaybi-nedir page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed generically since this page precedes any specific
// device decision — positions the six primary brands as what's
// available once a hearing loss is identified and evaluated.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const isitmeKaybiNedirRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Değerlendirme Sonrası İncelenebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "İşitme değerlendirmeniz sonrasında Oticon'un geniş model yelpazesi incelenebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "İşitme değerlendirmeniz sonrasında Phonak'ın geniş model yelpazesi incelenebilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "İşitme değerlendirmeniz sonrasında Signia'nın geniş model yelpazesi incelenebilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "İşitme değerlendirmeniz sonrasında Widex'in geniş model yelpazesi incelenebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "İşitme değerlendirmeniz sonrasında ReSound'un geniş model yelpazesi incelenebilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Bütçe dostu bir seçenek arıyorsanız, NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
