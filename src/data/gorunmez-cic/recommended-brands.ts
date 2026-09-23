// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// gorunmez-cic page. Reuses the shared BrandPageRelatedContent component
// as a brand-link showcase, same technique BTE/ITE/Şarj Edilebilir/
// Bluetooth/Çocuklara Özel use. All hrefs point to real, already-built
// /markalar/{slug} pages. "Insio" (Signia) and "Virto" (Phonak) are real,
// long-standing custom ITE/CIC product lines — Insio is already used
// verbatim as this page's own hero image (public/images/signia/models/
// insio.webp) and Virto is a real, established Phonak custom-ITE family
// (public/images/phonak/models/virto.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const gorunmezCicRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Görünmez (CIC) Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un kulak içi aileleri, BrainHearing® felsefesini kulak kanalınıza özel üretilen bir kabukla bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Virto ailesi, kulak kanalınıza özel üretilen, görünürlüğü önceliklendiren kulak içi modellerdir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Insio ailesi, kulak izinize özel üretilen, görünürlüğü öne çıkaran kulak içi seçeneklerdir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in kulak içi modelleri, markanın doğal ses felsefesini kulak kanalınıza özel bir kabukla sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un kulak içi aileleri, görünürlüğü öncelikleyen kullanıcılar için sıkça değerlendirilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir kulak içi çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
