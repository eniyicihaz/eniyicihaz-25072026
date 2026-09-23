// "Avantajları" bento section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page — framed as the advantages of proper
// comprehensive fitting at this degree rather than a generic
// device-feature list. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { ShieldCheck, Volume2, Ear, Stethoscope, Users, Battery } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cokIleriDereceIsitmeKaybiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Çok İleri Derecede Kapsamlı Değerlendirmenin Avantajları",
  intro: "Çok ileri derece işitme kaybını kapsamlı bir yaklaşımla değerlendirmeyi önemli kılan nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Kapsamlı Destek",
    title: "Günlük İletişime Yeniden Erişim Sağlamaya Yardımcı Olur",
    description: "Çok ileri derece kayıplarda doğru cihazlandırma ve kapsamlı değerlendirme, iletişim imkânlarını genişletmeye yardımcı olabilir.",
  },
  items: [
    {
      icon: Volume2,
      category: "Ses Gücü",
      title: "En Yüksek Kapasiteli Amplifikasyon",
      description: "Power BTE modeller, bu derecede mümkün olan en yüksek ses gücünü sunar.",
    },
    {
      icon: Ear,
      category: "Yönlü Mikrofon",
      title: "Gelişmiş Konuşma Odaklanması",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      icon: Stethoscope,
      category: "Multidisipliner Yaklaşım",
      title: "KBB ile Birlikte Kapsamlı Değerlendirme",
      description: "Bu derecede, işitme cihazı seçimi genellikle bir kulak burun boğaz uzmanıyla birlikte planlanır.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "İletişime Yeniden Katılımı Destekler",
      description: "Doğru cihazlandırma, sosyal ve ailevi iletişimi yeniden desteklemeye yardımcı olabilir.",
    },
    {
      icon: Battery,
      category: "Güç Yönetimi",
      title: "Yüksek Kapasiteli Pil Seçenekleri",
      description: "Power BTE modeller, yüksek güç ihtiyacını karşılamak için genellikle daha büyük pil kapasitesiyle sunulur.",
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
  accentColorIconBg: "rgb(146 64 14 / 0.1)",
  accentColorHoverBorder: "rgb(146 64 14 / 0.45)",
};
