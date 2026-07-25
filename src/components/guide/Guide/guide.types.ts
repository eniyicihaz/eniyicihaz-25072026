export interface GuideStepData {
  title: string;
  description: string;
}

export interface GuideCta {
  label: string;
  href: string;
}

export interface GuideContent {
  heading: string;
  contextSentence: string;
  steps: [GuideStepData, GuideStepData, GuideStepData];
  cta: GuideCta;
}
