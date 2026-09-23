// FAQ hub for the /uygulama-ayar/kalip-alimi page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kalipAlimiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kalıp Alımı Hakkında Merak Edilenler",
  intro: "İşlem süreci, üretim süresi ve yenileme konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Kalıp Alımı Randevusu Almak İster misiniz?",
    points: ["Kulak muayenesiyle güvenli başlangıç", "Kişiye özel ölçü", "Renk ve malzeme seçeneği", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Kalıp alımı ağrılı mıdır?",
          answer:
            "Hayır; işlem sırasında hafif bir dolgunluk veya basınç hissi olabilir, ancak işlem ağrısız olmalıdır.",
        },
        {
          question: "Kalıp alımı ne kadar sürer?",
          answer:
            "İşlemin kendisi genellikle kısa sürer; malzemenin sertleşmesi için birkaç dakika beklenir.",
        },
      ],
    },
    {
      label: "Üretim",
      items: [
        {
          question: "Kalıbım ne zaman hazır olur?",
          answer:
            "Kalıbınız laboratuvarda üretilir; üretim genellikle birkaç iş günü sürer.",
        },
        {
          question: "Kalıbımın rengini seçebilir miyim?",
          answer:
            "Evet; çoğu laboratuvarda farklı renk ve malzeme sertliği seçenekleri sunulur.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Kulağımda kulak kiri varsa kalıp alınabilir mi?",
          answer:
            "Yoğun kulak kiri veya aktif bir enfeksiyon varsa, işlem güvenli hale gelene kadar ertelenir.",
        },
      ],
    },
    {
      label: "Yenileme",
      items: [
        {
          question: "Kalıbımı ne sıklıkla yenilemeliyim?",
          answer:
            "Yenileme sıklığı, kulak kanalınızdaki değişime ve kalıbın durumuna göre değişir; çocuklarda genellikle daha sık yenileme gerekir.",
        },
        {
          question: "Kalıbım artık iyi oturmuyor gibi hissediyorum, ne yapmalıyım?",
          answer:
            "Bu durumda yeni bir kalıp alımı için bizimle iletişime geçmeniz önerilir.",
        },
      ],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
