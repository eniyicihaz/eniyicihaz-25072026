// Darıca landing page — İşitme Cihazı Türleri (üst seviye özet, 5 kart).
// Detay/alt kategori sayfalarına (kulak-arkasi, kulak-ici vb.) link
// VERİLMİYOR — plan onayı §9: "23+ alt kategori linkini taşımama." Tüm
// seçenekler için tek link: gerçek hub sayfası /isitme-cihazlari
// (sayfa içinde ayrı bir paragrafla, bu dosyada değil).
import { Ear, Headphones, EyeOff, BatteryCharging, Bluetooth } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const daricaDeviceTypes: ValueGridContent = {
  badge: "İŞİTME CİHAZI TÜRLERİ",
  heading: "Size Uygun İşitme Cihazı Türü",
  intro: "İhtiyacınıza göre farklı yapı ve özelliklerde işitme cihazı seçenekleri sunuyoruz. Darıca'daki merkezimizde farklı işitme cihazı türlerini ihtiyaçlarınıza göre birlikte değerlendirebilirsiniz.",
  items: [
    { icon: Ear, title: "Kulak Arkası (BTE)", description: "Geniş güç aralığıyla hafiften ileri dereceye kadar çoğu işitme kaybında tercih edilir." },
    { icon: Headphones, title: "Kulak İçi (ITE)", description: "Kulak kanalına özel üretilir, takıp çıkarması kolaydır." },
    { icon: EyeOff, title: "Görünmez (CIC)", description: "Kulak kanalının derinine yerleşir, dışarıdan neredeyse fark edilmez." },
    { icon: BatteryCharging, title: "Şarjlı", description: "Pil değiştirmeden, tek şarjla gün boyu kullanım sağlar." },
    { icon: Bluetooth, title: "Bluetooth Özellikli", description: "Telefon, TV ve diğer cihazlarla kablosuz bağlanır." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
