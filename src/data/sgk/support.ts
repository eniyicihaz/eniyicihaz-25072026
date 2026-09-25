// Content for the SGK pillar page's support section — not a generic
// "Hizmetlerimiz" list, but a walkthrough of how we support visitors at
// every stage of the SGK process. Own namespace, independent of the rest
// of sgk/*.
//
// relatedLinks all point to real, existing pages now (cihaz seçim
// rehberi, işitme cihazı markaları, teknik servis, ücretsiz işitme testi).

export interface SgkSupportCard {
  title: string;
  text: string;
}

export interface SgkSupportLink {
  label: string;
  href: string;
}

export interface SgkSupportContent {
  badge: string;
  heading: string;
  intro: string;
  cards: SgkSupportCard[];
  trustItems: string[];
  relatedLabel: string;
  relatedLinks: SgkSupportLink[];
  cta: { heading: string; subtext: string; primaryLabel: string; secondaryLabel: string };
}

export const sgkSupport: SgkSupportContent = {
  badge: "Her Adımda Yanınızdayız",
  heading: "SGK Sürecinde Size Nasıl Destek Oluyoruz?",
  intro:
    "SGK başvurusundan cihaz kullanımına kadar bu süreci tek başınıza yürütmenize gerek yok. Her aşamada sunduğumuz destek aşağıda özetlenmiştir.",
  cards: [
    {
      title: "Uzman Danışmanlık",
      text: "İşitme kaybınıza ve SGK şartlarınıza uygun yönlendirme sağlıyoruz.",
    },
    {
      title: "Evrak Kontrolü",
      text: "Başvuru için gerekli belgelerin eksiksiz hazırlanmasına destek oluyoruz.",
    },
    {
      title: "Cihaz Seçim Desteği",
      text: "İşitme kaybınıza en uygun işitme cihazının belirlenmesine yardımcı oluyoruz.",
    },
    {
      title: "Kişiye Özel Ayarlama",
      text: "Cihaz teslimi sonrası profesyonel ayarlama ve uygulama sağlıyoruz.",
    },
    {
      title: "Teknik Servis",
      text: "Bakım, kontrol ve teknik servis desteği sunuyoruz.",
    },
    {
      title: "Satış Sonrası Destek",
      text: "Cihaz kullanım sürecinizde her zaman yanınızdayız.",
    },
  ],
  trustItems: [
    "SGK Anlaşmalı Merkez",
    "Ücretsiz İşitme Testi",
    "Kişiye Özel Uygulama",
    "Satış Sonrası Destek",
  ],
  relatedLabel: "Bu konuyla ilgili devamı",
  relatedLinks: [
    { label: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
    { label: "İşitme Cihazı Markaları", href: "/markalar" },
    { label: "Teknik Servis", href: "/servis-bakim/teknik-servis" },
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
  ],
  cta: {
    heading: "SGK süreciniz hakkında ücretsiz destek almak ister misiniz?",
    subtext: "Uzman ekibimiz süreç boyunca size yardımcı olmaya hazır.",
    primaryLabel: "Hemen Ara",
    secondaryLabel: "WhatsApp'tan Yaz",
  },
};
