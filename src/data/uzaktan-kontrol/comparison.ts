// "Uzaktan Kontrol Destekli vs Standart (Sadece Cihaz Üzerinden Kontrol)"
// comparison table for the /teknolojiler/uzaktan-kontrol page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const uzaktanKontrolComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Uzaktan Kontrol Destekli ile Standart (Sadece Cihaz Üzerinden Kontrol) Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, kliniğe erişiminize ve teknoloji kullanım alışkanlığınıza göre değişir.",
  primaryLabel: "Uzaktan Kontrol Destekli",
  secondaryLabel: "Standart (Sadece Cihaz Üzerinden Kontrol)",
  rows: [
    {
      feature: "Ayar Değiştirme Kolaylığı",
      primary: "Ses seviyesi ve program telefonunuzdan veya kumandadan kolayca değiştirilebilir.",
      secondary: "Ayarlar yalnızca cihaz üzerindeki fiziksel düğmelerle değiştirilebilir.",
    },
    {
      feature: "Uzaktan Destek",
      primary: "Odyometrist, video görüşme sırasında temel ayarları uzaktan güncelleyebilir.",
      secondary: "Her ayar değişikliği için klinik randevusu gerekir.",
    },
    {
      feature: "Fark Ettirmeme",
      primary: "Telefon üzerinden yapılan ayarlar, sosyal ortamlarda daha az dikkat çeker.",
      secondary: "Cihaz üzerinden yapılan ayarlar daha görünür olabilir.",
    },
    {
      feature: "Aile Erişimi",
      primary: "Bazı uygulamalar, bakım verenlerin de durumu takip etmesine imkân tanır.",
      secondary: "Aile üyelerinin uzaktan takip imkânı yoktur.",
    },
    {
      feature: "Erişilebilirlik",
      primary: "Kliniğe uzak yaşayanlar için uzaktan destek erişimi kolaylaştırır.",
      secondary: "Her ayar için kliniğe gidiş gerekebilir.",
    },
    {
      feature: "İnternet Bağımlılığı",
      primary: "Uzaktan destek oturumları stabil internet bağlantısı gerektirir.",
      secondary: "Cihaz üzerinden kontrol internet bağlantısı gerektirmez.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Sürekli bağlantı gerektiren uygulama kontrolü pil tüketimini bir miktar artırabilir.",
      secondary: "Ek kablosuz bağlantı olmadığından pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Uzaktan kontrol ve destek özellikleri, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit kontrol yapısı nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde daha sınırlı düzeyde bulunur.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Kliniğe sık gelmekte zorlanan veya kolay ayar yapmak isteyen kullanıcılar için sıkça değerlendirilir.",
      secondary: "Düzenli klinik ziyaretleri yapabilen, sade bir kullanım isteyen kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim kliniğe erişiminiz, teknoloji kullanım alışkanlığınız ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
