// Widex sayfası içeriği — yalnızca sitedeki Widex model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Battery, Smartphone, Volume2 } from "lucide-astro";
import { widexModels } from "../widex/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Widex", widexModels.items);
const noBt = f.all.filter((n) => !f.bt.includes(n));
const noCharge = f.all.filter((n) => !f.charge.includes(n));

export const widexUnique: UniqueBrandContent = {
  name: "Widex",
  meta: {
    title: "Widex İşitme Cihazları: Allure, SmartRIC, Beyond",
    description: `Sitemizde Widex için ${f.n} model ailesi var: dört RIC, iki kulak arkası (BTE); şarjlı ve pilli seçenekler, Bluetooth etiketsiz bir aile. Darıca'da bilgi alın.`,
  },
  heroSrc: "/images/widex/models/allure.webp",
  heroParagraphs: [
    `Widex, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Widex ailesinin dördü RIC (${join(f.ric)}), ikisi kulak arkası (${join(f.bte)}).`,
    `Widex listesinde Bluetooth ve şarj etiketleri her ailede aynı değil. Bluetooth etiketi olmayan aile: ${join(noBt)}. Pilli aileler: ${join(f.pilli)}. Şarjlı etiketi bulunmayanlar: ${join(noCharge)}.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${f.ric.length} RIC ve ${f.bte.length} kulak arkası (BTE) aile.` },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
    { label: "PİL", title: `${f.pilli.length} Pilli Aile`, description: `${join(f.pilli)}.` },
  ],
  floatingCard: { title: "Etiketler farklılaşıyor", description: "Widex'te her ailede Bluetooth ve şarjlı etiketi yok." },
  intro: {
    heading: "Widex'te Etiketler Neden Önemli?",
    paragraphs: [
      `Widex'te altı ailenin hepsi aynı özellikleri taşımıyor: Bluetooth etiketi ${f.bt.length} ailede, şarjlı etiketi ${f.charge.length} ailede var. Bu yüzden bir Widex ailesine bakarken kartlardaki etiketleri tek tek okumak gerekiyor.`,
      `${join(noBt)}, Bluetooth etiketi bulunmayan tek Widex ailesi; ${join(f.pilli)} ise pilli çalışıyor. ${join(f.bte)} kulak arkası (BTE), geri kalan dördü RIC.`,
      "Widex cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bte.length), label: "kulak arkası (BTE) aile" },
    ],
  },
  models: {
    heading: "Widex'in Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Allure: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      SmartRIC: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Moment Sheer": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Beyond: "Güçlü kayıplar (BTE) kategorisinde; Bluetooth etiketli, pilli.",
      Evoke: "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      Unique: "Kulak arkası (BTE); pilli, Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Widex Listesinde Etiketlere Göre Seçim",
    intro: "Widex ailelerinde ayrımı en çok şarjlı/pilli ve Bluetooth etiketleri yapıyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: `${join(f.charge)} üçü de RIC, Bluetooth ve şarjlı etiketli; sitemizde aynı etiketlerle listeleniyor.`,
        families: f.charge,
      },
      {
        icon: Battery,
        title: "Pilli cihaz tercih edenler",
        description: `${join(f.pilli)} pilli aileler; ikisi de kulak arkası (BTE). Pil ve aksesuar satışını merkezimizde yapıyoruz.`,
        families: f.pilli,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: `Bluetooth etiketi ${f.n} ailenin ${f.bt.length}'inde var; ${join(noBt)} bu etikete sahip değil. Telefon uyumu modele göre değişir.`,
        families: f.bt.slice(0, 4),
      },
      {
        icon: Volume2,
        title: "Güçlü kayıplar kategorisine bakanlar",
        description: "Beyond, sitemizde güçlü kayıplar (BTE) kategorisinde; pilli ve Bluetooth etiketli. Uygunluk işitme testi sonucuna göre belirlenir.",
        families: f.power,
      },
    ],
  },
  faq: {
    heading: "Widex Hakkında Merak Edilenler",
    intro: "Widex'te Bluetooth etiketi olmayan aile, şarjlı ve pilli seçenekler ve RIC aileleri arasındaki tercih hakkında kısa cevaplar.",
    label: "Widex",
    points: ["Ücretsiz işitme testi", `${f.n} Widex ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Widex'te Bluetooth etiketi olmayan aile var mı?",
        answer: "Evet: Unique. Sitemizde Unique, kulak arkası (BTE) ve pilli bir aile olarak listeleniyor; Bluetooth etiketi yok. Diğer beş Widex ailesinde Bluetooth etiketi var.",
      },
      {
        question: "Widex'te şarjlı ve pilli aileler hangileri?",
        answer: `Şarjlı etiketi ${join(f.charge)} ailelerinde. Beyond ve Unique pilli; Evoke için şarjlı veya pilli etiketi sitemizdeki veride yer almıyor.`,
      },
      {
        question: "Widex Allure, SmartRIC ve Moment Sheer arasında nasıl seçim yapılır?",
        answer: "Sitemizde üçü de RIC, Bluetooth ve şarjlı etiketli; etiketlerle ayırt etmek mümkün değil. Seçim kulak yapınıza, işitme kaybınıza ve kullanım beklentinize göre işitme değerlendirmesinden sonra yapılır; cihazları merkezimizde denemeniz için demo yapılır.",
      },
      {
        question: "Widex Beyond hangi kategoride listeleniyor?",
        answer: "Beyond, sitemizde güçlü kayıplar (BTE) kategorisinde; Bluetooth etiketli ve pilli. Uygunluk işitme testi sonucuna göre belirlenir.",
      },
      {
        question: "Widex'te kulak içi veya çocuk ailesi var mı?",
        answer: "Sitemizde kulak içi veya çocuk kategorisinde listelenen bir Widex ailesi yok. Bu ihtiyaçlar için diğer marka sayfalarımıza bakabilir veya merkezimizi arayabilirsiniz.",
      },
    ],
  },
  related: {
    heading: "Widex İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Allure, SmartRIC ve Moment Sheer gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Beyond ve Unique gibi pilli kulak arkası cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Pil ve Aksesuar", description: "Pilli Widex aileleri için pil ve aksesuar bilgisi.", href: "/servis-bakim/pil-aksesuar/" },
      { label: "Phonak", description: "Virto (kulak içi) ve Sky (çocuk) ailelerinin listelendiği marka sayfası.", href: "/markalar/phonak/" },
      { label: "Signia", description: "Insio ve Silk kulak içi ailelerinin listelendiği marka sayfası.", href: "/markalar/signia/" },
      { label: "Oticon", description: "Own SI (kulak içi) ile çocuk ve güçlü kayıplar ailelerinin listelendiği marka sayfası.", href: "/markalar/oticon/" },
    ],
  },
  cta: {
    heading: "Widex Ailelerini Merkezde Sorun",
    description: "Altı Widex ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "4 RIC · 2 BTE Aile", "Merkezimiz Darıca'da"],
  },
};
