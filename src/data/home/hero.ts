// Ana sayfa — tek, statik hero (Faz 2 P2, onay V1). 6 slaytlı carousel
// (src/components/hero/Hero/*) bu sayfada artık kullanılmıyor.
//
// Metinler kullanıcı onayıyla kilitli. Ziyaret bilgisi yalnızca
// LOCAL_SOURCE_OF_TRUTH §2'den: Palandöken Eczanesi üst katı, Farabi Devlet
// Hastanesi durağının karşısı, randevusuz ziyaret kabul edilir.
//
// `definitionSentence`: MedicalBusiness schema `description` alanı bu cümleyi
// kullanır. Önceki carousel'in slayt 1 gövde cümlesiyle birebir aynıdır;
// schema çıktısı bu adımda değişmez (schema değişikliği Faz 3 / ayrı onay).
//
// `image`: Bu adımda bilinçli olarak YOK. Hero görseli ayrıca hazırlanacak
// (gerçek merkez fotoğrafı veya onaylı yeni çekim). Görsel eklendiğinde
// HomeHero tek <img> olarak width/height, eager, fetchpriority="high" ve
// srcset/sizes ile render eder; görsel yokken metin tek sütun kalır.
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export interface HomeHeroImage {
  src: string;
  /** e.g. "/images/x-640.webp 640w, /images/x-1024.webp 1024w, /images/x-1600.webp 1600w" */
  srcset?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
}

export interface HomeHeroLink {
  label: string;
  href: string;
}

export interface HomeHeroContent {
  eyebrow: string;
  heading: string;
  description: string;
  visit: string;
  primaryCta: HomeHeroLink;
  secondaryCtas: HomeHeroLink[];
  textLink: HomeHeroLink;
  definitionSentence: string;
  image?: HomeHeroImage;
}

export const homeHero: HomeHeroContent = {
  eyebrow: "Duymak, anlamaktır.",
  heading: "Darıca Avrasya İşitme Cihazları",
  description:
    "Darıca, Kocaeli'de SGK anlaşmalı işitme cihazı satış ve uygulama merkeziyiz. Ücretsiz işitme testi, cihaz seçimi, merkezde ücretsiz demo ve 18 markada teknik servis hizmeti sunuyoruz.",
  visit:
    "Palandöken Eczanesi'nin üst katı, Farabi Devlet Hastanesi durağının karşısı. Randevusuz ziyaret kabul edilir.",
  primaryCta: { label: "Bizi Arayın", href: contactConfig.phone.href },
  secondaryCtas: [
    { label: "Yol Tarifi Al", href: company.directionsHref },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  ],
  textLink: { label: "Ücretsiz işitme testi hakkında bilgi alın", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  definitionSentence:
    "Avrasya İşitme Cihazları, Darıca, Kocaeli'de bulunan SGK anlaşmalı bir işitme cihazı satış ve uygulama merkezidir.",
  // Gerçek merkez fotoğrafı (D1), değiştirilmeden kullanılır. 1672×941.
  // Tek dosya olduğu için srcset yok; sizes düzene göre: masaüstünde iki
  // sütundan biri (~50vw), tablet ve mobilde tam genişlik.
  image: {
    src: "/images/heroes/avrasya-isitme-cihazlari-ofis.webp",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    alt: "Avrasya İşitme Cihazları'nın Darıca'daki merkezinin resepsiyon ve bekleme alanı",
    width: 1672,
    height: 941,
  },
};
