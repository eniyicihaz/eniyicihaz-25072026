// FAQ hub for the A&M brand page (/markalar/am). Renders through the
// shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const amFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "A&M Hakkında Merak Edilenler",
  intro: "A&M modelleri, teknolojisi ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "A&M hangi gruba ait?",
          answer: "A&M Hearing, Signia, Widex ve Rexton'ın da içinde bulunduğu global WS Audiology grubunun bir markasıdır.",
        },
        {
          question: "A&M ürünleri nerede üretiliyor?",
          answer: "A&M'in XTM serisi, Sivantos India Private Limited'e bağlı Bengaluru, Hindistan'daki üretim merkezinde geliştirilir ve üretilir.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "A&M XTM serisi nedir?",
          answer: "XTM serisi, P4'ten P12'ye kadar farklı güç seviyelerinde ve A4 kulak içi seçeneğinde sunulan A&M'in temel ürün ailesidir.",
        },
        {
          question: "A&M XTM P12 kimler için uygundur?",
          answer: "A&M XTM P12, serinin en yüksek güç seviyesini sunan modelidir ve ileri derece işitme kaybı olan kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, A&M işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan A&M kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "A&M işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model (P4–P12 veya A4), güç seviyesi ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
};
