// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, but repurposed from its usual "candidacy profile" sense
// into everyday recognizable scenarios — since this entire page IS
// already a need/degree category, restating candidacy would be circular.
// Framed as illustrative examples, never a checklist for self-diagnosis;
// the intro line reinforces that a hearing test is the only way to
// confirm.

import { Volume2, Users, Tv, Repeat, Phone } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ortaDereceIsitmeKaybiIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "Orta Derece İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "TV ve Radyo Sesini Sık Sık Yükseltmek",
      description: "Ailenizin rahatsız olacağı kadar yüksek ses seviyelerine ihtiyaç duyduğunuzu fark edebilirsiniz.",
      suggestedFamilies: ["Standart RIC Modelleri"],
    },
    {
      icon: Users,
      title: "Grup Sohbetlerinde Geride Kalma Hissi",
      description: "Birden fazla kişinin konuştuğu ortamlarda konuşmayı takip etmekte belirgin zorluk yaşayabilirsiniz.",
      suggestedFamilies: ["Gürültü Azaltmalı Modeller"],
    },
    {
      icon: Tv,
      title: "Altyazı Kullanma İhtiyacı",
      description: "Televizyon izlerken diyalogları takip etmek için altyazıya ihtiyaç duyduğunuzu fark edebilirsiniz.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: Repeat,
      title: "Sık Sık Yanlış Anlama",
      description: "Duyduğunuz kelimeleri yanlış anlayıp farklı bir şekilde yanıt verdiğinizi fark edebilirsiniz.",
      suggestedFamilies: ["Konuşma Odaklı Modeller"],
    },
    {
      icon: Phone,
      title: "Telefon Görüşmelerinde Belirgin Güçlük",
      description: "Telefonda konuşmaları takip etmek normal ortamlara kıyasla daha zor olabilir.",
      suggestedFamilies: ["Standart BTE / RIC Modelleri"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
};
