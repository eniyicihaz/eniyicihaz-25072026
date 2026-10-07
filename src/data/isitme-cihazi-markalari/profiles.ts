// Altı ana marka profili (Oticon, Phonak, Signia, Widex, ReSound, NuEar).
//
// Her profil, sitenin DOĞRULANMIŞ marka verisinden türetilir (src/data/{marka}/
// overview, intro, models, ideal-user, why-oticon): menşei, kuruluş, felsefe,
// teknoloji, model aileleri, etiketler ve kullanım senaryoları oradan gelir —
// burada yeni teknik iddia, model veya özellik uydurulmaz. Model aileleri ve
// etiketler `models.ts` dosyalarından okunur (drift olmasın diye elle
// kopyalanmaz). Model SAYFASI yoktur: her bağlantı marka sayfasına gider.
//
// Editoryal kural (PRINCIPLES.md §5): marka sıralaması, "en iyi" veya puan yok;
// profiller yaklaşımı, cihaz türlerini ve kullanım senaryolarını anlatır.
// Fiyat yoktur (COMPANY.md §23).
import type { GuideSectionMeta } from "../../components/price-guide/price-guide.types";
import type { BrandProfileContent, BrandProfileModel } from "../../components/brand-guide/brand-guide.types";
import { oticonModels } from "../oticon/models";
import { phonakModels } from "../phonak/models";
import { signiaModels } from "../signia/models";
import { widexModels } from "../widex/models";
import { resoundModels } from "../resound/models";
import { nuearModels } from "../nuear/models";
import { phonakIdealUser } from "../phonak/ideal-user";
import { signiaIdealUser } from "../signia/ideal-user";
import { widexIdealUser } from "../widex/ideal-user";
import { resoundIdealUser } from "../resound/ideal-user";
import { nuearIdealUser } from "../nuear/ideal-user";

interface RawModel {
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

/** Marka model listesinden gerçek fotoğraflı seçilen ailelerin kartları (logo yedeği kullanılmaz). */
function pick(items: RawModel[], slugs: string[]): BrandProfileModel[] {
  return slugs.map((slug) => {
    const item = items.find((i) => i.slug === slug);
    if (!item) throw new Error(`Model bulunamadı: ${slug}`);
    if (!item.image.includes("/models/")) throw new Error(`Gerçek fotoğraf yok: ${slug}`);
    return { name: item.name, category: item.category, description: item.description, tags: item.tags, image: item.image };
  });
}

/** Marka adı öneki çıkarılmış aile adları ("Oticon Intent" → "Intent"). */
function families(items: RawModel[], brand: string): string[] {
  return items.map((i) => i.name.replace(new RegExp(`^${brand}\\s+`), ""));
}

/** Etiketlerden benzersiz cihaz türü/özellik listesi (sırayı korur). */
function tagList(items: RawModel[]): string[] {
  return [...new Set(items.flatMap((i) => i.tags))];
}

/** Marka sayfasındaki "kimler için" profillerinden fiyat içermeyen ilk 3'ü. */
function scenariosFrom(profiles: { title: string; description: string }[]) {
  return profiles
    .filter((p) => !/fiyat/i.test(p.title + p.description))
    .slice(0, 3)
    .map((p) => ({ title: p.title, text: p.description }));
}

export const profilesIntro: GuideSectionMeta = {
  id: "markalar",
  eyebrow: "Öne Çıkan Markalar",
  heading: "Altı Ana Marka: Yaklaşımları, Cihaz Türleri ve Model Aileleri",
  intro:
    "Aşağıdaki altı marka, merkezimizde en çok sorulan ve marka sayfası bulunan ana markalardır. Her biri farklı bir teknoloji yaklaşımı ve model yelpazesi sunar; sıralama bir tercih ya da kalite sıralaması değildir. Bilgiler, her markanın kendi sayfasındaki doğrulanmış içerikten derlenmiştir.",
};

export const brandSections: Record<string, GuideSectionMeta> = {
  oticon: {
    id: "oticon",
    eyebrow: "Oticon",
    heading: "Oticon İşitme Cihazları ve Modelleri",
    intro: "BrainHearing® yaklaşımıyla tanınan Danimarka merkezli marka: yaklaşımı, model aileleri ve hangi senaryolarda değerlendirildiği.",
  },
  phonak: {
    id: "phonak",
    eyebrow: "Phonak",
    heading: "Phonak İşitme Cihazları ve Modelleri",
    intro: "Kesintisiz bağlantıyı öne çıkaran İsviçre merkezli marka: yaklaşımı, model aileleri ve hangi senaryolarda değerlendirildiği.",
  },
  signia: {
    id: "signia",
    eyebrow: "Signia",
    heading: "Signia İşitme Cihazları ve Modelleri",
    intro: "Yapay zekâ destekli, kişiselleştirilmiş konuşma deneyimini öne çıkaran Alman kökenli marka.",
  },
  widex: {
    id: "widex",
    eyebrow: "Widex",
    heading: "Widex İşitme Cihazları ve Modelleri",
    intro: "Doğal ses yaklaşımıyla bilinen Danimarka merkezli, aile şirketi geleneğinden gelen marka.",
  },
  resound: {
    id: "resound",
    eyebrow: "ReSound",
    heading: "ReSound İşitme Cihazları ve Modelleri",
    intro: "Kablosuz bağlantı teknolojilerinde erken adım atmasıyla tanınan Danimarka merkezli marka.",
  },
  nuear: {
    id: "nuear-profili",
    eyebrow: "NuEar",
    heading: "NuEar İşitme Cihazları ve NuEar Modelleri",
    intro: "Amerikan kökenli NuEar: bağlantılı ve sağlık odaklı işitme deneyimi.",
  },
};

const oticonItems = oticonModels.items as RawModel[];
const phonakItems = phonakModels.items as RawModel[];
const signiaItems = signiaModels.items as RawModel[];
const widexItems = widexModels.items as RawModel[];
const resoundItems = resoundModels.items as RawModel[];
const nuearItems = nuearModels.items as RawModel[];

export const brandProfiles: BrandProfileContent[] = [
  {
    id: "oticon",
    name: "Oticon",
    logo: "/images/brands/oticon-logo-seffaf.webp",
    logoAlt: "Oticon logosu",
    lead:
      "Oticon, 1904'te kurulan, BrainHearing® yaklaşımıyla tanınan Danimarka merkezli bir işitme cihazı markasıdır.",
    paragraphs: [
      "Marka, sesi yalnızca yükseltmek yerine beynin sesi doğal şekilde işleme sürecini desteklemeyi amaçlayan bir yaklaşım benimser. Bu yaklaşım Intent, Real, Own SI ve Zeal gibi farklı model ailelerinde kullanıcının yaşam tarzına ve işitme ihtiyacına göre şekillenir.",
      "Oticon'un yelpazesinde şarjlı ve pilli seçenekler, çocuklara yönelik aileler ve ileri derece kayıplar için güçlendirilmiş modeller bir arada bulunur. Cihaz yerleşimi (RIC, BTE, kulak içi) her ailede farklıdır; ayrıntı marka sayfasındadır.",
    ],
    facts: [
      { label: "Menşei", value: "Danimarka" },
      { label: "Kuruluş", value: "1904" },
      { label: "Marka yaklaşımı", value: "BrainHearing® — beynin sesi işlemesini destekleme" },
      { label: "Teknoloji", value: "Yapay zekâ destekli ses işleme (güncel ailelerde)" },
      { label: "Model ailesi", value: `${oticonItems.length} aile` },
    ],
    types: tagList(oticonItems),
    families: families(oticonItems, "Oticon"),
    models: pick(oticonItems, ["intent", "own-si", "xceed"]),
    scenarios: [
      { title: "Güncel teknoloji arayanlar", text: "Yapay zekâ destekli ses işlemeyi önceleyen kullanıcılar için Intent gibi güncel aileler değerlendirilir." },
      { title: "Çocuklar için çözüm arayan aileler", text: "Play PX, Opn Play ve Xceed Play serileri çocuklar için geliştirilmiştir." },
      { title: "İleri derece kaybı olanlar", text: "Xceed ailesi güçlü amplifikasyon ihtiyacı olan kullanıcılar için geliştirilmiştir." },
    ],
    note: "Model fiyatı yazmıyoruz; fiyat farkını nasıl anlayacağınızı fiyat rehberimizde ele alıyoruz.",
    brandHref: "/markalar/oticon/",
    brandLinkLabel: "Oticon marka sayfası ve tüm modeller",
  },
  {
    id: "phonak",
    name: "Phonak",
    logo: "/images/brands/phonak-logo-seffaf.webp",
    logoAlt: "Phonak logosu",
    lead:
      "Phonak, İsviçre merkezli Sonova Grubu'na bağlı ve 1947'den beri işitme cihazı üreten, \"Life is on.\" felsefesiyle bilinen bir markadır.",
    paragraphs: [
      "Marka, işitme cihazını yalnızca bir tıbbi cihaz değil, kullanıcının aktif yaşamına kesintisiz bağlı kalmasını sağlayan bir bağlantı aracı olarak konumlandırır. Sitedeki marka verisine göre evrensel Bluetooth desteği (iPhone ve Android) ve konuşma odaklı ses işleme öne çıkan yönleridir.",
      "Ürün yelpazesi Audéo (RIC), Naída (güçlü kayıplar), Sky (çocuk), Bolero (BTE), Virto (kulak içi) ve CROS (tek taraflı işitme kaybı) ailelerinden oluşur.",
    ],
    facts: [
      { label: "Menşei", value: "İsviçre (Sonova Grubu)" },
      { label: "Kuruluş", value: "1947" },
      { label: "Marka yaklaşımı", value: "\"Life is on.\" — kesintisiz bağlantı ve aktif yaşam" },
      { label: "Bağlantı", value: "Evrensel Bluetooth (iPhone + Android)" },
      { label: "Model ailesi", value: `${phonakItems.length} aile` },
    ],
    types: tagList(phonakItems),
    families: families(phonakItems, "Phonak"),
    models: pick(phonakItems, ["audeo", "naida", "sky"]),
    scenarios: scenariosFrom(phonakIdealUser.profiles),
    note: "Ailelerin hangi telefon ve özelliklerle uyumlu olduğu modele göre değişir; kendi telefonunuzla uyumu değerlendirme sırasında birlikte kontrol edebiliriz.",
    brandHref: "/markalar/phonak/",
    brandLinkLabel: "Phonak marka sayfası ve tüm modeller",
  },
  {
    id: "signia",
    name: "Signia",
    logo: "/images/brands/signia-logo-seffaf.webp",
    logoAlt: "Signia logosu",
    lead:
      "Signia, Almanya kökenli WS Audiology grubuna bağlı; \"Life sounds brilliant.\" felsefesiyle yapay zekâ destekli, kişiye özel konuşma deneyimi sunan bir işitme cihazı markasıdır.",
    paragraphs: [
      "Marka verisine göre Own Voice Processing (OVP) teknolojisi ve entegre yapay zekâ çipiyle bilinir. Yelpaze, modern RIC tasarımlardan kulak içi ve spor/aktif kullanıma yönelik ailelere kadar uzanır.",
      "Styletto, Pure, Insio, Silk, Active ve Motion ailelerinde bu yaklaşım, kullanıcının yaşam tarzına ve tasarım tercihine göre şekillenir.",
    ],
    facts: [
      { label: "Menşei", value: "Almanya (WS Audiology Grubu)" },
      { label: "Marka yaklaşımı", value: "\"Life sounds brilliant.\" — yapay zekâ destekli konuşma deneyimi" },
      { label: "Teknoloji", value: "Own Voice Processing (OVP)" },
      { label: "Bağlantı", value: "Entegre yapay zekâ çipi + Bluetooth" },
      { label: "Model ailesi", value: `${signiaItems.length} aile` },
    ],
    types: tagList(signiaItems),
    families: families(signiaItems, "Signia"),
    models: pick(signiaItems, ["styletto", "insio", "active"]),
    scenarios: scenariosFrom(signiaIdealUser.profiles),
    brandHref: "/markalar/signia/",
    brandLinkLabel: "Signia marka sayfası ve tüm modeller",
  },
  {
    id: "widex",
    name: "Widex",
    logo: "/images/brands/widex-logo-seffaf.webp",
    logoAlt: "Widex logosu",
    lead:
      "Widex, 1956'da Danimarka'da kurulan, aile şirketi geleneğini sürdüren ve \"Less is more in natural hearing\" ses felsefesiyle bilinen bir işitme cihazı markasıdır.",
    paragraphs: [
      "Marka, sesi olabildiğince az işleyerek beynin sesi daha doğal ve detaylı algılamasını hedefler. Marka verisinde öne çıkan teknoloji PureSound™ (ZeroDelay ses işleme), bağlantı tarafında ise Bluetooth ve Widex Moment uygulamasıdır.",
      "Allure, SmartRIC, Moment Sheer, Beyond, Evoke ve Unique ailelerinde yaklaşım, kullanıcının işitme ihtiyacına ve yaşam tarzına göre şekillenir.",
    ],
    facts: [
      { label: "Menşei", value: "Danimarka (WS Audiology Grubu)" },
      { label: "Kuruluş", value: "1956" },
      { label: "Marka yaklaşımı", value: "\"Less is more in natural hearing\" — doğal ses deneyimi" },
      { label: "Teknoloji", value: "PureSound™ (ZeroDelay ses işleme)" },
      { label: "Bağlantı", value: "Bluetooth + Widex Moment uygulaması" },
      { label: "Model ailesi", value: `${widexItems.length} aile` },
    ],
    types: tagList(widexItems),
    families: families(widexItems, "Widex"),
    models: pick(widexItems, ["allure", "smartric", "moment-sheer"]),
    scenarios: scenariosFrom(widexIdealUser.profiles),
    brandHref: "/markalar/widex/",
    brandLinkLabel: "Widex marka sayfası ve tüm modeller",
  },
  {
    id: "resound",
    name: "ReSound",
    logo: "/images/brands/resound-logo-seffaf.webp",
    logoAlt: "ReSound logosu",
    lead:
      "ReSound, kökleri 1943'te Danavox adıyla kurulan, bugün Danimarka merkezli GN Grubu'na bağlı ve kablosuz bağlantı teknolojilerinde erken adım atmasıyla tanınan bir işitme cihazı markasıdır.",
    paragraphs: [
      "Marka verisine göre kulak kanalı mikrofonu M&RIE ve Auracast (Bluetooth LE Audio) desteği öne çıkar; ReSound Nexia, Auracast yayın sesi desteğini sunan ilk işitme cihazı ailelerinden biri olmuştur. Bağlantı tarafında Smart 3D uygulaması yer alır.",
      "Vivia, Nexia, Omnia, Savi, ENZO Q ve Key ailelerinde yaklaşım, kullanıcının işitme ihtiyacına ve bağlantı beklentisine göre şekillenir.",
    ],
    facts: [
      { label: "Menşei", value: "Danimarka (GN Grubu)" },
      { label: "Kuruluş", value: "1943 (Danavox olarak)" },
      { label: "Marka yaklaşımı", value: "Akıllı bağlantı ve doğal mekansal işitme" },
      { label: "Teknoloji", value: "M&RIE (kulak kanalı mikrofonu)" },
      { label: "Bağlantı", value: "Auracast (Bluetooth LE Audio) + Smart 3D uygulaması" },
      { label: "Model ailesi", value: `${resoundItems.length} aile` },
    ],
    types: tagList(resoundItems),
    families: families(resoundItems, "ReSound"),
    models: pick(resoundItems, ["vivia", "nexia", "key"]),
    scenarios: scenariosFrom(resoundIdealUser.profiles),
    brandHref: "/markalar/resound/",
    brandLinkLabel: "ReSound marka sayfası ve tüm modeller",
  },
  {
    id: "nuear",
    name: "NuEar",
    logo: "/images/brands/nuear-logo-seffaf.webp",
    logoAlt: "NuEar logosu",
    lead:
      "NuEar, 1976'da San Diego'da kurulan Amerikan kökenli bir işitme cihazı markasıdır.",
    paragraphs: [
      "Marka, işitme cihazını yalnızca bir ses yükseltme aracı değil, günlük aktivite ve sağlık takibini de içeren bağlantılı bir deneyim olarak konumlandırır; bu deneyimin uygulaması Hear Circle'dır.",
      "NXG AI, NE Series, Circa, Savant AI, NOW iQ ve Miniscopic Synergy iQ ailelerinde yaklaşım, kullanıcının işitme ihtiyacına ve yaşam tarzına göre şekillenir. Sitemizde yer alan NuEar ailelerinin tamamında Bluetooth etiketi bulunur.",
    ],
    facts: [
      { label: "Menşei", value: "ABD" },
      { label: "Kuruluş", value: "1976" },
      { label: "Marka yaklaşımı", value: "Bağlantılı ve sağlık odaklı işitme deneyimi" },
      { label: "Teknoloji", value: "NXG AI ses işleme" },
      { label: "Bağlantı", value: "Hear Circle uygulaması + Bluetooth" },
      { label: "Model ailesi", value: `${nuearItems.length} aile` },
    ],
    types: tagList(nuearItems),
    families: families(nuearItems, "NuEar"),
    models: pick(nuearItems, ["circa", "miniscopic-synergy-iq"]),
    scenarios: scenariosFrom(nuearIdealUser.profiles),
    brandHref: "/markalar/nuear/",
    brandLinkLabel: "NuEar marka sayfası ve tüm modeller",
  },
];
