// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// bluetooth-ozellikli page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Phone, Tv, Video, Smartphone, Music } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const bluetoothIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Bluetooth Özellikli Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Phone,
      title: "Sık Telefon Görüşmesi Yapanlar",
      description: "Görüşmeleri doğrudan cihazdan, arka plan gürültüsü olmadan dinlemek isteyenler için pratik bir çözümdür.",
      suggestedFamilies: ["Bluetooth Özellikli BTE / RIC", "Bluetooth Özellikli ITE"],
    },
    {
      icon: Tv,
      title: "Televizyon ve Film İzleyenler",
      description: "TV yayın aksesuarıyla eşleştirilen cihaz, sesi doğrudan kulağa taşıyarak sesi yükseltme ihtiyacını azaltır.",
      suggestedFamilies: ["TV Streamer Uyumlu Modeller"],
    },
    {
      icon: Video,
      title: "Video Görüşme Yapan Çalışanlar",
      description: "Online toplantı ve video görüşmelerinde konuşmayı takip etmeyi kolaylaştırır.",
      suggestedFamilies: ["Bluetooth Özellikli RIC"],
    },
    {
      icon: Smartphone,
      title: "Teknolojiye Yatkın Kullanıcılar",
      description: "Uygulama üzerinden ayar yapmayı ve cihazını kişiselleştirmeyi seven kullanıcılar için uygundur.",
      suggestedFamilies: ["Uygulama Destekli Modeller"],
    },
    {
      icon: Music,
      title: "Müzik ve Podcast Dinleyenler",
      description: "Ses kaynağından doğrudan, kulaklık takmadan net bir dinleme deneyimi sunar.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
};
