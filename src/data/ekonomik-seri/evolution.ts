// "Markaların Sunduğu Seri Seviyeleri" section for the /segmentler/
// ekonomik-seri page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — the same genuine three-rung tier ladder used on Premium Seri
// and Standart Seri, with "bestFor" swapped to "Bu sayfanın konusu" on
// the Ekonomik rung, matching the convention used by the İhtiyacınıza
// Göre degree-ladder pages earlier this session.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ekonomikSeriEvolution: BrandPageTechEvolutionContent = {
  badge: "SERİ KARŞILAŞTIRMASI",
  heading: "Markaların Sunduğu Seri Seviyeleri",
  intro: "Çoğu marka, ürün ailesini üç temel seri seviyesinde sunar; bu seviyeler arasındaki genel farkları bir araya getirdik.",
  stages: [
    {
      era: "Ekonomik Seri",
      whatItBrought: "Temel işitme ihtiyaçlarını karşılayan, uygun fiyatlı ve sade bir seçenektir.",
      bestFor: "Bu sayfanın konusu",
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
      bestFor: "En gelişmiş teknoloji ve tam bağlantı ihtiyacı olan kullanıcılar",
      families: ["Premium Seri Modeller"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
