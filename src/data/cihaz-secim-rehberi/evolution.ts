// "Seçim Sürecinde Değerlendirilecek 5 Faktör" section for the
// /rehberler/cihaz-secim-rehberi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as a
// five-factor decision framework rather than a chronological process,
// same flexible reuse technique used throughout this session.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cihazSecimRehberiEvolution: BrandPageTechEvolutionContent = {
  badge: "KARAR ÇERÇEVESİ",
  heading: "Seçim Sürecinde Değerlendirilecek 5 Faktör",
  intro: "Doğru cihazı bulmak için sırayla değerlendirebileceğiniz beş temel faktörü bir araya getirdik.",
  stages: [
    {
      era: "İşitme Kaybınızın Derece ve Türü",
      whatItBrought: "Cihaz seçiminin temelini, işitme testinizle belirlenen derece ve tür oluşturur.",
      bestFor: "Sürecin başlangıç noktası",
      families: ["Derece ve Tür"],
    },
    {
      era: "Yaşam Tarzınız ve Kullanım Ortamlarınız",
      whatItBrought: "Sessiz bir ofiste mi, yoksa kalabalık ve gürültülü ortamlarda mı vakit geçirdiğiniz, uygun özellik setini şekillendirir.",
      bestFor: "Günlük kullanım uyumu",
      families: ["Yaşam Tarzı"],
    },
    {
      era: "Bütçeniz ve SGK Desteği",
      whatItBrought: "Bütçeniz ve SGK desteğinden yararlanıp yararlanamayacağınız, değerlendirilecek segmenti belirler.",
      bestFor: "Finansal planlama",
      families: ["Bütçe ve SGK"],
    },
    {
      era: "Form Faktörü Tercihiniz",
      whatItBrought: "Kulak arkası (BTE) veya kulak içi (ITE) gibi yerleşim tercihleri, konfor ve estetik beklentinizi etkiler.",
      bestFor: "Fiziksel tercih",
      families: ["Form Faktörü"],
    },
    {
      era: "Bağlantı ve Ek Özellik İhtiyaçlarınız",
      whatItBrought: "Bluetooth bağlantısı, şarjlı sistem veya uzaktan destek gibi ek özellik ihtiyaçlarınız son aşamada netleştirilir.",
      bestFor: "Son inceltme",
      families: ["Bağlantı ve Özellikler"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
