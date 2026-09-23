// "Bluetooth Özellikli vs Bluetooth Özelliksiz (Klasik)" comparison table
// for the /isitme-cihazlari/bluetooth-ozellikli page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique the ITE/Şarj Edilebilir pages' comparison.ts use. Framed as
// neutral, general tendencies — never "kesinlikle daha iyi"; the closing
// note reinforces that the real answer needs an assessment with an
// odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const bluetoothComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Bluetooth Özellikli ile Bluetooth Özelliksiz (Klasik) Cihaz Karşılaştırması",
  intro: "İki bağlantı seçeneği arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, günlük teknoloji kullanımınıza ve ihtiyaçlarınıza göre değişir.",
  primaryLabel: "Bluetooth Özellikli",
  secondaryLabel: "Bluetooth Özelliksiz (Klasik)",
  rows: [
    {
      feature: "Telefon Görüşmesi Deneyimi",
      primary: "Görüşmeler doğrudan cihazdan, telefonu elinize almadan dinlenebilir ve yanıtlanabilir.",
      secondary: "Görüşmeler telefonun kendi hoparlöründen veya ayrı bir kulaklıktan dinlenir.",
    },
    {
      feature: "TV ve Müzik Dinleme",
      primary: "Uyumlu bir aksesuarla TV ve müzik sesi doğrudan cihaza aktarılabilir.",
      secondary: "TV ve müzik sesi, cihazın mikrofonu üzerinden ortam sesi olarak alınır.",
    },
    {
      feature: "Uzaktan Ayar ve Kişiselleştirme",
      primary: "Ses seviyesi ve programlar akıllı telefon uygulaması üzerinden değiştirilebilir.",
      secondary: "Ayarlar genellikle cihaz üzerindeki fiziksel kumandalarla yapılır.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Sürekli aktif kablosuz bağlantı, bazı modellerde pil ömrünü kısaltabilir.",
      secondary: "Kablosuz bağlantı olmadığından pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Kurulum ve Kullanım Kolaylığı",
      primary: "İlk eşleştirme sonrası genellikle otomatik bağlanır; kuruluma bir miktar aşinalık gerekir.",
      secondary: "Ek bir kurulum veya eşleştirme adımı gerektirmez, kullanımı daha basittir.",
    },
    {
      feature: "Eski Telefon / Cihaz Uyumluluğu",
      primary: "Doğrudan bağlantı, telefonun modeline ve işletim sistemi sürümüne göre sınırlı olabilir.",
      secondary: "Telefon uyumluluğuna bağımlı değildir, her ortamda aynı şekilde çalışır.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Kablosuz bağlantı özelliği, genellikle cihaz fiyatını bir miktar yukarı çeker.",
      secondary: "Ek bağlantı donanımı barındırmadığından genellikle daha uygun fiyatlı seçeneklerdir.",
    },
    {
      feature: "Teknolojiye Yatkınlık Gereksinimi",
      primary: "Uygulama ve eşleştirme adımlarına bir miktar aşinalık gerektirir.",
      secondary: "Ek bir uygulama veya eşleştirme bilgisi gerektirmez.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde ve daha eski cihazlarda görülür.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Telefon, TV ve uygulama üzerinden ayar gibi kablosuz özellikleri aktif kullanmak isteyenler için sıkça değerlendirilir.",
      secondary: "Sade, ek kuruluma ihtiyaç duymayan bir kullanım isteyen kullanıcılarda sıkça tercih edilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim günlük teknoloji kullanımınız, cihaz tipi tercihiniz ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
