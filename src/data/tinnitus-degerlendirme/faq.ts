// FAQ hub for the /degerlendirme/tinnitus-degerlendirme page. Renders
// through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. Same honest,
// mechanism-focused answer style as every prior Değerlendirme page's
// faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const tinnitusDegerlendirmeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Tinnitus Değerlendirmesi Hakkında Merak Edilenler",
  intro: "Değerlendirme süreci, olası nedenler ve sonraki adımlar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Tinnitus Değerlendirmesi Randevusu Almak İster misiniz?",
    points: ["Kapsamlı öykü ve odyometri", "Perde ve şiddet eşleştirmesi", "THI anket değerlendirmesi", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Tinnitus değerlendirmesi nedir?",
          answer:
            "Kulak çınlaması şikayetinizin olası nedenlerini araştırmaya yönelik; öykü alma, odyometri ve tinnitus eşleştirme yöntemlerini içeren kapsamlı bir işitme muayenesidir.",
        },
        {
          question: "Tinnitus her zaman işitme kaybıyla mı ilişkilidir?",
          answer:
            "Hayır; tinnitus sıklıkla işitme kaybıyla birlikte görülse de, gürültü maruziyeti, kulak enfeksiyonu veya bazı ilaçlar gibi farklı nedenlerle de ortaya çıkabilir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Tinnitus değerlendirmesi ne kadar sürer?",
          answer:
            "Süre, öykünüzün detayına ve uygulanan test sayısına göre değişebilir; genellikle standart bir işitme testinden biraz daha uzun sürer.",
        },
        {
          question: "Perde ve şiddet eşleştirmesi ağrılı mıdır?",
          answer:
            "Hayır; bu ölçümler, size farklı referans sesler dinletilerek yapılan ağrısız bir değerlendirmedir.",
        },
      ],
    },
    {
      label: "Yönlendirme",
      items: [
        {
          question: "Değerlendirme sonrası her zaman bir cihaz mı önerilir?",
          answer:
            "Hayır; öneri, değerlendirme bulgularınıza göre değişir. Bazı durumlarda yalnızca izlem veya bir KBB yönlendirmesi yeterli olabilir.",
        },
        {
          question: "Tek taraflı çınlamamı ne zaman değerlendirtmeliyim?",
          answer:
            "Tek taraflı veya nabızla uyumlu çınlama fark ederseniz, vakit kaybetmeden bir uzmana başvurmanız önerilir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Değerlendirme sonrası ses üreteci desteği herkese uygun mudur?",
          answer:
            "Uygunluk kişiden kişiye değişir; detaylı bilgi için Tinnitus Çözümleri sayfamızı inceleyebilir veya bir odyometriste danışabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
