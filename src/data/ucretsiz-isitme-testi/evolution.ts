// "Ücretsiz İşitme Testi Süreci Nasıl İşler?" section for the
// /degerlendirme/ucretsiz-isitme-testi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of appointment steps, same technique used throughout the
// "Neden Orijinal" series for process walkthroughs.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ucretsizIsitmeTestiEvolution: BrandPageTechEvolutionContent = {
  badge: "TEST SÜRECİ",
  heading: "Ücretsiz İşitme Testi Süreci Nasıl İşler?",
  intro: "Randevunuzdan sonuç değerlendirmesine kadar izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Randevu ve Ön Görüşme",
      whatItBrought: "Randevunuzda kısa bir ön görüşme ile genel sağlık durumunuz ve şikayetleriniz dinlenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Ön Görüşme"],
    },
    {
      era: "İşitme Testi (Odyometri)",
      whatItBrought: "Farklı frekans ve şiddetteki seslere verdiğiniz tepkiler bir odyometrist tarafından ölçülür.",
      bestFor: "Temel işitme değerlendirmesi",
      families: ["Odyometri"],
    },
    {
      era: "Sonuçların Değerlendirilmesi",
      whatItBrought: "Test sonuçları bir odyogram üzerinde kaydedilir ve sizinle birlikte yorumlanır.",
      bestFor: "Anlaşılır bir sonuç raporu",
      families: ["Odyogram Değerlendirmesi"],
    },
    {
      era: "Öneri ve Yönlendirme",
      whatItBrought: "Sonuçlara göre, gerekirse cihaz önerisi veya bir KBB uzmanına yönlendirme yapılır.",
      bestFor: "Sonraki adımların belirlenmesi",
      families: ["Yönlendirme"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
