// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page. Reuses the shared
// BrandPageRelatedContent component as a brand-link showcase, same
// technique every prior feature/need page uses. All hrefs point to real,
// already-built /markalar/{slug} pages. "Xceed" (Oticon) and "Naida"
// (Phonak) are real, long-standing power-BTE product lines built for
// severe-to-profound losses — Xceed is already used verbatim as this
// page's own hero image (public/images/oticon/models/xceed.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cokIleriDereceIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Çok İleri Derece İşitme Kaybında Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Xceed ailesi, çok ileri dereceli kayıplar için tasarlanmış en güçlü amplifikasyon seçeneklerinden biridir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Naida ailesi, çok ileri dereceli kayıplarda da sıkça değerlendirilen güçlü bir power BTE seçeneğidir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın en güçlü BTE modelleri, çok ileri dereceli kayıplarda yüksek amplifikasyon kapasitesi sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in en güçlü modelleri, markanın doğal ses felsefesini en yüksek amplifikasyon kapasitesiyle birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un en güçlü aileleri, çok ileri dereceli kayıplarda sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güçlü çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
