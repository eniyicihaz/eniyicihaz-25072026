// Bernafon sayfası içeriği — yalnızca sitedeki Bernafon model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Battery, Ear, Layers } from "lucide-astro";
import { bernafonModels } from "../bernafon/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Bernafon", bernafonModels.items);
const encanta = f.all.filter((n) => n.startsWith("Encanta"));
const noCharge = f.all.filter((n) => !f.charge.includes(n));

export const bernafonUnique: UniqueBrandContent = {
  name: "Bernafon",
  meta: {
    title: "Bernafon İşitme Cihazları: Encanta ve Juna | EniyiCihaz",
    description: `Sitemizde Bernafon için ${f.n} model ailesi var: dördü Encanta adını taşıyor (RIC, BTE ve kulak içi), ayrıca Juna ve pilli Zerena. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroSrc: "/images/bernafon/models/encanta.webp",
  heroParagraphs: [
    `Bernafon, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Bernafon ailesinin ${encanta.length}'ü Encanta adını taşıyor (${join(encanta)}); geri kalan ikisi ${join(["Juna", "Zerena"])}.`,
    `Encanta adı altında üç yerleşim var: RIC (Encanta, Alpha XT), BTE (Encanta BTE) ve kulak içi (Encanta CIC). Zerena ise listedeki tek pilli aile.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "ENCANTA", title: `${encanta.length} Encanta Ailesi`, description: "RIC, BTE ve kulak içi yerleşimleri tek isim altında." },
    { label: "ŞARJ", title: `${f.charge.length}/${f.n} Ailede Şarjlı`, description: `Şarjlı etiketi olmayanlar: ${join(noCharge)}.` },
  ],
  floatingCard: { title: "Tek isim, üç yerleşim", description: "Encanta: RIC, BTE ve kulak içi." },
  intro: {
    heading: "Bernafon'da Encanta Adının Altındakiler",
    paragraphs: [
      `Bernafon listesinin merkezinde Encanta var: ${join(encanta)} sitemizde ayrı kartlar olarak yer alıyor ve üç farklı yerleşimi kapsıyor. Bu yüzden Bernafon'a bakarken önce Encanta içinde yerleşimi seçmek, sonra gerekirse Juna ve Zerena'ya bakmak mantıklı.`,
      `Bluetooth etiketi ${f.bt.length} ailede var; yalnızca Zerena'da yok. Şarjlı etiketi ${join(f.charge)} ailelerinde; Zerena pilli etiketli, Encanta CIC için şarjlı veya pilli etiketi tanımlı değil.`,
      "Bernafon cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(encanta.length), label: "Encanta adlı aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
    ],
  },
  models: {
    heading: "Bernafon'un Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Encanta: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Encanta Alpha XT": "RIC kategorisinde; Bluetooth ve şarjlı etiketli. Encanta adını taşıyan dört aileden biri.",
      "Encanta BTE": "Güçlü kayıplar (BTE) kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Encanta CIC": "Kulak içi aile; Bluetooth etiketli. Encanta adını taşıyan dört aileden biri.",
      Juna: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Zerena: "Kulak arkası (BTE) kategorisinde; pilli etiketli, Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Bernafon Listesinde Hangi Aileye Bakılır?",
    intro: "Bernafon ailelerinde ayrımı çoğunlukla yerleşim ve şarjlı/pilli seçimi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "Encanta, Encanta Alpha XT ve Juna RIC, Bluetooth ve şarjlı etiketli; sitemizde aynı etiketlerle listeleniyor, aralarındaki tercih değerlendirmede netleşir.",
        families: ["Encanta", "Encanta Alpha XT", "Juna"],
      },
      {
        icon: Layers,
        title: "Kulak arkası (BTE) cihaz düşünenler",
        description: "Encanta BTE sitemizde güçlü kayıplar (BTE) kategorisinde; Bluetooth ve şarjlı etiketli. Zerena ise pilli ve Bluetooth etiketi yok.",
        families: f.bte,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Encanta CIC, Bernafon listesindeki tek kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: Battery,
        title: "Pilli cihaz tercih edenler",
        description: "Zerena, Bernafon listesindeki tek pilli aile. Pil ve aksesuar satışını merkezimizde yapıyoruz.",
        families: f.pilli,
      },
    ],
  },
  faq: {
    heading: "Bernafon Hakkında Merak Edilenler",
    intro: "Bernafon'da Encanta adlı aileler, şarjlı ve pilli seçenekler ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Bernafon",
    points: ["Ücretsiz işitme testi", `${f.n} Bernafon ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Bernafon'da Encanta ile Encanta Alpha XT, Encanta BTE ve Encanta CIC nasıl ayrışıyor?",
        answer: "Dördü de sitemizde Encanta adını taşıyor ve yerleşimleri farklı: Encanta ve Alpha XT RIC, Encanta BTE kulak arkası, Encanta CIC kulak içi. Alpha XT ve Encanta'nın etiketleri aynı; hangisinin uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Bernafon'da şarjlı aileler hangileri?",
        answer: `Şarjlı etiketi ${join(f.charge)} ailelerinde. Encanta CIC için şarjlı etiketi yok; Zerena pilli etiketli.`,
      },
      {
        question: "Bernafon Zerena pilli mi, Bluetooth var mı?",
        answer: "Zerena sitemizde kulak arkası (BTE) ve pilli etiketli; Bluetooth etiketi yok. Pil ve aksesuar satışını merkezimizde yapıyoruz.",
      },
      {
        question: "Bernafon Encanta CIC'i satın almadan denemek mümkün mü?",
        answer: "Encanta CIC kulak içi bir aile; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "Bernafon Juna ile Encanta arasında nasıl karar verilir?",
        answer: "Sitemizde ikisi de RIC, Bluetooth ve şarjlı etiketli; etiketlerle ayırt etmek mümkün değil. Seçim kulak yapınıza, işitme kaybınıza ve kullanım beklentinize göre işitme değerlendirmesinden sonra yapılır.",
      },
    ],
  },
  related: {
    heading: "Bernafon İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Encanta ve Juna gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Encanta BTE ve Zerena gibi kulak arkası cihazlara genel bakış.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Encanta CIC gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Pil ve Aksesuar", description: "Zerena gibi pilli cihazlar için pil ve aksesuar bilgisi.", href: "/servis-bakim/pil-aksesuar/" },
      { label: "İşitme Cihazı Markaları", description: "Bernafon'u diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Bernafon Ailelerini Merkezde Sorun",
    description: "Altı Bernafon ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 Encanta Ailesi", "Merkezimiz Darıca'da"],
  },
};
