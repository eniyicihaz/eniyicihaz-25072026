// "Kimler İçin Uygun" profile grid for the Sonic brand page
// (/markalar/sonic). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Sparkles, Volume2, Palette, BatteryCharging, Wallet } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sonicIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Sonic Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Sparkles,
      title: "Karmaşık Ortamlarda Zorlananlar",
      description: "SoundDNA platformunun otomatik uyum sağlaması nedeniyle sıkça önerilir.",
      suggestedFamilies: ["Enchant"],
    },
    {
      icon: Wallet,
      title: "Dengeli Bir Fiyat-Performans Arayanlar",
      description: "Radiant'ın kanıtlanmış amplifikasyon sistemi için sıkça değerlendirilir.",
      suggestedFamilies: ["Radiant"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Enchant BTE"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Enchant ITE"],
    },
    {
      icon: BatteryCharging,
      title: "Pratik Günlük Kullanım Arayanlar",
      description: "Sık pil değişimi yerine şarjlı bir sistem tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Enchant Şarjlı"],
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorIconBg: "rgb(61 76 89 / 0.1)",
};
