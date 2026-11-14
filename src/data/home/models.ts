// Model Vitrini — homepage's own curated selection (own spec:
// docs/MODEL_SHOWCASE_SPECIFICATION.md), rendered through the existing,
// shared BrandPageModels.astro (no new component — see spec §7). Five real,
// verified products from four different brands (Oticon, Phonak, Bernafon, ReSound), balanced across device
// families (RIC/BTE, kulak içi, power/güçlü kayıp, AI, Bluetooth, şarjlı) —
// none invented; each was cross-checked against its brand's own
// src/data/{brand}/models.ts before inclusion (see spec §2). Deliberately a
// different mix than src/data/cihaz-deneme/models.ts (that page's own
// curated 4), not a duplicate section. No model has its own detail page yet,
// so every `href` goes to its real /markalar/{slug} brand page — exactly
// cihazDenemeModels' own precedent — and stays trivially extensible: only
// `href` changes if/when real model pages ship.
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const homeModels: BrandPageModelsContent = {
  badge: "GERÇEK ÜRÜNLER",
  heading: "Birkaç Gerçek Modelle Tanışın",
  intro: "Farklı markaların seçenekleri arasından, farklı ihtiyaçlara örnek birkaç model.",
  ctaLabel: "İncele",
  items: [
    {
      slug: "oticon-intent",
      category: "Oticon",
      name: "Oticon Intent",
      description: "Yapay zekâ destekli, gelişmiş teknoloji beklentisi olan kullanıcılar için.",
      tags: ["AI", "Bluetooth"],
      image: "/images/oticon/models/intent.webp",
      href: "/markalar/oticon/",
    },
    {
      slug: "phonak-audeo",
      category: "Phonak",
      name: "Phonak Audéo",
      description: "Phonak'ın en yaygın tercih edilen, kulak arkası yerleşimli genel kullanım ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/audeo.webp",
      href: "/markalar/phonak/",
    },
    {
      slug: "bernafon-encanta-cic",
      category: "Bernafon",
      name: "Bernafon Encanta CIC",
      description: "Kişiye özel üretilen, kulak içi yerleşimli bir model ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/bernafon/models/encanta-cic.webp",
      href: "/markalar/bernafon/",
    },
    {
      slug: "resound-vivia",
      category: "ReSound",
      name: "ReSound Vivia",
      description: "Bluetooth bağlantı özellikleriyle öne çıkan bir seçenek.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/resound/models/vivia.webp",
      href: "/markalar/resound/",
    },
    {
      slug: "phonak-naida",
      category: "Phonak",
      name: "Phonak Naída",
      description: "İleri ve çok ileri derece işitme kayıpları için güçlendirilmiş model ailesi.",
      tags: ["Power", "Bluetooth", "Şarjlı"],
      image: "/images/phonak/models/naida.webp",
      href: "/markalar/phonak/",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorHoverBorder: "rgb(37 99 235 / 0.4)",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
};
