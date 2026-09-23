// "Yetkili Kanaldan Alınan Üründe Değişim ile Yetkisiz Kanaldan Alınan
// Üründe Değişim Karşılaştırması" comparison table for the
// /neden-orijinal/kolay-degisim page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// table compares the exchange experience on an authorized-channel
// purchase against an unauthorized one — this page's own natural
// comparison axis, distinct from the channel-authenticity, maintenance,
// service-network, accessory-quality and advised-decision axes used on
// the five prior pages.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kolayDegisimComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yetkili Kanaldan Alınan Üründe Değişim ile Yetkisiz Kanaldan Alınan Üründe Değişim Karşılaştırması",
  intro: "İki durum arasındaki temel farkları aşağıdaki tabloda özetledik. Değişim koşulları, ürün ve satın alma koşullarına göre değişebilir.",
  primaryLabel: "Yetkili Kanaldan Alınan Üründe Değişim",
  secondaryLabel: "Yetkisiz Kanaldan Alınan Üründe Değişim",
  rows: [
    {
      feature: "Değişim Hakkı",
      primary: "Değişim koşulları satın alma öncesinde net bir şekilde belirlenir.",
      secondary: "Değişim hakkı genellikle sunulmaz veya belirsizdir.",
    },
    {
      feature: "Süreç Şeffaflığı",
      primary: "Süreç adımları ve süresi baştan bellidir.",
      secondary: "Süreç genellikle tanımlı değildir.",
    },
    {
      feature: "Üretim Hatası Güvencesi",
      primary: "Üretim kaynaklı sorunlarda yetkili değerlendirme ve değişim yapılır.",
      secondary: "Üretim hatası değerlendirmesi genellikle mümkün değildir.",
    },
    {
      feature: "İhtiyaç Değişikliği Desteği",
      primary: "İhtiyaç değiştiğinde model geçişi değerlendirilebilir.",
      secondary: "Model geçişi desteği genellikle sunulmaz.",
    },
    {
      feature: "Belgeleme",
      primary: "Değişim süreci belgelenir ve kayıt altına alınır.",
      secondary: "Belgesiz veya kayıt dışı işlemler yapılabilir.",
    },
    {
      feature: "Sorumluluk",
      primary: "Değişim sürecinin sorumluluğu yetkili kanal tarafından üstlenilir.",
      secondary: "Sorumluluk genellikle net değildir.",
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
