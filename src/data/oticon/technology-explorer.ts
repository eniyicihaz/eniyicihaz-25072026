// Technology Explorer for the Oticon brand page (/markalar/oticon).
// Replaces six separate long-paragraph "technology detail" sections
// (BrainHearing®, Deep Neural Network, OpenSound Navigator, 4D Sensor
// Technology, Bluetooth, Oticon Companion) with a single deep-dive hub.
// Independent of the short M3 teaser grid (technologies.ts) — that
// component stays untouched; this is a separate, more detailed section.
//
// Every fact below condenses the same real, already-established Oticon
// technology facts used elsewhere on this page (BrainHearing®, 4D
// Sensor, DNN, Oticon Companion appear already in video-guide.ts) —
// nothing new is claimed, only restructured into short blocks instead
// of paragraphs. No invented specs or performance numbers.

export interface OticonTechExplorerItem {
  id: string;
  icon: "brain" | "dna" | "globe" | "radar" | "bluetooth" | "smartphone";
  navLabel: string;
  title: string;
  lead: string;
  howItWorks: string;
  advantages: string[];
  models: string[];
  expertNote: string;
}

export interface OticonTechExplorerContent {
  badge: string;
  heading: string;
  intro: string;
  items: OticonTechExplorerItem[];
}

export const oticonTechExplorer: OticonTechExplorerContent = {
  badge: "TEKNOLOJİ REHBERİ",
  heading: "Oticon İşitme Cihazlarında Kullanılan Teknolojiler",
  intro: "Her teknolojiyi seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "brainhearing",
      icon: "brain",
      navLabel: "BrainHearing®",
      title: "BrainHearing® Teknolojisi Nedir?",
      lead: "Sesi yalnızca yükseltmek yerine, beynin sesleri daha doğal işlemesini destekleyen Oticon yaklaşımı.",
      howItWorks:
        "Geleneksel sistemler belirli sesleri bastırırken, BrainHearing çevredeki ses ortamını mümkün olduğunca korumaya ve beynin sesleri ayırt etmesine yardımcı olmaya çalışır.",
      advantages: [
        "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırır",
        "Dinleme yorgunluğunu azaltabilir",
        "Çevresel farkındalığın korunmasına yardımcı olur",
        "Daha doğal bir dinleme deneyimi hedefler",
      ],
      models: ["Intent", "Real", "Own SI", "Zeal"],
      expertNote: "BrainHearing®, Oticon'un neredeyse tüm modern platformlarının temelini oluşturan marka felsefesidir.",
    },
    {
      id: "deep-neural-network",
      icon: "dna",
      navLabel: "Deep Neural Network",
      title: "Deep Neural Network Teknolojisi",
      lead: "Milyonlarca gerçek yaşam sesinden öğrenmiş yapay zeka tabanlı ses işleme sistemi.",
      howItWorks:
        "Önceden belirlenmiş kurallara bağlı kalmak yerine, çok büyük miktarda ses verisinden öğrenme prensibiyle çalışır ve farklı akustik ortamları tanımaya çalışır.",
      advantages: [
        "Konuşmaları çevresel gürültülerden ayırt etmeye yardımcı olur",
        "Farklı akustik ortamları tanıyabilir",
        "Kalabalık ortamlarda daha dengeli bir dinleme deneyimi hedefler",
      ],
      models: ["Intent", "Real"],
      expertNote: "Yapay zeka destekli ses işleme, işitme cihazı teknolojilerinin geleceğinde önemli bir yere sahiptir.",
    },
    {
      id: "opensound-navigator",
      icon: "globe",
      navLabel: "OpenSound Navigator",
      title: "OpenSound Navigator",
      lead: "Çevredeki sesleri sürekli analiz ederek konuşmaları korurken rahatsız edici gürültüleri azaltmayı amaçlayan teknoloji.",
      howItWorks:
        "Saniyede yüzlerce kez çevresel sesleri analiz ederek kullanıcının bulunduğu ortamı değerlendirir ve tek bir konuşmacıya değil, geniş ses ortamına odaklanır.",
      advantages: [
        "Konuşmaların daha anlaşılır hale gelmesine yardımcı olur",
        "Çevresel farkındalığın korunmasını hedefler",
        "Kalabalık sosyal ortamlarda konuşmayı takip etmeye yardımcı olur",
      ],
      models: ["Opn S", "Real", "Intent"],
      expertNote: "OpenSound Navigator, Oticon'un en önemli teknolojilerinden biri olarak kabul edilir.",
    },
    {
      id: "4d-sensor",
      icon: "radar",
      navLabel: "4D Sensor Technology",
      title: "4D Sensor Technology",
      lead: "Kullanıcının baş ve vücut hareketlerini değerlendirerek dinleme niyetini anlamaya yardımcı olan sensör teknolojisi.",
      howItWorks:
        "Baş hareketleri, vücut hareketleri, konuşma aktivitesi ve çevresel ses bilgilerini birlikte analiz ederek kullanıcının o anda neye odaklanmak istediğini anlamaya çalışır.",
      advantages: [
        "Dinleme niyetini anlayan bir sistem olarak çalışır",
        "Aktif yaşam tarzına sahip kullanıcılar için geliştirilmiştir",
        "Farklı ses ortamları arasında geçişte daha sezgisel bir deneyim hedefler",
      ],
      models: ["Intent 1", "Intent 2", "Intent 3", "Intent 4"],
      expertNote:
        "4D Sensor Technology, BrainHearing yaklaşımı ve Deep Neural Network ile birlikte çalışarak Oticon Intent serisini markanın en gelişmiş ürün ailelerinden biri haline getirir.",
    },
    {
      id: "bluetooth",
      icon: "bluetooth",
      navLabel: "Bluetooth",
      title: "Bluetooth ve Kablosuz Bağlantı",
      lead: "Birçok Oticon modeli telefon görüşmeleri, müzik dinleme, televizyon bağlantıları ve mobil uygulama kullanımını destekler.",
      howItWorks:
        "Gelişmiş Bluetooth teknolojileri sayesinde akıllı telefonlarla kablosuz bağlantı kurulur; gelen görüşmeler ve medya içerikleri doğrudan işitme cihazına aktarılabilir.",
      advantages: [
        "iPhone ve Android cihazlarla entegrasyon seçenekleri sunar",
        "Televizyon sesi doğrudan işitme cihazına aktarılabilir",
        "Telefonu kulağa götürmeden görüşme yapılabilir",
      ],
      models: ["Intent", "Real", "Own SI", "Zeal"],
      expertNote: "Kablosuz bağlantı özellikleri, özellikle aktif yaşam tarzına sahip kullanıcılar için günlük deneyimi kolaylaştırır.",
    },
    {
      id: "companion",
      icon: "smartphone",
      navLabel: "Oticon Companion",
      title: "Oticon Companion Uygulaması",
      lead: "İşitme cihazı kullanıcılarının cihazlarını akıllı telefon üzerinden yönetmelerine olanak sağlayan mobil uygulama.",
      howItWorks:
        "Uygulama üzerinden ses seviyesi, program değişiklikleri ve çeşitli kullanıcı ayarları yapılabilir; uyumlu modellerde pil durumu ve bağlantı bilgileri görüntülenebilir.",
      advantages: [
        "Farklı dinleme programları arasında hızlı geçiş sağlar",
        "Pil durumu ve bağlantı bilgilerini görüntüler",
        "Son bağlantı konumu gibi cihaz bulma özellikleri sunar",
      ],
      models: ["Intent", "Real", "Own SI", "Zeal"],
      expertNote: "Oticon Companion, markanın dijital ekosisteminin önemli bir parçası olarak günlük kullanımı daha pratik hale getirir.",
    },
  ],
};
