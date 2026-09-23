// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// sarjli-teknolojiler page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { BatteryCharging, ShieldCheck, Smartphone, Clock, Leaf } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sarjliTeknolojilerIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Şarjlı Teknolojiler Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: BatteryCharging,
      title: "Şarj Teknolojisini Yakından Tanımak İsteyenler",
      description: "Cihazının şarj altyapısının nasıl çalıştığını merak eden, teknolojiye ilgi duyan kullanıcılar için uygundur.",
      suggestedFamilies: ["Gelişmiş BMS Destekli Modeller"],
    },
    {
      icon: ShieldCheck,
      title: "Pil Güvenliğini Önceliklendirenler",
      description: "Aşırı şarja ve ısınmaya karşı korumalı, sertifikalı şarj devresine sahip modeller arayan kullanıcılar için değerlendirilir.",
      suggestedFamilies: ["Sertifikalı Şarj Devreli Modeller"],
    },
    {
      icon: Smartphone,
      title: "Pil Sağlığını Uygulamadan Takip Etmek İsteyenler",
      description: "Şarj döngüsü sayısını ve pil sağlığı durumunu uygulama üzerinden görmek isteyen kullanıcılar için uygundur.",
      suggestedFamilies: ["Uygulama Destekli Pil Takibi"],
    },
    {
      icon: Clock,
      title: "Uzun Vadeli Cihaz Ömrü Önceliklendirenler",
      description: "Pil kapasitesinin yıllar içinde nasıl azaldığını anlamak ve buna göre planlama yapmak isteyen kullanıcılar için değerlendirilir.",
      suggestedFamilies: ["Uzun Ömürlü Pil Teknolojili Modeller"],
    },
    {
      icon: Leaf,
      title: "Çevre Bilinci Yüksek Kullanıcılar",
      description: "Pil kimyasının çevresel etkisini ve geri dönüşüm sürecini merak eden kullanıcılar için uygundur.",
      suggestedFamilies: ["Şarjlı Modeller"],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorIconBg: "rgb(220 38 38 / 0.1)",
};
