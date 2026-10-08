// Yerel bölüm — Faz 2 P2: dört şehir bloğu (Darıca / Gebze / Çayırova / Kocaeli) tek kısa
// bölüme indirildi. Fiyat bilgisi şehre göre değişmiyor; şehir başlıkları içerik
// değeri üretmiyordu (şehir adı doldurması). Gebze, Çayırova, Kocaeli ve İletişim
// sayfaları kendi ulaşım bilgilerini taşıyor; burada yalnızca "fiyat bilgisi Darıca'daki
// merkezde, değerlendirmeden sonra netleşir" + doğrulanmış tarif + linkler var.
// - Landmark yalnızca doğrulanmış ifade (LOCAL_SOURCE_OF_TRUTH §1). "Farabi Ağız ve Diş
//   Sağlığı Merkezi", "ulaşım kolaydır / bitişik", "stok" ve "randevu tavsiye ederiz"
//   ifadeleri kaldırıldı (walk-in kabul + hizmet bazında randevu birlikte anlatılır).
// - Fiyat yayınlama kararı verilmedi (PRODUCT_SOT §4): rakam verilmez.
export const localSection = {
  id: "yerel",
  eyebrow: "Darıca · Merkezimiz",
  heading: "Fiyat Bilgisini Darıca'daki Merkezimizde Alırsınız",
  intro:
    "Tek fiziksel merkezimiz Darıca'dadır. Fiyat bilgisi, işitme değerlendirmesinin ardından ve ihtiyacınıza göre verilir.",
};

export const localContent = {
  paragraphs: [
    "Ziyaretinizde önce ihtiyaçlarınızı dinler, işitme testinizi yaparız; sonuçlara göre uygun cihaz tiplerini ve teknoloji seviyelerini anlatırız. Fiyat bilgisi bu adımların sonunda netleşir.",
    "Merkezimiz Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
  ],
  items: [
    { title: "Eski test sonuçlarınız", text: "Varsa daha önce yaptırdığınız işitme testi veya odyometri sonuçlarını yanınıza alın." },
    { title: "SGK belgeleriniz", text: "SGK desteğinden yararlanacaksanız rapor ve reçeteyle ilgili belgelerinizi yanınızda bulundurun." },
    { title: "Önceliklerinizi düşünün", text: "Telefon, televizyon, kalabalık ortam, görünmezlik: sizin için neyin önemli olduğu seçimi kolaylaştırır." },
  ],
  otherAreas:
    "Gebze, Çayırova ve Kocaeli'nin diğer ilçelerinde şubemiz yoktur; bu bölgelerden gelenlerin ulaşım bilgileri ilgili sayfalarımızda yer alıyor.",
  links: [
    { label: "Darıca merkezimizin sayfası", href: "/darica-isitme-cihazlari/" },
    { label: "Gebze'den ulaşım", href: "/gebze-isitme-cihazlari/" },
    { label: "Çayırova'dan ulaşım", href: "/cayirova-isitme-cihazlari/" },
    { label: "Kocaeli geneli", href: "/kocaeli-isitme-cihazlari/" },
    { label: "Evde hizmet", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
  ],
};
