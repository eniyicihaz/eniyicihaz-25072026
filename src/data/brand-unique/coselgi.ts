// Coselgi sayfası içeriği — yalnızca sitedeki Coselgi model verisi + SoT'ta doğrulanmış hizmet olguları.
// Portföy ince (3 aile): sayfa bilinçli olarak kısa tutulur, yapay uzatma yapılmaz.
import { BatteryCharging, Ear, Layers } from "lucide-astro";
import { coselgiModels } from "../coselgi/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Coselgi", coselgiModels.items);

export const coselgiUnique: UniqueBrandContent = {
  name: "Coselgi",
  meta: {
    title: `Coselgi İşitme Cihazları: ${f.n} Model Ailesi | EniyiCihaz`,
    description: `Sitemizde Coselgi için ${f.n} model ailesi var: Effect, onun kulak içi varyantı Effect ITE ve şarjlı Mojo. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Coselgi, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde Coselgi için ${f.n} aile listeliyoruz: ${join(f.all)}.`,
    "Effect ve Effect ITE aynı ismi taşıyan iki yerleşim (RIC/BTE ve kulak içi); Mojo ise listedeki şarjlı aile.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "EFFECT", title: "Effect ve Effect ITE", description: "Aynı isimli iki aile: RIC/BTE ve kulak içi." },
    { label: "ŞARJ", title: "Mojo Şarjlı", description: "Coselgi listesindeki tek şarjlı aile." },
  ],
  floatingCard: { title: "Üç aile, üç yerleşim", description: "RIC/BTE, kulak içi ve şarjlı RIC." },
  intro: {
    heading: "Coselgi'ye Kısa Bir Bakış",
    paragraphs: [
      "Coselgi sayfası kısa bir liste: üç aile var ve her biri başka bir yerleşimi gösteriyor. Effect sitemizde RIC/BTE ve Bluetooth etiketli, Effect ITE kulak içi, Mojo ise RIC, şarjlı ve Bluetooth etiketli.",
      "Coselgi cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Coselgi'nin Üç Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Effect: "RIC/BTE kategorisinde; Bluetooth etiketli.",
      "Effect ITE": "Effect isminin kulak içi varyantı; kulak içi etiketli.",
      Mojo: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
    },
  },
  idealUser: {
    heading: "Coselgi'de Hangi Aileye Bakılır?",
    intro: "Coselgi listesi kısa olduğu için ayrım çoğunlukla yerleşim ve şarjlı etiketi. Kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "Mojo, Coselgi listesindeki tek şarjlı aile; RIC ve Bluetooth etiketli.",
        families: ["Mojo"],
      },
      {
        icon: Layers,
        title: "Kulak arkası yerleşime bakanlar",
        description: "Effect sitemizde RIC/BTE etiketli; Bluetooth etiketi var, şarjlı etiketi yok.",
        families: ["Effect"],
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Effect ITE, Coselgi listesindeki tek kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Coselgi Hakkında Merak Edilenler",
    intro: "Coselgi'de Effect ile Effect ITE, şarjlı aile ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Coselgi",
    points: ["Ücretsiz işitme testi", `${f.n} Coselgi ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Coselgi Effect ile Effect ITE arasındaki fark nedir?",
        answer: "Sitemizde Effect RIC/BTE etiketli ve Bluetooth etiketli; Effect ITE aynı ismin kulak içi varyantı. Hangi yerleşimin uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Coselgi'de şarjlı aile var mı?",
        answer: "Evet: Mojo. Sitemizde Mojo RIC, şarjlı ve Bluetooth etiketli. Effect ve Effect ITE için şarjlı etiketi yok.",
      },
      {
        question: "Coselgi Effect ITE'yi satın almadan denemek mümkün mü?",
        answer: "Effect ITE kulak içi bir varyant; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Coselgi İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Mojo gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Effect ITE gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme kuralları.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "İşitme Cihazı Markaları", description: "Coselgi'yi diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Coselgi Ailelerini Merkezde Sorun",
    description: "Üç Coselgi ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "3 Model Ailesi", "Merkezimiz Darıca'da"],
  },
};
