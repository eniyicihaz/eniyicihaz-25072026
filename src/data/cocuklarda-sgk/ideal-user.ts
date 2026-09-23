// "Bu Bilgi Kimler İçin Önemlidir?" section for the
// /sgk/cocuklarda-sgk page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Baby, Stethoscope, School, Users, HeartHandshake } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocuklardaSgkIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Çocuklarda SGK Süreci Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, çocuklarda SGK sürecinin sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Baby,
      title: "Yenidoğan Taraması Sonrası Aileler",
      description: "Yenidoğan işitme taramasında şüpheli sonuç alan ailelerin süreci öğrenmesi için önemlidir.",
      suggestedFamilies: ["Yenidoğan Taraması"],
    },
    {
      icon: Stethoscope,
      title: "Yeni Tanı Almış Çocukların Aileleri",
      description: "İşitme kaybı tanısı yeni konmuş çocuklarda sürecin nasıl ilerleyeceğini merak eden aileler için faydalıdır.",
      suggestedFamilies: ["Yeni Tanı"],
    },
    {
      icon: School,
      title: "Okul Çağındaki Çocukların Aileleri",
      description: "Okul döneminde cihaz kullanımı ve takip süreci hakkında bilgi almak isteyenler için önemlidir.",
      suggestedFamilies: ["Okul Çağı"],
    },
    {
      icon: Users,
      title: "Veli ve Vasiler",
      description: "Başvuru sürecinde hangi belgeleri hazırlamaları gerektiğini öğrenmek isteyen veli ve vasiler için faydalıdır.",
      suggestedFamilies: ["Veli/Vasi Süreci"],
    },
    {
      icon: HeartHandshake,
      title: "Ergenlik Dönemindeki Gençlerin Aileleri",
      description: "13-18 yaş grubunda süreç ve destek kategorisi hakkında bilgi almak isteyen aileler için önemlidir.",
      suggestedFamilies: ["Ergenlik Dönemi"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
};
