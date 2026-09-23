// "İleri Derece İşitme Kaybı vs Çok İleri Derece İşitme Kaybı"
// comparison table for the /ihtiyaciniza-gore/ileri-derece-isitme-kaybi
// page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated, same technique every prior feature/need
// page's comparison.ts uses. Compares two adjacent points on the same
// clinical scale — framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real
// answer needs an audiometric evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ileriDereceIsitmeKaybiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "İleri Derece İşitme Kaybı ile Çok İleri Derece İşitme Kaybı Karşılaştırması",
  intro: "İki derece arasındaki genel eğilim farklarını aşağıdaki tabloda özetledik. Sizin durumunuz, yalnızca bir odyometri testiyle netleşir.",
  primaryLabel: "İleri Derece İşitme Kaybı",
  secondaryLabel: "Çok İleri Derece İşitme Kaybı",
  rows: [
    {
      feature: "İşitme Eşiği Aralığı",
      primary: "56-70 dB aralığındadır.",
      secondary: "71 dB ve üzerindedir.",
    },
    {
      feature: "Günlük Yaşama Etkisi",
      primary: "Yüksek sesle konuşulsa bile anlamakta zorluk yaşanabilir.",
      secondary: "Konuşmaların çoğu, güçlü amplifikasyon olmadan duyulamayabilir.",
    },
    {
      feature: "Gerekli Amplifikasyon Düzeyi",
      primary: "Güçlü amplifikasyon gerekir.",
      secondary: "En yüksek düzeyde amplifikasyon gerekir.",
    },
    {
      feature: "Sıkça Tercih Edilen Cihaz Tipi",
      primary: "Güçlü RIC ve BTE modelleri sıkça tercih edilir.",
      secondary: "Power BTE modelleri sıkça tercih edilir.",
    },
    {
      feature: "Kulak İçi (ITE) Uygunluğu",
      primary: "Kulak içi modeller genellikle daha sınırlı kalır, BTE öne çıkar.",
      secondary: "Kulak içi modeller bu derecede genellikle uygun değildir.",
    },
    {
      feature: "Kalabalık Ortam Performansı",
      primary: "Kalabalık ortamlarda zorluk daha da artabilir.",
      secondary: "Kalabalık ortamlarda destek olmadan iletişim oldukça zor olabilir.",
    },
    {
      feature: "Cihazlandırma Aciliyeti",
      primary: "Cihazlandırma önerisi genellikle güçlüdür.",
      secondary: "Cihazlandırma önerisi genellikle en üst düzeydedir.",
    },
    {
      feature: "Takip Sıklığı",
      primary: "Düzenli ve sık takip genellikle önerilir.",
      secondary: "Çok sık ve yakın takip genellikle önerilir.",
    },
    {
      feature: "Segment Eğilimi",
      primary: "Üst segment ve güçlü modeller sıkça değerlendirilir.",
      secondary: "En üst segment, en yüksek kapasiteli modeller değerlendirilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Yüksek seste bile anlamakta zorlanan kullanıcılar için değerlendirilir.",
      secondary: "Güçlü amplifikasyon olmadan konuşmaları neredeyse hiç duyamayan kullanıcılar için değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin işitme kaybınızın kesin derecesi ve size uygun çözüm, yalnızca bir odyometri testiyle belirlenebilir.",
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
