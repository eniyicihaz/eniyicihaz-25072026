// "Technology Evolution" content for the Coselgi brand page
// (/markalar/coselgi). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. "Mojo" and
// "Effect" are real, documented Coselgi product family names — verified
// via coselgi.com.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const coselgiPlatform: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİ EVRİMİ",
  heading: "Coselgi Ürün Ailesi Nasıl Yapılandırılıyor?",
  intro: "Platform isimlerini ezberlemenize gerek yok — hangi ailenin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Effect Ailesi",
      whatItBrought: "Acoustic Environment Technology destekli, geniş yerleşim seçenekleri sunan ana ürün ailesi.",
      bestFor: "Farklı yerleşim seçenekleri arayan kullanıcılar",
      families: ["Effect", "Effect ITE"],
    },
    {
      era: "Mojo Ailesi",
      whatItBrought: "Günlük kullanım için pratik, şarjlı bir çözüm sunan ürün ailesi.",
      bestFor: "Pratik ve dengeli bir günlük kullanım arayanlar",
      families: ["Mojo"],
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
};
