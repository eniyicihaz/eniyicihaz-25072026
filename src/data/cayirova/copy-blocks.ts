// Çayırova landing page — page-scoped metin blokları (P1-B). Gebze
// sayfasının yapısı ve cümleleri burada kopyalanmıyor; Çayırova için
// doğrulanmış bilgi sınırlı olduğu için sayfa bilinçli olarak kısa
// tutuluyor. Kaynak: LOCAL_SOURCE_OF_TRUTH §2–§3, §6; SERVICE_SOURCE_OF_TRUTH
// §1 (H1, H6, H7, H16, H17, H24). Hat bilgisi [TIME-SENSITIVE].
export interface CayirovaCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

export const cayirovaIntro: CayirovaCopyBlock = {
  badge: "ÇAYIROVA'DAN ULAŞIM",
  heading: "Hat 550 ile Darıca'daki Merkezimize",
  paragraphs: [
    "Çayırova'dan merkezimize toplu taşımayla gelmek isterseniz 550 numaralı otobüs hattını kullanabilirsiniz. Hat bilgileri değişebilir; yola çıkmadan önce güncel durumu kontrol etmenizi öneririz.",
    "Merkezimiz Farabi Devlet Hastanesi durağının karşısında, Palandöken Eczanesi'nin üst katındadır. Binada asansör bulunur ve merkez tekerlekli sandalye ile ulaşıma uygundur.",
  ],
};

export const cayirovaCenterServices: CayirovaCopyBlock = {
  badge: "MERKEZİMİZDE",
  heading: "Çayırova'dan Geldiğinizde Neler Yapabiliriz?",
  paragraphs: [
    "Ücretsiz işitme testi, cihaz seçimi, merkezde ücretsiz cihaz demosu, kişiye özel ayar, teknik servis ve SGK işlemlerinde destek hizmetlerinin tamamı Darıca'daki merkezimizde veriliyor.",
    "Merkeze gelmekte zorlanıyorsanız, Çayırova da Kocaeli genelinde verdiğimiz evde hizmetin kapsamındadır; evde hizmet ücretsizdir ve randevuyla planlanır.",
  ],
};
