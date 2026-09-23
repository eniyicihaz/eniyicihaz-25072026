// FAQ hub for the Signia brand page (/markalar/signia) — see SIGNIA
// MASTER BLUEPRINT §9.12. Renders through the shared BrandPageFaq
// component. The price question never states a figure — only the
// variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const signiaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Signia Hakkında Merak Edilenler",
  intro: "Signia modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Signia hangi ülkenin markası?",
          answer: "Signia, Almanya kökenli WS Audiology (WSA) grubuna bağlı bir işitme cihazı markasıdır.",
        },
        {
          question: "\"Life sounds brilliant.\" ne anlama gelir?",
          answer: "\"Life sounds brilliant.\", Signia'nın işitme cihazlarını yapay zekâ destekli, doğal bir konuşma deneyimiyle konumlandıran marka sloganıdır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Signia Styletto nedir?",
          answer: "Signia Styletto, ince ve moda odaklı tasarımıyla öne çıkan bir kulak arkası (RIC) model ailesidir.",
        },
        {
          question: "Signia Silk kimler için uygundur?",
          answer: "Signia Silk, kalıp almaya gerek duymadan hızlı kullanım isteyen kulak içi cihaz kullanıcıları için uygundur.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Own Voice Processing nedir?",
          answer: "Own Voice Processing, kullanıcının kendi sesini daha doğal ve rahatsız etmeyen şekilde işleyen, Signia'ya özgü bir ses işleme yaklaşımıdır.",
        },
        {
          question: "Signia Assistant ne işe yarar?",
          answer: "Signia Assistant, uyumlu modellerde uygulama üzerinden kişiselleştirilmiş ses ayarı ve destek almanızı sağlayan yapay zekâ destekli bir asistandır.",
        },
        {
          question: "Signia'da yapay zekâ destekli model var mı?",
          answer: "Evet. Signia'nın güncel nesil modelleri, çevresel sesleri ve konuşmayı gerçek zamanlı analiz eden entegre bir yapay zekâ çipi kullanır.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Signia işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Signia kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Signia işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen model ailesi, teknoloji seviyesi, şarjlı veya pilli olması ve kulak içi kişiye özel üretim gibi tercihler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
};
