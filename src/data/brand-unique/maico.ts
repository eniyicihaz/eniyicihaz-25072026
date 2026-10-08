// Maico sayfası içeriği — yalnızca sitedeki Maico model verisi + SoT'ta doğrulanmış hizmet olguları.
// Portföy ince (3 seri): sayfa bilinçli olarak kısa tutulur, yapay uzatma yapılmaz.
import { Ear, Layers, Smartphone } from "lucide-astro";
import { maicoModels } from "../maico/models";
import { facts, type UniqueBrandContent } from "./build";

const f = facts("Maico", maicoModels.items);

export const maicoUnique: UniqueBrandContent = {
  name: "Maico",
  meta: {
    title: "Maico İşitme Cihazları: RIC, BTE ve Kulak İçi | EniyiCihaz",
    description: `Sitemizde Maico için üç seri var: Bluetooth Serisi (RIC), Kulak Arkası Serisi (BTE) ve Kulak İçi Serisi. Darıca'daki merkezimizde bilgi alın, işitme testinizi ücretsiz yaptırın.`,
  },
  heroSrc: "/images/maico/models/kulak-arkasi-serisi.webp",
  heroParagraphs: [
    `Maico, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde Maico, tek tek model adlarıyla değil üç seri halinde listeleniyor: Bluetooth Serisi, Kulak Arkası Serisi ve Kulak İçi Serisi.`,
    "Her seri farklı bir yerleşimi gösteriyor; bu yüzden Maico'da önce yerleşime, sonra serinin içindeki seçeneklere bakılır.",
  ],
  heroFeatures: [
    { label: "SERİ", title: "3 Seri", description: "Bluetooth, Kulak Arkası ve Kulak İçi serileri." },
    { label: "BLUETOOTH", title: "Bluetooth Serisi", description: "Bluetooth etiketli tek Maico serisi (RIC)." },
    { label: "YERLEŞİM", title: "RIC · BTE · Kulak İçi", description: "Her seri ayrı bir yerleşim." },
  ],
  floatingCard: { title: "Seri bazlı liste", description: "Maico'da tek tek model adı yerine üç seri listeleniyor." },
  intro: {
    heading: "Maico Serilerini Yerleşime Göre Okumak",
    paragraphs: [
      "Maico sayfasında aile adları yok, seri adları var ve adlar yerleşimi söylüyor: Bluetooth Serisi RIC ve Bluetooth etiketli, Kulak Arkası Serisi BTE, Kulak İçi Serisi kulak içi. Hangi serinin içinde hangi modelin sizin için uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      "Maico cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: "3", label: "seri" },
      { value: String(f.bt.length), label: "Bluetooth etiketli seri" },
      { value: String(f.bte.length), label: "kulak arkası (BTE) seri" },
      { value: String(f.inEar.length), label: "kulak içi seri" },
    ],
  },
  models: {
    heading: "Maico'nun Üç Serisi",
    intro: "Seriler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "MAICO Bluetooth Serisi": "RIC kategorisinde; Bluetooth etiketli seri.",
      "MAICO Kulak Arkası Serisi": "Kulak arkası (BTE) kategorisinde; Bluetooth etiketi yok.",
      "MAICO Kulak İçi Serisi": "Kulak içi seri; Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Maico'da Hangi Seriye Bakılır?",
    intro: "Maico listesi kısa ve yerleşime göre ayrılıyor. Kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi Maico listesinde yalnızca Bluetooth Serisi'nde var; telefon uyumu modele göre değişir.",
        families: f.bt,
      },
      {
        icon: Layers,
        title: "Kulak arkası cihaz düşünenler",
        description: "Kulak Arkası Serisi sitemizde BTE kategorisinde; Bluetooth etiketi yok.",
        families: f.bte,
      },
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Kulak İçi Serisi, Maico listesindeki tek kulak içi seri. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Maico Hakkında Merak Edilenler",
    intro: "Maico serilerinin farkı, Bluetooth etiketi ve kulak içi deneme hakkında kısa cevaplar.",
    label: "Maico",
    points: ["Ücretsiz işitme testi", "3 Maico serisi", "Darıca'da merkez"],
    items: [
      {
        question: "Maico'da neden model adı yerine seri adı görüyorum?",
        answer: "Sitemizde Maico üç seri halinde listeleniyor: Bluetooth Serisi, Kulak Arkası Serisi ve Kulak İçi Serisi. Serinin içinde hangi modelin sizin için uygun olduğunu işitme değerlendirmesinden sonra birlikte belirliyoruz.",
      },
      {
        question: "Maico'da Bluetooth hangi seride var?",
        answer: "Sitemizdeki veride yalnızca Bluetooth Serisi Bluetooth etiketli. Kulak Arkası Serisi ve Kulak İçi Serisi'nde Bluetooth etiketi yok.",
      },
      {
        question: "Maico Kulak İçi Serisi'ni satın almadan denemek mümkün mü?",
        answer: "Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır; bu Kulak İçi Serisi için de geçerli. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Maico İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Bluetooth Özellikli Cihazlar", description: "Bluetooth Serisi için telefon bağlantısı hakkında genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "Kulak Arkası (BTE) Cihazlar", description: "Kulak Arkası Serisi gibi BTE cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Kulak İçi Serisi gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "İşitme Cihazı Markaları", description: "Maico'yu diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Maico Serilerini Merkezde Sorun",
    description: "Üç Maico serisinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "3 Maico Serisi", "Merkezimiz Darıca'da"],
  },
};
