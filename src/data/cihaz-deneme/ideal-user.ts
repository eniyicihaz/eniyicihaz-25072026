// "Kimler Cihaz Denemeli?" — redesign plan §1, Bölüm 6. Renders through
// BrandPageIdealUser (unchanged, its `repeat(auto-fit, minmax(220px,1fr))`
// grid is genuinely count-agnostic, already proven safe with 7 items on
// the Ücretsiz İşitme Testi redesign). Rewritten to match the redesign's
// requested profile list exactly — this is now the page's ONLY
// BrandPageIdealUser section (the second "Dikkat Edilmesi Gerekenler"
// use was retired, its content moved to inline-sections.ts's pricing
// block, per plan §1).
import { UserPlus, AlertCircle, RefreshCcw, MessageCircle, Scale, Minimize2, Bluetooth } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazDenemeIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER CİHAZ DENEMELİ?",
  heading: "Kimler Cihaz Denemeli?",
  intro: "Aşağıdaki profiller, cihaz deneme sürecinin sıkça tercih edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: UserPlus,
      title: "İlk Kez İşitme Cihazı Kullanacak Kişiler",
      description: "Yeni bir cihaza alışma sürecini gerçek yaşamda deneyimlemek isteyenler için deneme süreci önerilir.",
      suggestedFamilies: ["İlk Kullanım Denemesi"],
    },
    {
      icon: AlertCircle,
      title: "Mevcut Cihazından Memnun Olmayanlar",
      description: "Kullandığı cihazdan beklediği faydayı alamayan kullanıcılar için farklı bir modeli deneme fırsatı değerlendirilebilir.",
      suggestedFamilies: ["Yeniden Deneme"],
    },
    {
      icon: RefreshCcw,
      title: "Eski Cihazını Yenilemek İsteyenler",
      description: "Uzun süredir aynı cihazı kullanan ve güncel teknolojiyi denemek isteyen kullanıcılar için uygun bir süreçtir.",
      suggestedFamilies: ["Cihaz Yenileme"],
    },
    {
      icon: MessageCircle,
      title: "Konuşma Anlamada Yeterli Fayda Alamayanlar",
      description: "Mevcut cihazıyla konuşmaları anlamakta hâlâ zorlanan kullanıcılar için farklı bir model değerlendirilebilir.",
      suggestedFamilies: ["Fayda Değerlendirmesi"],
    },
    {
      icon: Scale,
      title: "Farklı Teknoloji Seviyelerini Karşılaştırmak İsteyenler",
      description: "Ekonomik, standart ve premium seçenekler arasında karar vermekte zorlanan kullanıcılar için karşılaştırmalı deneme önerilir.",
      suggestedFamilies: ["Model Karşılaştırma Denemesi"],
    },
    {
      icon: Minimize2,
      title: "Daha Küçük veya Daha Konforlu Cihaz Arayanlar",
      description: "Mevcut cihazının fiziksel konforundan memnun olmayan kullanıcılar için daha küçük modeller değerlendirilebilir.",
      suggestedFamilies: ["Konfor Odaklı Deneme"],
    },
    {
      icon: Bluetooth,
      title: "Şarjlı veya Bluetooth Özelliklerini Merak Edenler",
      description: "Güncel bağlantı ve şarj teknolojilerini merak eden kullanıcılar için bu özelliklere sahip modeller denenebilir.",
      suggestedFamilies: ["Teknoloji Denemesi"],
    },
  ],
  premium: true,
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
