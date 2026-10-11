// "Merkezde Çözüm ile Teknik Servise Gönderim Karşılaştırması"
// comparison table for the /servis-bakim/teknik-servis page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// This page's own comparison pivots to a genuinely new axis specific to
// its own subject — the two-tier repair path (in-house vs. manufacturer
// service) — distinct from every comparison used across the
// Değerlendirme and Uygulama & Ayar series.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const teknikServisComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Merkezde Çözüm ile Teknik Servise Gönderim Karşılaştırması",
  intro: "İki yol arasındaki temel farkları aşağıdaki tabloda özetledik. Hangi yolun izleneceği, sorunun niteliğine ve garanti durumuna göre belirlenir.",
  primaryLabel: "Merkezde Çözüm",
  secondaryLabel: "Teknik Servise Gönderim",
  rows: [
    {
      feature: "Uygulandığı Durumlar",
      primary: "Merkezdeki ilk değerlendirmede çözülebilen sorunlar için uygulanır.",
      secondary: "Merkezde çözülemeyen durumlar için gerektiğinde uygulanır.",
    },
    {
      feature: "Kim Yürütür?",
      primary: "Merkezimizdeki uzmanımız tarafından yürütülür.",
      secondary: "Teknik serviste yürütülür; ilk teknik kontrolle arıza netleşir.",
    },
    {
      feature: "Garanti Süreci",
      primary: "Garanti kapsamındaki bazı işlemler için yeterli olmayabilir.",
      secondary: "Garanti kapsamı, cihazın garanti şartlarına ve arızanın niteliğine göre değerlendirilir.",
    },
    {
      feature: "Süre",
      primary: "Arızanın türüne ve değerlendirmeye göre değişir.",
      secondary: "Gönderim, inceleme ve gerektiğinde parça temini nedeniyle değişir; tahmini onarım süresi ve varsa ücret, teknik servisteki ilk teknik kontrolden sonra bildirilir.",
    },
    {
      feature: "Cihazsız Kalma",
      primary: "İşlemin niteliğine bağlıdır.",
      secondary: "Gönderim ve inceleme süresince cihazsız kalabilirsiniz; yedek cihaz imkânı değerlendirilebilir.",
    },
  ],
  note: "Bu karşılaştırma genel bir çerçeve sunar; hangi yolun izleneceği merkezdeki ilk değerlendirmeye göre belirlenir.",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
