/**
 * Picks the more readable of white and the site's near-black for text that sits on a solid accent colour.
 * Used by the brand-page CTA buttons: their default text colour (#0a1408) assumes a LIGHT accent and failed WCAG AA
 * on medium/dark brand accents (e.g. white-on-blue was fine, near-black-on-blue was 3.0–3.6:1). Only #rgb / #rrggbb
 * inputs are understood; anything else falls back to `fallback` (the previous default), so nothing else changes.
 */
const DARK = "#0a1408";
const LIGHT = "#ffffff";

function luminance(hex: string): number | null {
  const m = hex.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].split("").map((c) => c + c).join("") : m[1];
  const [r, g, b] = [0, 2, 4].map((i) => {
    const v = parseInt(h.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a: number, b: number): number {
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * @param bg        the solid background colour (#hex)
 * @param preferred an explicitly chosen text colour; kept only if it reaches 4.5:1 on `bg`
 */
export function readableTextOn(bg: string | undefined, preferred?: string): string {
  const fallback = preferred || DARK;
  if (!bg) return fallback;
  const l = luminance(bg);
  if (l === null) return fallback;
  if (preferred) {
    const pl = luminance(preferred);
    if (pl === null || ratio(l, pl) >= 4.5) return preferred;
  }
  return ratio(l, 1) >= ratio(l, luminance(DARK) as number) ? LIGHT : DARK;
}
