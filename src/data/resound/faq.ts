// FAQ hub for the ReSound brand page (/markalar/resound). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const resoundFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "ReSound Hakkında Merak Edilenler",
  intro: "ReSound modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "ReSound hangi ülkenin markası?",
          answer: "ReSound, kökleri 1943'e uzanan, bugün Danimarka merkezli GN Grubu'na bağlı bir işitme cihazı markasıdır.",
        },
        {
          question: "ReSound hangi konuda öne çıkar?",
          answer: "ReSound, kablosuz bağlantı teknolojilerinde erken adım atan yaklaşımı ve M&RIE ile mekansal işitmeye verdiği önemle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "ReSound Vivia nedir?",
          answer: "ReSound Vivia, derin öğrenme destekli ses işleme ve tam Auracast desteği sunan, markanın en güncel premium model ailesidir.",
        },
        {
          question: "ReSound Nexia kimler için uygundur?",
          answer: "ReSound Nexia, Auracast bağlantı özelliklerini ve geniş model seçeneklerini (RIC, BTE, ITE) önceliklendiren kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "M&RIE nedir?",
          answer: "M&RIE (Microphone & Receiver-In-Ear), geleneksel dış mikrofonlara ek olarak kulak kanalına yerleştirilen üçüncü bir mikrofon içeren, ReSound'a özgü bir tasarımdır.",
        },
        {
          question: "Auracast nedir?",
          answer: "Auracast, uygun donanıma sahip ortamlarda (havalimanı, tiyatro gibi) yayın sesine doğrudan bağlanmayı sağlayan yeni nesil bir Bluetooth ses standardıdır.",
        },
        {
          question: "ReSound Assist ne işe yarar?",
          answer: "ReSound Assist, ReSound Smart 3D uygulaması üzerinden kliniğe gitmeden uzaktan ince ayar ve destek almanızı sağlayan bir tele-odyoloji hizmetidir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, ReSound işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan ReSound kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "ReSound işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi ve şarjlı veya pilli olması gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
};
