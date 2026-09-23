// "Teknik Servis Süreci Nasıl İşler?" section for the /servis-bakim/
// teknik-servis page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as an ordered set of repair-process
// steps, same technique used throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const teknikServisEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Teknik Servis Süreci Nasıl İşler?",
  intro: "Sorun bildiriminden cihazınızın teslimine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Sorun Bildirimi ve Ön Değerlendirme",
      whatItBrought: "Yaşadığınız sorunu bizimle paylaşırsınız; ihtiyaç duyulan randevu türü birlikte belirlenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Sorun Bildirimi"],
    },
    {
      era: "Yerinde Teşhis",
      whatItBrought: "Cihazınız kliniğimizde incelenir; sorunun kaynağı belirlenmeye çalışılır.",
      bestFor: "İlk teşhis",
      families: ["Yerinde Teşhis"],
    },
    {
      era: "Onarım Kararı",
      whatItBrought: "Sorun yerinde çözülebiliyorsa kliniğimizde giderilir; değilse cihaz yetkili üretici servisine yönlendirilir.",
      bestFor: "Yönlendirme kararı",
      families: ["Onarım Kararı"],
    },
    {
      era: "Onarım Süreci",
      whatItBrought: "Onarım, yerinde veya üretici servisinde orijinal yedek parçalarla gerçekleştirilir.",
      bestFor: "Onarımın uygulanması",
      families: ["Onarım Uygulaması"],
    },
    {
      era: "Teslim ve Kontrol",
      whatItBrought: "Onarılan cihazınız teslim edilir; işlevselliği birlikte kontrol edilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Teslim Kontrolü"],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
