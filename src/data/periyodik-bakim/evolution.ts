// "Periyodik Bakım Randevusu Nasıl İşler?" section for the
// /servis-bakim/periyodik-bakim page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of maintenance-appointment steps, same technique used
// throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const periyodikBakimEvolution: BrandPageTechEvolutionContent = {
  badge: "RANDEVU ADIMLARI",
  heading: "Periyodik Bakım Randevusu Nasıl İşler?",
  intro: "Cihaz incelemesinden sonraki bakım planlamasına kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Cihaz İncelemesi",
      whatItBrought: "Cihazınız, genel aşınma ve fiziksel durum açısından incelenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Genel İnceleme"],
    },
    {
      era: "Aşınan Parçaların Tespiti",
      whatItBrought: "Balmumu filtresi, tüp veya kulak ucu gibi yenilenmesi gereken parçalar belirlenir.",
      bestFor: "Parça değerlendirmesi",
      families: ["Aşınma Tespiti"],
    },
    {
      era: "Parça Yenileme",
      whatItBrought: "Tespit edilen aşınan parçalar profesyonelce yenilenir.",
      bestFor: "Bakımın uygulanması",
      families: ["Parça Yenileme"],
    },
    {
      era: "Genel Temizlik ve Kontrol",
      whatItBrought: "Cihazın mikrofon ve hoparlör bölgeleri temizlenir; genel işlevsellik kontrol edilir.",
      bestFor: "Kalite kontrolü",
      families: ["Genel Temizlik"],
    },
    {
      era: "Sonraki Bakım Planlaması",
      whatItBrought: "Kullanım yoğunluğunuza göre bir sonraki bakım tarihi birlikte planlanır.",
      bestFor: "Sürecin tamamlanması",
      families: ["Bakım Planlaması"],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
