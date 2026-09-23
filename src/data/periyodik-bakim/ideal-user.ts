// "Periyodik Bakım Kimler İçin Uygundur?" section for the
// /servis-bakim/periyodik-bakim page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { Ear, Droplets, CalendarClock, Sun, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const periyodikBakimIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Periyodik Bakım Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, periyodik bakımın sıkça önerildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Ear,
      title: "Kulak Arkası (BTE/RIC) Cihaz Kullananlar",
      description: "Tüp, kulak ucu veya balmumu filtresi gibi değişebilir parçaları olan BTE/RIC kullanıcıları için periyodik bakım önerilir.",
      suggestedFamilies: ["Parça Yenileme"],
    },
    {
      icon: Droplets,
      title: "Boğuk veya Kesintili Ses Fark Edenler",
      description: "Sesin boğuklaştığını veya zaman zaman kesildiğini fark eden kullanıcılar için, çoğu zaman aşınan bir filtre veya tüp sebep olabilir.",
      suggestedFamilies: ["Filtre Kontrolü"],
    },
    {
      icon: CalendarClock,
      title: "Uzun Süredir Bakım Yaptırmayanlar",
      description: "Son bakımının üzerinden bir süre geçen kullanıcılar için düzenli bakım randevusu önerilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: Sun,
      title: "Aktif ve Terlemeye Yatkın Kullanıcılar",
      description: "Sık spor yapan veya terlemeye yatkın kullanıcılar için, aşınan parçaların daha sık yenilenmesi önerilebilir.",
      suggestedFamilies: ["Sık Kullanım Bakımı"],
    },
    {
      icon: RefreshCcw,
      title: "Önemli Bir Etkinlik veya Seyahat Öncesi Hazırlananlar",
      description: "Önemli bir etkinlik veya seyahat öncesinde cihazının en iyi durumda olmasını isteyen kullanıcılar için önerilir.",
      suggestedFamilies: ["Hazırlık Bakımı"],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorIconBg: "rgb(101 163 13 / 0.1)",
};
