// "Yerinde Onarım Takibi ile Üretici Servisi Takibi Karşılaştırması"
// comparison table for the /servis-bakim/onarim-takibi page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// This page's own comparison revisits Teknik Servis's own two-tier
// repair path (yerinde onarım vs. üretici servisine gönderim) but from
// the TRACKING angle specifically — how visibility and update frequency
// differ between the two paths — a genuinely distinct angle from
// Teknik Servis's own comparison of the repair paths themselves.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const onarimTakibiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yerinde Onarım Takibi ile Üretici Servisi Takibi Karşılaştırması",
  intro: "İki onarım yolunun takip deneyimi arasındaki farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Yerinde Onarım Takibi",
  secondaryLabel: "Üretici Servisi Takibi",
  rows: [
    {
      feature: "Güncelleme Sıklığı",
      primary: "Genellikle aynı gün içinde birkaç güncelleme alabilirsiniz.",
      secondary: "Güncellemeler, kargo ve inceleme sürecine bağlı olarak daha seyrek olabilir.",
    },
    {
      feature: "Görünürlük",
      primary: "Cihazınızın kliniğimizdeki durumu doğrudan izlenebilir.",
      secondary: "Kargo takibi ve üretici bildirimleri üzerinden dolaylı olarak izlenir.",
    },
    {
      feature: "Soru Sorma Hızı",
      primary: "Sorularınız aynı gün içinde yanıtlanabilir.",
      secondary: "Üretici servisinden bilgi almak biraz daha zaman alabilir.",
    },
    {
      feature: "Süre Tahmini",
      primary: "Genellikle daha kısa ve net bir süre tahmini verilebilir.",
      secondary: "Kargo ve inceleme süresi nedeniyle tahmin daha geniş bir aralıkta olabilir.",
    },
    {
      feature: "Kontrolümüzdeki Aşamalar",
      primary: "Sürecin tamamı kliniğimizin kontrolündedir.",
      secondary: "Kargo ve üretici inceleme süreci kliniğimizin doğrudan kontrolü dışındadır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; hangi onarım yolunun izleneceği, Teknik Servis sayfamızda açıklanan yerinde teşhis sonucuna göre belirlenir.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
