// Çayırova landing page — CorporateHero verisi (P1-B). Çayırova'da fiziksel
// şube YOK; merkez Darıca'da. Çayırova için doğrulanmış yerel bilgi
// sınırlı (LOCAL_SOURCE_OF_TRUTH §6): merkeze ulaşımda 550 numaralı
// otobüs hattı [TIME-SENSITIVE] ve evde hizmet alanı. Müşteri payı,
// mahalle, mesafe gibi bilgiler [VERİ BEKLENİYOR] — kullanılmıyor.
// Önceki "2009'dan Beri" istatistiği, Çayırova'da 2009'dan beri hizmet
// verildiği izlenimi yarattığı için kaldırıldı.
// Görsel (image/imageAlt) bu turda değiştirilmedi — hero görselleri ayrı
// P2 fazında ele alınacak.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const cayirovaHero: CorporateHeroContent = {
  locationLabel: "Çayırova'dan Darıca Merkezimize",
  heading: "Çayırova'dan İşitme Cihazı Hizmeti",
  subheading:
    "Çayırova'da şubemiz yok. Çayırova'dan gelen danışanlarımıza Darıca'daki merkezimizde hizmet veriyoruz; merkezimize Çayırova'dan 550 numaralı otobüs hattıyla ulaşabilirsiniz.",
  image: "/images/heroes/darica-gebze-cayirova-hizmet-bolgesi.webp",
  imageAlt: "Darıca, Gebze, Çayırova ve Kocaeli'yi işaretleyen, hizmet bölgesini temsil eden kavramsal harita görseli",
  stats: [
    { value: "Hat 550", label: "Çayırova'dan Merkeze" },
    { value: "Darıca", label: "Fiziksel Merkezimiz" },
    { value: "Evde Hizmet", label: "Çayırova Dahil" },
  ],
  ctas: [
    { label: "Arayıp Randevu Alın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
  ],
};
