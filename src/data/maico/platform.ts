// "Technology Evolution" content for the Maico brand page
// (/markalar/maico). Renders through the shared BrandPageTechEvolution
// component. Editorial, not a technical platform-name table. MAICO'nun
// işitme cihazlarına özgü, bağımsız kaynaklarla doğrulanmış spesifik
// platform/aile isimleri bu proje kapsamında bulunamadığından, bu bölüm
// yerleşim kategorilerine göre yapılandırılmıştır — uydurma isim
// kullanılmamıştır.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const maicoPlatform: BrandPageTechEvolutionContent = {
  badge: "ÜRÜN HATTI",
  heading: "MAICO Ürün Hattı Nasıl Yapılandırılıyor?",
  intro: "Model isimlerini ezberlemenize gerek yok — hangi yerleşim kategorisinin kime hitap ettiğini aşağıda özetledik.",
  stages: [
    {
      era: "Bluetooth Serisi",
      whatItBrought: "Akıllı telefonlarla kablosuz bağlantı kurabilen, güncel bağlantı özellikleri.",
      bestFor: "Bağlantı özelliklerini önceliklendiren kullanıcılar",
      families: ["MAICO Bluetooth Serisi"],
    },
    {
      era: "Kulak Arkası Serisi",
      whatItBrought: "Farklı işitme kaybı derecelerine uygun, geleneksel ve kanıtlanmış bir yerleşim.",
      bestFor: "Geniş güç aralığı arayan kullanıcılar",
      families: ["MAICO Kulak Arkası Serisi"],
    },
    {
      era: "Kulak İçi Serisi",
      whatItBrought: "Kulak kanalına özel üretilen, sade bir görünüm sunan yerleşim.",
      bestFor: "Kulak içi estetiği önceliklendirenler",
      families: ["MAICO Kulak İçi Serisi"],
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
};
