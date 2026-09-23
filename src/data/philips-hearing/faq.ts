// FAQ hub for the Philips Hearing brand page (/markalar/philips-hearing).
// Renders through the shared BrandPageFaq component. The price question
// never states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const philipsHearingFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Philips HearLink Hakkında Merak Edilenler",
  intro: "Philips HearLink kademeleri, teknolojisi ve SGK desteği hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Philips HearLink işitme cihazlarını kim üretiyor?",
          answer: "Philips HearLink, Philips ile Demant arasında yapılan bir lisans anlaşması kapsamında, Demant'ın Velox-S platformu üzerinde üretilir.",
        },
        {
          question: "Philips HearLink hangi konuda öne çıkar?",
          answer: "Philips HearLink, dünyaca tanınan Philips markasının güvenilirliğini, anlaşılır bir 50/40/30 kademe sistemiyle bir araya getirir.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "HearLink 50, 40 ve 30 arasındaki fark nedir?",
          answer: "HearLink 50 en kapsamlı özellik setini sunan üst kademedir; HearLink 40 dengeli bir orta kademe, HearLink 30 ise temel ihtiyaçlar için giriş kademesidir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Philips HearLink işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Philips HearLink kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Philips HearLink işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen kademe (50, 40 veya 30), yerleşim tercihi ve şarjlı veya pilli olması belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
};
