// Darıca hub — CorporateHero verisi (Faz 2 P2, Darıca V1).
// Konumlandırma: "Darıca'daki merkezimize gelmeden önce bilmeniz
// gerekenler". Ana sayfa marka + genel hizmetleri anlatır; bu hero fiziksel
// merkezi ve ziyareti anlatır (markasız H1, adres odaklı açıklama).
// Kaynak: LOCAL_SOURCE_OF_TRUTH (adres tarifi, asansör/tekerlekli sandalye,
// walk-in + hizmet bazında randevu, ilk ziyaret ~1 saat / 1–2 saat),
// footer company.ts (saatler, yol tarifi linki).
//
// Görsel: merkezin gerçek dış cephe fotoğrafı (Aralık 2024 çekimi, kadraj
// korunarak 2000×1500 WebP). Ana sayfa hero'su resepsiyon fotoğrafını
// kullanır; iki hero aynı görseli tekrar etmez. Kırpma/yerleşim sayfada
// (darica-isitme-cihazlari.astro) ayarlı.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const daricaHero: CorporateHeroContent = {
  locationLabel: "Fevziçakmak, Darıca · Palandöken Eczanesi üst katı",
  heading: "Darıca'da İşitme Cihazı Merkezi",
  subheading:
    "Avrasya İşitme Cihazları'nın Darıca merkezi Fevziçakmak'ta, Palandöken Eczanesi'nin üst katında; Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; ilk ziyaret işlemlere göre yaklaşık 1 saat (1–2 saat) sürer.",
  image: "/images/heroes/darica-dis-cephe.webp",
  imageAlt: "Darıca'da Palandöken Eczanesi'nin üst katındaki Avrasya İşitme Cihazları merkezinin bina cephesi ve tabelaları",
  imageWidth: 2000,
  imageHeight: 1500,
  imagePriority: true,
  // Mobilde 640/1000 w, masaüstünde (~600 px alan, 2x) 1000/1600 w seçilir.
  imageSrcset:
    "/images/heroes/darica-dis-cephe-640.webp 640w, /images/heroes/darica-dis-cephe-1000.webp 1000w, /images/heroes/darica-dis-cephe-1600.webp 1600w, /images/heroes/darica-dis-cephe.webp 2000w",
  imageSizes: "(max-width: 768px) 100vw, 50vw",
  // Ziyaret bilgileri — ana sayfanın güven bölümünü (2009, SGK, 18 marka)
  // tekrar etmek yerine. Saatlerin kendisi konum bölümünde company.hours'tan.
  stats: [
    { value: "Pazartesi–Cumartesi", label: "Pazar ve resmî tatillerde kapalı" },
    { value: "1. Kat · Asansör", label: "Tekerlekli sandalyeye uygun" },
    { value: "Randevusuz Ziyaret", label: "Hizmetler randevuyla verilir" },
  ],
  // Mobil öncelik sırası: Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5).
  ctas: [
    { label: "Bizi Arayın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href, variant: "outline" },
  ],
};
