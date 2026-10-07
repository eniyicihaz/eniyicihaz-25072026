// Darıca landing page — CorporateHero verisi. CorporateHero, /hakkimizda
// için kurulmuş ama data-driven/generic bir component; homepage carousel
// yerine burada TEK, sabit bir Hero için yeniden kullanılıyor (plan onayı:
// "Hero carousel kullanılmayacak"). Gerçek resepsiyon/bekleme alanı
// fotoğrafı — /hakkimizda'nın kendi Hero'sunda kullandığı marka-duvarı
// fotoğrafından FARKLI bir gerçek fotoğraf, bu sayfada tekrar
// kullanılmıyor (görsel tekrarı yapılmaması kuralı).
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";

export const daricaHero: CorporateHeroContent = {
  locationLabel: "Darıca, Kocaeli",
  heading: "Darıca'da İşitme Cihazı",
  subheading:
    "Avrasya İşitme Cihazları 2009 yılında kurulmuştur. SGK anlaşmalı Darıca merkezimiz Ağustos 2024'te açılmıştır; Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz.",
  image: "/images/heroes/avrasya-isitme-merkezi-darica.webp",
  imageAlt: "Avrasya İşitme Cihazları'nın Darıca'daki merkezinin resepsiyon ve bekleme alanı",
  stats: [
    { value: "Ağustos 2024", label: "Darıca Merkezi Açılışı" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "18+ Marka", label: "Seçenek Sunuyoruz" },
  ],
  ctas: [
    { label: "Ücretsiz Değerlendirme Al", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Bizi Arayın", href: contactConfig.phone.href, variant: "outline" },
  ],
};
