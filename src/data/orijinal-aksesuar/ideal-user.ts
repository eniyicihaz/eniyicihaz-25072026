// "Uyumsuz Aksesuar Kullanımının Sıkça Görülen Sonuçları" section for
// the /neden-orijinal/orijinal-aksesuar page. Reuses the shared
// BrandPageIdealUser component, same technique used on the three prior
// pages — repurposed into risks of non-original accessory use rather
// than hearing-loss symptoms or authenticity/service red flags.

import { VolumeX, Ear, BatteryWarning, PackageX, AlertCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const orijinalAksesuarIdealUser: BrandPageIdealUserContent = {
  badge: "UYUMSUZ AKSESUARIN SIKÇA GÖRÜLEN SONUÇLARI",
  heading: "Uyumsuz Aksesuar Kullanımının Sıkça Görülen Sonuçları",
  intro: "Aşağıdaki sonuçlar, orijinal olmayan veya uyumsuz aksesuar kullanımında sıkça karşılaşılan durumlar arasında yer alır.",
  profiles: [
    {
      icon: VolumeX,
      title: "Ses Kalitesinde Bozulma",
      description: "Uyumsuz kulak uçları veya filtreler, ses iletiminde kayıplara yol açabilir.",
      suggestedFamilies: ["Orijinal Kulak Ucu"],
    },
    {
      icon: Ear,
      title: "Kulakta Rahatsızlık veya Tahriş",
      description: "Cihaza uygun olmayan kulak uçları, kulak kanalında rahatsızlık veya tahrişe neden olabilir.",
      suggestedFamilies: ["Doğru Ölçü ve Uyum"],
    },
    {
      icon: BatteryWarning,
      title: "Pil veya Şarj Uyumsuzluğu",
      description: "Orijinal olmayan piller veya şarj aksesuarları, cihaza zarar verebilir veya performansı düşürebilir.",
      suggestedFamilies: ["Orijinal Pil ve Şarj Aksesuarları"],
    },
    {
      icon: PackageX,
      title: "Cihaza Fiziksel Hasar Riski",
      description: "Uyumsuz parçalar, cihazın iç bileşenlerine zarar verebilir.",
      suggestedFamilies: ["Modele Özel Aksesuar"],
    },
    {
      icon: AlertCircle,
      title: "Hijyen Sorunları",
      description: "Düzenli değiştirilmeyen veya uyumsuz filtreler, hijyen sorunlarına yol açabilir.",
      suggestedFamilies: ["Düzenli Filtre Değişimi"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
};
