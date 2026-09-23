// "Yetişkin Başvurusu ile Çocuk Başvurusu Belge Karşılaştırması"
// comparison table for the /sgk/gerekli-belgeler page. Renders through
// the existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific figures or counts — a qualitative
// comparison distinct from every prior comparison across the site.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const gerekliBelgelerComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yetişkin Başvurusu ile Çocuk Başvurusu Belge Karşılaştırması",
  intro: "Yetişkin ve çocuk başvurularında istenen belgeler arasındaki temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Yetişkin Başvurusu",
  secondaryLabel: "Çocuk Başvurusu",
  rows: [
    {
      feature: "Sağlık Kurulu Raporu",
      primary: "Başvuru sahibi adına düzenlenir.",
      secondary: "Çocuk adına, ilgili pediatrik değerlendirme sonrası düzenlenir.",
    },
    {
      feature: "Kimlik Belgesi",
      primary: "Başvuru sahibinin kendi kimlik belgesi istenir.",
      secondary: "Çocuğun kimlik belgesi ile birlikte veli/vasi kimlik belgesi istenir.",
    },
    {
      feature: "Veli/Vasi Belgesi",
      primary: "Gerekmez.",
      secondary: "Veli veya vasi olduğunu gösteren belge istenebilir.",
    },
    {
      feature: "SGK Kaydı",
      primary: "Başvuru sahibinin kendi sigortalılık bilgisi esas alınır.",
      secondary: "Genellikle ebeveynin sigortalılık bilgisi üzerinden değerlendirilir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "18 yaş ve üzeri başvuru sahipleri için geçerlidir.",
      secondary: "18 yaş altındaki çocuk hastalar için geçerlidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size özel güncel belge listesi için randevunuzda bilgi alabilirsiniz.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
