// Gebze landing page — page-scoped metin/veri blokları (Faz 2 P2, Gebze V1).
// Yalnızca LOCAL_SOURCE_OF_TRUTH (§2, §5) ve SERVICE_SOURCE_OF_TRUTH H16'dan.
// Mesafe, süre, güzergâh başlangıcı, ücret, metro bağlantısı YAZILMAZ
// (doğrulanmadı). Hat numaraları [TIME-SENSITIVE]. Hatların global tek
// kaynağa (routes.ts) taşınması ayrı teknik temizlik işidir; bu dosya yalnızca
// Gebze sayfasının hat verisini tutar.
export interface GebzeRoute {
  eyebrow: string;
  heading: string;
  linesLabel: string;
  lines: string[];
  timeNote: string;
  landmark: string;
}

export const gebzeRoute: GebzeRoute = {
  eyebrow: "GEBZE'DEN ULAŞIM",
  heading: "Gebze'den Merkezimize Ulaşım",
  linesLabel: "Gebze'den merkeze otobüs hatları",
  lines: ["502", "440", "510", "515"],
  timeNote: "Hat bilgileri zamanla değişebilir; yola çıkmadan önce güncel durumu kontrol edin.",
  landmark: "Palandöken Eczanesi'nin üst katı, Farabi Devlet Hastanesi durağının karşısı.",
};

export interface GebzeBeforeVisit {
  eyebrow: string;
  heading: string;
  points: string[];
  homeService: { text: string; linkLabel: string; href: string };
}

export const gebzeBeforeVisit: GebzeBeforeVisit = {
  eyebrow: "GELMEDEN ÖNCE",
  heading: "Gelmeden Önce Bilmeniz Gerekenler",
  points: [
    "Randevusuz gelebilirsiniz.",
    "Test, ayar ve teknik servis gibi hizmetler randevuyla verildiği için gelmeden önce aramanızı öneririz.",
  ],
  homeService: {
    text: "Merkeze gelmekte zorlanıyorsanız evde hizmet de bir seçenek; Kocaeli genelinde, Gebze dahil verilir, ücretsizdir ve randevuyla planlanır.",
    linkLabel: "Evde işitme cihazı hizmeti",
    href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
  },
};

export interface GebzeShortcut {
  label: string;
  href: string;
}

export const gebzeShortcuts = {
  eyebrow: "KISA YOLLAR",
  heading: "Gelmeden Önce Göz Atabileceğiniz Sayfalar",
  items: [
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "SGK ile Cihaz Süreci", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Cihaz Deneme", href: "/uygulama-ayar/cihaz-deneme/" },
    { label: "Teknik Servis", href: "/servis-bakim/teknik-servis/" },
  ] as GebzeShortcut[],
};
