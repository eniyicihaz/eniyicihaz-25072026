// Product family showcase for the Bernafon brand page (/markalar/bernafon).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. All 6 names are real Bernafon product families
// (Encanta, Encanta Alpha XT, Encanta BTE, Encanta CIC, Juna, Zerena) —
// verified via Bernafon's own site and independent hearing-aid review
// sources.
//
// Gerçek Bernafon ürün fotoğrafları eklendi (bkz.
// public/images/bernafon/models/). Juna ve Zerena için henüz sağlanmış
// fotoğraf yok; bu alanlar geçici olarak marka logosuna işaret etmeye
// devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const bernafonModels: BrandPageModelsContent = {
  badge: "BERNAFON MODELLERİ",
  heading: "Bernafon Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Bernafon modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "encanta",
      category: "Güncel Nesil (miniRITE)",
      name: "Bernafon Encanta",
      description: "Smart Sensor ve Machine Learning 2.0 teknolojilerini taşıyan, markanın en güncel premium model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/bernafon/models/encanta.webp",
    },
    {
      slug: "encanta-alpha-xt",
      category: "Giriş Seviyesi (RITE)",
      name: "Bernafon Encanta Alpha XT",
      description: "Encanta ailesinin daha uygun bir seviyede sunulan, RITE tipi model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/bernafon/models/encanta-alpha-xt.webp",
    },
    {
      slug: "encanta-bte",
      category: "Güçlü Kayıplar (BTE)",
      name: "Bernafon Encanta BTE",
      description: "Geniş güç aralığı sunan, ileri derece işitme kayıpları için değerlendirilebilecek BTE ailesi.",
      tags: ["BTE", "Bluetooth", "Şarjlı"],
      image: "/images/bernafon/models/encanta-bte.webp",
    },
    {
      slug: "encanta-cic",
      category: "Kulak İçi (Görünmez)",
      name: "Bernafon Encanta CIC",
      description: "Kişiye özel üretilen, kulak kanalı içinde neredeyse görünmez bir yerleşim sunan model ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/bernafon/models/encanta-cic.webp",
    },
    {
      slug: "juna",
      category: "Önceki Nesil",
      name: "Bernafon Juna",
      description: "Bağlantı özellikleriyle öne çıkan, kanıtlanmış önceki nesil model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/bernafon-logo-seffaf.webp",
    },
    {
      slug: "zerena",
      category: "Klasik Seri",
      name: "Bernafon Zerena",
      description: "Temel işitme ihtiyaçları için sade ve kanıtlanmış bir yaklaşım sunan klasik model ailesi.",
      tags: ["BTE", "Pilli"],
      image: "/images/brands/bernafon-logo-seffaf.webp",
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorHoverBorder: "rgb(218 41 28 / 0.5)",
  accentColorGlow: "rgb(218 41 28 / 0.14)",
  accentColorFocus: "rgb(218 41 28 / 0.35)",
};
