// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// pil-aksesuar page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The second item is a genuine safety caution: button
// batteries are a real swallowing hazard and must be kept away from
// children and pets.

import { AlertTriangle, ShieldAlert, RefreshCcw, Recycle, Package } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const pilAksesuarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Pil ve Aksesuar Seçiminde Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru pil ve aksesuar seçimi faydalıdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Pil Boyutu Cihaza Göre Değişir",
      description: "Yanlış boyutta bir pil, cihazınıza zarar verebilir veya düzgün çalışmasını engelleyebilir; boyutu tahmin etmek yerine doğrulatın.",
      suggestedFamilies: ["Doğru Boyut Kontrolü"],
    },
    {
      icon: ShieldAlert,
      title: "Pilleri Çocuklardan ve Evcil Hayvanlardan Uzak Tutun",
      description: "Küçük düğme piller yutma riski taşır; pilleri her zaman çocukların ve evcil hayvanların ulaşamayacağı bir yerde saklayın.",
      suggestedFamilies: ["Güvenli Saklama"],
    },
    {
      icon: RefreshCcw,
      title: "Şarjlı Piller Zamanla Değişmesi Gereken Parçalardır",
      description: "Şarjlı sistemlerdeki pil, zamanla kapasite kaybedebilir; bu durumda pilin kullanıcı tarafından değil, profesyonelce değiştirilmesi gerekir.",
      suggestedFamilies: ["Profesyonel Pil Değişimi"],
    },
    {
      icon: Recycle,
      title: "Kullanılmış Pilleri Uygun Şekilde İmha Edin",
      description: "Kullanılmış pilleri normal çöpe atmak yerine, uygun geri dönüşüm noktalarına bırakmanız önerilir.",
      suggestedFamilies: ["Geri Dönüşüm"],
    },
    {
      icon: Package,
      title: "Bazı Aksesuarlar Modele Özeldir",
      description: "Saklama kutusu veya şarj ünitesi gibi bazı aksesuarlar, yalnızca belirli marka ve modellerle uyumlu olabilir.",
      suggestedFamilies: ["Model Uyumluluğu"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
