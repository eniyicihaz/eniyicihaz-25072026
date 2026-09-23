// "Standart Kulak Ucu (Dome) ile Kişiye Özel Kalıp Karşılaştırması"
// comparison table for the /uygulama-ayar/kalip-alimi page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// This page's own comparison pivots to a genuinely distinct axis
// specific to its own subject — the well-known standard dome vs.
// custom earmold distinction in BTE fitting.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kalipAlimiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Standart Kulak Ucu (Dome) ile Kişiye Özel Kalıp Karşılaştırması",
  intro: "İki seçenek arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, işitme kaybı derecenize ve tercihinize göre birlikte belirlenir.",
  primaryLabel: "Kişiye Özel Kalıp",
  secondaryLabel: "Standart Kulak Ucu (Dome)",
  rows: [
    {
      feature: "Uyum",
      primary: "Yalnızca sizin kulak kanalınızın şekline göre üretilir.",
      secondary: "Birkaç standart boyuttan size en yakın olanı seçilir.",
    },
    {
      feature: "Akustik Sızdırmazlık",
      primary: "Genellikle daha iyi bir sızdırmazlık sağlar.",
      secondary: "Sızdırmazlık, kulak kanalı şeklinize bağlı olarak değişebilir.",
    },
    {
      feature: "Islık Sesi (Feedback) Riski",
      primary: "İyi bir sızdırmazlık sayesinde genellikle daha düşüktür.",
      secondary: "Kulak kanalı şekline göre daha sık görülebilir.",
    },
    {
      feature: "Temin Süresi",
      primary: "Ölçü alımı ve laboratuvar üretimi nedeniyle birkaç iş günü gerektirir.",
      secondary: "Randevu sırasında hemen takılabilir.",
    },
    {
      feature: "Değişim İhtiyacı",
      primary: "Kulak kanalı değiştikçe periyodik olarak yenilenmesi gerekebilir.",
      secondary: "Farklı boyutlar arasında kolayca değiştirilebilir.",
    },
    {
      feature: "Kişiselleştirme",
      primary: "Renk ve malzeme seçenekleriyle kişiselleştirilebilir.",
      secondary: "Kişiselleştirme seçeneği sınırlıdır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seçim, işitme kaybı derecenize ve kulak kanalı yapınıza göre bir odyometristle birlikte belirlenir.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
