// A&M sayfası içeriği — yalnızca sitedeki A&M model verisi + SoT'ta doğrulanmış hizmet olguları.
import { Ear, Layers, Wrench, Volume2 } from "lucide-astro";
import { amModels } from "../am/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("A&M", amModels.items);

export const amUnique: UniqueBrandContent = {
  name: "A&M",
  meta: {
    title: "A&M İşitme Cihazları: XTM P12, P8, P6, P4, A4 | EniyiCihaz",
    description: `Sitemizde A&M için ${f.n} model ailesi var: P12, P8, P6 ve P4 numaralı dört kulak arkası (BTE) model ile kişiye özel A4 kulak içi. A&M'de uzaktan ayar yapılmıyor. Darıca'da bilgi alın.`,
  },
  heroAlt: "A&M XTM P12 işitme cihazı",
  heroSrc: "/images/am/models/xtm-p12.webp",
  heroParagraphs: [
    `A&M, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} A&M ailesinin dördü numaralı XTM kulak arkası (BTE) modeli (${join(f.bte)}); beşincisi kulak içi XTM A4.`,
    "Listedeki Bluetooth ve şarjlı etiketli ailelere kıyasla A&M sayfası daha sade: sitemizdeki etiketlerde yalnızca yerleşim ve güç bilgisi var. Uzaktan ayar A&M cihazlarında yapılmaz; ayarlar merkezimizde yapılır.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "BTE", title: `${f.bte.length} Kulak Arkası Model`, description: `${join(f.bte)} numaralı XTM BTE modelleri.` },
    { label: "AYAR", title: "Ayar Merkezde", description: "A&M cihazlarında uzaktan ayar yapılmıyor." },
  ],
  floatingCard: { title: "Yüksek güç etiketi: P12", description: "Yüksek güç etiketli tek A&M ailesi." },
  intro: {
    heading: "A&M Listesi: Numaralı BTE Modeller ve Bir Kulak İçi",
    paragraphs: [
      `A&M sayfasının yapısı diğer markalardan farklı: beş ailenin dördü aynı XTM adıyla numaralı (${join(f.bte)}) ve dördü de kulak arkası (BTE). Beşincisi XTM A4 ise kulak içi ve sitemizde kişiye özel üretim etiketiyle listeleniyor.`,
      `Sitemizdeki A&M etiketlerinde Bluetooth veya şarjlı etiketi yok. Yüksek güç etiketi yalnızca XTM P12'de var. Bu yüzden A&M ailelerini ayırt etmek için işitme değerlendirmesi ve kulak yapınız belirleyici olur.`,
      "A&M cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir. Uzaktan ayar ise A&M'de yapılamıyor.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bte.length), label: "kulak arkası (BTE) aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
      { value: String(f.power.length), label: "yüksek güç etiketli aile" },
    ],
  },
  models: {
    heading: "A&M'in Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "XTM P12": "Kulak arkası (BTE); sitemizde yüksek güç etiketiyle listelenir.",
      "XTM P8": "Kulak arkası (BTE) aile; numaralı XTM modellerinden biri.",
      "XTM P6": "Kulak arkası (BTE) aile; numaralı XTM modellerinden biri.",
      "XTM P4": "Kulak arkası (BTE) aile; numaralı XTM modellerinden biri.",
      "XTM A4": "Kulak içi aile; sitemizde kişiye özel üretim etiketiyle listelenir.",
    },
  },
  idealUser: {
    heading: "A&M Listesinde Hangi Aileye Bakılır?",
    intro: "A&M'de ayrımı yerleşim ve güç etiketi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: Layers,
        title: "Kulak arkası (BTE) cihaz düşünenler",
        description: "XTM P12, P8, P6 ve P4 sitemizde numaralı dört BTE model olarak listeleniyor. Aralarındaki seçim işitme kaybınıza göre değerlendirmede yapılır.",
        families: f.bte,
      },
      {
        icon: Volume2,
        title: "Yüksek güç etiketine bakanlar",
        description: "Yüksek güç etiketi A&M listesinde yalnızca XTM P12'de var. Uygunluk işitme testi sonucuna göre belirlenir.",
        families: f.power,
      },
      {
        icon: Ear,
        title: "Kişiye özel kulak içi düşünenler",
        description: "XTM A4 kulak içi ve kişiye özel üretim etiketli. Kalıp süreci ve deneme kuralları ayrı; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: Wrench,
        title: "Ayar için merkeze gelebilecek olanlar",
        description: "A&M cihazlarında uzaktan ayar yapılmıyor; ayarlar merkezimizde yapılır.",
        families: [],
      },
    ],
  },
  faq: {
    heading: "A&M Hakkında Merak Edilenler",
    intro: "A&M'de uzaktan ayar, XTM P modelleri, yüksek güç etiketi ve kulak içi aile hakkında kısa cevaplar.",
    label: "A&M",
    points: ["Ücretsiz işitme testi", `${f.n} A&M ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "A&M cihazlarında uzaktan ayar yapılabiliyor mu?",
        answer: "Hayır. Uzaktan ayar hizmetimiz A&M ve Audifon dışındaki cihazlarda yapılabiliyor; A&M cihazlarının ayarı merkezimizde yapılır. Merkeze gelmekte zorlanıyorsanız evde hizmetin kapsamını bizi arayarak öğrenebilirsiniz.",
      },
      {
        question: "XTM P12, P8, P6 ve P4 arasında nasıl karar verilir?",
        answer: "Sitemizde dördü de kulak arkası (BTE); yalnızca P12'de yüksek güç etiketi var. Seçim işitme kaybınızın derecesine ve kulak yapınıza göre, işitme testinden sonra yapılır.",
      },
      {
        question: "A&M'de Bluetooth veya şarjlı etiketli aile var mı?",
        answer: "Sitemizdeki A&M verisinde Bluetooth veya şarjlı etiketi tanımlı değil. Telefon bağlantısı ya da şarj önemliyse bunu ilk görüşmede söylemeniz, diğer markalarımızdaki seçeneklere de bakmamızı sağlar.",
      },
      {
        question: "A&M XTM A4 için kulak kalıbı gerekir mi, denemek mümkün mü?",
        answer: "XTM A4 sitemizde kişiye özel üretim etiketli kulak içi aile. Kulak kalıbı ve 3D kalıp hizmetimiz merkezimizde veriliyor; cihaz alımlarında ilk kalıplar ücretsizdir. Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır; merkezde yaklaşık 20 dakikalık demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "A&M İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Uzaktan Ayar", description: "Uzaktan ayar hizmetinin hangi cihazlarda yapıldığı.", href: "/uygulama-ayar/uzaktan-ayar/" },
      { label: "Evde İşitme Cihazı Hizmeti", description: "Merkeze gelemeyenler için evde hizmet kapsamı.", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "XTM P modelleri gibi kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Kalıp Alımı", description: "XTM A4 gibi kişiye özel cihazlarda kulak kalıbı süreci.", href: "/uygulama-ayar/kalip-alimi/" },
      { label: "İşitme Cihazı Markaları", description: "A&M'i diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "A&M Ailelerini Merkezde Sorun",
    description: "Beş A&M ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 Numaralı BTE Model", "Merkezimiz Darıca'da"],
  },
};
