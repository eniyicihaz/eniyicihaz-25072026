export interface ServiceNetworkRegion {
  name: string;
  description: string;
  href?: string;
}

export interface ServiceNetworkContent {
  eyebrow: string;
  heading: string;
  intro: string;
  primary: ServiceNetworkRegion;
  priorityLabel: string;
  priority: ServiceNetworkRegion[];
  regional: ServiceNetworkRegion;
  secondaryLabel: string;
  secondarySentence: string;
  closing: string;
}
