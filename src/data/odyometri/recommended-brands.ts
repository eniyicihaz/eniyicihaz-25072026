// "Markalara Göre İnceleyin" section for the /degerlendirme/odyometri
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. All hrefs
// point to real, already-built /markalar/{slug} pages — reframed as
// "what might be recommended based on your odyogram" rather than a
// specific device-family or tier fit.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const odyometriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Odyogram Sonucuna Göre Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Odyogramınıza göre, Oticon'un farklı güç seviyelerindeki modelleri değerlendirilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın geniş ürün yelpazesi, farklı derecelerdeki işitme kayıpları için seçenekler sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın model çeşitliliği, odyogram sonucunuza uygun bir seçenek bulmanıza yardımcı olabilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in doğal ses felsefesi, bazı odyogram profilleri için değerlendirilebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un modelleri, farklı işitme kaybı dereceleri için seçenekler sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri, odyogram sonucunuza göre bütçe dostu bir alternatif olabilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
