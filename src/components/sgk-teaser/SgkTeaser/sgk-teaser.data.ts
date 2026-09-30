import type { SgkTeaserContent } from "./sgk-teaser.types";

// Locked content — docs/archive/SGK_TEASER_SPECIFICATION.md §2. Fact 1 is the same
// locked sentence as Trust's SGK fact (GEO non-contradiction — no new SGK
// claim invented here, only a dedicated, slightly larger stage for it). No
// contribution amounts, percentages or durations — those numbers are never
// stated on this site outside their own verified page (PRINCIPLES §5); this
// teaser only points to it.
export const sgkTeaser: SgkTeaserContent = {
  eyebrow: "SGK Danışmanlığı",
  heading: "SGK Süreciyle İlgili Yanınızdayız",
  contextSentence: "SGK kapsamındaki işitme cihazı sürecinde, rapor ve katkı payı aşamalarında size rehberlik ediyoruz.",
  facts: [
    {
      title: "SGK Anlaşmalı Merkez",
      description: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz.",
    },
    {
      title: "Rapor Sürecinde Yönlendirme",
      description: "Gerekli rapor ve belge sürecinde size yol gösteriyoruz.",
    },
    {
      title: "Katkı Payı Danışmanlığı",
      description: "Katkı payı ve kapsam soruları için detaylı bilgiyi ilgili sayfamızda bulabilirsiniz.",
    },
  ],
  cta: { label: "SGK Sürecini İnceleyin", href: "/sgk-isitme-cihazi-odemesi/" },
};
