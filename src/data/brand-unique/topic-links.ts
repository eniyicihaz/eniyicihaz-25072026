// Konu sayfalarındaki "Markalara Göre İnceleyin" bloklarının linkleri — YALNIZCA sitedeki model verisinden
// (src/data/{marka}/models.ts: aile adları, cihaz türü / özellik etiketleri, kategori etiketleri) üretilir.
// Böylece bir marka, ancak ilgili etikete sahip bir ailesi varsa listelenir; üretici/teknoloji/slogan/sağlık
// ifadesi bu açıklamalarda yoktur. Rastgele marka eklenmez, eşleşmeyen marka çıkarılır.
import type { BrandPageRelatedLink } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { oticonModels } from "../oticon/models";
import { phonakModels } from "../phonak/models";
import { signiaModels } from "../signia/models";
import { widexModels } from "../widex/models";
import { resoundModels } from "../resound/models";
import { nuearModels } from "../nuear/models";
import { audifonModels } from "../audifon/models";
import { audioServiceModels } from "../audio-service/models";
import { amModels } from "../am/models";
import { beltoneModels } from "../beltone/models";
import { bernafonModels } from "../bernafon/models";
import { coselgiModels } from "../coselgi/models";
import { maicoModels } from "../maico/models";
import { philipsHearingModels } from "../philips-hearing/models";
import { rextonModels } from "../rexton/models";
import { sonicModels } from "../sonic/models";
import { unitronModels } from "../unitron/models";
import { vistaModels } from "../vista/models";
import { join, shortName } from "./build";

type Item = { name: string; category: string; tags: string[]; description: string };

const BRANDS: { slug: string; name: string; items: Item[] }[] = [
  { slug: "oticon", name: "Oticon", items: oticonModels.items },
  { slug: "phonak", name: "Phonak", items: phonakModels.items },
  { slug: "signia", name: "Signia", items: signiaModels.items },
  { slug: "widex", name: "Widex", items: widexModels.items },
  { slug: "resound", name: "ReSound", items: resoundModels.items },
  { slug: "nuear", name: "NuEar", items: nuearModels.items },
  { slug: "am", name: "A&M", items: amModels.items },
  { slug: "audifon", name: "Audifon", items: audifonModels.items },
  { slug: "audio-service", name: "Audio Service", items: audioServiceModels.items },
  { slug: "beltone", name: "Beltone", items: beltoneModels.items },
  { slug: "bernafon", name: "Bernafon", items: bernafonModels.items },
  { slug: "coselgi", name: "Coselgi", items: coselgiModels.items },
  { slug: "maico", name: "Maico", items: maicoModels.items },
  { slug: "philips-hearing", name: "Philips Hearing", items: philipsHearingModels.items },
  { slug: "rexton", name: "Rexton", items: rextonModels.items },
  { slug: "sonic", name: "Sonic", items: sonicModels.items },
  { slug: "unitron", name: "Unitron", items: unitronModels.items },
  { slug: "vista", name: "Vista", items: vistaModels.items },
];

const hasTag = (i: Item, ...tags: string[]) => i.tags.some((t) => tags.includes(t));

export type Topic = "cocuk" | "kulakIci" | "gorunmezCic" | "sarjli" | "bte" | "bluetooth" | "pilli" | "kalip" | "gucluKayip";

const TOPICS: Record<Topic, { match: (i: Item) => boolean; text: (fam: string, n: number) => string }> = {
  cocuk: { match: (i) => hasTag(i, "Çocuk"), text: (f, n) => `${f}: sitemizde çocuk kategorisinde listelenen ${n > 1 ? "aileler" : "aile"}.` },
  kulakIci: { match: (i) => hasTag(i, "Kulak İçi"), text: (f, n) => `${f}: sitemizde kulak içi etiketli ${n > 1 ? "aileler" : "aile"}.` },
  gorunmezCic: {
    match: (i) => /görünmez/i.test(i.category) || /\bCIC\b/.test(i.category) || /\bCIC\b/.test(i.name),
    text: (f, n) => `${f}: sitemizde CIC / görünmez kategorisinde listelenen ${n > 1 ? "aileler" : "aile"}.`,
  },
  sarjli: { match: (i) => hasTag(i, "Şarjlı"), text: (f, n) => `${f}: şarjlı etiketli ${n > 1 ? "aileler" : "aile"}.` },
  bte: { match: (i) => hasTag(i, "BTE", "RIC/BTE", "BTE/RIC"), text: (f, n) => `${f}: kulak arkası (BTE) etiketli ${n > 1 ? "aileler" : "aile"}.` },
  bluetooth: { match: (i) => hasTag(i, "Bluetooth"), text: (f, n) => `${f}: Bluetooth etiketli ${n > 1 ? "aileler" : "aile"}.` },
  pilli: { match: (i) => hasTag(i, "Pilli"), text: (f, n) => `${f}: pilli etiketli ${n > 1 ? "aileler" : "aile"}.` },
  kalip: {
    // Kişiye özel üretilen kulak içi aileler: "Kişiye Özel" etiketi VEYA kulak içi + model açıklamasında kişiye özel/özel üretim ifadesi.
    match: (i) => hasTag(i, "Kişiye Özel") || (hasTag(i, "Kulak İçi") && /kişiye özel|özel üretilen/i.test(i.description)),
    text: (f, n) => `${f}: sitemizde kişiye özel üretilen kulak içi olarak tanımlanan ${n > 1 ? "aileler" : "aile"}.`,
  },
  gucluKayip: {
    match: (i) => hasTag(i, "Güçlü Kayıplar", "Power", "Yüksek Güç") || /^Güçlü Kayıplar/.test(i.category),
    text: (f, n) => `${f}: sitemizde güçlü kayıplar / yüksek güç kategorisinde listelenen ${n > 1 ? "aileler" : "aile"}.`,
  },
};

function familyList(brand: { name: string }, fams: string[]): string {
  const short = fams.map((n) => shortName(brand.name, n));
  if (short.length <= 3) return join(short);
  return `${short.slice(0, 2).join(", ")} ve ${short.length - 2} aile daha`;
}

/** Konuya göre, yalnızca ilgili etikete sahip ailesi bulunan markaların linkleri. `only` verilirse yalnızca o markalar (yine etiketi olanlar) listelenir. */
export function brandLinksForTopic(topic: Topic, only?: string[]): BrandPageRelatedLink[] {
  const t = TOPICS[topic];
  const links: BrandPageRelatedLink[] = [];
  for (const b of BRANDS) {
    if (only && !only.includes(b.slug)) continue;
    const fams = b.items.filter(t.match).map((i) => i.name);
    if (!fams.length) continue;
    links.push({ label: b.name, description: t.text(familyList(b, fams), fams.length), href: `/markalar/${b.slug}/` });
  }
  return links;
}
