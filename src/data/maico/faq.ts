// FAQ hub for the Maico brand page (/markalar/maico). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const maicoFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "MAICO Hakkında Merak Edilenler",
  intro: "MAICO serileri, mirası ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "MAICO hangi konuda öne çıkar?",
          answer: "MAICO, 1937'de \"audiometer\" (odyometre) terimini literatüre kazandıran, odyolojik ölçüm biliminde köklü bir mirasa sahip bir markadır.",
        },
        {
          question: "MAICO hangi gruba bağlı?",
          answer: "MAICO, 1995 yılından bu yana Oticon ve Bernafon ile aynı çatı olan Demant Grubu'na bağlıdır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "MAICO hangi yerleşim seçeneklerini sunar?",
          answer: "MAICO, Bluetooth'lu, kulak arkası (BTE) ve kulak içi (ITE) olmak üzere üç temel yerleşim kategorisinde sunulur.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, MAICO işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan MAICO kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "MAICO işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen seri (Bluetooth, kulak arkası veya kulak içi) ve teknoloji seviyesi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
};
