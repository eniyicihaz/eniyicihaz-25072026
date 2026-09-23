// FAQ hub for the Unitron brand page (/markalar/unitron). Renders
// through the shared BrandPageFaq component. The price question never
// states a figure — only the variables that shape price, per
// PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const unitronFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Unitron Hakkında Merak Edilenler",
  intro: "Unitron modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Unitron hangi ülkenin markası?",
          answer: "Unitron, 1964'ten bu yana Kitchener, Ontario'da (Kanada) faaliyet gösteren, bugün Phonak ile aynı çatı olan Sonova Grubu'na bağlı bir markadır.",
        },
        {
          question: "Unitron hangi konuda öne çıkar?",
          answer: "Unitron, AutoFocus 360'ın dört mikrofonlu binaural ağıyla konuşmanın geldiği yönü belirlemeye yardımcı olan yaklaşımıyla tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Unitron Smile nedir?",
          answer: "Smile, 2025'te tanıtılan, Unitron'un en gelişmiş ve en güncel işitme cihazı platformudur.",
        },
        {
          question: "Unitron Blu ve Moxi Vivante arasındaki fark nedir?",
          answer: "Blu, Sonova PRISM çipi ile daha geniş bağlantı özellikleri sunan güncel nesil aile iken, Moxi Vivante kanıtlanmış bir önceki nesil ailedir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Unitron işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Unitron kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Unitron işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Smile, Blu, Moxi Vivante, Stride veya Insera), teknoloji seviyesi ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
};
