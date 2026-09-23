// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// garanti-islemleri page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). Echoes Teknik Servis's own note
// that user-caused damage voids warranty — genuinely relevant on both
// pages, not duplicated content but a natural, honest overlap.

import { Droplets, AlertTriangle, FileText, BatteryCharging, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const garantiIslemleriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Garanti İşlemlerinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Garanti süreci faydalı bir güvencedir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Droplets,
      title: "Kullanıcı Kaynaklı Hasarlar Kapsam Dışıdır",
      description: "Su teması, düşme veya yetkisiz müdahale gibi kullanıcı kaynaklı hasarlar genellikle garanti kapsamı dışında kalır.",
      suggestedFamilies: ["Kapsam Dışı Durumlar"],
    },
    {
      icon: AlertTriangle,
      title: "Yetkisiz Servis Garantiyi Geçersiz Kılabilir",
      description: "Cihazınızın yetkisiz bir yerde onarılması, kalan garanti hakkınızı geçersiz kılabilir.",
      suggestedFamilies: ["Yetkili Servis Şartı"],
    },
    {
      icon: FileText,
      title: "Fatura ve Garanti Belgesini Saklayın",
      description: "Garanti talebinde bulunabilmek için satın alma faturanızı ve garanti belgenizi saklamanız gerekir.",
      suggestedFamilies: ["Belge Saklama"],
    },
    {
      icon: BatteryCharging,
      title: "Şarjlı Pilin Zamanla Zayıflaması Genellikle Kapsam Dışıdır",
      description: "Şarjlı pilin doğal kullanım ömrü sonunda kapasite kaybetmesi, genellikle bir üretim kusuru olarak değerlendirilmez.",
      suggestedFamilies: ["Pil Ömrü"],
    },
    {
      icon: RefreshCcw,
      title: "Garanti Süresi Modele Göre Değişir",
      description: "Garanti süresi ve koşulları, cihaz markası ve modeline göre değişebilir; kesin süre satın alma sırasında belirtilir.",
      suggestedFamilies: ["Süre Farklılığı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
