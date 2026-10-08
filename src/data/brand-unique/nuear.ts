// NuEar sayfası içeriği — yalnızca sitedeki NuEar model verisi + SoT'ta doğrulanmış hizmet olguları.
// NuEar'ın üretici/grup ilişkisi (SoT: doğrulanmadı) bu sayfada anılmaz.
import { BatteryCharging, Ear, Layers, Smartphone } from "lucide-astro";
import { nuearModels } from "../nuear/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("NuEar", nuearModels.items);

export const nuearUnique: UniqueBrandContent = {
  name: "NuEar",
  meta: {
    title: "NuEar İşitme Cihazları: NXG AI, Circa, NOW iQ",
    description: `Sitemizde NuEar için ${f.n} model ailesi var: RIC, BTE ve kulak içi etiketli seçenekler. Darıca'da bilgi alın, işitme testinizi ücretsiz yaptırın.`,
  },
  heroAlt: "NuEar işitme cihazı",
  heroParagraphs: [
    `NuEar, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde ${f.n} NuEar ailesi listeliyoruz: ${join(f.all)}.`,
    `Bluetooth etiketi altı ailenin hepsinde var. Şarjlı etiketi ${f.charge.length} ailede. Kulak içi etiketli aile: ${join(f.inEar)}. Savant AI hem RIC hem BTE etiketli.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${f.ric.length} RIC etiketli aile; biri aynı zamanda BTE.` },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
    { label: "KULAK İÇİ", title: "Miniscopic Synergy iQ", description: "NuEar listesindeki tek kulak içi aile." },
  ],
  floatingCard: { title: "İki yerleşimli aile", description: "Savant AI sitemizde hem RIC hem BTE etiketli." },
  intro: {
    heading: "NuEar Ailelerini Yerleşime Göre Okumak",
    paragraphs: [
      `NuEar listesinin büyük kısmı RIC: ${join(f.ric)} sitemizde RIC etiketiyle listeleniyor. Bunlardan Savant AI aynı zamanda BTE etiketli; yani listede kulak arkası seçeneği de bu aile üzerinden sunuluyor.`,
      `Şarjlı etiketi ${join(f.charge)} ailelerinde; Savant AI'da şarjlı etiketi yok. Kulak içi tarafında tek aile var: Miniscopic Synergy iQ.`,
      "NuEar cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "NuEar'ın Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "NXG AI": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "NE Series": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Circa: "Şarjlı seri olarak listelenir; RIC, Bluetooth ve şarjlı etiketli.",
      "Savant AI": "RIC ve BTE etiketli; Bluetooth etiketli, şarjlı etiketi yok.",
      "NOW iQ": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Miniscopic Synergy iQ": "Kulak içi aile; Bluetooth etiketli. Kulak içi cihazlarda 7 günlük deneme uygulanmaz, merkezde demo yapılır.",
    },
  },
  idealUser: {
    heading: "NuEar Listesinde Hangi Aileye Bakılır?",
    intro: "NuEar ailelerinde ayrımı en çok yerleşim (RIC, BTE, kulak içi) ve şarjlı seçimi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "NXG AI, NE Series, Circa ve NOW iQ, sitemizde RIC, Bluetooth ve şarjlı etiketli; aralarındaki tercih işitme değerlendirmesinde netleşir.",
        families: f.charge,
      },
      {
        icon: Layers,
        title: "RIC ya da kulak arkası arasında kararsızlar",
        description: "Savant AI hem RIC hem BTE etiketli tek NuEar ailesi; şarjlı etiketi yok. Hangi yerleşimin uygun olduğu kulak yapınıza göre belirlenir.",
        families: ["Savant AI"],
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Miniscopic Synergy iQ, NuEar listesindeki tek kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Altı NuEar ailesinin hepsinde Bluetooth etiketi var; telefon uyumu modele göre değişir.",
        families: f.bt.slice(0, 4),
      },
    ],
  },
  faq: {
    heading: "NuEar Hakkında Merak Edilenler",
    intro: "NuEar'da kulak içi aile, Savant AI'ın yerleşimi, şarjlı seçenekler ve pil/servis hakkında kısa cevaplar.",
    label: "NuEar",
    points: ["Ücretsiz işitme testi", `${f.n} NuEar ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "NuEar'da kulak içi aile var mı?",
        answer: "Evet: Miniscopic Synergy iQ. Sitemizde kulak içi olarak listeleniyor ve Bluetooth etiketli. Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır; merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "NuEar Savant AI hem RIC hem BTE derken ne anlaşılmalı?",
        answer: "Sitemizdeki veride Savant AI hem RIC hem BTE etiketli ve şarjlı etiketi yok. Hangi yerleşimin sizin için uygun olduğu kulak yapınıza ve işitme kaybınıza göre işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "NuEar'da şarjlı aileler hangileri?",
        answer: `Şarjlı etiketi ${join(f.charge)} ailelerinde. Savant AI ve Miniscopic Synergy iQ için sitemizdeki veride şarjlı etiketi yok.`,
      },
      {
        question: "NuEar'da çocuk veya güçlü kayıplar kategorisinde aile var mı?",
        answer: "Sitemizde çocuk veya güçlü kayıplar kategorisinde listelenen bir NuEar ailesi yok. Bu ihtiyaçlar için diğer marka sayfalarımıza bakabilir veya merkezimizi arayabilirsiniz.",
      },
      {
        question: "NuEar cihazım için servis ve pil nereden alınır?",
        answer: "Teknik servisi Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir. Pil ve aksesuar satışı da merkezimizde yapılır.",
      },
    ],
  },
  related: {
    heading: "NuEar İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "NXG AI, NE Series, Circa ve NOW iQ gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Miniscopic Synergy iQ gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Savant AI'ın BTE etiketi için kulak arkası cihazlara genel bakış.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Oticon", description: "Xceed (güçlü kayıplar) ve üç çocuk ailesinin listelendiği marka sayfası.", href: "/markalar/oticon/" },
      { label: "Phonak", description: "Sky (çocuk) ve Naída (güçlü kayıplar) ailelerinin listelendiği marka sayfası.", href: "/markalar/phonak/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme kuralları.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "İşitme Cihazı Markaları", description: "NuEar'ı diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "NuEar Ailelerini Merkezde Sorun",
    description: "Altı NuEar ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "RIC, BTE ve Kulak İçi", "Merkezimiz Darıca'da"],
  },
};
