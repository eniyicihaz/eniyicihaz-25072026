// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// kisiye-ozel-programlama page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). Framed around realistic fine-tuning
// expectations rather than diagnostic red flags.

import { Clock, AlertTriangle, MessageSquare, Database, Settings2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kisiyeOzelProgramlamaConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Kişiye Özel Programlamada Dikkat Edilmesi Gereken Noktalar",
  intro: "İnce ayar faydalı bir süreçtir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Clock,
      title: "İnce Ayar Genellikle Birden Fazla Randevu Gerektirir",
      description: "En iyi sonuç, tek bir randevuda değil; geri bildiriminize göre kademeli olarak yapılan birkaç takip randevusuyla elde edilir.",
      suggestedFamilies: ["Kademeli Süreç"],
    },
    {
      icon: AlertTriangle,
      title: "Mükemmel Bir Sonuç Garanti Edilemez",
      description: "İnce ayar deneyiminizi önemli ölçüde iyileştirebilir; ancak her ortamda kusursuz bir sonuç garanti edilemez.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: MessageSquare,
      title: "Dürüst ve Detaylı Geri Bildirim Önemlidir",
      description: "Hangi ortamlarda zorluk yaşadığınızı detaylı paylaşmanız, ince ayarın doğruluğunu doğrudan etkiler.",
      suggestedFamilies: ["Geri Bildirim Kalitesi"],
    },
    {
      icon: Database,
      title: "Veri Kaydı Kullanımı Sizinle Paylaşılır",
      description: "Kullanım verilerinin ince ayarda değerlendirilmesi durumunda, bu konuda bilgilendirilirsiniz.",
      suggestedFamilies: ["Veri Kullanımı Bilgilendirmesi"],
    },
    {
      icon: Settings2,
      title: "Ayarları Kendi Başınıza Aşırı Değiştirmeyin",
      description: "Uygulama üzerinden yapılan küçük ayarlar dışında, temel programlamanın bir uzman tarafından yapılması önerilir.",
      suggestedFamilies: ["Uzman Ayar Desteği"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
