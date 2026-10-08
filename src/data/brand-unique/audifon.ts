// Audifon sayfası içeriği — yalnızca sitedeki Audifon model verisi + SoT'ta doğrulanmış hizmet olguları.
import { Ear, Layers, Smartphone, Wrench } from "lucide-astro";
import { audifonModels } from "../audifon/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Audifon", audifonModels.items);

export const audifonUnique: UniqueBrandContent = {
  name: "Audifon",
  meta: {
    title: "Audifon İşitme Cihazları: rega R ve sino | EniyiCihaz",
    description: `Sitemizde Audifon için ${f.n} model ailesi var: rega R, üç sino varyantı (S, P, R) ve Sueno Pro. Audifon'da uzaktan ayar yapılmıyor; ayar merkezimizde. Darıca'da bilgi alın.`,
  },
  heroAlt: "Audifon rega R işitme cihazı",
  heroSrc: "/images/audifon/models/rega-r.webp",
  heroParagraphs: [
    `Audifon, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Audifon ailesinin üçü "sino" adını taşıyor: sino S kulak içi, sino P kulak arkası (BTE), sino R RITE. Diğerleri rega R ve Sueno Pro.`,
    "Hizmet tarafında bir fark da var: uzaktan ayar hizmetimiz A&M ve Audifon dışındaki cihazlarda yapılabiliyor; bu nedenle Audifon cihazlarının ayarı merkezimizde yapılır.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "SİNO", title: "3 Sino Varyantı", description: "sino S (kulak içi), sino P (BTE) ve sino R (RITE)." },
    { label: "AYAR", title: "Ayar Merkezde", description: "Audifon cihazlarında uzaktan ayar yapılmıyor." },
  ],
  floatingCard: { title: "Bluetooth: yalnızca rega R", description: "Listedeki tek Bluetooth etiketli Audifon ailesi." },
  intro: {
    heading: "Audifon Listesine Genel Bakış",
    paragraphs: [
      `Audifon sayfasında beş aile var ve etiketler sade: ${join(f.ric)} aileleri RITE etiketli (${f.ric.length} aile; Sueno Pro aynı zamanda ITE etiketli), ${join(f.bte)} kulak arkası (BTE), ${join(f.inEar)} kulak içi. Bluetooth etiketi yalnızca rega R'de var.`,
      "Sitemizdeki Audifon ailelerinde şarjlı veya pilli etiketi tanımlı değil; bu yüzden pil ve şarj konusu, cihaz seçimi sırasında merkezimizde birlikte netleştirilir.",
      "Audifon cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.ric.length), label: "RITE etiketli aile" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Audifon'un Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "rega R": "RITE etiketli; Bluetooth etiketli tek Audifon ailesi.",
      "sino S": "Kulak içi aile; sino ismini taşıyan üç varyanttan biri.",
      "sino P": "Kulak arkası (BTE) aile; sino ismini taşıyan üç varyanttan biri.",
      "sino R": "RITE etiketli aile; sino ismini taşıyan üç varyanttan biri.",
      "Sueno Pro": "RITE ve ITE etiketli aile.",
    },
  },
  idealUser: {
    heading: "Audifon Listesinde Hangi Aileye Bakılır?",
    intro: "Audifon ailelerinde ayrımı çoğunlukla yerleşim (RITE, BTE, kulak içi) belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: Layers,
        title: "RITE yerleşimine bakanlar",
        description: "rega R, sino R ve Sueno Pro RITE etiketli. Bunlardan yalnızca rega R'de Bluetooth etiketi var.",
        families: f.ric,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi Audifon listesinde yalnızca rega R'de var; telefon uyumu modele göre değişir.",
        families: f.bt,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "sino S, Audifon listesindeki kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: Wrench,
        title: "Ayar için merkeze gelebilecek olanlar",
        description: "Audifon cihazlarında uzaktan ayar yapılmıyor; ayarlar merkezimizde yapılır. Merkeze gelemiyorsanız evde hizmet kapsamını bizi arayarak sorabilirsiniz.",
        families: [],
      },
    ],
  },
  faq: {
    heading: "Audifon Hakkında Merak Edilenler",
    intro: "Audifon'da uzaktan ayar, sino varyantları, Bluetooth etiketi ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Audifon",
    points: ["Ücretsiz işitme testi", `${f.n} Audifon ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Audifon cihazlarında uzaktan ayar yapılabiliyor mu?",
        answer: "Hayır. Uzaktan ayar hizmetimiz A&M ve Audifon dışındaki cihazlarda yapılabiliyor; Audifon cihazlarının ayarı merkezimizde yapılır. Merkeze gelmekte zorlanıyorsanız evde hizmetin kapsamını bizi arayarak öğrenebilirsiniz.",
      },
      {
        question: "sino S, sino P ve sino R arasında nasıl karar verilir?",
        answer: "Üçü de sitemizde sino adıyla listeleniyor ama yerleşimleri ayrı: sino S kulak içi, sino P kulak arkası (BTE), sino R RITE. Hangisinin uygun olduğu kulak yapınıza ve işitme kaybınıza göre işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Audifon'da Bluetooth etiketli aile var mı?",
        answer: "Sitemizdeki veride yalnızca rega R Bluetooth etiketli. Diğer dört Audifon ailesinde Bluetooth etiketi yok; telefon bağlantısı önemliyse bunu ilk görüşmede söylemeniz yeterli.",
      },
      {
        question: "Audifon Sueno Pro hangi yerleşim etiketlerine sahip?",
        answer: "Sueno Pro, sitemizde RITE ve ITE etiketleriyle listeleniyor. Hangi yerleşimin sizin için uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Audifon sino S'i satın almadan denemek mümkün mü?",
        answer: "sino S kulak içi bir aile; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Audifon İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Uzaktan Ayar", description: "Uzaktan ayar hizmetinin hangi cihazlarda yapıldığı.", href: "/uygulama-ayar/uzaktan-ayar/" },
      { label: "Evde İşitme Cihazı Hizmeti", description: "Merkeze gelemeyenler için evde hizmet kapsamı.", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "sino S gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "sino P gibi kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "İşitme Cihazı Markaları", description: "Audifon'u diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Audifon Ailelerini Merkezde Sorun",
    description: "Beş Audifon ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "3 Sino Varyantı", "Merkezimiz Darıca'da"],
  },
};
