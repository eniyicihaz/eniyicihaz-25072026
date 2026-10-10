// Marka karşılaştırma tablosu (C) ve marka × cihaz türü/özellik matrisi (K).
//
// İki tablo da elle yazılmış hükümlerle değil, sitedeki marka model
// verisinden (src/data/{marka}/models.ts etiketleri) HESAPLANIR: hangi ailenin
// hangi etikete sahip olduğu buradan gelir. Bu, tabloların marka sayfalarıyla
// çelişmesini engeller. Tablolar sıralama yapmaz; "kazanan" ilan etmez.
//
// ÖNEMLİ SINIR: bir hücrede "etiketli aile yok" yazması, markanın o türde
// ürünü olmadığı anlamına GELMEZ — yalnızca sitemizdeki model listesinde o
// etiket bulunmadığını söyler. Oticon'un model verisinde RIC/BTE yerleşim
// etiketi hiç yoktur; bu nedenle Oticon için tür uydurulmaz, marka sayfasına
// yönlendirilir. Teknik özelliklerde genelleme yapılmaz ("modele göre değişir").
import type { GuideSectionMeta, GuideTableContent, GuideTableRow } from "../../components/price-guide/price-guide.types";
import { oticonModels } from "../oticon/models";
import { phonakModels } from "../phonak/models";
import { signiaModels } from "../signia/models";
import { widexModels } from "../widex/models";
import { resoundModels } from "../resound/models";
import { nuearModels } from "../nuear/models";

interface RawModel {
  name: string;
  description: string;
  tags: string[];
}

interface BrandSource {
  key: string;
  label: string;
  prefix: string;
  href: string;
  items: RawModel[];
}

const brands: BrandSource[] = [
  { key: "oticon", label: "Oticon", prefix: "Oticon", href: "/markalar/oticon/", items: oticonModels.items as RawModel[] },
  { key: "phonak", label: "Phonak", prefix: "Phonak", href: "/markalar/phonak/", items: phonakModels.items as RawModel[] },
  { key: "signia", label: "Signia", prefix: "Signia", href: "/markalar/signia/", items: signiaModels.items as RawModel[] },
  { key: "widex", label: "Widex", prefix: "Widex", href: "/markalar/widex/", items: widexModels.items as RawModel[] },
  { key: "resound", label: "ReSound", prefix: "ReSound", href: "/markalar/resound/", items: resoundModels.items as RawModel[] },
  { key: "nuear", label: "NuEar", prefix: "NuEar", href: "/markalar/nuear/", items: nuearModels.items as RawModel[] },
];

const short = (b: BrandSource, name: string) => name.replace(new RegExp(`^${b.prefix}\\s+`), "");
/**
 * Etiket VEYA ailenin kendi açıklamasında geçen yerleşim ifadesi (ör. Widex Allure "RIC/BTE/ITE
 * seçenekleriyle sunulan", ReSound Nexia, NuEar Savant AI) — böylece yerleşim seçenekleri
 * yalnızca etiketten okunup eksik gösterilmez.
 */
const descMatch: Record<string, RegExp> = {
  RIC: /RIC/,
  BTE: /BTE/,
  "Kulak İçi": /ITE|kulak içi/i,
};
const withTag = (b: BrandSource, ...tags: string[]) =>
  b.items.filter((i) => i.tags.some((t) => tags.includes(t)) || tags.some((t) => descMatch[t]?.test(i.description)));
const names = (b: BrandSource, list: RawModel[], max = 4) => {
  const n = list.map((i) => short(b, i.name));
  return n.length > max ? `${n.slice(0, max).join(", ")} +${n.length - max}` : n.join(", ");
};
const NONE = "Sitemizde etiketli aile yok";

/** Oticon'un model verisinde RIC/BTE yerleşim etiketi bulunmaz — tür uydurulmaz. */
const oticonPlacementNote = "Yerleşim etiketi model verimizde yok; marka sayfasına bakın";

/* ---------- C. Marka karşılaştırma tablosu ---------- */
export const comparisonSection: GuideSectionMeta = {
  id: "marka-karsilastirma",
  eyebrow: "Marka Karşılaştırması",
  heading: "İşitme Cihazı Markaları Karşılaştırma Tablosu",
  intro:
    "Tablo, profili yer alan markaları cihaz türleri, Bluetooth ve şarj etiketleri üzerinden yan yana koyar. Hiçbir sütun sıralama ya da puan içermez; hücreler sitemizdeki model listelerinden derlenmiştir ve model ailesine göre değişebilir.",
};

function typesCell(b: BrandSource): string {
  const parts: string[] = [];
  if (withTag(b, "RIC").length) parts.push("RIC");
  if (withTag(b, "BTE").length) parts.push("kulak arkası (BTE)");
  if (withTag(b, "Kulak İçi").length) parts.push("kulak içi");
  if (withTag(b, "Çocuk").length) parts.push("çocuk");
  if (withTag(b, "Güçlü Kayıplar", "Power").length) parts.push("güçlü kayıplar");
  if (withTag(b, "Tek Taraflı").length) parts.push("tek taraflı (CROS)");
  const base = parts.length ? parts.join(", ") : "—";
  return b.key === "oticon" ? `${base}. RIC/BTE: ${oticonPlacementNote}` : base;
}

function chargeCell(b: BrandSource): string {
  const charge = withTag(b, "Şarjlı");
  const battery = withTag(b, "Pilli");
  const c = charge.length ? `Şarjlı: ${charge.length}/${b.items.length} aile` : "Şarjlı etiketli aile yok";
  const p = battery.length ? `Pilli: ${names(b, battery, 3)}` : "pilli etiketli aile yok";
  return `${c}; ${p}`;
}

const mainRows: GuideTableRow[] = brands.map((b) => ({
  label: b.label,
  href: b.href,
  cells: [
    typesCell(b),
    `Bluetooth etiketli aile: ${withTag(b, "Bluetooth").length}/${b.items.length}`,
    chargeCell(b),
  ],
}));

export const brandTable: GuideTableContent = {
  id: "marka-karsilastirma-tablosu",
  eyebrow: "Tablo 1",
  heading: "Marka Profilleri: Cihaz Türü, Bağlantı ve Şarj",
  caption: "Oticon, Phonak, Signia, Widex, ReSound ve NuEar markalarının cihaz türü, Bluetooth ve şarj etiketleri karşılaştırması",
  criterionLabel: "Marka (marka sayfası)",
  columns: [
    { name: "Öne çıkan cihaz türleri" },
    { name: "Bağlantı" },
    { name: "Şarj" },
  ],
  rows: mainRows,
  note:
    "Satır başlıkları marka sayfalarına bağlanır. Bluetooth ve şarj özellikleri model ailesine göre değişir; tabloda geçen sayılar, sitemizdeki model ailesi etiketlerine göredir.",
  links: [{ label: "Tüm Markalar", href: "/markalar/" }],
};

/* ---------- K. Marka × cihaz türü / özellik matrisi ---------- */
export const matrixSection: GuideSectionMeta = {
  id: "marka-cihaz-turu",
  eyebrow: "Marka ve Cihaz Türü",
  heading: "RIC, Kulak İçi, Şarjlı ve Bluetooth Hangi Markalarda Bulunuyor?",
  intro:
    "Bu matris, sitemizdeki marka sayfalarında yer alan model ailelerinin etiketlerinden ve açıklamalarından derlendi. Bir hücrede 'etiketli aile yok' yazması, markanın o türde ürünü olmadığı anlamına gelmez; yalnızca model listemizde o etiketle yer almadığını gösterir.",
};

function matrixRow(label: string, tags: string[], opts: { placementRow?: boolean; countOnly?: boolean; href?: string } = {}): GuideTableRow {
  return {
    label,
    ...(opts.href ? { href: opts.href } : {}),
    cells: brands.map((b) => {
      if (opts.placementRow && b.key === "oticon") return oticonPlacementNote;
      const list = withTag(b, ...tags);
      if (!list.length) return NONE;
      if (opts.countOnly) return `${list.length}/${b.items.length} ailede etiketli`;
      return names(b, list);
    }),
  };
}

export const matrixTable: GuideTableContent = {
  id: "marka-cihaz-matrisi",
  eyebrow: "Tablo 2",
  heading: "Marka × Cihaz Türü ve Özellik Matrisi",
  caption: "Markaların model ailelerinin RIC, kulak arkası, kulak içi, şarjlı, pilli, Bluetooth, çocuk ve güçlü kayıp etiketlerine göre dağılımı",
  criterionLabel: "Tür / özellik",
  columns: brands.map((b) => ({ name: b.label, href: b.href })),
  rows: [
    // Satır başlığı bağlantıları: yalnızca sitede var olan, konuyla ilgili sayfalar (dist'te doğrulandı).
    matrixRow("RIC", ["RIC"], { placementRow: true, href: "/isitme-cihazlari/#ric-rite" }),
    matrixRow("Kulak arkası (BTE)", ["BTE"], { placementRow: true, href: "/isitme-cihazlari/kulak-arkasi-bte/" }),
    matrixRow("Kulak içi", ["Kulak İçi"], { href: "/isitme-cihazlari/kulak-ici-ite/" }),
    matrixRow("Şarjlı", ["Şarjlı"], { href: "/isitme-cihazlari/sarj-edilebilir/" }),
    matrixRow("Pilli", ["Pilli"], { href: "/isitme-cihazlari/#sarjli-pilli" }),
    matrixRow("Bluetooth", ["Bluetooth"], { countOnly: true, href: "/isitme-cihazlari/bluetooth-ozellikli/" }),
    matrixRow("Çocuk", ["Çocuk"], { href: "/isitme-cihazlari/cocuklara-ozel/" }),
    matrixRow("Güçlü kayıplar", ["Güçlü Kayıplar", "Power"], { href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/" }),
    matrixRow("Tek taraflı kayıp (CROS)", ["Tek Taraflı"], { href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/" }),
  ],
  note:
    "Etiketler model ailesi düzeyindedir; aynı ailenin farklı sürümlerinde özellikler değişebilir. Kesin bilgi için marka sayfasına ve değerlendirme görüşmesine bakın.",
  links: [{ label: "Cihaz türlerini tanıyın", href: "/isitme-cihazlari/" }],
};

/** Matris altındaki kısa doğrudan cevaplar (GEO): rakamlar yukarıdaki hesaplanan etiketlerle uyumludur. */
export const matrixAnswers = [
  {
    id: "ric-hangi-markalarda",
    question: "RIC hangi markalarda var?",
    answer:
      "Sitemizde RIC etiketli model aileleri Phonak, Signia, Widex, ReSound ve NuEar markalarında yer alıyor. Oticon'un model verisinde yerleşim etiketi bulunmadığı için Oticon'un RIC seçeneklerini marka sayfasında inceleyin.",
    links: [{ label: "RIC nedir?", href: "/isitme-cihazlari/#ric-rite" }],
  },
  {
    id: "kulak-ici-hangi-markalarda",
    question: "Kulak içi hangi markalarda var?",
    answer:
      "Sitemizde kulak içi seçeneği anılan aileler Oticon (Own SI), Phonak (Virto), Signia (Insio, Silk), NuEar (Miniscopic Synergy iQ, Savant AI) ve açıklamasında ITE seçeneği geçen Widex Allure ile ReSound Nexia'dır. Ayrıntı ve güncel seçenekler için marka sayfalarına bakın.",
    links: [{ label: "Kulak içi cihazlar", href: "/isitme-cihazlari/kulak-ici-ite/" }],
  },
  {
    id: "sarjli-hangi-markalarda",
    question: "Şarjlı hangi markalarda bulunuyor?",
    answer:
      "Şarjlı etiketli aileler profili yer alan markaların hepsinde var; ancak sayıları ve hangi ailelerde olduğu markaya göre değişir. Bir ailenin şarjlı olup olmadığını, marka sayfasında ve değerlendirme sırasında modele göre doğrulayın.",
    links: [{ label: "Şarjlı cihazlar", href: "/isitme-cihazlari/sarj-edilebilir/" }],
  },
  {
    id: "bluetooth-hangi-markalarda",
    question: "Bluetooth hangi markalarda bulunuyor?",
    answer:
      "Profili yer alan markaların model ailelerinin büyük çoğunluğunda Bluetooth etiketi var; ama telefon uyumluluğu ve bağlantı türü markaya ve modele göre farklıdır. Satın almadan önce kendi telefonunuzla uyumu doğrulayın.",
    links: [{ label: "Bluetooth özellikli cihazlar", href: "/isitme-cihazlari/bluetooth-ozellikli/" }],
  },
];
