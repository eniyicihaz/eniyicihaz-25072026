// "Bireysel Randevu ile Etkinlik Katılımı Karşılaştırması" comparison
// table for the /blog/etkinlikler page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific dates — a qualitative comparison,
// consistent with this page's accuracy discipline.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const etkinliklerComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Bireysel Randevu ile Etkinlik Katılımı Karşılaştırması",
  intro: "Kliniğimizde bireysel randevu almak ile bir etkinliğe katılmak arasındaki genel farkları aşağıda özetledik.",
  primaryLabel: "Bireysel Randevu",
  secondaryLabel: "Etkinlik Katılımı",
  rows: [
    {
      feature: "Zamanlama",
      primary: "Size uygun bir zamanda planlanır.",
      secondary: "Etkinliğin belirlenen tarihine bağlıdır.",
    },
    {
      feature: "Değerlendirme Kapsamı",
      primary: "Kapsamlı ve size özel bir değerlendirme sunar.",
      secondary: "Genellikle genel bir ön değerlendirme veya bilgilendirme niteliğindedir.",
    },
    {
      feature: "Mahremiyet",
      primary: "Bireysel ve özel bir ortamda gerçekleşir.",
      secondary: "Etkinliğin niteliğine göre daha genel bir ortamda gerçekleşebilir.",
    },
    {
      feature: "Sonraki Adım",
      primary: "Gerekirse aynı randevuda ileri adımlar planlanabilir.",
      secondary: "Detaylı değerlendirme için genellikle ayrı bir randevu önerilir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Kapsamlı bir değerlendirme isteyen kullanıcılar için uygundur.",
      secondary: "Genel bilgi almak veya ön değerlendirme yaptırmak isteyen kullanıcılar için uygundur.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seçeneği birlikte değerlendirebiliriz.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
