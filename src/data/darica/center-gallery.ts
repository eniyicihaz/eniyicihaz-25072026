// Darıca hub — "Ekibimiz ve Merkezimiz" (CenterGallery). Ayrı bir
// "Neden Avrasya" pazarlama bloğu yerine ekip unvanları + merkezin gerçek
// fotoğrafları. Kaynak: BUSINESS_SOURCE_OF_TRUTH §4 (unvanlar: odyolog,
// odyometrist, teknik servis personeli — isim/fotoğraf yayın rızası ayrıca
// onay bekliyor, bu yüzden yalnızca unvan), kuruluş 2009 / Darıca merkezi
// Ağustos 2024 (B2: "2009'dan beri Darıca'da" izlenimi verilmez).
// "uzman", "yetkin", "uzman kadro" kullanılmıyor.
//
// Görseller işletmenin gerçek merkez fotoğrafları (D1); width/height gerçek
// ölçüler (CLS). Konum kartı yazısı doğrulanmamış "kolay bulunabilir"
// yerine doğrulanmış tarif.
import type { CenterGalleryContent } from "../../components/shared/CenterGallery/CenterGallery.astro";

export const daricaCenterGallery: CenterGalleryContent = {
  badge: "Ekip ve Merkez",
  heading: "Ekibimiz ve Merkezimiz",
  paragraphs: [
    "2009'da kurulan Avrasya İşitme Cihazları'nın Darıca merkezi Ağustos 2024'te hizmete açıldı.",
    "Merkezimizde odyolog, odyometrist ve teknik servis personelimiz görev yapıyor. İşitme testi, cihaz uygulaması ve kişiye özel ayar bu merkezde yapılır; teknik servis başvurularınızı da burada karşılıyoruz.",
  ],
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
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
