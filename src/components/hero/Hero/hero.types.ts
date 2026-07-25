// ==========================================================
// Hero — Domain types (data contracts)
// Hero is presentational; content lives in hero.data.ts.
// Source of truth: COMPANY.md (facts) + PRINCIPLES.md (tone).
// ==========================================================

/** A single call-to-action link. */
export interface HeroCtaLink {
  label: string;
  href: string;
}

/** Hero section content. */
export interface HeroContent {
  /** Small tracked caption above the headline (rendered uppercase via CSS). */
  eyebrow: string;
  /** The single big idea. Rendered as the page's only <h1>. */
  headline: string;
  /** One supporting line under the headline. */
  subhead: string;
  /** The single primary action. */
  cta: HeroCtaLink;
  /**
   * Verifiable trust signals (PRINCIPLES §7 — no invented signals).
   * Kept short; the eyebrow already carries "2009 · SGK".
   */
  trust: string[];
  /** Dual-brand lockup (PRINCIPLES §2). Never a footnote. */
  brandLockup: string;
  /** Brand signature line — a whisper, not the headline. */
  tagline: string;
  /** Quiet scroll invitation toward the next section. */
  scrollCue: string;
}
