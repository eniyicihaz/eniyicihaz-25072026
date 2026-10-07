// Small page-level content blocks that don't warrant their own component
// (redesign plan §1, Bölüm 7's possible-reasons list, Bölüm 8, Bölüm 10,
// Bölüm 11) — same convention as online-isitme-testi's inline-sections.ts.
// `pricingTerms` carries the retired considerations.ts's 5 real
// conditions (redesign plan §1: content preserved, section retired).
import { contactConfig } from "../../config";

export const possibleReasons = {
  intro: "Değerlendirilebilecek olası nedenler:",
  items: [
    "Programlama ve fitting ayarları",
    "Kulak kalıbı veya receiver uyumu",
    "Kullanım koşulları ve ortam",
    "Bakım ve teknik kontrol",
  ],
};

export const pricingSection = {
  eyebrow: "CİHAZ DENEMEK ÜCRETLİ Mİ?",
  heading: "Cihaz Denemek Ücretli mi?",
  body: "Merkezimizdeki yaklaşık 20 dakikalık cihaz demosu ücretsizdir. 7 güne kadar deneme ise cihaz satın alınarak yapılır: cihaz bedelini ödersiniz; uygun bulmazsanız 7 gün içinde iade edebilirsiniz ve ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; bu cihazlar merkezimizde demo olarak denenebilir.",
  termsIntro: "Deneme süresince dikkat edilmesi gereken birkaç nokta:",
  terms: [
    "Satın alarak deneme süresi en fazla 7 gündür.",
    "Deneme süresince cihazın özenle kullanılması önerilir.",
    "Yeni bir cihaza alışmak zaman alabilir; ilk izlenim süreç boyunca değişebilir.",
    "Deneyiminizi ara kontrol seansında paylaşmanız karar sürecinize yardımcı olur.",
    "Model bulunabilirliği stok durumuna göre değişebilir.",
  ],
  ctaLabel: "Hemen Bilgi Alın",
  ctaHref: contactConfig.phone.href,
};

export const brandsTeaser = {
  eyebrow: "MARKALAR",
  heading: "Farklı Markaların Teknoloji Yaklaşımlarını Deneyimleyin",
  body: "Çalıştığımız markaların her biri işitmeye farklı bir yaklaşımla çözüm sunar; deneme sürecinde size uygun olanı birlikte belirleyebiliriz.",
  linkLabel: "İşitme Cihazı Markaları",
  href: "/markalar/",
};

export const sgkSection = {
  eyebrow: "SGK DESTEĞİ",
  heading: "Cihaz Seçiminizi Yapmadan Önce SGK Desteğinizi de Öğrenin",
  body: "İşitme cihazı alımında SGK desteğinden yararlanıp yararlanamayacağınızı, deneme sürecine başlamadan önce öğrenebilirsiniz.",
  linkLabel: "SGK İşitme Cihazı Desteği",
  href: "/sgk-isitme-cihazi-odemesi/",
};
