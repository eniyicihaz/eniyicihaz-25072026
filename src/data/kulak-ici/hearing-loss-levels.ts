// "Hangi İşitme Kaybı Seviyelerinde Kullanılır?" section for the
// /isitme-cihazlari/kulak-ici-ite page. Reuses the shared
// BrandPageTechEvolution component — its "stage" shape (era / what it
// brought / who it's for / tags) maps directly onto a progression of
// hearing-loss severity levels, same technique the BTE master page uses.
// Only 3 stages (not BTE's 4): ITE's realistic range tops out around
// orta-ileri derece — çok ileri derece kayıplarda kulak arkası (BTE)
// cihazlar sıklıkla tercih edilir (see comparison.ts row "Uygun İşitme
// Kaybı Aralığı"), so a 4th "çok ileri derece" stage would misrepresent
// ITE's actual scope.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kulakIciHearingLossLevels: BrandPageTechEvolutionContent = {
  badge: "İŞİTME KAYBI SEVİYELERİNE GÖRE",
  heading: "ITE, İşitme Kaybı Derecesine Göre Nasıl Kullanılır?",
  intro: "Kayıp derecesi arttıkça, kulak içi ailesinin hangi alt tipinin değerlendirilebileceği de genellikle değişir.",
  stages: [
    {
      era: "Hafif Derece (26–40 dB)",
      whatItBrought: "Bu düzeydeki kayıplarda, özellikle CIC ve IIC gibi en küçük kulak içi alt tipleri, oldukça göze az batan bir seçenek olarak değerlendirilir.",
      bestFor: "Günlük konuşmaları takip etmekte hafif zorluk yaşayan, görünürlüğü öncelik gören kullanıcılar",
      families: ["CIC", "IIC"],
    },
    {
      era: "Orta Derece (41–55 dB)",
      whatItBrought: "Orta derece kayıplarda ITC ve tam kabuk ITE modelleri, yeterli ses gücü ile konforu bir arada sunabilir.",
      bestFor: "Normal ses tonundaki konuşmaları takip etmekte belirgin zorluk yaşayanlar",
      families: ["ITC", "ITE"],
    },
    {
      era: "Orta-İleri Derece (56–70 dB)",
      whatItBrought: "Bu seviyede tam kabuk ITE modelleri genellikle yeterli amplifikasyonu sağlayabilir; çok ileri derece kayıplarda ise daha güçlü amplifikasyon sunan kulak arkası (BTE) cihazlar sıklıkla tercih edilir.",
      bestFor: "Yüksek sesle konuşulduğunda anlayabilen, orta-ileri düzeyde güç ihtiyacı olan kullanıcılar",
      families: ["Tam Kabuk ITE"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
