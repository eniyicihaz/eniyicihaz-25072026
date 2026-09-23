// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// uzun-omurlu-cihazlar page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Cihaz Ömrünü Kısaltan Nedenler" section above
// by using the design system's own --color-warning token (#d97706)
// instead of the page's emerald accent.

import { AlertTriangle, Droplets, PackageX, Calendar, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzunOmurluCihazlarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Cihaz Ömrünü Uzatırken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru bakım faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Garanti Dışı Onarımlar Riskli Olabilir",
      description: "Yetkisiz servislerde yapılan onarımlar, cihazın garantisini geçersiz kılabilir ve ek hasara yol açabilir.",
      suggestedFamilies: ["Yetkili Servis Kullanımı"],
    },
    {
      icon: Droplets,
      title: "Nem ve Neme Karşı Düzenli Kontrol Gereklidir",
      description: "Aktif kullanımda nem birikimi artabilir; düzenli kontrol cihaz ömrünü korumaya yardımcı olur.",
      suggestedFamilies: ["Nem Kontrolü"],
    },
    {
      icon: PackageX,
      title: "Taklit Yedek Parça Cihaza Zarar Verebilir",
      description: "Orijinal olmayan yedek parçalar, cihazın performansını düşürebilir ve ömrünü kısaltabilir.",
      suggestedFamilies: ["Orijinal Parça Kullanımı"],
    },
    {
      icon: Calendar,
      title: "Bakım Periyotları Marka ve Modele Göre Değişir",
      description: "Önerilen bakım sıklığı, kullandığınız marka ve modele göre farklılık gösterebilir.",
      suggestedFamilies: ["Üretici Önerileri"],
    },
    {
      icon: Gauge,
      title: "Kullanım Yoğunluğu Ömrü Etkiler",
      description: "Günlük kullanım süresi ve ortam koşulları, cihazın ömrünü doğrudan etkileyebilir.",
      suggestedFamilies: ["Kullanım Alışkanlıkları"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
