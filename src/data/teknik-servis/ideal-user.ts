// "Teknik Servis Kimler İçin Uygundur?" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { VolumeX, Zap, Droplets, Wifi, ShieldQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const teknikServisIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Teknik Servis Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, teknik servis başvurusunun sıkça gerekli olduğu durumları yansıtır.",
  profiles: [
    {
      icon: VolumeX,
      title: "Ses Kesintisi veya Ses Bozukluğu Yaşayanlar",
      description: "Cihazından hiç ses gelmeyen veya bozuk/kesintili ses duyan kullanıcılar için teknik servis değerlendirmesi önerilir.",
      suggestedFamilies: ["Ses Sorunu Teşhisi"],
    },
    {
      icon: Zap,
      title: "Cihazı Açılmayan veya Şarj Olmayan Kullanıcılar",
      description: "Cihazı açılmayan veya şarj/pil sorunu yaşayan kullanıcılar için teknik servis değerlendirmesi yapılabilir.",
      suggestedFamilies: ["Güç Sorunu Teşhisi"],
    },
    {
      icon: Droplets,
      title: "Fiziksel Hasar veya Su Teması Yaşayanlar",
      description: "Cihazı düşen, darbe alan veya suyla temas eden kullanıcılar için teknik servis değerlendirmesi önerilir.",
      suggestedFamilies: ["Hasar Değerlendirmesi"],
    },
    {
      icon: Wifi,
      title: "Bağlantı Sorunu Devam Eden Kullanıcılar",
      description: "Basit adımlarla çözülmeyen Bluetooth veya uygulama bağlantı sorunu yaşayan kullanıcılar için teknik servis değerlendirilebilir.",
      suggestedFamilies: ["Bağlantı Sorunu Teşhisi"],
    },
    {
      icon: ShieldQuestion,
      title: "Garanti Durumunu Netleştirmek İsteyenler",
      description: "Cihazının garanti kapsamında olup olmadığından emin olmayan kullanıcılar için teknik servis süreciyle birlikte netlik sağlanır.",
      suggestedFamilies: ["Garanti Değerlendirmesi"],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorIconBg: "rgb(220 38 38 / 0.1)",
};
