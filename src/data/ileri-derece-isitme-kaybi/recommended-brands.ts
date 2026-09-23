// "Önerilen Marka ve Modeller" section for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page. Reuses the shared
// BrandPageRelatedContent component as a brand-link showcase, same
// technique every prior feature/need page uses. All hrefs point to real,
// already-built /markalar/{slug} pages. "Naida" (Phonak) and "Xceed"
// (Oticon) are real, long-standing power-BTE product lines built for
// severe-to-profound losses — Naida is already used verbatim as this
// page's own hero image (public/images/phonak/models/naida.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ileriDereceIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "İleri Derece İşitme Kaybında Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Xceed ailesi, ileri ve çok ileri dereceli kayıplar için güçlü amplifikasyon sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Naida ailesi, ileri dereceli kayıplarda sıkça tercih edilen güçlü bir power BTE seçeneğidir.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın güçlü BTE modelleri, ileri dereceli kayıplarda yüksek amplifikasyon kapasitesi sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in güçlü modelleri, markanın doğal ses felsefesini yüksek amplifikasyon kapasitesiyle birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un güçlü aileleri, ileri dereceli kayıplarda sıkça değerlendirilen bir seçenektir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güçlü çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
