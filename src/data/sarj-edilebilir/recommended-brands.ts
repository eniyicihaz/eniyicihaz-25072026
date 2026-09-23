// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// sarj-edilebilir page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique BTE/ITE use. All
// hrefs point to real, already-built /markalar/{slug} pages. Product
// family names referenced (BrainHearing®, Styletto, Pure, Roger) are
// real, long-standing brand product lines — Styletto/Pure are already
// used verbatim on Signia's own brand page (src/data/signia/models.ts).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sarjEdilebilirRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Şarj Edilebilir Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un şarj edilebilir modelleri, BrainHearing® felsefesini gün boyu kesintisiz kullanımla bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın şarj edilebilir RIC aileleri, Roger ekosistemiyle uyumlu, uzun pil ömrü sunan modellerdir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Styletto ve Pure gibi şarjlı aileleri, ince tasarımı gün boyu kullanımla bir araya getirir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in şarj edilebilir modelleri, markanın doğal ses felsefesini pil değiştirme derdi olmadan sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un şarj edilebilir aileleri, günlük kullanım kolaylığı arayan kullanıcılar için sıkça değerlendirilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir şarjlı çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
