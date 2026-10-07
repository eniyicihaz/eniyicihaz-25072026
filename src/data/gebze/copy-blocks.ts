// Gebze landing page — page-scoped metin blokları (P1-B). Darıca/Çayırova
// sayfalarıyla aynı genel cihaz/fiyat/SGK metinleri burada tekrar
// edilmiyor; bu konular pillar sayfalarda anlatılıyor. Buradaki bilgiler
// yalnızca LOCAL_SOURCE_OF_TRUTH (§2, §3, §5) ve SERVICE_SOURCE_OF_TRUTH
// H16'dan geliyor. Hat numaraları [TIME-SENSITIVE].
export interface GebzeCopyBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

export const gebzeIntro: GebzeCopyBlock = {
  badge: "GEBZE'DEN ULAŞIM",
  heading: "Gebze'den Darıca'daki Merkezimize Nasıl Gelinir?",
  paragraphs: [
    "Gebze'de ayrı bir şubemiz bulunmuyor. Testten cihaz seçimine, ayardan teknik servise kadar tüm hizmetlerimizi Darıca'daki merkezimizde veriyoruz.",
    "Gebze'den gelen danışanlarımız genellikle özel araçla ya da otobüsle geliyor. Gebze'den merkezimize 502, 440, 510 ve 515 numaralı otobüs hatlarıyla ulaşabilirsiniz; hat bilgileri değişebileceği için yola çıkmadan önce güncel durumu kontrol etmenizi öneririz.",
    "Merkezimiz Farabi Devlet Hastanesi durağının karşısında, Palandöken Eczanesi'nin üst katındadır; 1. kata asansörle çıkılır. Otopark imkânı da bulunuyor.",
    "Randevusuz da gelebilirsiniz; ancak işitme testi, cihaz ayarı gibi hizmetler randevuyla verildiği için gelmeden önce bizi aramanızı öneririz.",
  ],
};

export const gebzeHomeService: GebzeCopyBlock = {
  badge: "EVDE HİZMET",
  heading: "Merkeze Gelemiyorsanız: Gebze'de Evde Hizmet",
  paragraphs: [
    "Merkezimize gelmekte zorlanan danışanlarımız için evde işitme cihazı hizmeti veriyoruz. Gebze, bu hizmeti verdiğimiz Kocaeli genelindeki bölgenin içindedir.",
    "Evde hizmet ücretsizdir ve randevuyla planlanır.",
  ],
};
