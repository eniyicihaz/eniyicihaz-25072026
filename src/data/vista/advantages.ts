// Advantages / conversion synthesis for the Vista brand page
// (/markalar/vista). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Wallet, Globe2, Bluetooth, BatteryCharging, Palette } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const vistaAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN VISTA?",
  heading: "Kullanıcılar Neden Vista Tercih Ediyor?",
  intro: "Vista'yı farklı kılan, Sonova'nın Soundsuite OS teknolojisini erişilebilir bir fiyat noktasında sunmasıdır.",
  hero: {
    icon: Wallet,
    category: "Marka Felsefesi",
    title: "Sonova Teknolojisi, Erişilebilir Fiyat",
    description:
      "Dünyanın en büyük işitme cihazı üreticisinin Soundsuite OS teknolojisini erişilebilir bir fiyat noktasında sunar.",
  },
  items: [
    {
      icon: Globe2,
      category: "Grup",
      title: "Sonova Güvencesi",
      description: "Phonak ve Unitron ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Bluetooth Bağlantısı",
      description: "Vista V ile akıllı telefonlarla kablosuz bağlantı kurabilen bir seçenek sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı Sistemler",
      description: "Vista T ile günlük kullanım için pratik ve sürdürülebilir bir çözüm sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Görünmez Kulak İçi Seçenek",
      description: "Vista IC ile kulak kanalı içinde neredeyse görünmez bir yerleşim sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "Net Kademelendirme",
      description: "Vista V, B ve T ile ihtiyaç ve bütçeye göre net bir seçim sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorIconBg: "rgb(232 93 10 / 0.1)",
  accentColorHoverBorder: "rgb(232 93 10 / 0.45)",
};
