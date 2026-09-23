// "Avantajları" bento section for the /isitme-cihazlari/bluetooth-ozellikli
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Phone, Tv, Smartphone, Laptop, Video, Gauge } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const bluetoothAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Bluetooth Özellikli Cihazların Avantajları",
  intro: "Bluetooth bağlantısını teknolojiye yatkın kullanıcılar için sıkça değerlendirilen bir özellik hâline getiren avantajlar.",
  hero: {
    icon: Phone,
    category: "Doğrudan Bağlantı",
    title: "Telefon Görüşmelerini Doğrudan Cihazdan Dinleyin",
    description: "Ayrı bir kulaklık veya aracı cihaza gerek kalmadan, sesi doğrudan işitme cihazınıza aktarır.",
  },
  items: [
    {
      icon: Tv,
      category: "Ev Eğlencesi",
      title: "TV Sesini Doğrudan ve Net Duyun",
      description: "TV yayın aksesuarıyla eşleştirilen cihaz, televizyon sesini doğrudan kulağa taşır.",
    },
    {
      icon: Smartphone,
      category: "Kişiselleştirme",
      title: "Uygulama Üzerinden Kolay Ayar",
      description: "Ses seviyesi ve dinleme programları, akıllı telefon uygulaması üzerinden hızlıca değiştirilebilir.",
    },
    {
      icon: Laptop,
      category: "Çoklu Cihaz",
      title: "Birden Fazla Cihaz Arasında Geçiş",
      description: "Telefon, tablet ve bilgisayar gibi kaynaklar arasında pratik şekilde geçiş yapılabilir.",
    },
    {
      icon: Video,
      category: "İletişim",
      title: "Video Görüşmelerde Netlik",
      description: "Online toplantı ve video görüşmelerinde karşı tarafı daha net duymayı destekler.",
    },
    {
      icon: Gauge,
      category: "Pil Verimliliği",
      title: "Düşük Enerji Tüketimli Bağlantı",
      description: "Bluetooth Düşük Enerji (LE) teknolojisi, sürekli bağlantıda pil ömrünü korumaya yardımcı olur.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
  accentColorHoverBorder: "rgb(8 145 178 / 0.45)",
};
