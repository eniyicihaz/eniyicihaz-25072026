// "Kimler İçin Uygun" profile grid for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageIdealUser component. Descriptions stay in "sıkça önerilir"
// tone, never "kesin sizin içindir" (PRINCIPLES.md §4).

import { Sparkles, Gauge, Wallet, Palette, BatteryCharging } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const philipsHearingIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Philips HearLink Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Sparkles,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Velox-S platformunun en kapsamlı özellik setini önceliklendirenler için sıkça değerlendirilir.",
      suggestedFamilies: ["HearLink 50"],
    },
    {
      icon: Gauge,
      title: "Dengeli Bir Çözüm Arayanlar",
      description: "Teknoloji seviyesi ve fiyat arasında denge arayanlar için sıkça önerilir.",
      suggestedFamilies: ["HearLink 40"],
    },
    {
      icon: Wallet,
      title: "İlk Kez Cihaz Kullanacaklar",
      description: "Tanıdık bir markadan sade ve anlaşılır bir başlangıç noktası arayanlar için sıkça değerlendirilir.",
      suggestedFamilies: ["HearLink 30"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["HearLink Kulak İçi"],
    },
    {
      icon: BatteryCharging,
      title: "Pratik Günlük Kullanım Arayanlar",
      description: "Sık pil değişimi yerine şarjlı bir sistem tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["HearLink Şarjlı"],
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorIconBg: "rgb(11 95 206 / 0.1)",
};
