// "Technology Evolution" content for the A&M brand page (/markalar/am).
// Renders through the shared BrandPageTechEvolution component. Editorial,
// not a technical platform-name table. "XTM" serisi ve P4/P6/P8/P12/A4
// isimleri, kaynak ürün fotoğrafları ve bağımsız distribütör sayfaları
// üzerinden doğrulanmıştır.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const amPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "A&M Ürün Hattı Nasıl Yapılandırılıyor?",
  intro: "Platform isimlerini ezberlemenize gerek yok — hangi serinin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Üst Segment (XTM P12 / P8)",
      whatItBrought: "Orta ve ileri derece işitme kayıpları için daha geniş amplifikasyon aralığı.",
      bestFor: "Daha yüksek güç ihtiyacı olan kullanıcılar",
      families: ["XTM P12", "XTM P8"],
    },
    {
      era: "Giriş Segmenti (XTM P6 / P4)",
      whatItBrought: "Hafif ve orta derece kayıplar için temel amplifikasyon çözümü.",
      bestFor: "İlk kez cihaz kullanacak veya temel ihtiyacı olan kullanıcılar",
      families: ["XTM P6", "XTM P4"],
    },
    {
      era: "Kişiye Özel Üretim (XTM A4)",
      whatItBrought: "Kulak kanalına özel üretilen, kulak içi yerleşimli seçenek.",
      bestFor: "Kulak içi estetiği önceliklendiren kullanıcılar",
      families: ["XTM A4"],
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
};
