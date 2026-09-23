// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// gorunmez-cic page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { EyeOff, Briefcase, Smile, Phone, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gorunmezCicIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Görünmez (CIC) Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: EyeOff,
      title: "Görünürlüğü Öncelik Görenler",
      description: "Cihazının fark edilmesini istemeyen, estetik kaygısı ön planda olan kullanıcılar için sıkça tercih edilir.",
      suggestedFamilies: ["Görünmez (CIC / IIC) Modeller"],
    },
    {
      icon: Briefcase,
      title: "İş Ortamında Ayrıcalık Bekleyenler",
      description: "Toplantı ve müşteri görüşmelerinde fark edilmeden kullanmak isteyen profesyoneller için uygundur.",
      suggestedFamilies: ["Diskret CIC Modeller"],
    },
    {
      icon: Smile,
      title: "İlk Kez Cihaz Kullanacak Yetişkinler",
      description: "İşitme cihazı kullanmaya yeni başlayan, alışma sürecinde göze batmayan bir seçenek isteyenler için değerlendirilir.",
      suggestedFamilies: ["Kanal İçi Modeller"],
    },
    {
      icon: Phone,
      title: "Telefonu Doğal Şekilde Kullanmak İsteyenler",
      description: "Kulak kanalı içinde yer aldığından telefonla konuşurken ek bir uyum sağlama ihtiyacı doğurmaz.",
      suggestedFamilies: ["CIC Modelleri"],
    },
    {
      icon: Users,
      title: "Hafif-Orta Dereceli Kayıpları Olan Yetişkinler",
      description: "Görünürlüğü öncelik gören, hafif ile orta-ileri dereceli işitme kaybına sahip yetişkin kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Hafif-Orta Derece Uyumlu Modeller"],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorIconBg: "rgb(71 85 105 / 0.1)",
};
