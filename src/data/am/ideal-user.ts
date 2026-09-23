// "Kimler İçin Uygun" profile grid for the A&M brand page (/markalar/am).
// Renders through the shared BrandPageIdealUser component. Descriptions
// stay in "sıkça önerilir" tone, never "kesin sizin içindir"
// (PRINCIPLES.md §4).

import { Wallet, Volume2, Palette, Layers, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const amIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "A&M Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Wallet,
      title: "Erişilebilir Fiyat Arayanlar",
      description: "Güvenilir bir grubun teknolojisini daha uygun bir fiyat noktasında deneyimlemek isteyenler için sıkça önerilir.",
      suggestedFamilies: ["XTM P4", "XTM P6"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir seçenektir.",
      suggestedFamilies: ["XTM P12"],
    },
    {
      icon: Gauge,
      title: "Dengeli Bir Çözüm Arayanlar",
      description: "Orta seviye güç ihtiyacı olan kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["XTM P8"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["XTM A4"],
    },
    {
      icon: Layers,
      title: "İlk Kez Cihaz Kullanacaklar",
      description: "Temel ihtiyaçlar için sade bir başlangıç noktası arayanlara sıkça önerilir.",
      suggestedFamilies: ["XTM P4"],
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorIconBg: "rgb(243 112 26 / 0.1)",
};
