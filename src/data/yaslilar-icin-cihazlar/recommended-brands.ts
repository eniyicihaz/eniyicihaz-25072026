// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior
// feature/need page uses. All hrefs point to real, already-built
// /markalar/{slug} pages. ReSound Key (giriş seviyesi, sade model) is
// this page's own hero image (public/images/resound/models/key.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yaslilarIcinCihazlarRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Yaşlı Kullanıcılar İçin Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Real ve Intent gibi modelleri, BrainHearing® teknolojisiyle doğal ve az çaba gerektiren bir dinleme deneyimi sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Audeo serisi, kolay kullanım ve güvenilir bağlantı seçenekleriyle sıkça tercih edilir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Styletto ve Pure serisi, şarj kolaylığı ve sade tasarımıyla öne çıkar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in SmartRIC serisi, doğal ses felsefesini kolay kullanımla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Key serisi, temel ihtiyaçlar için sade ve uygun fiyatlı bir yaklaşım sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve kolay kullanımlı seçenekler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
