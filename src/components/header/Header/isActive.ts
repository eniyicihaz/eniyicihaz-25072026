// ==========================================================
// Header — shared "is this the current page?" helper.
// Single source of truth for Navbar, MegaMenu and MobileMenu so
// active-state logic (used to drive aria-current + styling) never
// drifts between the three surfaces that render nav links.
// ==========================================================

/**
 * Whether `href` should be treated as the current nav target for
 * `currentPath` (Astro.url.pathname). "#" and empty hrefs never match —
 * they're placeholder targets with no real page behind them yet.
 * Matching is exact-or-proper-subpath ("/markalar/" matches "/markalar/"
 * and "/markalar/oticon/", never an unrelated "/markalar-something").
 */
export function isActive(href: string, currentPath: string): boolean {
  if (!href || href === "#") return false;
  // Site URLs are canonical WITH a trailing slash; compare without it on both sides.
  const target = href.split("#")[0].replace(/\/+$/, "");
  const current = currentPath.replace(/\/+$/, "") || "/";
  if (target === "") return current === "/";
  return current === target || current.startsWith(target + "/");
}
