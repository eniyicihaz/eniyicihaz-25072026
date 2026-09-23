// FAQ hub for the /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi page.
// Renders through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price —
// same restraint every brand/category page's faq.ts uses. The
// sudden-onset question is answered with clear urgency, directing the
// reader to seek care promptly rather than schedule routinely.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const tekTarafliIsitmeKaybiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Tek Taraflı İşitme Kaybı Hakkında Merak Edilenler",
  intro: "Tek taraflı işitme kaybı, uygunluk kriterleri ve cihaz seçenekleri hakkında en çok sorulan sorular.",
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
          question: "Tek taraflı işitme kaybı nedir?",
          answer:
            "Bir kulakta normal veya normale yakın işitme sürerken diğer kulakta hafif ile çok ileri derece arasında değişebilen bir işitme kaybı olması durumudur.",
        },
        {
          question: "İşitme kaybım aniden başladı, ne yapmalıyım?",
          answer:
            "Ani başlayan tek taraflı işitme kaybı acil bir durum olabilir; vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmanız önerilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "CROS mu yoksa BiCROS mu bana uygun?",
          answer:
            "Bu, iyi duyan kulağınızın işitme durumuna bağlıdır. İyi duyan kulağınız normal işitiyorsa CROS, hafif bir kayıp varsa BiCROS değerlendirilebilir; kesin karar bir odyometrist tarafından belirlenir.",
        },
        {
          question: "Kötü duyan kulağıma standart bir işitme cihazı takılabilir mi?",
          answer:
            "Kayıp derecesine bağlı olarak bazı durumlarda değerlendirilebilir; ancak kayıp çok ileri düzeydeyse CROS/BiCROS gibi kablosuz aktarım sistemleri daha sık tercih edilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "CROS sistemine alışmak ne kadar sürer?",
          answer:
            "Uyum süreci kişiden kişiye değişir; yeni bir işitme deneyimine alışmak bazı kullanıcılar için birkaç hafta sürebilir.",
        },
        {
          question: "İyi duyan kulağımı da düzenli kontrol ettirmeli miyim?",
          answer:
            "Evet, iyi duyan kulağın işitme durumu da zamanla değişebilir; her iki kulak için de düzenli takip önemlidir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, CROS/BiCROS sistemlerini karşılıyor mu?",
          answer:
            "SGK desteği sistem türüne göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Tek taraflı sistem fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen sistem (CROS/BiCROS), marka ve model, teknoloji seviyesi ve ek özellikler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
