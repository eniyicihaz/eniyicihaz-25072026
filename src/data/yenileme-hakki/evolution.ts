// "Yenileme Süreci Nasıl İşler?" section for the /sgk/yenileme-hakki
// page. Reuses the shared BrandPageTechEvolution component in its
// original "stage" sense (era / what it brought / who it's for / tags)
// — repurposed here as the renewal process sequence. Deliberately
// contains no specific renewal period figure — see hero.ts for the
// accuracy rationale.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const yenilemeHakkiEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜRECİN ADIMLARI",
  heading: "Yenileme Süreci Nasıl İşler?",
  intro: "Mevcut cihazın değerlendirilmesinden yeni cihazın uygulanmasına kadar izlenen beş adımı bir araya getirdik.",
  stages: [
    {
      era: "Mevcut Cihazın Değerlendirilmesi",
      whatItBrought: "Cihazınızın durumu ve kullanım süresi gözden geçirilerek yenileme uygunluğu değerlendirilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Cihaz Değerlendirmesi"],
    },
    {
      era: "Yenileme Uygunluğunun Kontrolü",
      whatItBrought: "Standart yenileme süresinin dolup dolmadığı veya erken yenileme gerekçesi olup olmadığı kontrol edilir.",
      bestFor: "Uygunluk kontrolü",
      families: ["Uygunluk Kontrolü"],
    },
    {
      era: "Güncel Rapor ve Reçetenin Alınması",
      whatItBrought: "Yenileme başvurusu için güncel bir sağlık kurulu raporu ve reçete düzenlenir.",
      bestFor: "Belge yenileme",
      families: ["Güncel Rapor"],
    },
    {
      era: "SGK Yenileme Başvurusu",
      whatItBrought: "Güncellenen belgelerle birlikte SGK'ya yenileme başvurusu yapılır.",
      bestFor: "Başvuru süreci",
      families: ["SGK Başvurusu"],
    },
    {
      era: "Yeni Cihazın Seçimi ve Uygulanması",
      whatItBrought: "Onay sonrasında, güncel ihtiyaçlarınıza uygun yeni cihaz seçilir ve uygulanır.",
      bestFor: "Sürecin tamamlanması",
      families: ["Cihaz Uygulaması"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
