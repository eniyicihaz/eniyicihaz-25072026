export interface BuyingCriterionItem {
  icon: any;
  title: string;
  description: string;
}

export interface BuyingCriteriaContent {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Custom-produced conceptual/lifestyle image (not stock, not a photo of the real center). */
  image: { src: string; alt: string; width: number; height: number };
  criteria: BuyingCriterionItem[];
  closing: string;
  hubCta: { label: string; href: string };
}
