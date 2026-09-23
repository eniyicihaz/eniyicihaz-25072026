// "Yetkili Serviste Onarım Süreci Nasıl İşler?" section for the
// /neden-orijinal/yaygin-servis-agi page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique used on the two prior pages, as an ordered set of process
// steps rather than a severity ladder or maintenance routine.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const yayginServisAgiEvolution: BrandPageTechEvolutionContent = {
  badge: "SERVİS SÜRECİ",
  heading: "Yetkili Serviste Onarım Süreci Nasıl İşler?",
  intro: "Cihazınız yetkili servise ulaştığında izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Ön Değerlendirme",
      whatItBrought: "Cihazınız, sorunun kaynağını belirlemek için yetkili teknisyen tarafından incelenir.",
      bestFor: "Servis sürecinin ilk adımı",
      families: ["Ön Değerlendirme"],
    },
    {
      era: "Garanti ve Kapsam Kontrolü",
      whatItBrought: "Cihazın garanti durumu ve yapılacak işlemin kapsamı netleştirilir.",
      bestFor: "Maliyet ve süre netliği",
      families: ["Garanti Kontrolü"],
    },
    {
      era: "Orijinal Parça ile Onarım",
      whatItBrought: "Gerekli onarım, orijinal yedek parçalar kullanılarak gerçekleştirilir.",
      bestFor: "Kalite standardının korunması",
      families: ["Orijinal Parça Onarımı"],
    },
    {
      era: "Test ve Teslim",
      whatItBrought: "Onarılan cihaz, teslim öncesinde performans testlerinden geçirilir.",
      bestFor: "Son kalite kontrolü",
      families: ["Kalite Testi"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
