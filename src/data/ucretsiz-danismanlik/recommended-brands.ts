// "Markalara Göre İnceleyin" section for the /neden-orijinal/
// ucretsiz-danismanlik page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. All hrefs point to real, already-built /markalar/{slug} pages —
// here framed around consultancy fit rather than device-family
// features.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ucretsizDanismanlikRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Danışmanlık Sürecinde Değerlendirilen Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon modelleri, danışmanlık sürecimizde ihtiyacınıza göre değerlendirilen seçenekler arasında yer alır.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak modelleri, farklı bütçe ve ihtiyaç profillerine uygun seçenekler sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia modelleri, danışmanlık sürecinde sıkça önerilen genel kullanım seçenekleri arasındadır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex modelleri, doğal ses tercih eden kullanıcılar için danışmanlık sürecinde değerlendirilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound modelleri, bağlantı özelliklerini önceliklendiren kullanıcılar için önerilebilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar modelleri, uygun bütçeli seçenekler arayan kullanıcılar için danışmanlık sürecinde değerlendirilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
