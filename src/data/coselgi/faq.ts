// FAQ hub for the Coselgi brand page (/markalar/coselgi). Renders
// through the shared BrandPageFaq component. The price question never
// states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const coselgiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Coselgi Hakkında Merak Edilenler",
  intro: "Coselgi modelleri, teknolojisi ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Coselgi hangi markaya bağlı?",
          answer: "Coselgi, dünyanın önde gelen işitme teknolojisi markalarından, Danimarka merkezli Widex'e bağlı bir markadır.",
        },
        {
          question: "Coselgi hangi konuda öne çıkar?",
          answer: "Coselgi, Acoustic Environment Technology ile bulunduğunuz ortamı analiz ederek ses ayarlarını otomatik optimize etmesiyle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Coselgi Effect ve Mojo arasındaki fark nedir?",
          answer: "Effect, geniş yerleşim seçenekleri sunan ana ürün ailesidir; Mojo ise günlük kullanım için pratik, şarjlı bir çözüm sunar.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Coselgi işitme cihazlarını karşılıyor mu?",
          answer:
            "Coselgi, SGK anlaşmalı merkezlerde sıkça tercih edilen markalar arasındadır. Destek, cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir.",
        },
        {
          question: "Coselgi işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Effect veya Mojo), yerleşim tercihi ve şarjlı veya pilli olması belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
};
