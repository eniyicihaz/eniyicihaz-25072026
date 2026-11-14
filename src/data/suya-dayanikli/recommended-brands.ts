// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// suya-dayanikli page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique BTE/ITE/Şarj
// Edilebilir/Bluetooth/Çocuklara Özel/Görünmez use. All hrefs point to
// real, already-built /markalar/{slug} pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const suyaDayankliRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Suya Dayanıklı Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un dayanıklı modelleri, BrainHearing® felsefesini yüksek IP koruma sınıfıyla bir araya getirir.",
      href: "/markalar/oticon/",
    },
    {
      label: "Phonak",
      description: "Phonak'ın dayanıklı aileleri, aktif yaşam tarzına uygun yüksek IP koruma sınıfı sunar.",
      href: "/markalar/phonak/",
    },
    {
      label: "ReSound",
      description: "ReSound'un dayanıklı aileleri, aktif kullanıcılar için sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound/",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve dayanıklı çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear/",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
