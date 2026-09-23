// "Geleneksel Cihazlar ile Yapay Zeka Destekli Cihazlar Karşılaştırması"
// comparison table for the /blog/yeni-teknolojiler page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific figures — a qualitative comparison
// that complements (not duplicates) the real
// /teknolojiler/yapay-zeka-destekli page.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const yeniTeknolojilerComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Geleneksel Cihazlar ile Yapay Zeka Destekli Cihazlar Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Geleneksel Dijital Cihazlar",
  secondaryLabel: "Yapay Zeka Destekli Cihazlar",
  rows: [
    {
      feature: "Ortam Uyumu",
      primary: "Ortam değişikliklerinde genellikle manuel ayar gerekebilir.",
      secondary: "Ortamı analiz ederek sesi otomatik olarak optimize etmeye çalışır.",
    },
    {
      feature: "Konuşma Ayrıştırma",
      primary: "Standart gürültü azaltma yöntemleri kullanılır.",
      secondary: "Konuşmayı gürültüden ayırt etmede daha gelişmiş yöntemler kullanılabilir.",
    },
    {
      feature: "Bağlantı",
      primary: "Bağlantı özellikleri modele göre sınırlı olabilir.",
      secondary: "Genellikle daha geniş kablosuz bağlantı seçenekleri sunar.",
    },
    {
      feature: "Öğrenme ve Uyum",
      primary: "Sabit ayarlarla çalışır.",
      secondary: "Bazı modeller zamanla kullanıcı tercihlerine uyum sağlayabilir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Temel ihtiyaçları karşılayan, sade bir kullanım isteyen kullanıcılar için uygundur.",
      secondary: "Değişken ortamlarda aktif olarak kullanan, gelişmiş özellikleri önemseyen kullanıcılar için uygundur.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun teknolojiyi randevunuzda birlikte değerlendirebiliriz.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
