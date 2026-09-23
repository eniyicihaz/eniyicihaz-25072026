// "Avantajları" bento section for the /teknolojiler/gurultu-engelleme
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { VolumeX, Wind, Zap, Brain, Building2, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const gurultuEngellemeAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Gürültü Engelleme Teknolojisinin Avantajları",
  intro: "Gürültü engellemeyi gürültülü ortamlarda sık bulunan kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: VolumeX,
    category: "Konfor",
    title: "Rahatsız Edici Sesleri Azaltarak Dinleme Konforu Sağlar",
    description: "Sabit ve tahmin edilebilir gürültü kaynaklarının seviyesini azaltarak günlük dinleme deneyimini rahatlatır.",
  },
  items: [
    {
      icon: Wind,
      category: "Dış Mekan",
      title: "Rüzgar Sesinin Rahatsızlığını Azaltır",
      description: "Mikrofonlara çarpan rüzgarın oluşturduğu sesi algılayıp bastırmaya yardımcı olur.",
    },
    {
      icon: Zap,
      category: "Ani Sesler",
      title: "Ani ve Yüksek Sesleri Yumuşatır",
      description: "Tabak düşmesi gibi ani yüksek sesleri konfor için anlık olarak yumuşatır.",
    },
    {
      icon: Brain,
      category: "Dinleme Yorgunluğu",
      title: "Dinleme Yorgunluğunu Azaltmaya Yardımcı Olur",
      description: "Sürekli gürültüyle uğraşma ihtiyacını azaltarak gün boyu dinleme çabasını hafifletebilir.",
    },
    {
      icon: Building2,
      category: "Kapalı Alan",
      title: "Kapalı Mekânlardaki Uğultuyu Azaltır",
      description: "Klima ve havalandırma gibi sabit gürültü kaynaklarının etkisini azaltmaya yardımcı olur.",
    },
    {
      icon: Users,
      category: "Sosyal Ortam",
      title: "Kalabalık Ortamda Genel Konforu Artırır",
      description: "Arka plan gürültüsünün genel seviyesini azaltarak sosyal ortamlarda daha rahat bir deneyim sunar.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
  accentColorHoverBorder: "rgb(192 38 211 / 0.45)",
};
