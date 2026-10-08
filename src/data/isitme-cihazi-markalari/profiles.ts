// Marka profilleri (Oticon, Phonak, Signia, Widex, ReSound, NuEar) — Faz 2 P2.
//
// Üretici kaynaklı bilgiler (kuruluş yılı, merkez ülke/şehir, felsefe sloganı, teknoloji ve
// uygulama adları, "X için geliştirilmiştir" gibi ürün iddiaları) bu sayfadan TAMAMEN çıkarıldı:
// kaynak ve onay yok (PRODUCT_SOT: marka bilgisi sınırı; "marka sayfalarındaki üretici
// bilgilerinin kaynağı ve onaylayan kişi: KULLANICIDAN BİLGİ GEREKLİ"). Profil yalnızca sitedeki
// model verisinden (src/data/{marka}/models.ts: aile adları ve etiketler) ve SoT'ta doğrulanmış
// olgulardan (18 marka satılıyor; 18 markanın tamamında teknik servis) oluşur.
// Marka sıralaması, "en iyi" veya puan yoktur; fiyat yoktur (COMPANY.md §23).
// Model SAYFASI yoktur: her bağlantı marka sayfasına gider.
import type { GuideSectionMeta } from "../../components/price-guide/price-guide.types";
import type { BrandProfileContent, BrandProfileModel } from "../../components/brand-guide/brand-guide.types";
import { oticonModels } from "../oticon/models";
import { phonakModels } from "../phonak/models";
import { signiaModels } from "../signia/models";
import { widexModels } from "../widex/models";
import { resoundModels } from "../resound/models";
import { nuearModels } from "../nuear/models";

interface RawModel {
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

/** Marka model listesinden gerçek fotoğraflı seçilen ailelerin kartları (logo yedeği kullanılmaz). */
/** Üretici teknolojisi/slogan niteliğindeki etiketler bu sayfada gösterilmez (kaynak ve onay yok). */
const HIDDEN_TAGS = new Set(["BrainHearing", "AI"]);

function pick(items: RawModel[], slugs: string[], brand: string): BrandProfileModel[] {
  return slugs.map((slug) => {
    const item = items.find((i) => i.slug === slug);
    if (!item) throw new Error(`Model bulunamadı: ${slug}`);
    if (!item.image.includes("/models/")) throw new Error(`Gerçek fotoğraf yok: ${slug}`);
    return { name: item.name, category: brand, description: `${item.name.startsWith(brand + " ") ? item.name.slice(brand.length + 1) : item.name} model ailesi; ayrıntılar marka sayfasında.`, tags: item.tags.filter((t) => !HIDDEN_TAGS.has(t)), image: item.image };
  });
}

/** Marka adı öneki çıkarılmış aile adları ("Oticon Intent" → "Intent"). */
function families(items: RawModel[], brand: string): string[] {
  return items.map((i) => i.name.replace(new RegExp(`^${brand}\\s+`), ""));
}

/** Etiketlerden benzersiz cihaz türü/özellik listesi (sırayı korur). */
function tagList(items: RawModel[]): string[] {
  return [...new Set(items.flatMap((i) => i.tags))].filter((t) => !HIDDEN_TAGS.has(t));
}

/** Yalnızca sitedeki model etiketlerinden türetilen kısa kullanım notları (üretici iddiası yok). */
function scenariosFromTags(items: RawModel[], brand: string): { title: string; text: string }[] {
  const out: { title: string; text: string }[] = [];
  const has = (...tags: string[]) => items.filter((i) => i.tags.some((t) => tags.includes(t)));
  const list = (arr: RawModel[]) => families(arr, brand).slice(0, 4).join(", ");
  const charge = has("Şarjlı");
  if (charge.length) out.push({ title: "Şarjlı cihaz arayanlar", text: `Model listemizde ${charge.length}/${items.length} ailede şarjlı etiketi var: ${list(charge)}.` });
  const inEar = has("Kulak İçi");
  if (inEar.length) out.push({ title: "Daha küçük, kulak içi cihaz arayanlar", text: `Kulak içi etiketli aileler: ${list(inEar)}. Uygunluk kulak yapınıza göre değerlendirilir.` });
  const power = has("Güçlü Kayıplar", "Power");
  if (power.length) out.push({ title: "Daha güçlü amplifikasyon gerekenler", text: `Güçlü kayıplar için etiketli aileler: ${list(power)}. Uygunluk işitme testinizin sonucuna göre belirlenir.` });
  const bt = has("Bluetooth");
  if (bt.length && out.length < 3) out.push({ title: "Telefon bağlantısı arayanlar", text: `${bt.length}/${items.length} ailede Bluetooth etiketi var; telefon uyumu modele göre değişir.` });
  return out.slice(0, 3);
}

/** Profil içeriği: yalnızca doğrulanmış olgular ve site verisi. */
function buildProfile(opts: {
  id: string;
  name: string;
  logoSlug: string;
  items: RawModel[];
  pickSlugs: string[];
}): BrandProfileContent {
  const { id, name, logoSlug, items, pickSlugs } = opts;
  return {
    id,
    name,
    logo: `/images/brands/${logoSlug}-logo-seffaf.webp`,
    logoAlt: `${name} logosu`,
    lead: `${name}, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir.`,
    paragraphs: [
      `Bu profil, ${name} markasının sitemizdeki model ailelerini ve cihaz türü / özellik etiketlerini gösterir. Ayrıntılar ve tüm modeller marka sayfasındadır.`,
    ],
    facts: [
      { label: "Merkezimizde", value: "Satış ve teknik servis" },
      { label: "Model ailesi", value: `${items.length} aile` },
    ],
    types: tagList(items),
    families: families(items, name),
    models: pick(items, pickSlugs, name),
    scenarios: scenariosFromTags(items, name),
    note: "Ailelerin özellikleri modele göre değişir; ayrıntılar marka sayfasında ve değerlendirme sırasında netleşir.",
    brandHref: `/markalar/${logoSlug}/`,
    brandLinkLabel: `${name} marka sayfası ve tüm modeller`,
  };
}

export const profilesIntro: GuideSectionMeta = {
  id: "markalar",
  eyebrow: "Marka Profilleri",
  heading: "Marka Profilleri: Cihaz Türleri ve Model Aileleri",
  intro:
    "Bu bölümde Oticon, Phonak, Signia, Widex, ReSound ve NuEar profilleri yer alıyor; diğer markalar kendi marka sayfalarında. Sıralama bir tercih ya da kalite sıralaması değildir. Bilgiler sitemizdeki model listelerinden derlenmiştir.",
};

export const brandSections: Record<string, GuideSectionMeta> = {
  oticon: { id: "oticon", eyebrow: "Oticon", heading: "Oticon İşitme Cihazları ve Modelleri", intro: "Oticon model aileleri, cihaz türleri ve özellik etiketleri." },
  phonak: { id: "phonak", eyebrow: "Phonak", heading: "Phonak İşitme Cihazları ve Modelleri", intro: "Phonak model aileleri, cihaz türleri ve özellik etiketleri." },
  signia: { id: "signia", eyebrow: "Signia", heading: "Signia İşitme Cihazları ve Modelleri", intro: "Signia model aileleri, cihaz türleri ve özellik etiketleri." },
  widex: { id: "widex", eyebrow: "Widex", heading: "Widex İşitme Cihazları ve Modelleri", intro: "Widex model aileleri, cihaz türleri ve özellik etiketleri." },
  resound: { id: "resound", eyebrow: "ReSound", heading: "ReSound İşitme Cihazları ve Modelleri", intro: "ReSound model aileleri, cihaz türleri ve özellik etiketleri." },
  nuear: { id: "nuear-profili", eyebrow: "NuEar", heading: "NuEar İşitme Cihazları ve NuEar Modelleri", intro: "NuEar model aileleri, cihaz türleri ve özellik etiketleri." },
};

const oticonItems = oticonModels.items as RawModel[];
const phonakItems = phonakModels.items as RawModel[];
const signiaItems = signiaModels.items as RawModel[];
const widexItems = widexModels.items as RawModel[];
const resoundItems = resoundModels.items as RawModel[];
const nuearItems = nuearModels.items as RawModel[];

export const brandProfiles: BrandProfileContent[] = [
  buildProfile({ id: "oticon", name: "Oticon", logoSlug: "oticon", items: oticonItems, pickSlugs: ["intent", "own-si", "xceed"] }),
  buildProfile({ id: "phonak", name: "Phonak", logoSlug: "phonak", items: phonakItems, pickSlugs: ["audeo", "naida", "sky"] }),
  buildProfile({ id: "signia", name: "Signia", logoSlug: "signia", items: signiaItems, pickSlugs: ["styletto", "insio", "active"] }),
  buildProfile({ id: "widex", name: "Widex", logoSlug: "widex", items: widexItems, pickSlugs: ["allure", "smartric", "moment-sheer"] }),
  buildProfile({ id: "resound", name: "ReSound", logoSlug: "resound", items: resoundItems, pickSlugs: ["vivia", "nexia", "key"] }),
  buildProfile({ id: "nuear", name: "NuEar", logoSlug: "nuear", items: nuearItems, pickSlugs: ["circa", "miniscopic-synergy-iq"] }),
];
