// Product family showcase for the Beltone brand page (/markalar/beltone).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Envision", "Serene" and "Commence" are real,
// current Beltone product family names — verified via beltone.com and
// independent hearing-aid review sources (2025).
//
// Gerçek Beltone ürün fotoğrafları eklendi (bkz.
// public/images/beltone/models/) — kaynakta yalnızca kategori bazlı genel
// çekimler mevcuttu (Bluetooth'lu, kulak arkası, kulak içi, şarjlı); bu
// nedenle her gerçek aile adı, en uygun kategori fotoğrafıyla eşleştirildi
// ("bluetoothlu" → Envision, "kulak arkası" → Serene, "kulak içi" →
// Serene'in kulak içi/custom varyantı, "şarjlı" → Commence). Boost Max S
// için henüz sağlanmış fotoğraf yok; bu alan geçici olarak marka
// logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const beltoneModels: BrandPageModelsContent = {
  badge: "BELTONE MODELLERİ",
  heading: "Beltone Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Beltone modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "envision",
      category: "Güncel Nesil (2025)",
      name: "Beltone Envision",
      description: "Yapay zekâ destekli DNN ses işlemesini taşıyan, markanın en güncel premium model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/beltone/models/envision.webp",
    },
    {
      slug: "serene",
      category: "Geniş Ürün Yelpazesi",
      name: "Beltone Serene",
      description: "Farklı yerleşim ve işitme kaybı derecelerini kapsayan, kanıtlanmış önceki nesil model ailesi.",
      tags: ["RIC", "BTE", "Bluetooth"],
      image: "/images/beltone/models/serene.webp",
    },
    {
      slug: "serene-ite",
      category: "Kulak İçi (Serene Ailesi)",
      name: "Beltone Serene ITE",
      description: "Serene ailesinin kulak içi yerleşimli, kişiye özel üretilen varyantı.",
      tags: ["Kulak İçi"],
      image: "/images/beltone/models/serene-ite.webp",
    },
    {
      slug: "commence",
      category: "Erişilebilir Seri (2025)",
      name: "Beltone Commence",
      description: "Güncel teknolojiyi daha erişilebilir bir fiyat noktasında sunan, şarjlı bir model ailesi.",
      tags: ["RIC", "Şarjlı"],
      image: "/images/beltone/models/commence.webp",
    },
    {
      slug: "boost-max-s",
      category: "Süper Güç (2025)",
      name: "Beltone Boost Max S",
      description: "İleri-derin işitme kayıpları için Bluetooth LE Audio/Auracast destekli süper güç model.",
      tags: ["BTE", "Süper Güç", "Auracast"],
      image: "/images/brands/beltone-logo-seffaf.webp",
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorHoverBorder: "rgb(27 56 100 / 0.5)",
  accentColorGlow: "rgb(27 56 100 / 0.14)",
  accentColorFocus: "rgb(27 56 100 / 0.35)",
};
