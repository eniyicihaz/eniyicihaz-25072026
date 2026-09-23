// "Cihaz Temizliği Kimler İçin Önemlidir?" section for the
// /servis-bakim/cihaz-temizligi page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense —
// though here candidacy is nearly universal, since daily cleaning
// benefits every user.

import { Users, Baby, Sun, VolumeX, Sparkles } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazTemizligiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Cihaz Temizliği Kimler İçin Önemlidir?",
  intro: "Günlük temizlik, hemen hemen her kullanıcı için faydalıdır; aşağıdaki profiller özellikle önem taşıyan durumları yansıtır.",
  profiles: [
    {
      icon: Users,
      title: "Tüm Cihaz Kullanıcıları",
      description: "Cihaz türü ve markası fark etmeksizin, düzenli günlük temizlik her kullanıcı için önerilir.",
      suggestedFamilies: ["Günlük Rutin"],
    },
    {
      icon: Baby,
      title: "Yeni Cihaz Kullanmaya Başlayanlar",
      description: "Cihazını yeni kullanmaya başlayan kullanıcılar için doğru temizlik alışkanlığını erken kazanmak önemlidir.",
      suggestedFamilies: ["Alışkanlık Oluşturma"],
    },
    {
      icon: Sun,
      title: "Terlemeye Yatkın veya Aktif Kullanıcılar",
      description: "Sık spor yapan veya terlemeye yatkın kullanıcılar için günlük temizlik ve kuru saklama daha da önemlidir.",
      suggestedFamilies: ["Nem Koruması"],
    },
    {
      icon: VolumeX,
      title: "Hafif Bir Ses Boğukluğu Fark Edenler",
      description: "Cihazından hafif bir ses boğukluğu fark eden kullanıcılar için, çoğu zaman basit bir temizlik yeterli olabilir.",
      suggestedFamilies: ["İlk Kontrol"],
    },
    {
      icon: Sparkles,
      title: "Cihazının Ömrünü Uzatmak İsteyenler",
      description: "Cihazının uzun yıllar iyi performans göstermesini isteyen tüm kullanıcılar için düzenli temizlik önerilir.",
      suggestedFamilies: ["Uzun Vadeli Bakım"],
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
  accentColorIconBg: "rgb(14 165 233 / 0.1)",
};
