// "Kimler İçin Uygun" profile grid for the Vista brand page
// (/markalar/vista). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Sparkles, Gauge, BatteryCharging, Palette, Wallet } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const vistaIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Vista Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Wallet,
      title: "Sonova Teknolojisini Erişilebilir Fiyata Arayanlar",
      description: "Büyük bir grubun teknolojisini daha uygun bir fiyat noktasında deneyimlemek isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Vista B"],
    },
    {
      icon: Sparkles,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Soundsuite OS'un en kapsamlı özellik setini önceliklendirenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Vista V"],
    },
    {
      icon: Gauge,
      title: "Dengeli Bir Çözüm Arayanlar",
      description: "Teknoloji seviyesi ve fiyat arasında denge arayanlar için sıkça önerilir.",
      suggestedFamilies: ["Vista B"],
    },
    {
      icon: BatteryCharging,
      title: "Pratik Günlük Kullanım Arayanlar",
      description: "Sık pil değişimi yerine şarjlı bir sistem tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Vista T"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kulak kanalı içinde neredeyse görünmez bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Vista IC"],
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorIconBg: "rgb(232 93 10 / 0.1)",
};
