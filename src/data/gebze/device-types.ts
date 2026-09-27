// Gebze landing page — İşitme Cihazı Türleri. Aynı 5 gerçek ürün kategorisi
// Darıca sayfasında da var (bunlar üretici/pazar kategorileri, sayfaya özel
// icat edilmiş içerik değil) — ama açıklamalar özgün biçimde yeniden
// yazıldı, Darıca'nın kelimeleri kopyalanmadı. Başlık, ana SEO odağı
// "Gebze işitme cihazları" ifadesini doğal biçimde taşıyor (plan onayı §3).
import { Ear, Headphones, EyeOff, BatteryCharging, Bluetooth } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const gebzeDeviceTypes: ValueGridContent = {
  badge: "İŞİTME CİHAZI TÜRLERİ",
  heading: "Gebze İşitme Cihazları: Hangi Cihaz Size Uygun?",
  intro: "Kulak arkası, kulak içi, şarjlı ve Bluetooth özellikli seçenekler arasından ihtiyacınıza en uygun olanı birlikte belirleyebiliriz.",
  items: [
    { icon: Ear, title: "Kulak Arkası (BTE)", description: "Hafiften ileri dereceye kadar geniş bir işitme kaybı aralığında tercih edilen, güçlü ve dayanıklı bir seçenektir." },
    { icon: Headphones, title: "Kulak İçi (ITE)", description: "Kulak yapınıza özel üretilir; günlük kullanımda pratik ve konforludur." },
    { icon: EyeOff, title: "Görünmez (CIC)", description: "Kulak kanalının derinine yerleşir, dışarıdan fark edilmesi oldukça zordur." },
    { icon: BatteryCharging, title: "Şarjlı", description: "Pil değiştirme derdi olmadan, tek şarjla gün boyu kullanım imkânı sunar." },
    { icon: Bluetooth, title: "Bluetooth Özellikli", description: "Telefonunuz, televizyonunuz ve diğer uyumlu cihazlarınızla kablosuz bağlanabilir." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
