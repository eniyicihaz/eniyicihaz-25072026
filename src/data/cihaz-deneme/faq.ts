// FAQ hub for the /uygulama-ayar/cihaz-deneme page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazDenemeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Deneme Hakkında Merak Edilenler",
  intro: "Deneme süresi, koşullar ve karar süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihaz Deneme Süreci Hakkında Bilgi Almak İster misiniz?",
    points: ["Satın alma yükümlülüğü yok", "Gerçek yaşam koşullarında test", "Ara kontrol desteği", "Ücretsiz"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihaz deneme süreci ne kadar sürer?",
          answer:
            "Süre, önerilen model ve stok durumuna göre değişebilir; net süre randevu sırasında sizinle paylaşılır.",
        },
        {
          question: "Deneme süresince cihazı satın almak zorunda mıyım?",
          answer:
            "Hayır; deneme süresi boyunca herhangi bir satın alma yükümlülüğünüz bulunmaz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Deneme sırasında ayar değişikliği yapılabilir mi?",
          answer:
            "Evet; ara kontrol seansında geri bildiriminize göre küçük ayarlar yapılabilir.",
        },
        {
          question: "Birden fazla model deneyebilir miyim?",
          answer:
            "Stok durumuna bağlı olarak, karşılaştırmalı bir deneme süreci değerlendirilebilir.",
        },
      ],
    },
    {
      label: "Koşullar",
      items: [
        {
          question: "Deneme süresince cihaza bir şey olursa ne yapmalıyım?",
          answer:
            "Cihazda herhangi bir sorun fark ederseniz, vakit kaybetmeden bizimle iletişime geçmeniz önerilir.",
        },
      ],
    },
    {
      label: "Karar Sonrası",
      items: [
        {
          question: "Denemeden memnun kalmazsam ne olur?",
          answer:
            "Memnun kalmadığınız bir modeli satın almak zorunda değilsiniz; ihtiyacınıza göre farklı bir model değerlendirilebilir.",
        },
        {
          question: "Satın almaya karar verirsem sonraki adım nedir?",
          answer:
            "Satın alma kararınızdan sonra, cihazınız kalıcı olarak uygulanır ve Kolay Değişim güvencemiz devreye girer.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
