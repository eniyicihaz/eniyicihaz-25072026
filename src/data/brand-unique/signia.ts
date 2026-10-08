// Signia sayfası içeriği — yalnızca sitedeki Signia model verisi + SoT'ta doğrulanmış hizmet olguları.
import { Ear, BatteryCharging, Battery, Activity } from "lucide-astro";
import { signiaModels } from "../signia/models";
import { facts, join, type UniqueBrandContent } from "./build";

const f = facts("Signia", signiaModels.items);

export const signiaUnique: UniqueBrandContent = {
  name: "Signia",
  meta: {
    title: "Signia İşitme Cihazları: Styletto, Pure, Insio | EniyiCihaz",
    description: `Sitemizde Signia için ${f.n} model ailesi var: iki RIC, iki kulak içi (Insio, Silk), Active ve pilli kulak arkası Motion. Darıca'daki merkezimizde bilgi alın.`,
  },
  heroAlt: "Signia işitme cihazı çifti",
  heroParagraphs: [
    `Signia, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde ${f.n} Signia ailesi listeliyoruz: iki RIC (${join(f.ric)}), iki kulak içi (${join(f.inEar)}), bir Active ve bir kulak arkası (Motion).`,
    `Bluetooth etiketi altı ailenin hepsinde var. Şarjlı etiketi ${join(f.charge)} ailelerinde; Motion pilli çalışır.`,
  ],
  heroFeatures: [
    { label: "MODEL", title: `${f.n} Model Ailesi`, description: `${join(f.all)}.` },
    { label: "KULAK İÇİ", title: `${f.inEar.length} Kulak İçi Aile`, description: `${join(f.inEar)}: iki ayrı kulak içi seçenek.` },
    { label: "ŞARJ", title: `${f.charge.length} Şarjlı Aile`, description: `${join(f.charge)}.` },
  ],
  floatingCard: { title: "İki kulak içi seçenek", description: "Insio ve Silk sitemizde ayrı sınıflandırılıyor." },
  intro: {
    heading: "Signia Ailelerini Yerleşime Göre Okumak",
    paragraphs: [
      `Signia listesini yerleşime göre okumak en kolayı: RIC tarafında ${join(f.ric)}, kulak arkası tarafında Motion, kulak içi tarafında ${join(f.inEar)}. Active ise sitemizde aktif yaşam kategorisinde ayrı duruyor.`,
      "Insio ve Silk iki ayrı kulak içi aile: sitemizdeki sınıflandırmada Insio kişiye özel üretilen kulak içi, Silk ise kalıpsız kulak içi olarak yer alıyor. Hangisinin kulak yapınıza uygun olduğu değerlendirmede netleşir.",
      "Signia cihazlarının teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir.",
    ],
    stats: [
      { value: String(f.n), label: "model ailesi" },
      { value: String(f.bt.length), label: "Bluetooth etiketli aile" },
      { value: String(f.charge.length), label: "şarjlı aile" },
      { value: String(f.inEar.length), label: "kulak içi aile" },
    ],
  },
  models: {
    heading: "Signia'nın Altı Model Ailesi",
    intro: "Aileler sitemizdeki kategorilere göre listelenir. Kartlardaki etiketler cihaz türünü ve özelliği gösterir; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    descriptions: {
      Styletto: "RIC kategorisinde; Bluetooth ve şarjlı etiketli.",
      Pure: "RIC kategorisinde (genel kullanım); Bluetooth ve şarjlı etiketli.",
      Insio: "Kulak içi; sitemizde kişiye özel üretilen kulak içi olarak sınıflandırılıyor. Bluetooth etiketli.",
      Silk: "Kulak içi; sitemizde kalıpsız kulak içi olarak sınıflandırılıyor. Bluetooth etiketli.",
      Active: "Sitemizde aktif yaşam kategorisinde; Bluetooth ve şarjlı etiketli.",
      Motion: "Kulak arkası (BTE) kategorisinde; Bluetooth etiketli, pilli.",
    },
  },
  idealUser: {
    heading: "Signia'da Yerleşim ve Şarj Seçimi",
    intro: "Signia ailelerinde ayrımı en çok yerleşim (RIC, kulak arkası, kulak içi) ve şarjlı/pilli seçimi belirliyor. Gruplar yalnızca sitemizdeki etiketlere dayanır; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: [
      {
        icon: Ear,
        title: "Kulak içi cihaz düşünenler",
        description: "Insio ve Silk Signia listesindeki iki kulak içi aile. Kulak içi cihazların deneme kuralları diğer ailelerden farklıdır; ayrıntı sıkça sorulan sorularda.",
        families: f.inEar,
      },
      {
        icon: BatteryCharging,
        title: "Şarjlı RIC arayanlar",
        description: "Styletto ve Pure RIC kategorisinde, Bluetooth ve şarjlı etiketli. İkisi sitemizde aynı etiketlerle listeleniyor; aralarındaki tercih kulak yapınıza ve beklentinize göre değerlendirmede yapılır.",
        families: f.ric,
      },
      {
        icon: Activity,
        title: "Aktif yaşam kategorisine bakanlar",
        description: "Active, sitemizde aktif yaşam kategorisinde; Bluetooth ve şarjlı etiketli. Uygunluk işitme değerlendirmesinden sonra belirlenir.",
        families: ["Active"],
      },
      {
        icon: Battery,
        title: "Pilli kulak arkası tercih edenler",
        description: "Motion, Signia listesindeki tek pilli aile; kulak arkası (BTE) kategorisinde. Pil ve aksesuar satışını merkezimizde yapıyoruz.",
        families: f.pilli,
      },
    ],
  },
  faq: {
    heading: "Signia Hakkında Merak Edilenler",
    intro: "Insio ile Silk farkı, şarjlı seçenekler, kulak içi deneme ve pil hakkında kısa cevaplar.",
    label: "Signia",
    points: ["Ücretsiz işitme testi", `${f.n} Signia ailesi`, "Darıca'da merkez"],
    items: [
      {
        question: "Signia Insio ile Silk arasındaki fark nedir?",
        answer: "Sitemizde ikisi de kulak içi. Insio kişiye özel üretilen kulak içi, Silk ise kalıpsız kulak içi olarak sınıflandırılıyor. Hangisinin uygun olduğu kulak yapınıza göre işitme değerlendirmesinde belirlenir.",
      },
      {
        question: "Signia'da şarjlı aileler hangileri?",
        answer: `Şarjlı etiketi ${join(f.charge)} ailelerinde. Insio, Silk ve Motion'da şarjlı etiketi yok; Motion pilli, Insio ve Silk için sitemizdeki veride şarjlı veya pilli bilgisi yer almıyor.`,
      },
      {
        question: "Signia kulak içi cihazı satın almadan denemek mümkün mü?",
        answer: "Kulak içi cihazlar, satın alarak 7 güne kadar deneme kapsamı dışındadır; bu Insio ve Silk için de geçerli. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "Signia Active hangi kategoride yer alıyor?",
        answer: "Active, sitemizde aktif yaşam kategorisinde; Bluetooth ve şarjlı etiketli. Günlük hayatınıza uygun olup olmadığını işitme değerlendirmesi sırasında birlikte konuşuruz.",
      },
      {
        question: "Signia Motion için pil nereden alınır?",
        answer: "Motion pilli bir aile. Pil ve aksesuar satışını Darıca'daki merkezimizde yapıyoruz; satış ücretlidir.",
      },
    ],
  },
  related: {
    heading: "Signia İçin Bakabileceğiniz Sayfalar",
    links: [
      { label: "Kulak İçi (ITE) Cihazlar", description: "Insio ve Silk gibi kulak içi cihazların genel özellikleri.", href: "/isitme-cihazlari/kulak-ici-ite/" },
      { label: "Kalıp Alımı", description: "Kulak içi ve kulak kalıbı gerektiren cihazlarda kalıp süreci.", href: "/uygulama-ayar/kalip-alimi/" },
      { label: "Şarj Edilebilir Cihazlar", description: "Styletto, Pure ve Active gibi şarjlı ailelerin genel özellikleri.", href: "/isitme-cihazlari/sarj-edilebilir/" },
      { label: "Aktif Yaşam İçin Cihazlar", description: "Active'in listelendiği aktif yaşam kategorisi.", href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme kuralları.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "İşitme Cihazı Markaları", description: "Signia'yı diğer markalarla etiketler üzerinden karşılaştırın.", href: "/isitme-cihazi-markalari/" },
    ],
  },
  cta: {
    heading: "Signia Ailelerini Merkezde Sorun",
    description: "Altı Signia ailesinden hangisinin size uygun olduğunu işitme testinizden sonra birlikte netleştirelim; bizi arayın veya WhatsApp'tan yazın.",
    trustItems: ["Ücretsiz İşitme Testi", "Insio ve Silk Dahil 6 Aile", "Merkezimiz Darıca'da"],
  },
};
