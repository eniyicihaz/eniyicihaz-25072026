export interface TrustFact {
  title: string;
  description: string;
  /** Optional real link (e.g. SGK fact → /sgk-isitme-cihazi-odemesi). */
  href?: string;
  linkLabel?: string;
}

export interface TrustContent {
  heading: string;
  contextSentence: string;
  facts: [TrustFact, TrustFact, TrustFact];
  /** Short, single-sentence service-area mention (Darıca · Gebze ·
   *  Çayırova — the "öncelikli" short form only; full breakdown stays on
   *  /iletisim, linked via serviceAreaHref, never repeated here). */
  serviceAreaSentence: string;
  serviceAreaHref: string;
  closingSentence: string;
}
