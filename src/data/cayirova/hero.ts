// Çayırova landing page — CorporateHero verisi. Çayırova'da (Gebze gibi)
// gerçek bir fiziksel şube/merkez YOK (COMPANY.md §17: Çayırova "Öncelikli
// Hizmet Bölgesi", Darıca "Ana Merkez"). Hero'da Darıca hiç geçmiyor;
// konum/adres bilgisi yalnızca sayfanın sonundaki "Merkezimize Nasıl
// Ulaşabilirsiniz?" bölümünde veriliyor.
//
// Görsel: Darıca'nın gerçek fotoğrafı DEĞİL, Gebze'nin kullandığı ürün
// görseli de DEĞİL — üçüncü, kendine özgü bir görsel: mevcut projede zaten
// hazır olan, Darıca/Gebze/Çayırova/Kocaeli'yi işaretleyen AI-konsept
// hizmet-bölgesi haritası (homepage Hero slayt 5'te de kullanılıyor).
// Gerçek insan/klinik içermiyor, stok değil, Çayırova'yı gerçek bir
// fiziksel merkezmiş gibi göstermiyor — yalnızca hizmet bölgesini temsil
// eden bir harita grafiği.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";

export const cayirovaHero: CorporateHeroContent = {
  locationLabel: "Çayırova ve Çevresi",
  heading: "Çayırova'dan İşitme Cihazı Hizmeti",
  subheading:
    "İşitme kaybı fark etmeden ilerleyebilir. Çayırova'dan bize ulaşarak durumunuzu birlikte değerlendirebilir, size uygun işitme cihazı seçeneklerini ve SGK desteğini konuşabiliriz.",
  image: "/images/heroes/darica-gebze-cayirova-hizmet-bolgesi.webp",
  imageAlt: "Darıca, Gebze, Çayırova ve Kocaeli'yi işaretleyen, hizmet bölgesini temsil eden kavramsal harita görseli",
  stats: [
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "18+ Marka", label: "Seçenek Sunuyoruz" },
    { value: "2009'dan Beri", label: "Güvenilir Hizmet" },
  ],
  ctas: [
    { label: "Ücretsiz Değerlendirme Al", href: "/degerlendirme/ucretsiz-isitme-testi" },
    { label: "Bizi Arayın", href: contactConfig.phone.href, variant: "outline" },
  ],
};
