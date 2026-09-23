// "Avantajları" bento section for the /teknolojiler/yapay-zeka-destekli
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Brain, Users, Zap, SlidersHorizontal, Gauge, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yapayZekaDestekliAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Yapay Zeka Destekli Cihazların Avantajları",
  intro: "Yapay zekayı sürekli değişen ortamlarda bulunan kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: Brain,
    category: "Otomatik Optimizasyon",
    title: "Ortamı Analiz Ederek Otomatik Ayar Yapar",
    description: "Yapay zeka, bulunduğunuz ortamı saniyeler içinde tanıyarak dinleme ayarlarını otomatik olarak optimize eder.",
  },
  items: [
    {
      icon: Users,
      category: "Konuşma Netliği",
      title: "Kalabalık Ortamda Konuşmayı Öne Çıkarır",
      description: "Gürültülü ortamlarda konuşma sesini arka plan gürültüsünden ayırt etmeye yardımcı olur.",
    },
    {
      icon: Zap,
      category: "Hız",
      title: "Saniyeler İçinde Ortam Değişikliğine Tepki Verir",
      description: "Ortam değiştiğinde ayarlar manuel müdahale gerektirmeden otomatik güncellenir.",
    },
    {
      icon: SlidersHorizontal,
      category: "Kullanım Kolaylığı",
      title: "Manuel Program Değişimine Gerek Bırakmaz",
      description: "Farklı ortamlar için ayrı program seçmek yerine cihaz otomatik olarak uyum sağlar.",
    },
    {
      icon: Gauge,
      category: "Kişiselleştirme",
      title: "Kullanım Alışkanlıklarınızı Öğrenir",
      description: "Bazı modeller, zaman içindeki tercihlerinizi öğrenerek ayarlarını kişiselleştirir.",
    },
    {
      icon: Sparkles,
      category: "Doğal Ses",
      title: "Daha Doğal Bir Dinleme Deneyimi Sunar",
      description: "Gerçek dünya ses sahneleriyle eğitilen yapay zeka, daha doğal ve dengeli bir ses deneyimi hedefler.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
  accentColorHoverBorder: "rgb(79 70 229 / 0.45)",
};
