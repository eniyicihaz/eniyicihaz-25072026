export interface ClosingCta {
  label: string;
  href: string;
}

export interface ClosingSecondaryContact {
  /** The connector phrase before the phone link ("ya da bizi arayın:"). */
  lead: string;
  label: string;
  href: string;
  /** WhatsApp alternative, plain text link — same weight as the phone
   *  link, never styled as a competing button (plan §F). */
  whatsapp: { label: string; href: string };
}

export interface ClosingContent {
  message: string;
  supportingSentence: string;
  cta: ClosingCta;
  secondaryContact: ClosingSecondaryContact;
  reassurance: string;
}
