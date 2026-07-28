// FAQ hub for the Oticon brand page (/markalar/oticon) — the page's
// final section before the Footer. Independent of the /markalar hub
// page's own FAQ (brands/faq.ts, a different, brand-agnostic
// component) — this one is Oticon-specific.
//
// Every answer reuses real facts already established elsewhere on this
// page: heritage.ts (1904, Danimarka), models.ts (Intent/Real/Own
// SI/Zircon/Ruby descriptions, verbatim where possible), the technology
// explorer (Bluetooth), device-types.ts (rechargeable models),
// sgk-cta.ts (SGK eligibility criterion), and COMPANY.md's warranty
// statement ("Üretici garanti koşulları geçerlidir" — no specific year
// count is invented). No new technical claims.

export interface OticonFaqItem {
  question: string;
  answer: string;
}

export interface OticonFaqCategory {
  label: string;
  items: OticonFaqItem[];
}

export interface OticonFaqDecisionCard {
  title: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface OticonFaqContent {
  badge: string;
  heading: string;
  intro: string;
  decisionCard: OticonFaqDecisionCard;
  categories: OticonFaqCategory[];
}

export const oticonFaq: OticonFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Oticon Hakkında Merak Edilenler",
  intro: "Oticon modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: "/iletisim",
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Oticon hangi ülkenin markası?",
          answer: "Oticon, 1904 yılında kurulmuş Danimarka merkezli bir işitme cihazı üreticisidir.",
        },
        {
          question: "Oticon Intent nedir?",
          answer: "Oticon Intent, markanın en güncel teknoloji yaklaşımını taşıyan amiral gemisi modelidir.",
        },
        {
          question: "Oticon Real nedir?",
          answer: "Oticon Real, geniş kullanıcı kitlesi için tasarlanmış, dengeli bir genel kullanım modelidir.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Oticon Own SI nedir?",
          answer: "Oticon Own SI, kulak içi kullanım tercih edenler için kişiye özel, konforlu bir çözümdür.",
        },
        {
          question: "Oticon Zircon nedir?",
          answer: "Oticon Zircon, Oticon'un genel kullanım ürün ailesinden bir modelidir.",
        },
        {
          question: "Oticon Ruby nedir?",
          answer: "Oticon Ruby, temel işitme ihtiyaçları için daha uygun fiyatlı bir seçenek sunan bir Oticon serisidir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Oticon modellerinde Bluetooth var mı?",
          answer:
            "Evet. Oticon'un birçok modeli akıllı telefonlarla kablosuz bağlantı kurabilir, gelen görüşmeler ve medya içerikleri doğrudan işitme cihazına aktarılabilir.",
        },
        {
          question: "Telefon görüşmeleri işitme cihazına aktarılır mı?",
          answer:
            "Bluetooth destekli Oticon modellerinde telefon görüşmeleri doğrudan işitme cihazına aktarılabilir, telefonu kulağa götürmeye gerek kalmaz.",
        },
        {
          question: "Şarjlı Oticon modelleri var mı?",
          answer: "Evet. Intent, Real, Zeal ve Xceed gibi birçok Oticon modeli lityum-iyon şarjlı sistemle çalışır.",
        },
      ],
    },
    {
      label: "SGK",
      items: [
        {
          question: "SGK, Oticon işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Oticon kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Oticon işitme cihazlarında garanti süresi nedir?",
          answer: "Oticon işitme cihazlarında üretici garanti koşulları geçerlidir. Garanti kapsamı modele göre değişebilir.",
        },
      ],
    },
  ],
};
