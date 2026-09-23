// FAQ hub for the Audio Service brand page (/markalar/audio-service).
// Renders through the shared BrandPageFaq component. The price question
// never states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const audioServiceFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Audio Service Hakkında Merak Edilenler",
  intro: "Audio Service modelleri, uzmanlık alanı ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Audio Service hangi ülkenin markası?",
          answer: "Audio Service, 1977'de Löhne, Almanya'da kurulan, bugün WS Audiology grubuna (Signia, Widex, Rexton) bağlı bir markadır.",
        },
        {
          question: "Audio Service hangi konuda öne çıkar?",
          answer: "Audio Service, kulak içi (ITE) işitme sistemleri konusundaki 40 yılı aşkın uzmanlığıyla tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Audio Service Stiline nedir?",
          answer: "Stiline, markanın stil odaklı, tasarım ve günlük kullanımı bir arada sunan öne çıkan ürün ailesidir.",
        },
        {
          question: "Audio Service Mood ve Quix arasındaki fark nedir?",
          answer: "Mood, dengeli bir bağlantı ve ses deneyimi sunarken, Quix daha erişilebilir bir fiyat noktasında pratik bir çözüm sunar.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Audio Service işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Audio Service kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Audio Service işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Mood, Quix veya Stiline), yerleşim tercihi ve şarjlı veya pilli olması belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
};
