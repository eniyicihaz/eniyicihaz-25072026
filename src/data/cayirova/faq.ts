// Çayırova landing page — SSS (P1-B). Kısa ve yalnızca doğrulanmış
// bilgiye dayalı: şube durumu, 550 hattı, randevusuz ziyaret, evde hizmet,
// deneme. Gebze SSS'inin soru/cevapları burada kopyalanmıyor. Deneme
// cevabı SERVICE_SOT §1.5 kanonik modelini kendi cümleleriyle veriyor.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cayirovaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çayırova'dan Gelecekler İçin Kısa Cevaplar",
  intro: "Merkezimize gelmeden önce en çok merak edilenler.",
  decisionCard: {
    title: "Çayırova'dan Randevu",
    points: [
      "Merkezimiz Darıca'da",
      "Çayırova'dan 550 numaralı hat",
      "Evde hizmet Çayırova'yı kapsar",
      "Ücretsiz işitme testi",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Ulaşım",
      items: [
        {
          question: "Çayırova'da merkeziniz var mı?",
          answer: "Hayır, Çayırova'da şubemiz bulunmuyor. Tüm hizmetlerimizi Darıca'daki merkezimizde veriyoruz.",
        },
        {
          question: "Çayırova'dan hangi otobüsle gelebilirim?",
          answer: "550 numaralı hat Çayırova'dan merkezimize ulaşımda kullanılabilir. Merkez, Farabi Devlet Hastanesi durağının karşısındadır.",
        },
        {
          question: "Önceden haber vermeden gelebilir miyim?",
          answer: "Randevusuz ziyaretleri kabul ediyoruz; işitme testi ve ayar gibi hizmetler randevuyla verildiğinden gelmeden önce aramanız en iyisidir.",
        },
      ],
    },
    {
      label: "Hizmet",
      items: [
        {
          question: "Evime gelerek hizmet veriyor musunuz?",
          answer: "Evet. Çayırova, Kocaeli genelinde verdiğimiz evde hizmetin kapsamındadır. Evde hizmet ücretsizdir ve randevu gerektirir.",
        },
        {
          question: "Cihazı almadan önce deneme imkânı var mı?",
          answer: "Merkezimizde cihazı yaklaşık 20 dakika ücretsiz deneyebilirsiniz. Daha uzun denemek isterseniz cihazı satın alarak 7 güne kadar kullanabilir, memnun kalmazsanız iade edip ödediğiniz tutarı kesintisiz geri alabilirsiniz. Bu 7 günlük deneme kulak içi cihazları kapsamaz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
