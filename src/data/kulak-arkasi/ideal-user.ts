// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// kulak-arkasi-bte page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir/değerlendirilir" tone,
// never "kesin sizin içindir" — same restraint brand pages use, since the
// actual decision always needs a real hearing assessment.

import { Volume2, Baby, Hand, Droplets, Activity } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kulakArkasiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Kulak Arkası (BTE) Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "İleri veya Çok İleri Derece İşitme Kaybı Olanlar",
      description: "Daha güçlü amplifikasyon gerektiren kullanıcılar için sıkça ilk tercih edilen cihaz tipidir.",
      suggestedFamilies: ["Power BTE", "Süper Power BTE"],
    },
    {
      icon: Baby,
      title: "Çocuklar",
      description: "Büyüyen kulak kanalına uyum sağlaması ve kalıbının kolayca yenilenebilmesi nedeniyle çocuklarda sıkça tercih edilir.",
      suggestedFamilies: ["Çocuk BTE Modelleri"],
    },
    {
      icon: Hand,
      title: "El Becerisi Sınırlı Kullanıcılar",
      description: "Daha büyük gövde ve kumandalar; pil değişimi ile ses ayarını kolaylaştırır.",
      suggestedFamilies: ["Standart BTE"],
    },
    {
      icon: Droplets,
      title: "Kulak Akıntısı veya Kronik Enfeksiyon Öyküsü Olanlar",
      description: "Elektronik bileşenler kulak kanalı dışında olduğu için nem ve akıntıdan daha az etkilenir.",
      suggestedFamilies: ["BTE"],
    },
    {
      icon: Activity,
      title: "Aktif ve Hareketli Yaşam Sürenler",
      description: "Sağlam gövdesi ve güçlü tutuşu; spor ve dış mekân aktiviteleri sırasında ek güven sağlar.",
      suggestedFamilies: ["RIC", "Spor Kilidi Aksesuarlı Modeller"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
