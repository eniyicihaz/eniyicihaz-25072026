// "Rapor Süreci Nasıl İşler?" section for the /sgk/rapor-sureci page.
// Reuses the shared BrandPageTechEvolution component in its original
// "stage" sense (era / what it brought / who it's for / tags) —
// repurposed here as the five-step report process sequence.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const raporSureciEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜRECİN ADIMLARI",
  heading: "Rapor Süreci Nasıl İşler?",
  intro: "KBB muayenesinden raporun onaylanmasına kadar izlenen beş adımı bir araya getirdik.",
  stages: [
    {
      era: "KBB Muayenesi ve Sevk",
      whatItBrought: "Süreç, bir KBB (Kulak Burun Boğaz) uzmanı tarafından yapılan muayeneyle başlar.",
      bestFor: "Sürecin ilk adımı",
      families: ["KBB Muayenesi"],
    },
    {
      era: "İşitme Testlerinin Tamamlanması",
      whatItBrought: "Odyometri ve ilgili işitme testleri, işitme kaybınızın derecesini ve tipini belirlemek için uygulanır.",
      bestFor: "İşitme kaybının belgelenmesi",
      families: ["İşitme Testleri"],
    },
    {
      era: "Sağlık Kurulu (Heyet) Değerlendirmesi",
      whatItBrought: "Test sonuçları, hastanenin sağlık kurulu tarafından değerlendirilir ve rapor düzenlenir.",
      bestFor: "Heyet değerlendirmesi",
      families: ["Heyet Raporu"],
    },
    {
      era: "Reçetenin Düzenlenmesi",
      whatItBrought: "Rapora ek olarak, uzman hekim tarafından işitme cihazı reçetesi düzenlenir.",
      bestFor: "Reçete süreci",
      families: ["Reçete"],
    },
    {
      era: "Belgelerin SGK Sistemine İşlenmesi",
      whatItBrought: "Onaylanan rapor ve reçete SGK sistemine işlenir; bu noktadan sonra SGK başvurunuzu tamamlayabilirsiniz.",
      bestFor: "Sürecin tamamlanması",
      families: ["SGK Başvurusu"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
