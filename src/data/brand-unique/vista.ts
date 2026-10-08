// Vista sayfası içeriği — yalnızca sitedeki Vista model verisi + SoT'ta doğrulanmış hizmet olguları.
// Portföy ince (4 aile): sayfa bilinçli olarak kısa tutulur, yapay uzatma yapılmaz.
import { BatteryCharging, Ear, Layers, Smartphone } from "lucide-astro";
import { vistaModels } from "../vista/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Vista", vistaModels.items);

export const vistaUnique: UniqueBrandContent = {
  name: "Vista",
  meta: {
    title: `Vista İşitme Cihazları: ${f.n} Model Ailesi | EniyiCihaz`,
    description: `Sitemizde Vista için ${f.n} model ailesi var: V, B, T ve IC. Şarjlı etiketi yalnızca T'de, kulak içi aile IC kişiye özel üretim etiketli. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Vista, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde Vista için ${f.n} aile listeliyoruz ve adları kısa: ${join(f.all)}.`,
    "Dört aile dört farklı etiket setiyle listeleniyor: V RIC ve Bluetooth, B BTE/RIC, T şarjlı RIC, IC ise kişiye özel kulak içi.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "ŞARJ", title: "T Şarjlı", description: "Vista listesindeki tek şarjlı aile; RIC etiketli." },
    { label: "KULAK İÇİ", title: "IC Kulak İçi", description: "Kişiye özel üretim etiketli kulak içi aile." },
  ],
  floatingCard: { title: "Dört aile, dört etiket seti", description: "Her aile sitemizde farklı yerleşim ve özellik etiketiyle yer alıyor." },
  intro: {
    heading: "Vista'ya Kısa Bir Bakış",
    paragraphs: [
      "Vista listesi kısa: dört ailenin her biri başka bir etiket setiyle listeleniyor. V RIC ve Bluetooth etiketli, B hem BTE hem RIC etiketli, T RIC ve şarjlı etiketli, IC ise kulak içi.",
      "Bluetooth ve şarjlı etiketleri birbirini tamamlıyor: V'de Bluetooth var ama şarjlı etiketi yok, T'de şarjlı var ama Bluetooth etiketi yok. Her ikisini de arıyorsanız bunu ilk görüşmede söylemeniz, diğer markalarımızdaki seçeneklere de bakmamızı sağlar.",
      "Vista cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Vista'nın Dört Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      V: "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      B: "BTE/RIC etiketli; Bluetooth veya şarjlı etiketi yok.",
      T: "RIC kategorisinde; şarjlı etiketli, Bluetooth etiketi yok.",
      IC: "Kulak içi aile; kişiye özel üretim etiketli.",
    },
  },
  idealUser: {
    heading: "Vista'da Hangi Aileye Bakılır?",
    intro: "Vista listesi kısa olduğu için ayrım çoğunlukla yerleşim ve şarjlı/Bluetooth etiketi. Kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "T, Vista listesindeki tek şarjlı aile; RIC etiketli, Bluetooth etiketi yok.",
        families: f.charge,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi Vista listesinde yalnızca V'de var; telefon uyumu modele göre değişir.",
        families: f.bt,
      },
      {
        icon: Layers,
        title: "Kulak arkası yerleşime bakanlar",
        description: "B sitemizde BTE/RIC etiketli; Bluetooth veya şarjlı etiketi yok.",
        families: f.bte,
      },
      {
        icon: Ear,
        title: "Kişiye özel kulak içi düşünenler",
        description: "IC kulak içi ve kişiye özel üretim etiketli. Kalıp süreci ve deneme kuralları ayrı; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Vista Hakkında Merak Edilenler",
    intro: "Vista'da V ve T arasındaki etiket farkı, B'nin yerleşimi ve kişiye özel kulak içi aile hakkında kısa cevaplar.",
    label: "Vista",
    points: ["Ücretsiz işitme testi", `${f.n} Vista ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Vista V ile Vista T arasındaki fark nedir?",
        answer: "Sitemizde ikisi de RIC etiketli. V Bluetooth etiketli ama şarjlı etiketi yok; T şarjlı etiketli ama Bluetooth etiketi yok. Hangisinin uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Vista B BTE mi, RIC mi?",
        answer: "Sitemizdeki veride B hem BTE hem RIC etiketli; Bluetooth veya şarjlı etiketi yok. Hangi yerleşimin sizin için uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Vista IC için kulak kalıbı gerekir mi, denemek mümkün mü?",
        answer: "IC sitemizde kişiye özel üretim etiketli kulak içi aile. Kulak kalıbı ve 3D kalıp hizmetimiz merkezimizde veriliyor; cihaz alımlarında ilk kalıplar ücretsizdir. Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır; merkezde yaklaşık 20 dakikalık demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Vista İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Vista T gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Vista IC gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kalıp Alımı", description: "Kişiye özel kulak içi cihazlarda kulak kalıbı süreci.", href: "/uygulama-ayar/kalip-alimi/" },
      { label: "İşitme Cihazı Markaları", description: "Vista'yı diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Vista Ailelerini Merkezde Sorun",
    description: "Dört Vista ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 Model Ailesi", "Merkezimiz Darıca'da"],
  },
};
