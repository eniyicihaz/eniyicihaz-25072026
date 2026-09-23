// "Avantajları" bento section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page — framed as the advantages of choosing
// age-appropriate, easy-to-use systems rather than a generic
// device-feature list. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { Sparkles, Users, BatteryCharging, Ear, ShieldCheck, Smartphone } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yaslilarIcinCihazlarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Yaşlı Kullanıcılar İçin Doğru Cihaz Seçiminin Avantajları",
  intro: "Kolay kullanım ve aile desteğini ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: Sparkles,
    category: "Kullanım Kolaylığı",
    title: "Basit ve Sade Kullanım Deneyimi",
    description: "Büyük kontroller ve sade menüler, günlük kullanımı kolaylaştırmaya yardımcı olabilir.",
  },
  items: [
    {
      icon: Users,
      category: "Aile Desteği",
      title: "Aile Destekli Uzaktan Ayar",
      description: "Bazı sistemler, aile bireylerinin sürece dahil olmasına ve uzaktan destek sağlamasına imkan tanır.",
    },
    {
      icon: BatteryCharging,
      category: "Şarj Kolaylığı",
      title: "Küçük Pil Değişimi Derdi Olmadan Kullanım",
      description: "Şarj edilebilir sistemler, küçük pilleri değiştirme zorluğunu ortadan kaldırmaya yardımcı olabilir.",
    },
    {
      icon: Ear,
      category: "Sosyal Yaşam",
      title: "Aile İçi İletişimi Güçlendirmeye Yardımcı Olur",
      description: "Doğru cihaz seçimi, aile bireyleriyle iletişimi kolaylaştırmaya yardımcı olabilir.",
    },
    {
      icon: ShieldCheck,
      category: "Güvenlik",
      title: "Çevresel Sesleri Fark Etmeye Yardımcı Olur",
      description: "Kapı zili, telefon veya alarm gibi önemli seslerin fark edilmesine katkı sağlayabilir.",
    },
    {
      icon: Smartphone,
      category: "Kişiselleştirme",
      title: "İhtiyacınıza Göre Cihaz Seçimi",
      description: "Kolay kullanım, şarj kolaylığı veya aile desteği gibi öncelikleriniz odyometristinizle birlikte belirlenir.",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(202 138 4 / 0.1)",
  accentColorHoverBorder: "rgb(202 138 4 / 0.45)",
};
