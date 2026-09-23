// "Etkinlikler Kimler İçin Önemlidir?" section for the
// /blog/etkinlikler page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { School, Building2, HeartHandshake, Megaphone, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const etkinliklerIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Etkinlikler Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, etkinliklerin sıkça merak edildiği kullanıcı ve kurum gruplarını yansıtır.",
  profiles: [
    {
      icon: School,
      title: "Okullar ve Eğitim Kurumları",
      description: "Öğrenciler için işitme taraması işbirliği yapmak isteyen okullar için önemlidir.",
      suggestedFamilies: ["Okul Taraması"],
    },
    {
      icon: Building2,
      title: "Kurumlar ve İş Yerleri",
      description: "Çalışanlarına yönelik farkındalık etkinliği düzenlemek isteyen kurumlar için faydalıdır.",
      suggestedFamilies: ["Kurumsal İşbirliği"],
    },
    {
      icon: HeartHandshake,
      title: "Yaşlı Bakım Merkezleri",
      description: "Sakinlerinin işitme sağlığını desteklemek isteyen bakım merkezleri için önemlidir.",
      suggestedFamilies: ["Yaşlı Bakımı"],
    },
    {
      icon: Megaphone,
      title: "Farkındalık Günlerini Takip Edenler",
      description: "İşitme sağlığıyla ilgili farkındalık günlerini takip etmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Farkındalık Günleri"],
    },
    {
      icon: Users,
      title: "Toplum Sağlığına Katkı Sağlamak İsteyenler",
      description: "Bölgesindeki toplum sağlığı etkinliklerini merak eden herkes için önemlidir.",
      suggestedFamilies: ["Toplum Sağlığı"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
};
