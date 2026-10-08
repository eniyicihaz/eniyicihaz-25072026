// Philips Hearing sayfası içeriği — yalnızca sitedeki model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Ear, Layers, Smartphone } from "lucide-astro";
import { philipsHearingModels } from "../philips-hearing/models";
import { facts, type UniqueBrandContent } from "./build";

const f = facts("Philips Hearing", philipsHearingModels.items);

export const philipsHearingUnique: UniqueBrandContent = {
  name: "Philips Hearing",
  meta: {
    title: "Philips Hearing HearLink İşitme Cihazları | EniyiCihaz",
    description: `Sitemizde Philips Hearing için ${f.n} model ailesi var: numaralı HearLink 50, 40 ve 30, kulak içi HearLink ve şarjlı HearLink. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Philips Hearing, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} ailenin üçü numaralı HearLink modeli (50, 40, 30); ikisi ise adlarını özellikten alıyor: HearLink Kulak İçi ve HearLink Şarjlı.`,
    "Numaralı üç modelde etiketler basamak basamak azalıyor: HearLink 50 Bluetooth ve şarjlı, HearLink 40 yalnızca Bluetooth, HearLink 30 yalnızca RIC etiketli.",
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: "HearLink 50, 40, 30, Kulak İçi ve Şarjlı." },
    { label: "NUMARALI", title: "50 · 40 · 30", description: "Üç numaralı HearLink modeli, üç farklı etiket seti." },
    { label: "KULAK İÇİ", title: "HearLink Kulak İçi", description: "ITC, CIC ve IIC seçenekleriyle listelenen kulak içi aile." },
  ],
  floatingCard: { title: "Etiket basamakları", description: "HearLink 50'den 30'a Bluetooth ve şarjlı etiketleri azalıyor." },
  intro: {
    heading: "Philips Hearing'de HearLink Numaraları Ne Gösteriyor?",
    paragraphs: [
      `Philips Hearing listesi, etiketleri en okunur olan listelerden biri: HearLink 50 RIC, Bluetooth ve şarjlı; HearLink 40 RIC ve Bluetooth; HearLink 30 yalnızca RIC. Yani numaralar sitemizde etiket sayısıyla birlikte düşüyor.`,
      `Numaralı modellerin dışında iki aile daha var: HearLink Şarjlı (RIC ve şarjlı etiketli, Bluetooth etiketi yok) ve HearLink Kulak İçi. Kulak içi aile, sitemizde ITC, CIC ve IIC gibi seçenekler altında ve kişiye özel üretim etiketiyle listeleniyor.`,
      "Philips Hearing cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: "3", label: "numaralı HearLink modeli" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
    ],
  },
  models: {
    heading: "Philips Hearing'in Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      "Philips HearLink 50": "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      "Philips HearLink 40": "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      "Philips HearLink 30": "RIC kategorisinde; yalnızca RIC etiketli.",
      "Philips HearLink Kulak İçi": "Kulak içi aile; ITC, CIC ve IIC seçenekleriyle ve kişiye özel üretim etiketiyle listelenir.",
      "Philips HearLink Şarjlı": "RIC ve şarjlı etiketli; Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Philips Hearing Listesinde Hangi Aileye Bakılır?",
    intro: "Philips Hearing ailelerinde ayrımı çoğunlukla Bluetooth ve şarjlı etiketleri belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "HearLink 50 hem Bluetooth hem şarjlı etiketli; HearLink Şarjlı ise şarjlı ama Bluetooth etiketi yok.",
        families: f.charge,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi yalnızca HearLink 50 ve 40'ta var; HearLink 30, Kulak İçi ve Şarjlı'da yok.",
        families: f.bt,
      },
      {
        icon: Layers,
        title: "Sade RIC arayanlar",
        description: "HearLink 30 sitemizde yalnızca RIC etiketiyle listeleniyor; Bluetooth ve şarjlı etiketi yok.",
        families: ["Philips HearLink 30"],
      },
      {
        icon: Ear,
        title: "Kişiye özel kulak içi düşünenler",
        description: "HearLink Kulak İçi, ITC, CIC ve IIC seçenekleriyle listeleniyor. Kalıp süreci ve deneme kuralları ayrı; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Philips Hearing Hakkında Merak Edilenler",
    intro: "HearLink 50, 40 ve 30 arasındaki etiket farkı, şarjlı aileler ve kulak içi seçenek hakkında kısa cevaplar.",
    label: "Philips Hearing",
    points: ["Ücretsiz işitme testi", `${f.n} Philips Hearing ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Philips HearLink 50, 40 ve 30 arasındaki fark nedir?",
        answer: "Sitemizdeki etiketlere göre HearLink 50 RIC, Bluetooth ve şarjlı; HearLink 40 RIC ve Bluetooth; HearLink 30 yalnızca RIC etiketli. Hangisinin size uygun olduğu etiketlerle değil, işitme değerlendirmesiyle belirlenir.",
      },
      {
        question: "HearLink Şarjlı ile HearLink 50 aynı mı?",
        answer: "Sitemizde ikisi de şarjlı ve RIC etiketli; HearLink 50'de ayrıca Bluetooth etiketi var, HearLink Şarjlı'da yok. Hangisinin uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Philips HearLink Kulak İçi hangi seçenekleri kapsıyor?",
        answer: "Sitemizde HearLink Kulak İçi, ITC, CIC ve IIC gibi kulak içi seçenekler altında ve kişiye özel üretim etiketiyle listeleniyor. Kulak kalıbı ve 3D kalıp hizmetimiz merkezimizde veriliyor; cihaz alımlarında ilk kalıplar ücretsizdir.",
      },
      {
        question: "Philips HearLink Kulak İçi'ni satın almadan denemek mümkün mü?",
        answer: "Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır; merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Philips Hearing İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "HearLink 50 ve HearLink Şarjlı gibi ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Bluetooth Özellikli Cihazlar", description: "HearLink 50 ve 40'taki Bluetooth etiketi için genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "HearLink Kulak İçi gibi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kalıp Alımı", description: "Kişiye özel kulak içi cihazlarda kulak kalıbı süreci.", href: "/uygulama-ayar/kalip-alimi/" },
      { label: "İşitme Cihazı Markaları", description: "Philips Hearing'i diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Philips Hearing Ailelerini Merkezde Sorun",
    description: "Beş Philips Hearing ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "HearLink 50 · 40 · 30", "Merkezimiz Darıca'da"],
  },
};
