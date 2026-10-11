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
  intro: "Servis sürecinde bilgi almak kolaydır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Hourglass,
      title: "Kayıt Genel Aşamaları Kapsar",
      description: "Dijital servis kaydı personelimiz tarafından kullanılır; dakika dakika bir izleme sunmaz ve internet üzerinden görüntülenemez.",
      suggestedFamilies: ["Genel Aşama Takibi"],
    },
    {
      icon: RefreshCcw,
      title: "Bilgilendirme Manuel Yapılır",
      description: "SMS veya WhatsApp bilgilendirmesi gerektiğinde personelimiz tarafından manuel yapılır; her aşamada mesaj gelmeyebilir. Durumu bizden sorabilirsiniz.",
      suggestedFamilies: ["Manuel Bilgilendirme"],
    },
    {
      icon: Truck,
      title: "Teknik Servisteki Süre Bizim Kontrolümüzde Olmayabilir",
      description: "Cihazınız teknik servise gönderildiyse, bu aşamadaki süre kliniğimizin doğrudan kontrolü dışında olabilir.",
      suggestedFamilies: ["Teknik Servis Süresi"],
    },
    {
      icon: AlertTriangle,
      title: "Gecikme Fark Ederseniz Bize Ulaşın",
      description: "Beklenen süreden belirgin bir gecikme fark ederseniz, durumu netleştirmek için bizimle iletişime geçmeniz önerilir.",
      suggestedFamilies: ["Gecikme"],
    },
    {
      icon: PackageCheck,
      title: "Süre Değişebilir",
      description: "İşlem süresi arızanın türüne ve gerektiğinde teknik servisin veya yedek parçanın beklenmesine göre değişebilir. Tahmini onarım süresi ve varsa ücret, teknik servisteki ilk teknik kontrolden sonra bildirilir.",
      suggestedFamilies: ["Süre Beklentisi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
