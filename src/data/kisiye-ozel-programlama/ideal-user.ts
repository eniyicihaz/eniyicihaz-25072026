// "Kişiye Özel Programlama Kimler İçin Uygundur?" section for the
// /uygulama-ayar/kisiye-ozel-programlama page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { SlidersHorizontal, Music, PhoneCall, Users2, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kisiyeOzelProgramlamaIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Kişiye Özel Programlama Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, kişiye özel programlamanın sıkça önerildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: SlidersHorizontal,
      title: "İlk Ayarlardan Tam Memnun Olmayanlar",
      description: "İlk uygulama ayarlarının kendisine tam olarak uymadığını hisseden kullanıcılar için ince ayar önerilir.",
      suggestedFamilies: ["İnce Ayar Randevusu"],
    },
    {
      icon: Music,
      title: "Belirli Ortamlarda Zorluk Yaşayanlar",
      description: "Gürültülü ortam, müzik dinleme veya kalabalık bir ortamda zorluk yaşayan kullanıcılar için ortama özel programlar oluşturulabilir.",
      suggestedFamilies: ["Ortam Programı Özelleştirmesi"],
    },
    {
      icon: PhoneCall,
      title: "Telefon Görüşmelerinde Netlik Arayanlar",
      description: "Telefon görüşmelerinde ses netliğini artırmak isteyen kullanıcılar için özel bir program değerlendirilebilir.",
      suggestedFamilies: ["Telefon Programı"],
    },
    {
      icon: Users2,
      title: "Birden Fazla Yaşam Ortamı Olan Kullanıcılar",
      description: "İş, sosyal ortam ve ev gibi farklı akustik ortamlarda vakit geçiren kullanıcılar için çoklu program yapılandırması faydalı olabilir.",
      suggestedFamilies: ["Çoklu Ortam Programlaması"],
    },
    {
      icon: RefreshCcw,
      title: "Uzun Süredir Aynı Cihazı Kullananlar",
      description: "Yaşam tarzı veya işitme durumu değişen, uzun süredir aynı cihazı kullanan kullanıcılar için periyodik ince ayar önerilebilir.",
      suggestedFamilies: ["Periyodik İnce Ayar"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
};
