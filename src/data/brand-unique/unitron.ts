// Unitron sayfası içeriği — yalnızca sitedeki Unitron model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Layers, Smartphone } from "lucide-astro";
import { unitronModels } from "../unitron/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Unitron", unitronModels.items);
const noBt = f.all.filter((n) => !f.bt.includes(n));

export const unitronUnique: UniqueBrandContent = {
  name: "Unitron",
  meta: {
    title: "Unitron İşitme Cihazları: Smile, Blu, Stride | EniyiCihaz",
    description: `Sitemizde Unitron için ${f.n} model ailesi var: Smile, Blu, Moxi Vivante, Stride ve Insera. Stride şarjlı kulak arkası; kulak içi aile yok. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroSrc: "/images/unitron/models/blu.webp",
  heroParagraphs: [
    `Unitron, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} Unitron ailesi: ${join(f.all)}.`,
    `Smile, Blu ve Moxi Vivante RIC etiketli; Smile ve Blu hem Bluetooth hem şarjlı. Stride şarjlı ama kulak arkası (BTE), Insera ise RIC ve BTE etiketli. Sitemizde kulak içi veya çocuk kategorisinde bir Unitron ailesi yok.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
    { label: "STRIDE", title: "Şarjlı BTE: Stride", description: "Şarjlı etiketli tek kulak arkası (BTE) Unitron ailesi." },
  ],
  floatingCard: { title: "Kulak içi aile yok", description: "Sitemizde kulak içi etiketli bir Unitron ailesi listelenmiyor." },
  intro: {
    heading: "Unitron Listesinde Etiket Dağılımı",
    paragraphs: [
      `Unitron listesinde etiketler ailelere eşit dağılmıyor. Bluetooth etiketi ${join(f.bt)} ailelerinde var; ${join(noBt)} ailelerinde yok. Şarjlı etiketi ${join(f.charge)} ailelerinde.`,
      "Yerleşim tarafında Smile, Blu ve Moxi Vivante RIC; Stride kulak arkası (BTE); Insera hem RIC hem BTE etiketli. Yani şarjlı bir kulak arkası cihaz arıyorsanız listedeki tek aday Stride.",
      "Unitron cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bte.length), label: "kulak arkası (BTE) etiketli aile" },
    ],
  },
  models: {
    heading: "Unitron'un Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Smile: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Blu: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Moxi Vivante": "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      Stride: "Kulak arkası (BTE) kategorisinde; şarjlı etiketli, Bluetooth etiketi yok.",
      Insera: "RIC ve BTE etiketli; Bluetooth ve şarjlı etiketi yok.",
    },
  },
  idealUser: {
    heading: "Unitron'da Hangi Aileye Bakılır?",
    intro: "Unitron ailelerinde ayrımı çoğunlukla yerleşim ve Bluetooth/şarjlı etiketleri belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "Smile, Blu ve Stride şarjlı etiketli. Smile ve Blu RIC ve Bluetooth etiketli; Stride kulak arkası ve Bluetooth etiketi yok.",
        families: f.charge,
      },
      {
        icon: Layers,
        title: "Kulak arkası (BTE) cihaz düşünenler",
        description: "Stride sitemizde BTE kategorisinde ve şarjlı; Insera RIC ve BTE etiketli. İkisinde de Bluetooth etiketi yok.",
        families: f.bte,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi Smile, Blu ve Moxi Vivante'de var; Stride ve Insera'da yok.",
        families: f.bt,
      },
    ],
  },
  faq: {
    heading: "Unitron Hakkında Merak Edilenler",
    intro: "Unitron'da Smile ile Blu, Stride, Bluetooth etiketi olmayan aileler ve kulak içi seçeneği hakkında kısa cevaplar.",
    label: "Unitron",
    points: ["Ücretsiz işitme testi", `${f.n} Unitron ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Unitron Smile ile Blu arasında nasıl karar verilir?",
        answer: "Sitemizde ikisi de RIC, Bluetooth ve şarjlı etiketli; etiketlerle ayırt etmek mümkün değil. Seçim kulak yapınıza, işitme kaybınıza ve kullanım beklentinize göre işitme değerlendirmesinden sonra yapılır.",
      },
      {
        question: "Unitron'da şarjlı kulak arkası aile var mı?",
        answer: "Evet: Stride. Sitemizde Stride kulak arkası (BTE) ve şarjlı etiketli; Bluetooth etiketi yok.",
      },
      {
        question: "Unitron'da Bluetooth etiketi olmayan aileler hangileri?",
        answer: "Sitemizdeki veride Stride ve Insera'da Bluetooth etiketi yok. Telefon bağlantısı önemliyse bunu ilk görüşmede söyleyin; Smile, Blu ve Moxi Vivante Bluetooth etiketli.",
      },
      {
        question: "Unitron'da kulak içi aile var mı?",
        answer: "Sitemizde kulak içi kategorisinde listelenen bir Unitron ailesi yok. Kulak içi cihaz düşünüyorsanız diğer marka sayfalarımıza bakabilir veya merkezimizi arayabilirsiniz.",
      },
    ],
  },
  related: {
    heading: "Unitron İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Smile, Blu ve Stride gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Stride ve Insera'nın BTE etiketi için genel bilgi.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Bluetooth Özellikli Cihazlar", description: "Smile, Blu ve Moxi Vivante'deki Bluetooth etiketi için genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "Phonak", description: "Virto (kulak içi) ve Sky (çocuk) ailelerinin listelendiği marka sayfası.", href: "/markalar/phonak/" },
      { label: "Signia", description: "Insio ve Silk kulak içi ailelerinin listelendiği marka sayfası.", href: "/markalar/signia/" },
      { label: "Oticon", description: "Own SI (kulak içi) ile çocuk ve güçlü kayıplar ailelerinin listelendiği marka sayfası.", href: "/markalar/oticon/" },
    ],
  },
  cta: {
    heading: "Unitron Ailelerini Merkezde Sorun",
    description: "Beş Unitron ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "3 Şarjlı Aile", "Merkezimiz Darıca'da"],
  },
};
