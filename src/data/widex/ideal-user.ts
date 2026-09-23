// "Kimler İçin Uygun" profile grid for the Widex brand page
// (/markalar/widex). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Activity, Waves, Cpu, Radio, Volume2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const widexIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Widex Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Activity,
      title: "Doğal Ses Kalitesini Önceliklendirenler",
      description: "PureSound™ teknolojisi, işlenmemiş sese yakın bir deneyim isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Moment Sheer"],
    },
    {
      icon: Waves,
      title: "Gürültülü Ortamlarda Zorlananlar",
      description: "Arka plan gürültüsünü azaltmaya yönelik tasarımı nedeniyle sıkça değerlendirilir.",
      suggestedFamilies: ["SmartRIC"],
    },
    {
      icon: Cpu,
      title: "Teknolojiye ve Kişiselleştirmeye Değer Verenler",
      description: "SoundSense Learn ile kişiselleştirilmiş bir deneyim önceliğiniz ise sıkça önerilen bir seçimdir.",
      suggestedFamilies: ["Allure"],
    },
    {
      icon: Radio,
      title: "Kulak Çınlaması Yaşayanlar",
      description: "Widex Zen ve SoundRelax özellikleri nedeniyle sıkça değerlendirilir.",
      suggestedFamilies: ["Moment"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Beyond"],
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(20 184 166 / 0.1)",
};
