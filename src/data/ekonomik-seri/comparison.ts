// "Orijinal Ekonomik Seri ile Orijinal Olmayan/Sahte Ucuz Ürün
// Karşılaştırması" comparison table for the /segmentler/ekonomik-seri
// page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. Premium Seri already compares Premium
// vs Standart, and Standart Seri already compares Standart vs Ekonomik;
// repeating that same pair here (Ekonomik vs Standart) would just be
// the same table with sides swapped. Instead, this page's own
// comparison pivots to the axis genuinely specific to this price-
// sensitive segment: shoppers hunting for the lowest price are the
// group most likely to encounter counterfeit/parallel-import products,
// so this table compares a genuine, orijinal ekonomik-seri cihaz
// against a non-original "cheap" imitation — the same technique the
// dB-degree ladder pages used for their own final rung (Çok İleri
// Derece pivoted to Power BTE vs standard-power BTE rather than
// repeating an adjacent-degree table). This also ties the Segmentler
// series back to the "Neden Orijinal" series' own Güvenilir Teknoloji
// page.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ekonomikSeriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Orijinal Ekonomik Seri ile Orijinal Olmayan/Sahte Ucuz Ürün Karşılaştırması",
  intro: "En uygun fiyatı ararken dikkat edilmesi gereken temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Orijinal Ekonomik Seri",
  secondaryLabel: "Orijinal Olmayan / Sahte Ucuz Ürünler",
  rows: [
    {
      feature: "Kaynak",
      primary: "Yetkili distribütör ve resmi ithalat kanalından temin edilir.",
      secondary: "Kaynağı belirsiz veya kayıt dışı kanallardan temin edilebilir.",
    },
    {
      feature: "Garanti",
      primary: "Üretici garantisi ile sunulur.",
      secondary: "Garanti genellikle bulunmaz veya geçersizdir.",
    },
    {
      feature: "Ses Kalitesi",
      primary: "Temel ihtiyaçlar için test edilmiş, tutarlı bir ses kalitesi sunar.",
      secondary: "Ses kalitesi öngörülemez ve tutarsız olabilir.",
    },
    {
      feature: "Güvenlik",
      primary: "İlgili güvenlik ve kalite standartlarına uygun olarak üretilir.",
      secondary: "Güvenlik standartlarına uygunluğu belirsiz olabilir.",
    },
    {
      feature: "Teknik Servis",
      primary: "Yetkili teknik servis desteğinden faydalanılabilir.",
      secondary: "Yetkili servisler bu ürünlere hizmet vermeyi reddedebilir.",
    },
    {
      feature: "Fiyat Farkı",
      primary: "Orijinallik ve garanti güvencesiyle birlikte makul bir fiyat sunar.",
      secondary: "Daha düşük görünen fiyat, uzun vadede ek risk ve maliyete yol açabilir.",
    },
    {
      feature: "Yasal Güvence",
      primary: "Tüketici hakları ve iade süreçleri yasal güvence altındadır.",
      secondary: "Yasal güvence ve iade hakları belirsiz olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; en uygun fiyatlı seçeneği ararken dahi orijinallik ve yetkili kanaldan alışverişten ödün vermemenizi öneririz.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
