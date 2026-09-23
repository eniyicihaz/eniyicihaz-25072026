// "Kolay Değişim Süreci Nasıl İşler?" section for the /neden-orijinal/
// kolay-degisim page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — repurposed here, same technique used on the five prior pages,
// as an ordered set of exchange-process steps rather than a severity
// ladder or a different process for another subject.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kolayDegisimEvolution: BrandPageTechEvolutionContent = {
  badge: "DEĞİŞİM SÜRECİ",
  heading: "Kolay Değişim Süreci Nasıl İşler?",
  intro: "Talebinizden yeni cihazın teslimine kadar izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Talep ve Değerlendirme",
      whatItBrought: "Değişim talebiniz alınır ve cihazın durumu ile değişim koşulları değerlendirilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Talep Değerlendirmesi"],
    },
    {
      era: "Uygun Alternatifin Belirlenmesi",
      whatItBrought: "İhtiyacınıza uygun alternatif model veya çözüm, uzman desteğiyle birlikte belirlenir.",
      bestFor: "Doğru alternatif seçimi",
      families: ["Alternatif Belirleme"],
    },
    {
      era: "Fiyat Farkı ve Koşulların Netleştirilmesi",
      whatItBrought: "Varsa fiyat farkı ve değişim koşulları netleştirilir.",
      bestFor: "Şeffaf bilgilendirme",
      families: ["Koşul Netleştirme"],
    },
    {
      era: "Değişimin Tamamlanması",
      whatItBrought: "Yeni cihaz teslim edilir ve gerekli ayarlamalar yapılır.",
      bestFor: "Sürecin tamamlanması",
      families: ["Teslim ve Ayar"],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
