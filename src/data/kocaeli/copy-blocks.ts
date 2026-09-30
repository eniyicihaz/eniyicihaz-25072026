// Kocaeli landing page — kısa/orta uzunlukta, kart/istatistik gerektirmeyen
// metin blokları. Darıca/Gebze/Çayırova'nın page-scoped "copy block"
// deseni burada da kullanılıyor — yeni bir shared component icat edilmedi.
// Bu sayfa diğer üç landing page'den daha kapsamlı olduğu için 7 farklı
// copy-block içeriyor (her biri gerçekten farklı bir soruyu cevaplıyor,
// aynı bilginin tekrarı değil).
export interface KocaeliCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

export const kocaeliIntro: KocaeliCopyBlock = {
  badge: "KAPSAMLI REHBER",
  heading: "Kocaeli'de İşitme Cihazı Arayanlar İçin Kapsamlı Rehber",
  paragraphs: [
    "Kocaeli'de işitme cihazı ararken karşınıza değerlendirme süreci, cihaz türleri, marka seçenekleri, SGK desteği ve cihaz sonrası destek gibi pek çok başlık çıkar.",
    "Bu sayfada, Kocaeli genelinde işitme cihazı arayan kişilerin en çok merak ettiği konuları — doğru cihaz seçiminden fiyatı etkileyen faktörlere, SGK sürecinden teknik servise kadar — tek bir kaynakta topladık.",
    "Darıca'daki merkezimizden, Kocaeli genelindeki (Gebze, Çayırova ve çevresi dahil) danışanlarımıza aynı özenle hizmet veriyoruz.",
  ],
};

export const kocaeliWhatIsHearingAid: KocaeliCopyBlock = {
  badge: "TEMEL BİLGİLER",
  heading: "İşitme Cihazı Nedir, Kimler Fayda Görebilir?",
  paragraphs: [
    "İşitme cihazı, çevredeki sesleri algılayıp güçlendirerek kullanıcının daha net duymasını sağlayan elektronik bir yardımcı cihazdır.",
    "Yaşa bağlı işitme kaybı, uzun süreli gürültüye maruz kalma, genetik faktörler veya bazı sağlık durumları nedeniyle işitme güçlüğü yaşayan kişiler işitme cihazından fayda görebilir.",
    "Bu içerik genel bilgilendirme amaçlıdır; kesin değerlendirme ve öneri için mutlaka bir işitme testi yaptırmanızı öneririz.",
  ],
};

export const kocaeliUnderstanding: KocaeliCopyBlock = {
  badge: "NE ZAMAN GÜNDEME GELİR?",
  heading: "İşitme Kaybını Anlamak: Ne Zaman İşitme Cihazı Gündeme Gelir?",
  paragraphs: [
    "İşitme kaybı çoğu zaman fark edilmeden, yavaş yavaş ilerler; televizyon sesini sürekli açmak, telefonda konuşmaları takip etmekte zorlanmak veya kalabalık ortamlarda sürekli \"tekrar eder misin?\" demek yaygın ilk belirtilerdendir.",
    "Bu belirtiler günlük yaşamı etkilemeye başladığında, bir işitme değerlendirmesi yaptırmak doğru cihaz kararı için ilk adımdır.",
  ],
};

export const kocaeliSelectionGuide: KocaeliCopyBlock = {
  badge: "DOĞRU SEÇİM",
  heading: "İşitme Cihazı Nasıl Seçilir?",
  paragraphs: [
    "İşitme cihazı seçimi; işitme kaybınızın derecesi ve tipi, yaşam tarzınız (iş, sosyal ortam, gürültülü mekanlar), el becerisi ve görme durumunuz gibi pratik faktörler, bütçeniz ve beklentileriniz olmak üzere birçok kritere bağlıdır.",
    "Kulak içi ve kulak arkası cihazlar arasındaki temel fark boyut ve güç kapasitesidir: kulak arkası modeller daha geniş bir işitme kaybı aralığında güçlü performans sunarken, kulak içi modeller daha az göze çarpan bir kullanım sağlar.",
    "En doğru seçim, bir işitme değerlendirmesi sonrasında uzman eşliğinde, kişiye özel olarak belirlenir; genel bilgiler yalnızca fikir vermek içindir.",
  ],
};

export const kocaeliPricing: KocaeliCopyBlock = {
  badge: "FİYATI ETKİLEYEN FAKTÖRLER",
  heading: "Kocaeli İşitme Cihazı Fiyatları Neye Göre Değişir?",
  paragraphs: [
    "İşitme cihazı fiyatları; teknoloji seviyesi, gürültü bastırma ve konuşma odaklı işleme özellikleri, şarjlı veya Bluetooth gibi ek donanımlar, marka ve model gibi pek çok faktöre göre değişir.",
    "Sabit bir fiyat listesi paylaşmak yerine, ihtiyacınıza ve bütçenize uygun gerçekçi seçenekleri sizinle birlikte karşılaştırmayı tercih ediyoruz.",
    "SGK desteğinden yararlanan danışanlarımız için, katkı payı sonrası net maliyet de bu değerlendirme sırasında netleşir.",
  ],
};

export const kocaeliBuyingTips: KocaeliCopyBlock = {
  badge: "SATIN ALMADAN ÖNCE",
  heading: "Kocaeli'de İşitme Cihazı Alırken Dikkat Edilmesi Gerekenler",
  paragraphs: [
    "Yalnızca fiyata bakarak karar vermek uzun vadede memnuniyetsizliğe yol açabilir — cihazın işitme kaybınıza uygunluğu, deneme imkânı ve satış sonrası destek en az fiyat kadar önemlidir.",
    "Cihazı satın almadan önce deneyebiliyor olmanız, günlük hayatta gerçekten fayda görüp görmeyeceğinizi anlamanızı sağlar.",
    "SGK anlaşması, teknik servis desteği ve garanti süreçleri gibi konuları da satın alma kararınıza dahil etmenizi öneririz.",
  ],
};

export const kocaeliRegionalService: KocaeliCopyBlock = {
  badge: "HİZMET BÖLGEMİZ",
  heading: "Darıca, Gebze, Çayırova ve Kocaeli Genelinde Hizmet",
  paragraphs: [
    "Avrasya İşitme Cihazları, Darıca'daki merkezinden Kocaeli genelindeki danışanlarına hizmet veren SGK anlaşmalı bir işitme merkezidir.",
    "Gebze ve Çayırova'dan gelen danışanlarımızın yanı sıra, Kocaeli'nin diğer ilçelerinden ulaşmak isteyenlere de yardımcı olmaktan memnuniyet duyarız.",
    "Hangi bölgeden ulaşırsanız ulaşın, değerlendirme ve cihaz seçim süreci aynı özenle ilerler.",
  ],
};
