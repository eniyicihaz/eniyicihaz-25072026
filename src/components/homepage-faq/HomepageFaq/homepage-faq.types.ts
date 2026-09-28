export interface HomepageFaqItem {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
}

export interface HomepageFaqContent {
  eyebrow: string;
  heading: string;
  items: HomepageFaqItem[];
}
