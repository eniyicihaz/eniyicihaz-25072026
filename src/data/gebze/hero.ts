// Gebze landing page — CorporateHero verisi (Faz 2 P2, Gebze V1).
// Konumlandırma: "Gebze'den Darıca'daki gerçek merkezimize ulaşım".
// Gebze'de şube yok; fiziksel merkez Darıca'da — hero bunu olumsuz açılışla
// değil, merkezin yeri + hat numaralarıyla anlatır.
// Kaynak: LOCAL_SOURCE_OF_TRUTH §1/§2/§5:
// - adres tarifi (Palandöken Eczanesi üst katı, Farabi Devlet Hastanesi
//   durağının karşısı, asansörle 1. kat) [DOĞRULANDI]
// - Gebze'den merkeze hatlar 502, 440, 510, 515 [DOĞRULANDI][TIME-SENSITIVE]
// "%20 Gebze'den" istatistiği hero'dan kaldırıldı (P2 audit kararı).
//
// Görsel: merkezin gerçek bekleme alanı fotoğrafı (ASSET_SOT §2,
// hakkimizda-bekleme-alani.webp, [DOĞRULANDI] D1; içerik değiştirilmedi).
// Darıca hero'su (dış cephe) ve ana sayfa hero'su (resepsiyon) ile aynı
// görsel değil; Gebze'den gelene "geleceğiniz gerçek merkez" hissini veren
// iç mekân karesi. 1536 px orijinal + yalnızca yeniden boyutlandırılmış
// 1024 px WebP varyantı (kadraj aynı).
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const gebzeHero: CorporateHeroContent = {
  compactHeading: true,
  locationLabel: "Gebze'den Darıca Merkezimize",
  heading: "Gebze'den İşitme Cihazı ve İşitme Testi İçin Darıca Merkezimize",
  subheading:
    "Tek fiziksel merkezimiz Darıca'dadır; Gebze'de şubemiz yok. Gebze'den işitme testi, cihaz seçimi ve SGK işlem desteği için gelebilir, bazı işlemleri uzaktan ayar veya evde hizmetle planlayabilirsiniz.",
  image: "/images/pages/hakkimizda-bekleme-alani.webp",
  imageAlt: "Avrasya İşitme Cihazları Darıca merkezinin gün ışığı alan bekleme alanı",
  imageWidth: 1536,
  imageHeight: 1024,
  imagePriority: true,
  scrimStrong: true, // parlak iç mekân fotoğrafı: metin kontrastı için
  // Mobilde hero dikey uzun (~670px) ve foto "cover" ile yüksekliğe göre
  // ölçeklenir (3:2 → ~1005px genişlik); bu yüzden dar ekranda sizes 100vw
  // değil ~1020px.
  imageSrcset:
    "/images/pages/hakkimizda-bekleme-alani-1024.webp 1024w, /images/pages/hakkimizda-bekleme-alani.webp 1536w",
  imageSizes: "(max-width: 768px) 1020px, 100vw",
  // Dar ekran (≤480 px): aynı gerçek fotoğrafın ortadan portre kırpılmış varyantı (hero kutusu uzun/dar olduğu için
  // yatay görselin yalnızca ~%34'ü görünüyordu; 1,0× dikey çözünürlük 1,5×'e çıkar). Masaüstü ve tablet aynı.
  imageMobile: { src: "/images/pages/hakkimizda-bekleme-alani-mobil.webp", media: "(max-width: 480px)" },
  stats: [
    { value: "Darıca", label: "Tek Fiziksel Merkezimiz" },
    { value: "1. Kat · Asansör", label: "Palandöken Eczanesi üst katı" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
  ],
  // Mobil öncelik sırası: Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5).
  ctas: [
    { label: "Bizi Arayın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href, variant: "outline" },
  ],
};
