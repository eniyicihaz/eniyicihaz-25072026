// Advantages / conversion synthesis for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageAdvantages component (bento layout — requires exactly 5
// supporting items alongside the hero card). Not new information —
// synthesizes facts already established in
// hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Palette, Factory, BatteryCharging, Layers, Wallet } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const audioServiceAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN AUDIO SERVICE?",
  heading: "Kullanıcılar Neden Audio Service Tercih Ediyor?",
  intro: "Audio Service'i farklı kılan, kulak içi (ITE) uzmanlığını ve Alman zanaatkârlığı mirasını bir arada sunuyoruz.",
  hero: {
    icon: Palette,
    category: "Marka Felsefesi",
    title: "Kulak İçinde Neredeyse Görünmez",
    description:
      "40 yılı aşkın süredir kulak içi (ITE) işitme sistemleri konusunda uzmanlaşmış, kişiye özel üretim sunar.",
  },
  items: [
    {
      icon: Factory,
      category: "Miras",
      title: "1977'den Bu Yana Alman Üretimi",
      description: "Löhne, Almanya'da kurulan, uzun soluklu bir üretim geleneğine sahiptir.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Mood, Quix ve Stiline Aileleri",
      description: "Farklı ihtiyaç ve bütçelere uygun, geniş bir ürün yelpazesi sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "Erişilebilir Seçenekler",
      description: "Quix ailesiyle, Alman mühendisliğini daha uygun bir fiyat noktasında sunar.",
    },
    {
      icon: Palette,
      category: "Grup",
      title: "WS Audiology Güvencesi",
      description: "Signia, Widex ve Rexton ile aynı global grubun bir parçasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorIconBg: "rgb(18 64 160 / 0.1)",
  accentColorHoverBorder: "rgb(18 64 160 / 0.45)",
};
