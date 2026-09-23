// Product family showcase for the Coselgi brand page (/markalar/coselgi).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Mojo" and "Effect" are real, documented Coselgi
// product family names — verified via coselgi.com.
//
// Gerçek Coselgi ürün fotoğrafları eklendi (bkz.
// public/images/coselgi/models/) — kaynakta yalnızca kategori bazlı genel
// çekimler mevcuttu (kulak arkası, kulak içi, şarjlı); bu nedenle "kulak
// arkası" → Effect, "kulak içi" → Effect'in kulak içi varyantı, "şarjlı"
// → Mojo ile eşleştirildi.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const coselgiModels: BrandPageModelsContent = {
  badge: "COSELGI MODELLERİ",
  heading: "Coselgi Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Coselgi modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "effect",
      category: "Ana Ürün Ailesi (Kulak Arkası)",
      name: "Coselgi Effect",
      description: "Acoustic Environment Technology destekli, geniş yerleşim seçenekleri sunan ana ürün ailesi.",
      tags: ["RIC/BTE", "Bluetooth"],
      image: "/images/coselgi/models/effect.webp",
    },
    {
      slug: "effect-ite",
      category: "Kulak İçi (Effect Ailesi)",
      name: "Coselgi Effect ITE",
      description: "Effect ailesinin kulak içi yerleşimli, kişiye özel üretilen varyantı.",
      tags: ["Kulak İçi"],
      image: "/images/coselgi/models/effect-ite.webp",
    },
    {
      slug: "mojo",
      category: "Şarjlı Seri",
      name: "Coselgi Mojo",
      description: "Günlük kullanım için pratik, şarjlı bir çözüm sunan ürün ailesi.",
      tags: ["RIC", "Şarjlı", "Bluetooth"],
      image: "/images/coselgi/models/mojo.webp",
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorHoverBorder: "rgb(21 149 216 / 0.5)",
  accentColorGlow: "rgb(21 149 216 / 0.14)",
  accentColorFocus: "rgb(21 149 216 / 0.35)",
};
