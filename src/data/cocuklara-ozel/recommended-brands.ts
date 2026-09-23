// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// cocuklara-ozel page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique BTE/ITE/Şarj
// Edilebilir/Bluetooth use. All hrefs point to real, already-built
// /markalar/{slug} pages. "Play" (Oticon) and "Sky" (Phonak) are real,
// long-standing pediatric-specific product lines — Sky is already used
// verbatim as this page's own hero image (public/images/phonak/models/
// sky.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocuklaraOzelRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Çocuklara Özel Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un çocuklara özel Play ailesi, BrainHearing® felsefesini dayanıklı ve renkli bir tasarımla bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın çocuklara özel Sky ailesi, Roger sistemleriyle uyumlu, dayanıklı ve renkli modeller sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın dayanıklı BTE aileleri, çocuklarda sıkça tercih edilen sağlam ve kullanışlı bir seçenektir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in çocuklara uygun modelleri, markanın doğal ses felsefesini dayanıklı bir gövdeyle sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un çocuklara özel modelleri, ebeveyn takip uygulamalarıyla dikkat çeken bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve dayanıklı çözümler arayan aileler için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
