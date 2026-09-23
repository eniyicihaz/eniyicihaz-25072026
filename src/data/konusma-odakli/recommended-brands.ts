// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// konusma-odakli page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. "StereoZoom"
// (Phonak) and "M&RIE" / "Nexia" (ReSound) are real, verifiable
// directionality features/product lines — Nexia is already used verbatim
// as this page's own hero image (public/images/resound/models/
// nexia.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const konusmaOdakliRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Konuşma Odaklı Teknolojiyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un BrainHearing® felsefesi, beynin doğal yön belirleme yeteneğini destekleyen bir yaklaşım sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın StereoZoom gibi yönlü mikrofon teknolojileri, gürültülü ortamlarda konuşmayı öne çıkarmayı hedefler.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın yönlü mikrofon sistemleri, gerçek zamanlı sinyal işlemeyle konuşma netliğini artırmayı hedefler.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in yönlü odaklanma teknolojisi, markanın doğal ses felsefesini konuşma netliğiyle bir araya getirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Nexia ailesi, kulağın doğal yön belirleme özelliğinden faydalanan M&RIE tasarımıyla öne çıkar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve etkili yönlü mikrofon çözümleri arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
