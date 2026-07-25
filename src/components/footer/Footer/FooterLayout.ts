// Footer composition order. Adding/removing/reordering a section is a
// one-line change here (+ a matching entry in FooterRegistry.ts).
// No footer component is ever touched to change the layout.
//
// "cta" was removed: the homepage's Closing section is now the sole
// closing/CTA moment (CLOSING_SPECIFICATION.md) — Footer returns to
// navigation and company information only.

export type FooterSectionKey = "main" | "bottom";

export const footerLayout: FooterSectionKey[] = ["main", "bottom"];
