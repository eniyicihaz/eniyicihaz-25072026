// "Tinnitus Değerlendirmesi Kimler İçin Önerilir?" section for the
// /degerlendirme/tinnitus-degerlendirme page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense, same
// technique used on every prior Değerlendirme page.

import { Volume2, Ear, Moon, HeartPulse, AlertTriangle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tinnitusDegerlendirmeIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNERİLİR?",
  heading: "Tinnitus Değerlendirmesi Kimler İçin Önerilir?",
  intro: "Aşağıdaki profiller, tinnitus değerlendirmesinin sıkça önerildiği kullanıcı gruplarını yansıtır; size en uygun değerlendirme her zaman bir odyometrist tarafından belirlenir.",
  profiles: [
    {
      icon: Volume2,
      title: "Sürekli veya Sık Tekrarlayan Çınlama Yaşayanlar",
      description: "İki haftadan uzun süredir devam eden veya sık tekrarlayan kulak çınlaması şikayeti olan kullanıcılar için değerlendirme önerilir.",
      suggestedFamilies: ["Tinnitus Öykü Değerlendirmesi"],
    },
    {
      icon: Ear,
      title: "İşitme Kaybıyla Birlikte Tinnitus Yaşayanlar",
      description: "İşitme kaybı ile birlikte tinnitus şikayeti olan kullanıcılar için birleşik bir değerlendirme faydalı olabilir.",
      suggestedFamilies: ["Odyometrik Değerlendirme"],
    },
    {
      icon: Moon,
      title: "Uyku veya Konsantrasyonu Etkilenenler",
      description: "Çınlama nedeniyle uyku düzeni veya günlük konsantrasyonu etkilenen kullanıcılar için değerlendirme önerilir.",
      suggestedFamilies: ["Etki Anketi (THI)"],
    },
    {
      icon: HeartPulse,
      title: "Yüksek Sese Maruz Kaldıktan Sonra Şikayeti Başlayanlar",
      description: "Konser, iş ortamı veya ani yüksek ses maruziyeti sonrası çınlama fark eden kullanıcılar için değerlendirme önerilir.",
      suggestedFamilies: ["Gürültüye Bağlı Değerlendirme"],
    },
    {
      icon: AlertTriangle,
      title: "Tek Taraflı veya Nabızla Uyumlu Çınlama Yaşayanlar",
      description: "Tek kulakta veya nabızla eş zamanlı hissedilen çınlama şikayeti olan kullanıcılar için öncelikli değerlendirme önerilir.",
      suggestedFamilies: ["Öncelikli Yönlendirme"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
};
