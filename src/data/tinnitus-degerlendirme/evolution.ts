// "Tinnitus Değerlendirmesi Nasıl Yapılır?" section for the
// /degerlendirme/tinnitus-degerlendirme page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of evaluation steps, same technique used on Ücretsiz
// İşitme Testi, Odyometri and Timpanometri (Çocuk İşitme Testi used the
// slot differently, as an age-based method ladder, since pediatric
// testing genuinely changes by developmental stage — this page returns
// to the process-step usage since tinnitus evaluation follows one
// consistent sequence regardless of age).

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const tinnitusDegerlendirmeEvolution: BrandPageTechEvolutionContent = {
  badge: "DEĞERLENDİRME ADIMLARI",
  heading: "Tinnitus Değerlendirmesi Nasıl Yapılır?",
  intro: "Öykü almadan yönlendirme aşamasına kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Öykü Alma",
      whatItBrought: "Çınlamanın ne zaman başladığı, tetikleyicileri, şiddeti ve eşlik eden şikayetler değerlendirilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Detaylı Öykü"],
    },
    {
      era: "Odyometrik Değerlendirme",
      whatItBrought: "İşitme kaybı birlikteliğini araştırmak için standart bir işitme testi uygulanır.",
      bestFor: "İşitme durumunun taranması",
      families: ["Odyometri"],
    },
    {
      era: "Tinnitus Eşleştirme",
      whatItBrought: "Duyduğunuz çınlamanın perdesi ve şiddeti, size özel bir referansla ölçülür.",
      bestFor: "Kişiye özel ölçüm",
      families: ["Perde ve Şiddet Eşleştirmesi"],
    },
    {
      era: "Anket Değerlendirmesi",
      whatItBrought: "THI gibi bir anketle, tinnitus'un günlük yaşama etkisi objektif olarak ölçülür.",
      bestFor: "Etkinin ölçülmesi",
      families: ["THI Anketi"],
    },
    {
      era: "Sonuçların Paylaşılması ve Yönlendirme",
      whatItBrought: "Bulgular sizinle birlikte gözden geçirilir; gerekirse bir KBB yönlendirmesi yapılır.",
      bestFor: "Sonraki adımların belirlenmesi",
      families: ["Yönlendirme"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
