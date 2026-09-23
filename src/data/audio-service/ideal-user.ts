// "Kimler İçin Uygun" profile grid for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageIdealUser component. Descriptions stay in "sıkça önerilir"
// tone, never "kesin sizin içindir" (PRINCIPLES.md §4).

import { Palette, Waves, Wallet, BatteryCharging, Factory } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const audioServiceIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Audio Service Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kulak kanalı içinde neredeyse görünmez, kişiye özel bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Kulak İçi Serisi"],
    },
    {
      icon: Waves,
      title: "Dengeli Bir Çözüm Arayanlar",
      description: "Günlük kullanım için dengeli bir bağlantı ve ses deneyimi arayanlar için sıkça değerlendirilir.",
      suggestedFamilies: ["Mood"],
    },
    {
      icon: Wallet,
      title: "Erişilebilir Fiyat Arayanlar",
      description: "Alman mühendisliğini daha erişilebilir bir fiyat noktasında deneyimlemek isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Quix"],
    },
    {
      icon: BatteryCharging,
      title: "Pratik Günlük Kullanım Arayanlar",
      description: "Sık pil değişimi yerine şarjlı bir sistem tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Şarjlı Serisi"],
    },
    {
      icon: Factory,
      title: "Alman Mühendisliğine Değer Verenler",
      description: "1977'den bu yana süregelen bir Alman üretim geleneği arayanlar için sıkça önerilir.",
      suggestedFamilies: ["Stiline"],
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorIconBg: "rgb(18 64 160 / 0.1)",
};
