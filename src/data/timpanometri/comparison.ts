// "Timpanometri (Objektif Test) ile Odyometri (Subjektif Test)
// Karşılaştırması" comparison table for the /degerlendirme/timpanometri
// page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. Ücretsiz İşitme Testi already compares
// clinical vs. online testing, and Odyometri already compares its own
// two subtypes (saf ses vs konuşma odyometrisi); this page's own
// comparison pivots to the objective/subjective distinction between
// timpanometri and odyometri themselves — a genuinely distinct,
// educational axis specific to this page's own subject.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const timpanometriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Timpanometri (Objektif Test) ile Odyometri (Subjektif Test) Karşılaştırması",
  intro: "İki test arasındaki temel farkları aşağıdaki tabloda özetledik. İki test genellikle birbirini tamamlayacak şekilde birlikte uygulanır.",
  primaryLabel: "Timpanometri (Objektif Test)",
  secondaryLabel: "Odyometri (Subjektif Test)",
  rows: [
    {
      feature: "Hasta Katılımı",
      primary: "Hastanın aktif yanıt vermesini gerektirmez.",
      secondary: "Hastanın sesleri duyduğunda belirtmesi gerekir.",
    },
    {
      feature: "Ölçtüğü Yapı",
      primary: "Orta kulak ve kulak zarı fonksiyonunu ölçer.",
      secondary: "İşitme siniri yoluyla algılanan işitme eşiğini ölçer.",
    },
    {
      feature: "Süre",
      primary: "Genellikle birkaç saniyede tamamlanır.",
      secondary: "Frekans başına birkaç dakika sürebilir.",
    },
    {
      feature: "Çocuklarda Uygulama",
      primary: "Aktif yanıt gerektirmediği için küçük çocuklarda kolayca uygulanabilir.",
      secondary: "Çocuğun işbirliği düzeyine göre uygulama zorlaşabilir.",
    },
    {
      feature: "Sonuç Formatı",
      primary: "Timpanogram eğrisi olarak sunulur.",
      secondary: "Odyogram (frekans-şiddet grafiği) olarak sunulur.",
    },
    {
      feature: "Tespit Ettiği Sorunlar",
      primary: "Orta kulak sıvısı, zar hareket bozukluğu gibi durumları gösterebilir.",
      secondary: "İşitme kaybının derecesini ve genel türünü gösterir.",
    },
    {
      feature: "Kullanım İlişkisi",
      primary: "Genellikle odyometriyle birlikte, tamamlayıcı olarak uygulanır.",
      secondary: "Genellikle timpanometriyle birlikte, temel test olarak uygulanır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; iki test birbirini tamamlar ve sonuçlar bir odyometrist tarafından birlikte değerlendirilir.",
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
