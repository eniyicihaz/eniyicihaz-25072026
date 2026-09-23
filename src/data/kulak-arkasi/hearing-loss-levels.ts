// "İşitme Kaybı Seviyelerine Göre Kullanımı" section for the
// /isitme-cihazlari/kulak-arkasi-bte page. Reuses the shared
// BrandPageTechEvolution component — its "stage" shape (era / what it
// brought / who it's for / tags) maps directly onto a progression of
// hearing-loss severity levels instead of technology generations, so no
// new component is needed.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kulakArkasiHearingLossLevels: BrandPageTechEvolutionContent = {
  badge: "İŞİTME KAYBI SEVİYELERİNE GÖRE",
  heading: "BTE, İşitme Kaybı Derecesine Göre Nasıl Kullanılır?",
  intro: "Kayıp derecesi arttıkça BTE'nin diğer cihaz tiplerine göre avantajı da genellikle artar.",
  stages: [
    {
      era: "Hafif Derece (26–40 dB)",
      whatItBrought: "Bu düzeydeki kayıplarda BTE, genellikle ince RIC modelleriyle göze çok az batan, konforlu bir seçenek olarak değerlendirilir.",
      bestFor: "Günlük konuşmaları takip etmekte hafif zorluk yaşayan kullanıcılar",
      families: ["İnce RIC", "Açık Kulak Kalıbı"],
    },
    {
      era: "Orta Derece (41–55 dB)",
      whatItBrought: "Orta derece kayıplarda BTE; konfor ile yeterli ses gücünü bir arada sunan dengeli bir seçenek olarak öne çıkar.",
      bestFor: "Normal ses tonundaki konuşmaları takip etmekte belirgin zorluk yaşayanlar",
      families: ["Standart RIC / BTE"],
    },
    {
      era: "İleri Derece (56–70 dB)",
      whatItBrought: "Bu seviyede daha güçlü amplifikasyon gerektiğinden BTE, diğer cihaz tiplerine kıyasla daha sık tercih edilir.",
      bestFor: "Yüksek sesle konuşulsa bile anlamakta zorlanan kullanıcılar",
      families: ["Power BTE"],
    },
    {
      era: "Çok İleri Derece (71 dB ve üzeri)",
      whatItBrought: "Çok ileri derece kayıplarda güçlü amplifikasyon ve geri besleme (ıslık) kontrolü gerektiğinden BTE, sıklıkla tercih edilen cihaz tipidir.",
      bestFor: "Yüksek sesle bağırarak konuşulsa bile duymakta zorlanan kullanıcılar",
      families: ["Süper Power BTE"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
