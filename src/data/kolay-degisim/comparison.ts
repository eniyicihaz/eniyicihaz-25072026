// "Koşulları Net Satın Alma ile Koşulları Belirsiz Satın Almada
// Değişim Karşılaştırması" comparison table for the
// /neden-orijinal/kolay-degisim page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// table compares the exchange experience on a purchase with clear terms
// against one with unclear terms — this page's own natural
// comparison axis, distinct from the channel-authenticity, maintenance,
// service-network, accessory-quality and advised-decision axes used on
// the five prior pages.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kolayDegisimComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Koşulları Net Satın Alma ile Koşulları Belirsiz Satın Almada Değişim Karşılaştırması",
  intro: "İki durum arasındaki temel farkları aşağıdaki tabloda özetledik. Değişim koşulları, ürün ve satın alma koşullarına göre değişebilir.",
  primaryLabel: "Koşulları Net Satın Alma",
  secondaryLabel: "Koşulları Belirsiz Satın Alma",
  rows: [
    {
      feature: "Değişim Hakkı",
      primary: "Değişim koşulları satın alma öncesinde net bir şekilde belirlenir.",
      secondary: "Değişim koşulları belirsiz olabilir.",
    },
    {
      feature: "Süreç Şeffaflığı",
      primary: "Süreç adımları ve süresi baştan bellidir.",
      secondary: "Süreç adımları tanımlı olmayabilir.",
    },
    {
      feature: "Üretim Hatası Güvencesi",
      primary: "Üretim kaynaklı sorunlar, üreticinin garanti koşullarına göre değerlendirilir.",
      secondary: "Üretim hatası değerlendirmesinin nasıl yapılacağı belirsiz olabilir.",
    },
    {
      feature: "İhtiyaç Değişikliği Desteği",
      primary: "İhtiyaç değiştiğinde model geçişi değerlendirilebilir.",
      secondary: "Model geçişi desteği belirsiz olabilir.",
    },
    {
      feature: "Belgeleme",
      primary: "Değişim süreci belgelenir ve kayıt altına alınır.",
      secondary: "İşlemler belgesiz veya kayıt dışı kalabilir.",
    },
    {
      feature: "Sorumluluk",
      primary: "Süreç adımları ve sorumluluk, satın alma sırasında belirlenen koşullara ve üretici garanti koşullarına göre bellidir.",
      secondary: "Sorumluluk net olmayabilir.",
    },
    {
      feature: "Zaman Çizelgesi",
      primary: "Değişim süreci öngörülebilir bir zaman diliminde tamamlanır.",
      secondary: "Süreç belirsiz şekilde uzayabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; değişim koşulları ürün ve satın alma koşullarına göre değişebilir.",
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
