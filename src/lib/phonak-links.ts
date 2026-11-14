// Phonak model ailesi adlarını yeni alt sayfalara bağlar (2026-11-14). Yalnızca bağlantı ekler: metin, cümle ve
// biçim değişmez. src/lib/ref-links.ts ile aynı güvenlik sınırları uygulanır.
//
// Ne bağlanır (yalnızca <main> içinde, <a>/<button>/<summary>/başlık/<script>/<style>/<label>/<option> DIŞINDA):
//  1) "Phonak Audéo" · "Phonak Naída" · "Phonak Sky" · "Phonak Bolero" · "Phonak Virto" · "Phonak CROS"
//     tam ifadeleri — sayfa başına her ailenin İLK geçtiği yer.
//  2) Phonak profilindeki aile listesi: "Sitemizde yer alan aileler:</strong> Audéo, Naída, Sky, Bolero, Virto, CROS"
//     (yalnızca bu birebir dizilim; "CROS" gibi genel kelimeler başka bağlamda bağlanmaz).
// Phonak sayfalarının kendisine (/markalar/phonak/…) uygulanmaz.
import { normalizePath } from "../config/site-map";

const FAMILIES: Array<[string, string]> = [
  ["Audéo", "audeo"],
  ["Naída", "naida"],
  ["Sky", "sky"],
  ["Bolero", "bolero"],
  ["Virto", "virto"],
  ["CROS", "cros"],
];
const href = (slug: string) => `/markalar/phonak/${slug}/`;
const link = (text: string, slug: string) => `<a href="${href(slug)}" data-ref-link>${text}</a>`;

const SKIP = /<(a|button|summary|h[1-6]|script|style|label|option|textarea|svg|title)\b[^>]*>[\s\S]*?<\/\1>/gi;
const LIST_PREFIX = "Sitemizde yer alan aileler:</strong> ";
const LIST_TEXT = FAMILIES.map(([n]) => n).join(", ");

export function linkPhonakFamilies(html: string, pathname: string): string {
  const current = normalizePath(pathname);
  if (current.startsWith("/markalar/phonak/")) return html;
  const start = html.indexOf("<main");
  const end = html.lastIndexOf("</main>");
  if (start < 0 || end < start) return html;
  let main = html.slice(start, end);
  if (!main.includes("Phonak") && !main.includes(LIST_PREFIX + LIST_TEXT)) return html;

  // (2) Aile listesi — birebir dizilim (strong etiketi SKIP kapsamında değildir).
  main = main.split(LIST_PREFIX + LIST_TEXT).join(LIST_PREFIX + FAMILIES.map(([n, s]) => link(n, s)).join(", "));

  // (1) "Phonak <Aile>" tam ifadeleri — her aile için ilk metin düğümü eşleşmesi.
  const done = new Set<string>();
  const re = new RegExp(`(?<![\\p{L}\\p{N}])Phonak (${FAMILIES.map(([n]) => n).join("|")})(?![\\p{L}\\p{N}])`, "gu");
  const process = (chunk: string) =>
    chunk.replace(/>([^<]+)</g, (_m, text: string) =>
      `>${text.replace(re, (whole: string, name: string) => {
        const slug = FAMILIES.find(([n]) => n === name)?.[1];
        if (!slug || done.has(slug)) return whole;
        done.add(slug);
        return link(whole, slug);
      })}<`,
    );
  let out = "";
  let last = 0;
  SKIP.lastIndex = 0;
  for (let m = SKIP.exec(main); m; m = SKIP.exec(main)) {
    out += process(main.slice(last, m.index)) + m[0];
    last = m.index + m[0].length;
  }
  out += process(main.slice(last));
  return html.slice(0, start) + out + html.slice(end);
}
