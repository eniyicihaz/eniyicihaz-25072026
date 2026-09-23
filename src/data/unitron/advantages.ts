// Advantages / conversion synthesis for the Unitron brand page
// (/markalar/unitron). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Radar, Bluetooth, Volume2, Wallet, Landmark } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const unitronAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN UNITRON?",
  heading: "Kullanıcılar Neden Unitron Tercih Ediyor?",
  intro: "Unitron'u farklı kılan, AutoFocus 360'ın binaural ağını ve 1964'ten bu yana süregelen Kanada-Alman mühendisliğini bir arada sunuyoruz.",
  hero: {
    icon: Radar,
    category: "Marka Felsefesi",
    title: "AutoFocus 360 ile Yön Belirleme",
    description:
      "Dört mikrofonlu binaural bir ağ kullanarak konuşmanın geldiği yönü belirlemeye yardımcı olur.",
  },
  items: [
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Sonova PRISM Çipi",
      description: "İki aktif bağlantı ve sekiz cihaza kadar eşleştirmeyi destekler.",
    },
    {
      icon: Volume2,
      category: "Ürün Yelpazesi",
      title: "Smile'dan Stride'a",
      description: "Farklı ihtiyaç ve işitme kaybı derecelerine uygun geniş bir ürün ailesi sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "Insera ile Erişilebilirlik",
      description: "Temel işitme ihtiyaçları için giriş seviyesi bir seçenek sunar.",
    },
    {
      icon: Landmark,
      category: "Miras",
      title: "Kanada-Alman Mühendisliği",
      description: "1964'ten bu yana Kitchener, Ontario'da süregelen bir mühendislik geleneği.",
    },
    {
      icon: Radar,
      category: "Grup",
      title: "Sonova Grubu Güvencesi",
      description: "Phonak ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorIconBg: "rgb(28 76 135 / 0.1)",
  accentColorHoverBorder: "rgb(28 76 135 / 0.45)",
};
