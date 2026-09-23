// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// onarim-takibi page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item is this page's key honesty flag:
// tracking shows general stages, not real-time minute-by-minute status.

import { Hourglass, Truck, AlertTriangle, PackageCheck, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const onarimTakibiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Onarım Takibinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Onarım takibi faydalı bir hizmettir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Hourglass,
      title: "Takip Genel Aşamaları Gösterir",
      description: "Takip sistemi dakika dakika bir izleme sunmaz; cihazınızın hangi genel aşamada olduğunu gösterir.",
      suggestedFamilies: ["Genel Aşama Takibi"],
    },
    {
      icon: Truck,
      title: "Üretici Servisi Aşaması Kliniğimizin Doğrudan Kontrolünde Değildir",
      description: "Cihazınız üretici servisine gönderildiyse, bu aşamadaki süre kliniğimizin doğrudan kontrolü dışında olabilir.",
      suggestedFamilies: ["Üretici Servisi Süresi"],
    },
    {
      icon: AlertTriangle,
      title: "Gecikme Fark Ederseniz Bize Ulaşın",
      description: "Beklenen süreden belirgin bir gecikme fark ederseniz, durumu netleştirmek için bizimle iletişime geçmeniz önerilir.",
      suggestedFamilies: ["Gecikme Bildirimi"],
    },
    {
      icon: PackageCheck,
      title: "Ekspres Talepler Her Zaman Mümkün Olmayabilir",
      description: "Acil bir ihtiyacınız varsa bizimle paylaşabilirsiniz; ancak hızlandırma her durumda mümkün olmayabilir.",
      suggestedFamilies: ["Öncelik Talebi"],
    },
    {
      icon: RefreshCcw,
      title: "Kalite Kontrolü Ek Süre Gerektirebilir",
      description: "Son kalite kontrolünde ek bir ihtiyaç fark edilirse, süreç beklenenden biraz daha uzun sürebilir.",
      suggestedFamilies: ["Kalite Kontrolü"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
