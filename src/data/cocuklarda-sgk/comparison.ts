// "Erken Yaşta Müdahale ile Geç Kalınan Müdahale Karşılaştırması"
// comparison table for the /sgk/cocuklarda-sgk page. Renders through
// the existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Distinct from uyum-sureci's own comparison (which is scoped to the
// general adaptation process): this one is scoped specifically to
// child language/development outcomes, reflecting the real pediatric
// audiology concept that early intervention timing affects language
// development. Deliberately contains no specific figures.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cocuklardaSgkComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Erken Yaşta Müdahale ile Geç Kalınan Müdahalenin Gelişime Etkisi",
  intro: "İşitme kaybına erken veya geç müdahale edilmesinin çocuğun gelişimine olası etkilerini aşağıdaki tabloda özetledik.",
  primaryLabel: "Erken Yaşta Müdahale",
  secondaryLabel: "Geç Kalınan Müdahale",
  rows: [
    {
      feature: "Dil ve Konuşma Gelişimi",
      primary: "Dil gelişimi süreciyle eş zamanlı olarak desteklenir.",
      secondary: "Dil gelişiminde gecikme riski artabilir.",
    },
    {
      feature: "Okul Uyumu",
      primary: "Okula başlamadan önce işitsel altyapı desteklenmiş olur.",
      secondary: "Okul döneminde ek destek ihtiyacı doğabilir.",
    },
    {
      feature: "Sosyal Gelişim",
      primary: "Akranlarıyla iletişim süreci daha erken desteklenir.",
      secondary: "Sosyal iletişimde zorluklar yaşanabilir.",
    },
    {
      feature: "Aile Uyumu",
      primary: "Aile, süreç erken başladığı için cihaza ve rutine daha erken alışır.",
      secondary: "Alışma süreci daha ileri bir yaşta başlar.",
    },
    {
      feature: "Kimler İçin Geçerlidir",
      primary: "Yenidoğan taramasında veya erken yaşta tanı alan çocuklar için geçerlidir.",
      secondary: "Tanının daha ileri bir yaşta konduğu durumlar için geçerlidir.",
    },
  ],
  note: "Bu karşılaştırma genel pediatrik odyoloji eğilimlerini özetler; çocuğunuza özel değerlendirme için merkezimizden bilgi alabilirsiniz.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
