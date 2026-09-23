// FAQ hub for the NuEar brand page (/markalar/nuear). Renders through the
// shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const nuearFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "NuEar Hakkında Merak Edilenler",
  intro: "NuEar modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "NuEar hangi ülkenin markası?",
          answer: "NuEar, 1976 yılında San Diego, Kaliforniya'da kurulan, bugün Amerikan menşeli Starkey grubuna bağlı bir işitme cihazı markasıdır.",
        },
        {
          question: "NuEar hangi konuda öne çıkar?",
          answer: "NuEar, işitme cihazını Hear Circle uygulaması üzerinden günlük aktivite ve sağlık takibiyle birleştiren yaklaşımıyla tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "NuEar NXG AI nedir?",
          answer: "NuEar NXG AI, güncellenmiş ses işleme yaklaşımını Hear Circle uygulamasıyla birleştiren markanın en güncel model ailesidir.",
        },
        {
          question: "NuEar Miniscopic Synergy iQ kimler için uygundur?",
          answer: "NuEar Miniscopic Synergy iQ, kişiye özel üretilen kulak içi yerleşimi tercih eden kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Hear Circle uygulaması ne işe yarar?",
          answer: "Hear Circle, ses ayarlarını yönetmenin yanı sıra adım ve aktivite takibi yapmanızı, uygun modellerde ise düşme anında seçtiğiniz kişilere bildirim gönderilmesini sağlayan NuEar uygulamasıdır.",
        },
        {
          question: "NuEar cihazları uzaktan ayarlanabilir mi?",
          answer: "Uygun modellerde, Hear Circle uygulaması üzerinden kliniğe gitmeden uzaktan ince ayar talep edilebilir.",
        },
        {
          question: "NuEar'da şarjlı model var mı?",
          answer: "Evet. NXG AI ve Circa gibi birçok NuEar modeli lityum-iyon şarjlı sistemle çalışır.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, NuEar işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan NuEar kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "NuEar işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi ve şarjlı veya pilli olması gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
};
