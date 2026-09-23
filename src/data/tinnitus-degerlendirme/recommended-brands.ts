// "Markalara Göre İnceleyin" section for the /degerlendirme/
// tinnitus-degerlendirme page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every prior page
// uses. Framed as "what might be recommended after a tinnitus
// evaluation" — each description points toward the brand's own tinnitus
// support feature (already documented and verified on the
// /teknolojiler/tinnitus-cozumleri page's own recommended-brands.ts)
// rather than re-explaining it here.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tinnitusDegerlendirmeRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Değerlendirme Sonrası Değerlendirilebilecek Markalar",
  links: [
    {
      label: "Oticon",
      description: "Değerlendirme sonucunuza göre, Oticon'un Tinnitus SoundSupport özellikli modelleri önerilebilir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Tinnitus Balance uygulamalı modelleri, değerlendirme sonrası değerlendirilebilecek seçenekler arasındadır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın tinnitus destek özellikli modelleri, odyometrist eşliğinde değerlendirilebilir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Zen Therapy teknolojisi, uzun süredir bilinen bir tinnitus destek yaklaşımı olarak değerlendirilebilir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Relief uygulamalı modelleri, değerlendirme sonrası bir seçenek olarak sunulabilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı tinnitus destek özellikli çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
