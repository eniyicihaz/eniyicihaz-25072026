// "Oticon mu Phonak mı?" brand comparison for the Oticon brand page
// (/markalar/oticon), directly under Why Oticon and before the Video
// Guide. Independent of the /markalar hub page's M1...M8 modules — its
// own data namespace.
//
// Deliberately impartial (per the brief: "taraf tutmadan karşılaştır") —
// every fact here condenses the same real, already public statements
// from the old reference page. Nothing new or specific is invented
// about Phonak (no model names, no numbers) since those aren't
// established facts on this site; Oticon's side reuses real model names
// already used elsewhere on this page (Own SI, Play PX, Opn Play, Xceed
// Play). The Bluetooth topic is presented as a single neutral statement,
// not an artificial per-brand split, because the source material itself
// treats it as equal between the two brands — forcing a difference
// there would not be honest.

export interface VsPhonakApproachCard {
  brand: "oticon" | "phonak";
  name: string;
  logo: string;
  points: string[];
}

export interface VsPhonakTopicCard {
  title: string;
  // Either a single neutral statement (both brands equal) or a two-sided split.
  shared?: string;
  oticon?: string;
  phonak?: string;
}

export interface OticonVsPhonakContent {
  badge: string;
  heading: string;
  intro: string;
  approach: VsPhonakApproachCard[];
  topics: VsPhonakTopicCard[];
  calloutTitle: string;
  calloutText: string;
  ctaText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const oticonVsPhonak: OticonVsPhonakContent = {
  badge: "MARKA KARŞILAŞTIRMASI",
  heading: "Oticon mu Phonak mı?",
  intro:
    "Oticon ve Phonak, dünya genelinde en çok tercih edilen işitme cihazı markaları arasında yer alır. Her iki marka da farklı kullanıcı ihtiyaçlarına yönelik kendi teknoloji yaklaşımını geliştirir.",
  approach: [
    {
      brand: "oticon",
      name: "Oticon",
      logo: "/images/brands/oticon-logo-seffaf.webp",
      points: [
        "BrainHearing® yaklaşımını temel alır",
        "Sesi yükseltmek yerine beynin sesi işlemesini destekler",
        "Çevresel sesleri koruyarak doğal dinleme hedefler",
      ],
    },
    {
      brand: "phonak",
      name: "Phonak",
      logo: "/images/brands/phonak-logo-seffaf.webp",
      points: [
        "Konuşma anlaşılırlığını artırmaya odaklanan ses işleme kullanır",
        "Evrensel Bluetooth bağlantı seçenekleri sunar",
        "Geniş bir aksesuar ekosistemine sahiptir",
      ],
    },
  ],
  topics: [
    {
      title: "Bluetooth Özellikleri",
      shared:
        "Her iki marka da akıllı telefon bağlantıları sunar. Bağlantı seçenekleri model ve platforma göre değişebilir.",
    },
    {
      title: "Kulak İçi Modeller",
      oticon: "Own SI ailesi öne çıkar",
      phonak: "Kişiye özel kulak içi çözümler sunar",
    },
    {
      title: "Pediatrik Modeller",
      oticon: "Play PX, Opn Play ve Xceed Play serileri mevcuttur",
      phonak: "Pediatrik kullanım için özel ürün aileleri bulunmaktadır",
    },
  ],
  calloutTitle: "Hangisi Daha İyi?",
  calloutText:
    "Daha iyi marka yoktur. Doğru kullanıcı için doğru cihaz vardır. İşitme kaybının derecesi, yaşam tarzı, beklentiler ve kulak yapısı değerlendirilerek seçim yapılmalıdır.",
  ctaText: "Size uygun markayı ve modeli birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: "https://wa.me/905337733199" },
};
