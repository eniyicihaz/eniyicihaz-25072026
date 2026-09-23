// "Markaların Sunduğu Seri Seviyeleri" section for the /segmentler/
// premium-seri page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — here as a genuine three-rung tier ladder (Ekonomik -> Standart
// -> Premium), the first real cross-linked ladder in the Segmentler
// series. "bestFor" on the Premium rung reads "Bu sayfanın konusu",
// matching the convention used by the İhtiyacınıza Göre degree-ladder
// pages earlier this session. Only three stages exist here (not four)
// because that's the real number of tiers most brands offer — a fourth
// stage isn't invented just to match the visual rhythm of other pages'
// four-stage ladders.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const premiumSeriEvolution: BrandPageTechEvolutionContent = {
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
      bestFor: "Genel günlük kullanım ihtiyaçları",
      families: ["Standart Seri Modeller"],
    },
    {
      era: "Premium Seri",
      whatItBrought: "Markanın sunduğu en gelişmiş teknolojiyi, en kapsamlı bağlantı özelliklerini ve en yüksek kişiselleştirme imkânını bir araya getirir.",
      bestFor: "Bu sayfanın konusu",
      families: ["Premium Seri Modeller"],
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
