// Build-time page enhancement used by MainLayout. The layout renders a page's default slot to a string, and this
// module (1) gives every <h2> a stable id, (2) detects what the page already contains (breadcrumb UI, TOC,
// BreadcrumbList / WebPage JSON-LD) so nothing is ever duplicated, and (3) finds the spot right after the hero where
// the "Bu sayfada" table of contents belongs. Pure string work, no DOM: the build output stays static HTML.
export interface PageHeading {
  id: string;
  text: string;
}

export interface EnhancedPage {
  html: string;
  headings: PageHeading[];
  words: number;
  hasBreadcrumbUi: boolean;
  hasToc: boolean;
  ldTypes: string[];
}

const ENTITIES: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " ", "&#x27;": "'" };

function decode(s: string): string {
  return s.replace(/&(amp|lt|gt|quot|nbsp|#39|#x27);/g, (m) => ENTITIES[m] ?? m);
}

function stripTags(s: string): string {
  return decode(s.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(text: string): string {
  const map: Record<string, string> = { ı: "i", İ: "i", ş: "s", Ş: "s", ğ: "g", Ğ: "g", ü: "u", Ü: "u", ö: "o", Ö: "o", ç: "c", Ç: "c" };
  const base = text
    .replace(/[ıİşŞğĞüÜöÖçÇ]/g, (c) => map[c])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 56)
    .replace(/-+$/g, "");
  return base || "bolum";
}

/** Index just after the closing tag of the first top-level <section> (the hero), or -1. */
export function endOfFirstSection(html: string): number {
  const re = /<\/?section\b[^>]*>/gi;
  let depth = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[0][1] === "/") {
      depth--;
      if (depth === 0) return m.index + m[0].length;
      if (depth < 0) return -1;
    } else {
      depth++;
    }
  }
  return -1;
}

function jsonLdTypes(html: string): string[] {
  const types: string[] = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(decode(m[1]));
      const nodes = Array.isArray(parsed) ? parsed : parsed["@graph"] ?? [parsed];
      for (const n of nodes) {
        const t = n?.["@type"];
        if (Array.isArray(t)) types.push(...t);
        else if (t) types.push(String(t));
      }
    } catch {
      /* malformed JSON-LD is reported by the QA script, not here */
    }
  }
  return types;
}

export function enhancePage(html: string): EnhancedPage {
  const used = new Set<string>([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const headings: PageHeading[] = [];

  const out = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (full, attrs: string, inner: string) => {
    const text = stripTags(inner);
    if (!text) return full;
    const existing = attrs.match(/\sid="([^"]+)"/);
    let id = existing ? existing[1] : "";
    if (!id) {
      const base = slugify(text);
      id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      headings.push({ id, text });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    }
    headings.push({ id, text });
    return full;
  });

  return {
    html: out,
    headings,
    words: stripTags(out).split(" ").filter(Boolean).length,
    hasBreadcrumbUi: /class="[^"]*ds-breadcrumb/.test(out) || /aria-label="(Sayfa yolu|Breadcrumb)"/.test(out),
    hasToc: /class="[^"]*(guide-toc|page-toc)/.test(out),
    ldTypes: jsonLdTypes(out),
  };
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Static markup for the "Bu sayfada" table of contents (styled by ds/styles/base/page-toc.css). */
export function buildTocHtml(headings: PageHeading[]): string {
  const items = headings.map((h) => `<li><a class="page-toc__link" href="#${esc(h.id)}">${esc(h.text)}</a></li>`).join("");
  return (
    `<nav class="page-toc" aria-label="Bu sayfada"><div class="page-toc__inner">` +
    `<details class="page-toc__details" data-page-toc><summary class="page-toc__summary">` +
    `<span class="page-toc__title">Bu sayfada</span><span class="page-toc__count">${headings.length} bölüm</span></summary>` +
    `<ol class="page-toc__list">${items}</ol></details></div></nav>`
  );
}

/** Inserts `fragment` right after the first top-level <section> (the hero). Returns html unchanged if none is found. */
export function insertAfterHero(html: string, fragment: string): string {
  const end = endOfFirstSection(html);
  if (end < 0) return html;
  return html.slice(0, end) + fragment + html.slice(end);
}
