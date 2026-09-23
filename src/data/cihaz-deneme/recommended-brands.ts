// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// cihaz-deneme page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed around trial availability, with an honest stock caveat
// since not every model can be guaranteed available for trial at all
// times.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazDenemeRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Deneme İçin Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un farklı segmentlerdeki modelleri, stok durumuna göre deneme için değerlendirilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın geniş ürün yelpazesi, ihtiyacınıza uygun bir deneme modeli bulmanıza yardımcı olabilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın model çeşitliliği, farklı bütçe ve ihtiyaçlara uygun deneme seçenekleri sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in doğal ses felsefesi, bazı kullanıcılar için deneme sürecinde fark yaratabilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un modelleri, deneme sürecinde farklı özellik setleriyle karşılaştırılabilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Bütçe dostu bir seçenek arıyorsanız, NuEar'ın modelleri deneme için değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
