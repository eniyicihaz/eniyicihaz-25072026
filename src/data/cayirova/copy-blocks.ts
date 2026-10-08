// Çayırova landing page — page-scoped metin blokları (Faz 2 P2, Çayırova V1).
// Doğrulanmış bilgi sınırlı olduğu için sayfa bilinçli olarak kısa:
// tek kanonik ulaşım bölümü + kısa "gelmeden önce" notu. Gebze'nin bölüm
// yapısı (hat rozetleri, kısa yollar) kopyalanmıyor.
// Kaynak: LOCAL_SOURCE_OF_TRUTH §1, §2, §6; SERVICE_SOURCE_OF_TRUTH H16.
// Hat bilgisi [TIME-SENSITIVE].
export interface CayirovaRoute {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  testLink: { label: string; href: string };
}

export const cayirovaRoute: CayirovaRoute = {
  eyebrow: "ÇAYIROVA'DAN ULAŞIM",
  heading: "Çayırova'dan 550 Numaralı Hatla",
  paragraphs: [
    "Çayırova'dan merkezimize toplu taşımayla 550 numaralı hatla ulaşabilirsiniz. Hat bilgileri zamanla değişebilir; yola çıkmadan önce güncel durumu kontrol edin.",
    "Merkezimiz Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır. Asansörle çıkılır ve tekerlekli sandalyeye uygundur.",
  ],
  testLink: { label: "Ücretsiz işitme testi hakkında bilgi alın", href: "/degerlendirme/ucretsiz-isitme-testi/" },
};

export interface CayirovaBeforeVisit {
  paragraphs: string[];
  homeService: { text: string; linkLabel: string; href: string };
}

export const cayirovaBeforeVisit: CayirovaBeforeVisit = {
  paragraphs: [
    "Randevusuz gelebilirsiniz. Test, ayar ve teknik servis gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
  ],
  homeService: {
    text: "Merkeze gelmek zor geliyorsa evde hizmet Çayırova'yı da kapsar; ücretsizdir ve randevuyla planlanır.",
    linkLabel: "Evde işitme cihazı hizmeti",
    href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
  },
};
