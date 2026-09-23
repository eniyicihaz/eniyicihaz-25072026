// "Bu Bilgiler Kimler İçin Önemlidir?" section for the
// /blog/uzman-gorusleri page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { ShieldQuestion, Users, Clock, Baby, GraduationCap } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzmanGorusleriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Bu Bilgiler Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, yanlış bilgilerin sıkça karar sürecini etkilediği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: ShieldQuestion,
      title: "Karar Aşamasındaki Kullanıcılar",
      description: "İşitme cihazı almaya karar vermeden önce doğru bilgiye ihtiyaç duyan kullanıcılar için önemlidir.",
      suggestedFamilies: ["Karar Süreci"],
    },
    {
      icon: Users,
      title: "Yanlış Bilgiyle Karşılaşanlar",
      description: "Çevresinden veya internetten doğruluğundan emin olmadığı bilgiler duyan kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Doğrulama"],
    },
    {
      icon: Clock,
      title: "Süreci Erteleyenler",
      description: "Yanlış inanışlar nedeniyle değerlendirmeyi geciktiren kullanıcılar için önemlidir.",
      suggestedFamilies: ["Erken Değerlendirme"],
    },
    {
      icon: Baby,
      title: "Aile Üyeleri",
      description: "Yakınlarının işitme sağlığı konusunda doğru bilgiye sahip olmak isteyen aile üyeleri için faydalıdır.",
      suggestedFamilies: ["Aile Desteği"],
    },
    {
      icon: GraduationCap,
      title: "Konuyu Yeni Araştıranlar",
      description: "İşitme kaybı ve cihazlar hakkında ilk kez bilgi edinmeye başlayan kullanıcılar için önemlidir.",
      suggestedFamilies: ["İlk Araştırma"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
};
