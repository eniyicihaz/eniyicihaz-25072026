// Darıca hub — CorporateHero verisi (Faz 2 P2, Darıca V1).
// Konumlandırma: "Darıca'daki merkezimize gelmeden önce bilmeniz
// gerekenler". Ana sayfa marka + genel hizmetleri anlatır; bu hero fiziksel
// merkezi ve ziyareti anlatır (markasız H1, adres odaklı açıklama).
// Kaynak: LOCAL_SOURCE_OF_TRUTH (adres tarifi, asansör/tekerlekli sandalye,
// walk-in + hizmet bazında randevu, ilk ziyaret ~1 saat / 1–2 saat),
// footer company.ts (saatler, yol tarifi linki).
//
// Görsel: işletmenin gerçek resepsiyon/bekleme alanı fotoğrafı (D1). Ana
// sayfa artık bu fotoğrafı kullanmıyor; bu sayfaya özgü. 1672×941 gerçek
// ölçü; crop CSS'te değişmedi (object-position center 65%).
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const daricaHero: CorporateHeroContent = {
  locationLabel: "Fevziçakmak, Darıca · Palandöken Eczanesi üst katı",
  heading: "Darıca'da İşitme Cihazı Merkezi",
  subheading:
    "Avrasya İşitme Cihazları'nın Darıca merkezi Fevziçakmak'ta, Palandöken Eczanesi'nin üst katında; Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; ilk ziyaret işlemlere göre yaklaşık 1 saat (1–2 saat) sürer.",
  image: "/images/heroes/avrasya-isitme-merkezi-darica.webp",
  imageAlt: "Avrasya İşitme Cihazları'nın Darıca'daki merkezinin resepsiyon ve bekleme alanı",
  imageWidth: 1672,
  imageHeight: 941,
  imagePriority: true,
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
