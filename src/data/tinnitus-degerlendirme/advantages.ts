// "Avantajları" bento section for the /degerlendirme/
// tinnitus-degerlendirme page — framed as the genuine advantages of
// getting a tinnitus evaluation. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { ClipboardList, Ear, Gauge, FileCheck, Stethoscope, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const tinnitusDegerlendirmeAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Tinnitus Değerlendirmesinin Sunduğu Avantajlar",
  intro: "Tinnitus değerlendirmesini önemli bir ilk adım hâline getiren nedenler.",
  hero: {
    icon: ClipboardList,
    category: "Kapsamlı Yaklaşım",
    title: "Öyküden Ölçüme Kapsamlı Bir Süreç",
    description: "Değerlendirme, yalnızca bir teste değil; öykünüzü, işitme durumunuzu ve çınlamanızın özelliklerini birlikte ele alan bir sürece dayanır.",
  },
  items: [
    {
      icon: Ear,
      category: "İşitme Kaybı Taraması",
      title: "İşitme Kaybı Birlikteliği Araştırılır",
      description: "Tinnitus'un sık görülen bir eşlikçisi olan işitme kaybı, aynı süreçte değerlendirilir.",
    },
    {
      icon: Gauge,
      category: "Kişiye Özel Ölçüm",
      title: "Çınlamanızın Perdesi ve Şiddeti Ölçülür",
      description: "Tinnitus eşleştirme yöntemiyle, duyduğunuz çınlama size özel bir referansla tanımlanır.",
    },
    {
      icon: FileCheck,
      category: "Etki Ölçümü",
      title: "Günlük Yaşama Etkisi Anket ile Değerlendirilir",
      description: "THI gibi anketlerle, tinnitus'un yaşam kalitenize etkisi objektif olarak ölçülür.",
    },
    {
      icon: Stethoscope,
      category: "Yönlendirme İmkânı",
      title: "Gerekirse KBB Yönlendirmesi Sağlar",
      description: "Öncelikli değerlendirme gerektiren bulgularda uygun bir KBB yönlendirmesi yapılır.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz",
      title: "Herhangi Bir Ücret Talep Edilmez",
      description: "Tinnitus değerlendirmesi, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
  accentColorHoverBorder: "rgb(5 150 105 / 0.45)",
};
