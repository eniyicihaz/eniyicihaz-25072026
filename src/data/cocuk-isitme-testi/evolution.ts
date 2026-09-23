// "Çocuklarda Yaşa Göre Hangi Test Yöntemleri Kullanılır?" section for
// the /degerlendirme/cocuk-isitme-testi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as a genuine
// age-based method ladder, distinct from the process-step usage on the
// three prior pages, since pediatric testing genuinely changes method
// by developmental stage rather than following one fixed procedure.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cocukIsitmeTestiEvolution: BrandPageTechEvolutionContent = {
  badge: "YAŞA GÖRE TEST YÖNTEMLERİ",
  heading: "Çocuklarda Yaşa Göre Hangi Test Yöntemleri Kullanılır?",
  intro: "Çocuğun yaşı ve gelişim düzeyi ilerledikçe kullanılan test yöntemleri de değişir; dört ana dönemi bir araya getirdik.",
  stages: [
    {
      era: "Yenidoğan Dönemi (0-1 Ay)",
      whatItBrought: "Otoakustik emisyon (OAE) gibi objektif yöntemlerle iç kulağın tepkisi ölçülür.",
      bestFor: "Doğum sonrası ilk tarama",
      families: ["Yenidoğan Taraması"],
    },
    {
      era: "Bebeklik Dönemi (0-2 Yaş)",
      whatItBrought: "Görsel pekiştirmeli odyometri gibi davranışsal yöntemlerle bebeğin seslere tepkisi gözlemlenir.",
      bestFor: "Erken bebeklik değerlendirmesi",
      families: ["Görsel Pekiştirmeli Odyometri"],
    },
    {
      era: "Erken Çocukluk Dönemi (2-5 Yaş)",
      whatItBrought: "Oyun odyometrisi ile çocuk, ses duyduğunda oyun tabanlı bir tepki vermeye teşvik edilir.",
      bestFor: "Okul öncesi dönem",
      families: ["Oyun Odyometrisi"],
    },
    {
      era: "Okul Çağı (5 Yaş ve Üzeri)",
      whatItBrought: "Standart odyometri yöntemleri, yetişkinlere benzer şekilde ancak çocuğa uygun bir dille uygulanır.",
      bestFor: "Okul çağı çocukları",
      families: ["Standart Odyometri"],
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
