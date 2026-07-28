// Price-factors guide for the Oticon brand page (/markalar/oticon),
// replacing the old five-paragraph "Oticon İşitme Cihazı Fiyatlarını
// Neler Belirler?" text block. Independent of the /markalar hub page's
// M1...M8 modules — its own data namespace.
//
// This section never states or implies an actual price (COMPANY.md:
// prices are never published) — it only names the real factors that
// make Oticon pricing vary model to model, all of which are the same
// facts already established elsewhere on this page (technology tiers,
// Bluetooth, rechargeable vs. battery, custom in-ear builds, power
// models, pediatric models).

export interface OticonPriceFactor {
  title: string;
  description: string;
  icon: "brain" | "bluetooth" | "battery-charging" | "ear" | "target" | "baby";
}

export interface OticonPriceFactorsContent {
  badge: string;
  heading: string;
  intro: string;
  factors: OticonPriceFactor[];
  calloutTitle: string;
  calloutText: string;
  ctaText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const oticonPriceFactors: OticonPriceFactorsContent = {
  badge: "FİYATI ETKİLEYEN FAKTÖRLER",
  heading: "Oticon Fiyatlarını Neler Belirler?",
  intro:
    "Oticon işitme cihazı fiyatları modelden modele değişir. Bu farkı yaratan başlıca etkenler:",
  factors: [
    {
      title: "Teknoloji Seviyesi",
      description: "Aynı serinin farklı teknoloji kademeleri (ör. Intent 1-4) fiyatı etkiler.",
      icon: "brain",
    },
    {
      title: "Bluetooth Özellikleri",
      description: "Kablosuz bağlantı ve akıllı telefon entegrasyonu olan modeller daha üst seviyededir.",
      icon: "bluetooth",
    },
    {
      title: "Şarjlı / Pilli",
      description: "Lityum-iyon şarjlı modeller, pilli modellere göre farklı bir fiyat seviyesindedir.",
      icon: "battery-charging",
    },
    {
      title: "Kulak İçi Tasarım",
      description: "Kişiye özel üretilen kulak içi modeller, standart kulak arkası modellerden ayrılır.",
      icon: "ear",
    },
    {
      title: "İşitme Kaybı Seviyesi",
      description: "İleri ve çok ileri derece kayıplar için güçlendirilmiş Power modeller farklılaşır.",
      icon: "target",
    },
    {
      title: "Pediatrik Özellikler",
      description: "Çocuk kullanıcılara özel geliştirilen modeller, ek özellikler barındırır.",
      icon: "baby",
    },
  ],
  calloutTitle: "Doğru fiyat değil, doğru cihaz önemlidir.",
  calloutText:
    "İşitme cihazı seçiminde yalnızca fiyat değil; işitme kaybının derecesi, yaşam tarzı ve günlük ihtiyaçlar da değerlendirilmelidir.",
  ctaText: "Size uygun Oticon modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: "https://wa.me/905337733199" },
};
