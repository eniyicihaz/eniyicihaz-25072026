// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item is this page's key honesty flag:
// not every issue needs a hardware repair — some are better resolved
// through Kontrol Randevusu or Uzaktan Ayar first.

import { Hourglass, Phone, ShieldQuestion, PackageCheck, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const teknikServisConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Teknik Servis Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Teknik servis faydalı bir çözüm yoludur; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Hourglass,
      title: "İşlem Süresi Değişebilir",
      description: "Süre arızaya göre değişir; gerektiğinde teknik servisin veya yedek parçanın beklenmesi süreyi uzatabilir. Tahmini onarım süresi, teknik servisteki ilk teknik kontrolden sonra bildirilir.",
      suggestedFamilies: ["Süre Beklentisi"],
    },
    {
      icon: ShieldQuestion,
      title: "Garanti Kapsamı Duruma Göre Değişir",
      description: "Garanti kapsamı, cihazın garanti şartlarına ve arızanın niteliğine bağlıdır; su teması veya düşme gibi kullanıcı kaynaklı hasarlar kapsam dışında kalabilir.",
      suggestedFamilies: ["Garanti Kapsamı"],
    },
    {
      icon: PackageCheck,
      title: "Garanti Dışı İşlemde Ücret Önceden Paylaşılır",
      description: "Teknik servis ücreti cihazın durumuna göre belirlenir; varsa onarım ücreti teknik servisteki ilk teknik kontrolden sonra bildirilir.",
      suggestedFamilies: ["Maliyet Şeffaflığı"],
    },
    {
      icon: RefreshCcw,
      title: "Yedek Cihaz İmkânı Değişebilir",
      description: "Onarım süresince kullanılabilecek yedek cihaz imkânı, stok durumuna göre değişebilir.",
      suggestedFamilies: ["Yedek Cihaz"],
    },
    {
      icon: Phone,
      title: "Başvurmadan Önce Bizimle İletişime Geçin",
      description: "Teknik servis için randevu gerekir; telefonla veya WhatsApp üzerinden iletişime geçmeniz, sorununuzun daha hızlı değerlendirilmesine yardımcı olur.",
      suggestedFamilies: ["Randevu"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
