// Kocaeli landing page — İşitme Cihazı Modelleri ve Türleri. Aynı 5 gerçek
// ürün kategorisi Darıca/Gebze/Çayırova sayfalarında da var — açıklamalar
// dördüncü kez özgün biçimde yeniden yazıldı. Başlık, "Kocaeli işitme
// cihazı modelleri" ikincil arama niyetini doğal biçimde taşıyor.
import { Ear, Headphones, EyeOff, BatteryCharging, Bluetooth } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const kocaeliDeviceTypes: ValueGridContent = {
  badge: "CİHAZ TÜRLERİ VE MODELLER",
  heading: "Kocaeli İşitme Cihazı Modelleri ve Türleri",
  intro: "Kulak arkası, kulak içi, görünmez, şarjlı ve Bluetooth özellikli modeller arasından ihtiyacınıza uygun olanı birlikte belirleyebiliriz.",
  items: [
    { icon: Ear, title: "Kulak Arkası (BTE)", description: "Geniş güç aralığı sayesinde hafif ila ileri derece işitme kayıplarında sık tercih edilir." },
    { icon: Headphones, title: "Kulak İçi (ITE)", description: "Kulak yapınıza özel üretilir, günlük kullanımda pratiktir." },
    { icon: EyeOff, title: "Görünmez (CIC)", description: "Kulak kanalına yerleşerek dışarıdan neredeyse fark edilmez." },
    { icon: BatteryCharging, title: "Şarjlı", description: "Pil değiştirmeden, tek şarjla gün boyu kullanım imkânı sunar." },
    { icon: Bluetooth, title: "Bluetooth Özellikli", description: "Telefon görüşmelerini ve TV sesini doğrudan cihaza aktarabilir." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
