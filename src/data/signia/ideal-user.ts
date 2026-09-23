// "Kimler İçin Uygun" profile grid for the Signia brand page
// (/markalar/signia) — see SIGNIA MASTER BLUEPRINT §9.9. Renders through
// the shared BrandPageIdealUser component. Descriptions stay in "sıkça
// önerilir" tone, never "kesin sizin içindir" (PRINCIPLES.md §4).

import { Cpu, Waves, Sparkles, Activity, Volume2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const signiaIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Signia Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Cpu,
      title: "Teknolojiye ve Yapay Zekâya Değer Verenler",
      description: "Kişiselleştirilmiş, yapay zekâ destekli bir deneyim önceliğiniz ise sıkça önerilen bir seçimdir.",
      suggestedFamilies: ["Styletto", "Pure"],
    },
    {
      icon: Waves,
      title: "Kendi Sesini Rahatsız Edici Bulanlar",
      description: "Own Voice Processing teknolojisi, kendi sesini yankılı veya rahatsız edici bulan kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Pure"],
    },
    {
      icon: Sparkles,
      title: "Tasarım ve Estetiği Önceliklendirenler",
      description: "İnce ve moda odaklı tasarımı tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Styletto"],
    },
    {
      icon: Activity,
      title: "Aktif ve Sporcu Kullanıcılar",
      description: "Kulaklık benzeri, hareketli kullanıma uygun tasarımıyla sıkça değerlendirilir.",
      suggestedFamilies: ["Active"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Motion"],
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorIconBg: "rgb(178 31 75 / 0.1)",
};
