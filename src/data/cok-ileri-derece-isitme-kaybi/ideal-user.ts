// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page. Reuses the shared
// BrandPageIdealUser component, but repurposed from its usual "candidacy
// profile" sense into everyday recognizable scenarios — since this
// entire page IS already a need/degree category, restating candidacy
// would be circular. Framed as illustrative examples, never a checklist
// for self-diagnosis; the intro line reinforces that a hearing test is
// the only way to confirm.

import { VolumeX, Users, Ear, Phone, MessageCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cokIleriDereceIsitmeKaybiIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "Çok İleri Derece İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: VolumeX,
      title: "Yüksek Seslerin Bile Duyulmaması",
      description: "Araba kornası veya alarm gibi yüksek çevresel sesleri bile fark etmekte zorlanabilirsiniz.",
      suggestedFamilies: ["Power BTE Modelleri"],
    },
    {
      icon: Users,
      title: "Konuşmaları Neredeyse Hiç Anlayamama",
      description: "Amplifikasyon olmadan konuşmaların çoğunu anlamak oldukça zor olabilir.",
      suggestedFamilies: ["En Yüksek Kapasiteli Modeller"],
    },
    {
      icon: Ear,
      title: "Görsel İpuçlarına Yoğun Bağımlılık",
      description: "İletişimde dudak okuma ve beden diline yoğun şekilde güvendiğinizi fark edebilirsiniz.",
      suggestedFamilies: ["Konuşma Odaklı Modeller"],
    },
    {
      icon: Phone,
      title: "Telefonla İletişimin Neredeyse İmkânsız Hâle Gelmesi",
      description: "Telefon görüşmelerini sürdürmek görsel ipucu olmadan oldukça zorlaşabilir.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: MessageCircle,
      title: "İletişimde Yorgunluk ve Geri Çekilme",
      description: "Sürekli anlama çabası, sosyal ortamlardan uzaklaşma hissine yol açabilir.",
      suggestedFamilies: ["Kapsamlı Destekli Modeller"],
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
  accentColorIconBg: "rgb(146 64 14 / 0.1)",
};
