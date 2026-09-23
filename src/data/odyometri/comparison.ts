// "Saf Ses Odyometrisi ile Konuşma Odyometrisi Karşılaştırması"
// comparison table for the /degerlendirme/odyometri page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Ücretsiz İşitme Testi already compares clinical vs. online testing;
// this page's own comparison pivots to the two complementary odyometri
// test types themselves — a genuinely distinct, technically relevant
// axis specific to this page's deeper scope.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const odyometriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Saf Ses Odyometrisi ile Konuşma Odyometrisi Karşılaştırması",
  intro: "İki test türü arasındaki temel farkları aşağıdaki tabloda özetledik. İki test genellikle birlikte uygulanır.",
  primaryLabel: "Saf Ses Odyometrisi",
  secondaryLabel: "Konuşma Odyometrisi",
  rows: [
    {
      feature: "Ölçtüğü Şey",
      primary: "Farklı frekanslardaki saf tonlara karşı işitme eşiğini ölçer.",
      secondary: "Konuşmayı anlama ve ayırt etme becerisini ölçer.",
    },
    {
      feature: "Kullanılan Uyaran",
      primary: "Belirli frekanslarda saf ton sesleri kullanılır.",
      secondary: "Kelimeler veya cümleler kullanılır.",
    },
    {
      feature: "Sonuç Formatı",
      primary: "Frekans-şiddet grafiği (odyogram) olarak sunulur.",
      secondary: "Doğru anlama yüzdesi olarak sunulur.",
    },
    {
      feature: "Günlük Yaşamla İlişki",
      primary: "İşitme eşiğinin teknik bir ölçümünü sunar.",
      secondary: "Günlük konuşma anlama deneyimini daha yakından yansıtır.",
    },
    {
      feature: "Kullanım Amacı",
      primary: "İşitme kaybının derecesini ve türünü belirlemede temel testtir.",
      secondary: "Cihaz programlamasında ve günlük performans değerlendirmesinde tamamlayıcıdır.",
    },
    {
      feature: "Süre",
      primary: "Genellikle daha kısa sürede tamamlanır.",
      secondary: "Ek bir süre gerektirebilir.",
    },
    {
      feature: "Birlikte Kullanım",
      primary: "Genellikle konuşma odyometrisiyle birlikte uygulanır.",
      secondary: "Genellikle saf ses odyometrisiyle birlikte uygulanır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; iki test genellikle birbirini tamamlayacak şekilde birlikte uygulanır ve sonuçlar bir odyometrist tarafından bütün olarak değerlendirilir.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
