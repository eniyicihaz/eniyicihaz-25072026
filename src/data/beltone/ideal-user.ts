// "Kimler İçin Uygun" profile grid for the Beltone brand page
// (/markalar/beltone). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Sparkles, Wallet, Palette, Volume2, Layers } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const beltoneIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Beltone Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Sparkles,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Envision'ın yapay zekâ destekli DNN işlemesi önceliğiniz ise sıkça değerlendirilen bir seçimdir.",
      suggestedFamilies: ["Envision"],
    },
    {
      icon: Layers,
      title: "Geniş Seçenek Arayanlar",
      description: "Farklı yerleşim ve işitme kaybı derecelerini kapsayan Serene ailesi için sıkça önerilir.",
      suggestedFamilies: ["Serene"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi bir yerleşim tercih edenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Serene ITE"],
    },
    {
      icon: Wallet,
      title: "Erişilebilir Fiyat Arayanlar",
      description: "Güncel teknolojiyi daha uygun bir fiyat noktasında deneyimlemek isteyenler için sıkça önerilir.",
      suggestedFamilies: ["Commence"],
    },
    {
      icon: Volume2,
      title: "İleri-Derin İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Boost Max S"],
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorIconBg: "rgb(27 56 100 / 0.1)",
};
