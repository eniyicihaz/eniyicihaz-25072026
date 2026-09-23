// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page. Reuses the shared
// BrandPageRelatedContent component as a brand-link showcase, same
// technique every prior feature/need page uses. All hrefs point to real,
// already-built /markalar/{slug} pages. "CROS" (Phonak) is a real,
// long-standing product ecosystem built specifically for single-sided
// hearing loss — already used verbatim as this page's own hero image
// (public/images/phonak/models/cros.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tekTarafliIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Tek Taraflı İşitme Kaybında Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un CROS uyumlu modelleri, tek taraflı işitme kaybında kablosuz aktarım seçenekleri sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın CROS/BiCROS sistemleri, tek taraflı işitme kaybında en sık tercih edilen, köklü bir çözüm ailesidir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın kablosuz aktarım sistemleri, tek taraflı kayıplarda sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in tek taraflı çözümleri, markanın doğal ses felsefesini kablosuz aktarımla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un tek taraflı sistemleri, iyi duyan kulağa kablosuz aktarım sağlayan modellerdir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı tek taraflı çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
