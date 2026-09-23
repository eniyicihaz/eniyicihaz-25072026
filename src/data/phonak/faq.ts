// FAQ hub for the Phonak brand page (/markalar/phonak) — see PHONAK
// MASTER BLUEPRINT §6.12. Renders through the shared BrandPageFaq
// component. Every answer reuses real facts already established
// elsewhere on this page (hero.ts, overview.ts, ecosystem.ts, models.ts).
// The price question (folded in from the blueprint's PriceFactors
// decision, §3.1) never states a figure — only the variables that shape
// price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const phonakFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Phonak Hakkında Merak Edilenler",
  intro: "Phonak modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Phonak hangi ülkenin markası?",
          answer: "Phonak, İsviçre merkezli Sonova Grubu'na bağlı bir işitme cihazı üreticisidir.",
        },
        {
          question: "Phonak'ın sloganı olan \"Life is on.\" ne anlama gelir?",
          answer: "\"Life is on.\", Phonak'ın işitme cihazlarını kesintisiz bağlantı ve aktif yaşama devam etme felsefesiyle konumlandıran marka sloganıdır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Phonak Audéo nedir?",
          answer: "Phonak Audéo, markanın en yaygın tercih edilen, kulak arkası (RIC) yerleşimli genel kullanım ailesidir.",
        },
        {
          question: "Phonak Naída kimler için uygundur?",
          answer: "Phonak Naída, ileri ve çok ileri derece işitme kayıpları için güçlendirilmiş bir model ailesidir.",
        },
        {
          question: "Phonak Sky nedir?",
          answer: "Phonak Sky, çocuk kullanıcıların ihtiyaçlarına göre geliştirilmiş pediatrik model ailesidir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Phonak'ta Bluetooth hem iPhone hem Android'de çalışır mı?",
          answer: "Evet. Uyumlu Phonak modelleri, ayrı bir aksesuara ihtiyaç duymadan hem iPhone hem Android cihazlarla doğrudan Bluetooth bağlantısı kurabilir.",
        },
        {
          question: "myPhonak uygulaması ne işe yarar?",
          answer: "myPhonak uygulaması, uyumlu cihazlarda ses programları arasında geçiş yapmayı, ses seviyesini ayarlamayı ve bağlantı/pil durumunu takip etmeyi sağlar.",
        },
        {
          question: "Roger sistemi nedir?",
          answer: "Roger, kalabalık ve gürültülü ortamlarda konuşmayı takip etmeyi kolaylaştıran, uyumlu Phonak modelleriyle çalışan bir uzaktan mikrofon sistemidir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Phonak işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Phonak kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Phonak işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi, şarjlı veya pilli olması ve kulak içi kişiye özel üretim gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
