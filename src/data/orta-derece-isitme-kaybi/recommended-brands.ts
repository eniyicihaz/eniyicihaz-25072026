// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior
// feature/need page uses. All hrefs point to real, already-built
// /markalar/{slug} pages. "Real" (Oticon) is a real, current-generation
// versatile RIC line — already used verbatim as this page's own hero
// image (public/images/oticon/models/real.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ortaDereceIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Orta Derece İşitme Kaybında Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Real ailesi, orta dereceli kayıplarda dengeli ses gücü ve BrainHearing® felsefesini bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın standart RIC modelleri, orta dereceli kayıplarda sıkça tercih edilen güçlü ve güvenilir seçeneklerdir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın orta segment modelleri, orta dereceli kayıplarda dengeli bir ses gücü sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in orta dereceye uygun modelleri, markanın doğal ses felsefesini yeterli amplifikasyonla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un orta dereceye uygun aileleri, gürültü azaltma özellikleriyle sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve etkili çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
