// "Avantajları" bento section for the /degerlendirme/cocuk-isitme-testi
// page — framed as the genuine advantages of a proper pediatric
// evaluation. Renders through the shared BrandPageAdvantages component
// — items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Sparkles, Baby, Heart, Users, Wallet, RefreshCcw } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cocukIsitmeTestiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Çocuk İşitme Testinin Avantajları",
  intro: "Çocuk işitme testini önemli bir değerlendirme adımı hâline getiren nedenler.",
  hero: {
    icon: Sparkles,
    category: "Erken Tespit",
    title: "Dil ve Konuşma Gelişimini Desteklemeye Yardımcı Olabilir",
    description: "İşitme kaybının erken tespiti ve uygun yönlendirme, çocuğun dil ve konuşma gelişimini desteklemeye yardımcı olabilir.",
  },
  items: [
    {
      icon: Baby,
      category: "Yaşa Uygun Yöntem",
      title: "Her Yaş İçin Farklı Test Yaklaşımı",
      description: "Bebeklerden okul çağı çocuklara kadar her yaş grubuna uygun test yöntemi uygulanır.",
    },
    {
      icon: Heart,
      category: "Konforlu Deneyim",
      title: "Çocuğun Konforu Gözetilerek Yürütülür",
      description: "Test süreci, çocuğun rahatsız olmadığı, oyun tabanlı yöntemlerle desteklenebilir.",
    },
    {
      icon: Users,
      category: "Aile Katılımı",
      title: "Aile Sürece Dahil Edilir",
      description: "Ebeveynler, süreç boyunca bilgilendirilir ve gerektiğinde teste eşlik edebilir.",
    },
    {
      icon: Wallet,
      category: "Ücretsiz",
      title: "Herhangi Bir Ücret Talep Edilmez",
      description: "Çocuk işitme testi, herhangi bir ücret talep edilmeden sunulur.",
    },
    {
      icon: RefreshCcw,
      category: "Düzenli Takip",
      title: "Gelişim Sürecine Göre Takip İmkânı",
      description: "Çocuğun gelişim sürecine göre düzenli aralıklarla tekrar değerlendirme yapılabilir.",
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(249 115 22 / 0.1)",
  accentColorHoverBorder: "rgb(249 115 22 / 0.45)",
};
