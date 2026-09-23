// "Odyometri Testi Adım Adım Nasıl İşler?" section for the
// /degerlendirme/odyometri page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as an ordered set of test steps,
// same technique used on Ücretsiz İşitme Testi.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const odyometriEvolution: BrandPageTechEvolutionContent = {
  badge: "TEST ADIMLARI",
  heading: "Odyometri Testi Adım Adım Nasıl İşler?",
  intro: "Kulak muayenesinden odyogram değerlendirmesine kadar izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Kulak Muayenesi",
      whatItBrought: "Test öncesinde kulak kanalı ve kulak zarı otoskop ile kontrol edilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Otoskopi"],
    },
    {
      era: "Hava Yolu İletimi Testi",
      whatItBrought: "Kulaklık aracılığıyla farklı frekanslarda sesler verilir ve duyabildiğiniz en düşük şiddet kaydedilir.",
      bestFor: "Genel işitme eşiği ölçümü",
      families: ["Hava Yolu Testi"],
    },
    {
      era: "Kemik Yolu İletimi Testi",
      whatItBrought: "Kafatası arkasına yerleştirilen bir cihazla titreşimler verilerek iç kulağın doğrudan tepkisi ölçülür.",
      bestFor: "İşitme kaybı türünün belirlenmesi",
      families: ["Kemik Yolu Testi"],
    },
    {
      era: "Odyogram Değerlendirmesi",
      whatItBrought: "Tüm sonuçlar bir odyogram üzerinde birleştirilir ve sizinle birlikte yorumlanır.",
      bestFor: "Sonuçların anlaşılır hâle getirilmesi",
      families: ["Odyogram Yorumlama"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
