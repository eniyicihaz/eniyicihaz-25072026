// Oticon sayfası içeriği — yalnızca sitedeki Oticon model verisi + SoT'ta doğrulanmış hizmet olguları.
// (Kurallar için bkz. build.ts başlığı.)
import { Baby, Volume2, Ear, BatteryCharging } from "lucide-astro";
import { oticonModels } from "../oticon/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Oticon", oticonModels.items);
const noBt = f.all.filter((n) => !f.bt.includes(n));

export const oticonUnique: UniqueBrandContent = {
  name: "Oticon",
  meta: {
    title: `Oticon İşitme Cihazları: ${f.n} Model Ailesi | EniyiCihaz`,
    description: `Sitemizde Oticon için ${f.n} model ailesi var: şarjlı, kulak içi, çocuk ve güçlü kayıplar etiketli seçenekler. Darıca'daki merkezimizde bilgi alın, işitme testinizi ücretsiz yaptırın.`,
  },
  heroParagraphs: [
    `Oticon, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde Oticon için ${f.n} model ailesi listeliyoruz; diğer marka sayfalarımızda bu sayı üç ile altı arasında.`,
    "Listede günlük kullanım ailelerinin yanında çocuk, güçlü kayıplar ve kulak içi etiketli aileler de var. Hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${f.all[0]}'ten ${f.all[f.n - 1]}'a kadar sitemizdeki Oticon listesi.` },
    { label: "ÇOCUK", title: `${f.child.length} Çocuk Ailesi`, description: `${join(f.child)}.` },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
  ],
  floatingCard: { title: `Kulak içi: ${f.inEar[0]}`, description: "Oticon listesindeki tek kulak içi aile." },
  intro: {
    heading: "Oticon Listesine Genel Bakış",
    paragraphs: [
      `Oticon sayfasını diğer markalarımızdan ayıran şey liste genişliği: ${f.n} aile içinde günlük kullanım ailelerinin yanında çocuklar için üç aile (${join(f.child)}) ve güçlü kayıplar etiketli iki aile (${join(f.power)}) var.`,
      `Bluetooth etiketi ${f.n} ailenin ${f.bt.length}'unda bulunuyor; etiketi olmayanlar ${join(noBt)}. Şarjlı etiketi ${f.charge.length} ailede var: ${join(f.charge)}.`,
      "Oticon cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.child.length), label: "çocuk ailesi" },
    ],
  },
  models: {
    heading: `Oticon'un ${f.n} Model Ailesi`,
    intro: "Aileler sitemizdeki sınıflandırmaya göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangi ailenin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Intent: "Bluetooth ve şarjlı etiketli aile.",
      Real: "Bluetooth ve şarjlı etiketli aile.",
      "Own SI": "Kulak içi aile; Bluetooth etiketli. Kulak içi cihazlarda 7 günlük deneme uygulanmaz, merkezde demo yapılır.",
      Zeal: "Bluetooth ve şarjlı etiketli aile.",
      "Opn S": "Bluetooth etiketli aile; şarjlı etiketi yok.",
      Ruby: "Bluetooth etiketli aile; şarjlı etiketi yok.",
      Xceed: "Sitemizde güçlü kayıplar kategorisinde listelenir; Bluetooth etiketli.",
      "Xceed Play": "Hem çocuk hem güçlü kayıplar kategorisinde listelenir.",
      "Play PX": "Çocuk kategorisinde listelenir; şarjlı etiketli, Bluetooth etiketi yok.",
      "Opn Play": "Çocuk kategorisinde listelenir; Bluetooth etiketli.",
      "Jet PX": "Şarjlı seri olarak listelenir; Bluetooth etiketi de var.",
      Zircon: "Bluetooth etiketli aile; şarjlı etiketi yok.",
    },
  },
  idealUser: {
    heading: "Oticon Listesinde Hangi Aileye Bakılır?",
    intro: `Oticon'un ${f.n} ailesi, sitemizdeki etiketlere göre ihtiyaç gruplarına ayrılabiliyor. Gruplar yalnızca bu etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.`,
    profiles: [
      {
        icon: Baby,
        title: "Çocuğu için cihaz arayanlar",
        description: `${join(f.child)} sitemizde çocuk kategorisinde. Çocuklarda işitme değerlendirmesi ve SGK desteği ayrı sayfalarımızda anlatılıyor.`,
        families: f.child,
      },
      {
        icon: Volume2,
        title: "Güçlü kayıplar kategorisine bakanlar",
        description: `${join(f.power)} güçlü kayıplar etiketiyle listelenir; Xceed Play aynı zamanda çocuk kategorisinde. Uygunluk işitme testi sonucuna göre belirlenir.`,
        families: f.power,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Own SI, Oticon listesindeki tek kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: BatteryCharging,
        title: "Şarj etme alışkanlığı olanlar",
        description: `${join(f.charge)} şarjlı etiketli. Bunlardan Play PX'te Bluetooth etiketi yok; diğer dördünde var.`,
        families: f.charge,
      },
    ],
  },
  faq: {
    heading: "Oticon Hakkında Merak Edilenler",
    intro: `Oticon'un ${f.n} model ailesi, çocuk ve kulak içi aileleri, Bluetooth ve şarjlı etiketleri hakkında kısa cevaplar.`,
    label: "Oticon",
    points: ["Ücretsiz işitme testi", `${f.n} Oticon ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Oticon'da çocuklar için hangi aileler listeleniyor?",
        answer: `Sitemizde çocuk kategorisinde üç Oticon ailesi var: ${join(f.child)}. Xceed Play aynı zamanda güçlü kayıplar kategorisinde. Çocuklarda cihaz seçimi işitme değerlendirmesinden sonra yapılır; çocuk işitme testi ve çocuklarda SGK desteği için ilgili sayfalarımıza bakabilirsiniz.`,
      },
      {
        question: "Oticon'un şarjlı modelleri hangileri?",
        answer: `${join(f.charge)} şarjlı etiketiyle listelenir; diğer yedi ailede şarjlı etiketi yok. Pilli cihazların pil ve aksesuarları merkezimizde satılır.`,
      },
      {
        question: "Oticon Own SI'yı satın almadan denemek mümkün mü?",
        answer: "Own SI kulak içi bir aile. Kulak içi cihazlar, satın alarak 7 güne kadar deneme kapsamı dışındadır; merkezimizde ise yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "Xceed ile Xceed Play arasındaki fark nedir?",
        answer: "Sitemizde ikisi de güçlü kayıplar kategorisinde listeleniyor; Xceed Play ayrıca çocuk kategorisinde yer alıyor. Hangisinin uygun olduğu işitme testi ve değerlendirmeden sonra belirlenir.",
      },
      {
        question: "Oticon'un Bluetooth etiketi olmayan aileleri hangileri?",
        answer: `Sitemizdeki veride ${join(noBt)} ailelerinde Bluetooth etiketi yok; ikisi de çocuk kategorisinde. Diğer on ailede Bluetooth etiketi var. Telefon uyumu modele göre değişir.`,
      },
    ],
  },
  related: {
    heading: "Oticon İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Çocuk İşitme Testi", description: "Xceed Play, Play PX ve Opn Play'e bakmadan önce çocuklarda değerlendirme.", href: "/degerlendirme/cocuk-isitme-testi/" },
      { label: "Çocuklarda SGK", description: "Çocuklar için SGK desteği ve süreç.", href: "/sgk/cocuklarda-sgk/" },
      { label: "İleri Derece İşitme Kaybı", description: "Xceed ve Xceed Play'in listelendiği güçlü kayıplar kategorisi.", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Own SI gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Şarj Edilebilir Cihazlar", description: "Şarjlı etiketli beş Oticon ailesi için genel bilgi.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "İşitme Cihazı Markaları", description: "Oticon'u diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Oticon Ailelerini Merkezde Sorun",
    description: `${f.n} Oticon ailesi arasından size uygun olanı işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.`,
    trustItems: ["Ücretsiz İşitme Testi", `${f.n} Model Ailesi`, "Merkezimiz Darıca'da"],
  },
};
