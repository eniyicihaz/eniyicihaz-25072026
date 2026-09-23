// "Kimler İçin Uygun" profile grid for the Bernafon brand page
// (/markalar/bernafon). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Users, Waves, Cpu, Palette, Volume2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const bernafonIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Bernafon Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Users,
      title: "Grup Konuşmalarında Zorlananlar",
      description: "Smart Directionality ve Smart Sensor özellikleri, kalabalık ortamlarda konuşmayı takip etmek isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Encanta"],
    },
    {
      icon: Waves,
      title: "Aktif ve Hareketli Yaşam Sürenler",
      description: "Hareket algılayan otomatik ayar özelliği nedeniyle sıkça değerlendirilir.",
      suggestedFamilies: ["Encanta", "Encanta Alpha XT"],
    },
    {
      icon: Cpu,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Machine Learning 2.0 destekli ses işleme önceliğiniz ise sıkça önerilen bir seçimdir.",
      suggestedFamilies: ["Encanta"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, neredeyse görünmez bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Encanta CIC"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Encanta BTE"],
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorIconBg: "rgb(218 41 28 / 0.1)",
};
