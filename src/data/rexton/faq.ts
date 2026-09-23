// FAQ hub for the Rexton brand page (/markalar/rexton). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const rextonFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Rexton Hakkında Merak Edilenler",
  intro: "Rexton modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Rexton hangi ülkenin markası?",
          answer: "Rexton, 1955'te Almanya'da kurulan, bugün WS Audiology grubuna (Signia ile aynı çatı) bağlı bir markadır.",
        },
        {
          question: "Rexton hangi konuda öne çıkar?",
          answer: "Rexton, Reach ailesinin güncel bağlantı teknolojisi ile BiCore ve MCore işlemci aileleriyle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Rexton BiCore ve MCore arasındaki fark nedir?",
          answer: "BiCore, dengeli bir ses işleme deneyimi sunarken, MCore temel işitme ihtiyaçları için daha sade bir yaklaşım sunar.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Rexton işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Rexton kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Rexton işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Reach, BiCore veya MCore) ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
};
