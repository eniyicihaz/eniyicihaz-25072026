// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, but repurposed from its usual "candidacy profile" sense
// into everyday recognizable scenarios — since this entire page IS
// already a need/degree category, restating candidacy would be circular.
// Framed as illustrative examples, never a checklist for self-diagnosis;
// the intro line reinforces that a hearing test is the only way to
// confirm.

import { Volume2, Users, Phone, VolumeX, Ear } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ileriDereceIsitmeKaybiIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "İleri Derece İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "Yüksek Seste Bile Anlama Güçlüğü",
      description: "Karşınızdaki kişi yüksek sesle konuşsa bile bazı kelimeleri anlamakta zorlanabilirsiniz.",
      suggestedFamilies: ["Güçlü RIC / BTE Modelleri"],
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Neredeyse Hiç Takip Edememe",
      description: "Grup ortamlarında konuşmayı takip etmek oldukça zorlaşabilir.",
      suggestedFamilies: ["Gelişmiş Gürültü Azaltmalı Modeller"],
    },
    {
      icon: Phone,
      title: "Telefon Görüşmelerinde Ciddi Güçlük",
      description: "Telefonda konuşmaları anlamak, yüz yüze konuşmalara kıyasla belirgin şekilde zorlaşabilir.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: VolumeX,
      title: "Çevresel Seslerin Fark Edilmemesi",
      description: "Kapı zili veya araba korna sesi gibi günlük çevresel sesleri fark etmekte zorlanabilirsiniz.",
      suggestedFamilies: ["Yüksek Kapasiteli Modeller"],
    },
    {
      icon: Ear,
      title: "Dudak Okuma Alışkanlığı Geliştirme",
      description: "Farkında olmadan konuşan kişinin dudak hareketlerine daha çok odaklandığınızı fark edebilirsiniz.",
      suggestedFamilies: ["Konuşma Odaklı Modeller"],
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
  accentColorIconBg: "rgb(87 83 78 / 0.1)",
};
