// "Markaların Sunduğu Seri Seviyeleri" section for the /segmentler/
// standart-seri page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — the same genuine three-rung tier ladder used on Premium Seri,
// with "bestFor" swapped to "Bu sayfanın konusu" on the Standart rung,
// matching the convention used by the İhtiyacınıza Göre degree-ladder
// pages earlier this session.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const standartSeriEvolution: BrandPageTechEvolutionContent = {
  badge: "SERİ KARŞILAŞTIRMASI",
  heading: "Markaların Sunduğu Seri Seviyeleri",
  intro: "Çoğu marka, ürün ailesini üç temel seri seviyesinde sunar; bu seviyeler arasındaki genel farkları bir araya getirdik.",
  stages: [
    {
      era: "Ekonomik Seri",
      whatItBrought: "Temel işitme ihtiyaçlarını karşılayan, uygun fiyatlı ve sade bir seçenektir.",
      bestFor: "Temel ihtiyaçlar ve sınırlı bütçe",
      families: ["Ekonomik Seri Modeller"],
    },
    {
      era: "Standart Seri",
      whatItBrought: "Günlük kullanım için dengeli bir özellik seti ve fiyat/performans oranı sunar.",
      bestFor: "Bu sayfanın konusu",
      families: ["Standart Seri Modeller"],
    },
    {
      era: "Premium Seri",
      whatItBrought: "Markanın sunduğu en gelişmiş teknolojiyi, en kapsamlı bağlantı özelliklerini ve en yüksek kişiselleştirme imkânını bir araya getirir.",
      bestFor: "En gelişmiş teknoloji ve tam bağlantı ihtiyacı olan kullanıcılar",
      families: ["Premium Seri Modeller"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
