// "Kimler İçin Uygun" profile grid for the Audifon brand page
// (/markalar/audifon). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { HeartPulse, Sparkles, Palette, Volume2, Factory } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const audifonIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Audifon Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: HeartPulse,
      title: "Tinnitus Şikayeti Olanlar",
      description: "Sueno Pro'nun kişiselleştirilebilir maskeleme sesi nedeniyle sıkça önerilir.",
      suggestedFamilies: ["Sueno Pro"],
    },
    {
      icon: Sparkles,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Cosma Chip Technology tabanlı 18 kanal WDRC işleme önceliğiniz ise sıkça değerlendirilen bir seçimdir.",
      suggestedFamilies: ["rega R"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kulak içi yerleşimli, kişiye özel bir görünüm tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["sino S"],
    },
    {
      icon: Volume2,
      title: "Orta-İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["sino P"],
    },
    {
      icon: Factory,
      title: "Alman Mühendisliğine Değer Verenler",
      description: "Ar-Ge'den seri üretime %100 Almanya'da geliştirilen bir marka arayanlar için sıkça önerilir.",
      suggestedFamilies: ["rega R", "sino R"],
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorIconBg: "rgb(226 0 26 / 0.1)",
};
