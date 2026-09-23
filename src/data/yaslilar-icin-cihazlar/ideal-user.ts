// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page. Reuses the shared BrandPageIdealUser
// component, repurposed from its usual "candidacy profile" sense into
// everyday recognizable scenarios — since this entire page IS already a
// need category, restating candidacy would be circular. Framed as
// illustrative examples, never a checklist for self-diagnosis; the intro
// line reinforces that a hearing test is the only way to confirm.

import { Tv, Users, PhoneCall, MessageCircle, Bell } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yaslilarIcinCihazlarIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "Yaşa Bağlı İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Tv,
      title: "Televizyon Sesini Sıkça Yükseltme İhtiyacı",
      description: "Diğer aile bireylerine göre daha yüksek sesle televizyon izleme alışkanlığı fark edilebilir.",
      suggestedFamilies: ["Kolay Kullanımlı Modeller"],
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Konuşmayı Takip Edememe",
      description: "Aile toplantıları veya restoran gibi gürültülü ortamlarda konuşmaları takip etmek zorlaşabilir.",
      suggestedFamilies: ["Otomatik Ortam Algılamalı Modeller"],
    },
    {
      icon: PhoneCall,
      title: "Telefon Görüşmelerinde Zorlanma",
      description: "Telefondaki sesi net duymakta ve karşı tarafı anlamakta güçlük yaşanabilir.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: MessageCircle,
      title: "\"Ne Dedin?\" Sorusunu Sıkça Tekrarlama",
      description: "Konuşmaların bir kısmını kaçırdığı için karşısındakine sık sık tekrar ettirme ihtiyacı duyulabilir.",
      suggestedFamilies: ["Yönlü Mikrofonlu Modeller"],
    },
    {
      icon: Bell,
      title: "Kapı Zili veya Telefon Çalma Sesini Fark Edememe",
      description: "Yüksek frekanslı seslerin fark edilmesinde güçlük yaşanabilir.",
      suggestedFamilies: ["Kolay Kullanımlı Modeller"],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(202 138 4 / 0.1)",
};
