import type { TrustContent } from "./trust.types";

// Locked content — TRUST_SPECIFICATION.md §2. Every fact is traceable to
// COMPANY.md; no invented numbers/titles, no superlative language
// (PRINCIPLES §5). Fact order is locked: continuity always comes first.
// The closing sentence introduces no new claim — it only reframes fact 1.
export const trust: TrustContent = {
  heading: "Neden burası?",
  contextSentence: "Kararınızı vermeden önce, bilmeniz gereken birkaç gerçek.",
  facts: [
    {
      title: "2009'dan beri",
      description:
        "Avrasya İşitme, aynı ekiple, aynı adreste yıllardır hizmet veriyor.",
    },
    {
      title: "SGK anlaşmalı",
      description: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz.",
    },
    {
      title: "Uzman kadro",
      description:
        "Odyolog ve odyometristlerden oluşan, alanında yetkin bir ekip.",
    },
  ],
  closingSentence:
    "Bu ilişki, ilk ziyaretle sınırlı değil — 2009'dan beri süregelen aynı güvenle devam ediyor.",
};
