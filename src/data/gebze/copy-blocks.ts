// Gebze landing page — kısa, kart/istatistik gerektirmeyen metin blokları.
// Darıca sayfasının page-scoped "copy block" deseni (bkz.
// src/data/darica/copy-blocks.ts) burada da aynen kullanılıyor — yeni bir
// shared component icat edilmedi.
export interface GebzeCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

// `gebzeIntro`: Hero'dan hemen sonraki bu bölüm KASITLI OLARAK konum/Darıca
// içermiyor. "Gebze'de işitme cihazı merkezi" ifadesi burada doğal biçimde
// geçiyor (plan onayı §4) — ama "Gebze'deki merkezimiz/şubemiz" gibi
// fiziksel iddia yok, "kim arasa/ihtiyaç duysa ilk ne yapmalı" anlatılıyor.
// 2009/SGK/uzman kadro gerçekleri burada tek seferlik, düz yazı içinde
// veriliyor — ayrı bir "Neden Avrasya İşitme?" kart bloğu olarak TEKRAR
// EDİLMİYOR (Darıca sayfasının kopyası izlenimini azaltmak için).
export const gebzeIntro: GebzeCopyBlock = {
  badge: "DOĞRU BAŞLANGIÇ",
  heading: "Gebze'de İşitme Cihazı Arayanlar İçin Doğru Başlangıç",
  paragraphs: [
    "İşitme kaybı yaşayan pek çok kişi, hangi cihazın kendisine uygun olduğuna karar vermeden önce doğru bir değerlendirme yaptırmak ister.",
    "Gebze'de işitme cihazı merkezi arayan kişiler için ilk adım, yalnızca cihaz markasına bakmak değil; işitme değerlendirmesi, cihaz seçimi, uygulama ve satış sonrası desteğin birlikte ele alınmasıdır.",
    "2009'dan beri SGK anlaşmalı, odyolog ve odyometristlerden oluşan bir ekiple, Gebze'den gelen danışanlarımıza da aynı özenle yaklaşıyoruz.",
  ],
};

// Yeni bölüm: "İşitme Cihazı Seçerken Nelere Dikkat Edilmeli?" — fiyatı
// sabit/uydurma bir rakamla değil, gerçekçi/kullanıcı-faydalı bir açıklamayla
// ele alıyor (plan onayı §7 — "sabit fiyat verme").
export const gebzeDecisionFactors: GebzeCopyBlock = {
  badge: "DOĞRU KARARI VERMEK",
  heading: "İşitme Cihazı Seçerken Nelere Dikkat Edilmeli?",
  paragraphs: [
    "İşitme cihazı fiyatları; teknoloji seviyesi, özellikler, marka ve modele göre değişebilir. Bu yüzden karar vermeden önce profesyonel bir değerlendirme yaptırmak önemlidir.",
    "En pahalı cihaz her zaman en uygun cihaz anlamına gelmez — asıl belirleyici, işitme kaybınızın derecesi ve günlük yaşam ihtiyaçlarınızdır.",
    "SGK desteği, marka seçenekleri ve deneme süreci hakkında bilgi alarak, aceleye getirmeden doğru kararı birlikte verebiliriz.",
  ],
};
