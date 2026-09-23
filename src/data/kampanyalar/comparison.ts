// "Kampanyalı Alım ile Standart Alım Karşılaştırması" comparison table
// for the /blog/kampanyalar page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific percentages or prices — a
// qualitative comparison, consistent with this page's accuracy
// discipline.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kampanyalarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Kampanyalı Alım ile Standart Alım Karşılaştırması",
  intro: "Aktif bir kampanya döneminde alım yapmak ile standart süreç arasındaki genel farkları aşağıda özetledik.",
  primaryLabel: "Kampanyalı Alım",
  secondaryLabel: "Standart Alım",
  rows: [
    {
      feature: "Ek Avantaj",
      primary: "Kampanya kapsamına göre ek bir avantaj sunulabilir.",
      secondary: "Standart şartlarla ilerler.",
    },
    {
      feature: "Zamanlama",
      primary: "Kampanya süresiyle sınırlı olabilir.",
      secondary: "Herhangi bir zaman kısıtı yoktur.",
    },
    {
      feature: "Koşullar",
      primary: "Kampanyaya göre belirli koşullar gerekebilir.",
      secondary: "Genel süreç şartları geçerlidir.",
    },
    {
      feature: "SGK Desteğiyle Birlikte",
      primary: "Uygun kampanyalar SGK desteğiyle birlikte değerlendirilebilir.",
      secondary: "SGK desteği, standart süreçte de aynı şekilde uygulanır.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Aktif bir kampanyaya uyan kullanıcılar için avantajlı olabilir.",
      secondary: "Her zaman geçerli olan, herkese açık bir seçenektir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; güncel kampanyalarımız için bizi aramanızı öneririz.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
