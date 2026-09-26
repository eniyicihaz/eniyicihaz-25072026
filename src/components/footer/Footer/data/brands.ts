// Worked-with hearing aid brands — source of truth: COMPANY.md §9.
// Every brand now has a real page under src/pages/markalar/ — hrefs match
// those routes exactly (audited directly against the file system, not
// guessed from the name; "Philips" links to the real slug
// /markalar/philips-hearing, since the page itself is titled
// "Philips Hearing").
import type { BrandItem } from "../footer.types";

export const brands: BrandItem[] = [
  { name: "Signia", href: "/markalar/signia" },
  { name: "Oticon", href: "/markalar/oticon" },
  { name: "Phonak", href: "/markalar/phonak" },
  { name: "Widex", href: "/markalar/widex" },
  { name: "ReSound", href: "/markalar/resound" },
  { name: "NuEar", href: "/markalar/nuear" },
  { name: "Unitron", href: "/markalar/unitron" },
  { name: "Bernafon", href: "/markalar/bernafon" },
  { name: "Audio Service", href: "/markalar/audio-service" },
  { name: "Rexton", href: "/markalar/rexton" },
  { name: "Sonic", href: "/markalar/sonic" },
  { name: "Philips", href: "/markalar/philips-hearing" },
  { name: "A&M", href: "/markalar/am" },
  { name: "Audifon", href: "/markalar/audifon" },
  { name: "Beltone", href: "/markalar/beltone" },
  { name: "Coselgi", href: "/markalar/coselgi" },
  { name: "Maico", href: "/markalar/maico" },
  { name: "Vista", href: "/markalar/vista" },
];
