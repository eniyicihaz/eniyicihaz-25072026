// "Cihaz Ömrünü Uzatmak İçin İzlenecek Adımlar" section for the
// /neden-orijinal/uzun-omurlu-cihazlar page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique used on Güvenilir Teknoloji, as an ordered set of
// maintenance steps rather than a severity ladder or feature-priority
// list.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const uzunOmurluCihazlarEvolution: BrandPageTechEvolutionContent = {
  badge: "ÖMÜR UZATMA ADIMLARI",
  heading: "Cihaz Ömrünü Uzatmak İçin İzlenecek Adımlar",
  intro: "Cihazınızın ömrünü uzatmak için izleyebileceğiniz dört adımlık bir bakım sürecini bir araya getirdik.",
  stages: [
    {
      era: "Günlük Temizlik",
      whatItBrought: "Cihazın günlük olarak kuru bir bezle silinmesi, nem ve kir birikimini azaltmaya yardımcı olur.",
      bestFor: "Her gün uygulanabilecek temel adım",
      families: ["Günlük Bakım"],
    },
    {
      era: "Periyodik Profesyonel Kontrol",
      whatItBrought: "Düzenli aralıklarla yapılan profesyonel kontroller, küçük sorunları büyümeden tespit etmeye yardımcı olur.",
      bestFor: "3-6 ayda bir önerilen kontrol",
      families: ["Periyodik Kontrol"],
    },
    {
      era: "Orijinal Yedek Parça Kullanımı",
      whatItBrought: "Aşınan parçaların orijinal yedekleriyle değiştirilmesi, cihazın performansını korumaya yardımcı olur.",
      bestFor: "Parça değişimi gereken durumlar",
      families: ["Orijinal Yedek Parça"],
    },
    {
      era: "Doğru Saklama ve Şarj Alışkanlıkları",
      whatItBrought: "Cihazın kullanılmadığı zamanlarda uygun koşullarda saklanması ve doğru şarj alışkanlıkları, ömrünü uzatmaya yardımcı olur.",
      bestFor: "Günlük kullanım rutini",
      families: ["Doğru Saklama"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
