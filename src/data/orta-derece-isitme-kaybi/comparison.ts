// "Orta Derece İşitme Kaybı vs İleri Derece İşitme Kaybı" comparison
// table for the /ihtiyaciniza-gore/orta-derece-isitme-kaybi page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every prior feature/need page's comparison.ts uses. Compares
// two adjacent points on the same clinical scale — framed as neutral,
// general tendencies — never "kesinlikle daha iyi"; the closing note
// reinforces that the real answer needs an audiometric evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ortaDereceIsitmeKaybiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Orta Derece İşitme Kaybı ile İleri Derece İşitme Kaybı Karşılaştırması",
  intro: "İki derece arasındaki genel eğilim farklarını aşağıdaki tabloda özetledik. Sizin durumunuz, yalnızca bir odyometri testiyle netleşir.",
  primaryLabel: "Orta Derece İşitme Kaybı",
  secondaryLabel: "İleri Derece İşitme Kaybı",
  rows: [
    {
      feature: "İşitme Eşiği Aralığı",
      primary: "41-55 dB aralığındadır.",
      secondary: "56-70 dB aralığındadır.",
    },
    {
      feature: "Günlük Yaşama Etkisi",
      primary: "Normal ses tonundaki konuşmaları takip etmekte belirgin zorluk yaşanabilir.",
      secondary: "Yüksek sesle konuşulsa bile anlamakta zorluk yaşanabilir.",
    },
    {
      feature: "Gerekli Amplifikasyon Düzeyi",
      primary: "Orta düzey amplifikasyon gerekir.",
      secondary: "Daha güçlü amplifikasyon gerekir.",
    },
    {
      feature: "Sıkça Tercih Edilen Cihaz Tipi",
      primary: "Standart RIC ve BTE modelleri sıkça tercih edilir.",
      secondary: "Güçlü RIC ve BTE modelleri sıkça tercih edilir.",
    },
    {
      feature: "Kulak İçi (ITE) Uygunluğu",
      primary: "Bazı kulak içi modeller uygun olabilir.",
      secondary: "Kulak içi modeller genellikle daha sınırlı kalır, BTE öne çıkar.",
    },
    {
      feature: "Kalabalık Ortam Performansı",
      primary: "Kalabalık ortamlarda daha belirgin zorluk yaşanabilir.",
      secondary: "Kalabalık ortamlarda zorluk daha da artabilir.",
    },
    {
      feature: "Cihazlandırma Aciliyeti",
      primary: "Cihazlandırma önerisi genellikle daha belirgindir.",
      secondary: "Cihazlandırma önerisi genellikle güçlüdür.",
    },
    {
      feature: "Takip Sıklığı",
      primary: "Daha yakın takip önerilebilir.",
      secondary: "Düzenli ve sık takip genellikle önerilir.",
    },
    {
      feature: "Segment Eğilimi",
      primary: "Orta-üst segment modeller sıkça değerlendirilir.",
      secondary: "Üst segment ve güçlü modeller sıkça değerlendirilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Normal ses tonundaki konuşmaları takip etmekte zorlanan kullanıcılar için değerlendirilir.",
      secondary: "Yüksek seste bile anlamakta zorlanan kullanıcılar için değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin işitme kaybınızın kesin derecesi ve size uygun çözüm, yalnızca bir odyometri testiyle belirlenebilir.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
