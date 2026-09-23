// "Kontrol Randevusu Kimler İçin Uygundur?" section for the
// /uygulama-ayar/kontrol-randevusu page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { CalendarCheck, History, HeartPulse, ShieldCheck, Smile } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kontrolRandevusuIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Kontrol Randevusu Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, kontrol randevusunun sıkça önerildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: CalendarCheck,
      title: "Periyodik Kontrol Zamanı Gelen Cihaz Kullanıcıları",
      description: "Son kontrol randevusunun üzerinden bir süre geçen mevcut cihaz kullanıcıları için düzenli kontrol önerilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: History,
      title: "Uzun Süredir İşitme Yeniden Testi Yaptırmayanlar",
      description: "Bir süredir işitme yeniden değerlendirmesi yaptırmayan kullanıcılar için kontrol randevusu faydalı olabilir.",
      suggestedFamilies: ["İşitme Yeniden Değerlendirmesi"],
    },
    {
      icon: HeartPulse,
      title: "Sağlık Durumu veya İlaç Kullanımı Değişenler",
      description: "Genel sağlık durumu veya kullandığı ilaçlarda değişiklik olan kullanıcılar için kontrol randevusu önerilebilir.",
      suggestedFamilies: ["Sağlık Durumu Takibi"],
    },
    {
      icon: ShieldCheck,
      title: "Garanti veya Servis Sürecini Takip Etmek İsteyenler",
      description: "Cihazının garanti kapsamındaki durumu hakkında bilgi almak isteyen kullanıcılar için kontrol randevusu değerlendirilebilir.",
      suggestedFamilies: ["Garanti Takibi"],
    },
    {
      icon: Smile,
      title: "Her Şeyin Yolunda Olduğundan Emin Olmak İsteyenler",
      description: "Herhangi bir şikayeti olmasa da cihazının ve işitmesinin iyi durumda olduğundan emin olmak isteyen kullanıcılar için önerilir.",
      suggestedFamilies: ["Genel Güvence"],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorIconBg: "rgb(71 85 105 / 0.1)",
};
