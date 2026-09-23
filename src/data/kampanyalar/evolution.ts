// "Kampanyadan Nasıl Yararlanırsınız?" section for the
// /blog/kampanyalar page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as the general campaign-inquiry
// process. No specific dates or figures — see hero.ts for the rationale.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kampanyalarEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜRECİN ADIMLARI",
  heading: "Kampanyadan Nasıl Yararlanırsınız?",
  intro: "Güncel bir kampanyadan yararlanmak için izleyebileceğiniz dört adımı bir araya getirdik.",
  stages: [
    {
      era: "Bizi Arayın veya Yazın",
      whatItBrought: "Telefon veya WhatsApp üzerinden bize ulaşarak güncel kampanyalarımızı sorabilirsiniz.",
      bestFor: "Sürecin ilk adımı",
      families: ["İlk İletişim"],
    },
    {
      era: "Uygunluğunuzun Değerlendirilmesi",
      whatItBrought: "İlgilendiğiniz kampanyanın şartlarını karşılayıp karşılamadığınız birlikte değerlendirilir.",
      bestFor: "Uygunluk kontrolü",
      families: ["Değerlendirme"],
    },
    {
      era: "Kampanya Şartlarının Paylaşılması",
      whatItBrought: "Kampanyanın kapsamı, süresi ve şartları size açık bir şekilde anlatılır.",
      bestFor: "Şeffaf bilgilendirme",
      families: ["Kampanya Detayları"],
    },
    {
      era: "Randevunuzun Planlanması",
      whatItBrought: "Kampanyadan yararlanmak için size uygun bir randevu zamanı belirlenir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Randevu"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
