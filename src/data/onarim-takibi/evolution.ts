// "Onarım Takip Aşamaları Nelerdir?" section for the /servis-bakim/
// onarim-takibi page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as literal package-tracker-style
// status stages rather than a clinic-visit sequence, same flexible
// reuse technique as Cihaz Temizliği's daily routine and Pil &
// Aksesuar's selection guide.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const onarimTakibiEvolution: BrandPageTechEvolutionContent = {
  badge: "TAKİP AŞAMALARI",
  heading: "Onarım Takip Aşamaları Nelerdir?",
  intro: "Cihazınızın teslim alınmasından size geri teslimine kadar izleyebileceğiniz beş aşamayı bir araya getirdik.",
  stages: [
    {
      era: "Teslim Alındı",
      whatItBrought: "Cihazınız teslim alınır ve bir takip kaydı oluşturulur.",
      bestFor: "Sürecin başlangıcı",
      families: ["Teslim Alma"],
    },
    {
      era: "Teşhis Ediliyor",
      whatItBrought: "Cihazınız, sorunun kaynağını belirlemek için incelenir.",
      bestFor: "Neden tespiti",
      families: ["Teşhis Aşaması"],
    },
    {
      era: "Onarımda / Parça Bekleniyor",
      whatItBrought: "Onarım uygulanır veya gerekli bir parçanın temin edilmesi beklenir.",
      bestFor: "Çözümün uygulanması",
      families: ["Onarım Aşaması"],
    },
    {
      era: "Kalite Kontrolü",
      whatItBrought: "Onarılan cihaz, düzgün çalıştığından emin olmak için test edilir.",
      bestFor: "Son kontrol",
      families: ["Kalite Kontrolü"],
    },
    {
      era: "Teslime Hazır",
      whatItBrought: "Cihazınız teslim için hazır hâle gelir ve size bilgi verilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Teslime Hazır"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
