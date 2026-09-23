// "Bu Sayfa Kimler İçin Önemlidir?" section for the
// /blog/sik-sorulan-sorular page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Compass, Calendar, ShieldQuestion, MapPin, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sikSorulanSorularIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Bu Sayfa Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, genel soruların sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Compass,
      title: "Kliniğimizi Yeni Keşfedenler",
      description: "Merkezimiz ve hizmetlerimiz hakkında ilk kez bilgi edinmek isteyen kullanıcılar için önemlidir.",
      suggestedFamilies: ["İlk Ziyaret"],
    },
    {
      icon: Calendar,
      title: "Randevu Almadan Önce Bilgi İsteyenler",
      description: "Randevu sürecinin nasıl işlediğini öğrenmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Randevu Süreci"],
    },
    {
      icon: ShieldQuestion,
      title: "Genel Süreci Merak Edenler",
      description: "İşitme testinden cihaz teslimine kadar sürecin genel işleyişini merak eden kullanıcılar için önemlidir.",
      suggestedFamilies: ["Genel Süreç"],
    },
    {
      icon: MapPin,
      title: "Hizmet Bölgesini Öğrenmek İsteyenler",
      description: "Merkezimizin hangi bölgelere hizmet verdiğini öğrenmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Hizmet Bölgesi"],
    },
    {
      icon: Users,
      title: "Konuya Özel Sayfaya Yönlendirilmek İsteyenler",
      description: "Belirli bir konuda derinlemesine bilgiye hızlıca ulaşmak isteyen kullanıcılar için önemlidir.",
      suggestedFamilies: ["Yönlendirme"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
};
