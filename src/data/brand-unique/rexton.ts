// Rexton sayfası içeriği — yalnızca sitedeki Rexton model verisi + SoT'ta doğrulanmış hizmet olguları.
// Portföy ince (4 aile): sayfa bilinçli olarak kısa tutulur, yapay uzatma yapılmaz.
import { BatteryCharging, Ear, Layers } from "lucide-astro";
import { rextonModels } from "../rexton/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Rexton", rextonModels.items);

export const rextonUnique: UniqueBrandContent = {
  name: "Rexton",
  meta: {
    title: "Rexton İşitme Cihazları: Reach, BiCore, MCore",
    description: `Sitemizde Rexton için ${f.n} model ailesi var: Reach, BiCore, BiCore ITE ve MCore. Şarjlı etiketi yalnızca Reach'te. Darıca'da bilgi alın.`,
  },
  heroSrc: "/images/rexton/models/reach.webp",
  heroParagraphs: [
    `Rexton, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde Rexton için ${f.n} aile listeliyoruz: ${join(f.all)}.`,
    "BiCore ve BiCore ITE aynı ismi taşıyan iki yerleşim (RIC ve kulak içi). Reach listedeki tek şarjlı aile, MCore ise tek kulak arkası (BTE) aile.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "BICORE", title: "BiCore ve BiCore ITE", description: "Aynı isimli iki aile: RIC ve kulak içi." },
    { label: "ŞARJ", title: "Reach Şarjlı", description: "Rexton listesindeki tek şarjlı aile." },
  ],
  floatingCard: { title: "Dört aile, üç yerleşim", description: "RIC, kulak arkası ve kulak içi." },
  intro: {
    heading: "Rexton'a Kısa Bir Bakış",
    paragraphs: [
      "Rexton listesi kısa ve yerleşime göre ayrılıyor: Reach ve BiCore RIC, MCore kulak arkası (BTE), BiCore ITE kulak içi. Bluetooth etiketi Reach ve BiCore'da var; MCore ve BiCore ITE'de yok.",
      "Rexton cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Rexton'un Dört Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Reach: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      BiCore: "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      MCore: "Kulak arkası (BTE) kategorisinde; Bluetooth veya şarjlı etiketi yok.",
      "BiCore ITE": "BiCore isminin kulak içi varyantı; kulak içi etiketli.",
    },
  },
  idealUser: {
    heading: "Rexton'da Hangi Aileye Bakılır?",
    intro: "Rexton listesi kısa olduğu için ayrım çoğunlukla yerleşim ve şarjlı etiketi. Kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "Reach, Rexton listesindeki tek şarjlı aile; RIC ve Bluetooth etiketli.",
        families: f.charge,
      },
      {
        icon: Layers,
        title: "Kulak arkası cihaz düşünenler",
        description: "MCore sitemizde kulak arkası (BTE) kategorisinde; Bluetooth veya şarjlı etiketi yok.",
        families: f.bte,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "BiCore ITE, BiCore isminin kulak içi varyantı. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Rexton Hakkında Merak Edilenler",
    intro: "Rexton'da BiCore ile BiCore ITE, şarjlı aile ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Rexton",
    points: ["Ücretsiz işitme testi", `${f.n} Rexton ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Rexton BiCore ile BiCore ITE arasındaki fark nedir?",
        answer: "Sitemizde BiCore RIC ve Bluetooth etiketli; BiCore ITE aynı ismin kulak içi varyantı. Hangi yerleşimin uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Rexton'da şarjlı aile var mı?",
        answer: "Evet: Reach. Sitemizde Reach RIC, Bluetooth ve şarjlı etiketli. BiCore, MCore ve BiCore ITE için şarjlı etiketi yok.",
      },
      {
        question: "Rexton BiCore ITE'yi satın almadan denemek mümkün mü?",
        answer: "BiCore ITE kulak içi bir varyant; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Rexton İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Reach gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "MCore gibi kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "BiCore ITE gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "İşitme Cihazı Markaları", description: "Rexton'ı diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Rexton Ailelerini Merkezde Sorun",
    description: "Dört Rexton ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 Model Ailesi", "Merkezimiz Darıca'da"],
  },
};
