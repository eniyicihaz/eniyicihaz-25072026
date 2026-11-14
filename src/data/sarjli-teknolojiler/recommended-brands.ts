// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// sarjli-teknolojiler page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sarjliTeknolojilerRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Şarj Teknolojisiyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un şarjlı modelleri, gelişmiş lityum-iyon pil teknolojisini BrainHearing® felsefesiyle bir araya getirir.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak'ın şarjlı aileleri, güvenilir şarj yönetim devresi ve uzun pil ömrü sunar.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound'un şarjlı modelleri, güvenilir pil yönetim teknolojisiyle sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir şarj teknolojisi arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
