// "Avantajları" bento section for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page — framed as the advantages of timely
// intervention at this degree rather than a generic device-feature list.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { ShieldCheck, Volume2, Users, VolumeX, Ear, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ortaDereceIsitmeKaybiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Orta Derecede Zamanında Cihazlandırmanın Avantajları",
  intro: "Orta derece işitme kaybını zamanında değerlendirmeyi sıkça önerilen bir yaklaşım hâline getiren nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Erken Müdahale",
    title: "Sosyal ve Mesleki İletişimi Desteklemeye Yardımcı Olur",
    description: "Orta derece kayıplarda zamanında cihazlandırma, iş ve sosyal ortamlardaki iletişim kalitesini korumaya yardımcı olabilir.",
  },
  items: [
    {
      icon: Volume2,
      category: "Ses Gücü",
      title: "Günlük Konuşmalar İçin Yeterli Amplifikasyon",
      description: "Orta düzey amplifikasyon, normal ses tonundaki konuşmaları daha net duymanıza yardımcı olur.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "Grup Ortamlarında Katılımı Artırır",
      description: "Kalabalık sohbetlerde konuşmayı takip etmek daha az çaba gerektirebilir.",
    },
    {
      icon: VolumeX,
      category: "Gürültü Desteği",
      title: "Gürültülü Ortamlarda Ek Konfor",
      description: "Gürültü azaltma özellikleri, bu derecede sıkça değerlendirilen bir destek sağlar.",
    },
    {
      icon: Ear,
      category: "Yönlü Mikrofon",
      title: "Konuşmayı Öne Çıkaran Mikrofon Sistemleri",
      description: "Yönlü mikrofon teknolojisi, karşınızdaki kişinin sesini öne çıkarmaya yardımcı olabilir.",
    },
    {
      icon: Sparkles,
      category: "Kullanım Kolaylığı",
      title: "Otomatik Programlarla Kolay Kullanım",
      description: "Bu derece için tasarlanan modeller genellikle otomatik ortam algılama ile sunulur.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
  accentColorHoverBorder: "rgb(22 163 74 / 0.45)",
};
