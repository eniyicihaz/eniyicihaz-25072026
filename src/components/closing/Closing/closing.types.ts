export interface ClosingCta {
  label: string;
  href: string;
}

export interface ClosingSecondaryContact {
  /** The connector phrase before the phone link ("ya da bizi arayın:"). */
  lead: string;
  label: string;
  href: string;
}

export interface ClosingContent {
  message: string;
  supportingSentence: string;
  cta: ClosingCta;
  secondaryContact: ClosingSecondaryContact;
  reassurance: string;
}
