// "Kimler İçin Uygun" profile grid for the Coselgi brand page
// (/markalar/coselgi). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Waves, Palette, BatteryCharging, Wallet } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const coselgiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Coselgi Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Waves,
      title: "Farklı Ortamlarda Vakit Geçirenler",
      description: "Acoustic Environment Technology'nin otomatik ortam uyumu nedeniyle sıkça önerilir.",
      suggestedFamilies: ["Effect"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi yerleşim tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Effect ITE"],
    },
    {
      icon: BatteryCharging,
      title: "Pratik Günlük Kullanım Arayanlar",
      description: "Sık pil değişimi yerine şarjlı bir sistem tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Mojo"],
    },
    {
      icon: Wallet,
      title: "SGK'ya Uygun Seçenek Arayanlar",
      description: "Widex teknolojisini daha erişilebilir bir fiyat noktasında deneyimlemek isteyenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Effect", "Mojo"],
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorIconBg: "rgb(21 149 216 / 0.1)",
};
