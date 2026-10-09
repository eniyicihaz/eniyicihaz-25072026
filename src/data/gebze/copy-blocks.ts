// Gebze landing page — page-scoped metin/veri blokları (Gebze sade sürüm).
// Yalnızca LOCAL_SOURCE_OF_TRUTH (§1, §2, §3, §5) ve SERVICE_SOURCE_OF_TRUTH'tan
// (H1–H40, §1.5, §2.2–§2.15, §3). Ücret TUTARI, mesafe, güzergâh, otobüs süresi,
// metro bağlantısı, hastane adı, müşteri oranı YAZILMAZ (doğrulanmadı / kararlaştırılmadı).
// Hat numaraları [TIME-SENSITIVE]; güncel bilgi için resmî ulaşım kaynağına yönlendirilir.
// Gebze'de şube yok: tüm bloklar "Gebze'den Darıca merkezimize" modelindedir.
// Aynı bilgi yalnızca bir yerde ayrıntılı verilir; SSS yeni bilgi taşır.

export interface GebzeLinkItem {
  label: string;
  href: string;
}

export interface GebzeCard {
  title: string;
  text: string;
}

/* ---- 1) Hizmetler (gruplanmış) ------------------------------------------ */
export const gebzeServices = {
  eyebrow: "HİZMETLER",
  heading: "Gebze'den Hangi Hizmetler İçin Gelinir?",
  cards: [
    {
      title: "İşitme testi",
      text: "İşitme testi, odyometri ve timpanometri ücretsizdir; randevuyla yapılır.",
    },
    {
      title: "Cihaz seçimi ve demo",
      text: "Cihaz seçimi ve merkezdeki demo ücretsizdir; randevu gerekir. 18 marka satıyoruz.",
    },
    {
      title: "SGK işlem desteği",
      text: "Ücretsizdir ve randevu gerektirmez.",
    },
    {
      title: "Ayar, bakım ve teknik servis",
      text: "Cihaz ayarı, kontrol ve bakım ücretsizdir; teknik servis duruma göre ücretlidir. Randevu gerekir.",
    },
    {
      title: "Pil ve aksesuar",
      text: "Ücretlidir; randevu gerektirmez.",
    },
  ] as GebzeCard[],
};

/* ---- 2) Ulaşım ve erişim ------------------------------------------------ */
export const gebzeRoute = {
  eyebrow: "ULAŞIM VE ERİŞİM",
  heading: "Gebze'den Ulaşım",
  linesLabel: "Gebze'den merkeze otobüs hatları",
  lines: ["502", "440", "510", "515"],
  landmark:
    "Merkez, Palandöken Eczanesi'nin üst katında; Farabi Devlet Hastanesi durağının karşısındadır. Gebze'den bu hatlarla gelebilirsiniz.",
  timeNote:
    "Hat bilgileri zamanla değişebilir; yola çıkmadan önce belediyenin güncel ulaşım kaynağından kontrol edin.",
};

/* ---- 3) Randevu ve hazırlık --------------------------------------------- */
export const gebzeBeforeVisit = {
  eyebrow: "GELMEDEN ÖNCE",
  heading: "Gelmeden Önce: Randevu ve Hazırlık",
  points: [
    "Pil ve aksesuar alımı ile SGK işlem desteği randevusuzdur. İşitme testi, ayar, kontrol, teknik servis, uzaktan ayar ve evde hizmet randevuyla yapılır; ziyaretçi kabul etmemiz, işlemin randevusuz yapılacağı anlamına gelmez.",
    "Randevuda işleminizi belirtin. Ayar veya tamir için cihazınızı getirin; varsa işitme testinizi, reçetenizi ve raporunuzu da yanınıza alın.",
    "İlk ziyaret yaklaşık 1 saat sürer; geç kalacaksanız en az 1 saat önce haber verin.",
  ],
};

/* ---- 4) SGK ------------------------------------------------------------- */
export const gebzeSgk = {
  eyebrow: "SGK",
  heading: "SGK İşlem Desteği",
  text:
    "SGK işlemlerinde merkezimiz size destek verir; destek tablosu merkezde gösterilir ve ödeyeceğiniz kalan tutar açıklanır. Hastane süreci bizim kontrolümüzde değildir. Güncel tutarlar için sabit bilgi vermiyoruz; ayrıntılar SGK sayfalarında.",
  links: [
    { label: "SGK işitme cihazı desteği", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Rapor süreci", href: "/sgk/rapor-sureci/" },
    { label: "Gerekli belgeler", href: "/sgk/gerekli-belgeler/" },
  ] as GebzeLinkItem[],
};

/* ---- 5) Uzaktan ayar ve evde hizmet ------------------------------------- */
export const gebzeRemote = {
  eyebrow: "UZAK MESAFE",
  heading: "Her İşlem İçin Darıca'ya Gelmek Gerekir mi?",
  options: [
    {
      title: "Uzaktan ayar",
      text: "Uygun cihazlarda küçük ayarlar video görüşmeyle yapılır; ücretsizdir ve randevu gerekir. A&M ve Audifon cihazlarda yapılmaz; her ihtiyaç da uzaktan çözülemez.",
    },
    {
      title: "Evde hizmet",
      text: "Gebze dahil Kocaeli'nin tamamında ücretsiz ve randevuyla verilir; merkezde verilen hizmetlerin kapsamı doğrultusundadır. Uygunluk için bizi arayın.",
    },
  ] as GebzeCard[],
  links: [
    { label: "Uzaktan ayar", href: "/uygulama-ayar/uzaktan-ayar/" },
    { label: "Evde hizmet", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
  ] as GebzeLinkItem[],
};

/* ---- 6) Demo ve deneme -------------------------------------------------- */
export const gebzeTrial = {
  eyebrow: "DEMO VE DENEME",
  heading: "Cihaz Demosu ve Deneme",
  text:
    "Merkezde yaklaşık 20 dakikalık demo ücretsizdir. Günlük hayatta denemek isterseniz cihazı satın alarak 7 güne kadar deneyebilirsiniz; uygun bulunmazsa ödenen tutar iade edilir. Kulak içi cihazlar bu 7 günlük deneme kapsamı dışındadır; merkezde demo olarak denenebilir.",
  links: [
    { label: "Cihaz deneme", href: "/uygulama-ayar/cihaz-deneme/" },
    { label: "18 marka", href: "/markalar/" },
  ] as GebzeLinkItem[],
};

/* ---- 7) Fiyat ve satış sonrası ------------------------------------------ */
export const gebzeAfter = {
  eyebrow: "FİYAT VE SATIŞ SONRASI",
  heading: "Fiyat ve Satış Sonrası",
  text:
    "Fiyat cihaz türüne, teknolojiye ve özelliklere göre değişir; sabit fiyat yayımlamıyoruz, değerlendirmeden sonra bilgi verilir ve SGK desteği kalan tutarı etkiler. Teslimden yaklaşık 2 hafta sonra ilk kontrol yapılır; sonrasında yıllık işitme testi ve düzenli bakım önerilir. Teknik servis duruma göre ücretli, garanti işlemleri ücretsizdir; üretici garanti koşulları geçerlidir.",
  links: [
    { label: "Fiyatlar", href: "/isitme-cihazi-fiyatlari/" },
    { label: "Teknik servis", href: "/servis-bakim/teknik-servis/" },
  ] as GebzeLinkItem[],
};
