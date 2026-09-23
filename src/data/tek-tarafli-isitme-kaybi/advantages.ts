// "Avantajları" bento section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page — framed as the advantages of proper
// evaluation and fitting for this loss type rather than a generic
// device-feature list. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { Radio, Users, Ear, ShieldCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const tekTarafliIsitmeKaybiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Tek Taraflı İşitme Kaybında Doğru Değerlendirmenin Avantajları",
  intro: "Tek taraflı işitme kaybını doğru sistemlerle değerlendirmeyi sıkça önerilen bir yaklaşım hâline getiren nedenler.",
  hero: {
    icon: Radio,
    category: "Kablosuz Aktarım",
    title: "İyi Duyan Kulağa Kablosuz Ses Aktarımı",
    description: "CROS/BiCROS gibi sistemler, kötü duyan taraftaki sesi iyi duyan kulağa kablosuz olarak aktararak farkındalığı artırmaya yardımcı olabilir.",
  },
  items: [
    {
      icon: Users,
      category: "Sosyal Farkındalık",
      title: "İki Taraftan Gelen Seslerin Farkına Varma",
      description: "Kablosuz aktarım sistemleri, kötü duyan taraftan gelen seslerin fark edilmesine yardımcı olabilir.",
    },
    {
      icon: Ear,
      category: "Yönlü Mikrofon",
      title: "Gürültülü Ortamlarda Ek Destek",
      description: "Yönlü mikrofon teknolojisi, kalabalık ortamlarda konuşmayı takip etmeye yardımcı olabilir.",
    },
    {
      icon: ShieldCheck,
      category: "Güvenlik",
      title: "Çevresel Farkındalığı Artırmaya Yardımcı Olur",
      description: "Trafik gibi ortamlarda ses kaynağının yönünü fark etmeye yardımcı olabilir.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "Sosyal Ortamlara Katılımı Kolaylaştırır",
      description: "İki taraflı ses farkındalığı, grup sohbetlerine katılımı destekleyebilir.",
    },
    {
      icon: Sparkles,
      category: "Kişiselleştirme",
      title: "İhtiyacınıza Göre Sistem Seçimi",
      description: "CROS, BiCROS veya diğer seçenekler arasında ihtiyacınıza uygun sistem odyometristinizle birlikte belirlenir.",
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
  accentColorIconBg: "rgb(82 82 91 / 0.1)",
  accentColorHoverBorder: "rgb(82 82 91 / 0.45)",
};
