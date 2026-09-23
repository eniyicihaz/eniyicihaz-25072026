// "Avantajları" bento section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page — framed as the advantages of choosing
// activity-appropriate systems rather than a generic device-feature
// list. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Wind, ShieldCheck, Droplets, BatteryCharging, Bluetooth, Gauge } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const aktifYasamIcinCihazlarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Aktif Yaşam İçin Doğru Cihaz Seçiminin Avantajları",
  intro: "Güvenli oturma ve dayanıklılığı ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: Wind,
    category: "Rüzgar Gürültüsü Azaltma",
    title: "Açık Havada Net Duyma Deneyimi",
    description: "Gelişmiş rüzgar gürültüsü azaltma teknolojisi, açık hava aktivitelerinde konuşmayı daha net takip etmeye yardımcı olabilir.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Güvenli Oturma",
      title: "Hareket Sırasında Yerinde Kalmaya Yardımcı Olur",
      description: "Güvenli oturma tasarımı, egzersiz veya hızlı hareketler sırasında cihazın yerinde kalmasına katkı sağlayabilir.",
    },
    {
      icon: Droplets,
      category: "Dayanıklılık",
      title: "Ter ve Neme Karşı Ek Koruma",
      description: "Yüksek IP koruma sınıfına sahip modeller, aktif kullanım sırasında ter ve neme karşı ek güven sağlayabilir.",
    },
    {
      icon: BatteryCharging,
      category: "Pil Ömrü",
      title: "Uzun Pil Ömrü ve Hızlı Şarj",
      description: "Şarj edilebilir sistemler, yoğun bir günü tamamlamaya yetecek pil ömrü sunabilir.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Egzersiz Sırasında Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, antrenman sırasında telefon görüşmelerini veya müziği doğrudan cihaza aktarabilir.",
    },
    {
      icon: Gauge,
      category: "Kişiselleştirme",
      title: "Aktivite Düzeyinize Göre Cihaz Seçimi",
      description: "Güvenli oturma, koruma sınıfı veya pil ömrü gibi öncelikleriniz odyometristinizle birlikte belirlenir.",
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
  accentColorIconBg: "rgb(75 85 99 / 0.1)",
  accentColorHoverBorder: "rgb(75 85 99 / 0.45)",
};
