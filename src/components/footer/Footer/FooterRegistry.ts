// Section registry — maps a layout key to its section component.
// Register a new section here; the orchestrator resolves it dynamically.

import type { FooterSectionKey } from "./FooterLayout";
import FooterMain from "./organisms/FooterMain/FooterMain.astro";
import FooterBottom from "./organisms/FooterBottom/FooterBottom.astro";

export const footerRegistry: Partial<Record<FooterSectionKey, unknown>> = {
  main: FooterMain,
  bottom: FooterBottom,
};
