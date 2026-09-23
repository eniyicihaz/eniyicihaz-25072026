// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. "Ruby" (Oticon)
// and "Key" (ReSound) are real, current entry/essential-tier product
// lines — Allure (Widex) is already used verbatim as this page's own
// hero image (public/images/widex/models/allure.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const hafifIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Hafif İşitme Kaybında Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Ruby ailesi, hafif ve orta dereceli kayıplar için sıkça değerlendirilen, uygun fiyatlı ve etkili bir seçenektir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın ince RIC modelleri, hafif kayıplarda görünürlüğü önceliklendiren kullanıcılar için sıkça tercih edilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın açık kalıplı modelleri, hafif kayıplarda doğal ses algısını korumayı hedefler.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Allure ailesi, hafif kayıplarda görünürlüğü öncelikleyen kullanıcılar için özel üretilen kulak içi seçenekler sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Key ailesi, hafif ve orta dereceli kayıplar için uygun fiyatlı bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
