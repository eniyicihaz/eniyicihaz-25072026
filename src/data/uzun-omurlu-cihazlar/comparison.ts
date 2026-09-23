// "Düzenli Bakımlı Cihaz ile Bakımsız/Orijinal Olmayan Parçalı Cihaz
// Karşılaştırması" comparison table for the /neden-orijinal/
// uzun-omurlu-cihazlar page. Renders through the existing, already-
// generic KulakArkasiComparison component (see src/components/kulak-
// arkasi/) — reused as-is, not duplicated. This table compares two
// maintenance/parts approaches most relevant to this page's own subject
// (device longevity), rather than repeating the authenticity-channel
// axis used on Güvenilir Teknoloji.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const uzunOmurluCihazlarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Düzenli Bakımlı Cihaz ile Bakımsız/Orijinal Olmayan Parçalı Cihaz Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Cihazınızın ömrünü etkileyen faktörler kullanım koşullarına göre değişebilir.",
  primaryLabel: "Düzenli Bakımlı, Orijinal Parçalı Cihaz",
  secondaryLabel: "Bakımsız veya Orijinal Olmayan Parçalı Cihaz",
  rows: [
    {
      feature: "Ortalama Kullanım Ömrü",
      primary: "Doğru bakımla genellikle 4-6 yıl veya daha uzun süre kullanılabilir.",
      secondary: "Bakım eksikliği veya uyumsuz parçalar nedeniyle ömür belirgin şekilde kısalabilir.",
    },
    {
      feature: "Performans Kararlılığı",
      primary: "Zamanla performans kaybı daha sınırlı olur.",
      secondary: "Performans kaybı daha erken ve belirgin şekilde yaşanabilir.",
    },
    {
      feature: "Arıza Riski",
      primary: "Düzenli kontrol sayesinde arızalar erken fark edilir.",
      secondary: "Fark edilmeyen küçük sorunlar zamanla büyüyebilir.",
    },
    {
      feature: "Yedek Parça Uyumu",
      primary: "Orijinal parçalar cihazla tam uyumludur.",
      secondary: "Uyumsuz parçalar ek arızalara yol açabilir.",
    },
    {
      feature: "Garanti Durumu",
      primary: "Yetkili bakım ve orijinal parça kullanımı garantiyi korur.",
      secondary: "Yetkisiz müdahale veya orijinal olmayan parça, garantiyi geçersiz kılabilir.",
    },
    {
      feature: "Yazılım Güncelliği",
      primary: "Düzenli güncellemelerle cihaz güncel kalır.",
      secondary: "Güncelleme takibi yapılmadığında cihaz zamanla geride kalabilir.",
    },
    {
      feature: "Uzun Vadeli Maliyet",
      primary: "Düzenli bakım, büyük onarım maliyetlerini önlemeye yardımcı olabilir.",
      secondary: "İhmal edilen küçük sorunlar, ileride daha maliyetli onarımlara yol açabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; cihazınızın ömrünü etkileyen faktörler kullanım yoğunluğuna ve ortam koşullarına göre değişebilir.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
