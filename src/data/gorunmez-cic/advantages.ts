// "Avantajları" bento section for the /isitme-cihazlari/gorunmez-cic
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { EyeOff, Volume2, Wind, Glasses, Phone, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const gorunmezCicAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Görünmez (CIC) Cihazların Avantajları",
  intro: "Görünürlüğü önceliklendiren kullanıcılar için CIC'yi sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: EyeOff,
    category: "Görünürlük",
    title: "Dışarıdan Neredeyse Hiç Fark Edilmez",
    description: "Kulak kanalının derinlerine yerleştiğinden en az görünür işitme cihazı seçeneklerinden biridir.",
  },
  items: [
    {
      icon: Volume2,
      category: "Doğal Ses",
      title: "Kulak Kepçesinin Doğal Ses Toplama Özelliğinden Faydalanır",
      description: "Kulak kanalı içindeki yerleşimi, ses kaynağını doğal şekilde algılamaya yardımcı olabilir.",
    },
    {
      icon: Wind,
      category: "Rüzgar Gürültüsü",
      title: "Rüzgar Sesinden Daha Az Etkilenir",
      description: "Kulak kanalı içindeki korunaklı konumu sayesinde dış ortam rüzgarından daha az etkilenir.",
    },
    {
      icon: Glasses,
      category: "Aksesuar Uyumu",
      title: "Gözlük ve Maskeyle Çakışmaz",
      description: "Kulak kepçesini kullanmadığından gözlük sapı veya maske lastikleriyle bir çakışma yaşanmaz.",
    },
    {
      icon: Phone,
      category: "Telefon Kullanımı",
      title: "Telefonla Doğal Bir Kullanım Sağlar",
      description: "Kulak kanalı içinde yer aldığından telefonla konuşurken ek bir uyum ihtiyacı doğurmaz.",
    },
    {
      icon: Users,
      category: "Sosyal Rahatlık",
      title: "Sosyal Ortamlarda Fark Edilmeme Rahatlığı",
      description: "Cihazın görünürlüğü konusunda çekince duyan kullanıcılar için sosyal rahatlık sağlar.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorIconBg: "rgb(71 85 105 / 0.1)",
  accentColorHoverBorder: "rgb(71 85 105 / 0.45)",
};
