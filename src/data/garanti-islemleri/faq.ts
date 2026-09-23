// FAQ hub for the /servis-bakim/garanti-islemleri page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const garantiIslemleriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Garanti İşlemleri Hakkında Merak Edilenler",
  intro: "Kapsam, belgeler ve süreç konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Garanti Kapsamınızı Öğrenmek İster misiniz?",
    points: ["Net kapsam bilgisi", "Belgeli süreç", "Yetkili servis ağı", "Ücretsiz değerlendirme"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Garanti süresi ne kadardır?",
          answer:
            "Garanti süresi, cihaz markası ve modeline göre değişir; kesin süre satın alma sırasında sizinle paylaşılır.",
        },
        {
          question: "Garanti talebi için ne gereklidir?",
          answer:
            "Satın alma faturanız ve garanti belgeniz gereklidir.",
        },
      ],
    },
    {
      label: "Kapsam",
      items: [
        {
          question: "Su teması garanti kapsamında mıdır?",
          answer:
            "Hayır; su teması gibi kullanıcı kaynaklı hasarlar genellikle garanti kapsamı dışında kalır.",
        },
        {
          question: "Şarjlı pilim zayıflarsa garanti kapsamında mıdır?",
          answer:
            "Pilin doğal kullanım ömrü sonunda kapasite kaybetmesi genellikle bir üretim kusuru olarak değerlendirilmez.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Garanti talebim ne kadar sürede sonuçlanır?",
          answer:
            "Süre, sorunun teşhisine ve gerekiyorsa üretici servisine gönderim sürecine göre değişir.",
        },
      ],
    },
    {
      label: "Garanti vs Değişim",
      items: [
        {
          question: "Cihazımdan memnun değilim, bu garanti kapsamında mı?",
          answer:
            "Hayır; memnuniyet veya ihtiyaç değişikliği kaynaklı durumlar Kolay Değişim güvencemiz kapsamındadır, garanti kapsamında değildir.",
        },
        {
          question: "İkinci el aldığım cihazın garantisi geçerli mi?",
          answer:
            "Bu, cihaz markasına ve satın alma koşullarına göre değişir; garanti devri mümkün olabilir veya olmayabilir.",
        },
      ],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
