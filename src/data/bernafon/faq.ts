// FAQ hub for the Bernafon brand page (/markalar/bernafon). Renders
// through the shared BrandPageFaq component. The price question never
// states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const bernafonFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Bernafon Hakkında Merak Edilenler",
  intro: "Bernafon modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Bernafon hangi ülkenin markası?",
          answer: "Bernafon, 1946 yılında Bern, İsviçre'de kurulan, bugün Danimarka merkezli Demant Grubu'na bağlı bir işitme cihazı markasıdır.",
        },
        {
          question: "Bernafon hangi konuda öne çıkar?",
          answer: "Bernafon, hareketlerinizi algılayarak dinleme ayarlarını otomatik uyarlayan Smart Sensor teknolojisi ve konuşma anlaşılırlığına verdiği önemle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Bernafon Encanta nedir?",
          answer: "Bernafon Encanta, Smart Sensor ve Machine Learning 2.0 teknolojilerini taşıyan, markanın en güncel premium model ailesidir.",
        },
        {
          question: "Bernafon Encanta CIC kimler için uygundur?",
          answer: "Bernafon Encanta CIC, kişiye özel üretilen ve kulak kanalı içinde neredeyse görünmez bir yerleşim tercih eden kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Smart Sensor nedir?",
          answer: "Smart Sensor, baş ve vücut hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik olarak uyarlamaya yardımcı olan Bernafon'a özgü bir teknolojidir.",
        },
        {
          question: "Machine Learning 2.0 ne işe yarar?",
          answer: "Machine Learning 2.0, farklı dinleme ortamlarına uyum sağlamaya yardımcı olan, Bernafon'un güncel nesil ses işleme yaklaşımıdır.",
        },
        {
          question: "Easy Control-A uygulaması nedir?",
          answer: "Easy Control-A, uyumlu Bernafon modellerini akıllı telefon üzerinden yönetmenizi sağlayan companion uygulamadır.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Bernafon işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Bernafon kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Bernafon işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi ve şarjlı veya pilli olması gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
};
