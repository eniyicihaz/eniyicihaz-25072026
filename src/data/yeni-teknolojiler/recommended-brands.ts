// "Markalara Göre İnceleyin" section for the /blog/yeni-teknolojiler
// page. Reuses the shared BrandPageRelatedContent component as a
// brand-link showcase, same technique every prior page uses. Highlights
// brands known for pushing connectivity and AI-driven features.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yeniTeknolojilerRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Güncel Teknolojileri Sunan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Yapay zeka destekli ses işleme teknolojileriyle öne çıkan modeller sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Geniş kablosuz bağlantı ve uzaktan kontrol seçenekleri sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Akıllı telefon entegrasyonu güçlü modelleriyle bilinir.",
      href: "/markalar/signia",
    },
    {
      label: "ReSound",
      description: "Bağlantılı ve akıllı işitme cihazı çözümleriyle öne çıkar.",
      href: "/markalar/resound",
    },
    {
      label: "Widex",
      description: "Doğal ses deneyimi odaklı teknolojileriyle bilinir.",
      href: "/markalar/widex",
    },
    {
      label: "Unitron",
      description: "Şarj edilebilir ve bağlantılı modelleriyle pratik bir kullanım sunar.",
      href: "/markalar/unitron",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
