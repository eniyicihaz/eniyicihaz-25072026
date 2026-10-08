// Hero — H1 "İşitme Testi ve Ücretsiz İşitme Testi Rehberi". Ana arama niyeti
// ("işitme testi") H1'de; Darıca yerel bağlamı eyebrow ve ikinci cümlede.
//
// Sadeleştirme: tek kısa tanım cümlesi (lead) + tek destek cümlesi; "Bu rehberde…" cümlesi
// kaldırıldı (içindekiler zaten bunu söylüyor). 3 chip. Telefon ana CTA, WhatsApp ikinci CTA,
// "Sonucun nasıl okunduğunu görün" içerik yönlendirmesi olarak kalır.
//
// Doğrulanmış mevcut bilgiler korundu: odyometrist eşliğinde, ücretsiz test, walk-in
// kabul + hizmet bazında randevu, SGK anlaşmalı merkez. "Satın alma taahhüdü olmadan"
// ifadesi kaldırıldı (işletme sahibi kararı, Faz 2 P2).
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
    "Darıca'daki SGK anlaşmalı merkezimizde yapılır. Randevusuz gelebilirsiniz; test randevuyla verildiği için önce aramanız iyi olur.",
  ctaPrimary: { label: "Ücretsiz İşitme Testi İçin Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  chips: ["Odyometrist eşliğinde", "Ücretsiz değerlendirme", "Darıca'daki merkezde"],
  image: {
    src: "/images/pages/isitme-testi-odyometri-odasi.webp",
    alt: "İşitme testi sırasında odyometrist ve test odası",
    width: 1536,
    height: 1024,
    srcset:
      "/images/pages/isitme-testi-odyometri-odasi-640.webp 640w, /images/pages/isitme-testi-odyometri-odasi-1024.webp 1024w, /images/pages/isitme-testi-odyometri-odasi.webp 1536w",
    sizes: "(max-width: 1023px) 92vw, 420px",
  },
};

export const testHeroExtra = { label: "Sonucun nasıl okunduğunu görün", href: "#sonuc-okuma" };
