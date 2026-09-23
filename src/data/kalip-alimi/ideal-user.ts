// "Kalıp Alımı Kimler İçin Uygundur?" section for the /uygulama-ayar/
// kalip-alimi page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { Ear, VolumeX, Baby, Sparkles, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kalipAlimiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Kalıp Alımı Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, kalıp alımının sıkça önerildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Ear,
      title: "Kulak Arkası (BTE) Cihaz Kullanan veya Kullanacaklar",
      description: "Standart kulak ucu yerine kişiye özel bir kulak kalıbı isteyen BTE kullanıcıları için kalıp alımı önerilir.",
      suggestedFamilies: ["Özel Kulak Kalıbı"],
    },
    {
      icon: VolumeX,
      title: "Standart Kulak Ucuyla Islık Sesi Yaşayanlar",
      description: "Standart kulak ucuyla ıslık sesi (feedback) sorunu yaşayan kullanıcılar için özel kalıp, sızdırmazlığı artırabilir.",
      suggestedFamilies: ["Geri Bildirim Önleme"],
    },
    {
      icon: Sparkles,
      title: "Kulak İçi (ITE) Cihaz Tercih Edenler",
      description: "Kulak içi model tercih eden kullanıcılar için, cihazın kendisi kulak kalıbına göre üretilir.",
      suggestedFamilies: ["Kulak İçi Kabuk Üretimi"],
    },
    {
      icon: Baby,
      title: "Kulak Kanalı Şekli Standart Uçlarla Uyumsuz Olanlar",
      description: "Kulak kanalı şekli nedeniyle standart kulak uçlarıyla rahatsızlık yaşayan kullanıcılar için özel kalıp değerlendirilebilir.",
      suggestedFamilies: ["Konfor Odaklı Kalıp"],
    },
    {
      icon: RefreshCcw,
      title: "Mevcut Kalıbı Eskiyen veya Uymayan Kullanıcılar",
      description: "Kulak kanalı zamanla değişen veya mevcut kalıbı artık iyi oturmayan kullanıcılar için yeniden kalıp alımı önerilir.",
      suggestedFamilies: ["Kalıp Yenileme"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
};
