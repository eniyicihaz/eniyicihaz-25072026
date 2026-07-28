// M5 (Product Showcase) content for the Oticon brand page
// (/markalar/oticon), directly under Heritage (M4). Independent of the
// /markalar hub page's M1...M8 modules — its own data namespace, only ever
// holding this one brand's content.
//
// All 12 names are real Oticon product families, each paired with its own
// real product photo (transparent background, /images/oticon/models/) —
// never a substitute image or a generic logo. Order: newest/most relevant
// first (Intent, Real, Own SI), more specialized or older lines after.
// Category/description for Jet PX, Opn S, Opn Play and Zircon stay
// deliberately generic — their exact clinical positioning isn't something
// this project has verified with confidence, unlike Play/Play PX (pediatric)
// or Xceed (severe-to-profound loss), which are well-established.

export interface OticonProduct {
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

export interface OticonModelsContent {
  badge: string;
  heading: string;
  intro: string;
  ctaLabel: string;
  items: OticonProduct[];
}

export const oticonModels: OticonModelsContent = {
  badge: "OTICON MODELLERİ",
  heading: "Oticon Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Oticon modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "intent",
      category: "Güncel Seri",
      name: "Oticon Intent",
      description: "Oticon'un en güncel teknoloji yaklaşımını taşıyan amiral gemisi modeli.",
      tags: ["BrainHearing", "AI", "Bluetooth", "Şarjlı"],
      image: "/images/oticon/models/intent.webp",
    },
    {
      slug: "real",
      category: "Ürün Ailesi",
      name: "Oticon Real",
      description: "Geniş kullanıcı kitlesi için tasarlanmış, dengeli bir genel kullanım modeli.",
      tags: ["BrainHearing", "Bluetooth", "Şarjlı"],
      image: "/images/oticon/models/real.webp",
    },
    {
      slug: "own-si",
      category: "Kulak İçi",
      name: "Oticon Own SI",
      description: "Kulak içi kullanım tercih edenler için kişiye özel, konforlu bir çözüm.",
      tags: ["Kulak İçi", "BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/own-si.webp",
    },
    {
      slug: "zeal",
      category: "Genel Kullanım",
      name: "Oticon Zeal",
      description: "Günlük kullanım için pratik ve dengeli bir alternatif model.",
      tags: ["BrainHearing", "Bluetooth", "Şarjlı"],
      image: "/images/oticon/models/zeal.webp",
    },
    {
      slug: "opn-s",
      category: "Klasik Seri",
      name: "Oticon Opn S",
      description: "Oticon'un önceki nesil teknolojisini taşıyan, kanıtlanmış bir modeldir.",
      tags: ["BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/opn-s.webp",
    },
    {
      slug: "ruby",
      category: "Ekonomik Seri",
      name: "Oticon Ruby",
      description: "Temel işitme ihtiyaçları için daha uygun fiyatlı bir seçenek sunar.",
      tags: ["BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/ruby.webp",
    },
    {
      slug: "xceed",
      category: "Güçlü Kayıplar",
      name: "Oticon Xceed",
      description: "İleri derece işitme kayıplarına yönelik güçlendirilmiş bir modeldir.",
      tags: ["Güçlü Kayıplar", "BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/xceed.webp",
    },
    {
      slug: "xceed-play",
      category: "Çocuk · Güçlü Kayıplar",
      name: "Oticon Xceed Play",
      description: "İleri derece işitme kaybı yaşayan çocuklar için özel olarak tasarlanmıştır.",
      tags: ["Çocuk", "Güçlü Kayıplar", "BrainHearing"],
      image: "/images/oticon/models/xceed-play.webp",
    },
    {
      slug: "play-px",
      category: "Çocuk",
      name: "Oticon Play PX",
      description: "Çocukların günlük işitme ihtiyaçlarına yönelik geliştirilmiş bir modeldir.",
      tags: ["Çocuk", "BrainHearing", "Şarjlı"],
      image: "/images/oticon/models/play-px.webp",
    },
    {
      slug: "opn-play",
      category: "Çocuk",
      name: "Oticon Opn Play",
      description: "Oticon'un önceki nesil çocuk modellerinden biridir.",
      tags: ["Çocuk", "BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/opn-play.webp",
    },
    {
      slug: "jet-px",
      category: "Şarjlı Seri",
      name: "Oticon Jet PX",
      description: "Hızlı şarj imkânı sunan, günlük kullanım için pratik bir modeldir.",
      tags: ["Şarjlı", "BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/jet-px.webp",
    },
    {
      slug: "zircon",
      category: "Ürün Ailesi",
      name: "Oticon Zircon",
      description: "Oticon'un genel kullanım ürün ailesinden bir diğer modelidir.",
      tags: ["BrainHearing", "Bluetooth"],
      image: "/images/oticon/models/zircon.webp",
    },
  ],
};
