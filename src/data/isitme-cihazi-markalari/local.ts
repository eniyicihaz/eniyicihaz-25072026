// Yerel bölüm — Faz 2 P2: dört şehir bloğu tek kısa bölüme indirildi (şehir adı doldurması; marka
// bilgisi şehre göre değişmiyordu). Gebze, Çayırova, Kocaeli ve İletişim sayfaları kendi ulaşım
// bilgilerini taşır. Landmark yalnızca doğrulanmış ifade; "stok", "tavsiye ederiz", "ulaşım kolay /
// bitişik", "bağlı değiliz" ifadeleri ve fotoğraf kaldırıldı.
export const localSection = {
  id: "yerel",
  eyebrow: "Darıca · Merkezimiz",
  heading: "Marka ve Model Bilgisini Merkezimizde Alabilirsiniz",
  intro: "Tek fiziksel merkezimiz Darıca'dadır.",
};

export const localContent = {
  paragraphs: [
    "Hangi marka ve model ailesinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir. Markalar ve model aileleri hakkında merkezimizde bilgi alabilirsiniz.",
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
