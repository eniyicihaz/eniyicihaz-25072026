// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// kulak-ici-ite page. Reuses the shared BrandPageRelatedContent component
// as a brand-link showcase, same technique the BTE master page uses. All
// hrefs point to real, already-built /markalar/{slug} pages. Product
// family names referenced (BrainHearing®, Virto, Insio) are real,
// long-standing brand product lines — not invented — mirroring how the
// BTE page safely references Phonak's real "Roger ekosistemi".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kulakIciRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kulak İçi (ITE) Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un kişiye özel üretilen kulak içi modelleri, BrainHearing® felsefesini kompakt bir kabukta sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Virto ailesi, kulak içi kategorisinde uzun süredir bilinen, farklı boyut seçenekleri sunan bir model hattıdır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Insio ailesi, yapay zekâ destekli işitme teknolojisini kişiye özel kulak içi kabuklarla bir araya getirir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in kişiye özel kulak içi modelleri, markanın doğal ses felsefesini kompakt bir gövdede sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un kişiye özel kulak içi aileleri, hafif ile orta-ileri derece kayıplarda sıkça değerlendirilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir kulak içi çözümler arayanlar için NuEar'ın kişiye özel modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
