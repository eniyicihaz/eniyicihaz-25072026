// "Avantajları" bento section for the /isitme-cihazlari/kulak-ici-ite
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { EyeOff, Fingerprint, Bluetooth, BatteryCharging, Layers, Phone } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kulakIciAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kulak İçi (ITE) Cihazların Avantajları",
  intro: "ITE'yi görünürlüğü önemseyen kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: EyeOff,
    category: "Görünürlük",
    title: "Doğal ve Az Fark Edilen Görünüm",
    description: "Kulak kanalı içinde veya kepçenin iç bölümünde yer alan kişiye özel kabuk, kulak arkası cihazlara kıyasla göze daha az batar.",
  },
  items: [
    {
      icon: Fingerprint,
      category: "Kişiye Özel Üretim",
      title: "Kulağınızın Kalıbına Göre Üretilir",
      description: "Kulak izinizden alınan ölçüyle şekillendirilen kabuk, konforlu ve sabit bir oturma sağlamayı hedefler.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, telefon görüşmelerini ve TV sesini doğrudan cihaza aktarabilir.",
    },
    {
      icon: BatteryCharging,
      category: "Güç Seçenekleri",
      title: "Pilli veya Bazı Modellerde Şarjlı Kullanım",
      description: "İhtiyaca göre pilli modeller veya şarj edilebilir kulak içi modeller arasından seçim yapılabilir.",
    },
    {
      icon: Layers,
      category: "Kullanım Kolaylığı",
      title: "Tek Parça, Basit Kullanım",
      description: "Ayrı bir gövde veya tüp taşımadığından günlük takıp çıkarma genellikle daha basittir.",
    },
    {
      icon: Phone,
      category: "Doğal Telefon Kullanımı",
      title: "Telefonu Doğal Şekilde Kulağınıza Yaklaştırın",
      description: "Mikrofon konumu kulak kanalına yakın olduğundan, ek bir aparat gerekmeden rahat konuşma imkânı sunar.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
  accentColorHoverBorder: "rgb(124 58 237 / 0.45)",
};
