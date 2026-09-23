import type { TrustContent } from "./trust.types";

// Locked content — TRUST_SPECIFICATION.md §2, extended this round with the
// Darıca/Kocaeli physical-center context the original
// HOMEPAGE_CREATIVE_DIRECTION.md asked for (Bölüm 5) but never shipped
// (homepage plan §B/§G/★). Every fact is still traceable to COMPANY.md; no
// invented numbers/titles, no superlative language (PRINCIPLES §5). Fact
// order is locked: continuity always comes first. `serviceAreaSentence`
// uses the short "öncelikli" 3-region form only (Darıca · Gebze ·
// Çayırova) — the full 6-region breakdown stays on /iletisim, linked, not
// repeated (plan §M). The closing sentence still introduces no new claim —
// it only reframes fact 1.
export const trust: TrustContent = {
  heading: "Neden burası?",
  contextSentence: "Kararınızı vermeden önce, bilmeniz gereken birkaç gerçek.",
  facts: [
    {
      title: "2009'dan beri",
      description:
        "Avrasya İşitme, aynı ekiple, Darıca, Kocaeli'deki merkezimizde yıllardır hizmet veriyor.",
    },
    {
      title: "SGK anlaşmalı",
      description: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz.",
      href: "/sgk-isitme-cihazi-odemesi",
      linkLabel: "SGK süreci hakkında bilgi alın",
    },
    {
      title: "Uzman kadro",
      description:
        "Odyolog ve odyometristlerden oluşan, alanında yetkin bir ekip.",
    },
  ],
  serviceAreaSentence: "Darıca merkezli; Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz.",
  serviceAreaHref: "/iletisim",
  closingSentence:
    "Bu ilişki, ilk ziyaretle sınırlı değil — 2009'dan beri süregelen aynı güvenle devam ediyor.",
};
