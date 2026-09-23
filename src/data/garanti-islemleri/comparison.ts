// "Garanti Kapsamındaki Onarım ile Kolay Değişim Karşılaştırması"
// comparison table for the /servis-bakim/garanti-islemleri page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. This page's own comparison directly ties this page to
// the real /neden-orijinal/kolay-degisim page, making the two
// processes' distinction explicit rather than leaving it ambiguous.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const garantiIslemleriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Garanti Kapsamındaki Onarım ile Kolay Değişim Karşılaştırması",
  intro: "İki süreç arasındaki temel farkları aşağıdaki tabloda özetledik. Durumunuza uygun süreç, sorununuzun kaynağına göre belirlenir.",
  primaryLabel: "Garanti Kapsamındaki Onarım",
  secondaryLabel: "Kolay Değişim",
  rows: [
    {
      feature: "Tetikleyen Durum",
      primary: "Üretim kaynaklı bir teknik kusur tespit edilmesi.",
      secondary: "Memnuniyetsizlik, ihtiyaç değişikliği veya deneme sonrası karar değişikliği.",
    },
    {
      feature: "Sonuç",
      primary: "Cihaz onarılır veya kusurlu parça değiştirilir.",
      secondary: "Cihaz, size daha uygun bir modelle değiştirilir.",
    },
    {
      feature: "Gereken Belgeler",
      primary: "Fatura ve garanti belgesi gereklidir.",
      secondary: "Satın alma kayıtları ve değişim koşulları kontrol edilir.",
    },
    {
      feature: "Zaman Sınırı",
      primary: "Cihazın garanti süresi boyunca geçerlidir.",
      secondary: "Değişim koşulları, satış sırasında belirlenen süreyle sınırlıdır.",
    },
    {
      feature: "Ücret",
      primary: "Garanti kapsamındaki onarım ücretsizdir.",
      secondary: "Değişim koşulları, ürün farkına göre değişebilir.",
    },
    {
      feature: "Kimler İçin Geçerlidir",
      primary: "Cihazında teknik bir kusur olduğunu düşünen kullanıcılar için geçerlidir.",
      secondary: "Cihazından memnun kalmayan veya ihtiyacı değişen kullanıcılar için geçerlidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun süreç, durumunuzun değerlendirilmesiyle birlikte netleştirilir.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
