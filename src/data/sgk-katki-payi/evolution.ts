// "Katkı Payı Nasıl Hesaplanır?" section for the /sgk/katki-payi page.
// Reuses the shared BrandPageTechEvolution component in its original
// "stage" sense (era / what it brought / who it's for / tags) —
// repurposed here as a conceptual calculation sequence. Deliberately
// contains NO specific TL figures — see hero.ts for the accuracy
// rationale; each stage explains the FACTOR, not the amount.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const sgkKatkiPayiEvolution: BrandPageTechEvolutionContent = {
  badge: "HESAPLAMA ADIMLARI",
  heading: "Katkı Payı Nasıl Hesaplanır?",
  intro: "Yaş grubunuzun belirlenmesinden kalan farkın hesaplanmasına kadar izlenen beş adımı bir araya getirdik.",
  stages: [
    {
      era: "Yaş Grubunuzun Belirlenmesi",
      whatItBrought: "SGK destek tutarı, yaş gruplarına göre farklılık gösterir; ilk adım yaş kategorinizin belirlenmesidir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Yaş Grubu"],
    },
    {
      era: "Çalışan / Emekli Durumunuzun Belirlenmesi",
      whatItBrought: "Aktif sigortalı veya emekli olmanız, uygulanacak destek tutarını etkiler.",
      bestFor: "Kategori belirleme",
      families: ["Çalışma Durumu"],
    },
    {
      era: "SGK Destek Tutarının Uygulanması",
      whatItBrought: "Yaş grubunuz ve çalışma durumunuza karşılık gelen SGK destek tutarı belirlenir.",
      bestFor: "Destek tutarının netleşmesi",
      families: ["Destek Tutarı"],
    },
    {
      era: "Cihaz Fiyatı ile Karşılaştırma",
      whatItBrought: "Seçtiğiniz cihazın fiyatı, belirlenen SGK destek tutarıyla karşılaştırılır.",
      bestFor: "Fiyat karşılaştırması",
      families: ["Fiyat Karşılaştırması"],
    },
    {
      era: "Kalan Farkın (Katkı Payının) Hesaplanması",
      whatItBrought: "Cihaz fiyatı ile SGK destek tutarı arasındaki fark, sizin ödeyeceğiniz katkı payını oluşturur.",
      bestFor: "Sürecin tamamlanması",
      families: ["Katkı Payı"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
