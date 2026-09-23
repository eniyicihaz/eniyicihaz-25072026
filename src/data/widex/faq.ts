// FAQ hub for the Widex brand page (/markalar/widex). Renders through the
// shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const widexFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Widex Hakkında Merak Edilenler",
  intro: "Widex modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Widex hangi ülkenin markası?",
          answer: "Widex, 1956 yılında kurulmuş, Danimarka kökenli bir işitme cihazı üreticisidir.",
        },
        {
          question: "\"Less is more in natural hearing\" ne anlama gelir?",
          answer: "Bu, Widex'in sesi olabildiğince az işleyerek daha doğal bir işitme deneyimi sunmayı hedefleyen resmi ses felsefesidir.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Widex Allure nedir?",
          answer: "Widex Allure, markanın en güncel çip mimarisini taşıyan, RIC, BTE ve ITE seçenekleriyle sunulan model ailesidir.",
        },
        {
          question: "Widex SmartRIC kimler için uygundur?",
          answer: "Widex SmartRIC, arka plan gürültüsünü azaltmaya yönelik tasarımı nedeniyle gürültülü ortamlarda zorlanan kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "PureSound™ ve ZeroDelay nedir?",
          answer: "PureSound™, Widex'in ZeroDelay adı verilen düşük gecikmeli ses işleme yaklaşımıyla, sesi olabildiğince az işleyerek daha doğal bir deneyim sunmayı hedefleyen teknolojisidir.",
        },
        {
          question: "SoundSense Learn ne işe yarar?",
          answer: "SoundSense Learn, Widex Moment uygulaması üzerinden verdiğiniz karşılaştırmalı geri bildirimlerle ses tercihlerinizi öğrenen bir kişiselleştirme özelliğidir.",
        },
        {
          question: "Widex'in kulak çınlamasına yönelik bir çözümü var mı?",
          answer: "Evet. Uygun modellerde, kulak çınlamasını rahatlatmaya yönelik Widex Zen ve SoundRelax özellikleri sunulur.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Widex işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Widex kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Widex işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi, şarjlı veya pilli olması gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
