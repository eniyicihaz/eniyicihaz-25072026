// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// suya-dayanikli page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Dumbbell, CloudRain, Bike, Droplet, Briefcase } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const suyaDayankliIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Suya Dayanıklı Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Dumbbell,
      title: "Düzenli Spor Yapanlar",
      description: "Egzersiz sırasında oluşan yoğun terlemeye karşı günlük kullanım için sıkça tercih edilir.",
      suggestedFamilies: ["Suya Dayanıklı RIC / BTE Modelleri"],
    },
    {
      icon: CloudRain,
      title: "Nemli veya Yağmurlu İklimde Yaşayanlar",
      description: "Nem oranı yüksek ortamlarda cihazın korunmasını önemseyen kullanıcılar için uygundur.",
      suggestedFamilies: ["IP68 Sınıfı Modeller"],
    },
    {
      icon: Bike,
      title: "Dış Mekan Aktiviteleri Yapanlar",
      description: "Yürüyüş, bisiklet ve diğer açık hava aktivitelerinde hava koşullarına karşı ek koruma arayanlar için değerlendirilir.",
      suggestedFamilies: ["Dayanıklı Gövdeli Modeller"],
    },
    {
      icon: Droplet,
      title: "Yoğun Terleyen Kullanıcılar",
      description: "Günlük yaşamda yoğun terleyen kullanıcılar için nem hasarı riskini azaltmaya yardımcı olur.",
      suggestedFamilies: ["Nano Kaplamalı Modeller"],
    },
    {
      icon: Briefcase,
      title: "Cihazının Ömrünü Uzatmak İsteyen Herkes",
      description: "Suya dayanıklılık, günlük kazara maruziyetlere karşı ek bir güvence isteyen tüm kullanıcılar için faydalı bir özelliktir.",
      suggestedFamilies: ["IP Korumalı Modeller"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
