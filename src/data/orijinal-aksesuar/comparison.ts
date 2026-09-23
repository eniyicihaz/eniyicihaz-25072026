// "Orijinal Aksesuar ile Jenerik/Uyumsuz Aksesuar Karşılaştırması"
// comparison table for the /neden-orijinal/orijinal-aksesuar page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. This table compares original accessories against generic/
// third-party ones — this page's own natural comparison axis, distinct
// from the channel-authenticity, maintenance-habits and service-network
// axes used on the three prior pages.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const orijinalAksesuarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Orijinal Aksesuar ile Jenerik/Uyumsuz Aksesuar Karşılaştırması",
  intro: "İki seçenek arasındaki temel farkları aşağıdaki tabloda özetledik. Cihazınız için en uygun aksesuar, modelinize göre değerlendirilmelidir.",
  primaryLabel: "Orijinal Aksesuar",
  secondaryLabel: "Jenerik veya Uyumsuz Aksesuar",
  rows: [
    {
      feature: "Uyum",
      primary: "Cihazınızın modeline özel olarak tasarlanır ve tam uyum sağlar.",
      secondary: "Farklı modellere uyacak şekilde genel üretilir, tam uyum garanti edilmez.",
    },
    {
      feature: "Kalite Testi",
      primary: "Üreticinin kalite standartlarına uygun olarak test edilir.",
      secondary: "Kalite testi süreci genellikle belirsizdir.",
    },
    {
      feature: "Ses Kalitesi",
      primary: "Cihazın tasarlandığı ses kalitesini korumaya yardımcı olur.",
      secondary: "Ses kalitesinde bozulmalara yol açabilir.",
    },
    {
      feature: "Hijyen",
      primary: "Hijyen standartlarına uygun malzemelerle üretilir.",
      secondary: "Malzeme kalitesi ve hijyen standardı belirsiz olabilir.",
    },
    {
      feature: "Garanti",
      primary: "Kullanımı cihazınızın garantisini etkilemez.",
      secondary: "Kullanımından kaynaklanan hasarlar garanti kapsamı dışında kalabilir.",
    },
    {
      feature: "Fiyat",
      primary: "Fiyat, kalite ve garanti güvencesiyle birlikte değerlendirilmelidir.",
      secondary: "Genellikle daha düşük fiyatlıdır, ancak kalite riski taşıyabilir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Yetkili satış noktalarından kolayca temin edilebilir.",
      secondary: "Kaynağı ve güvenilirliği değişkenlik gösterebilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; cihazınız için en uygun aksesuar seçimi, modelinize ve ihtiyacınıza göre değerlendirilmelidir.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
