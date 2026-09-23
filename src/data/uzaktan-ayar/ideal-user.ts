// "Uzaktan Ayar Kimler İçin Uygundur?" section for the /uygulama-ayar/
// uzaktan-ayar page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { MapPin, Accessibility, Plane, SlidersHorizontal, Clock } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzaktanAyarIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Uzaktan Ayar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, uzaktan ayar hizmetinin sıkça tercih edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: MapPin,
      title: "Kliniğe Uzak Mesafede Yaşayanlar",
      description: "Kliniğimize uzak bir mesafede yaşayan, mevcut cihazı için küçük bir ayar güncellemesi isteyen kullanıcılar için uzaktan ayar önerilir.",
      suggestedFamilies: ["Uzak Mesafe Desteği"],
    },
    {
      icon: Accessibility,
      title: "Hareket Kısıtlılığı Olan Kullanıcılar",
      description: "Kliniğe ulaşımda zorluk yaşayan kullanıcılar için uzaktan ayar, erişimi kolaylaştıran bir seçenektir.",
      suggestedFamilies: ["Erişim Kolaylığı"],
    },
    {
      icon: Plane,
      title: "Seyahat Halinde Küçük Bir Sorun Yaşayanlar",
      description: "Seyahat sırasında cihazında küçük bir ayar ihtiyacı fark eden kullanıcılar için uzaktan ayar hızlı bir çözüm olabilir.",
      suggestedFamilies: ["Seyahat Desteği"],
    },
    {
      icon: SlidersHorizontal,
      title: "Kişiye Özel Programlama Sonrası Küçük Bir Düzeltme İsteyenler",
      description: "Daha önce yapılan kişiye özel programlama sonrası küçük bir düzeltme isteyen kullanıcılar için uzaktan ayar değerlendirilebilir.",
      suggestedFamilies: ["Küçük Düzeltme"],
    },
    {
      icon: Clock,
      title: "Kısa Sürede Randevu Almak İsteyenler",
      description: "Yüz yüze randevu için zaman ayırmakta zorlanan, hızlı bir çözüm isteyen kullanıcılar için uzaktan ayar bir seçenek olabilir.",
      suggestedFamilies: ["Hızlı Randevu"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
};
