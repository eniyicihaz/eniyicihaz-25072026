// "Bu Rehber Kimler İçin Faydalıdır?" section for the /rehberler/
// ilk-kullanim-rehberi page. Reuses the shared BrandPageIdealUser
// component, here scoped to reader profiles rather than product
// candidacy.

import { Sparkles, Users, Hand, HelpCircle, FileQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ilkKullanimRehberiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN FAYDALIDIR?",
  heading: "Bu Rehber Kimler İçin Faydalıdır?",
  intro: "Aşağıdaki profiller, ilk kullanım rehberinden faydalanabilecek okuyucu gruplarını yansıtır.",
  profiles: [
    {
      icon: Sparkles,
      title: "Yeni Cihaz Teslim Alan Kullanıcılar",
      description: "Uygulama randevusundan yeni çıkan ve günlük kullanıma geçen kullanıcılar için pratik bir hatırlatma sunar.",
      suggestedFamilies: ["Yeni Kullanıcı Rehberliği"],
    },
    {
      icon: Users,
      title: "Bir Yakınına Yardım Edenler",
      description: "Aile büyüğüne veya yakınına cihaz kullanımında yardımcı olan kullanıcılar için pratik bir referans sunar.",
      suggestedFamilies: ["Yakın Desteği"],
    },
    {
      icon: Hand,
      title: "Temel Kontrolleri Netleştirmek İsteyenler",
      description: "Takma, çıkarma veya ses ayarı gibi temel işlemleri tazelemek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Temel Kontroller"],
    },
    {
      icon: FileQuestion,
      title: "Kullanım Kılavuzunu Bulamayanlar",
      description: "Cihazının kullanım kılavuzunu kaybeden veya elinde olmayan kullanıcılar için genel bir referans sunar.",
      suggestedFamilies: ["Genel Referans"],
    },
    {
      icon: HelpCircle,
      title: "Basit Bir Sorunla Karşılaşanlar",
      description: "Ses gelmemesi gibi basit bir durumla karşılaşan ve önce kendisi kontrol etmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Basit Sorun Giderme"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
};
