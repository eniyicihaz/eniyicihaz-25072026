// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// gurultu-engelleme page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Volume2, Wind, Building2, Car, Coffee } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gurultuEngellemeIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Gürültü Engellemeli Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "Gürültülü Ortamlarda Sık Bulunanlar",
      description: "Kalabalık, trafik veya inşaat gibi sürekli gürültülü ortamlarda vakit geçiren kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Gelişmiş Gürültü Engellemeli Modeller"],
    },
    {
      icon: Wind,
      title: "Açık Havada Vakit Geçirenler",
      description: "Yürüyüş, bisiklet gibi rüzgara maruz kalınan aktivitelerde rüzgar gürültüsü engelleme özelliği fayda sağlar.",
      suggestedFamilies: ["Rüzgar Gürültüsü Engellemeli Modeller"],
    },
    {
      icon: Building2,
      title: "Açık Ofis Ortamında Çalışanlar",
      description: "Sürekli arka plan sohbeti ve klima sesi bulunan açık ofis ortamlarında konsantrasyonu desteklemeye yardımcı olur.",
      suggestedFamilies: ["Sabit Gürültü Azaltmalı Modeller"],
    },
    {
      icon: Car,
      title: "Sık Araç Kullananlar",
      description: "Araç içi motor ve yol gürültüsüne karşı ek konfor arayan sürücüler için değerlendirilir.",
      suggestedFamilies: ["Gelişmiş DSP Destekli Modeller"],
    },
    {
      icon: Coffee,
      title: "Kafe ve Restoranlarda Sosyalleşenler",
      description: "Kalabalık kafe ve restoran ortamlarında arka plan gürültüsünün rahatsızlığını azaltmaya yardımcı olur.",
      suggestedFamilies: ["Sahne Bazlı Gürültü Azaltmalı Modeller"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
};
