// Product family showcase for the Sonic brand page (/markalar/sonic).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. "Enchant" and "Radiant" are real, documented
// Sonic product family names — verified via hearingreview.com and
// audiologyonline.com.
//
// Gerçek Sonic ürün fotoğrafları eklendi (bkz.
// public/images/sonic/models/) — beş model için de kaynakta fotoğraf
// mevcuttu; hiçbir slug placeholder'da kalmadı.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const sonicModels: BrandPageModelsContent = {
  badge: "SONIC MODELLERİ",
  heading: "Sonic Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Sonic modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "enchant",
      category: "Güncel Nesil",
      name: "Sonic Enchant",
      description: "SoundDNA platformu üzerine kurulu, markanın en güncel ve en kapsamlı model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/sonic/models/enchant.webp",
    },
    {
      slug: "radiant",
      category: "Önceki Nesil",
      name: "Sonic Radiant",
      description: "Daha net ve anlaşılır bir ses deneyimi sunan, kanıtlanmış bir amplifikasyon sistemine sahip önceki nesil aile.",
      tags: ["RIC", "BTE"],
      image: "/images/sonic/models/radiant.webp",
    },
    {
      slug: "enchant-bte",
      category: "Güçlü Kayıplar (BTE)",
      name: "Sonic Enchant BTE",
      description: "Geniş güç aralığı sunan, ileri derece işitme kayıpları için değerlendirilebilecek Enchant ailesi.",
      tags: ["BTE", "Bluetooth"],
      image: "/images/sonic/models/enchant-bte.webp",
    },
    {
      slug: "enchant-ite",
      category: "Kulak İçi (Enchant Ailesi)",
      name: "Sonic Enchant ITE",
      description: "Enchant ailesinin kulak içi yerleşimli, kişiye özel üretilen varyantı.",
      tags: ["Kulak İçi"],
      image: "/images/sonic/models/enchant-ite.webp",
    },
    {
      slug: "enchant-sarjli",
      category: "Şarjlı Seri",
      name: "Sonic Enchant Şarjlı",
      description: "Lityum-iyon şarjlı sistemle günlük kullanım için pratik bir çözüm sunar.",
      tags: ["Şarjlı", "RIC"],
      image: "/images/sonic/models/enchant-sarjli.webp",
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorHoverBorder: "rgb(61 76 89 / 0.5)",
  accentColorGlow: "rgb(61 76 89 / 0.14)",
  accentColorFocus: "rgb(61 76 89 / 0.35)",
};
