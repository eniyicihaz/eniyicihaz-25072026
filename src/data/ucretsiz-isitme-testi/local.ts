// Yerel bölüm — Faz 2 P2: üç alt blok (Darıca / Gebze-Çayırova / Kocaeli) tek kısa bölüme
// indirildi. Gebze, Çayırova, Kocaeli ve İletişim sayfaları artık kendi ulaşım bilgilerini
// taşıyor; burada yalnızca "test Darıca'daki merkezde yapılır" + doğrulanmış tarif + linkler var.
// - Landmark yalnızca doğrulanmış ifade (LOCAL_SOURCE_OF_TRUTH §1): Palandöken Eczanesi'nin üst
//   katı, Farabi Devlet Hastanesi durağının karşısı. "Farabi Ağız ve Diş Sağlığı Merkezi" ifadesi
//   kaldırıldı.
// - "Darıca Gebze'ye bitişik / ulaşım kolaydır" cümlesi kaldırıldı (doğrulanmamış).
// - Cadde cephesi fotoğrafı (hakkimizda-tabela-cadde.webp) kaldırıldı: gerçek cephe
//   fotoğrafıyla uyuşmuyor, işletme sahibinin teyidi bekliyor. Dosya silinmedi.
// - Hat numaraları burada tekrarlanmaz (kanonik yerleri Gebze/Çayırova/Kocaeli/İletişim).
// Adres, telefon ve saatler elle yazılmaz — sayfa sonundaki ContactLocationCard (company.ts).
export const localSection = {
  id: "darica",
  eyebrow: "Darıca · Merkezimiz",
  heading: "Darıca'daki Merkezimizde İşitme Testi",
  intro: "İşitme testi, Darıca'daki tek fiziksel merkezimizde yapılır.",
};

export const localContent = {
  paragraphs: [
    "Merkezimiz Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır; asansörle 1. kata çıkılır. Adres, çalışma saatleri ve yol tarifi sayfanın sonundaki iletişim kartında.",
    "Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
    "Gebze, Çayırova ve Kocaeli'nin diğer ilçelerinde şubemiz yoktur; bu bölgelerden gelenlerin ulaşım bilgileri ilgili sayfalarımızda yer alıyor.",
  ],
  links: [
    { label: "Darıca merkezimizin sayfası", href: "/darica-isitme-cihazlari/" },
    { label: "Gebze'den ulaşım", href: "/gebze-isitme-cihazlari/" },
    { label: "Çayırova'dan ulaşım", href: "/cayirova-isitme-cihazlari/" },
    { label: "Kocaeli geneli", href: "/kocaeli-isitme-cihazlari/" },
    { label: "İletişim", href: "/iletisim/" },
  ],
};
