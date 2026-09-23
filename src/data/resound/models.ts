// Product family showcase for the ReSound brand page (/markalar/resound).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. All 6 names are real, current ReSound product
// families (Vivia, Nexia, Omnia, Savi, ENZO Q, Key) — verified via
// multiple 2025-2026 hearing-aid review sources.
//
// Gerçek ReSound ürün fotoğrafları eklendi (bkz. public/images/resound/models/).
// Savi ve ENZO Q için henüz sağlanmış fotoğraf yok; bu alanlar geçici olarak
// marka logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const resoundModels: BrandPageModelsContent = {
  badge: "RESOUND MODELLERİ",
  heading: "ReSound Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun ReSound modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "vivia",
      category: "Güncel Nesil",
      name: "ReSound Vivia",
      description: "Derin öğrenme destekli ses işleme ve tam Auracast desteği sunan en güncel premium model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/resound/models/vivia.webp",
    },
    {
      slug: "nexia",
      category: "Auracast Öncüsü",
      name: "ReSound Nexia",
      description: "Auracast yayın sesi desteğini sektöre erken tanıtan, RIC/BTE/ITE seçenekleriyle sunulan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/resound/models/nexia.webp",
    },
    {
      slug: "omnia",
      category: "Önceki Nesil",
      name: "ReSound Omnia",
      description: "M&RIE teknolojisini yaygınlaştıran, kanıtlanmış önceki nesil model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/resound/models/omnia.webp",
    },
    {
      slug: "savi",
      category: "Orta Segment",
      name: "ReSound Savi",
      description: "Premium modellere yakın bağlantı özelliklerini daha uygun bir seviyede sunan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/resound-logo-seffaf.webp",
    },
    {
      slug: "enzo-q",
      category: "Güçlü Kayıplar (BTE)",
      name: "ReSound ENZO Q",
      description: "Geniş güç aralığı sunan, ileri derece işitme kayıpları için değerlendirilebilecek BTE ailesi.",
      tags: ["BTE", "Bluetooth", "Şarjlı"],
      image: "/images/brands/resound-logo-seffaf.webp",
    },
    {
      slug: "key",
      category: "Giriş Seviyesi",
      name: "ReSound Key",
      description: "Temel işitme ihtiyaçları için sade ve uygun bir yaklaşım sunan giriş seviyesi model ailesi.",
      tags: ["BTE", "Bluetooth", "Pilli"],
      image: "/images/resound/models/key.webp",
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorHoverBorder: "rgb(170 24 53 / 0.5)",
  accentColorGlow: "rgb(170 24 53 / 0.14)",
  accentColorFocus: "rgb(170 24 53 / 0.35)",
};
