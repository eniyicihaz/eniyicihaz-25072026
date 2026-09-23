// "Avantajları" bento section for the /segmentler/premium-seri page —
// framed as the genuine feature advantages of the premium tier, same
// technique every devicesMega page's advantages.ts uses. Renders through
// the shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.

import { Brain, Bluetooth, Radar, BatteryCharging, ShieldCheck, Sliders } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const premiumSeriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Premium Serinin Sunduğu Avantajlar",
  intro: "Premium seriyi sıkça tercih edilen bir seçenek hâline getiren öne çıkan özellikler.",
  hero: {
    icon: Brain,
    category: "Yapay Zeka Destekli",
    title: "En Gelişmiş Ses İşleme Teknolojisi",
    description: "Premium seri modeller, karmaşık dinleme ortamlarında bile net ses ayrımı sağlayan en gelişmiş algoritmaları taşır.",
  },
  items: [
    {
      icon: Bluetooth,
      category: "Tam Bağlantı",
      title: "Eksiksiz Kablosuz Bağlantı",
      description: "Telefon, TV ve diğer cihazlarla kesintisiz bağlantı sağlar.",
    },
    {
      icon: Radar,
      category: "Gelişmiş Yönlü Mikrofon",
      title: "En Üst Düzey Konuşma Odaklanması",
      description: "Gelişmiş yönlü mikrofon sistemleri, kalabalık ortamlarda hedef konuşmayı öne çıkarır.",
    },
    {
      icon: BatteryCharging,
      category: "Uzun Pil Ömrü",
      title: "Gelişmiş Şarj ve Pil Yönetimi",
      description: "Premium modeller genellikle daha uzun pil ömrü ve hızlı şarj seçenekleri sunar.",
    },
    {
      icon: ShieldCheck,
      category: "Kapsamlı Garanti",
      title: "Daha Kapsamlı Garanti ve Destek",
      description: "Premium seri modeller, genellikle daha uzun garanti süresi ve öncelikli destek ile sunulur.",
    },
    {
      icon: Sliders,
      category: "İnce Ayar İmkânı",
      title: "Detaylı Kişiselleştirme Seçenekleri",
      description: "Cihazın birçok yönü, ihtiyacınıza göre ince ayar yapılabilir.",
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(234 179 8 / 0.1)",
  accentColorHoverBorder: "rgb(234 179 8 / 0.45)",
};
