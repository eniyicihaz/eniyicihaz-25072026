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

/** Süzülen cihaz (dekoratif; 3B görüntüleyicideki markasız temsili modelin karesi) — bkz. HeroDeviceStage. */
export interface HomeHeroDeviceStage {
  avifSrcset: string;
  webpSrcset: string;
  src: string;
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
  /** İkincil CTA (Ücretsiz İşitme Testi). Birincil aksiyon telefondur ve PhoneReach bloğundan gelir (contactConfig). */
  secondaryCta: HomeHeroLink;
  /** Üçüncül: ana numaranın WhatsApp bağlantısı (ziyaret kutusunun altında). */
  whatsappCta: HomeHeroLink;
  textLink: HomeHeroLink;
  definitionSentence: string;
  image?: HomeHeroImage;
  deviceStage?: HomeHeroDeviceStage;
}

export const homeHero: HomeHeroContent = {
  eyebrow: "Duymak, anlamaktır.",
  heading: "Darıca Avrasya İşitme Cihazları",
  description:
    "Darıca, Kocaeli'de SGK anlaşmalı işitme cihazı satış ve uygulama merkeziyiz. Ücretsiz işitme testi, cihaz seçimi, merkezde ücretsiz demo, bakım ve teknik destek hizmeti sunuyoruz.",
  visit:
    "Palandöken Eczanesi'nin üst katı, Farabi Devlet Hastanesi durağının karşısı. Randevusuz ziyaret kabul edilir.",
  // Hiyerarşi (işletme sahibi kararı, 2026-11-17 — telefonla ulaşılabilirlik): birincil aksiyon TELEFON; numara,
  // "23:59'a kadar" bilgisi ve "Bizi Arayın" butonu PhoneReach bloğundan gelir (tek kaynak: config/contact.ts).
  // İkincil: Ücretsiz İşitme Testi (aynı blokta, görsel olarak ikincil). Üçüncül: WhatsApp ve yol tarifi (ziyaret
  // kutusunun altında). Yalnızca ana numara kullanılır (MASTER_PLAN K2).
  secondaryCta: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  whatsappCta: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  textLink: { label: "Yol tarifi al", href: company.directionsHref },
  definitionSentence:
    "Avrasya İşitme Cihazları, Darıca, Kocaeli'de bulunan SGK anlaşmalı bir işitme cihazı satış ve uygulama merkezidir.",
  // Gerçek merkez fotoğrafı (D1), değiştirilmeden kullanılır. 1672×941.
  // Tek dosya olduğu için srcset yok; sizes düzene göre: masaüstünde iki
  // sütundan biri (~50vw), tablet ve mobilde tam genişlik.
  image: {
    src: "/images/heroes/avrasya-isitme-cihazlari-ofis.webp",
    srcset:
      "/images/heroes/avrasya-isitme-cihazlari-ofis-640.webp 640w, /images/heroes/avrasya-isitme-cihazlari-ofis-960.webp 960w, /images/heroes/avrasya-isitme-cihazlari-ofis.webp 1672w",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    alt: "Avrasya İşitme Cihazları'nın Darıca'daki merkezinin resepsiyon ve bekleme alanı",
    width: 1672,
    height: 941,
  },
  // Süzülen cihaz: 3B görüntüleyicideki (BteViewer3D) markasız, temsili kulak arkası (BTE) modelin BAŞLANGIÇ KARESİ;
  // aynı model, aynı malzeme, aynı ışık, şeffaf zemin. Canlı sahneden üretilir: tools/bte-model/make-hero-frame.cjs
  // (model veya malzeme değişirse yeniden çalıştırılır). Ayrıntı: docs/tech/BTE_3D_VIEWER.md §12.
  // Önceki görsel (sahibin fotoğrafından kesilmiş gerçek cihaz, hero-device-bte-{320,480}, 480×394) silinmedi; geri
  // dönmek için bu kayıt eski dosya adları ve ölçüleriyle değiştirilir (yatay görsel için sahne stili duruyor).
  deviceStage: {
    avifSrcset: "/images/homepage/hero-device-bte3d-240.avif 240w, /images/homepage/hero-device-bte3d-360.avif 360w",
    webpSrcset: "/images/homepage/hero-device-bte3d-240.webp 240w, /images/homepage/hero-device-bte3d-360.webp 360w",
    src: "/images/homepage/hero-device-bte3d-240.webp",
    width: 360,
    height: 480,
  },
};
