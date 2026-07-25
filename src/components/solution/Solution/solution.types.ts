export interface SolutionFact {
  title: string;
  body: string;
}

export interface SolutionContent {
  heading: string;
  contextSentence: string;
  facts: [SolutionFact, SolutionFact, SolutionFact];
  closingSentence: string;
}
