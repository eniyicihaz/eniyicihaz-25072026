// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// kablosuz-baglanti page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. "Roger" (Phonak)
// and CROS/BiCROS (Phonak) are real, long-standing product ecosystems —
// CROS is already used verbatim as this page's own hero image
// (public/images/phonak/models/cros.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kablosuzBaglantiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kablosuz Bağlantı Özellikleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un kablosuz bağlantı özellikleri, telesarmal ve uzaktan mikrofon uyumluluğuyla geniş bir aksesuar desteği sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Roger ekosistemi ve CROS/BiCROS sistemleri, kablosuz bağlantı konusunda öne çıkan çözümler sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın kablosuz bağlantı özellikleri, telesarmal ve uzaktan mikrofon aksesuarlarıyla uyumlu çalışır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in kablosuz bağlantı desteği, markanın doğal ses felsefesini geniş aksesuar uyumluluğuyla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un kablosuz bağlantı özellikleri, telesarmal ve uzaktan mikrofon sistemleriyle sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve geniş uyumluluk arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
