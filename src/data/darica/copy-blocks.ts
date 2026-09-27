// Darıca landing page — İhtiyaç/Yaklaşım köprüsü için kısa,
// kart/istatistik gerektirmeyen metin bloğu tipi. Mevcut BrandPageIntro
// (stats zorunlu) ve ProcessTimeline (steps zorunlu) bu bölüm için uygun
// değil — zorla sahte istatistik/adım eklemek yerine, sayfanın kendi
// <style> bloğunda küçük, DS token'larına dayanan bir "compact copy
// block" deseni kullanılıyor (yeni paylaşılan component değil, bu
// sayfaya özel bir kullanım). SGK bölümü artık bu tipi kullanmıyor —
// 3 kart yapısına geçti, bkz. src/data/darica/sgk.ts (ValueGridContent).
export interface DaricaCopyBlockLink {
  label: string;
  href: string;
}

export interface DaricaCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
  link?: DaricaCopyBlockLink;
}

export const daricaNeedIntro: DaricaCopyBlock = {
  badge: "DOĞRU DEĞERLENDİRME, DOĞRU CİHAZ",
  heading: "Her İşitme Kaybı Farklıdır",
  paragraphs: [
    "İşitme kaybı genellikle yavaş ilerler ve fark edilmesi zaman alabilir.",
    "Darıca'daki merkezimizde, ihtiyacınızı birlikte değerlendirip yaşam tarzınıza uygun seçenekleri konuşuyoruz.",
  ],
};
