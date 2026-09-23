// "Kampanyalar Kimler İçin Önemlidir?" section for the
// /blog/kampanyalar page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Wallet, Users, Baby, RefreshCcw, ShieldQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kampanyalarIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Kampanyalar Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, kampanyaların sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Wallet,
      title: "Bütçesini Planlayan Kullanıcılar",
      description: "Cihaz alımını bütçe dostu bir şekilde planlamak isteyen kullanıcılar için önemlidir.",
      suggestedFamilies: ["Bütçe Planlaması"],
    },
    {
      icon: Users,
      title: "Aile Üyeleriyle Birlikte Başvuranlar",
      description: "Birden fazla aile üyesi için değerlendirme yaptırmak isteyenler için faydalı olabilir.",
      suggestedFamilies: ["Aile Paketi"],
    },
    {
      icon: Baby,
      title: "Yeni Kullanıcılar",
      description: "İlk kez işitme cihazı alacak kullanıcılar için hazırlanan avantajlardan faydalanabilir.",
      suggestedFamilies: ["Yeni Kullanıcı"],
    },
    {
      icon: RefreshCcw,
      title: "Cihazını Yenileyecek Kullanıcılar",
      description: "Mevcut kullanıcılarımıza yönelik sadakat avantajlarını merak edenler için önemlidir.",
      suggestedFamilies: ["Sadakat Avantajı"],
    },
    {
      icon: ShieldQuestion,
      title: "Güncel Fırsatları Takip Edenler",
      description: "Kliniğimizin güncel kampanyalarını düzenli olarak takip etmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Genel Takip"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
};
