// Sonic sayfası içeriği — yalnızca sitedeki Sonic model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Ear, Layers, Smartphone } from "lucide-astro";
import { sonicModels } from "../sonic/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Sonic", sonicModels.items);
const enchant = f.all.filter((n) => n.startsWith("Enchant"));

export const sonicUnique: UniqueBrandContent = {
  name: "Sonic",
  meta: {
    title: "Sonic İşitme Cihazları: Enchant ve Radiant | EniyiCihaz",
    description: `Sitemizde Sonic için ${f.n} model ailesi var: dördü Enchant adını taşıyor (RIC, BTE, kulak içi ve şarjlı), ayrıca Radiant. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Sonic, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Sonic ailesinin ${enchant.length}'ü Enchant adını taşıyor (${join(enchant)}); beşincisi Radiant.`,
    "Enchant adı altında dört ayrı seçenek var: RIC, BTE, kulak içi ve şarjlı. Radiant ise hem RIC hem BTE etiketli ve Bluetooth etiketi taşımıyor.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "ENCHANT", title: `${enchant.length} Enchant Ailesi`, description: "RIC, BTE, kulak içi ve şarjlı seçenekleri tek isim altında." },
    { label: "RADİANT", title: "Radiant", description: "Hem RIC hem BTE etiketli; Bluetooth etiketi yok." },
  ],
  floatingCard: { title: "Tek isim, dört seçenek", description: "Enchant: RIC, BTE, kulak içi ve şarjlı." },
  intro: {
    heading: "Sonic'te Enchant Adının Altındakiler",
    paragraphs: [
      `Sonic listesinin merkezinde Enchant var: ${join(enchant)} sitemizde ayrı kartlar olarak yer alıyor. Bu yüzden Sonic'e bakarken önce Enchant içinde yerleşimi ve şarjlı seçimini yapmak, sonra gerekirse Radiant'a bakmak mantıklı.`,
      "Enchant ile Enchant Şarjlı arasında etiket farkı da var: Enchant RIC, Bluetooth ve şarjlı etiketli; Enchant Şarjlı RIC ve şarjlı etiketli, Bluetooth etiketi yok. Enchant BTE Bluetooth etiketli kulak arkası, Enchant ITE ise kulak içi.",
      "Sonic cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(enchant.length), label: "Enchant adlı aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
    ],
  },
  models: {
    heading: "Sonic'in Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Enchant: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Radiant: "RIC ve BTE etiketli; Bluetooth ve şarjlı etiketi yok.",
      "Enchant BTE": "Güçlü kayıplar (BTE) kategorisinde; Bluetooth etiketli.",
      "Enchant ITE": "Enchant isminin kulak içi varyantı; kulak içi etiketli.",
      "Enchant Şarjlı": "RIC ve şarjlı etiketli; Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Sonic Listesinde Hangi Aileye Bakılır?",
    intro: "Sonic ailelerinde ayrımı çoğunlukla yerleşim ve Bluetooth/şarjlı etiketleri belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "Enchant hem Bluetooth hem şarjlı etiketli; Enchant Şarjlı yalnızca şarjlı etiketli.",
        families: f.charge,
      },
      {
        icon: Layers,
        title: "Kulak arkası (BTE) cihaz düşünenler",
        description: "Enchant BTE Bluetooth etiketli kulak arkası aile; Radiant hem RIC hem BTE etiketli ama Bluetooth etiketi yok.",
        families: f.bte,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi Enchant ve Enchant BTE'de var; Radiant, Enchant ITE ve Enchant Şarjlı'da yok.",
        families: f.bt,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Enchant ITE, Enchant isminin kulak içi varyantı. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Sonic Hakkında Merak Edilenler",
    intro: "Sonic'te Enchant adlı aileler, Radiant, şarjlı seçenekler ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Sonic",
    points: ["Ücretsiz işitme testi", `${f.n} Sonic ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Sonic Enchant ile Enchant Şarjlı arasındaki fark nedir?",
        answer: "Sitemizde ikisi de RIC ve şarjlı etiketli; Enchant'ta ayrıca Bluetooth etiketi var, Enchant Şarjlı'da yok. Hangisinin uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Sonic Radiant hangi yerleşim etiketlerine sahip?",
        answer: "Radiant sitemizde hem RIC hem BTE etiketli; Bluetooth ve şarjlı etiketi yok. Hangi yerleşimin sizin için uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Sonic'te Bluetooth etiketli aileler hangileri?",
        answer: "Sitemizdeki veride Enchant ve Enchant BTE Bluetooth etiketli. Radiant, Enchant ITE ve Enchant Şarjlı'da Bluetooth etiketi yok.",
      },
      {
        question: "Sonic Enchant ITE'yi satın almadan denemek mümkün mü?",
        answer: "Enchant ITE kulak içi bir varyant; kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Sonic İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Enchant ve Enchant Şarjlı gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Enchant BTE ve Radiant'ın BTE etiketi için genel bilgi.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Enchant ITE gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Bluetooth Özellikli Cihazlar", description: "Enchant ve Enchant BTE'deki Bluetooth etiketi için genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "İşitme Cihazı Markaları", description: "Sonic'i diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Sonic Ailelerini Merkezde Sorun",
    description: "Beş Sonic ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 Enchant Ailesi", "Merkezimiz Darıca'da"],
  },
};
