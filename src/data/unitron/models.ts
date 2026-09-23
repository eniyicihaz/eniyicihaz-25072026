// Product family showcase for the Unitron brand page (/markalar/unitron).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Blu", "Moxi Vivante", "Stride" and "Insera" are
// real, documented Unitron product family names — sourced directly from
// the brand's own product photography provided for this project and
// corroborated by independent hearing-aid review sources. "Smile" (2025)
// is Unitron's newest platform, added without a matching product photo.
//
// Gerçek Unitron ürün fotoğrafları eklendi (bkz.
// public/images/unitron/models/) — Blu, Moxi Vivante, Stride ve Insera
// için kaynakta doğrudan eşleşen fotoğraflar mevcuttu. Smile (2025)
// platformu için henüz sağlanmış fotoğraf yok; bu alan geçici olarak
// marka logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const unitronModels: BrandPageModelsContent = {
  badge: "UNITRON MODELLERİ",
  heading: "Unitron Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Unitron modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "smile",
      category: "En Güncel Nesil (2025)",
      name: "Unitron Smile",
      description: "Markanın en gelişmiş ve en güncel işitme cihazı platformu.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/unitron-logo-seffaf.webp",
    },
    {
      slug: "blu",
      category: "Güncel Nesil",
      name: "Unitron Blu",
      description: "Sonova PRISM çipi ve AutoFocus 360 ile geniş bağlantı özellikleri sunan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/unitron/models/blu.webp",
    },
    {
      slug: "moxi-vivante",
      category: "Önceki Nesil",
      name: "Unitron Moxi Vivante",
      description: "Kanıtlanmış bir önceki nesil bağlantı ve ses işleme altyapısına sahip model ailesi.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/unitron/models/moxi-vivante.webp",
    },
    {
      slug: "stride",
      category: "Güçlü Kayıplar (BTE)",
      name: "Unitron Stride",
      description: "Hafif ile ileri derece işitme kayıpları arasında geniş bir aralığa uygun, kulak arkası yerleşimli model.",
      tags: ["BTE", "Şarjlı"],
      image: "/images/unitron/models/stride.webp",
    },
    {
      slug: "insera",
      category: "Giriş Segmenti",
      name: "Unitron Insera",
      description: "Temel işitme ihtiyaçları için değerlendirilebilecek, giriş seviyesi bir model ailesi.",
      tags: ["RIC", "BTE"],
      image: "/images/unitron/models/insera.webp",
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorHoverBorder: "rgb(28 76 135 / 0.5)",
  accentColorGlow: "rgb(28 76 135 / 0.14)",
  accentColorFocus: "rgb(28 76 135 / 0.35)",
};
