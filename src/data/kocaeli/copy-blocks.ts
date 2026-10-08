// Kocaeli landing page — page-scoped içerik (Faz 2 P2, Kocaeli V1).
// Genel işitme cihazı rehberi (cihaz türleri, fiyat, seçim, marka) bilinçli
// olarak kaldırıldı: bunlar kendi pillar sayfalarının konusu. Bu sayfa
// yalnızca "Kocaeli'nin hangi ilçesinden, nasıl gelirim / eve gelir misiniz"
// sorusunu yanıtlar.
// Kaynak: LOCAL_SOURCE_OF_TRUTH §2, §3, §7; SERVICE_SOURCE_OF_TRUTH H16.
// Hat bilgileri [TIME-SENSITIVE] — zaman notu yalnızca ilçe listesinde, bir kez.
export interface KocaeliDistrict {
  name: string;
  lines: string;
  /** Yalnızca gerçekten ayrı sayfası olan ilçeler link taşır. */
  href?: string;
}

export interface KocaeliDistricts {
  eyebrow: string;
  heading: string;
  intro: string;
  items: KocaeliDistrict[];
  timeNote: string;
}

export const kocaeliDistricts: KocaeliDistricts = {
  eyebrow: "İLÇELERDEN ULAŞIM",
  heading: "Kocaeli'nin Hangi İlçesinden Geliyorsunuz?",
  intro: "Merkezimize toplu taşımayla şu ilçelerden şu hatlarla ulaşabilirsiniz:",
  items: [
    { name: "Gebze", lines: "502, 440, 510, 515", href: "/gebze-isitme-cihazlari/" },
    { name: "Çayırova", lines: "550", href: "/cayirova-isitme-cihazlari/" },
    { name: "Beylikbağı", lines: "415, 425" },
    { name: "Dilovası", lines: "410" },
    { name: "Mutlukent", lines: "510" },
  ],
  timeNote: "Hat bilgileri zamanla değişebilir; yola çıkmadan önce güncel durumu kontrol edin.",
};

export interface KocaeliHomeService {
  eyebrow: string;
  heading: string;
  text: string;
  linkLabel: string;
  href: string;
}

export const kocaeliHomeService: KocaeliHomeService = {
  eyebrow: "EVDE HİZMET",
  heading: "Merkeze Gelemiyorsanız",
  text: "Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar; ücretsizdir ve randevuyla planlanır.",
  linkLabel: "Evde işitme cihazı hizmeti",
  href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
};

export const kocaeliShortcuts = {
  eyebrow: "KISA YOLLAR",
  heading: "İlgili Sayfalar",
  items: [
    { label: "Darıca Merkezimizin Sayfası", href: "/darica-isitme-cihazlari/" },
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "SGK ile Cihaz Süreci", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "İşitme Cihazları", href: "/isitme-cihazlari/" },
    { label: "İletişim", href: "/iletisim/" },
  ],
};
