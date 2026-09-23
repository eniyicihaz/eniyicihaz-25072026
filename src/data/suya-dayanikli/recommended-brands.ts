// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// suya-dayanikli page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique BTE/ITE/Şarj
// Edilebilir/Bluetooth/Çocuklara Özel/Görünmez use. All hrefs point to
// real, already-built /markalar/{slug} pages. "Active" (Signia) is a
// real, long-standing sport/sweat-resistant product line — already used
// verbatim as this page's own hero image (public/images/signia/models/
// active.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const suyaDayankliRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Suya Dayanıklı Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un dayanıklı modelleri, BrainHearing® felsefesini yüksek IP koruma sınıfıyla bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın dayanıklı aileleri, aktif yaşam tarzına uygun yüksek IP koruma sınıfı sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Active ailesi, spor ve aktif kullanım için özel olarak tasarlanmış, tere ve neme dayanıklı modellerdir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in dayanıklı modelleri, markanın doğal ses felsefesini yüksek IP koruma sınıfıyla sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un dayanıklı aileleri, aktif kullanıcılar için sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve dayanıklı çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
