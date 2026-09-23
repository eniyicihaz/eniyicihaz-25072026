// "Objektif Testler (OAE/ABR) ile Davranışsal Testler (Oyun Odyometrisi)
// Karşılaştırması" comparison table for the /degerlendirme/
// cocuk-isitme-testi page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. The three prior Değerlendirme pages
// each compare a different pair (klinik vs online, saf ses vs konuşma
// odyometrisi, timpanometri vs odyometri); this page's own comparison
// pivots to the two fundamentally different approaches in pediatric
// audiology itself — objective, response-free testing vs. behavioral,
// engagement-based testing — a genuinely distinct, educational axis.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cocukIsitmeTestiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Objektif Testler (OAE/ABR) ile Davranışsal Testler (Oyun Odyometrisi) Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Çocuğunuza en uygun yöntem, yaşına ve gelişim düzeyine göre belirlenir.",
  primaryLabel: "Objektif Testler (OAE / ABR)",
  secondaryLabel: "Davranışsal Testler (Oyun Odyometrisi)",
  rows: [
    {
      feature: "Uygulanan Yaş Grubu",
      primary: "Genellikle yenidoğan ve küçük bebeklerde uygulanır.",
      secondary: "Genellikle 2 yaş ve üzeri çocuklarda uygulanır.",
    },
    {
      feature: "Çocuğun Katılımı",
      primary: "Aktif katılım veya uyanıklık gerektirmez.",
      secondary: "Çocuğun aktif katılımını ve işbirliğini gerektirir.",
    },
    {
      feature: "Ölçtüğü Yapı",
      primary: "İç kulak veya işitsel sinir yolunun fizyolojik tepkisini ölçer.",
      secondary: "Çocuğun sese davranışsal tepkisini ölçer.",
    },
    {
      feature: "Uygulama Ortamı",
      primary: "Genellikle bebek uyurken veya sakin bir durumdayken uygulanır.",
      secondary: "Oyun temelli, etkileşimli bir ortamda uygulanır.",
    },
    {
      feature: "Sonuç Güvenilirliği",
      primary: "Fizyolojik bir yanıta dayandığı için tutarlı sonuçlar verir.",
      secondary: "Çocuğun o günkü işbirliği düzeyine göre değişebilir.",
    },
    {
      feature: "Kullanım Amacı",
      primary: "Erken dönemde işitme kaybı riskini taramak için kullanılır.",
      secondary: "Çocuğun gerçek işitme eşiğini belirlemek için kullanılır.",
    },
    {
      feature: "Birlikte Kullanım",
      primary: "Gerektiğinde davranışsal testlerle desteklenir.",
      secondary: "Gerektiğinde objektif testlerle desteklenir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; çocuğunuzun yaşına ve gelişim düzeyine en uygun test yöntemi bir odyometrist tarafından belirlenir.",
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
