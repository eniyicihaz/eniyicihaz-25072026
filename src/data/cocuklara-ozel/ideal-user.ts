// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// cocuklara-ozel page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Baby, Puzzle, Backpack, Bike, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocuklaraOzelIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Çocuklara Özel Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Baby,
      title: "Yenidoğan ve Bebekler (0–2 Yaş)",
      description: "Yenidoğan işitme taraması sonrası erken tanı alan bebeklerde, dil gelişimini desteklemek için erken cihazlandırma önerilir.",
      suggestedFamilies: ["Bebeklere Özel Küçük Kulak Kalıpları"],
    },
    {
      icon: Puzzle,
      title: "Okul Öncesi Çocuklar (3–5 Yaş)",
      description: "Dil ve konuşma gelişiminin en hızlı olduğu bu dönemde, dayanıklı ve renkli tasarımlar cihazın benimsenmesini kolaylaştırır.",
      suggestedFamilies: ["Renkli BTE Modelleri"],
    },
    {
      icon: Backpack,
      title: "Okul Çağı Çocuklar (6–12 Yaş)",
      description: "Sınıf ortamında öğretmeni net duyabilmek için Roger/FM sistemleriyle uyumlu modeller sıkça tercih edilir.",
      suggestedFamilies: ["FM / Roger Uyumlu BTE Modelleri"],
    },
    {
      icon: Bike,
      title: "Aktif ve Hareketli Çocuklar",
      description: "Spor ve oyun sırasında oluşabilecek darbelere karşı dayanıklı gövde yapısına sahip modeller değerlendirilebilir.",
      suggestedFamilies: ["Dayanıklı Gövdeli Modeller"],
    },
    {
      icon: Users,
      title: "Ebeveynler ve Bakım Verenler",
      description: "Çocuğunun cihaz kullanımını ve pil durumunu takip etmek isteyen aileler için uygulama destekli modeller uygundur.",
      suggestedFamilies: ["Ebeveyn Takip Uygulamalı Modeller"],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorIconBg: "rgb(225 29 72 / 0.1)",
};
