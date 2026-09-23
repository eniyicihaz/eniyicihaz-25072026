// "Avantajları" bento section for the /isitme-cihazlari/sarj-edilebilir
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { BatteryCharging, Recycle, Hand, Bluetooth, Plane, Gauge } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const sarjEdilebilirAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Şarj Edilebilir Cihazların Avantajları",
  intro: "Şarjlı teknolojiyi geniş bir kullanıcı kitlesi için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: BatteryCharging,
    category: "Kullanım Kolaylığı",
    title: "Pil Değiştirme Derdi Olmadan Gün Boyu Kullanım",
    description: "Gece şarj kutusunda dolan cihaz, sabah tam güçle kullanıma hazır hâle gelir.",
  },
  items: [
    {
      icon: Recycle,
      category: "Çevre Dostu",
      title: "Daha Az Pil Atığı",
      description: "Tek kullanımlık çinko-hava pillere kıyasla çevreye daha az atık bırakır.",
    },
    {
      icon: Hand,
      category: "Kolay Kullanım",
      title: "Küçük Pil Kapağı ve Değişimi Yok",
      description: "El becerisi sınırlı kullanıcılar için günlük kullanım belirgin şekilde kolaylaşır.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Bluetooth ile Kablosuz Bağlantı",
      description: "Çoğu şarjlı model, telefon ve TV ile doğrudan kablosuz bağlantıyı da destekler.",
    },
    {
      icon: Plane,
      category: "Seyahat",
      title: "Taşınabilir Şarj Kutusuyla Seyahat Kolaylığı",
      description: "Bazı şarj kutuları powerbank özelliğiyle prizsiz ortamlarda da şarj imkânı sunar.",
    },
    {
      icon: Gauge,
      category: "Görsel Takip",
      title: "Şarj Durumunu Kolayca Takip Edin",
      description: "Şarj kutusundaki gösterge ışıkları veya uygulama üzerinden pil durumu izlenebilir.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
  accentColorHoverBorder: "rgb(5 150 105 / 0.45)",
};
