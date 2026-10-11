// /isitme-cihazi-fiyatlari/ — sayfaya özel fiyat istisnasının TEK veri kaynağı.
//
// Karar: docs/DECISIONS.md K-Fiyat-1 (işletme sahibi, 2026-10-11). Global fiyat yasağı
// (PRINCIPLES.md §5) kaldırılmadı; bu dosya YALNIZCA /isitme-cihazi-fiyatlari/ sayfasında
// import edilir. Başka bir sayfaya veya bileşene bağlanmaz.
//
// Kurallar (K-Fiyat-1):
// - Mesaj birebir kullanılır; KDV, SGK katkısı veya tek/çift cihaz koşulu ve dipnot eklenmez.
// - Banka, kart, faiz, vade farkı, kampanya bitişi gibi ödeme koşulu yazılmaz;
//   "faizsiz", "vade farksız", "tüm kartlara", "her bütçeye uygun" kullanılmaz.
// - Hiçbir şemaya (Product/Offer/priceRange) fiyat yazılmaz.
// [TIME-SENSITIVE]: fiyat veya taksit değiştiğinde yalnızca bu dosya ve PRODUCT_SOT §4 güncellenir.

export const pricing = {
  year: 2026,
  /** Hero, kısa cevap, ödeme bölümü ve SSS'te birebir kullanılan onaylı cümle. */
  message: "2026 yılında yapay zekâ destekli yeni nesil işitme cihazları 20.000 TL'den başlayan fiyatlarla.",
  /** Mesajın görsel olarak parçalanmış hâli (hero paneli); birleşimi `message` ile aynıdır. */
  messageParts: {
    before: "2026 yılında yapay zekâ destekli yeni nesil işitme cihazları",
    amount: "20.000 TL'den",
    after: "başlayan fiyatlarla.",
  },
  amountLabel: "20.000 TL",
  aiLabel: "Yapay zekâ destekli yeni nesil seçenekler",
  installmentLabel: "9 taksite kadar ödeme imkânı",
  verifiedAt: "2026-10-11",
  source: "İşletme sahibi (DECISIONS K-Fiyat-1)",
} as const;

// Parçalar ile tam cümle birbirinden kopmasın.
if (`${pricing.messageParts.before} ${pricing.messageParts.amount} ${pricing.messageParts.after}` !== pricing.message) {
  throw new Error("pricing.messageParts, pricing.message ile birebir aynı olmalı (DECISIONS K-Fiyat-1)");
}
