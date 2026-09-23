// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// kalip-alimi page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item is this page's key safety flag: an
// impression cannot safely be taken if the ear canal is blocked or
// infected, so an otoscopy check always comes first.

import { AlertTriangle, Ear, Clock, Baby, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kalipAlimiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Kalıp Alımında Dikkat Edilmesi Gereken Noktalar",
  intro: "Kalıp alımı güvenli ve rutin bir işlemdir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Kulak Kanalı Tıkalı veya Enfeksiyonluysa İşlem Ertelenir",
      description: "Kulak kanalınızda yoğun kulak kiri veya aktif bir enfeksiyon varsa, kalıp alımı güvenli hale gelene kadar ertelenir.",
      suggestedFamilies: ["Ön Muayene"],
    },
    {
      icon: Ear,
      title: "İşlem Sırasında Hafif Bir Basınç Hissi Yaşanabilir",
      description: "Kalıp malzemesi kulak kanalınıza yerleştirilirken hafif bir dolgunluk veya basınç hissi normaldir; işlem ağrısız olmalıdır.",
      suggestedFamilies: ["İşlem Deneyimi"],
    },
    {
      icon: Clock,
      title: "Üretim Süresi Birkaç İş Günü Alabilir",
      description: "Kalıbınız aynı gün teslim edilmez; laboratuvar üretimi genellikle birkaç iş günü sürer.",
      suggestedFamilies: ["Üretim Süresi"],
    },
    {
      icon: Baby,
      title: "Çocuklarda Daha Sık Yenileme Gerekebilir",
      description: "Büyüme çağındaki çocuklarda kulak kanalı hızla değişebileceğinden, kalıpların daha sık yenilenmesi gerekebilir.",
      suggestedFamilies: ["Çocuklarda Kalıp Yenileme"],
    },
    {
      icon: RefreshCcw,
      title: "Kalıplar Zamanla Yenilenmesi Gereken Parçalardır",
      description: "Kulak kanalı şekli ve kalıp malzemesi zamanla değişebilir; periyodik olarak yeniden değerlendirme önerilir.",
      suggestedFamilies: ["Periyodik Değerlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
