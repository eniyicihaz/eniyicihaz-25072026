// Çayırova landing page — kısa, kart/istatistik gerektirmeyen metin
// blokları. Darıca/Gebze sayfalarının page-scoped "copy block" deseni
// burada da kullanılıyor — yeni bir shared component icat edilmedi.
export interface CayirovaCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

// `cayirovaIntro`: Darıca/Gebze'nin "doğru başlangıç" bölümlerinden farklı
// bir açılış açısı kullanıyor — soyut bir "cihaz seçimi" çerçevesi yerine,
// somut belirtilerle (TV sesi, kalabalık ortam) başlıyor. Darıca burada da
// HİÇ geçmiyor.
export const cayirovaIntro: CayirovaCopyBlock = {
  badge: "İLK ADIM",
  heading: "Çayırova'dan İşitme Cihazına Doğru Adım",
  paragraphs: [
    "İşitme kaybı genellikle yavaş ilerler; televizyonun sesini giderek açmak ya da kalabalık ortamlarda konuşmaları takip etmekte zorlanmak sık karşılaşılan ilk işaretlerdendir.",
    "Çayırova'dan bize ulaşan danışanlarımız için de ilk adım aynıdır: doğru bir işitme değerlendirmesi ve ihtiyaca göre belirlenen bir cihaz seçimi.",
    "2009'dan beri SGK anlaşmalı, odyolog ve odyometristlerden oluşan bir ekiple bu süreçte yanınızda oluyoruz.",
  ],
};

// Yeni bölüm: "İşitme Cihazı Seçerken Nelere Dikkat Etmeli?" — Gebze
// sayfasının karar-faktörleri bölümünden farklı bir vurgu kullanıyor
// (kayıp derecesi/yaşam ortamı/deneme önemi), fiyatı sabit rakamla değil
// gerçekçi bir açıklamayla ele alıyor.
export const cayirovaDecisionFactors: CayirovaCopyBlock = {
  badge: "DOĞRU SEÇİM",
  heading: "İşitme Cihazı Seçerken Nelere Dikkat Etmeli?",
  paragraphs: [
    "En gelişmiş özelliklere sahip cihaz, her zaman sizin için en doğru seçim olmayabilir — belirleyici olan işitme kaybınızın derecesi, günlük yaşam ortamınız ve beklentilerinizdir.",
    "Fiyat; teknoloji seviyesi, özellikler ve markaya göre değişir. Sabit bir rakam yerine, ihtiyacınıza göre gerçekçi seçenekleri birlikte karşılaştırmanızı öneririz.",
    "Merkezdeki ücretsiz demo ve cihazı satın alarak 7 güne kadar deneme imkânı, günlük kullanımda memnun kalıp kalmayacağınızı görmenizi sağlar; uygun bulunmazsa ödediğiniz tutar kesintisiz iade edilir.",
  ],
};
