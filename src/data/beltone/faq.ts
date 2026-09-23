// FAQ hub for the Beltone brand page (/markalar/beltone). Renders
// through the shared BrandPageFaq component. The price question never
// states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const beltoneFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Beltone Hakkında Merak Edilenler",
  intro: "Beltone modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Beltone hangi ülkenin markası?",
          answer: "Beltone, 1940'ta Chicago, ABD'de kurulan, 2000 yılından bu yana GN Grubu'na (ReSound ile aynı çatı) bağlı bir markadır.",
        },
        {
          question: "Beltone hangi konuda öne çıkar?",
          answer: "Beltone, 85 yılı aşkın Amerikan mirası ve Envision ailesinin yapay zekâ destekli DNN ses işlemesiyle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Beltone Envision nedir?",
          answer: "Envision, Şubat 2025'te tanıtılan, yapay zekâ destekli DNN ses işlemesini taşıyan Beltone'un en güncel model ailesidir.",
        },
        {
          question: "Beltone Boost Max S kimler için uygundur?",
          answer: "Boost Max S, Bluetooth LE Audio/Auracast destekli ilk süper güç Beltone modelidir ve ileri-derin derece işitme kaybı olan kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Beltone işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Beltone kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Beltone işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Envision, Serene, Commence veya Boost Max S), teknoloji seviyesi ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
};
