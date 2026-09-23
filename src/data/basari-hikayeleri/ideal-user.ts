// "Bu Sayfa Kimler İçin Önemlidir?" section for the
// /blog/basari-hikayeleri page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { ShieldQuestion, Users, HeartHandshake, Compass, Sparkles } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const basariHikayeleriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Bu Sayfa Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, genel deneyim kategorilerinin sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: ShieldQuestion,
      title: "Karar Vermekte Tereddüt Edenler",
      description: "İşitme cihazının hayatlarına ne katabileceğini merak eden, henüz karar vermemiş kullanıcılar için önemlidir.",
      suggestedFamilies: ["Karar Süreci"],
    },
    {
      icon: Users,
      title: "Aile Üyeleri",
      description: "Yakınlarını işitme cihazı kullanmaya teşvik etmek isteyen aile üyeleri için faydalıdır.",
      suggestedFamilies: ["Aile Desteği"],
    },
    {
      icon: HeartHandshake,
      title: "Cihazdan Çekinen Kullanıcılar",
      description: "İşitme cihazı kullanmaktan çekinen, endişeleri olan kullanıcılar için motive edici olabilir.",
      suggestedFamilies: ["Motivasyon"],
    },
    {
      icon: Compass,
      title: "Yeni Değerlendirme Yaptıranlar",
      description: "İşitme testi sonrası cihaz kullanımının hayatlarını nasıl etkileyebileceğini merak eden kullanıcılar için önemlidir.",
      suggestedFamilies: ["Yeni Değerlendirme"],
    },
    {
      icon: Sparkles,
      title: "Genel Deneyimleri Merak Edenler",
      description: "İşitme cihazı kullanıcılarının genel deneyimlerini merak eden herkes için faydalıdır.",
      suggestedFamilies: ["Genel Bilgi"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
};
