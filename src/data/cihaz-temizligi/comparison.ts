// "Elektronik Kuru Saklama Kutusu ile Standart Saklama Kutusu
// Karşılaştırması" comparison table for the /servis-bakim/
// cihaz-temizligi page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This page's own comparison pivots to a
// genuinely new consumer-facing axis distinct from every prior
// comparison across the Değerlendirme, Uygulama & Ayar and Servis &
// Bakım series.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cihazTemizligiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Elektronik Kuru Saklama Kutusu ile Standart Saklama Kutusu Karşılaştırması",
  intro: "İki saklama yöntemi arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, yaşadığınız iklime ve kullanım alışkanlıklarınıza göre değişebilir.",
  primaryLabel: "Elektronik Kuru Saklama Kutusu",
  secondaryLabel: "Standart Saklama Kutusu",
  rows: [
    {
      feature: "Nem Giderme",
      primary: "Isı veya UV ışığıyla aktif olarak nem giderir.",
      secondary: "Yalnızca pasif bir koruma sağlar.",
    },
    {
      feature: "Kullanım Kolaylığı",
      primary: "Cihazı yerleştirip çalıştırmanız yeterlidir.",
      secondary: "Ek bir işlem gerektirmez, yalnızca saklama sağlar.",
    },
    {
      feature: "Nemli İklimlerde Etkinlik",
      primary: "Nemli iklimlerde daha etkili bir koruma sunar.",
      secondary: "Nemli iklimlerde yeterli olmayabilir.",
    },
    {
      feature: "Maliyet",
      primary: "Standart kutuya göre genellikle daha yüksek maliyetlidir.",
      secondary: "Uygun fiyatlı ve yaygın olarak bulunabilir.",
    },
    {
      feature: "Taşınabilirlik",
      primary: "Genellikle bir güç kaynağı gerektirdiği için daha az taşınabilir.",
      secondary: "Küçük ve kolayca taşınabilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Nemli iklimde yaşayan veya sık terleyen kullanıcılar için sıkça tercih edilir.",
      secondary: "Görece kuru iklimde yaşayan kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun saklama yöntemi, yaşadığınız iklime ve kullanım alışkanlıklarınıza göre değişebilir.",
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
