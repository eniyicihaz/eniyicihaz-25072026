// Phonak marka sayfası ve altı model ailesi alt sayfasının TEK veri kaynağı (2026-11-14).
//
// İçerik kuralları
//  • Ürün bilgileri yalnızca Phonak'ın resmî sayfalarından alındı (aşağıdaki SOURCES; son kontrol Kasım 2026).
//    Resmî kaynakta bulunamayan bilgi yazılmadı: pil ömrü yalnızca Phonak'ın sayıyla verdiği yerde, koşuluyla birlikte.
//  • İşletmeye ait bilgiler (ücretsiz test, demo, 7 güne kadar deneme, evde hizmet, teknik servis, SGK) yalnızca
//    docs/source-of-truth/SERVICE_SOURCE_OF_TRUTH.md'de [DOĞRULANDI] olan ifadelerdir.
//  • Fiyat, stok, garanti süresi, puan/yorum, teslimat ve "yetkili bayi" iddiası yoktur (PRODUCT_SOT §1, §4).
//  • Gebze ve Çayırova'da şube yoktur; tek fiziksel merkez Darıca'dır (LOCAL_SOT §1).
//
// Not: src/data/phonak/models.ts, /isitme-cihazi-markalari/ ve diğer sayfaları beslemeye devam ettiği için DEĞİŞTİRİLMEDİ.
// Bu dosya yalnızca /markalar/phonak/ ve /markalar/phonak/<aile>/ sayfalarında kullanılır.

export const PHONAK_CHECKED = "Kasım 2026";

const TR = "https://www.phonak.com/tr-tr/isitme-cihazlar%C4%B1/i%C5%9Fitme-cihazlar%C4%B1";

/** Resmî kaynak sayfası: `label` sayfanın konusu, `site` yayınlayan Phonak sitesi. */
export interface PhonakSourcePage {
  label: string;
  site: "Phonak Türkiye" | "Phonak uluslararası";
  href: string;
}

/** Bir sayfada gösterilen kaynak: aynı sayfa + bu sayfada hangi bilgi için kullanıldığı (`note`). */
export interface PhonakSource extends PhonakSourcePage {
  note: string;
}

export const SOURCES = {
  hubTr: { label: "İşitme cihazları listesi", site: "Phonak Türkiye", href: `${TR}` },
  hubInt: { label: "Hearing aids listesi", site: "Phonak uluslararası", href: "https://www.phonak.com/en-int/hearing-devices/hearing-aids" },
  audeoInfinio: { label: "Audéo R Infinio", site: "Phonak Türkiye", href: `${TR}/audeo-infinio` },
  audeoSphere: { label: "Audéo Sphere Infinio", site: "Phonak Türkiye", href: `${TR}/audeo-sphere` },
  audeoLumity: { label: "Audéo Lumity", site: "Phonak Türkiye", href: `${TR}/audeo-lumity` },
  naida: { label: "Naída Lumity", site: "Phonak Türkiye", href: `${TR}/naida-l` },
  sky: { label: "Sky Lumity", site: "Phonak Türkiye", href: `${TR}/sky-lumity-%C3%A7ocuklar` },
  skyLink: { label: "Sky Link Marvel", site: "Phonak Türkiye", href: `${TR}/sky-marvel-%C3%A7ocuklar` },
  bolero: { label: "Bolero Marvel", site: "Phonak Türkiye", href: `${TR}/bolero-marvel` },
  boleroFeatures: { label: "Bolero Marvel özellikleri", site: "Phonak Türkiye", href: `${TR}/bolero-marvel/%C3%B6zellikler` },
  marvelGuides: { label: "Marvel kullanım kılavuzları", site: "Phonak uluslararası", href: "https://www.phonak.com/en-int/support/user-guides/marvel" },
  virto: { label: "Virto Infinio", site: "Phonak Türkiye", href: `${TR}/virto-infinio` },
  crosInfinio: { label: "CROS Infinio", site: "Phonak Türkiye", href: `${TR}/cros-infinio` },
  crosLumity: { label: "CROS Lumity", site: "Phonak Türkiye", href: `${TR}/cros-l` },
} satisfies Record<string, PhonakSourcePage>;

const src = (page: PhonakSourcePage, note: string): PhonakSource => ({ ...page, note });

/**
 * Phonak şarj / pil bilgisi — resmî Phonak Türkiye ürün sayfalarına göre (Kasım 2026).
 * src/data/phonak/models.ts etiketleri bu konuda eksik kaldığı (Bolero yalnızca "Pilli", Virto etiketsiz) ve o dosya başka
 * sayfaları da beslediği için /isitme-cihazi-markalari/ sayfasındaki Phonak hücreleri buradan okunur.
 * Naída L-M ve L-SP'nin pil tipi resmî sayfada yazmadığı için pilli listesine konmadı.
 */
export const PHONAK_POWER = {
  rechargeable: "Audéo, Naída (L-PR, L-UP), Sky (L-PR), Virto (R Infinio), CROS ve önceki nesil Bolero (M-PR)",
  battery: "Sky (L-M, L-SP, L-UP), Virto (I-10 NW O) ve önceki nesil Bolero (M-M, 312 pil)",
  tableCell:
    "Şarjlı modeli olan aile: 6/6; pilli modeller: Sky (L-M, L-SP, L-UP), Virto (I-10 NW O) ve önceki nesil Bolero M-M (312 pil). Bolero M-PR şarjlıdır.",
  profileText:
    "Phonak'ın resmî ürün sayfalarına göre altı ailenin hepsinde şarjlı model var: Audéo, Naída (L-PR, L-UP), Sky (L-PR), Virto (R Infinio) ve CROS; önceki nesil Bolero'da M-PR şarjlı, M-M ise 312 pil kullanır.",
};

// ---------------------------------------------------------------------------------------------------------------
// Tipler

export interface Fact {
  label: string;
  value: string;
}

export interface VariantRow {
  name: string;
  cells: string[];
}

export type FamilySection =
  | { kind: "prose"; id: string; heading: string; paragraphs: string[]; aside?: { title: string; text: string } }
  | { kind: "variants"; id: string; heading: string; intro?: string; columns: string[]; rows: VariantRow[]; note?: string }
  | { kind: "features"; id: string; heading: string; intro?: string; items: Array<{ title: string; text: string }> }
  | { kind: "steps"; id: string; heading: string; intro?: string; steps: Array<{ title: string; text: string }> }
  | { kind: "audience"; id: string; heading: string; intro?: string; items: Array<{ title: string; text: string }> }
  | { kind: "compare"; id: string; heading: string; intro?: string; rows: Array<{ slug: FamilySlug; text: string }> }
  | { kind: "proscons"; id: string; heading: string; intro?: string; pros: string[]; cons: string[] }
  | { kind: "notice"; id: string; heading: string; paragraphs: string[] }
  | { kind: "center"; id: string; heading: string; intro?: string; items: Array<{ title: string; text: string; href?: string; linkLabel?: string }> };

export interface FaqItem {
  question: string;
  answer: string;
}

export type FamilySlug = "audeo" | "naida" | "sky" | "bolero" | "virto" | "cros";

export interface PhonakFamily {
  slug: FamilySlug;
  name: string;
  fullName: string;
  /** Kart ve hero'daki kısa cihaz türü. */
  typeLabel: string;
  /** Karttaki nesil satırı. */
  generation: string;
  /** Kart açıklaması (özgün, kısa). */
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  /** Sayfanın başındaki "nedir" tanımı (GEO: doğrudan yanıtlanabilir tek paragraf). */
  definition: string;
  facts: Fact[];
  sections: FamilySection[];
  faq: FaqItem[];
  related: FamilySlug[];
  sources: PhonakSource[];
}

// ---------------------------------------------------------------------------------------------------------------
// Ortak, doğrulanmış merkez bilgileri (SERVICE_SOT H1, H7, H14, H16, H17, H23, H28 · §1.5)

export interface CenterItem {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

const CENTER_TEST: CenterItem = {
  title: "Ücretsiz işitme testi",
  text: "Cihaz seçiminden önce işitme testi yapılır. Test ücretsizdir, 5 yaş ve üzeri için uygulanır ve randevu ile yapılır.",
  href: "/degerlendirme/ucretsiz-isitme-testi/",
  linkLabel: "Ücretsiz işitme testi",
};
const CENTER_DEMO: CenterItem = {
  title: "Merkezde demo",
  text: "Uygun görülen cihazı merkezimizde yaklaşık 20 dakika boyunca ücretsiz deneyebilirsiniz.",
};
const CENTER_TRIAL: CenterItem = {
  title: "7 güne kadar deneme",
  text: "Cihazı satın alarak 7 güne kadar deneyebilirsiniz; uygun bulunmazsa cihaz iade alınır ve ödenen ücret kesintisiz iade edilir.",
};
const CENTER_SERVICE: CenterItem = {
  title: "Teknik servis ve uzaktan ayar",
  text: "Phonak cihazların teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir. Uzaktan cihaz ayarı hizmetimiz Phonak cihazlarda da veriliyor.",
  href: "/servis-bakim/",
  linkLabel: "Servis ve bakım",
};
const CENTER_HOME: CenterItem = {
  title: "Evde hizmet",
  text: "Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar; merkezde verilen hizmetlerin kapsamı doğrultusunda sunulur.",
  href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
  linkLabel: "Evde işitme cihazı hizmeti",
};

// ---------------------------------------------------------------------------------------------------------------
// Aileler

export const PHONAK_FAMILIES: PhonakFamily[] = [
  // ============================================================== AUDÉO
  {
    slug: "audeo",
    name: "Audéo",
    fullName: "Phonak Audéo",
    typeLabel: "Kanal içi hoparlörlü (RIC)",
    generation: "Güncel nesil: Audéo Infinio",
    summary:
      "Gövdesi kulağın arkasında, hoparlörü kulak kanalında duran RIC ailesi. Güncel Infinio neslinde şarjlı ve evrensel Bluetooth bağlantılı.",
    tags: ["RIC", "Şarjlı", "Bluetooth"],
    image: "/images/phonak/models/audeo.webp",
    imageAlt: "Phonak Audéo kanal içi hoparlörlü (RIC) işitme cihazı, şampanya rengi gövde ve kulak içi kubbe",
    meta: {
      title: "Phonak Audéo: Şarjlı RIC İşitme Cihazı Ailesi",
      description:
        "Phonak Audéo nedir? Audéo R Infinio ile Sphere Infinio farkı, şarj, Bluetooth ve CROS uyumu. Darıca'daki merkezimizde ücretsiz işitme testi ve demo.",
    },
    hero: {
      eyebrow: "Phonak · RIC işitme cihazı ailesi",
      title: "Phonak Audéo İşitme Cihazları",
      lead:
        "Audéo, Phonak'ın kanal içi hoparlörlü (RIC) ailesidir. Phonak'ın Türkiye sitesinde güncel nesil olarak Audéo R Infinio ve yapay zekâ çipli Audéo Sphere Infinio listelenir; ikisi de şarjlıdır.",
    },
    definition:
      "Phonak Audéo, gövdesi kulağın arkasına yerleşen ve sesi kulak kanalına yerleşen ayrı bir hoparlörle (receiver) ileten RIC (receiver-in-canal) tipi işitme cihazı ailesidir. Phonak, Audéo Infinio için hafif ila çok ileri derecede işitme kaybı aralığını belirtir.",
    facts: [
      { label: "Cihaz türü", value: "RIC — kanal içi hoparlörlü kulak arkası" },
      { label: "İşitme kaybı aralığı", value: "Hafif ila çok ileri derece (Phonak, Audéo Infinio)" },
      { label: "Güç", value: "Şarjlı (Audéo R Infinio, Sphere Infinio, Audéo Lumity)" },
      { label: "Bağlantı", value: "Evrensel Bluetooth bağlantısı, myPhonak uygulaması, RogerDirect" },
      { label: "Güncel nesil", value: "Audéo Infinio (Phonak Türkiye, Kasım 2026)" },
    ],
    sections: [
      {
        kind: "variants",
        id: "audeo-modelleri",
        heading: "Audéo ailesindeki modeller",
        intro: "Phonak'ın Türkiye sitesinde Audéo için Infinio neslinde iki ürün ve Lumity nesli listelenir. Aşağıdaki bilgiler bu sayfalarda yazanlarla sınırlıdır.",
        columns: ["Model", "Öne çıkan özellik", "Güç", "Not"],
        rows: [
          {
            name: "Audéo R Infinio",
            cells: [
              "AutoSense OS 7.0; 8 cihaza kadar Bluetooth eşleştirme, aynı anda 2 bağlantı; eller serbest arama",
              "Tamamen şarj edilebilir; Phonak'a göre 31 saate kadar",
              "CROS Infinio ile uyumlu",
            ],
          },
          {
            name: "Audéo Sphere Infinio",
            cells: [
              "DEEPSONIC adlı yapay zekâ çipi ve Spheric Speech Clarity 2.0",
              "Şarjlı",
              "Konuşmayı her yönden gelen gürültüden ayırmaya odaklanır",
            ],
          },
          {
            name: "Audéo Lumity (L-R, L-RT)",
            cells: ["Evrensel bağlantı, myPhonak; L-RT'de telecoil", "Tamamen şarj edilebilir", "Lumity nesli; CROS Lumity ile uyumlu"],
          },
        ],
        note:
          "Pil süresi Phonak'ın verdiği üst sınırdır; işitme kaybına, ortama, ses aktarımı (yayın) kullanımına ve açık olan özelliklere göre değişir. Phonak'ın uluslararası sitesinde ayrıca Audéo EON adlı daha yeni bir nesil listeleniyor; Türkiye'de bulunabilirliği için bizimle görüşün.",
      },
      {
        kind: "prose",
        id: "audeo-tasarim",
        heading: "Fiziksel tasarım: RIC ne demek?",
        paragraphs: [
          "RIC tasarımda işitme cihazının gövdesi kulak kepçesinin arkasında durur; sesi üreten hoparlör ise ince bir kabloyla kulak kanalının içine yerleştirilir. Kanalın içindeki hoparlörün ucunda, kulak yapısına göre seçilen bir kubbe ya da kişiye özel kalıp bulunur.",
          "Bu yerleşim, kulak arkası (BTE) tasarımdan farklıdır: BTE'de hoparlör de gövdenin içindedir ve ses bir kanca ile hortum üzerinden kanala iletilir. Audéo'nun gövdesi bu yüzden Naída ve Bolero gibi BTE ailelerinden farklı görünür.",
        ],
        aside: {
          title: "Kubbe uyumu",
          text: "Phonak, Audéo Infinio'nun EasyGuard kubbelerle uyumlu olduğunu belirtir. Hangi kubbenin ya da kalıbın kullanılacağı kulak yapınıza göre merkezde belirlenir.",
        },
      },
      {
        kind: "features",
        id: "audeo-teknoloji",
        heading: "Audéo Infinio'da öne çıkan teknolojiler",
        intro: "Phonak'ın ürün sayfalarında adı geçen teknolojiler; hangisinin sizin cihazınızda bulunacağı seçilen modele bağlıdır.",
        items: [
          {
            title: "AutoSense OS 7.0",
            text: "Phonak'ın ortam tanıma sistemi; cihaz bulunduğunuz ses ortamını sınıflandırır ve ayarlarını buna göre uyarlar. Phonak bu sürümü yapay zekâ destekli ses sınıflandırması olarak tanıtır.",
          },
          {
            title: "DEEPSONIC çipi (Sphere Infinio)",
            text: "Phonak'ın konuşmayı gürültüden ayırmak için geliştirdiği, yapay zekâya ayrılmış çip. Yalnızca Audéo Sphere Infinio'da bulunur.",
          },
          {
            title: "Spheric Speech Clarity 2.0 (Sphere Infinio)",
            text: "Konuşmanın hangi yönden geldiğinden bağımsız olarak gürültüden gerçek zamanlı ayrıştırılmasını hedefleyen özellik.",
          },
          {
            title: "Evrensel bağlantı",
            text: "Audéo R Infinio 8 cihaza kadar Bluetooth eşleştirmesini ve aynı anda 2 bağlantıyı destekler; myPhonak ile tek adımda eşleştirme yapılır.",
          },
          {
            title: "RogerDirect",
            text: "Roger mikrofonlarından gelen ses doğrudan cihaza aktarılır. Phonak, Audéo Infinio için 25 metreye kadar menzil belirtir.",
          },
        ],
      },
      {
        kind: "audience",
        id: "audeo-kimler-icin",
        heading: "Audéo kimler için değerlendirilir?",
        intro: "Aşağıdakiler yalnızca değerlendirmeye başlamak için bir çerçevedir; uygunluk işitme testinizden sonra belirlenir.",
        items: [
          { title: "Geniş kayıp aralığı", text: "Phonak, Audéo Infinio için hafif ila çok ileri derecede işitme kaybını belirtir; bu yüzden Audéo çoğu yetişkin kullanıcı için ilk bakılan ailedir." },
          { title: "Telefonla sık konuşanlar", text: "Evrensel Bluetooth ve eller serbest arama (Audéo R Infinio), telefon görüşmelerini cihaz üzerinden yapmak isteyenler için öne çıkar." },
          { title: "Kalabalık ortamda zorlananlar", text: "Sphere Infinio'nun yapay zekâ çipi, gürültüde konuşmayı ayırmaya odaklanır. Bu ihtiyacı değerlendirmede birlikte tartışırız." },
          { title: "Pil değiştirmek istemeyenler", text: "Güncel Audéo modelleri şarjlıdır; pil satın alma ve değiştirme alışkanlığı gerekmez." },
        ],
      },
      {
        kind: "compare",
        id: "audeo-fark",
        heading: "Audéo'yu diğer Phonak ailelerinden ayıran ne?",
        rows: [
          { slug: "naida", text: "Naída bir BTE ailesidir; hoparlör gövdenin içindedir ve Phonak bu aileyi en güçlü cihazı olarak tanıtır. Audéo'da hoparlör kanaldadır." },
          { slug: "virto", text: "Virto kişiye özel üretilen bir kulak içi (ITE) ailesidir; kulak arkasında gövde yoktur. Audéo'nun gövdesi kulak arkasındadır." },
          { slug: "cros", text: "CROS tek başına işitme cihazı değildir; işitilemeyen kulaktaki sesi Audéo gibi uyumlu bir cihaza aktarır." },
        ],
      },
      {
        kind: "proscons",
        id: "audeo-degerlendirme",
        heading: "Avantajlar ve dikkat edilmesi gerekenler",
        pros: [
          "Güncel neslin tamamı şarjlıdır.",
          "Evrensel Bluetooth bağlantısı ile telefon, tablet ve diğer cihazlarla doğrudan bağlantı.",
          "CROS ile birlikte kullanılabilen modeller bulunur (CROS Infinio — Audéo R Infinio).",
          "Gürültüde konuşma için yapay zekâ çipli Sphere Infinio seçeneği.",
        ],
        cons: [
          "Hoparlör ve kubbe kulak kanalının içinde olduğu için düzenli temizlik ve kubbe/filtre değişimi gerekir.",
          "Şarjlı modellerde cihazın her gün şarj edilmesi alışkanlık ister.",
          "Pil süresi kullanım biçimine göre değişir; Phonak'ın verdiği süre üst sınırdır.",
          "Hangi Audéo modelinin uygun olduğu işitme kaybı derecesine ve kulak yapısına göre belirlenir.",
        ],
      },
      {
        kind: "center",
        id: "audeo-merkezde",
        heading: "Audéo'yu merkezimizde nasıl değerlendirirsiniz?",
        items: [CENTER_TEST, CENTER_DEMO, CENTER_TRIAL, CENTER_SERVICE],
      },
    ],
    faq: [
      {
        question: "Phonak Audéo nedir?",
        answer:
          "Phonak Audéo, gövdesi kulak arkasında, hoparlörü kulak kanalında duran RIC tipi işitme cihazı ailesidir. Phonak'ın Türkiye sitesinde güncel nesil olarak Audéo R Infinio ve Audéo Sphere Infinio listelenir.",
      },
      {
        question: "Audéo R Infinio ile Audéo Sphere Infinio arasındaki fark nedir?",
        answer:
          "Phonak'a göre Sphere Infinio, DEEPSONIC adlı yapay zekâ çipi ve Spheric Speech Clarity 2.0 ile konuşmayı her yönden gelen gürültüden ayırmaya odaklanır. Audéo R Infinio ise AutoSense OS 7.0, evrensel Bluetooth bağlantısı ve eller serbest arama ile öne çıkar. İkisi de şarjlıdır.",
      },
      {
        question: "Phonak Audéo şarjlı mı?",
        answer:
          "Evet. Phonak'ın Türkiye sitesinde listelenen Audéo R Infinio, Audéo Sphere Infinio ve Audéo Lumity modelleri şarjlıdır. Phonak, Audéo R Infinio için tek şarjla 31 saate kadar kullanım belirtir; süre işitme kaybına, ortama ve yayın kullanımına göre değişir.",
      },
      {
        question: "Audéo iPhone ve Android telefonlarla çalışır mı?",
        answer:
          "Phonak, Audéo Infinio'yu evrensel bağlantı özelliğiyle tanıtır: cihaz Bluetooth'lu telefon ve tabletlerle doğrudan eşleşir; 8 cihaza kadar eşleştirme ve aynı anda 2 bağlantı desteklenir. myPhonak uygulaması App Store ve Google Play'de bulunur.",
      },
      {
        question: "Bir kulağı hiç duymayan biri Audéo kullanabilir mi?",
        answer:
          "Bu durumda Audéo, iyi duyan kulakta bir CROS cihazıyla birlikte değerlendirilebilir. Phonak'a göre CROS Infinio, Audéo R Infinio ile uyumludur. Uygunluk işitme testi ve değerlendirmeden sonra belirlenir.",
      },
      {
        question: "Audéo'yu satın almadan önce deneyebilir miyim?",
        answer:
          "Merkezimizde uygun görülen cihazı yaklaşık 20 dakika ücretsiz deneyebilirsiniz. Ayrıca cihazı satın alarak 7 güne kadar deneyebilirsiniz; uygun bulunmazsa cihaz iade alınır ve ödenen ücret kesintisiz iade edilir.",
      },
    ],
    related: ["cros", "naida", "virto"],
    sources: [
      src(SOURCES.audeoInfinio, "kayıp aralığı, şarj ve pil süresi, bağlantı, AutoSense OS 7.0, CROS Infinio uyumu"),
      src(SOURCES.audeoSphere, "DEEPSONIC çipi ve Spheric Speech Clarity 2.0"),
      src(SOURCES.audeoLumity, "Audéo L-R ve L-RT"),
      src(SOURCES.crosLumity, "Audéo L-R ve L-RT ile CROS Lumity uyumu"),
      src(SOURCES.hubInt, "Audéo EON neslinin listelenmesi"),
    ],
  },

  // ============================================================== NAÍDA
  {
    slug: "naida",
    name: "Naída",
    fullName: "Phonak Naída",
    typeLabel: "Güçlü kulak arkası (BTE)",
    generation: "Güncel nesil: Naída Lumity",
    summary:
      "Phonak'ın en güçlü işitme cihazı olarak tanıttığı kulak arkası ailesi. Lumity neslinde hafif kayıptan çok ileri dereceye uzanan dört model.",
    tags: ["Güçlü BTE", "Şarjlı seçenek", "Bluetooth"],
    image: "/images/phonak/models/naida.webp",
    imageAlt: "Phonak Naída kulak arkası (BTE) işitme cihazı, şampanya rengi gövde ve şeffaf kulak kancası",
    meta: {
      title: "Phonak Naída: Güçlü Kulak Arkası İşitme Cihazı",
      description:
        "Phonak Naída Lumity'nin L-M, L-SP, L-PR ve L-UP modelleri, işitme kaybı aralıkları, şarjlı seçenekler ve bağlantı özellikleri. Darıca, Kocaeli'de bilgi alın.",
    },
    hero: {
      eyebrow: "Phonak · Güçlü BTE ailesi",
      title: "Phonak Naída İşitme Cihazları",
      lead:
        "Naída, Phonak'ın kulak arkası (BTE) ailesidir ve Phonak tarafından markanın en güçlü işitme cihazı olarak tanıtılır. Güncel Naída Lumity neslinde hafif kayıptan ileri ve çok ileri dereceye kadar dört model bulunur.",
    },
    definition:
      "Phonak Naída, tüm bileşenlerin kulak arkasındaki tek bir gövdede toplandığı kulak arkası (BTE) işitme cihazı ailesidir. Güncel Naída Lumity neslinin L-UP modeli Phonak'a göre ileri ila çok ileri derecede işitme kaybı içindir; L-M modeli ise hafif ila orta derece kayıplar için sunulur.",
    facts: [
      { label: "Cihaz türü", value: "Kulak arkası (BTE)" },
      { label: "İşitme kaybı aralığı", value: "Modele göre hafif ila çok ileri derece" },
      { label: "Güç", value: "L-PR ve L-UP şarj edilebilir" },
      { label: "Bağlantı", value: "Evrensel Bluetooth, myPhonak / myPhonak Junior, Roger mikrofonları" },
      { label: "Güncel nesil", value: "Naída Lumity (Phonak Türkiye, Kasım 2026)" },
    ],
    sections: [
      {
        kind: "variants",
        id: "naida-modelleri",
        heading: "Naída Lumity: dört model, dört güç seviyesi",
        intro: "Phonak'ın Naída Lumity sayfasında her modelin hangi işitme kaybı aralığı için olduğu ayrı ayrı yazar. Model adlarındaki harfler bu farkı gösterir.",
        columns: ["Model", "İşitme kaybı aralığı (Phonak)", "Güç / not"],
        rows: [
          { name: "Naída L-M", cells: ["Hafif ila orta", "Telecoil; ailenin yeni üyesi"] },
          { name: "Naída L-SP", cells: ["Hafif ila ileri", "Telecoil"] },
          { name: "Naída L-PR", cells: ["Hafif ila ileri orta", "Şarj edilebilir; CROS Lumity ile uyumlu"] },
          { name: "Naída L-UP", cells: ["İleri ila çok ileri", "Şarj edilebilir"] },
        ],
        note: "L-M ve L-SP modellerinin pil tipi Phonak'ın ürün sayfasında belirtilmediği için burada yazılmadı; merkezde birlikte netleştiririz.",
      },
      {
        kind: "prose",
        id: "naida-tasarim",
        heading: "Fiziksel tasarım: güçlü BTE",
        paragraphs: [
          "Kulak arkası (BTE) cihazda mikrofon, işlemci ve hoparlör kulak arkasındaki tek gövdenin içindedir. Ses, gövdenin ucundaki kulak kancasından hortumla kanala, oradan da kulak kalıbı aracılığıyla kulak kanalına ulaşır.",
          "Bu yapı, ileri ve çok ileri derece kayıplarda gereken güçlü kazancın ve kişiye özel kalıbın birlikte kullanılmasına imkân verir. Naída'nın gövdesi bu yüzden Audéo gibi RIC cihazlardan daha belirgindir.",
        ],
        aside: {
          title: "Naída mı Bolero mu?",
          text: "İkisi de Phonak'ın kulak arkası (BTE) aileleridir. Bolero, Phonak'ın sitesinde önceki modeller arasında yer alır; güncel Phonak BTE ailesi Naída Lumity'dir.",
        },
      },
      {
        kind: "features",
        id: "naida-teknoloji",
        heading: "Naída Lumity'de öne çıkan teknolojiler",
        items: [
          { title: "SmartSpeech Technology", text: "Phonak'ın konuşmayı anlamaya yönelik özellik paketi; Naída Lumity'de AutoSense OS 5.0 tarafından ortama göre uyarlanır." },
          { title: "AutoSense OS 5.0", text: "Ortamı tanıyıp ayarları otomatik değiştiren Phonak işletim sisteminin Naída Lumity'deki sürümü." },
          { title: "Speech Enhancer", text: "Phonak'ın Naída Lumity sayfasında adı geçen, konuşmayı öne çıkarmaya yönelik özellik." },
          { title: "Roger mikrofonları", text: "Naída Lumity, Roger mikrofonlarıyla uyumludur; uzaktaki konuşmacının sesi doğrudan cihaza iletilir." },
        ],
      },
      {
        kind: "features",
        id: "naida-baglanti",
        heading: "Şarj ve bağlantı",
        items: [
          { title: "Şarjlı modeller", text: "Phonak'ın sayfasına göre L-PR ve L-UP modelleri şarj edilebilir. Pil süresi için Phonak bir sayı vermediği için burada da yazılmadı." },
          { title: "Evrensel bağlantı", text: "Akıllı telefon, televizyon, tablet ve dizüstü bilgisayar gibi Bluetooth cihazlarıyla bağlantı; müzik ve podcast doğrudan cihaza aktarılır." },
          { title: "myPhonak ve myPhonak Junior", text: "Naída Lumity, yetişkinler için myPhonak ve çocuklar için myPhonak Junior uygulamalarıyla çalışır." },
        ],
      },
      {
        kind: "audience",
        id: "naida-kimler-icin",
        heading: "Naída kimler için değerlendirilir?",
        items: [
          { title: "İleri ve çok ileri derece kayıp", text: "Naída L-UP, Phonak'a göre ileri ila çok ileri derecede işitme kaybı için sunulur. Bu kayıplarda güçlü bir BTE genellikle ilk bakılan seçenektir." },
          { title: "BTE tasarımını tercih edenler", text: "L-M ve L-SP gibi modellerle daha hafif kayıplarda da Naída değerlendirilebilir; seçimi kulak yapınız ve alışkanlıklarınız belirler." },
          { title: "Kalıp kullananlar", text: "Kişiye özel kulak kalıbı kullanmak isteyen ya da gereken kullanıcılar için BTE yapısı uygundur." },
          { title: "Uzaktan mikrofon ihtiyacı olanlar", text: "Toplantı, sınıf veya kalabalık ortamda Roger mikrofonu kullanmayı düşünenler." },
        ],
      },
      {
        kind: "compare",
        id: "naida-fark",
        heading: "Naída'yı diğer Phonak ailelerinden ayıran ne?",
        rows: [
          { slug: "audeo", text: "Audéo bir RIC ailesidir; hoparlör kanaldadır ve gövde daha küçüktür. Naída'da hoparlör gövdededir ve güç seviyesi daha yüksek modeller bulunur." },
          { slug: "sky", text: "Sky aynı Lumity platformunda, aynı model harfleriyle (L-M, L-SP, L-PR, L-UP) çocuklar için tasarlanmış ailedir." },
          { slug: "bolero", text: "Bolero da bir BTE ailesidir ancak Phonak'ın sitesinde önceki modeller arasında yer alır." },
        ],
      },
      {
        kind: "proscons",
        id: "naida-degerlendirme",
        heading: "Avantajlar ve dikkat edilmesi gerekenler",
        pros: [
          "Hafif kayıptan çok ileri dereceye kadar uzanan dört model.",
          "Phonak'ın en güçlü işitme cihazı olarak tanıttığı aile.",
          "Şarjlı modeller (L-PR, L-UP) ve evrensel Bluetooth bağlantısı.",
          "Roger mikrofonlarıyla uyum.",
        ],
        cons: [
          "BTE gövde, RIC cihazlara göre kulak arkasında daha belirgindir.",
          "Kulak kalıbı ve hortum düzenli temizlik ve zamanla değişim ister.",
          "Her modelin güç kaynağı aynı değildir; seçim modele göre netleşir.",
        ],
      },
      {
        kind: "center",
        id: "naida-merkezde",
        heading: "Naída için merkezimizde",
        items: [CENTER_TEST, CENTER_DEMO, CENTER_TRIAL, CENTER_HOME],
      },
    ],
    faq: [
      {
        question: "Phonak Naída nedir?",
        answer:
          "Phonak Naída, Phonak'ın kulak arkası (BTE) işitme cihazı ailesidir ve Phonak tarafından markanın en güçlü işitme cihazı olarak tanıtılır. Güncel nesli Naída Lumity'dir.",
      },
      {
        question: "Naída yalnızca ileri derece işitme kaybı için mi?",
        answer:
          "Hayır. Phonak'a göre Naída L-UP ileri ila çok ileri, L-SP hafif ila ileri, L-PR hafif ila ileri orta, L-M ise hafif ila orta derecede işitme kaybı içindir. Hangi modelin uygun olduğu işitme testinizden sonra belirlenir.",
      },
      {
        question: "Hangi Naída modelleri şarjlı?",
        answer: "Phonak'ın Naída Lumity sayfasına göre L-PR ve L-UP modelleri şarj edilebilir.",
      },
      {
        question: "Naída telefona bağlanır mı?",
        answer:
          "Evet. Naída Lumity, akıllı telefon, televizyon, tablet ve dizüstü bilgisayar gibi Bluetooth cihazlarıyla evrensel bağlantı kurar; müzik ve podcast doğrudan cihaza aktarılabilir.",
      },
      {
        question: "Naída mı Audéo mu?",
        answer:
          "Audéo hoparlörü kanalda olan bir RIC ailesi, Naída ise hoparlörü gövdede olan güçlü bir BTE ailesidir. İşitme kaybınızın derecesi ve kulak yapınız bu seçimde belirleyicidir; karar işitme testinden sonra verilir.",
      },
    ],
    related: ["sky", "bolero", "audeo"],
    sources: [
      src(SOURCES.naida, "dört model, kayıp aralıkları, şarjlı modeller, teknoloji ve bağlantı"),
      src(SOURCES.crosLumity, "Naída L-PR ile CROS Lumity uyumu"),
      src(SOURCES.hubTr, "Bolero Marvel'in önceki modeller arasında yer alması"),
    ],
  },

  // ============================================================== SKY
  {
    slug: "sky",
    name: "Sky",
    fullName: "Phonak Sky",
    typeLabel: "Çocuklar için kulak arkası (BTE)",
    generation: "Güncel nesil: Sky Lumity",
    summary:
      "Çocuklar için tasarlanmış pediatrik kulak arkası ailesi. IP68 suya ve toza dayanıklılık, Roger uyumu ve myPhonak Junior uygulaması.",
    tags: ["Pediatrik BTE", "IP68", "Bluetooth"],
    image: "/images/phonak/models/sky.webp",
    imageAlt: "Phonak Sky çocuk işitme cihazı, mavi renkli kulak arkası (BTE) gövde ve şeffaf kulak kancası",
    meta: {
      title: "Phonak Sky: Çocuklar İçin Kulak Arkası İşitme Cihazı",
      description:
        "Phonak Sky Lumity çocuklar için: dört model, IP68 suya ve toza dayanıklılık, Roger ve myPhonak Junior. Sky Link Marvel ve çocuklarda değerlendirme süreci.",
    },
    hero: {
      eyebrow: "Phonak · Pediatrik işitme cihazı ailesi",
      title: "Phonak Sky Çocuk İşitme Cihazları",
      lead:
        "Sky, Phonak'ın çocuklar için geliştirdiği kulak arkası (BTE) ailesidir. Güncel Sky Lumity neslinde dört model, renkli gövde ve kanca seçenekleri, IP68 dayanıklılık ve okulda Roger ile kullanım öne çıkar.",
    },
    definition:
      "Phonak Sky, çocukların günlük yaşamı ve okul ortamı düşünülerek tasarlanmış pediatrik kulak arkası (BTE) işitme cihazı ailesidir. Güncel Sky Lumity nesli, Naída Lumity ile aynı model harflerini (L-M, L-SP, L-PR, L-UP) kullanır ve hafif ila çok ileri derecede kayıpları kapsar.",
    facts: [
      { label: "Cihaz türü", value: "Pediatrik kulak arkası (BTE)" },
      { label: "İşitme kaybı aralığı", value: "Modele göre hafif ila çok ileri derece" },
      { label: "Güç", value: "L-PR şarjlı; L-M 312, L-SP 13, L-UP 675 numara pil" },
      { label: "Dayanıklılık", value: "IP68 suya ve toza dayanıklı (Phonak)" },
      { label: "Uygulama", value: "myPhonak Junior" },
    ],
    sections: [
      {
        kind: "variants",
        id: "sky-modelleri",
        heading: "Sky Lumity modelleri",
        intro: "Phonak'ın Sky Lumity sayfasında model başına işitme kaybı aralığı ve pil tipi yer alır.",
        columns: ["Model", "İşitme kaybı aralığı (Phonak)", "Güç"],
        rows: [
          { name: "Sky L-M", cells: ["Hafif ila orta", "312 numara pil"] },
          { name: "Sky L-SP", cells: ["Hafif ila ileri", "13 numara pil"] },
          { name: "Sky L-PR", cells: ["Hafif ila ileri orta", "Şarj edilebilir; CROS Lumity ile uyumlu"] },
          { name: "Sky L-UP", cells: ["İleri ila çok ileri", "675 numara pil"] },
        ],
        note: "Phonak'ın Türkiye sitesinde ayrıca Sky Link Marvel listelenir: Advanced Bionics ses işlemcisiyle eşleşebilen, çocuklar için bimodal bir kulak arkası cihaz. Bu modelde kurcalama korumalı kanca ve pil kapağı bulunduğu belirtilir.",
      },
      {
        kind: "features",
        id: "sky-cocuklar-icin",
        heading: "Çocuklar için düşünülen tasarım",
        intro: "Phonak'ın Sky Lumity sayfasında çocuk kullanımına yönelik şu özellikler yer alır.",
        items: [
          { title: "IP68 dayanıklılık", text: "Phonak, Sky Lumity'nin suya ve toza dayanıklı olduğunu ve IP68 sınıfında bulunduğunu belirtir (1 metre tatlı suda 60 dakika). Phonak, cihazla yüzülmemesini önerir." },
          { title: "Kurcalamaya dayanıklı tasarım", text: "Phonak, Sky Lumity'yi kurcalamaya dayanıklı bir tasarım olarak tanıtır. Kanca ve pil kapağında kurcalama koruması Sky Link Marvel için ayrıca belirtilmiştir." },
          { title: "LED göstergeler", text: "Cihazın durumunu gösteren ışıklar, ebeveynin ve öğretmenin cihazın çalıştığını görmesini kolaylaştırır." },
          { title: "Renk seçenekleri", text: "Phonak, gövde için 14 ve kulak kancası için 14 renk seçeneği sunar; çocuk cihazını kendi zevkine göre seçebilir." },
        ],
      },
      {
        kind: "features",
        id: "sky-teknoloji",
        heading: "Okul ve gündelik yaşam için teknoloji",
        items: [
          { title: "AutoSense Sky OS 5.0", text: "Çocukların karşılaştığı ses ortamlarına göre ayarları otomatik değiştiren işletim sistemi; Phonak saniyede 700 tarama yapıldığını belirtir." },
          { title: "Roger ile sınıfta", text: "Sky Lumity, Roger mikrofonlarıyla uyumludur. Öğretmenin sesi mikrofon aracılığıyla doğrudan cihaza iletilir." },
          { title: "SmartSpeech Technology ve SoundRecover2", text: "Phonak'ın Sky Lumity sayfasında adı geçen ses işleme özellikleri; hangilerinin çocuğunuzun cihazında açık olacağı ayar sırasında belirlenir." },
          { title: "myPhonak Junior", text: "Phonak'ın çocuklara özel uygulaması; ebeveynlerin ve çocukların cihazı yönetmesine yardımcı olur." },
        ],
      },
      {
        kind: "steps",
        id: "sky-ebeveynler",
        heading: "Ebeveynler için: süreç nasıl ilerler?",
        steps: [
          { title: "İşitme değerlendirmesi", text: "Çocuklarda cihaz kararı her zaman işitme değerlendirmesinden sonra verilir. Ücretsiz işitme testimiz 5 yaş ve üzeri için uygulanır." },
          { title: "Model ve kalıp seçimi", text: "Kayıp derecesine göre Sky modeli, kulak yapısına göre kalıp belirlenir; renk seçimi çocukla birlikte yapılabilir." },
          { title: "Okul planı", text: "Sınıfta Roger mikrofonu kullanılıp kullanılmayacağı öğretmenle birlikte değerlendirilir." },
          { title: "Kontroller", text: "Çocuk büyüdükçe kalıp ve ayarlar değişebilir; düzenli kontrol randevuları planlanır." },
        ],
      },
      {
        kind: "compare",
        id: "sky-fark",
        heading: "Sky'ı diğer Phonak ailelerinden ayıran ne?",
        rows: [
          { slug: "naida", text: "Naída aynı Lumity model harflerini kullanan yetişkin BTE ailesidir; Sky ise çocukların günlük yaşamı için IP68 dayanıklılık, renkler ve myPhonak Junior ile gelir." },
          { slug: "audeo", text: "Audéo bir RIC ailesidir. Phonak, çocuklar için kulak arkası cihazların diğer tiplere göre daha uygun olduğunu belirtir." },
          { slug: "cros", text: "Sky L-PR, Phonak'a göre CROS Lumity ile birlikte kullanılabilen modeller arasındadır." },
        ],
      },
      {
        kind: "center",
        id: "sky-merkezde",
        heading: "Çocuğunuz için merkezimizde",
        items: [
          CENTER_TEST,
          { title: "Çocuk işitme testi", text: "Çocuklarda değerlendirme sürecini ilgili sayfamızda ayrıntılı anlatıyoruz.", href: "/degerlendirme/cocuk-isitme-testi/", linkLabel: "Çocuk işitme testi" },
          { title: "Çocuklarda SGK", text: "Çocuklar için SGK desteği ve gerekli belgeler ayrı bir rehberde.", href: "/sgk/cocuklarda-sgk/", linkLabel: "Çocuklarda SGK" },
          CENTER_DEMO,
        ],
      },
    ],
    faq: [
      {
        question: "Phonak Sky nedir?",
        answer:
          "Phonak Sky, çocuklar için tasarlanmış pediatrik kulak arkası (BTE) işitme cihazı ailesidir. Güncel nesli Sky Lumity'dir ve L-M, L-SP, L-PR ve L-UP olmak üzere dört modeli vardır.",
      },
      {
        question: "Phonak Sky suya dayanıklı mı?",
        answer:
          "Phonak, Sky Lumity'nin suya ve toza dayanıklı olduğunu ve IP68 sınıfında bulunduğunu belirtir: 1 metre tatlı suda 60 dakika. Phonak, cihazla yüzülmemesini önerir.",
      },
      {
        question: "Sky Lumity'de hangi model şarjlı?",
        answer: "Phonak'a göre Sky L-PR şarj edilebilir. L-M modeli 312, L-SP 13 ve L-UP 675 numara pil kullanır.",
      },
      {
        question: "Sky okulda Roger ile kullanılabilir mi?",
        answer:
          "Evet. Sky Lumity, Roger mikrofonlarıyla uyumludur; öğretmenin sesi mikrofon aracılığıyla doğrudan cihaza iletilebilir. Sınıfta kullanım planı öğretmenle birlikte değerlendirilir.",
      },
      {
        question: "Sky Link Marvel nedir?",
        answer:
          "Sky Link Marvel, Phonak'ın Türkiye sitesinde listelenen, çocuklar için bimodal bir kulak arkası işitme cihazıdır. Phonak'a göre bir Advanced Bionics ses işlemcisiyle eşleşebilir; kurcalama korumalı kanca ve pil kapağına sahiptir.",
      },
      {
        question: "Çocuğumun işitme testi kaç yaşında yapılabilir?",
        answer:
          "Merkezimizdeki ücretsiz işitme testi 5 yaş ve üzeri için uygulanır. Çocuklarda değerlendirme süreci için Çocuk İşitme Testi sayfamıza bakabilirsiniz.",
      },
    ],
    related: ["naida", "cros", "audeo"],
    sources: [
      src(SOURCES.sky, "dört model, pil tipleri, IP68, renkler, Roger ve myPhonak Junior"),
      src(SOURCES.skyLink, "bimodal kullanım, kurcalama korumalı kanca ve pil kapağı"),
      src(SOURCES.crosLumity, "Sky L-PR ile CROS Lumity uyumu"),
    ],
  },

  // ============================================================== BOLERO
  {
    slug: "bolero",
    name: "Bolero",
    fullName: "Phonak Bolero",
    typeLabel: "Kulak arkası (BTE)",
    generation: "Önceki nesil: Bolero Marvel",
    summary:
      "Phonak'ın kulak arkası (BTE) ailesinin önceki nesli. Bolero Marvel'in şarjlı M-PR ve pilli M-M modelleri telefonla doğrudan Bluetooth bağlantısı kurar.",
    tags: ["BTE", "Önceki nesil", "Bluetooth"],
    image: "/images/phonak/models/bolero.webp",
    imageAlt: "Phonak Bolero kulak arkası (BTE) işitme cihazı, şampanya rengi gövde ve şeffaf kulak kancası",
    meta: {
      title: "Phonak Bolero Marvel: Kulak Arkası (BTE) İşitme Cihazı",
      description:
        "Phonak Bolero Marvel M-PR ve M-M modelleri: şarjlı ve pilli seçenekler, Bluetooth ile telefon bağlantısı. Bolero kullanıcıları için Darıca'da servis ve bilgi.",
    },
    hero: {
      eyebrow: "Phonak · BTE · Önceki nesil",
      title: "Phonak Bolero İşitme Cihazları",
      lead:
        "Bolero, Phonak'ın kulak arkası (BTE) ailesidir. Phonak'ın resmî sitesinde bu aileden Bolero Marvel, “önceki Phonak modelleri” arasında yer alır: şarjlı M-PR ve 312 pilli M-M modelleriyle.",
    },
    definition:
      "Phonak Bolero, mikrofon, işlemci ve hoparlörün kulak arkasındaki tek gövdede bulunduğu kulak arkası (BTE) işitme cihazı ailesidir. Phonak'ın resmî kaynaklarında belgelenen nesli Bolero Marvel'dir ve Phonak bu nesli önceki modeller arasında gösterir.",
    facts: [
      { label: "Cihaz türü", value: "Kulak arkası (BTE)" },
      { label: "Belgelenen nesil", value: "Bolero Marvel (M-PR, M-M) — Phonak'ta önceki modeller arasında" },
      { label: "İşitme kaybı aralığı", value: "M-PR hafif ila ileri; M-M hafif ila orta (Phonak)" },
      { label: "Güç", value: "M-PR şarj edilebilir; M-M 312 çinko-hava pil" },
      { label: "Bağlantı", value: "iOS, Android ve diğer Bluetooth cihazlarına doğrudan bağlantı; eller serbest arama" },
    ],
    sections: [
      {
        kind: "notice",
        id: "bolero-durum",
        heading: "Bolero bugün nerede duruyor?",
        paragraphs: [
          "Phonak'ın Türkiye sitesinde Bolero Marvel güncel ürün listesinde değil, “önceki Phonak modelleri” bölümünde yer alır. Bu yüzden Bolero'nun yeni cihaz olarak bulunabilirliği konusunda bir taahhütte bulunmuyoruz; güncel durumu bizi arayarak öğrenebilirsiniz.",
          "Phonak'ın güncel kulak arkası aileleri yetişkinler için Naída Lumity, çocuklar için Sky Lumity'dir. Hâlihazırda Bolero kullanıyorsanız cihazınızın teknik servisi, bakımı, ayarı ve pil ihtiyacı için merkezimize başvurabilirsiniz.",
        ],
      },
      {
        kind: "variants",
        id: "bolero-modelleri",
        heading: "Bolero Marvel modelleri: M-PR ve M-M",
        intro: "Phonak'ın Bolero Marvel sayfasında iki model ve her birinin işitme kaybı aralığı yer alır.",
        columns: ["Model", "İşitme kaybı aralığı (Phonak)", "Güç"],
        rows: [
          { name: "Bolero M-PR", cells: ["Hafif ila ileri", "Şarj edilebilir"] },
          { name: "Bolero M-M", cells: ["Hafif ila orta", "312 numara çinko-hava pil"] },
        ],
        note:
          "Bolero B gibi daha eski Bolero nesilleri Phonak'ın bugün erişilebilen resmî sayfalarında yer almadığı için bu sayfada ayrıntılandırılmadı. Şarj süresi ve pil ömrü için Phonak'ın web sayfasında bir sayı verilmediğinden burada da yazılmadı.",
      },
      {
        kind: "features",
        id: "bolero-teknoloji",
        heading: "Bolero Marvel'in teknolojileri",
        intro: "Phonak'ın Bolero Marvel ve özellikler sayfalarında adı geçen teknolojiler.",
        items: [
          { title: "AutoSense OS 3.0", text: "Ortamı tanıyıp ayarları otomatik değiştiren Phonak işletim sisteminin Bolero Marvel'deki sürümü. Güncel ailelerde bu sistemin daha yeni sürümleri kullanılır." },
          { title: "Binaural VoiceStream Technology", text: "Phonak'ın Bolero Marvel sayfasında adı geçen, iki kulakta cihaz kullanımına yönelik teknoloji." },
          { title: "DuoPhone", text: "Telefon görüşmesinde arayanın sesinin iki kulakta da duyulmasına yönelik özellik." },
          { title: "Diğer özellikler", text: "Phonak'ın Bolero Marvel özellikler sayfasında ayrıca UltraZoom, WhistleBlock, SoundRecover2, QuickSync ve Tinnitus Balance adları listelenir." },
        ],
      },
      {
        kind: "features",
        id: "bolero-baglanti",
        heading: "Şarj ve bağlantı",
        items: [
          { title: "Şarjlı M-PR", text: "Phonak'a göre şarjlı model, şarj cihazından çıkarıldığında otomatik açılır, geri konduğunda kapanır." },
          { title: "Doğrudan telefon bağlantısı", text: "Bolero Marvel, iOS ve Android akıllı telefonlara ve diğer Bluetooth cihazlarına doğrudan bağlanır; eller serbest arama ve ses aktarımı yapılabilir. Phonak, Bluetooth 4.2 sertifikalı olduğunu belirtir." },
          { title: "TV ve Roger", text: "Televizyon sesi Phonak TV Connector aksesuarıyla aktarılır. RogerDirect ile Roger mikrofonları doğrudan cihaza bağlanır; Roger alıcılarının uzman tarafından takılması gerekir." },
        ],
      },
      {
        kind: "audience",
        id: "bolero-kimler-icin",
        heading: "Bolero sayfası kimin için?",
        items: [
          { title: "Bolero kullanıcıları", text: "Cihazının modelini, pil tipini (M-M için 312) ya da şarjını öğrenmek isteyen, servis ve bakım arayan mevcut Bolero kullanıcıları." },
          { title: "BTE araştıranlar", text: "Kulak arkası bir Phonak cihazı arayanlar için Bolero'nun yerini güncel Naída Lumity ailesinin aldığını bilmek önemlidir." },
          { title: "Pilli cihaz tercih edenler", text: "Değiştirilebilir pil kullanmayı tercih edenler için Phonak'ın güncel aileleri arasında da pilli modeller bulunur (ör. Sky L-M, Virto I-10 NW O)." },
        ],
      },
      {
        kind: "compare",
        id: "bolero-fark",
        heading: "Bolero'yu diğer Phonak ailelerinden ayıran ne?",
        rows: [
          { slug: "naida", text: "Naída Lumity, Phonak'ın güncel BTE ailesidir; daha yeni AutoSense OS 5.0 sürümünü ve dört güç seviyesini sunar." },
          { slug: "sky", text: "Sky Lumity, çocuklar için tasarlanmış güncel BTE ailesidir." },
          { slug: "audeo", text: "Audéo, hoparlörü kanalda olan bir RIC ailesidir; Bolero'da hoparlör gövdenin içindedir." },
        ],
      },
      {
        kind: "center",
        id: "bolero-merkezde",
        heading: "Bolero kullanıcıları için merkezimizde",
        items: [
          CENTER_SERVICE,
          { title: "Pil ve aksesuar", text: "Pilli modeller için pil ve aksesuar satışını merkezimizde yapıyoruz.", href: "/servis-bakim/pil-aksesuar/", linkLabel: "Pil ve aksesuar" },
          { title: "Bakım ve temizlik", text: "Cihazın bakım ve temizliği merkezimizde ücretsiz yapılır; randevu gerekir.", href: "/servis-bakim/", linkLabel: "Servis ve bakım" },
          CENTER_TEST,
        ],
      },
    ],
    faq: [
      {
        question: "Phonak Bolero nedir?",
        answer:
          "Phonak Bolero, kulak arkası (BTE) işitme cihazı ailesidir. Phonak'ın resmî kaynaklarında belgelenen nesli Bolero Marvel'dir ve M-PR ile M-M modellerinden oluşur.",
      },
      {
        question: "Phonak Bolero hâlâ satılıyor mu?",
        answer:
          "Phonak'ın resmî sitesinde Bolero Marvel, güncel ürün listesinde değil, önceki Phonak modelleri arasında gösterilir. Bulunabilirlik için bizi arayın; Phonak'ın güncel kulak arkası aileleri Naída Lumity ve çocuklar için Sky Lumity'dir.",
      },
      {
        question: "Bolero M-PR ile M-M arasındaki fark nedir?",
        answer:
          "Phonak'a göre Bolero M-PR şarj edilebilir ve hafif ila ileri derecede işitme kaybı için, Bolero M-M ise 312 numara çinko-hava pil kullanır ve hafif ila orta derecede işitme kaybı içindir.",
      },
      {
        question: "Bolero Marvel telefona bağlanır mı?",
        answer:
          "Evet. Phonak'a göre Bolero Marvel, iOS ve Android akıllı telefonlara ve diğer Bluetooth cihazlarına doğrudan bağlanır; eller serbest arama yapılabilir.",
      },
      {
        question: "Bolero cihazımın servisini nerede yaptırabilirim?",
        answer:
          "Phonak cihazların teknik servisini Darıca'daki merkezimizde veriyoruz; servis ücreti duruma göre değişir. Bakım ve temizlik ise ücretsizdir; ikisi için de randevu gerekir.",
      },
    ],
    related: ["naida", "sky", "audeo"],
    sources: [
      src(SOURCES.bolero, "M-PR ve M-M modelleri, kayıp aralıkları, şarj ve pil"),
      src(SOURCES.boleroFeatures, "bağlantı, Bluetooth 4.2, Roger ve teknolojiler"),
      src(SOURCES.marvelGuides, "Bolero M-PR ve M-M kullanım kılavuzları"),
      src(SOURCES.hubTr, "önceki Phonak modelleri bölümü"),
    ],
  },

  // ============================================================== VIRTO
  {
    slug: "virto",
    name: "Virto",
    fullName: "Phonak Virto",
    typeLabel: "Kişiye özel kulak içi (ITE)",
    generation: "Güncel nesil: Virto Infinio",
    summary:
      "Kulak kanalınıza göre kişiye özel üretilen kulak içi aile. Şarjlı ve Bluetooth'lu Virto R Infinio ile daha küçük Virto I-Titanium ve I-10 NW O.",
    tags: ["Kulak içi", "Kişiye özel", "Şarjlı (R)"],
    image: "/images/phonak/models/virto.webp",
    imageAlt: "Phonak Virto kişiye özel kulak içi (ITE) işitme cihazı, siyah renkli",
    meta: {
      title: "Phonak Virto: Kişiye Özel Kulak İçi İşitme Cihazı",
      description:
        "Phonak Virto R Infinio, Virto I-Titanium ve Virto I-10 NW O: kişiye özel kulak içi modeller, şarj ve Bluetooth farkları, merkezde deneme kuralları.",
    },
    hero: {
      eyebrow: "Phonak · Kişiye özel kulak içi",
      title: "Phonak Virto Kulak İçi İşitme Cihazları",
      lead:
        "Virto, Phonak'ın kulak kanalınızın şekline göre kişiye özel üretilen kulak içi (ITE) ailesidir. Güncel Virto R Infinio şarjlı ve evrensel Bluetooth bağlantılıdır; Virto I-Titanium ve I-10 NW O ise daha küçük, mahremiyeti öne alan seçeneklerdir.",
    },
    definition:
      "Phonak Virto, kulak arkasında gövdesi olmayan, tamamen kulak kanalının içine yerleşen ve kişinin kulak yapısına göre özel üretilen kulak içi (ITE) işitme cihazı ailesidir. Phonak, Virto R Infinio için hafif ila çok ileri, Virto I-Titanium ve I-10 NW O için hafif ila ileri derecede işitme kaybı aralığını belirtir.",
    facts: [
      { label: "Cihaz türü", value: "Kişiye özel kulak içi (ITE)" },
      { label: "Modeller", value: "Virto R Infinio, Virto I-Titanium, Virto I-10 NW O" },
      { label: "Güç", value: "R Infinio şarjlı; I-10 NW O 10 numara çinko-hava pil" },
      { label: "Bağlantı", value: "Evrensel Bluetooth yalnızca Virto R Infinio'da belirtilir" },
      { label: "Deneme", value: "Kulak içi olduğu için merkezde demo; 7 günlük deneme kapsamı dışında" },
    ],
    sections: [
      {
        kind: "variants",
        id: "virto-modelleri",
        heading: "Virto Infinio ailesindeki modeller",
        intro: "Phonak'ın Virto Infinio sayfasında üç model yer alır; şarj ve Bluetooth yalnızca Virto R Infinio için belirtilir.",
        columns: ["Model", "İşitme kaybı aralığı (Phonak)", "Güç", "Öne çıkan"],
        rows: [
          { name: "Virto R Infinio", cells: ["Hafif ila çok ileri", "Şarjlı; mıknatıslı şarj", "Evrensel Bluetooth, 8 cihaza kadar eşleştirme"] },
          { name: "Virto I-Titanium", cells: ["Hafif ila ileri", "Belirtilmemiş", "Tıbbi kullanıma uygun titanyum gövde"] },
          { name: "Virto I-10 NW O", cells: ["Hafif ila ileri", "10 numara çinko-hava pil", "Phonak'ın “gerçekten görünmez” dediği küçük yapı"] },
        ],
        note: "Virto I-Titanium'un güç kaynağı Phonak'ın sayfasında belirtilmediği için “belirtilmemiş” yazıldı.",
      },
      {
        kind: "steps",
        id: "virto-uretim",
        heading: "Kişiye özel cihaz nasıl hazırlanır?",
        intro: "Virto bir kulak içi cihaz olduğu için süreç, hazır bir kulak arkası cihazdan farklı ilerler.",
        steps: [
          { title: "İşitme testi", text: "Önce işitme kaybınızın derecesi belirlenir; Virto'nun hangi modelinin uygun olduğu buna göre değerlendirilir." },
          { title: "Kulak ölçüsü", text: "Kulak kanalınızın ölçüsü alınır ve cihaz bu ölçüye göre üretilir. Phonak, Virto R Infinio için 1600 veri noktasına dayanan Biometric Calibration'dan söz eder." },
          { title: "Merkezde demo", text: "Kulak içi cihazlar eve verilen 7 günlük deneme kapsamına girmez; deneme merkezimizde demo olarak yapılır." },
          { title: "Uygulama ve ayar", text: "Cihaz teslim edildiğinde merkezde takılır, ayarlanır ve kullanım anlatılır." },
        ],
      },
      {
        kind: "features",
        id: "virto-teknoloji",
        heading: "Virto R Infinio'da öne çıkan teknolojiler",
        items: [
          { title: "AutoSense OS 7.0", text: "Ortamı tanıyıp ayarları otomatik değiştiren Phonak işletim sisteminin güncel sürümü." },
          { title: "SmartSpeech Technology ve Speech Enhancer", text: "Phonak'ın konuşmayı anlamaya yönelik özellikleri; Virto R Infinio sayfasında adları geçer." },
          { title: "RightFit", text: "Phonak'ın kulak içi cihazda kişiselleştirilmiş uyum için kullandığı yaklaşım." },
          { title: "Evrensel bağlantı", text: "8 cihaza kadar Bluetooth eşleştirme ve aynı anda 2 bağlantı; myPhonak ile tek adımda eşleştirme." },
        ],
      },
      {
        kind: "audience",
        id: "virto-kimler-icin",
        heading: "Virto kimler için değerlendirilir?",
        items: [
          { title: "Kulak arkasında cihaz istemeyenler", text: "Gözlük, maske veya saç modeli nedeniyle kulak arkasında gövde istemeyenler için kulak içi yapı bir seçenektir." },
          { title: "Mahremiyeti öne alanlar", text: "Phonak, Virto I-Titanium ve I-10 NW O'yu mahremiyeti öncelikli tutanlar için küçük modeller olarak tanıtır." },
          { title: "Kulak kanalı uygun olanlar", text: "Kulak içi cihaz kanal ölçüsüne bağlıdır; kanalınızın uygunluğu muayene ve ölçüyle belirlenir." },
        ],
      },
      {
        kind: "compare",
        id: "virto-fark",
        heading: "Virto'yu diğer Phonak ailelerinden ayıran ne?",
        rows: [
          { slug: "audeo", text: "Audéo'nun gövdesi kulak arkasındadır ve hoparlörü kanaldadır; Virto'nun tamamı kanalın içindedir." },
          { slug: "naida", text: "Naída güçlü bir BTE ailesidir; çok ileri derece kayıplarda kulak arkası yapı genellikle öne çıkar." },
          { slug: "cros", text: "CROS bir işitme cihazı değil, sesi diğer kulaktaki uyumlu cihaza aktaran bir sistemdir." },
        ],
      },
      {
        kind: "proscons",
        id: "virto-degerlendirme",
        heading: "Avantajlar ve dikkat edilmesi gerekenler",
        pros: [
          "Kulak arkasında gövde yoktur; cihaz kulak kanalına göre özel üretilir.",
          "Virto R Infinio şarjlıdır ve evrensel Bluetooth bağlantısı sunar.",
          "Küçük yapı isteyenler için Virto I-Titanium ve I-10 NW O seçenekleri.",
        ],
        cons: [
          "Kulak içi cihazlar eve verilen 7 günlük deneme kapsamı dışındadır; deneme merkezde demo olarak yapılır.",
          "Şarj ve Bluetooth yalnızca Virto R Infinio'da belirtilir.",
          "Kanal ölçüsü uygun değilse kulak içi cihaz önerilmeyebilir.",
          "Kulak içindeki cihaz nem ve kulak kirine karşı düzenli temizlik ister.",
        ],
      },
      {
        kind: "center",
        id: "virto-merkezde",
        heading: "Virto için merkezimizde",
        items: [
          CENTER_TEST,
          { title: "Kalıp ve ölçü alımı", text: "Kişiye özel cihazlar için kulak ölçüsü merkezimizde alınır.", href: "/uygulama-ayar/kalip-alimi/", linkLabel: "Kalıp alımı" },
          { title: "Merkezde demo", text: "Kulak içi cihazlar eve verilen 7 günlük deneme kapsamına girmez; merkezimizde yaklaşık 20 dakikalık ücretsiz demo yapılabilir." },
          CENTER_SERVICE,
        ],
      },
    ],
    faq: [
      {
        question: "Phonak Virto nedir?",
        answer:
          "Phonak Virto, kulak kanalının şekline göre kişiye özel üretilen kulak içi (ITE) işitme cihazı ailesidir. Phonak'ın Türkiye sitesinde Virto R Infinio, Virto I-Titanium ve Virto I-10 NW O olmak üzere üç model listelenir.",
      },
      {
        question: "Phonak Virto şarjlı mı?",
        answer:
          "Virto R Infinio şarjlıdır ve mıknatıslı şarj kullanır. Virto I-10 NW O 10 numara çinko-hava pil kullanır. Virto I-Titanium'un güç kaynağı Phonak'ın sayfasında belirtilmez.",
      },
      {
        question: "Virto'da Bluetooth var mı?",
        answer:
          "Phonak, evrensel Bluetooth bağlantısını Virto R Infinio için belirtir: 8 cihaza kadar eşleştirme ve aynı anda 2 bağlantı. Diğer iki Virto modeli için Bluetooth belirtilmez.",
      },
      {
        question: "Phonak Virto'yu satın almadan denemek mümkün mü?",
        answer:
          "Virto kulak içi bir cihaz olduğu için satın alarak 7 güne kadar deneme kapsamı dışındadır. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılabilir.",
      },
      {
        question: "Virto I-Titanium nedir?",
        answer:
          "Virto I-Titanium, Phonak'ın tıbbi kullanıma uygun titanyumdan üretilen küçük kulak içi modelidir. Phonak bu modeli hafif ila ileri derecede işitme kaybı için ve mahremiyeti öncelikli tutanlar için tanıtır.",
      },
    ],
    related: ["audeo", "cros", "naida"],
    sources: [src(SOURCES.virto, "Virto R Infinio, Virto I-Titanium ve Virto I-10 NW O; şarj, pil ve bağlantı")],
  },

  // ============================================================== CROS
  {
    slug: "cros",
    name: "CROS",
    fullName: "Phonak CROS",
    typeLabel: "Tek taraflı işitme kaybı için ses aktarımı",
    generation: "Güncel nesil: CROS Infinio",
    summary:
      "Desteklenemeyen kulaktaki sesi kablosuz olarak iyi duyan kulaktaki uyumlu Phonak cihazına aktaran sistem. Her zaman bir işitme cihazıyla birlikte kullanılır.",
    tags: ["Tek taraflı", "Şarjlı", "Kablosuz aktarım"],
    image: "/images/phonak/models/cros.webp",
    imageAlt: "Phonak CROS sayfası görseli: kulak arkası yerleşimli Phonak cihazı",
    meta: {
      title: "Phonak CROS: Tek Taraflı İşitme Kaybı Çözümü",
      description:
        "Phonak CROS nasıl çalışır? CROS Infinio ve CROS Lumity'nin uyumlu işitme cihazları, şarj ve bağlantı özellikleri. Tek taraflı işitme kaybında değerlendirme.",
    },
    hero: {
      eyebrow: "Phonak · Tek taraflı işitme kaybı",
      title: "Phonak CROS Sistemi",
      lead:
        "CROS, bir kulağı işitme cihazıyla desteklenemeyen kişiler için Phonak'ın ses aktarım çözümüdür. Desteklenemeyen kulağa takılan CROS cihazı sesleri alır ve kablosuz olarak öbür kulaktaki uyumlu Phonak işitme cihazına iletir.",
    },
    definition:
      "Phonak CROS, tek kulakta işitme cihazıyla desteklenemeyen işitme kaybı olan kişiler için geliştirilmiş bir sistemdir. CROS cihazı desteklenemeyen kulağa takılır, sesleri ve konuşmayı alır ve kablosuz olarak iyi duyan kulaktaki uyumlu Phonak işitme cihazına iletir. Phonak'a göre CROS her zaman uyumlu bir işitme cihazıyla birlikte kullanılır.",
    facts: [
      { label: "Ne işe yarar", value: "Desteklenemeyen kulaktaki sesi iyi duyan kulağa aktarır" },
      { label: "Güncel nesil", value: "CROS Infinio (Phonak Türkiye, Kasım 2026)" },
      { label: "Uyumlu cihazlar", value: "CROS Infinio: Audéo R Infinio · CROS Lumity: Audéo L-R, L-RT, Naída L-PR, Sky L-PR" },
      { label: "Güç", value: "Tamamen şarj edilebilir" },
      { label: "Bağlantı", value: "Audéo R ile eşleştiğinde evrensel Bluetooth ve eller serbest arama" },
    ],
    sections: [
      {
        kind: "steps",
        id: "cros-nasil-calisir",
        heading: "CROS nasıl çalışır?",
        intro: "Phonak'ın CROS Lumity sayfasındaki açıklamaya göre sistem iki parçadan oluşur.",
        steps: [
          { title: "Desteklenemeyen kulak", text: "CROS cihazı, işitme cihazıyla desteklenemeyen kulağa takılır ve o taraftaki sesleri ve konuşmayı alır." },
          { title: "Kablosuz aktarım", text: "CROS cihazı aldığı sesi kablosuz olarak öbür kulaktaki işitme cihazına gönderir." },
          { title: "İyi duyan kulak", text: "Uyumlu Phonak işitme cihazı bu sesi alır ve iyi duyan kulağa iletir; böylece desteklenemeyen taraftaki ses de duyulabilir hâle gelir." },
        ],
      },
      {
        kind: "variants",
        id: "cros-uyumluluk",
        heading: "Hangi CROS hangi işitme cihazıyla çalışır?",
        intro: "CROS tek başına kullanılmaz; her nesil belirli Phonak işitme cihazlarıyla eşleşir.",
        columns: ["CROS", "Uyumlu işitme cihazı (Phonak)", "Güç ve not"],
        rows: [
          { name: "CROS Infinio", cells: ["Audéo R Infinio", "Tamamen şarj edilebilir; Phonak'a göre 16 saatten fazla; ERA çipi"] },
          { name: "CROS Lumity", cells: ["Audéo L-R, Audéo L-RT, Naída L-PR, Sky L-PR", "Tamamen şarj edilebilir; RogerDirect"] },
        ],
        note: "Phonak'ın uluslararası sitesinde ayrıca Audéo EON R ile eşleşen CROS EON R listeleniyor; Türkiye'de bulunabilirliği için bizimle görüşün.",
      },
      {
        kind: "features",
        id: "cros-teknoloji",
        heading: "CROS Infinio'nun özellikleri",
        items: [
          { title: "ERA çipi", text: "Phonak, CROS Infinio'daki ERA çipini yeni bir işlemci seviyesi ve evrensel bağlantı ile tanıtır." },
          { title: "Eller serbest arama", text: "Audéo R Infinio ile eşleştiğinde evrensel Bluetooth bağlantısı ve eller serbest arama kullanılabilir." },
          { title: "Roger", text: "Phonak, CROS Infinio için 25 metreye kadar Roger menzili belirtir; CROS Lumity'de RogerDirect CROS sistemine dahildir." },
        ],
      },
      {
        kind: "audience",
        id: "cros-kimler-icin",
        heading: "CROS kimler için değerlendirilir?",
        items: [
          { title: "Tek kulağı desteklenemeyenler", text: "Bir kulaktaki işitme kaybı işitme cihazıyla desteklenemeyecek düzeydeyse CROS değerlendirilebilir." },
          { title: "Sesin yönünü kaçıranlar", text: "Desteklenemeyen taraftan konuşulduğunda duymakta zorlananlar; CROS o taraftaki sesi iyi duyan kulağa taşır." },
          { title: "Uyumlu cihaz kullananlar", text: "Hâlihazırda uyumlu bir Audéo, Naída L-PR veya Sky L-PR kullananlar CROS'u bu cihazla birlikte değerlendirebilir." },
        ],
      },
      {
        kind: "compare",
        id: "cros-fark",
        heading: "CROS'un diğer Phonak aileleriyle ilişkisi",
        rows: [
          { slug: "audeo", text: "CROS Infinio, Audéo R Infinio ile; CROS Lumity, Audéo L-R ve L-RT ile eşleşir." },
          { slug: "naida", text: "CROS Lumity, Naída L-PR ile birlikte kullanılabilir." },
          { slug: "sky", text: "CROS Lumity, çocuklar için Sky L-PR ile birlikte kullanılabilir." },
        ],
      },
      {
        kind: "proscons",
        id: "cros-degerlendirme",
        heading: "Avantajlar ve dikkat edilmesi gerekenler",
        pros: [
          "Desteklenemeyen taraftaki ses iyi duyan kulağa taşınır.",
          "Güncel CROS modelleri tamamen şarj edilebilir.",
          "Uyumlu cihazla birlikte evrensel Bluetooth ve eller serbest arama (CROS Infinio + Audéo R Infinio).",
        ],
        cons: [
          "CROS tek başına çalışmaz; uyumlu bir Phonak işitme cihazı gerekir.",
          "Her CROS nesli yalnızca belirli cihazlarla eşleşir.",
          "İki kulağa da cihaz takılır; iki cihazın da şarj edilmesi gerekir.",
          "Uygunluk işitme testi ve değerlendirmeyle belirlenir.",
        ],
      },
      {
        kind: "center",
        id: "cros-merkezde",
        heading: "Tek taraflı işitme kaybında merkezimizde",
        items: [
          CENTER_TEST,
          { title: "Tek taraflı işitme kaybı", text: "Tek taraflı kaybın günlük yaşamdaki etkilerini ve çözüm seçeneklerini ayrı bir sayfada anlatıyoruz.", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/", linkLabel: "Tek taraflı işitme kaybı" },
          CENTER_DEMO,
          CENTER_TRIAL,
        ],
      },
    ],
    faq: [
      {
        question: "Phonak CROS nedir?",
        answer:
          "Phonak CROS, tek kulakta işitme cihazıyla desteklenemeyen işitme kaybı için geliştirilmiş bir sistemdir. Desteklenemeyen kulağa takılan CROS cihazı sesleri alır ve kablosuz olarak öbür kulaktaki uyumlu Phonak işitme cihazına iletir.",
      },
      {
        question: "Phonak CROS tek başına kullanılabilir mi?",
        answer: "Hayır. Phonak'a göre CROS her zaman uyumlu bir Phonak işitme cihazıyla birlikte kullanılır.",
      },
      {
        question: "CROS Infinio hangi cihazla çalışır?",
        answer:
          "Phonak'a göre CROS Infinio, Audéo R Infinio ile uyumludur. CROS Lumity ise Audéo L-R, Audéo L-RT, Naída L-PR ve Sky L-PR ile eşleşir.",
      },
      {
        question: "Phonak CROS şarjlı mı?",
        answer:
          "Evet. CROS Infinio ve CROS Lumity tamamen şarj edilebilir. Phonak, CROS Infinio için 16 saatten fazla kullanım belirtir; süre kullanım biçimine göre değişir.",
      },
      {
        question: "CROS ile telefon görüşmesi yapılabilir mi?",
        answer:
          "Phonak'a göre CROS Infinio, Audéo R Infinio ile eşleştiğinde evrensel Bluetooth bağlantısı ve eller serbest arama kullanılabilir.",
      },
    ],
    related: ["audeo", "naida", "sky"],
    sources: [
      src(SOURCES.crosInfinio, "Audéo R Infinio uyumu, şarj, ERA çipi ve Roger"),
      src(SOURCES.crosLumity, "çalışma şekli ve uyumlu Audéo, Naída ve Sky modelleri"),
      src(SOURCES.hubInt, "CROS EON R ve Audéo EON R eşleşmesi"),
    ],
  },
];

export const FAMILY_BY_SLUG: Record<FamilySlug, PhonakFamily> = Object.fromEntries(
  PHONAK_FAMILIES.map((f) => [f.slug, f]),
) as Record<FamilySlug, PhonakFamily>;

export const familyHref = (slug: FamilySlug) => `/markalar/phonak/${slug}/`;

// ---------------------------------------------------------------------------------------------------------------
// Marka sayfası

export const PHONAK_BRAND = {
  meta: {
    title: "Phonak İşitme Cihazları ve Model Aileleri | Darıca, Kocaeli",
    description:
      "Phonak Audéo, Naída, Sky, Bolero, Virto ve CROS ailelerini karşılaştırın: cihaz türü, şarj ve bağlantı. Darıca'daki merkezimizde ücretsiz işitme testi.",
  },
  hero: {
    eyebrow: "Phonak · Marka ve model aileleri",
    title: "Phonak İşitme Cihazları",
    lead:
      "Phonak; kanal içi hoparlörlü (RIC), kulak arkası (BTE) ve kişiye özel kulak içi (ITE) işitme cihazları ile tek taraflı işitme kaybı için CROS sistemi sunan bir işitme cihazı markasıdır. Bu sayfada Phonak'ın altı ailesini, farklarını ve hangisinin kime göre değerlendirildiğini bulabilirsiniz.",
    points: ["Satışını yaptığımız 18 markadan biri", "Phonak cihazlara teknik servis", "Darıca'da SGK anlaşmalı merkez"],
  },
  intro: {
    heading: "Phonak'ı kısaca tanıyın",
    paragraphs: [
      "Phonak, ürünlerini İsviçre mühendisliği (“Swiss engineered”) vurgusuyla tanıtan bir işitme cihazı markasıdır. Ürün yelpazesi tek bir cihaz tipiyle sınırlı değildir: yetişkinler için RIC ve BTE aileleri, çocuklar için ayrı bir BTE ailesi, kişiye özel kulak içi cihazlar ve tek taraflı işitme kaybı için CROS sistemi bulunur.",
      "Phonak'ın Türkiye sitesinde Kasım 2026 itibarıyla güncel nesil olarak Audéo Infinio, Virto Infinio ve CROS Infinio ile Naída Lumity ve Sky Lumity listelenir. Bolero Marvel ise önceki modeller arasında yer alır.",
    ],
  },
  families: {
    heading: "Phonak model aileleri",
    intro:
      "Altı aile, altı farklı ihtiyaç başlığı demektir. Kartlardaki bilgiler Phonak'ın resmî ürün sayfalarına dayanır; hangisinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
  },
  types: {
    heading: "Cihaz türleri: hangi aile ne demek?",
    intro: "Phonak ailelerini ayıran ilk şey cihazın kulağa nasıl yerleştiğidir. Aşağıdaki tanımlar, ailelerin hangi gruba girdiğini gösterir.",
    items: [
      { term: "RIC — kanal içi hoparlörlü", text: "Gövde kulak arkasında, hoparlör ince bir kabloyla kulak kanalındadır.", slug: "audeo" as FamilySlug },
      { term: "BTE — kulak arkası", text: "Mikrofon, işlemci ve hoparlör kulak arkasındaki tek gövdededir; ses kanca ve kalıpla kanala ulaşır.", slug: "bolero" as FamilySlug },
      { term: "Güçlü BTE", text: "İleri ve çok ileri derece kayıplara kadar uzanan güç seviyeleri sunan kulak arkası cihaz.", slug: "naida" as FamilySlug },
      { term: "Pediatrik BTE", text: "Çocukların günlük yaşamı ve okul ortamı için dayanıklılık ve renk seçenekleriyle tasarlanmış kulak arkası cihaz.", slug: "sky" as FamilySlug },
      { term: "ITE — kişiye özel kulak içi", text: "Kulak arkasında gövde yoktur; cihaz kulak kanalının ölçüsüne göre özel üretilir.", slug: "virto" as FamilySlug },
      { term: "CROS — ses aktarımı", text: "Desteklenemeyen kulaktaki sesi iyi duyan kulaktaki uyumlu cihaza aktaran sistem; tek başına işitme cihazı değildir.", slug: "cros" as FamilySlug },
    ],
  },
  compare: {
    heading: "Phonak ailelerini yan yana karşılaştırın",
    intro: "Tablodaki bilgiler Phonak'ın Türkiye sitesinden alınmıştır (Kasım 2026). Pil süresi gibi kullanıma bağlı bilgiler ilgili aile sayfasında koşullarıyla birlikte yer alır.",
    columns: ["Aile", "Cihaz türü", "Nesil (Phonak Türkiye)", "Güç", "Kimler için"],
    rows: [
      { slug: "audeo" as FamilySlug, cells: ["RIC", "Audéo Infinio (güncel)", "Şarjlı", "Hafif ila çok ileri kayıp; geniş yetişkin kullanıcı grubu"] },
      { slug: "naida" as FamilySlug, cells: ["Güçlü BTE", "Naída Lumity (güncel)", "L-PR, L-UP şarjlı", "İleri ve çok ileri kayıplara kadar; dört güç seviyesi"] },
      { slug: "sky" as FamilySlug, cells: ["Pediatrik BTE", "Sky Lumity (güncel)", "L-PR şarjlı; diğerleri pilli", "Çocuklar; okulda Roger ile kullanım"] },
      { slug: "bolero" as FamilySlug, cells: ["BTE", "Bolero Marvel (önceki model)", "M-PR şarjlı; M-M 312 pil", "Mevcut Bolero kullanıcıları; servis ve pil"] },
      { slug: "virto" as FamilySlug, cells: ["Kişiye özel ITE", "Virto Infinio (güncel)", "R Infinio şarjlı; I-10 NW O pilli", "Kulak arkasında cihaz istemeyenler"] },
      { slug: "cros" as FamilySlug, cells: ["Ses aktarım sistemi", "CROS Infinio (güncel)", "Şarjlı", "Tek kulağı desteklenemeyenler; uyumlu cihazla"] },
    ],
  },
  selection: {
    heading: "Doğru Phonak ailesi nasıl seçilir?",
    intro: "Merkezimizde marka ya da aile adı tek başına ilk kriter değildir. Seçim şu sırayla yapılır:",
    steps: [
      { title: "İşitme kaybının derecesi ve kulak yapısı", text: "İşitme testi kaybın derecesini, muayene kulak kanalınızın yapısını gösterir. RIC, BTE veya kulak içi seçeneklerden hangilerinin uygun olduğu burada belirlenir." },
      { title: "Kullanım kolaylığı ve yaşam tarzı", text: "Telefon kullanımı, çalışma ortamı, şarj ya da pil tercihi ve el becerisi gibi konular değerlendirilir." },
      { title: "Estetik tercih", text: "Kulak arkasında görünür bir gövde ya da tamamen kanal içinde bir cihaz tercihi konuşulur." },
      { title: "Teknoloji seviyesi ve deneme", text: "Uygun aile ve model belirlendikten sonra teknoloji seviyesi seçilir; cihaz merkezde demo ile denenir." },
    ],
  },
  ecosystem: {
    heading: "Bağlantı ve uygulamalar",
    intro: "Phonak'ın güncel ailelerinde bağlantı özellikleri ortak bir yapı üzerine kuruludur; hangi özelliğin hangi modelde bulunduğu aile sayfalarında ayrıca yazılıdır.",
    items: [
      { title: "Evrensel Bluetooth bağlantısı", text: "Audéo Infinio, Virto R Infinio, Naída Lumity ve Sky Lumity için Phonak evrensel bağlantıyı belirtir: Bluetooth'lu telefon ve diğer cihazlarla doğrudan eşleşme." },
      { title: "myPhonak ve myPhonak Junior", text: "Yetişkinler için myPhonak, çocuklar için myPhonak Junior uygulaması; ses programı, ses seviyesi ve cihaz durumunu telefondan takip etmeyi sağlar." },
      { title: "Roger", text: "Roger mikrofonları uzaktaki konuşmacının sesini doğrudan uyumlu Phonak cihazına iletir; sınıf, toplantı ve kalabalık ortamlar için kullanılır." },
    ],
  },
  local: {
    heading: "Phonak için Darıca'daki merkezimiz",
    paragraphs: [
      "Avrasya İşitme Cihazları'nın tek fiziksel merkezi Darıca'dadır. Gebze, Çayırova ve Kocaeli'nin diğer ilçelerinden gelen ziyaretçilerimize de bu merkezde hizmet veriyoruz; bu ilçelerde şubemiz yoktur.",
      "Phonak cihazlar için işitme testi, demo, uygulama, ayar ve teknik servis aynı merkezde yapılır. Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar.",
    ],
    services: [CENTER_TEST, CENTER_DEMO, CENTER_TRIAL, CENTER_SERVICE] as CenterItem[],
    home: CENTER_HOME,
    regions: [
      { label: "Darıca", href: "/darica-isitme-cihazlari/" },
      { label: "Gebze", href: "/gebze-isitme-cihazlari/" },
      { label: "Çayırova", href: "/cayirova-isitme-cihazlari/" },
      { label: "Kocaeli", href: "/kocaeli-isitme-cihazlari/" },
    ],
  },
  faq: [
    {
      question: "Phonak'ın hangi işitme cihazı aileleri var?",
      answer:
        "Bu sayfada Phonak'ın altı ailesini anlatıyoruz: kanal içi hoparlörlü (RIC) Audéo, güçlü kulak arkası Naída, çocuklar için Sky, önceki nesil kulak arkası Bolero, kişiye özel kulak içi Virto ve tek taraflı işitme kaybı için CROS.",
    },
    {
      question: "Phonak'ın en yeni işitme cihazı hangisi?",
      answer:
        "Phonak'ın Türkiye sitesinde Kasım 2026 itibarıyla Audéo, Virto ve CROS için Infinio nesli, Naída ve Sky için Lumity nesli güncel olarak listelenir. Phonak'ın uluslararası sitesinde ayrıca Audéo EON adlı daha yeni bir nesil yer alıyor; Türkiye'de bulunabilirliği için bizimle görüşün.",
    },
    {
      question: "Phonak işitme cihazları şarjlı mı?",
      answer:
        "Güncel Audéo modelleri, Virto R Infinio ve CROS modelleri şarjlıdır. Naída ve Sky Lumity'de şarjlı modeller (ör. L-PR) ile pilli modeller birlikte bulunur. Bolero Marvel'de M-PR şarjlı, M-M ise 312 numara pillidir.",
    },
    {
      question: "Phonak cihazlar iPhone ve Android ile çalışır mı?",
      answer:
        "Phonak, güncel ailelerinde evrensel Bluetooth bağlantısını belirtir: cihazlar Bluetooth'lu telefonlarla doğrudan eşleşir. myPhonak uygulaması App Store ve Google Play'de bulunur. Hangi modelde hangi bağlantı özelliğinin olduğu aile sayfalarında yazılıdır.",
    },
    {
      question: "Phonak işitme cihazı fiyatını ne belirler?",
      answer:
        "Fiyatı; seçilen aile ve model, teknoloji seviyesi, şarjlı ya da pilli olması ve kulak içi cihazlarda kişiye özel üretim gibi tercihler belirler. Net bilgi işitme değerlendirmesinden sonra verilir; SGK desteği cihaz markasına göre değil, kullanıcının raporu ve uygunluk kriterlerine göre değerlendirilir.",
    },
    {
      question: "Gebze veya Çayırova'da Phonak için şubeniz var mı?",
      answer:
        "Hayır. Tek fiziksel merkezimiz Darıca'dadır ve Gebze, Çayırova ile Kocaeli'nin diğer ilçelerinden gelen ziyaretçilerimize bu merkezde hizmet veriyoruz. Evde hizmetimiz Kocaeli'nin tamamını kapsar.",
    },
  ],
  related: [
    { label: "Ücretsiz İşitme Testi", description: "Phonak ailesi seçmeden önce ilk adım.", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Kulak Arkası (BTE) Cihazlar", description: "Naída, Sky ve Bolero'nun ait olduğu cihaz türü.", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
    { label: "Kulak İçi (ITE) Cihazlar", description: "Virto'nun ait olduğu cihaz türü.", href: "/isitme-cihazlari/kulak-ici-ite/" },
    { label: "Tek Taraflı İşitme Kaybı", description: "CROS sistemlerinin değerlendirildiği durum.", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/" },
    { label: "SGK İşitme Cihazı Ödemesi", description: "SGK desteği ve katkı payı.", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Markalar ve Modeller Rehberi", description: "Phonak'ı diğer markalarla karşılaştırın.", href: "/isitme-cihazi-markalari/" },
  ],
  sourceGroups: [
    {
      title: "Genel",
      items: [
        src(SOURCES.hubTr, "güncel ve önceki Phonak modelleri"),
        src(SOURCES.hubInt, "uluslararası ürün listesi ve Audéo EON nesli"),
      ],
    },
    {
      title: "Model aileleri",
      items: [
        src(SOURCES.audeoInfinio, "Audéo ailesi"),
        src(SOURCES.naida, "Naída ailesi"),
        src(SOURCES.sky, "Sky ailesi"),
        src(SOURCES.bolero, "Bolero ailesi"),
        src(SOURCES.virto, "Virto ailesi"),
        src(SOURCES.crosInfinio, "CROS ailesi"),
      ],
    },
  ],
};
