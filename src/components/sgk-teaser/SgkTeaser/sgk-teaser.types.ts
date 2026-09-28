export interface SgkTeaserFact {
  title: string;
  description: string;
}

export interface SgkTeaserContent {
  eyebrow: string;
  heading: string;
  contextSentence: string;
  facts: SgkTeaserFact[];
  cta: { label: string; href: string };
}
