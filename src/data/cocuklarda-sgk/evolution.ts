// "Çocuklarda Süreç Nasıl İşler?" section for the /sgk/cocuklarda-sgk
// page. Reuses the shared BrandPageTechEvolution component in its
// original "stage" sense (era / what it brought / who it's for / tags)
// — repurposed here as the pediatric process sequence, from newborn
// screening to ongoing follow-up.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cocuklardaSgkEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜRECİN ADIMLARI",
  heading: "Çocuklarda Süreç Nasıl İşler?",
  intro: "Yenidoğan taramasından cihaz sonrası takibe kadar izlenen beş adımı bir araya getirdik.",
  stages: [
    {
      era: "Yenidoğan İşitme Taraması",
      whatItBrought: "Doğumdan kısa süre sonra yapılan tarama, olası bir işitme kaybının erken fark edilmesini sağlar.",
      bestFor: "Erken fark etme",
      families: ["Yenidoğan Taraması"],
    },
    {
      era: "Pediatrik Odyolojik Değerlendirme",
      whatItBrought: "Şüpheli tarama sonucu sonrasında, çocuğun yaşına uygun yöntemlerle detaylı değerlendirme yapılır.",
      bestFor: "Tanının netleştirilmesi",
      families: ["Pediatrik Değerlendirme"],
    },
    {
      era: "Sağlık Kurulu (Heyet) Raporu",
      whatItBrought: "Değerlendirme sonuçlarına göre, çocuk için sağlık kurulu raporu düzenlenir.",
      bestFor: "Rapor süreci",
      families: ["Heyet Raporu"],
    },
    {
      era: "Cihaz Uygulaması ve Aile Eğitimi",
      whatItBrought: "Cihaz çocuğa uygulanır ve aileye cihazın günlük kullanımı hakkında eğitim verilir.",
      bestFor: "Cihaz uygulaması",
      families: ["Aile Eğitimi"],
    },
    {
      era: "Gelişim ve Okul Dönemi Takibi",
      whatItBrought: "Cihaz sonrası dil, konuşma ve işitsel gelişim düzenli aralıklarla takip edilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Gelişim Takibi"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
