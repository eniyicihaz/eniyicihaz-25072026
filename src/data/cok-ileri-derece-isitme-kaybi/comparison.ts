// "En Yüksek Kapasiteli Power BTE vs Standart Güçlü BTE" comparison table
// for the /ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Unlike its three sibling degree pages (which each compare their degree
// to the next one up), this is the final rung of the dB ladder with no
// higher degree to compare forward to — repeating the İleri page's
// "İleri vs Çok İleri" table with primary/secondary swapped would be
// redundant, so this table instead compares WITHIN the power-BTE
// category itself (maximum-capacity vs standard-power models), mirroring
// the technique the Şarjlı Teknolojiler page used for its own
// within-category comparison. Framed as neutral, general tendencies —
// never "kesinlikle daha iyi"; the closing note reinforces that the real
// answer needs a joint audiological and KBB evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cokIleriDereceIsitmeKaybiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "En Yüksek Kapasiteli Power BTE ile Standart Güçlü BTE Karşılaştırması",
  intro: "Aynı power BTE kategorisi içindeki iki kapasite seviyesi arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, kaybınızın kesin derecesine göre değişir.",
  primaryLabel: "En Yüksek Kapasiteli Power BTE",
  secondaryLabel: "Standart Güçlü BTE",
  rows: [
    {
      feature: "Amplifikasyon Kapasitesi",
      primary: "Bu derecede mümkün olan en yüksek amplifikasyon kapasitesini sunar.",
      secondary: "Yüksek ama daha sınırlı bir amplifikasyon kapasitesi sunar.",
    },
    {
      feature: "Geri Besleme Kontrolü",
      primary: "En gelişmiş geri besleme engelleme teknolojisiyle donatılır.",
      secondary: "Temel düzeyde geri besleme kontrolü sunar.",
    },
    {
      feature: "Gövde Boyutu",
      primary: "Daha büyük bileşenler nedeniyle gövde biraz daha büyük olabilir.",
      secondary: "Görece daha kompakt bir gövde sunar.",
    },
    {
      feature: "Pil Ömrü",
      primary: "Yüksek güç tüketimi nedeniyle pil ömrü daha kısa olabilir.",
      secondary: "Görece daha uzun pil ömrü sunabilir.",
    },
    {
      feature: "Ek Özellikler",
      primary: "Yönlü mikrofon ve gelişmiş gürültü azaltma gibi özellikler sıkça bulunur.",
      secondary: "Ek özellikler daha sınırlı olabilir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "En yüksek kapasiteli modeller genellikle daha yüksek fiyat aralığındadır.",
      secondary: "Görece daha uygun fiyatlı olabilir.",
    },
    {
      feature: "Uygulama Kapsamı",
      primary: "Çok ileri dereceli kayıplarda birincil seçenek olarak değerlendirilir.",
      secondary: "İleri dereceli kayıplarda yeterli olabilir.",
    },
    {
      feature: "Bakım İhtiyacı",
      primary: "Yüksek kullanım yoğunluğu nedeniyle düzenli bakım önemlidir.",
      secondary: "Standart bakım periyotları genellikle yeterlidir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Sınırlı sayıda üst segment modelde sunulur.",
      secondary: "Daha geniş bir model yelpazesinde bulunur.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Konuşmaların büyük bölümünü güçlü amplifikasyon olmadan duyamayan kullanıcılar için değerlendirilir.",
      secondary: "Yüksek sesle konuşmaları anlamakta zorlanan, ancak çok ileri derecede olmayan kullanıcılar için değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun kapasite düzeyi, yalnızca bir odyometri testi ve gerektiğinde bir KBB değerlendirmesiyle belirlenmelidir.",
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
