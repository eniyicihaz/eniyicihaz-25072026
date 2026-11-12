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
  // Search Console (2026-05-01→2026-11-09): aranan biçim "darıca işitme cihazları (merkezi)" (çoğul) — başlık/H1 aynı biçimde.
  heading: "Darıca'da İşitme Cihazları Merkezi",
  subheading:
    "Avrasya İşitme Cihazları'nın Darıca merkezi Fevziçakmak'ta, Palandöken Eczanesi'nin üst katında; Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; ilk ziyaret işlemlere göre yaklaşık 1 saat (1–2 saat) sürer.",
  image: "/images/heroes/darica-dis-cephe.webp",
  imageAlt: "Darıca'da Palandöken Eczanesi'nin üst katındaki Avrasya İşitme Cihazları merkezinin bina cephesi ve tabelaları",
  imageWidth: 2000,
  imageHeight: 1500,
  imagePriority: true,
  // LCP öğesi bu fotoğraf. AVIF (q50) önce, WebP yedek; aynı fotoğraf, aynı genişlikler. Mobilde (412 px × 1,75 DPR ≈ 720 px)
  // AVIF 800 w (38 KB) seçilir — önceki 1000 w WebP 113 KB idi. Görsel fark: docs/tech/PERFORMANCE_LCP.md.
  imageAvifSrcset:
    "/images/heroes/darica-dis-cephe-640.avif 640w, /images/heroes/darica-dis-cephe-800.avif 800w, /images/heroes/darica-dis-cephe-1000.avif 1000w, /images/heroes/darica-dis-cephe-1600.avif 1600w",
  imageSrcset:
    "/images/heroes/darica-dis-cephe-640.webp 640w, /images/heroes/darica-dis-cephe-800.webp 800w, /images/heroes/darica-dis-cephe-1000.webp 1000w, /images/heroes/darica-dis-cephe-1600.webp 1600w, /images/heroes/darica-dis-cephe.webp 2000w",
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
