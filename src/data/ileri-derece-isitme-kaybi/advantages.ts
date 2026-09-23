// "Avantajları" bento section for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page — framed as the advantages of proper
// powerful fitting at this degree rather than a generic device-feature
// list. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { ShieldCheck, Volume2, Ear, VolumeX, Users, Battery } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ileriDereceIsitmeKaybiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "İleri Derecede Doğru Cihazlandırmanın Avantajları",
  intro: "İleri derece işitme kaybını doğru cihazlarla değerlendirmeyi önemli kılan nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Güçlü Destek",
    title: "Günlük İletişimi Yeniden Mümkün Kılmaya Yardımcı Olur",
    description: "İleri derece kayıplarda doğru cihazlandırma, günlük iletişimi sürdürebilmek için belirleyici bir rol oynayabilir.",
  },
  items: [
    {
      icon: Volume2,
      category: "Ses Gücü",
      title: "Yüksek Kapasiteli Amplifikasyon",
      description: "Güçlü amplifikasyon, konuşmaları anlaşılır kılmaya yardımcı olur.",
    },
    {
      icon: Ear,
      category: "Yönlü Mikrofon",
      title: "Konuşmayı Öne Çıkaran Gelişmiş Mikrofon Sistemleri",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      icon: VolumeX,
      category: "Gürültü Desteği",
      title: "Gelişmiş Gürültü Azaltma",
      description: "Gürültülü ortamlarda konuşmayı takip etmeyi kolaylaştırmaya yardımcı olabilir.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "Sosyal Katılımı Yeniden Desteklemeye Yardımcı Olur",
      description: "Doğru cihazlandırma, sosyal ortamlara katılımı kolaylaştırmaya yardımcı olabilir.",
    },
    {
      icon: Battery,
      category: "Güç Yönetimi",
      title: "Yüksek Kapasiteli Pil Seçenekleri",
      description: "Güçlü amplifikasyon gereksinimini karşılamak için daha yüksek kapasiteli pil seçenekleri sunulabilir.",
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
  accentColorIconBg: "rgb(87 83 78 / 0.1)",
  accentColorHoverBorder: "rgb(87 83 78 / 0.45)",
};
