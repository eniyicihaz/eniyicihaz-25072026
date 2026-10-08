// Beltone sayfası içeriği — yalnızca sitedeki Beltone model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Ear, Layers, Smartphone } from "lucide-astro";
import { beltoneModels } from "../beltone/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Beltone", beltoneModels.items);

export const beltoneUnique: UniqueBrandContent = {
  name: "Beltone",
  meta: {
    title: `Beltone İşitme Cihazları: ${f.n} Model Ailesi | EniyiCihaz`,
    description: `Sitemizde Beltone için ${f.n} model ailesi var: Envision, Commence, Serene ve onun kulak içi varyantı Serene ITE, ayrıca kulak arkası Boost Max S. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Beltone, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Beltone ailesinden ikisi aynı isimde: Serene ve onun kulak içi varyantı Serene ITE.`,
    `Serene sitemizde hem RIC hem BTE etiketli. Şarjlı etiketi ${join(f.charge)} ailelerinde; Boost Max S kulak arkası (BTE) olarak listeleniyor.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "SERENE", title: "Serene ve Serene ITE", description: "Aynı isimli iki aile: RIC/BTE ve kulak içi." },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
  ],
  floatingCard: { title: "Çift yerleşimli aile", description: "Serene sitemizde hem RIC hem BTE etiketli." },
  intro: {
    heading: "Beltone Listesinde Serene'in İki Yüzü",
    paragraphs: [
      `Beltone listesinin ayırt edici yanı Serene: sitemizde hem RIC hem BTE etiketiyle, bir de ayrı kartta kulak içi varyantıyla (Serene ITE) yer alıyor. Yani tek isim altında üç yerleşim seçeneği listeleniyor.`,
      `Envision ve Commence RIC etiketli; ikisi de şarjlı. Bluetooth etiketi ${join(f.bt)} ailelerinde var; Commence ve Boost Max S'te yok. Boost Max S listedeki saf kulak arkası (BTE) aile.`,
      "Beltone cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.ric.length), label: "RIC etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Beltone'un Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Envision: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Serene: "RIC ve BTE etiketli; Bluetooth etiketli, şarjlı etiketi yok.",
      "Serene ITE": "Serene isminin kulak içi varyantı; kulak içi etiketli.",
      Commence: "RIC kategorisinde; şarjlı etiketli, Bluetooth etiketi yok.",
      "Boost Max S": "Kulak arkası (BTE) kategorisinde listelenir.",
    },
  },
  idealUser: {
    heading: "Beltone Listesinde Hangi Aileye Bakılır?",
    intro: "Beltone ailelerinde ayrımı çoğunlukla yerleşim ve şarjlı etiketi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "Envision ve Commence RIC ve şarjlı etiketli. Envision'da Bluetooth etiketi de var, Commence'ta yok.",
        families: f.charge,
      },
      {
        icon: Layers,
        title: "RIC ya da BTE arasında kararsızlar",
        description: "Serene sitemizde hem RIC hem BTE etiketli; Boost Max S saf BTE. Hangi yerleşimin uygun olduğu kulak yapınıza göre belirlenir.",
        families: ["Serene", "Boost Max S"],
      },
      {
        icon: Ear,
        title: "Serene'in kulak içi varyantına bakanlar",
        description: "Serene ITE, Serene isminin kulak içi versiyonu. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi yalnızca Envision ve Serene'de var; telefon uyumu modele göre değişir.",
        families: f.bt,
      },
    ],
  },
  faq: {
    heading: "Beltone Hakkında Merak Edilenler",
    intro: "Beltone'da Serene ve Serene ITE, şarjlı aileler, Bluetooth etiketi ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Beltone",
    points: ["Ücretsiz işitme testi", `${f.n} Beltone ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Beltone Serene ile Serene ITE arasındaki fark nedir?",
        answer: "Sitemizde Serene hem RIC hem BTE etiketli; Serene ITE ise aynı ismin kulak içi varyantı. Hangi yerleşimin sizin için uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Beltone'da şarjlı aileler hangileri?",
        answer: "Şarjlı etiketi Envision ve Commence ailelerinde. Serene, Serene ITE ve Boost Max S için sitemizdeki veride şarjlı etiketi yok.",
      },
      {
        question: "Beltone Commence'ta Bluetooth var mı?",
        answer: "Sitemizdeki veride Commence şarjlı ve RIC etiketli, Bluetooth etiketi yok. Bluetooth etiketi Envision ve Serene'de var. Telefon bağlantısı önemliyse bunu ilk görüşmede söyleyin.",
      },
      {
        question: "Beltone Boost Max S hangi kategoride listeleniyor?",
        answer: "Boost Max S sitemizde kulak arkası (BTE) kategorisinde; Bluetooth veya şarjlı etiketi yok. Uygunluk işitme testi sonucuna göre belirlenir.",
      },
      {
        question: "Beltone Serene ITE'yi satın almadan denemek mümkün mü?",
        answer: "Serene ITE kulak içi bir varyant; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Beltone İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Envision ve Commence gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Serene ITE gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Boost Max S ve Serene'in BTE etiketi için genel bilgi.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme kuralları.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "İşitme Cihazı Markaları", description: "Beltone'u diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Beltone Ailelerini Merkezde Sorun",
    description: "Beş Beltone ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "Serene ve Serene ITE", "Merkezimiz Darıca'da"],
  },
};
