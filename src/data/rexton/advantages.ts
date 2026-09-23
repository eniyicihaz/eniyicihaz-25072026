// Advantages / conversion synthesis for the Rexton brand page
// (/markalar/rexton). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Bluetooth, Layers, Palette, Wallet, Landmark } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const rextonAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN REXTON?",
  heading: "Kullanıcılar Neden Rexton Tercih Ediyor?",
  intro: "Rexton'ı farklı kılan, 70 yılı aşkın Alman mühendisliğini ve Reach ailesinin güncel bağlantı teknolojisini bir arada sunuyoruz.",
  hero: {
    icon: Bluetooth,
    category: "Marka Felsefesi",
    title: "Reach ile Güncel Bağlantı Teknolojisi",
    description:
      "Akıllı telefonlarla doğrudan bağlantı kurarak, günlük kullanımı daha pratik hale getirir.",
  },
  items: [
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "BiCore ve MCore Aileleri",
      description: "Farklı ihtiyaç ve bütçelere uygun, dengeli işlemci aileleri sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Seçenekler",
      description: "BiCore ITE ile kulak içi, kişiye özel bir yerleşim seçeneği sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "MCore ile Erişilebilirlik",
      description: "Temel işitme ihtiyaçları için sade ve uygun bir fiyat noktası sunar.",
    },
    {
      icon: Landmark,
      category: "Miras",
      title: "1955'ten Bu Yana Alman Mühendisliği",
      description: "70 yılı aşkın bir işitme cihazı mühendisliği geleneğine sahiptir.",
    },
    {
      icon: Bluetooth,
      category: "Grup",
      title: "WS Audiology Güvencesi",
      description: "Signia ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorIconBg: "rgb(199 151 18 / 0.1)",
  accentColorHoverBorder: "rgb(199 151 18 / 0.45)",
};
