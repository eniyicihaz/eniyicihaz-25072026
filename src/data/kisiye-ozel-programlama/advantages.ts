// "Avantajları" bento section for the /uygulama-ayar/
// kisiye-ozel-programlama page — framed as the genuine advantages of
// ongoing personalized fine-tuning. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { SlidersHorizontal, Database, Music, TrendingUp, MessageSquare, ShieldCheck } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kisiyeOzelProgramlamaAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kişiye Özel Programlamanın Sunduğu Avantajlar",
  intro: "İnce ayar sürecini cihazınızdan en iyi verimi almanın önemli bir parçası hâline getiren nedenler.",
  hero: {
    icon: SlidersHorizontal,
    category: "Deneyime Dayalı İyileştirme",
    title: "Gerçek Yaşam Deneyiminize Göre Şekillenir",
    description: "İnce ayar, tahmine değil; günlük hayatta yaşadığınız gerçek deneyime ve geri bildiriminize dayanır.",
  },
  items: [
    {
      icon: Database,
      category: "Veri Destekli",
      title: "Kullanım Verileri Karar Sürecine Katkı Sağlar",
      description: "Bazı modellerde, günlük kullanım verileri ince ayar kararlarınızı desteklemek için incelenebilir.",
    },
    {
      icon: Music,
      category: "Ortama Özel",
      title: "Farklı Ortamlar İçin Ayrı Programlar",
      description: "Sessiz, gürültülü veya müzik dinleme gibi ortamlar için ayrı dinleme programları oluşturulabilir.",
    },
    {
      icon: TrendingUp,
      category: "Kademeli İyileşme",
      title: "Zaman İçinde Daha da İyileşir",
      description: "Her takip randevusunda geri bildiriminize göre ayarlar daha da hassaslaştırılır.",
    },
    {
      icon: MessageSquare,
      category: "Geri Bildirim Odaklı",
      title: "Sizi Dinleyerek İlerleriz",
      description: "Süreç, günlük hayatta fark ettiğiniz olumlu veya olumsuz noktalar üzerine kuruludur.",
    },
    {
      icon: ShieldCheck,
      category: "Ücretsiz",
      title: "Herhangi Bir Ücret Talep Edilmez",
      description: "Kişiye özel programlama randevuları, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
  accentColorHoverBorder: "rgb(124 58 237 / 0.45)",
};
