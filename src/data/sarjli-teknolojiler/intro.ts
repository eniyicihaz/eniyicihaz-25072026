// "Şarjlı Teknolojiler Nedir?" + "Hangi Mühendislik Bileşenlerini
// Kapsar?" section for the /teknolojiler/sarjli-teknolojiler page.
// Renders through the shared BrandPageIntro component. Paragraph 2
// explicitly cross-references the Şarj Edilebilir Cihazlar page rather
// than re-explaining charging methods and device-family coverage, same
// technique the Kablosuz Bağlantı page's intro.ts uses toward Bluetooth
// Özellikli Cihazlar.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const sarjliTeknolojilerIntro: BrandPageIntroContent = {
  badge: "ŞARJLI TEKNOLOJİLER NEDİR?",
  heading: "Şarjlı Teknolojiler Nedir ve Hangi Mühendislik Bileşenlerini Kapsar?",
  paragraphs: [
    "Şarjlı teknolojiler, işitme cihazlarındaki dahili lityum-iyon pilin şarj edilmesini, korunmasını ve uzun ömürlü kullanılmasını sağlayan donanım ve yazılım bileşenlerinin tümünü ifade eder.",
    "Hangi cihaz tipinde şarjlı seçenek bulunduğu ve şarj yöntemleri (temaslı, indüksiyonlu) hakkında bilgi almak için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz; bu sayfa ise şarj teknolojisinin arkasındaki mühendislik detaylarına odaklanır.",
    "Kapsadığı başlıca bileşenler şunlardır: lityum-iyon pil kimyası, aşırı şarja ve ısınmaya karşı koruma sağlayan akıllı şarj yönetim devresi (BMS) ve şarj döngüsü ömrü ile pil sağlığını takip eden uygulama entegrasyonu.",
    "Pil kapasitesi, şarj süresi ve döngü ömrü üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Lityum-İyon (Li-ion)", label: "Kullanılan Pil Kimyası" },
    { value: "Yüzlerce Döngü", label: "Tipik Şarj Döngüsü Ömrü" },
    { value: "Dahili BMS Devresi", label: "Şarj Yönetim Sistemi" },
    { value: "Yıllar İçinde Kademeli Azalma", label: "Pil Kapasitesi Ömrü" },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
