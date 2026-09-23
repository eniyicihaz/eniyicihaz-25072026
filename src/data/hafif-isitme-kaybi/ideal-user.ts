// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, but repurposed from its usual "candidacy profile" sense
// (who this product suits) into everyday recognizable scenarios — since
// this entire page IS already a need/degree category, restating
// candidacy would be circular. Framed as illustrative examples, never a
// checklist for self-diagnosis; the intro line reinforces that a hearing
// test is the only way to confirm.

import { Volume2, Users, Repeat, Phone, Volume1 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const hafifIsitmeKaybiIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "Hafif İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "TV veya Radyo Sesini Yükseltme İhtiyacı",
      description: "Ailenizin normal bulduğu ses seviyesinin sizin için yetersiz kaldığını fark edebilirsiniz.",
      suggestedFamilies: ["İnce RIC Modelleri"],
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Konuşmayı Takip Etmekte Zorlanma",
      description: "Restoran gibi gürültülü ortamlarda karşınızdakini takip etmek daha fazla çaba gerektirebilir.",
      suggestedFamilies: ["Gürültü Azaltmalı Modeller"],
    },
    {
      icon: Repeat,
      title: "Sık Sık Tekrar İstemek",
      description: "Karşınızdaki kişiden söylediğini tekrar etmesini istediğinizi fark edebilirsiniz.",
      suggestedFamilies: ["Konuşma Odaklı Modeller"],
    },
    {
      icon: Phone,
      title: "Telefon Görüşmelerinde Güçlük",
      description: "Telefonda konuşurken bazı kelimeleri kaçırdığınızı hissedebilirsiniz.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: Volume1,
      title: "Fısıltı veya Uzak Sesleri Duymakta Güçlük",
      description: "Fısıltıyla konuşulanları veya uzak mesafeden gelen sesleri net duymakta zorlanabilirsiniz.",
      suggestedFamilies: ["Hafif Amplifikasyonlu Modeller"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
};
