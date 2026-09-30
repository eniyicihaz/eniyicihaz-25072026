// Gebze landing page — CorporateHero verisi. Revizyon: Hero, Gebze'den
// hizmet arayan kullanıcının İHTİYACINA odaklanıyor — konum açıklaması
// (Darıca, adres, "ne kadar yakın") kasıtlı olarak Hero'dan çıkarıldı ve
// yalnızca kullanıcının karar aşamasında ihtiyaç duyacağı konum bölümüne
// (`src/data/gebze/location.ts`) bırakıldı. Hero'da "Darıca" kelimesi
// GEÇMEZ.
// - `locationLabel`, component'in sabit MapPin rozetiyle "buradayız" değil
//   "bu bölgeye hizmet veriyoruz" okunacak şekilde "Gebze ve Çevresi".
// - `image`/`imageAlt`: Darıca sayfasıyla AYNI gerçek merkez fotoğrafı
//   KULLANILMIYOR. Bunun yerine, projede zaten hazır, gerçek insan/klinik
//   görüntüsü İÇERMEYEN, ürün-temelli bir AI-konsept görsel
//   (isitme-cihazi-turleri.webp — homepage Hero slayt 2'de de kullanılan,
//   bu proje için özel üretilmiş, stok OLMAYAN bir görsel) yeniden
//   kullanılıyor. `isitme-testi-darica.webp` bilinçli olarak SEÇİLMEDİ —
//   fotogerçekçi insan/klinik sahnesi içeriyor, Gebze'de gerçek bir
//   muayene sahnesi gibi yanlış anlaşılma riski taşıyor.
// - stats: "Darıca'da" değeri kaldırıldı, yerine kullanıcı-faydası odaklı
//   "Ücretsiz İlk Değerlendirme" kondu.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";

export const gebzeHero: CorporateHeroContent = {
  locationLabel: "Gebze ve Çevresi",
  heading: "Gebze'den İşitme Cihazı Hizmeti",
  subheading:
    "Gebze'de işitme cihazı arıyorsanız, ihtiyacınızı birlikte değerlendirip size uygun cihazı ve SGK sürecini anlatalım. Telefon veya WhatsApp'tan ulaşın, ilk adımı birlikte atalım.",
  image: "/images/heroes/isitme-cihazi-turleri.webp",
  imageAlt: "Farklı işitme cihazı türlerini gösteren kavramsal ürün görseli",
  stats: [
    { value: "Ücretsiz", label: "İlk Değerlendirme" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "18+ Marka", label: "Seçenek Sunuyoruz" },
  ],
  ctas: [
    { label: "Ücretsiz Değerlendirme Al", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Bizi Arayın", href: contactConfig.phone.href, variant: "outline" },
  ],
};
