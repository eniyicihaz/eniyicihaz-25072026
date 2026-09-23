// "Avantajları" bento section for the /servis-bakim/periyodik-bakim
// page — framed as the genuine advantages of proactive part
// replacement. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { ShieldCheck, Ear, Timer, RefreshCcw, PackageCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const periyodikBakimAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Periyodik Bakımın Sunduğu Avantajlar",
  intro: "Bir sorun oluşmadan önce düzenli bakım yaptırmanın nedenleri.",
  hero: {
    icon: ShieldCheck,
    category: "Önleyici Bakım",
    title: "Sorun Oluşmadan Önce Müdahale Edilir",
    description: "Aşınan parçalar zamanında yenilendiğinde, ses kalitesini etkileyen sorunların önüne geçilebilir.",
  },
  items: [
    {
      icon: Ear,
      category: "Ses Kalitesi",
      title: "Net Ses Kalitesi Korunur",
      description: "Temiz bir filtre ve sağlam bir tüp, cihazınızın en iyi ses kalitesini sunmasına yardımcı olur.",
    },
    {
      icon: Timer,
      category: "Hızlı İşlem",
      title: "Kısa Sürede Tamamlanır",
      description: "Periyodik bakım randevusu, genellikle kısa bir süre içinde tamamlanabilir.",
    },
    {
      icon: RefreshCcw,
      category: "Uzun Ömür",
      title: "Cihazınızın Ömrünü Uzatmaya Yardımcı Olur",
      description: "Düzenli bakım, cihazınızın iç bileşenlerinin daha uzun süre iyi durumda kalmasına katkı sağlayabilir.",
    },
    {
      icon: PackageCheck,
      category: "Profesyonel Kontrol",
      title: "Genel Aşınma Profesyonelce Değerlendirilir",
      description: "Evde fark edilmesi zor aşınma belirtileri, bakım sırasında profesyonelce kontrol edilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz",
      title: "Periyodik Bakım Herhangi Bir Ücret Talep Etmez",
      description: "Periyodik bakım randevusu, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorIconBg: "rgb(101 163 13 / 0.1)",
  accentColorHoverBorder: "rgb(101 163 13 / 0.45)",
};
