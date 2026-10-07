// Gebze landing page — CorporateHero verisi (P1-B, "Gebze'den Darıca
// merkezimize" modeli). Gebze'de şube yok; fiziksel merkez Darıca'da.
// Rakamlar ve hatlar yalnızca LOCAL_SOURCE_OF_TRUTH §5'ten:
// - Gebze'den gelen müşteri payı: yaklaşık %20 [TIME-SENSITIVE]
// - Gebze'den merkeze otobüs hatları: 502, 440, 510, 515 [TIME-SENSITIVE]
// Görsel (image/imageAlt) bu turda değiştirilmedi — hero görselleri ayrı
// P2 fazında ele alınacak.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const gebzeHero: CorporateHeroContent = {
  locationLabel: "Gebze'den Darıca Merkezimize",
  heading: "Gebze'den İşitme Cihazı Hizmeti",
  subheading:
    "Gebze'de şubemiz yok; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Danışanlarımızın yaklaşık beşte biri Gebze'den geliyor.",
  image: "/images/heroes/isitme-cihazi-turleri.webp",
  imageAlt: "Farklı işitme cihazı türlerini gösteren kavramsal ürün görseli",
  stats: [
    { value: "Yaklaşık %20", label: "Danışanlarımız Gebze'den" },
    { value: "4 Otobüs Hattı", label: "Gebze'den Merkeze" },
    { value: "Darıca", label: "Fiziksel Merkezimiz" },
  ],
  ctas: [
    { label: "Arayıp Randevu Alın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
  ],
};
