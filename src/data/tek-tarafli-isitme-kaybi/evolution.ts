// "Tek Taraflı İşitme Kaybında Hangi Sistemler Değerlendirilir?" section
// for the /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi page. Reuses the
// shared BrandPageTechEvolution component in its original "stage" sense
// (era / what it brought / who it's for / tags) — unlike its four
// sibling degree pages (a genuine dB-based severity ladder), this page's
// classification axis is laterality, not severity, so the slot is
// repurposed instead for the real progression of solution approaches by
// how the better ear is affected.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const tekTarafliIsitmeKaybiEvolution: BrandPageTechEvolutionContent = {
  badge: "SİSTEM SEÇENEKLERİ",
  heading: "Tek Taraflı İşitme Kaybında Hangi Sistemler Değerlendirilir?",
  intro: "Tek taraflı işitme kaybında, iyi duyan kulağın durumuna göre farklı sistemler değerlendirilebilir.",
  stages: [
    {
      era: "CROS Sistemi",
      whatItBrought: "İyi duyan kulak normal işitiyorsa, kötü duyan taraftaki mikrofon topladığı sesi kablosuz olarak iyi duyan kulaktaki alıcıya aktarır.",
      bestFor: "İyi duyan kulağı normal işiten kullanıcılar",
      families: ["CROS Sistemleri"],
    },
    {
      era: "BiCROS Sistemi",
      whatItBrought: "İyi duyan kulakta da hafif bir kayıp varsa, kötü duyan taraftan gelen ses aktarılırken iyi duyan kulak da aynı zamanda amplifiye edilir.",
      bestFor: "İyi duyan kulağında da hafif kayıp olan kullanıcılar",
      families: ["BiCROS Sistemleri"],
    },
    {
      era: "Standart İşitme Cihazı (Kötü Duyan Kulakta)",
      whatItBrought: "Kötü duyan kulaktaki kayıp derecesine göre, bazı durumlarda o kulağa yönelik standart bir işitme cihazı da değerlendirilebilir.",
      bestFor: "Kayıp derecesi uygun olan kullanıcılar",
      families: ["Standart İşitme Cihazı"],
    },
    {
      era: "Diğer Tıbbi Seçenekler",
      whatItBrought: "Bazı durumlarda kemik yoluyla iletim cihazları veya cerrahi seçenekler bir KBB uzmanı tarafından değerlendirilebilir.",
      bestFor: "KBB değerlendirmesi sonrası yönlendirilen kullanıcılar",
      families: ["KBB Yönlendirmesi"],
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
