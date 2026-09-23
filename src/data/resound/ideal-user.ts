// "Kimler İçin Uygun" profile grid for the ReSound brand page
// (/markalar/resound). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Waves, Bluetooth, Cpu, Smartphone, Volume2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const resoundIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "ReSound Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Waves,
      title: "Mekansal İşitmeyi Önceliklendirenler",
      description: "M&RIE teknolojisi, ses kaynağının yönünü daha doğal algılamak isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Vivia", "Omnia"],
    },
    {
      icon: Bluetooth,
      title: "Kamuya Açık Ortamlarda Bağlantı Arayanlar",
      description: "Auracast destekli ortamlarda yayın sesine bağlanmak isteyenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Nexia", "Vivia"],
    },
    {
      icon: Cpu,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Derin öğrenme destekli ses işleme önceliğiniz ise sıkça önerilen bir seçimdir.",
      suggestedFamilies: ["Vivia"],
    },
    {
      icon: Smartphone,
      title: "Uzaktan Destek İsteyenler",
      description: "ReSound Assist ile kliniğe gitmeden ince ayar almak isteyen kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Nexia", "Omnia"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["ENZO Q"],
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorIconBg: "rgb(170 24 53 / 0.1)",
};
