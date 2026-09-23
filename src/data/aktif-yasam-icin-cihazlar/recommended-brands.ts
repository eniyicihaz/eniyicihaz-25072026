// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Reuses the shared
// BrandPageRelatedContent component as a brand-link showcase, same
// technique every prior feature/need page uses. All hrefs point to real,
// already-built /markalar/{slug} pages. Signia Styletto (hafif, hızlı
// şarj edilebilir tasarım) is this page's own hero image
// (public/images/signia/models/styletto.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const aktifYasamIcinCihazlarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Aktif Yaşam İçin Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Real ve Xceed gibi modelleri, sağlam yapısı ve güvenilir bağlantı seçenekleriyle aktif kullanıcılar için değerlendirilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Audeo ve Virto serisi, güvenli oturma ve dayanıklılık arayan aktif kullanıcılar arasında sıkça tercih edilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Styletto serisi, hafif ve hızlı şarj edilebilir tasarımıyla aktif bir yaşam tarzına uygun bir seçenektir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in SmartRIC serisi, doğal ses felsefesini hafif ve dayanıklı bir tasarımla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Vivia ve Omnia serisi, aktif kullanım için değerlendirilebilecek bağlantı ve dayanıklılık özellikleri sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve dayanıklı seçenekler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
