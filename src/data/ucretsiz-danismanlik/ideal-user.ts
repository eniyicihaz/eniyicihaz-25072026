// "Danışmanlık Almadan Karar Vermenin Sıkça Görülen Sonuçları" section
// for the /neden-orijinal/ucretsiz-danismanlik page. Reuses the shared
// BrandPageIdealUser component, same technique used on the four prior
// pages — repurposed into risks of deciding without expert guidance
// rather than hearing-loss symptoms or authenticity/service/accessory
// red flags.

import { XCircle, Wallet, FileX, Ear, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ucretsizDanismanlikIdealUser: BrandPageIdealUserContent = {
  badge: "DANIŞMANLIK ALMADAN KARAR VERMENİN RİSKLERİ",
  heading: "Danışmanlık Almadan Karar Vermenin Sıkça Görülen Sonuçları",
  intro: "Aşağıdaki sonuçlar, yeterli değerlendirme yapılmadan verilen kararlarda sıkça karşılaşılan durumlar arasında yer alır.",
  profiles: [
    {
      icon: XCircle,
      title: "İhtiyaca Uygun Olmayan Cihaz Seçimi",
      description: "Yeterli değerlendirme yapılmadan seçilen cihazlar, günlük ihtiyaçları karşılamayabilir.",
      suggestedFamilies: ["İhtiyaç Değerlendirmesi"],
    },
    {
      icon: Wallet,
      title: "Bütçeyle Uyumsuz Yatırım",
      description: "Danışmanlık almadan yapılan seçimler, ihtiyaç duyulmayan özellikler için fazla ödeme yapılmasına yol açabilir.",
      suggestedFamilies: ["Bütçeye Uygun Öneri"],
    },
    {
      icon: FileX,
      title: "SGK Desteğinin Kaçırılması",
      description: "SGK süreci hakkında bilgi sahibi olunmadığında, hak edilen destekten yararlanılamayabilir.",
      suggestedFamilies: ["SGK Danışmanlığı"],
    },
    {
      icon: Ear,
      title: "Konfor ve Uyum Sorunları",
      description: "Kulak yapısına ve yaşam tarzına uygun olmayan seçimler, konfor sorunlarına yol açabilir.",
      suggestedFamilies: ["Kişiye Özel Değerlendirme"],
    },
    {
      icon: RefreshCcw,
      title: "Memnuniyetsizlik ve Değişim İhtiyacı",
      description: "Yetersiz değerlendirmeyle alınan cihazlar, sonradan değişim ihtiyacı doğurabilir.",
      suggestedFamilies: ["Doğru İlk Seçim"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
