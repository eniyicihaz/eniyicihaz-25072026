// "Yeni Teknolojiler Kimler İçin Önemlidir?" section for the
// /blog/yeni-teknolojiler page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Smartphone, RefreshCcw, Users, Activity, Sparkles } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yeniTeknolojilerIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Yeni Teknolojiler Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, yeni nesil teknolojilerin sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Smartphone,
      title: "Dijital Bağlantıyı Önemseyenler",
      description: "Cihazını akıllı telefonuyla ve diğer cihazlarla bağlantılı kullanmak isteyenler için önemlidir.",
      suggestedFamilies: ["Kablosuz Bağlantı"],
    },
    {
      icon: RefreshCcw,
      title: "Cihazını Yenileyecek Kullanıcılar",
      description: "Mevcut cihazından bu yana gelişen teknolojileri merak eden kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Yenileme Hakkı"],
    },
    {
      icon: Users,
      title: "İlk Kez Cihaz Alacaklar",
      description: "Hangi teknolojilerin mevcut olduğunu öğrenerek bilinçli bir seçim yapmak isteyenler için önemlidir.",
      suggestedFamilies: ["Cihaz Seçim Rehberi"],
    },
    {
      icon: Activity,
      title: "Aktif Yaşam Sürenler",
      description: "Spor ve dış mekân aktivitelerinde teknolojik özelliklerden faydalanmak isteyenler için değerlidir.",
      suggestedFamilies: ["Aktif Yaşam"],
    },
    {
      icon: Sparkles,
      title: "Teknolojiyi Merak Edenler",
      description: "İşitme cihazı dünyasındaki gelişmeleri genel hatlarıyla takip etmek isteyen herkes için faydalıdır.",
      suggestedFamilies: ["Genel Bilgi"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
