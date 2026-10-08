// Ana sayfa — "Merkezimiz ve Ulaşım" bölümü (HomeLocal, Faz 2 P2 onay V1).
// Bilgiler yalnızca LOCAL_SOURCE_OF_TRUTH'tan:
//   §2 tarif (Palandöken Eczanesi üst katı, Farabi Devlet Hastanesi durağının
//      karşısı, asansörle 1. kat), asansör ve tekerlekli sandalye uygunluğu,
//      otopark var (ayrıntısı kayıtlı değil — yalnızca "otopark imkânı"),
//      randevusuz ziyaret + hizmet bazında randevu, hatlar [TIME-SENSITIVE].
// Çalışma saatleri ve adres footer `company` verisinden (tek kaynak).
// Görseller işletmenin gerçek merkez fotoğraflarıdır (D1); width/height
// dosyaların gerçek piksel ölçüleridir (CLS koruması).
export interface HomeLocalImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HomeLocalFact {
  label: string;
  text: string;
}

export interface HomeLocalContent {
  eyebrow: string;
  heading: string;
  intro: string;
  featureImage: HomeLocalImage;
  supportImages: HomeLocalImage[];
  locationImage: HomeLocalImage;
  locationCaption: string;
  facts: HomeLocalFact[];
  parking: string;
  regions: { text: string; links: { label: string; href: string }[] };
  hubLink: { label: string; href: string };
}

export const homeCenterGallery: HomeLocalContent = {
  eyebrow: "Merkezimiz ve Ulaşım",
  heading: "Darıca'daki Merkezimiz",
  intro:
    "İşitme testi, cihaz seçimi, demo, cihaz uygulaması, kişiye özel ayar ve teknik servis Darıca'daki merkezimizde yapılır. Avrasya İşitme Cihazları 2009 yılında kuruldu; Darıca merkezimiz Ağustos 2024'te açıldı.",
  featureImage: {
    src: "/images/pages/hakkimizda-danisma-odasi.webp",
    alt: "Darıca Avrasya İşitme Cihazları merkezinde danışma ve değerlendirme odası",
    width: 1214,
    height: 1295,
  },
  supportImages: [
    {
      src: "/images/pages/hakkimizda-bekleme-alani.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinin bekleme alanı",
      width: 1536,
      height: 1024,
    },
    {
      src: "/images/pages/hakkimizda-isitme-testi-odasi.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinde işitme testi odası",
      width: 1537,
      height: 1023,
    },
  ],
  locationImage: {
    src: "/images/pages/hakkimizda-tabela-cadde.webp",
    alt: "Darıca'da cadde üzerindeki Avrasya İşitme Cihazları tabelası",
    width: 1448,
    height: 1086,
  },
  locationCaption: "Palandöken Eczanesi'nin üst katı",
  facts: [
    {
      label: "Tarif",
      text: "Palandöken Eczanesi'nin üst katındayız; Farabi Devlet Hastanesi durağının karşısındayız.",
    },
    {
      label: "Erişim",
      text: "Merkez 1. kattadır ve asansörle çıkılır; tekerlekli sandalye ile ulaşıma uygundur.",
    },
    {
      label: "Ziyaret",
      text: "Randevusuz gelebilirsiniz. İşitme testi, cihaz ayarı ve teknik servis gibi hizmetler randevuyla verildiği için gelmeden önce aramanızı öneririz.",
    },
  ],
  parking: "Merkezimiz için otopark imkânı bulunuyor.",
  regions: {
    text: "Gebze'den 502, 440, 510 ve 515; Çayırova'dan 550 numaralı otobüs hatlarıyla gelebilirsiniz. Hat bilgileri değişebilir.",
    links: [
      { label: "Gebze'den ulaşım", href: "/gebze-isitme-cihazlari/" },
      { label: "Çayırova'dan ulaşım", href: "/cayirova-isitme-cihazlari/" },
    ],
  },
  hubLink: { label: "Darıca merkezimizi yakından tanıyın", href: "/darica-isitme-cihazlari/" },
};
