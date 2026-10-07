// Hero — H1 "İşitme Testi ve Ücretsiz İşitme Testi Rehberi". Ana arama niyeti
// ("işitme testi") H1'de; Darıca yerel bağlamı eyebrow ve ikinci cümlede.
//
// Sadeleştirme: tek kısa tanım cümlesi (lead) + tek destek cümlesi; "Bu rehberde…" cümlesi
// kaldırıldı (içindekiler zaten bunu söylüyor). 3 chip. Telefon ana CTA, WhatsApp ikinci CTA,
// "Sonucun nasıl okunduğunu görün" içerik yönlendirmesi olarak kalır.
//
// Doğrulanmış mevcut bilgiler korundu: odyometrist eşliğinde, herhangi bir
// ücret / satın alma taahhüdü olmadan, randevulu süreç, SGK anlaşmalı merkez.
// Doğrulanmamış vaatler ("aynı gün sonuç", "aynı gün test") YAZILMAZ.
//
// GÖRSEL: public/images/pages/isitme-testi-odyometri-odasi.webp (WebP, 1536 × 1024, 3:2): odyometrist cihazı kullanırken, kulaklıklı bir kişi,
// ekranda odyogram. Sayfada bu grafiğin gerçek/örnek bir sonuç olduğuna dair hiçbir ifade yoktur.
import { contactConfig } from "../../config/contact";
import type { PriceGuideHeroContent } from "../isitme-cihazi-fiyatlari/hero";

export const testHero: PriceGuideHeroContent = {
  eyebrow: "İşitme Testi Rehberi · Darıca",
  heading: "İşitme Testi ve Ücretsiz İşitme Testi Rehberi",
  lead:
    "İşitme testi, farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçülmesiyle işitme durumunuzun değerlendirildiği bir işitme ölçümüdür; sonuçlar odyogram adı verilen grafikte kaydedilir.",
  supporting:
    "Darıca'daki SGK anlaşmalı merkezimizde randevuyla yapılır.",
  ctaPrimary: { label: "Ücretsiz İşitme Testi İçin Randevu Al", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
  chips: ["Odyometrist eşliğinde", "Ücretsiz değerlendirme", "Satın alma taahhüdü olmadan"],
  image: {
    src: "/images/pages/isitme-testi-odyometri-odasi.webp",
    alt: "İşitme testi sırasında odyometrist ve test odası",
    width: 1536,
    height: 1024,
  },
};

export const testHeroExtra = { label: "Sonucun nasıl okunduğunu görün", href: "#sonuc-okuma" };
