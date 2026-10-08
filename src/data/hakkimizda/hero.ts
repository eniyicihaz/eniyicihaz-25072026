// Hakkımızda — CorporateHero verisi. Gerçek marka duvarı fotoğrafı ve
// company.ts/tagline'dan gelen doğrulanmış gerçeklerle (2009, SGK
// anlaşmalı, Darıca merkez) beslenir; uydurma rakam yok.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";

export const hakkimizdaHero: CorporateHeroContent = {
  locationLabel: "Darıca, Kocaeli",
  heading: "Darıca'da İşitme Sağlığına Adanmış Bir Merkez.",
  subheading: "Avrasya İşitme Cihazları 2009 yılında Afyon Merkez'de kurulmuştur. Ağustos 2024'te açılan Darıca merkezimiz; işitme değerlendirmesi, cihaz uygulaması ve satış sonrası destek sunan SGK anlaşmalı bir merkezdir.",
  image: "/images/pages/hakkimizda-hero-marka-duvari.webp",
  imageAlt: "Darıca Avrasya İşitme Cihazları merkezinin marka duvarı ve karşılama alanı",
  stats: [
    { value: "2009", label: "Kuruluş Yılı" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "Darıca'da", label: "Satış ve Uygulama Merkezi" },
  ],
};
