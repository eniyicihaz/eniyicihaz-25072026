// Kocaeli landing page — CorporateHero verisi (Faz 2 P2, Kocaeli V1).
// Rol (LOCAL_SOURCE_OF_TRUTH §7): il düzeyinde YÖNLENDİRİCİ sayfa; Darıca
// hub'ının ve pillar sayfaların önüne geçmez. Tek fiziksel merkez Darıca'da;
// Kocaeli'nin başka ilçesinde şube yok.
//
// Görsel: bilinçli olarak YOK. Önceki panoramik kavramsal/AI görsel
// (kocaeli-isitme-cihazlari.webp) coğrafi olarak tutarsız konum işaretleri
// taşıyordu ve ASSET_SOT'ta kaynağı doğrulanmamış. Dosya şimdilik
// silinmedi; yalnızca bu sayfadaki kullanımı kaldırıldı (silme kararı ayrı).
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const kocaeliHero: CorporateHeroContent = {
  compactHeading: true,
  locationLabel: "Kocaeli geneli",
  heading: "Kocaeli İşitme Cihazları: Tek Merkezimiz Darıca'da",
  subheading:
    "Fiziksel merkezimiz Darıca'da, Palandöken Eczanesi'nin üst katındadır; Farabi Devlet Hastanesi durağının karşısındadır. Kocaeli'nin diğer ilçelerinden toplu taşımayla gelebilir, merkeze gelemiyorsanız evde hizmet alabilirsiniz.",
  stats: [
    { value: "Darıca", label: "Tek fiziksel merkezimiz" },
    { value: "Kocaeli geneli", label: "Evde hizmet" },
    { value: "Ücretsiz", label: "İşitme testi" },
  ],
  // Mobil öncelik sırası: Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5).
  ctas: [
    { label: "Bizi Arayın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href, variant: "outline" },
  ],
};
