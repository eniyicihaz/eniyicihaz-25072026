// "Hafif İşitme Kaybı vs Orta Derece İşitme Kaybı" comparison table for
// the /ihtiyaciniza-gore/hafif-isitme-kaybi page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Unlike those pages (feature A vs feature B), this
// table compares two adjacent points on the same clinical scale — framed
// as neutral, general tendencies — never "kesinlikle daha iyi"; the
// closing note reinforces that the real answer needs an audiometric
// evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const hafifIsitmeKaybiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Hafif İşitme Kaybı ile Orta Derece İşitme Kaybı Karşılaştırması",
  intro: "İki derece arasındaki genel eğilim farklarını aşağıdaki tabloda özetledik. Sizin durumunuz, yalnızca bir odyometri testiyle netleşir.",
  primaryLabel: "Hafif İşitme Kaybı",
  secondaryLabel: "Orta Derece İşitme Kaybı",
  rows: [
    {
      feature: "İşitme Eşiği Aralığı",
      primary: "26-40 dB aralığındadır.",
      secondary: "41-55 dB aralığındadır.",
    },
    {
      feature: "Günlük Yaşama Etkisi",
      primary: "Genellikle fısıltı ve uzak sesleri etkiler, normal konuşmaların çoğu etkilenmez.",
      secondary: "Normal ses tonundaki konuşmaları takip etmekte belirgin zorluk yaşanabilir.",
    },
    {
      feature: "Gerekli Amplifikasyon Düzeyi",
      primary: "Genellikle düşük-orta düzey amplifikasyon yeterli olur.",
      secondary: "Orta düzey amplifikasyon gerekir.",
    },
    {
      feature: "Sıkça Tercih Edilen Cihaz Tipi",
      primary: "İnce RIC ve kulak içi modeller sıkça tercih edilir.",
      secondary: "Standart RIC ve BTE modelleri sıkça tercih edilir.",
    },
    {
      feature: "Açık Kulak Kalıbı Kullanımı",
      primary: "Açık kulak kalıbı sıkça uygun olabilir.",
      secondary: "Kalıp tipi kayıp derecesine göre değişebilir.",
    },
    {
      feature: "Kalabalık Ortam Performansı",
      primary: "Kalabalık ortamlarda genellikle hafif düzeyde zorluk yaşanır.",
      secondary: "Kalabalık ortamlarda daha belirgin zorluk yaşanabilir.",
    },
    {
      feature: "Cihazlandırma Aciliyeti",
      primary: "Erken cihazlandırma önerilir; aciliyet genellikle daha düşüktür.",
      secondary: "Cihazlandırma önerisi genellikle daha belirgindir.",
    },
    {
      feature: "Takip Sıklığı",
      primary: "Standart periyodik takip yeterli olabilir.",
      secondary: "Daha yakın takip önerilebilir.",
    },
    {
      feature: "Segment Eğilimi",
      primary: "Genellikle temel-orta segment modeller yeterli olabilir.",
      secondary: "Orta-üst segment modeller sıkça değerlendirilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Fısıltı ve uzak sesleri duymakta güçlük yaşayan kullanıcılar için değerlendirilir.",
      secondary: "Normal ses tonundaki konuşmaları takip etmekte zorlanan kullanıcılar için değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin işitme kaybınızın kesin derecesi ve size uygun çözüm, yalnızca bir odyometri testiyle belirlenebilir.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
