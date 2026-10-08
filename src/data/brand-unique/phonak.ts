// Phonak sayfası içeriği — yalnızca sitedeki Phonak model verisi + SoT'ta doğrulanmış hizmet olguları.
import { Baby, Volume2, Ear, Shuffle } from "lucide-astro";
import { phonakModels } from "../phonak/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Phonak", phonakModels.items);

export const phonakUnique: UniqueBrandContent = {
  name: "Phonak",
  meta: {
    title: "Phonak İşitme Cihazları: Audéo, Naída, CROS | EniyiCihaz",
    description: `Sitemizde Phonak için ${f.n} model ailesi var: RIC ve kulak arkası, kulak içi, çocuk, güçlü kayıplar ve tek taraflı kayıp için CROS. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroAlt: "Phonak Audéo işitme cihazı",
  heroParagraphs: [
    `Phonak, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde ${f.n} Phonak ailesi listeliyoruz ve her biri sitemizde ayrı bir kategoride: RIC, güçlü kayıplar, çocuk, kulak arkası (BTE), kulak içi ve tek taraflı kayıp.`,
    `Bluetooth etiketi altı ailenin hepsinde var. Şarjlı etiketi ${f.charge.length} ailede (${join(f.charge)}), pilli etiketi yalnızca Bolero'da.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "TEK TARAF", title: "CROS Ailesi", description: "Tek taraflı işitme kaybı kategorisinde listelenen Phonak ailesi." },
    { label: "BLUETOOTH", title: `${f.bt.length}/${f.n} Ailede Bluetooth`, description: "Phonak listesinde Bluetooth etiketi olmayan aile yok." },
  ],
  floatingCard: { title: "Kategori çeşitliliği", description: "Çocuk, güçlü kayıp, kulak içi ve tek taraflı kayıp için ayrı aileler." },
  intro: {
    heading: "Phonak'ın Altı Ailesi Nasıl Ayrışıyor?",
    paragraphs: [
      "Phonak sayfasındaki altı aile, sitemizde birbirinden farklı kategorilerle listeleniyor: Audéo RIC, Naída güçlü kayıplar, Sky çocuk, Bolero kulak arkası (BTE), Virto kulak içi ve CROS tek taraflı işitme kaybı. Yani liste, aynı ailenin altı varyantı değil, altı ayrı ihtiyaç başlığı.",
      `Şarjlı etiketi ${join(f.charge)} ailelerinde var. Bolero pilli çalışır; Virto'da şarjlı veya pilli etiketi sitemizdeki veride yer almıyor.`,
      "Phonak cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.single.length), label: "tek taraflı (CROS) aile" },
    ],
  },
  models: {
    heading: "Phonak'ın Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "Audéo": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Naída": "Güçlü kayıplar kategorisinde; Bluetooth ve şarjlı etiketli.",
      Sky: "Çocuk kategorisinde; Bluetooth ve şarjlı etiketli.",
      Bolero: "Kulak arkası (BTE) kategorisinde; Bluetooth etiketli, pilli.",
      Virto: "Kulak içi kategorisinde; Bluetooth etiketli. Kulak içi olduğu için 7 günlük deneme kapsamı dışındadır.",
      CROS: "Tek taraflı işitme kaybı kategorisinde; Bluetooth ve şarjlı etiketli.",
    },
  },
  idealUser: {
    heading: "Phonak Ailelerinden Hangisine Bakılır?",
    intro: "Phonak'ın altı ailesi sitemizde ayrı kategorilerde olduğu için ihtiyaç başlığı çoğu zaman aile adını da gösterir. Gruplar yalnızca bu kategorilere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: Shuffle,
        title: "Tek kulağında işitme kaybı olanlar",
        description: "CROS, Phonak listesinde tek taraflı işitme kaybı kategorisindeki aile. Tek taraflı kayıpta uygunluk işitme testi ve değerlendirmeyle belirlenir.",
        families: f.single,
      },
      {
        icon: Baby,
        title: "Çocuğu için cihaz arayanlar",
        description: "Sky, Phonak listesindeki çocuk kategorisi ailesi; Bluetooth ve şarjlı etiketli. Çocuklarda değerlendirme için çocuk işitme testi sayfamıza bakabilirsiniz.",
        families: f.child,
      },
      {
        icon: Volume2,
        title: "Güçlü kayıplar kategorisine bakanlar",
        description: "Naída güçlü kayıplar kategorisinde listelenir; Bluetooth ve şarjlı etiketli. Uygunluk işitme testi sonucuna göre belirlenir.",
        families: f.power,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Virto kulak içi bir aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Phonak Hakkında Merak Edilenler",
    intro: "Phonak CROS, çocuk ailesi, pilli ve şarjlı seçenekler ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Phonak",
    points: ["Ücretsiz işitme testi", `${f.n} Phonak ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Phonak CROS hangi kategoride listeleniyor?",
        answer: "CROS, sitemizde tek taraflı işitme kaybı kategorisinde listelenen Phonak ailesi; Bluetooth ve şarjlı etiketli. Tek kulaktaki kayıpta bu ailenin sizin için uygun olup olmadığı işitme testi ve değerlendirmeden sonra belirlenir.",
      },
      {
        question: "Phonak'ta şarjlı ve pilli aileler hangileri?",
        answer: `Şarjlı etiketi ${join(f.charge)} ailelerinde; pilli etiketi yalnızca Bolero'da. Virto'da sitemizdeki veride şarjlı veya pilli etiketi yok. Pil ve aksesuar satışını merkezimizde yapıyoruz.`,
      },
      {
        question: "Audéo ile Naída arasında nasıl karar verilir?",
        answer: "Sitemizde Audéo RIC, Naída güçlü kayıplar kategorisinde listeleniyor; ikisi de Bluetooth ve şarjlı etiketli. Seçim işitme kaybınızın derecesine ve kulak yapınıza göre, işitme testinden sonra yapılır.",
      },
      {
        question: "Phonak Sky çocuklar için mi?",
        answer: "Sky, sitemizde çocuk kategorisinde listeleniyor. Çocuklarda cihaz seçimi işitme değerlendirmesinden sonra yapılır; çocuk işitme testi ve çocuklarda SGK desteği için ilgili sayfalarımıza bakabilirsiniz.",
      },
      {
        question: "Phonak Virto'yu satın almadan denemek mümkün mü?",
        answer: "Virto kulak içi bir aile; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Phonak İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Tek Taraflı İşitme Kaybı", description: "Phonak CROS'un listelendiği tek taraflı kayıp kategorisi.", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/" },
      { label: "Çocuk İşitme Testi", description: "Phonak Sky'a bakmadan önce çocuklarda değerlendirme.", href: "/degerlendirme/cocuk-isitme-testi/" },
      { label: "İleri Derece İşitme Kaybı", description: "Naída'nın listelendiği güçlü kayıplar kategorisi.", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Bolero gibi pilli kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Pil ve Aksesuar", description: "Bolero gibi pilli cihazlar için pil ve aksesuar bilgisi.", href: "/servis-bakim/pil-aksesuar/" },
      { label: "İşitme Cihazı Markaları", description: "Phonak'ı diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Phonak Ailelerini Merkezde Sorun",
    description: "Altı Phonak ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "CROS dahil 6 Aile", "Merkezimiz Darıca'da"],
  },
};
