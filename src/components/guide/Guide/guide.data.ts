import type { GuideContent } from "./guide.types";

// Locked content — GUIDE_SPECIFICATION.md §2. Steps are the real, verified
// process (COMPANY.md/PRINCIPLES §8) — not an invented quiz. CTA label
// matches Hero's exactly ("tek ses" consistency, PRINCIPLES §2).
export const guide: GuideContent = {
  heading: "Şimdi ne olacak?",
  contextSentence: "Bunu tek başınıza çözmenize gerek yok — süreç oldukça basit.",
  steps: [
    {
      title: "Kısa bir konuşma",
      description: "Ne yaşadığınızı dinleriz; baskı yok, taahhüt yok.",
    },
    {
      title: "Ücretsiz değerlendirme",
      description: "Uzman bir odyolog işitmenizi birlikte netleştirir.",
    },
    {
      title: "Merkezde ücretsiz demo",
      description: "Önerilen cihazı merkezimizde yaklaşık 20 dakikalık ücretsiz bir demoyla deneyin; isterseniz satın alarak 7 güne kadar deneyebilirsiniz.",
    },
  ],
  cta: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
};
