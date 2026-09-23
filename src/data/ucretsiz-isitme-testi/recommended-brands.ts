// "Markalara Göre İnceleyin" section for the /degerlendirme/
// ucretsiz-isitme-testi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here reframed as "what might be recommended after your test" rather
// than a specific device-family or tier fit, since this page's own
// subject is the test itself, not product selection.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ucretsizIsitmeTestiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Test Sonrası Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Test sonucunuza göre, Oticon'un geniş ürün ailesinden ihtiyacınıza uygun bir model önerilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın farklı model seçenekleri, test sonucunuza göre değerlendirilebilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın ürün ailesi, test sonrası ihtiyaç analizinde değerlendirilen markalar arasındadır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in doğal ses felsefesi, bazı kullanıcı profilleri için test sonrası önerilebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un bağlantı odaklı modelleri, test sonucunuza göre değerlendirilebilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı seçenekleri, test sonrası bütçe dostu bir alternatif olarak değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
