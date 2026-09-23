// FAQ hub for the Audifon brand page (/markalar/audifon). Renders through
// the shared BrandPageFaq component. The price question never states a
// figure — only the variables that shape price, per PRINCIPLES.md §5.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const audifonFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Audifon Hakkında Merak Edilenler",
  intro: "Audifon modelleri, teknolojileri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Audifon hangi ülkenin markası?",
          answer: "Audifon, Almanya'nın işitme akustiği alanındaki en büyük aile işletmesi KIND-Grubu'na bağlı, Kölleda/Thüringen'de üretilen Alman bir markadır.",
        },
        {
          question: "Audifon hangi konuda öne çıkar?",
          answer: "Audifon, tinnitus'a özel Sueno Pro çözümü ve Cosma Chip Technology tabanlı rega/sino serileriyle tanınır.",
        },
      ],
    },
    {
      label: "Modeller",
      items: [
        {
          question: "Audifon Sueno Pro nedir?",
          answer: "Sueno Pro, işitme kaybı ile tinnitus'u aynı cihazda birlikte ele alan, kişiselleştirilebilir bir maskeleme çözümüdür.",
        },
        {
          question: "Audifon rega ve sino arasındaki fark nedir?",
          answer: "rega serisi 18 kanala kadar WDRC işleme sunan üst segment aile, sino serisi ise 9 kanala kadar işleme sunan daha dengeli bir ailedir.",
        },
      ],
    },
    {
      label: "Teknoloji",
      items: [
        {
          question: "Cosma Chip Technology nedir?",
          answer: "Cosma Chip Technology, Audifon'un rega ve sino serilerinin temelini oluşturan, çok kanallı ses işleme çip teknolojisidir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Audifon işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Audifon kullanıcıları da bu destekten yararlanabilir.",
        },
        {
          question: "Audifon işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen aile (rega, sino veya Sueno Pro), kanal sayısı ve yerleşim tercihi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
};
