// "Avantajları" bento section for the /teknolojiler/konusma-odakli page.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Users, Utensils, Presentation, Ear, Zap, Brain } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const konusmaOdakliAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Konuşma Odaklı Teknolojilerin Avantajları",
  intro: "Konuşma odaklanmasını kalabalık sohbetlerde zorlanan kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: Users,
    category: "Konuşma Netliği",
    title: "Karşınızdaki Kişinin Sesini Öne Çıkarır",
    description: "Yönlü mikrofon sistemi, önden gelen konuşmayı diğer ortam seslerinden ayırarak öne çıkarmaya yardımcı olur.",
  },
  items: [
    {
      icon: Utensils,
      category: "Sosyal Ortam",
      title: "Restoran ve Kafede Sohbeti Kolaylaştırır",
      description: "Kalabalık ve gürültülü ortamlarda karşılıklı konuşmayı takip etmeyi destekler.",
    },
    {
      icon: Presentation,
      category: "İş Hayatı",
      title: "Toplantılarda Konuşmacıya Odaklanmayı Destekler",
      description: "Belirli bir konuşmacının sesini diğer ortam seslerinden ayırt etmeye yardımcı olur.",
    },
    {
      icon: Ear,
      category: "Binaural Uyum",
      title: "İki Kulak Arasında Senkronize Çalışır",
      description: "Sağ ve sol cihaz kablosuz olarak iletişim kurarak sesin geldiği yönü daha iyi belirlemeye yardımcı olur.",
    },
    {
      icon: Zap,
      category: "Otomatik Geçiş",
      title: "Ortama Göre Otomatik Devreye Girer",
      description: "Kalabalık bir ortama girildiğinde yönlü odaklanma manuel müdahale olmadan aktifleşebilir.",
    },
    {
      icon: Brain,
      category: "Dinleme Çabası",
      title: "Dinleme Çabasını Azaltmaya Yardımcı Olur",
      description: "Hedef konuşmayı öne çıkararak dinlemek için harcanan zihinsel çabayı azaltmaya yardımcı olabilir.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
