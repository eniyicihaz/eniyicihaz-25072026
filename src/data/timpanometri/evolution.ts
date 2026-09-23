// "Timpanometri Testi Nasıl Uygulanır?" section for the /degerlendirme/
// timpanometri page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — repurposed here as an ordered set of test steps, same
// technique used on the two prior pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const timpanometriEvolution: BrandPageTechEvolutionContent = {
  badge: "TEST ADIMLARI",
  heading: "Timpanometri Testi Nasıl Uygulanır?",
  intro: "Kulak muayenesinden timpanogram değerlendirmesine kadar izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Kulak Muayenesi",
      whatItBrought: "Test öncesinde kulak kanalı otoskop ile kontrol edilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Otoskopi"],
    },
    {
      era: "Prob Yerleştirme",
      whatItBrought: "Kulak kanalına hava geçirmez bir şekilde küçük bir prob yerleştirilir.",
      bestFor: "Ölçüme hazırlık",
      families: ["Prob Yerleştirme"],
    },
    {
      era: "Basınç Değişimi ve Ölçüm",
      whatItBrought: "Prob, kulak kanalındaki hava basıncını değiştirerek kulak zarının tepkisini ölçer.",
      bestFor: "Temel ölçüm",
      families: ["Basınç Ölçümü"],
    },
    {
      era: "Timpanogram Değerlendirmesi",
      whatItBrought: "Sonuçlar bir timpanogram üzerinde kaydedilir ve sizinle birlikte yorumlanır.",
      bestFor: "Sonuçların anlaşılır hâle getirilmesi",
      families: ["Timpanogram Yorumlama"],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
