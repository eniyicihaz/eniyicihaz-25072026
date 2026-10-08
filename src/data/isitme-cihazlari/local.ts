// Yerel bölüm — Faz 2 P2: dört şehir bloğu (Darıca / Gebze / Çayırova / Kocaeli) tek kısa
// bölüme indirildi. Pillar sayfa genel işitme cihazı bilgisine hizmet eder; şehre özgü
// cihaz bilgisi yoktu (şehir adı doldurması). Gebze, Çayırova, Kocaeli ve İletişim sayfaları
// kendi ulaşım bilgilerini taşır; burada yalnızca merkez bilgisi + linkler var.
// - Landmark yalnızca doğrulanmış ifade (LOCAL_SOURCE_OF_TRUTH §1).
// - "Merkezde cihaz türlerini elinize alın / deneyin" ifadesi kaldırıldı: merkezdeki ürün/stok
//   bulunurluğu doğrulanmadı. Nötr ifade: cihaz türleri hakkında merkezde bilgi alınabilir.
// - Walk-in kabul + hizmet bazında randevu birlikte anlatılır (CONVERSION_SOT).
// - Danışma/test odası fotoğrafı kaldırıldı (sayfa kısaltma; NAP ContactLocationCard'da).
export const localSection = {
  id: "yerel",
  eyebrow: "Darıca · Merkezimiz",
  heading: "Cihaz Türleri Hakkında Merkezimizde Bilgi Alabilirsiniz",
  intro: "Tek fiziksel merkezimiz Darıca'dadır.",
};

export const localContent = {
  paragraphs: [
    "Hangi cihaz türünün size uygun olduğu işitme değerlendirmesinden sonra belirlenir. Cihaz türleri hakkında merkezimizde bilgi alabilirsiniz.",
    "Merkezimiz Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
    "Gebze, Çayırova ve Kocaeli'nin diğer ilçelerinde şubemiz yoktur; bu bölgelerden gelenlerin ulaşım bilgileri ilgili sayfalarımızda yer alıyor.",
  ],
  links: [
    { label: "Darıca merkezimizin sayfası", href: "/darica-isitme-cihazlari/" },
    { label: "Gebze'den ulaşım", href: "/gebze-isitme-cihazlari/" },
    { label: "Çayırova'dan ulaşım", href: "/cayirova-isitme-cihazlari/" },
    { label: "Kocaeli geneli", href: "/kocaeli-isitme-cihazlari/" },
    { label: "Evde hizmet", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
  ],
};
