// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// orijinal-aksesuar page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Uyumsuz Aksesuarın Sıkça Görülen Sonuçları"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's violet accent.

import { AlertTriangle, Droplets, PackageX, Tag, Calendar } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const orijinalAksesuarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Aksesuar Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru aksesuar seçimi faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Aksesuar Her Modelle Uyumlu Değildir",
      description: "Aksesuarlar cihaz modeline özeldir; satın almadan önce uyumluluğu kontrol etmek önemlidir.",
      suggestedFamilies: ["Model Uyum Kontrolü"],
    },
    {
      icon: Droplets,
      title: "Filtreler Düzenli Değiştirilmelidir",
      description: "Cerumen filtreleri ve kulak uçları, önerilen sıklıkta değiştirilmediğinde performans kaybına yol açabilir.",
      suggestedFamilies: ["Düzenli Değişim Takvimi"],
    },
    {
      icon: PackageX,
      title: "Jenerik Ürünler Garantiyi Etkileyebilir",
      description: "Orijinal olmayan aksesuarların neden olduğu hasarlar garanti kapsamı dışında kalabilir.",
      suggestedFamilies: ["Orijinal Ürün Tercihi"],
    },
    {
      icon: Tag,
      title: "Fiyat Farkı Kaliteyi Yansıtabilir",
      description: "Çok ucuz jenerik aksesuarlar, genellikle daha düşük kalite standartlarına sahip olabilir.",
      suggestedFamilies: ["Bilinçli Tercih"],
    },
    {
      icon: Calendar,
      title: "Aksesuar Ömrü Kullanım Sıklığına Göre Değişir",
      description: "Aksesuarların değişim sıklığı, günlük kullanım süresine ve ortam koşullarına göre farklılık gösterebilir.",
      suggestedFamilies: ["Kişiye Özel Kullanım Takibi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
