// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// kulak-ici-ite page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir" — the real decision always needs a hearing
// assessment and an ear-canal evaluation.

import { Volume2, Eye, Hand, Phone, Glasses } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kulakIciIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Kulak İçi (ITE) Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesi ve kulak kanalı incelemesiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "Hafif ile Orta-İleri Derece İşitme Kaybı Olanlar",
      description: "Bu aralıktaki kayıplarda ITE ve ITC modelleri sıkça ilk tercihler arasında değerlendirilir.",
      suggestedFamilies: ["ITE", "ITC"],
    },
    {
      icon: Eye,
      title: "Cihazının Fark Edilmemesini Önemseyenler",
      description: "Kulak kanalı içinde konumlandığı için, özellikle CIC ve IIC gibi alt tiplerde, kulak arkası cihazlara kıyasla daha az dikkat çeker.",
      suggestedFamilies: ["ITC", "CIC", "IIC"],
    },
    {
      icon: Hand,
      title: "El Becerisi Güçlü Yetişkin Kullanıcılar",
      description: "Küçük gövde ve kumandalar; pil değişimi ve günlük takıp çıkarma için belirli bir el becerisi gerektirir.",
      suggestedFamilies: ["ITE"],
    },
    {
      icon: Phone,
      title: "Telefonla Sık Görüşen Kullanıcılar",
      description: "Mikrofon konumu kulak kanalına yakın olduğundan, telefonu doğal şekilde kulağa yaklaştırmaya izin verir.",
      suggestedFamilies: ["ITE", "ITC"],
    },
    {
      icon: Glasses,
      title: "Gözlük Kullanıp Kulak Arkasında Ek Gövde İstemeyenler",
      description: "Kulak kepçesinin arkasını kullanmadığı için gözlük sapıyla çakışma yaşanmaz.",
      suggestedFamilies: ["ITE", "ITC", "CIC"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
};
