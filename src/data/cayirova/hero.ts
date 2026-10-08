// Çayırova landing page — CorporateHero verisi (Faz 2 P2, Çayırova V1).
// Konumlandırma: "Çayırova'dan Darıca'daki gerçek merkezimize ulaşım".
// Çayırova'da fiziksel şube YOK; merkez Darıca'da. Doğrulanmış yerel bilgi
// sınırlı (LOCAL_SOURCE_OF_TRUTH §6): 550 numaralı hat [TIME-SENSITIVE],
// merkezin adres tarifi ve evde hizmet alanı. Mesafe, süre, mahalle, durak
// gibi bilgiler [VERİ BEKLENİYOR] — kullanılmıyor.
//
// Görsel: bilinçli olarak YOK. Önceki kavramsal/AI hizmet bölgesi görseli
// (ana sayfa slaytıyla aynı rolde) kaldırıldı; uygun gerçek fotoğraf
// bulunmuyor ve sırf alan dolsun diye görsel eklenmiyor. CorporateHero
// görselsiz varyantı (gradyan zemin + tipografi) kullanılır.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const cayirovaHero: CorporateHeroContent = {
  locationLabel: "Merkezimiz Darıca'da",
  heading: "Çayırova'dan Darıca Merkezimize Nasıl Gelinir?",
  subheading:
    "İşitme merkezimiz Darıca'da, Palandöken Eczanesi'nin üst katındadır. Çayırova'dan 550 numaralı hatla ulaşabilirsiniz; hat bilgileri değişebilir, yola çıkmadan önce kontrol edin.",
  stats: [
    { value: "Hat 550", label: "Çayırova'dan merkeze" },
    { value: "Darıca", label: "Fiziksel merkezimiz" },
    { value: "Evde Hizmet", label: "Çayırova dahil" },
  ],
  // Mobil öncelik sırası: Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5).
  ctas: [
    { label: "Bizi Arayın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href, variant: "outline" },
  ],
};
