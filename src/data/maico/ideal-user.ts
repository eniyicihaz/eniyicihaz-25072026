// "Kimler İçin Uygun" profile grid for the Maico brand page
// (/markalar/maico). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Bluetooth, Volume2, Palette, Landmark } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const maicoIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "MAICO Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Bluetooth,
      title: "Bağlantı Özelliklerini Önceliklendirenler",
      description: "Akıllı telefonlarla kablosuz bağlantı kurabilen modelleri arayanlar için sıkça önerilir.",
      suggestedFamilies: ["Bluetooth Serisi"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir seçenektir.",
      suggestedFamilies: ["Kulak Arkası Serisi"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Kulak İçi Serisi"],
    },
    {
      icon: Landmark,
      title: "Köklü Bir Markaya Değer Verenler",
      description: "Ölçüm bilimindeki köklü mirası olan bir markadan güvenilir teknoloji arayanlar için sıkça değerlendirilir.",
      suggestedFamilies: ["Bluetooth Serisi", "Kulak Arkası Serisi"],
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorIconBg: "rgb(16 35 63 / 0.1)",
};
