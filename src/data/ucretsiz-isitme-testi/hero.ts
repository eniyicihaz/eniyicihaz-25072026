// Hero — H1 "İşitme Testi ve Ücretsiz İşitme Testi Rehberi". Ana arama niyeti
// ("işitme testi") H1'de; Darıca yerel bağlamı eyebrow, ilk paragraf ve CTA'da.
//
// Doğrulanmış mevcut bilgiler korundu: uzman odyometrist eşliğinde, herhangi bir
// ücret / satın alma taahhüdü olmadan, randevulu süreç, SGK anlaşmalı merkez.
// Doğrulanmamış vaatler ("aynı gün sonuç", "aynı gün test") KALDIRILDI: bunun yerine
// mevcut hero metnindeki "sonuçlar görüşmede sizinle birlikte değerlendirilir" kullanıldı.
// Eski hero'daki floating "Beltone Envision" marka kartı kaldırıldı (test sayfasında
// belirli bir marka öne çıkarılmaz).
//
// Görsel: mevcut, sayfaya özel temsili sahne (odyometrist, işitme testi uygulanan kişi,
// odyometri cihazı) — gerçek merkez fotoğrafı DEĞİL; alt metin bunu belirtir.
import { contactConfig } from "../../config/contact";
import type { PriceGuideHeroContent } from "../isitme-cihazi-fiyatlari/hero";

export const testHero: PriceGuideHeroContent = {
  eyebrow: "İşitme Testi Rehberi · Darıca",
  heading: "İşitme Testi ve Ücretsiz İşitme Testi Rehberi",
  lead:
    "İşitme testi, farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçülerek işitme durumunuzun değerlendirildiği bir muayenedir; sonuçlar odyogram adı verilen grafikte kaydedilir. Bu rehberde testin nasıl yapıldığını, neleri ölçtüğünü ve sonucun nasıl okunduğunu bulacaksınız.",
  supporting:
    "Darıca'daki SGK anlaşmalı merkezimizde işitme testi, uzman odyometrist eşliğinde ve herhangi bir ücret ya da satın alma taahhüdü olmadan yapılır. Darıca, Gebze ve Çayırova'dan gelen danışanlar için randevu süreci aynıdır.",
  ctaPrimary: { label: "Ücretsiz İşitme Testi İçin Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
  chips: ["Uzman odyometrist eşliğinde", "Satın alma taahhüdü yok", "Randevulu süreç", "SGK anlaşmalı merkez"],
  // Mevcut görsel, olduğu gibi: 1200 × 1101 (WebP).
  image: {
    src: "/images/pages/ucretsiz-isitme-testi-hero.webp",
    alt: "Bir odyometristin, kulaklık takan bir kişiye işitme testi uyguladığı; odyometri cihazı ve işitme cihazı örneklerinin göründüğü temsili sahne",
    width: 1200,
    height: 1101,
  },
};

export const testHeroExtra = { label: "Sonucun nasıl okunduğunu görün", href: "#sonuc-okuma" };
