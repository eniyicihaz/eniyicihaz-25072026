/**
 * Deterministic, page-unique DOM id for a section heading: "<prefix>-<slug of heading>-title".
 * Shared components (BrandPageIdealUser, BrandPageRelatedContent, ValueGrid) are rendered more than once per page;
 * a fixed id would repeat (invalid HTML, ambiguous aria-labelledby, axe landmark-unique). Different headings → different ids.
 */
const TR: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };

export function domId(prefix: string, heading: string): string {
  const slug = heading
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşüâîû]/g, (c) => TR[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return slug ? prefix + "-" + slug + "-title" : prefix + "-title";
}
