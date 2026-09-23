// "İlk Gün Adımları Nelerdir?" section for the /rehberler/
// ilk-kullanim-rehberi page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as a practical first-day step
// sequence, same flexible reuse technique used throughout this
// session.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ilkKullanimRehberiEvolution: BrandPageTechEvolutionContent = {
  badge: "İLK GÜN ADIMLARI",
  heading: "İlk Gün Adımları Nelerdir?",
  intro: "Cihazınızı tanımaktan günlük rutine geçmeye kadar izleyebileceğiniz beş adımı bir araya getirdik.",
  stages: [
    {
      era: "Cihazı Tanıma",
      whatItBrought: "Cihazınızın parçalarını ve düğmelerinin yerini tanıyarak başlarsınız.",
      bestFor: "Sürecin ilk adımı",
      families: ["Cihazı Tanıma"],
    },
    {
      era: "Takma ve Çıkarma",
      whatItBrought: "Cihazı doğru şekilde takma ve çıkarma hareketini birkaç kez pratik edersiniz.",
      bestFor: "Fiziksel alışkanlık",
      families: ["Takma ve Çıkarma"],
    },
    {
      era: "Temel Kontroller",
      whatItBrought: "Ses seviyesi ve program değişimi gibi temel kontrolleri denersiniz.",
      bestFor: "Günlük kullanım",
      families: ["Temel Kontroller"],
    },
    {
      era: "İlk Gün Kullanım Süresi",
      whatItBrought: "İlk gün için önerilen süre boyunca, görece sakin bir ortamda cihazınızı kullanırsınız.",
      bestFor: "Kademeli alışma",
      families: ["İlk Gün Kullanımı"],
    },
    {
      era: "Günlük Rutine Geçiş",
      whatItBrought: "Süreyi kademeli olarak artırarak cihazınızı günlük rutininizin bir parçası haline getirirsiniz.",
      bestFor: "Sürecin tamamlanması",
      families: ["Günlük Rutin"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
