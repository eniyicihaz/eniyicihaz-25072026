// "Avantajları" bento section for the /teknolojiler/sarjli-teknolojiler
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { BatteryCharging, ShieldCheck, Clock, Smartphone, Zap, Leaf } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const sarjliTeknolojilerAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Şarjlı Teknolojilerin Avantajları",
  intro: "Şarj mühendisliğini geniş bir kullanıcı kitlesi için sıkça değerlendirilen bir konu hâline getiren özellikler.",
  hero: {
    icon: BatteryCharging,
    category: "Pil Teknolojisi",
    title: "Yüksek Enerji Yoğunluklu Lityum-İyon Hücreler",
    description: "Küçük hacimde yüksek kapasite sunan lityum-iyon pil teknolojisi, gün boyu kesintisiz kullanım sağlar.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Güvenlik",
      title: "Aşırı Şarja ve Isınmaya Karşı Koruma",
      description: "Dahili şarj yönetim devresi (BMS), şarj akımını ve sıcaklığı sürekli denetleyerek güvenli şarj sağlar.",
    },
    {
      icon: Clock,
      category: "Uzun Ömür",
      title: "Yüzlerce Şarj Döngüsüne Dayanıklılık",
      description: "Modern lityum-iyon hücreler, yıllar süren düzenli kullanıma dayanacak şekilde tasarlanır.",
    },
    {
      icon: Smartphone,
      category: "Pil Takibi",
      title: "Uygulama Üzerinden Pil Sağlığı Takibi",
      description: "Bazı modeller, şarj döngüsü sayısını ve pil sağlığı durumunu uygulama üzerinden görüntüleme imkânı sunar.",
    },
    {
      icon: Zap,
      category: "Hızlı Şarj",
      title: "Gelişmiş Hızlı Şarj Devreleri",
      description: "Optimize edilmiş şarj devreleri, kısa sürede yüksek oranda şarj sağlayabilir.",
    },
    {
      icon: Leaf,
      category: "Çevre Dostu",
      title: "Tekrar Kullanılabilir Pil Kimyası",
      description: "Tek kullanımlık pillere kıyasla daha az atık üreterek çevresel etkiyi azaltmaya yardımcı olur.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorIconBg: "rgb(220 38 38 / 0.1)",
  accentColorHoverBorder: "rgb(220 38 38 / 0.45)",
};
