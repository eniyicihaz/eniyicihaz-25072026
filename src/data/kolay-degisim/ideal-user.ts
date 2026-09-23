// "Değişim Güvencesi Olmadan Karşılaşılabilecek Sonuçlar" section for
// the /neden-orijinal/kolay-degisim page. Reuses the shared
// BrandPageIdealUser component, same technique used on the five prior
// pages — repurposed into the consequences of lacking an exchange
// guarantee rather than hearing-loss symptoms or authenticity/service/
// accessory/consultancy red flags.

import { XCircle, FileX, Wallet, Clock, ThumbsDown } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kolayDegisimIdealUser: BrandPageIdealUserContent = {
  badge: "DEĞİŞİM GÜVENCESİ OLMADAN KARŞILAŞILABİLECEK SONUÇLAR",
  heading: "Değişim Güvencesi Olmadan Karşılaşılabilecek Sonuçlar",
  intro: "Aşağıdaki sonuçlar, net bir değişim güvencesi olmadan yapılan satın almalarda sıkça karşılaşılan durumlar arasında yer alır.",
  profiles: [
    {
      icon: XCircle,
      title: "Uygun Olmayan Cihazla Devam Etmek Zorunda Kalma",
      description: "Değişim imkânı olmadığında, ihtiyacı karşılamayan bir cihazla kullanmaya devam etmek zorunda kalınabilir.",
      suggestedFamilies: ["Değişim Hakkı"],
    },
    {
      icon: FileX,
      title: "Belirsiz veya Yazılı Olmayan Koşullar",
      description: "Yetkisiz kanallarda değişim koşulları net bir şekilde belirtilmeyebilir.",
      suggestedFamilies: ["Net Koşullar"],
    },
    {
      icon: Wallet,
      title: "Ek Maliyetle Yeni Cihaz Arayışı",
      description: "Değişim güvencesi olmadığında, uygun olmayan bir cihaz için yeniden yatırım yapmak gerekebilir.",
      suggestedFamilies: ["Güvenceli Yatırım"],
    },
    {
      icon: Clock,
      title: "Uzayan ve Belirsiz Süreçler",
      description: "Değişim süreci net tanımlanmadığında, çözüm süresi öngörülemez şekilde uzayabilir.",
      suggestedFamilies: ["Şeffaf Süreç"],
    },
    {
      icon: ThumbsDown,
      title: "Genel Memnuniyetsizlik",
      description: "Değişim imkânı olmadan yaşanan uyum sorunları, cihaza karşı genel bir memnuniyetsizliğe yol açabilir.",
      suggestedFamilies: ["Güvenceli Satın Alma"],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorIconBg: "rgb(225 29 72 / 0.1)",
};
