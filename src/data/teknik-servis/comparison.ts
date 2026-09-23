// "Yerinde Onarım ile Üretici Servisine Gönderim Karşılaştırması"
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
  heading: "Yerinde Onarım ile Üretici Servisine Gönderim Karşılaştırması",
  intro: "İki onarım yolu arasındaki temel farkları aşağıdaki tabloda özetledik. Hangi yolun izleneceği, sorunun kaynağına göre belirlenir.",
  primaryLabel: "Yerinde Onarım",
  secondaryLabel: "Üretici Servisine Gönderim",
  rows: [
    {
      feature: "Uygulandığı Durumlar",
      primary: "Basit, yüzeysel veya hızlı çözülebilen sorunlar için uygulanır.",
      secondary: "Karmaşık, iç bileşenlere yönelik sorunlar için gereklidir.",
    },
    {
      feature: "Süre",
      primary: "Genellikle aynı gün veya kısa sürede tamamlanabilir.",
      secondary: "Gönderim ve inceleme nedeniyle birkaç iş günü sürebilir.",
    },
    {
      feature: "Uzmanlık Düzeyi",
      primary: "Kliniğimizin teknik ekibi tarafından yapılır.",
      secondary: "Üreticinin kendi uzman teknisyenleri tarafından yapılır.",
    },
    {
      feature: "Yedek Parça Erişimi",
      primary: "Kliniğimizde bulunan sınırlı yedek parçalarla sınırlıdır.",
      secondary: "Üreticinin tam kapsamlı orijinal parça stoğuna erişim sağlar.",
    },
    {
      feature: "Garanti Süreci",
      primary: "Garanti kapsamındaki bazı işlemler için yeterli olmayabilir.",
      secondary: "Garanti kapsamındaki resmi onarım süreci için gereklidir.",
    },
    {
      feature: "Cihazsız Kalma Süresi",
      primary: "Genellikle minimum düzeydedir.",
      secondary: "Gönderim süresi boyunca cihazsız kalabilirsiniz; yedek cihaz imkânı değerlendirilebilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; hangi onarım yolunun izleneceği, yerinde teşhis sonucuna göre belirlenir.",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
