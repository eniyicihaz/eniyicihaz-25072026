// Audio Service sayfası içeriği — yalnızca sitedeki model verisi + SoT'ta doğrulanmış hizmet olguları.
import { BatteryCharging, Ear, Smartphone, Layers } from "lucide-astro";
import { audioServiceModels } from "../audio-service/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Audio Service", audioServiceModels.items);

export const audioServiceUnique: UniqueBrandContent = {
  name: "Audio Service",
  meta: {
    title: "Audio Service İşitme Cihazları: Stiline, Mood | EniyiCihaz",
    description: `Sitemizde Audio Service için ${f.n} model ailesi var: Stiline, Mood, Quix, Kulak İçi Serisi ve Şarjlı Serisi. Dördü RIC etiketli. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroParagraphs: [
    `Audio Service, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizdeki ${f.n} ailenin adları iki türde: Stiline, Mood ve Quix model adları; Kulak İçi Serisi ve Şarjlı Serisi ise özelliği adında taşıyan seriler.`,
    `${join(f.ric)} aileleri RIC etiketli; yani listenin ağırlığı RIC. Kulak içi tarafında tek aile var: Kulak İçi Serisi.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "RIC", title: `${f.ric.length}/${f.n} Ailede RIC`, description: "Kulak içi dışındaki aileler RIC etiketli." },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
  ],
  floatingCard: { title: "Kişiye özel kulak içi", description: "Kulak İçi Serisi sitemizde kişiye özel etiketiyle listeleniyor." },
  intro: {
    heading: "Audio Service'te Aileler Nasıl Okunur?",
    paragraphs: [
      `Audio Service sayfasında iki tür ad var. Stiline, Mood ve Quix model adı; Kulak İçi Serisi ve Şarjlı Serisi ise adlarıyla zaten özelliği söylüyor. Bu yüzden listeyi okumak kolay: şarjlı aile arıyorsanız ${join(f.charge)}, kulak içi arıyorsanız Kulak İçi Serisi.`,
      `Bluetooth etiketi ${join(f.bt)} ailelerinde var. Quix ve Şarjlı Serisi RIC etiketli ama sitemizde Bluetooth etiketi taşımıyor; Quix'te şarjlı etiketi de yok.`,
      "Audio Service cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.ric.length), label: "RIC etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
    ],
  },
  models: {
    heading: "Audio Service'in Beş Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Stiline: "RIC kategorisinde; Bluetooth etiketli, şarjlı etiketi yok.",
      Mood: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Quix: "RIC kategorisinde; Bluetooth veya şarjlı etiketi yok.",
      "Kulak İçi Serisi": "Kulak içi, kişiye özel üretim etiketli seri.",
      "Şarjlı Serisi": "Şarjlı ve RIC etiketli seri; Bluetooth etiketi yok.",
    },
  },
  idealUser: {
    heading: "Audio Service Listesinde Kime Hangi Aile?",
    intro: "Audio Service ailelerinde ayrımı çoğunlukla Bluetooth ve şarjlı etiketleri belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: BatteryCharging,
        title: "Şarjlı cihaz arayanlar",
        description: "Mood ve Şarjlı Serisi şarjlı etiketli. Mood ayrıca Bluetooth etiketli; Şarjlı Serisi'nde Bluetooth etiketi yok.",
        families: f.charge,
      },
      {
        icon: Smartphone,
        title: "Telefon bağlantısına bakanlar",
        description: "Bluetooth etiketi yalnızca Stiline ve Mood'da var; telefon uyumu modele göre değişir.",
        families: f.bt,
      },
      {
        icon: Layers,
        title: "Sade RIC arayanlar",
        description: "Quix, sitemizde yalnızca RIC etiketiyle listeleniyor; Bluetooth veya şarjlı etiketi yok.",
        families: ["Quix"],
      },
      {
        icon: Ear,
        title: "Kişiye özel kulak içi düşünenler",
        description: "Kulak İçi Serisi kişiye özel üretilen kulak içi aile. Kalıp süreci ve deneme kuralları ayrı; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
    ],
  },
  faq: {
    heading: "Audio Service Hakkında Merak Edilenler",
    intro: "Audio Service'te şarjlı aileler, Bluetooth etiketi, Quix ve kişiye özel kulak içi serisi hakkında kısa cevaplar.",
    label: "Audio Service",
    points: ["Ücretsiz işitme testi", `${f.n} Audio Service ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Audio Service'te şarjlı aileler hangileri?",
        answer: "Mood ve Şarjlı Serisi şarjlı etiketle listeleniyor. Stiline, Quix ve Kulak İçi Serisi'nde şarjlı etiketi yok.",
      },
      {
        question: "Mood ile Şarjlı Serisi arasındaki fark nedir?",
        answer: "Sitemizde ikisi de şarjlı. Mood hem RIC hem Bluetooth etiketli; Şarjlı Serisi RIC ve şarjlı etiketli, Bluetooth etiketi yok. Hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
      },
      {
        question: "Audio Service'te Bluetooth etiketli aile hangisi?",
        answer: "Sitemizdeki veride Stiline ve Mood Bluetooth etiketli. Quix, Kulak İçi Serisi ve Şarjlı Serisi'nde Bluetooth etiketi yok.",
      },
      {
        question: "Audio Service Kulak İçi Serisi için kulak kalıbı gerekir mi?",
        answer: "Seri sitemizde kişiye özel üretim etiketiyle listeleniyor. Kulak kalıbı ve 3D kalıp hizmetimiz merkezimizde veriliyor; cihaz alımlarında ilk kalıplar ücretsizdir. Kulak içi cihazlar satın alarak 7 güne kadar deneme kapsamı dışındadır, merkezde yaklaşık 20 dakikalık demo yapılabilir.",
      },
    ],
  },
  related: {
    heading: "Audio Service İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Şarj Edilebilir Cihazlar", description: "Mood ve Şarjlı Serisi gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Kulak İçi (ITE) Cihazlar", description: "Kulak İçi Serisi gibi kişiye özel cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kalıp Alımı", description: "Kişiye özel kulak içi cihazlarda kulak kalıbı süreci.", href: "/uygulama-ayar/kalip-alimi/" },
      { label: "Bluetooth Özellikli Cihazlar", description: "Stiline ve Mood'daki Bluetooth etiketi için genel bilgi.", href: "/isitme-cihazlari/bluetooth-ozellikli/" },
      { label: "İşitme Cihazı Markaları", description: "Audio Service'i diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Audio Service Ailelerini Merkezde Sorun",
    description: "Beş Audio Service ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "2 Şarjlı Aile", "Merkezimiz Darıca'da"],
  },
};
