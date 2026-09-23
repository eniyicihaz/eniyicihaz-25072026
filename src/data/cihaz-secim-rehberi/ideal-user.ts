// "Bu Rehber Kimler İçin Faydalıdır?" section for the /rehberler/
// cihaz-secim-rehberi page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense, here scoped to reader
// profiles rather than product candidacy.

import { Sparkles, Scale, Wallet, Users, Sliders } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazSecimRehberiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN FAYDALIDIR?",
  heading: "Bu Rehber Kimler İçin Faydalıdır?",
  intro: "Aşağıdaki profiller, cihaz seçim sürecinde bu rehberden faydalanabilecek okuyucu gruplarını yansıtır.",
  profiles: [
    {
      icon: Sparkles,
      title: "İlk Kez Cihaz Alacak Kullanıcılar",
      description: "İşitme cihazı dünyasına yeni adım atan kullanıcılar için nereden başlayacağını netleştirmeye yardımcı olur.",
      suggestedFamilies: ["İlk Cihaz Rehberliği"],
    },
    {
      icon: Scale,
      title: "Birden Fazla Model Arasında Kararsız Kalanlar",
      description: "Farklı marka veya modeller arasında karar vermekte zorlanan kullanıcılar için karşılaştırma çerçevesi sunar.",
      suggestedFamilies: ["Model Karşılaştırması"],
    },
    {
      icon: Wallet,
      title: "Bütçe ve İhtiyaç Dengesini Kurmak İsteyenler",
      description: "Bütçesine uygun, ancak ihtiyaçlarını da karşılayan bir denge arayan kullanıcılar için yol gösterir.",
      suggestedFamilies: ["Bütçe Planlaması"],
    },
    {
      icon: Users,
      title: "Bir Yakını İçin Karar Sürecine Destek Olanlar",
      description: "Aile büyüğü veya yakını için karar sürecine yardımcı olmak isteyen kullanıcılar için pratik bir çerçeve sunar.",
      suggestedFamilies: ["Yakın Desteği"],
    },
    {
      icon: Sliders,
      title: "Teknik Özellikleri Karşılaştırmak İsteyenler",
      description: "Bağlantı, şarj ve diğer teknik özellikleri karşılaştırarak karar vermek isteyen kullanıcılar için bir başlangıç noktası sunar.",
      suggestedFamilies: ["Özellik Karşılaştırması"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
};
