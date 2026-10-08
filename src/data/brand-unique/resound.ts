// ReSound sayfası içeriği — yalnızca sitedeki ReSound model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Battery, Smartphone, Volume2 } from "lucide-astro";
import { resoundModels } from "../resound/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("ReSound", resoundModels.items);

export const resoundUnique: UniqueBrandContent = {
  name: "ReSound",
  meta: {
    title: `ReSound İşitme Cihazları: ${f.n} Model Ailesi | EniyiCihaz`,
    description: `Sitemizde ReSound için ${f.n} model ailesi var: dört RIC ve iki kulak arkası (BTE); altısında Bluetooth, beşinde şarjlı etiketi. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `ReSound, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} ReSound ailesinin dördü RIC (${join(f.ric)}), ikisi kulak arkası (${join(f.bte)}).`,
    `Bluetooth etiketi altı ailenin hepsinde var; şarjlı etiketi ${f.charge.length} ailede. Pilli etiketli tek ReSound ailesi: ${join(f.pilli)}.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${f.ric.length} RIC ve ${f.bte.length} kulak arkası (BTE) aile.` },
    { label: "ŞARJ", title: `${f.charge.length}/${f.n} Ailede Şarjlı`, description: `Şarjlı olmayan tek aile: ${join(f.pilli)}.` },
    { label: "GÜÇLÜ KAYIP", title: "ENZO Q", description: "Sitemizde güçlü kayıplar (BTE) kategorisinde listelenir." },
  ],
  floatingCard: { title: "Şarjlı ağırlıklı liste", description: "Altı ailenin beşi şarjlı etiketli." },
  intro: {
    heading: "ReSound'da Seçim: Şarjlı RIC mi, Kulak Arkası mı?",
    paragraphs: [
      `ReSound listesinin ağırlığı şarjlı RIC ailelerinde: ${join(f.ric)} dördü de RIC, Bluetooth ve şarjlı etiketli. Bu dört ailenin sitemizdeki etiketleri aynı olduğu için aralarındaki tercih işitme değerlendirmesinde ve denemede netleşir.`,
      "Kulak arkası tarafında iki aile var: ENZO Q sitemizde güçlü kayıplar (BTE) kategorisinde ve şarjlı etiketli; Key ise pilli. Sitemizde kulak içi veya çocuk kategorisinde listelenen bir ReSound ailesi yok.",
      "ReSound cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.ric.length), label: "RIC aile" },
    ],
  },
  models: {
    heading: "ReSound'un Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Vivia: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Nexia: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Omnia: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Savi: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "ENZO Q": "Güçlü kayıplar (BTE) kategorisinde; Bluetooth ve şarjlı etiketli.",
      Key: "Kulak arkası (BTE) kategorisinde; Bluetooth etiketli, pilli.",
    },
  },
  idealUser: {
    heading: "ReSound Listesinde Kime Hangi Etiket?",
    intro: "ReSound ailelerinde ayrımı en çok RIC / kulak arkası ayrımı ile pilli/şarjlı seçimi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "Vivia, Nexia, Omnia ve Savi, sitemizde aynı etiketlerle (RIC, Bluetooth, şarjlı) listeleniyor; ayırt etmek için işitme değerlendirmesi ve deneme gerekir.",
        families: f.ric,
      },
      {
        icon: Volume2,
        title: "Güçlü kayıplar kategorisine bakanlar",
        description: "ENZO Q güçlü kayıplar (BTE) kategorisinde; Bluetooth ve şarjlı etiketli. Uygunluk işitme testi sonucuna göre belirlenir.",
        families: f.power,
      },
      {
        icon: Battery,
        title: "Pilli kulak arkası tercih edenler",
        description: "Key, ReSound listesindeki tek pilli aile; kulak arkası (BTE) kategorisinde. Pil ve aksesuar satışını merkezimizde yapıyoruz.",
        families: f.pilli,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Altı ReSound ailesinin hepsinde Bluetooth etiketi var; telefon uyumu modele göre değişir.",
        families: f.bt.slice(0, 4),
      },
    ],
  },
  faq: {
    heading: "ReSound Hakkında Merak Edilenler",
    intro: "ReSound'da şarjlı ve pilli aileler, ENZO Q, RIC aileleri arasındaki tercih ve Bluetooth etiketi hakkında kısa cevaplar.",
    label: "ReSound",
    points: ["Ücretsiz işitme testi", `${f.n} ReSound ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "ReSound'da pilli aile var mı?",
        answer: "Evet: Key. Sitemizde Key, kulak arkası (BTE) ve pilli bir aile olarak listeleniyor. Diğer beş ReSound ailesi şarjlı etiketli. Pil ve aksesuar satışını merkezimizde yapıyoruz.",
      },
      {
        question: "ReSound ENZO Q hangi kategoride listeleniyor?",
        answer: "ENZO Q, sitemizde güçlü kayıplar (BTE) kategorisinde; Bluetooth ve şarjlı etiketli. Uygunluk işitme testi sonucuna ve kulak yapınıza göre belirlenir.",
      },
      {
        question: "Vivia, Nexia, Omnia ve Savi arasında nasıl karar verilir?",
        answer: "Sitemizde dördü de RIC, Bluetooth ve şarjlı etiketli; etiketlerle ayırt etmek mümkün değil. Seçim işitme kaybınıza, kulak yapınıza ve kullanım beklentinize göre işitme değerlendirmesinden sonra yapılır; merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "ReSound'da kulak içi veya çocuk ailesi var mı?",
        answer: "Sitemizde kulak içi veya çocuk kategorisinde listelenen bir ReSound ailesi yok. Bu ihtiyaçlar için diğer marka sayfalarımıza bakabilir veya merkezimizi arayabilirsiniz.",
      },
      {
        question: "ReSound'da Bluetooth etiketi olmayan aile var mı?",
        answer: "Hayır. Sitemizdeki altı ReSound ailesinin hepsinde Bluetooth etiketi var. Telefon uyumu modele göre değişir; uyumu merkezimizde birlikte kontrol edebiliriz.",
      },
    ],
  },
  related: {
    heading: "ReSound İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Altı ReSound ailesinden beşinin şarjlı olması nedeniyle şarjlı cihazlara genel bakış.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "ENZO Q ve Key gibi kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Bluetooth Özellikli Cihazlar", description: "Altı ailenin tamamında Bluetooth etiketi olduğundan telefon bağlantısı hakkında genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "İleri Derece İşitme Kaybı", description: "ENZO Q'nun listelendiği güçlü kayıplar kategorisi.", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme kuralları.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "Tüm Markalar", description: "Kulak içi veya çocuk kategorisi için diğer 17 markanın sayfaları.", href: "/markalar/" },
    ],
  },
  cta: {
    heading: "ReSound Ailelerini Merkezde Sorun",
    description: "Altı ReSound ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "5 Şarjlı Aile", "Merkezimiz Darıca'da"],
  },
};
