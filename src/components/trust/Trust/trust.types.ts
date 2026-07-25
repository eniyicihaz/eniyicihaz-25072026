export interface TrustFact {
  title: string;
  description: string;
}

export interface TrustContent {
  heading: string;
  contextSentence: string;
  facts: [TrustFact, TrustFact, TrustFact];
  closingSentence: string;
}
