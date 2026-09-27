// Çayırova landing page — İşitme Cihazı Türleri. Aynı 5 gerçek ürün
// kategorisi Darıca/Gebze sayfalarında da var (üretici/pazar kategorileri,
// sayfaya özel icat edilmiş içerik değil) — açıklamalar üçüncü kez özgün
// biçimde yeniden yazıldı. Başlık, "Çayırova işitme cihazları" ana SEO
// odağını doğal biçimde taşıyor.
import { Ear, Headphones, EyeOff, BatteryCharging, Bluetooth } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const cayirovaDeviceTypes: ValueGridContent = {
  badge: "İŞİTME CİHAZI TÜRLERİ",
  heading: "Çayırova İşitme Cihazları: Cihaz Türleri Nelerdir?",
  intro: "İhtiyacınıza ve günlük kullanım alışkanlıklarınıza göre farklı yapılarda işitme cihazı seçenekleri değerlendirebiliriz.",
  items: [
    { icon: Ear, title: "Kulak Arkası (BTE)", description: "Güçlü ses çıkışı sayesinde hafif ila ileri derece işitme kayıplarında yaygın olarak tercih edilir." },
    { icon: Headphones, title: "Kulak İçi (ITE)", description: "Kulağınızın yapısına göre özel üretilir, takıp çıkarması kolaydır." },
    { icon: EyeOff, title: "Görünmez (CIC)", description: "Kulak kanalına yerleşerek dışarıdan neredeyse hiç fark edilmez." },
    { icon: BatteryCharging, title: "Şarjlı", description: "Pil takmadan, gece şarj edip gün boyu kullanabileceğiniz pratik bir seçenektir." },
    { icon: Bluetooth, title: "Bluetooth Özellikli", description: "Telefon görüşmelerini ve TV sesini doğrudan cihazınıza aktarabilirsiniz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
