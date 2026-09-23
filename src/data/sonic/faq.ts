// FAQ hub for the Sonic brand page (/markalar/sonic). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const sonicFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Sonic Hakkında Merak Edilenler",
  intro: "Sonic modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Sonic hangi ülkenin markası?",
          answer: "Sonic, 1998'de Salt Lake City, Utah'ta kurulan, bugün Oticon ve Bernafon ile aynı çatı olan Demant Grubu'na bağlı bir markadır.",
        },
        {
          question: "Sonic hangi konuda öne çıkar?",
          answer: "Sonic, SoundDNA platformu ile karmaşık ses ortamlarında otomatik uyum sağlamaya yardımcı olan yaklaşımıyla tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Sonic Enchant nedir?",
          answer: "Enchant, SoundDNA platformu üzerine kurulu, Sonic'in en güncel ve en kapsamlı model ailesidir.",
        },
        {
          question: "Sonic Radiant kimler için uygundur?",
          answer: "Radiant, kanıtlanmış bir amplifikasyon sistemine sahip önceki nesil bir ailedir ve dengeli bir fiyat-performans arayan kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Sonic işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Sonic kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Sonic işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (Enchant veya Radiant), teknoloji seviyesi ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
};
