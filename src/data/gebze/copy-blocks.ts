// Gebze landing page — page-scoped metin/veri blokları (Gebze nihai paket).
// Yalnızca LOCAL_SOURCE_OF_TRUTH (§1, §2, §3, §5) ve SERVICE_SOURCE_OF_TRUTH'tan
// (H1–H40, §1.5, §2.2–§2.15, §3). Süreler SoT'taki YAKLAŞIK işlem süreleridir;
// kesin taahhüt değildir. Ücret TUTARI, mesafe, güzergâh, otobüs süresi, metro
// bağlantısı, hastane adı, müşteri oranı YAZILMAZ (doğrulanmadı / kararlaştırılmadı).
// Hat numaraları [TIME-SENSITIVE]; güncel bilgi için resmî ulaşım kaynağına yönlendirilir.
// Gebze'de şube yok: tüm bloklar "Gebze'den Darıca merkezimize" modelindedir.

export interface GebzeInfoBlock {
  eyebrow: string;
  heading: string;
  intro: string;
  points: string[];
  note?: string;
  links?: { label: string; href: string }[];
}

export interface GebzeTable {
  eyebrow: string;
  heading: string;
  intro: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface GebzeCtaStrip {
  text: string;
}

/* ---- 1) Hizmetler ------------------------------------------------------- */
export const gebzeServices: GebzeTable = {
  eyebrow: "HİZMETLER",
  heading: "Gebze'den Hangi Hizmetler İçin Darıca'ya Gelinir?",
  intro:
    "Gebze'den işitme testi, işitme cihazı seçimi, SGK işlem desteği, cihaz ayarı ve teknik servis için Darıca'daki merkezimize gelebilirsiniz. Ücret, randevu ve yaklaşık işlem süresi aşağıda.",
  columns: ["Hizmet", "Ücret", "Randevu", "Yaklaşık süre"],
  rows: [
    ["İşitme testi (5 yaş ve üstü)", "Ücretsiz", "Gerekli", "10 dk"],
    ["Odyometri ve timpanometri", "Ücretsiz", "Gerekli", "15 dk ve 10 dk"],
    ["Çocuk işitme testi (oyun odyometrisi, 3 yaş ve üstü)", "Ücretli", "Gerekli", "10 dk"],
    ["Cihaz seçimi ve demo", "Ücretsiz", "Gerekli", "10 dk ve 20 dk"],
    ["Cihaz teslimi ve kullanım eğitimi", "Ücretsiz", "Gerekli", "10–15 dk"],
    ["Kulak kalıbı (cihaz alımında ilk kalıplar ücretsiz)", "Ücretli", "Gerekli", "Kulak izi 10 dk; kalıp 3 gün içinde"],
    ["Cihaz ayarı ve programlama", "Ücretsiz", "Gerekli", "5–15 dk"],
    ["Kontrol, bakım ve temizlik", "Ücretsiz", "Gerekli", "5–10 dk"],
    ["Teknik servis ve onarım", "Duruma göre", "Gerekli", "Genellikle teknik servis 3 gün, onarım 1–3 gün içinde"],
    ["Garanti işlemleri", "Ücretsiz", "Gerekli", "1–5 gün (değişken)"],
    ["Tinnitus (kulak çınlaması) değerlendirmesi", "Ücretsiz", "Gerekli", "10–15 dk"],
    ["SGK işlem desteği", "Ücretsiz", "Gerekmez", "10 dk"],
    ["Pil ve aksesuar alımı", "Ücretli", "Gerekmez", "5 dk"],
  ],
  note:
    "Süreler yaklaşık olup işlemlere göre değişir; kesin bir süre taahhüdü değildir. Ücretli kalemlerin tutarı bu sayfada yayımlanmaz; öğrenmek için bizi arayabilirsiniz.",
};

/* ---- 2) Ulaşım ve erişim ------------------------------------------------ */
export interface GebzeRoute {
  eyebrow: string;
  heading: string;
  linesLabel: string;
  lines: string[];
  landmark: string;
  timeNote: string;
}

export const gebzeRoute: GebzeRoute = {
  eyebrow: "ULAŞIM VE ERİŞİM",
  heading: "Gebze'den Ulaşım ve Merkeze Erişim",
  linesLabel: "Gebze'den merkeze otobüs hatları",
  lines: ["502", "440", "510", "515"],
  landmark:
    "Merkezimiz Darıca'da, Palandöken Eczanesi'nin üst katında; Farabi Devlet Hastanesi durağının karşısındadır. Gebze'den bu hatlarla gelebilirsiniz. Adres, erişim, otopark ve çalışma saatleri aşağıdaki kartta.",
  timeNote:
    "Hat bilgileri zamanla değişebilir. Yola çıkmadan önce belediyenin güncel ulaşım kaynağından hat ve sefer bilgisini kontrol edin; bu sayfada güzergâh veya süre bilgisi verilmemektedir.",
};

/* ---- 3) Gelmeden önce --------------------------------------------------- */
export const gebzeBeforeVisit: GebzeInfoBlock = {
  eyebrow: "GELMEDEN ÖNCE",
  heading: "Gelmeden Önce: Randevu ve Hazırlık",
  intro:
    "Merkezimiz ziyaretçi kabul eder; ancak işlemlerin çoğu randevuyla yapılır. Yola boşuna çıkmamanız için hangi işlem için geleceğinizi önceden söylemenizi öneririz.",
  points: [
    "Randevusuz yapılabilenler: pil ve aksesuar alımı ile SGK işlem desteği.",
    "Randevu gerekenler: işitme testi, cihaz ayarı, kontrol, teknik servis, uzaktan ayar ve evde hizmet.",
    "Randevu alırken hangi işlem için geldiğinizi belirtin; ayar veya tamir için cihazınızı getirin, pil ya da aksesuar için pil numarasını veya aksesuar modelini söyleyin.",
    "Varsa işitme testinizi, reçetenizi ve raporunuzu getirin. Son 1 ay içinde test yaptırdıysanız rutin olarak tekrar test yapılmaz; mevcut testten şüphe edilirse yenilenir.",
    "Geç kalacaksanız en az 1 saat önce haber verin.",
  ],
};

export const gebzeCtaAfterBefore: GebzeCtaStrip = {
  text: "Randevu almak ya da hazırlığınızı sormak için bizi arayabilir veya yazabilirsiniz.",
};

/* ---- 4) SGK ------------------------------------------------------------- */
export const gebzeSgk: GebzeInfoBlock = {
  eyebrow: "SGK",
  heading: "Gebze'den Gelenler İçin SGK İşlem Desteği",
  intro:
    "SGK işlemlerinde merkezimiz size destek verir; bu destek ücretsizdir ve randevu gerektirmez. Destek tablosu merkezde gösterilir ve ödeyeceğiniz kalan tutar açıklanır.",
  points: [
    "İki yol izlenebilir: önce merkeze gelip cihaz konusunu konuşmak, rapor, reçete ve işitme testini sonra temin etmek; ya da önce işitme testini yaptırıp merkeze gelmek, satın alma süreci başladığında rapor ve reçeteyi almak. Durumunuza uygun yol için gelmeden önce arayın.",
    "Rapor ve reçeteniz varsa ilk ziyarette getirin; hangi belgenin hangi aşamada gerektiğini merkezde birlikte netleştiririz.",
    "Hastane muayenesi ve randevu zamanı bizim kontrolümüzde değildir; hastane süreci kişiye göre değişir.",
    "Merkezdeki süre SGK'lı ve SGK'sız danışanlar için aynıdır. Rapordan sonra cihaz teslimi, işletmenin mevcut uygulamasında genellikle 1–3 gün; çoğunlukla aynı gündür. Bu kesin bir süre taahhüdü değildir.",
  ],
  note: "Güncel destek tutarları ve mevzuat için bu sayfada sabit bir bilgi verilmemektedir; ayrıntılı SGK sayfalarına bakabilirsiniz.",
  links: [
    { label: "SGK işitme cihazı desteği", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Rapor süreci", href: "/sgk/rapor-sureci/" },
    { label: "Gerekli belgeler", href: "/sgk/gerekli-belgeler/" },
  ],
};

/* ---- 5) Her işlem için gelmek gerekir mi? ------------------------------- */
export const gebzeRemote: GebzeTable = {
  eyebrow: "UZAK MESAFE",
  heading: "Her İşlem İçin Darıca'ya Gelmek Gerekir mi?",
  intro:
    "Her küçük ayar veya kontrol için Gebze'den yola çıkmanız gerekmeyebilir. Üç seçenek:",
  columns: ["Seçenek", "Ne için uygun", "Randevu ve ücret", "Dikkat"],
  rows: [
    [
      "Merkezde (Darıca)",
      "İşitme testi, cihaz seçimi ve demo, teslim, kulak kalıbı, fiziksel sorunlar, kapsamlı programlama, teknik servis",
      "Hizmete göre (yukarıdaki tablo)",
      "Tek fiziksel merkezimiz Darıca'dadır; Gebze'de şube yoktur.",
    ],
    [
      "Uzaktan ayar",
      "Uygun cihazda küçük ayar güncellemeleri, video görüşmeyle (yaklaşık 15 dk)",
      "Randevu gerekli; ücretsiz",
      "A&M ve Audifon cihazlarda yapılmaz; her ihtiyaç uzaktan çözülemez, gerekirse yüz yüze randevu önerilir.",
    ],
    [
      "Evde hizmet",
      "Merkeze gelemeyenler için, merkezde verilen hizmetlerin kapsamı doğrultusunda (10–60 dk, değişken)",
      "Randevu gerekli; ücretsiz",
      "Gebze dahil Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nda. Hangi işlemin evde yapılabileceğini öğrenmek için arayın.",
    ],
  ],
  note: "Uzaktan ayar ile evde hizmet farklı hizmetlerdir; ikisi birbirinin yerine geçmez.",
};

export const gebzeRemoteLinks = [
  { label: "Uzaktan ayar", href: "/uygulama-ayar/uzaktan-ayar/" },
  { label: "Evde işitme cihazı hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
];

/* ---- 6) İlk ziyaret ----------------------------------------------------- */
export const gebzeFirstVisit: GebzeInfoBlock = {
  eyebrow: "İLK ZİYARET",
  heading: "İlk Ziyaret Nasıl İlerler?",
  intro:
    "İlk ziyarette sırasıyla şunlar yapılır; her adım ihtiyacınıza göre değişebilir.",
  points: [
    "Görüşme: Talepleriniz sorulur ve kısa bir öykü alınır.",
    "İşitme testi: Darıca'daki merkezde odyometrist eşliğinde, ücretsiz ve randevuyla yapılır. Güncel bir testiniz varsa onun üzerinden ilerlenir.",
    "Sonuç: İşitme kaybı varsa cihaz bilgilendirmesi ve deneme sürecine geçilir; şüpheli bir durum varsa KBB hekimine yönlendirme yapılır.",
    "Cihaz seçimi: Kulak arkası, kulak içi, pilli ve şarjlı seçenekler anlatılır. Önce işitme kaybının derecesi ve kulak yapınız, sonra kullanım kolaylığı, yaşam tarzı ve estetik beklentiniz dikkate alınır. 18 marka satıyoruz.",
    "Demo ve deneme: Merkezde yaklaşık 20 dakikalık demo ücretsizdir. Günlük hayatta denemek isterseniz cihazı satın alarak 7 güne kadar deneyebilirsiniz; uygun bulunmazsa ödenen tutar iade edilir. Kulak içi cihazlar bu 7 günlük deneme kapsamı dışındadır; merkezde demo olarak denenebilir.",
  ],
  links: [
    { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Cihaz deneme", href: "/uygulama-ayar/cihaz-deneme/" },
    { label: "Cihaz uygulaması", href: "/uygulama-ayar/cihaz-uygulama/" },
    { label: "18 marka", href: "/markalar/" },
  ],
};

/* ---- 7) Fiyat ----------------------------------------------------------- */
export const gebzePrice: GebzeInfoBlock = {
  eyebrow: "FİYAT",
  heading: "İşitme Cihazı Fiyatları Hakkında",
  intro:
    "Fiyat; cihaz türüne, teknoloji seviyesine, şarjlı veya pilli olmasına ve özelliklerine göre değişir. Bu sayfada sabit fiyat yayımlamıyoruz; işitme değerlendirmesinden sonra size uygun seçenekler ve fiyat bilgisi paylaşılır.",
  points: [
    "SGK desteği ödeyeceğiniz kalan tutarı etkiler; destek tablosu merkezde gösterilir ve kalan tutar açıklanır.",
    "Fiyat bilgisi için bizi arayabilir ya da merkezimize gelebilirsiniz.",
    "Satın almadan önce cihazı demoyla deneyebilirsiniz; satın aldıktan sonra 7 güne kadar deneme ve uygun bulunmazsa ücret iadesi ayrı bir süreçtir.",
  ],
  links: [{ label: "İşitme cihazı fiyatlarını ne belirler?", href: "/isitme-cihazi-fiyatlari/" }],
};

export const gebzeCtaAfterPrice: GebzeCtaStrip = {
  text: "Fiyat ve seçenekler hakkında sorularınız için bizi arayabilir ya da yazabilirsiniz.",
};

/* ---- 8) Satış sonrası --------------------------------------------------- */
export const gebzeAfterSales: GebzeInfoBlock = {
  eyebrow: "SATIŞ SONRASI",
  heading: "Satış Sonrası: Takip, Bakım ve Teknik Servis",
  intro: "Cihazı aldıktan sonra da yanınızdayız; takip adımları şöyle işler.",
  points: [
    "Teslimde kullanım eğitimi: takma ve çıkarma, pil değişimi, şarj kutusu kullanımı ve kullanım süresi anlatılır. İlk hafta günde 2 saat, ikinci hafta günde 5 saat kullanım önerilir.",
    "İlk kontrol: Teslimden yaklaşık 2 hafta sonra yapılır. İlk filtre veya hortum değişimi ücretsiz yapılabilir; deneyimleriniz sorulur, gereken ayar düzeltmeleri yapılır. İsterseniz telefon bağlantısı ve uygulama kurulumu da yapılır.",
    "Düzenli takip: Her yıl işitme testinin yenilenmesi önerilir. Yaklaşık 3 ayda bir hortum veya filtre değişimi, satın almadan 2 yıl sonra cihaz bakımı, sonrasında yıllık bakım önerilir.",
    "Teknik servis ve garanti: Teknik servis duruma göre ücretlidir ve genellikle 3 gün içinde tamamlanır; garanti işlemleri ücretsizdir. Garanti kapsamındaki cihazlar gerektiğinde dış servise gönderilir; üretici garanti koşulları geçerlidir. Yedek veya geçici cihaz temini ücretsizdir ve randevuyla yapılır.",
  ],
  links: [
    { label: "Teknik servis", href: "/servis-bakim/teknik-servis/" },
    { label: "Garanti işlemleri", href: "/servis-bakim/garanti-islemleri/" },
    { label: "Periyodik bakım", href: "/servis-bakim/periyodik-bakim/" },
    { label: "Kontrol randevusu", href: "/uygulama-ayar/kontrol-randevusu/" },
  ],
};
