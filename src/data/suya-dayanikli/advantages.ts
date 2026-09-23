// "Avantajları" bento section for the /isitme-cihazlari/suya-dayanikli
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { ShieldCheck, Dumbbell, CloudRain, Wrench, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const suyaDayankliAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Suya Dayanıklı Cihazların Avantajları",
  intro: "IP koruma sınıfını aktif kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: ShieldCheck,
    category: "Koruma",
    title: "Ter ve Neme Karşı Güvenilir Koruma",
    description: "IP koruma sınıfı sayesinde günlük ter ve nem maruziyetine karşı ek bir güvence sunar.",
  },
  items: [
    {
      icon: Dumbbell,
      category: "Aktif Yaşam",
      title: "Sporla Uğraşanlar İçin Güvenli Kullanım",
      description: "Egzersiz sırasında oluşan yoğun terlemeye karşı dayanıklıdır.",
    },
    {
      icon: CloudRain,
      category: "Hava Koşulları",
      title: "Hafif Yağmura Karşı Ek Koruma",
      description: "Ani hafif yağmur veya nemli hava koşullarında cihazınızı korumaya yardımcı olur.",
    },
    {
      icon: Wrench,
      category: "Uzun Ömür",
      title: "Nem Hasarına Karşı Daha Uzun Cihaz Ömrü",
      description: "Elektronik bileşenlerin nem kaynaklı arıza riskini azaltmaya yardımcı olur.",
    },
    {
      icon: ShieldCheck,
      category: "Gönül Rahatlığı",
      title: "Günlük Kazalara Karşı Ek Güvence",
      description: "Ani yağmur veya unutulan bir bardak su gibi günlük kazalara karşı ek bir koruma sağlar.",
    },
    {
      icon: Sparkles,
      category: "Bakım Kolaylığı",
      title: "Daha Az Nem Kaynaklı Arıza",
      description: "Düzenli nem hasarı kaynaklı servis ihtiyacını azaltmaya yardımcı olur.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
  accentColorHoverBorder: "rgb(13 148 136 / 0.45)",
};
