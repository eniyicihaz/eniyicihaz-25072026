// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// kolay-degisim page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around exchange/upgrade-path language rather than
// device-family features.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kolayDegisimRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Değişim Sürecinde Değerlendirilen Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un geniş ürün ailesi, ihtiyaç değişikliğinde farklı seviyeler arasında geçiş imkânı sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın model çeşitliliği, değişim sürecinde ihtiyacınıza uygun alternatifler sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın ürün ailesi, farklı bütçe ve ihtiyaç seviyeleri arasında geçiş imkânı sağlar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in model seçenekleri, değişim sürecinde değerlendirilebilecek alternatifler arasındadır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un ürün ailesi, ihtiyaç değişikliğinde uygun bir model geçişi sunabilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar modelleri, uygun bütçeli alternatif arayışında değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
