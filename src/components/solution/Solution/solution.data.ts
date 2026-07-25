import type { SolutionContent } from "./solution.types";

// Locked content — SOLUTION_SPECIFICATION.md §2. Each fact deliberately
// closes a loop back to an earlier section (Empathy's "yavaşça uzaklaşmak",
// the "not alone" outcome, Sound Room's six-thread order) — do not reword
// without checking those references. No CTA, no diagnostic language.
export const solution: SolutionContent = {
  heading: "Neden böyle oluyor?",
  contextSentence:
    "Az önce hissettiğiniz şeyin, oldukça basit bir açıklaması var.",
  facts: [
    {
      title: "Yavaş gelişir",
      body: "İşitme kaybı çoğu zaman bir anda değil, yıllar içinde ve fark edilmeden ilerler.",
    },
    {
      title: "Yaygındır",
      body: "Belirli bir yaştan sonra pek çok kişide görülür — yalnız olduğunuzu düşünmenize gerek yok.",
    },
    {
      title: "Bazı sesler önce solar",
      body: "Kuş sesi, fısıltı ya da çocuk gülüşü gibi ince sesler genellikle önce netliğini kaybeder — az önce kaydırıcıda hissettiğiniz gibi.",
    },
  ],
  closingSentence: "Bunu anlamak ilk adım; sırada size özel olan var.",
};
