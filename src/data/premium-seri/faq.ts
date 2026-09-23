// FAQ hub for the /segmentler/premium-seri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The price question never states a
// figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const premiumSeriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Premium Seri Hakkında Merak Edilenler",
  intro: "Premium serinin kapsamı, uygunluğu ve fiyatı hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Size Uygun Seriyi Belirlemek İster misiniz?",
    points: ["Ücretsiz işitme testi", "Seri karşılaştırması", "Demo cihaz deneme", "Uzman danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Premium seri ne anlama gelir?",
          answer:
            "Bir markanın sunduğu en üst düzey teknolojiyi, en gelişmiş ses işleme algoritmalarını ve en kapsamlı bağlantı özelliklerini bir araya getiren ürün ailesini ifade eder.",
        },
        {
          question: "Premium seri her marka için aynı özellikleri mi sunar?",
          answer:
            "Hayır; premium serinin kapsamı markaya ve modele göre değişir, ancak genellikle markanın en güncel ve en kapsamlı teknolojisini temsil eder.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Premium seri herkese uygun mudur?",
          answer:
            "Hayır; ihtiyacınıza göre standart veya ekonomik seri de yeterli olabilir. Doğru seri, işitme testi ve ihtiyaç analiziyle belirlenir.",
        },
        {
          question: "Premium seri ile standart seri arasındaki temel fark nedir?",
          answer:
            "Premium seri genellikle daha gelişmiş ses işleme, daha kapsamlı bağlantı özellikleri ve daha fazla kişiselleştirme imkânı sunar.",
        },
      ],
    },
    {
      label: "Fiyat",
      items: [
        {
          question: "Premium seri fiyatları ne kadar farklıdır?",
          answer:
            "Fiyat farkı marka ve modele göre değişir; net fiyat bilgisi ihtiyaç değerlendirmesi sonrasında paylaşılır.",
        },
        {
          question: "SGK premium seri cihazları karşılıyor mu?",
          answer:
            "SGK desteği, seri seviyesine göre değil, sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
      ],
    },
    {
      label: "Karar",
      items: [
        {
          question: "Premium seriyi denemeden karar verebilir miyim?",
          answer:
            "Karar vermeden önce demo cihaz deneyerek premium serinin size sağladığı farkı değerlendirebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
