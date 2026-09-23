// FAQ hub for the Vista brand page (/markalar/vista). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const vistaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Vista Hakkında Merak Edilenler",
  intro: "Vista kademeleri, teknolojisi ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Vista hangi gruba bağlı?",
          answer: "Vista, dünyanın en büyük işitme cihazı üreticisi olan İsviçre merkezli Sonova Grubu'na (Phonak ve Unitron ile aynı çatı) bağlı bir markadır.",
        },
        {
          question: "Vista hangi konuda öne çıkar?",
          answer: "Vista, Sonova'nın Soundsuite OS teknolojisini Vista V ve Vista B gibi kademelerle erişilebilir bir fiyat noktasında sunmasıyla tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Vista V ve Vista B arasındaki fark nedir?",
          answer: "Vista V, Soundsuite OS'un en kapsamlı özellik setini ve Bluetooth bağlantısını sunan üst kademedir; Vista B ise dengeli bir orta kademe seçenektir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Vista işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Vista kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Vista işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen kademe (Vista V, B veya T), yerleşim tercihi ve şarjlı veya pilli olması belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
};
