// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item is this page's key honesty flag:
// not every issue needs a hardware repair — some are better resolved
// through Kontrol Randevusu or Uzaktan Ayar first.

import { AlertTriangle, Truck, ShieldQuestion, PackageCheck, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const teknikServisConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Teknik Servis Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Teknik servis faydalı bir çözüm yoludur; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Sorun Fiziksel Bir Arıza Olmayabilir",
      description: "Bazı şikayetler aslında ayar veya programlama kaynaklıdır; bu durumlarda önce Kontrol Randevusu veya Uzaktan Ayar değerlendirilebilir.",
      suggestedFamilies: ["Ön Değerlendirme"],
    },
    {
      icon: Truck,
      title: "Üretici Servisine Gönderim Süreyi Uzatabilir",
      description: "Yerinde çözülemeyen onarımlar için cihazın üreticiye gönderilmesi gerekebilir; bu durumda süreç birkaç iş günü daha uzayabilir.",
      suggestedFamilies: ["Üretici Servis Süresi"],
    },
    {
      icon: ShieldQuestion,
      title: "Garanti Kapsamı Hasar Türüne Göre Değişir",
      description: "Su teması veya düşme gibi kullanıcı kaynaklı hasarlar, garanti kapsamı dışında kalabilir.",
      suggestedFamilies: ["Garanti Kapsamı"],
    },
    {
      icon: PackageCheck,
      title: "Onarım Öncesi Ücret Bilgisi Paylaşılır",
      description: "Garanti dışı bir onarım gerektiğinde, işleme başlamadan önce tahmini maliyet sizinle paylaşılır.",
      suggestedFamilies: ["Maliyet Şeffaflığı"],
    },
    {
      icon: RefreshCcw,
      title: "Yedek Cihaz İmkânı Sınırlı Olabilir",
      description: "Onarım süresince kullanılabilecek yedek cihaz imkânı, stok durumuna göre değişebilir.",
      suggestedFamilies: ["Yedek Cihaz"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
