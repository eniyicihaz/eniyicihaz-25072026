// "Bluetooth Özellikli Nedir?" + "Nasıl Çalışır?" section for the
// /isitme-cihazlari/bluetooth-ozellikli page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique the ITE/Şarj
// Edilebilir pages use.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const bluetoothIntro: BrandPageIntroContent = {
  badge: "BLUETOOTH ÖZELLİKLİ NEDİR?",
  heading: "Bluetooth Özellikli İşitme Cihazı Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Bluetooth özellikli işitme cihazı, akıllı telefon, TV veya bilgisayar gibi uyumlu cihazlarla kablosuz bağlantı kurabilen işitme cihazı tipidir.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir bağlantı özelliğidir.",
    "Çalışma prensibi şöyledir: cihaz, telefon veya TV yayın aksesuarı gibi bir kaynakla eşleştirilir; ses doğrudan veya düşük güçlü Bluetooth (LE) bağlantısı üzerinden işitme cihazına aktarılır.",
    "Bağlantı yöntemi ve desteklenen cihaz türleri (iPhone, Android, TV) üreticiye ve modele göre değişebilir.",
  ],
  stats: [
    { value: "Made for iPhone / Android", label: "Yaygın Uyumluluk Standartları" },
    { value: "Telefon, TV, Tablet", label: "Bağlanabilen Cihaz Türleri" },
    { value: "Bluetooth Düşük Enerji (LE)", label: "Kullanılan Bağlantı Teknolojisi" },
    { value: "Modele Göre Değişir", label: "Aynı Anda Bağlanabilecek Cihaz Sayısı" },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
