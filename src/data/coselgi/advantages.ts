// Advantages / conversion synthesis for the Coselgi brand page
// (/markalar/coselgi). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Radar, Globe2, Palette, BatteryCharging, Wallet } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const coselgiAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN COSELGI?",
  heading: "Kullanıcılar Neden Coselgi Tercih Ediyor?",
  intro: "Coselgi'yi farklı kılan, Widex teknolojisini erişilebilir bir fiyat noktasında sunmasıdır.",
  hero: {
    icon: Radar,
    category: "Marka Felsefesi",
    title: "Acoustic Environment Technology",
    description:
      "Bulunduğunuz ortamı analiz ederek ses ayarlarını otomatik olarak optimize etmeye yardımcı olur.",
  },
  items: [
    {
      icon: Globe2,
      category: "Miras",
      title: "Widex Mühendisliği",
      description: "Danimarka merkezli Widex'in mühendislik deneyiminden yararlanır.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Seçenekler",
      description: "Effect ITE ile kulak içi, kişiye özel bir yerleşim seçeneği sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı Sistemler",
      description: "Mojo ailesiyle günlük kullanım için pratik ve sürdürülebilir bir çözüm sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "SGK'ya Uygun Fiyat Noktası",
      description: "Widex teknolojisini daha erişilebilir bir fiyat seviyesinde sunmayı hedefler.",
    },
    {
      icon: Radar,
      category: "Ürün Yelpazesi",
      title: "Effect ve Mojo Aileleri",
      description: "Farklı ihtiyaç ve yerleşim tercihlerine uygun iki ana ürün ailesi sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorIconBg: "rgb(21 149 216 / 0.1)",
  accentColorHoverBorder: "rgb(21 149 216 / 0.45)",
};
